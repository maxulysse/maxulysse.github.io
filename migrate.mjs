#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrateJekyllToPosts() {
  const jekyllPostsDir = path.join(__dirname, '_posts');
  const astroContentDir = path.join(__dirname, 'src', 'content', 'blog');

  // Ensure destination directory exists
  if (!fs.existsSync(astroContentDir)) {
    fs.mkdirSync(astroContentDir, { recursive: true });
  }

  // Recursively find all markdown files in _posts
  function getAllMarkdownFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(getAllMarkdownFiles(fullPath));
      } else if (item.endsWith('.md') && !item.endsWith('slides.md')) {
        files.push(fullPath);
      } else if (item === 'index.html') {
        // Also include index.html files (presentations/slides with frontmatter)
        files.push(fullPath);
      }
    }
    return files;
  }

  const markdownFiles = getAllMarkdownFiles(jekyllPostsDir);
  let migratedCount = 0;

  console.log(`Found ${markdownFiles.length} markdown files to migrate...`);
  console.log(`Files found:`, markdownFiles.map(f => path.relative(jekyllPostsDir, f)).slice(0, 40));

  for (const filePath of markdownFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');

      let year, slug;
      const filename = path.basename(filePath, path.extname(filePath));
      const dirName = path.basename(path.dirname(filePath));

      // Handle both traditional .md files and index.html files
      if (filename === 'index') {
        // index.html file - extract year and slug from parent directory
        // Pattern: YYYY-MM-DD-title
        const dirMatch = dirName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
        if (dirMatch) {
          const [, dirYear, dirMonth, dirDay, titleSlug] = dirMatch;
          year = dirYear;
          // For presentations, include the date in the slug to avoid collisions
          slug = `${dirYear}-${dirMonth}-${dirDay}-${titleSlug.toLowerCase().replace(/\s+/g, '-')}`;
        } else {
          // No match on parent directory, skip
          console.log(`⊘ Skipped (no date in dirname): ${path.relative(jekyllPostsDir, filePath)}`);
          continue;
        }
      } else {
        // Traditional .md file
        const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
        if (!match) {
          console.log(`⊘ Skipped (invalid filename): ${path.relative(jekyllPostsDir, filePath)}`);
          continue;
        }
        const [, fileYear, , , titleSlug] = match;
        year = fileYear;
        slug = titleSlug.toLowerCase().replace(/\s+/g, '-');
      }

      // Parse frontmatter
      // Handle both formats: with content after (md files) and without (html files)
      let frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!frontmatterMatch) {
        // Try format without content after (html presentations)
        frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\s*$/);
      }

      if (!frontmatterMatch) {
        console.log(`⊘ Skipped (no frontmatter): ${path.relative(jekyllPostsDir, filePath)}`);
        continue;
      }

      if (frontmatterMatch) {
        const frontmatterStr = frontmatterMatch[1];
        // frontmatterMatch[2] might be content or undefined (for html-only frontmatter)
        let postContent = frontmatterMatch[2] || '';

        // For presentations (index.html), merge slides.md content if frontmatter-only
        if (filename === 'index' && !postContent) {
          // Try to find and include slides.md content
          const slidesMdPath = path.join(path.dirname(filePath), 'slides.md');
          if (fs.existsSync(slidesMdPath)) {
            const slidesContent = fs.readFileSync(slidesMdPath, 'utf-8');
            // Remove the opening `<section...>` wrapper if it exists
            postContent = slidesContent.replace(/<section[^>]*>\n*/, '').replace(/<\/section>/, '').trim();
          }
        }

          // Parse YAML frontmatter
          const frontmatter = {};
          const lines = frontmatterStr.split('\n');

          let i = 0;
          while (i < lines.length) {
            const line = lines[i];
            if (!line.trim()) {
              i++;
              continue;
            }

            const colonIndex = line.indexOf(':');
            if (colonIndex > -1) {
              const key = line.substring(0, colonIndex).trim();
              const value = line.substring(colonIndex + 1).trim();

              if (key === 'date') {
                // Convert Jekyll date format to ISO
                frontmatter.date = new Date(value).toISOString().split('T')[0];
              } else if (key === 'tags') {
                // Handle tags array - can be inline [tag1, tag2] or multi-line
                if (value.startsWith('[')) {
                  // Inline format: [tag1, tag2]
                  frontmatter.tags = value
                    .replace(/[\[\]]/g, '')
                    .split(',')
                    .map(t => t.trim().toLowerCase());
                } else if (!value) {
                  // Multi-line format starting on next line
                  const tags = [];
                  let j = i + 1;
                  while (j < lines.length) {
                    const tagLine = lines[j];
                    if (tagLine.startsWith('  - ')) {
                      tags.push(tagLine.substring(4).trim().toLowerCase());
                      j++;
                    } else if (!tagLine.startsWith('  ') || tagLine.trim() === '') {
                      break;
                    } else {
                      j++;
                    }
                  }
                  if (tags.length > 0) {
                    frontmatter.tags = tags;
                    i = j - 1; // Move main loop forward
                  }
                }
              } else if (key === 'image') {
                // Handle image object (nested YAML)
                if (!value) {
                  i++;
                  while (i < lines.length) {
                    const imgLine = lines[i];
                    if (imgLine.startsWith('  path:')) {
                      const pathMatch = imgLine.match(/path:\s*['"]?([^'"]+)['"]?/);
                      if (pathMatch) {
                        frontmatter.image = { path: pathMatch[1] };
                      }
                      break;
                    } else if (!imgLine.startsWith('  ')) {
                      break;
                    }
                    i++;
                  }
                }
              } else if (value.startsWith('"') && value.endsWith('"')) {
                frontmatter[key] = value.slice(1, -1);
              } else if (value === 'true' || value === 'false') {
                frontmatter[key] = value === 'true';
              } else if (value) {
                frontmatter[key] = value;
              }
            }
            i++;
          }

          // Handle image path if it exists
          const imagePathMatch = frontmatterStr.match(/path:\s*['"]([^'"]+)['"]/);
          if (imagePathMatch) {
            frontmatter.image = { path: imagePathMatch[1] };
          }

          // Ensure date is in ISO format
          if (frontmatter.date && typeof frontmatter.date === 'string') {
            if (frontmatter.date.includes(':')) {
              const dateObj = new Date(frontmatter.date);
              frontmatter.date = dateObj.toISOString().split('T')[0];
            }
          }

          // Create new frontmatter as Astro expects it
          const newFrontmatter = `---
title: ${JSON.stringify(frontmatter.title || slug)}
description: ${JSON.stringify(frontmatter.description || '')}
date: ${frontmatter.date || `${year}-01-01`}
${frontmatter.author ? `author: ${JSON.stringify(frontmatter.author)}` : ''}
${frontmatter.tags && frontmatter.tags.length > 0 ? `tags: [${frontmatter.tags.map(t => JSON.stringify(t)).join(', ')}]` : ''}
${frontmatter.image ? `image:\n  path: ${JSON.stringify(frontmatter.image.path)}` : ''}
---

${postContent}`;

          // Create year subdirectories for organization
          const yearDir = path.join(astroContentDir, year);
          if (!fs.existsSync(yearDir)) {
            fs.mkdirSync(yearDir, { recursive: true });
          }

          // Write new file
          const newFilePath = path.join(yearDir, `${slug}.md`);
          fs.writeFileSync(newFilePath, newFrontmatter);

          migratedCount++;
          console.log(`✓ Migrated: ${slug}`);
        }
    } catch (error) {
      console.error(`Error migrating ${filePath}:`, error);
    }
  }

  console.log(`\n✅ Migration complete! ${migratedCount} posts migrated.`);
}

migrateJekyllToPosts().catch(console.error);
