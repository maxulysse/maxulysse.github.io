import bibtexParse, { type BibtexEntry } from "@orcid/bibtex-parse-js";
import bibContent from "../data/publications.bib?raw";

type PublicationLink = {
    href: string;
    label: string;
    iconClass?: string;
    text?: string;
};

export type Publication = {
    id: string;
    section: string;
    authors: string;
    title: string;
    venue: string;
    date: string;
    links: PublicationLink[];
};

type NormalizedTags = Record<string, string | undefined>;

const sectionDefs = [
    {
        id: "thesis",
        label: "Thesis",
        icon: "fa-solid fa-graduation-cap",
        sourceSections: ["thesis"],
    },
    {
        id: "research-outputs",
        label: "Articles",
        icon: "fa-solid fa-file-lines",
        sourceSections: [
            "articles",
            "correspondences",
            "preprints",
            "chapters",
        ],
    },
    {
        id: "talks",
        label: "Talks",
        icon: "fa-solid fa-comments",
        sourceSections: ["talks"],
    },
    {
        id: "posters",
        label: "Posters",
        icon: "fa-solid fa-file-image",
        sourceSections: ["posters"],
    },
    {
        id: "outreach",
        label: "Outreach",
        icon: "fa-solid fa-users",
        sourceSections: ["scientific-animation-workshop"],
    },
] satisfies { id: string; label: string; icon: string; sourceSections: string[] }[];

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const entries = bibtexParse.toJSON(bibContent);

function normalizeTags(entry: BibtexEntry): NormalizedTags {
    const tags = entry.entryTags ?? {};
    return Object.fromEntries(
        Object.entries(tags).map(([key, value]) => [
            key.toLowerCase(),
            String(value ?? "").trim(),
        ]),
    ) as NormalizedTags;
}

function formatAuthors(author?: string): string {
    if (!author) return "";
    const authors = author.split(/\s+and\s+/i).map((a) => a.trim());
    const first = authors[0];
    return authors.length > 1 ? `${first} et al.` : first;
}

const linkSpecs: {
    key: string;
    href?: (value: string) => string;
    iconClass: string;
    label: string;
}[] = [
    { key: "pubmed", href: (v) => `https://pubmed.ncbi.nlm.nih.gov/${v}/`, iconClass: "ai ai-pubmed", label: "PubMed" },
    { key: "doi", href: (v) => `https://doi.org/${v}`, iconClass: "ai ai-doi", label: "DOI" },
    { key: "url", iconClass: "fa-solid fa-earth-europe", label: "Link" },
    { key: "pdf", iconClass: "fa-solid fa-file-pdf", label: "PDF" },
    { key: "github", iconClass: "fab fa-github", label: "GitHub" },
    { key: "slides", iconClass: "fa-solid fa-chalkboard-user", label: "Slides" },
    { key: "video", iconClass: "fab fa-youtube", label: "Video" },
];

function buildLinks(tags: NormalizedTags): PublicationLink[] {
    const links: PublicationLink[] = [];

    for (const { key, href, iconClass, label } of linkSpecs) {
        const value = tags[key];
        if (value) {
            links.push({ href: href ? href(value) : value, iconClass, label });
        }
    }

    if (tags.event_url && tags.event) {
        links.push({ href: tags.event_url, text: tags.event, label: tags.event });
    }

    return links;
}

function buildVenue(tags: NormalizedTags): string {
    const venueParts = [
        tags.journal,
        tags.booktitle,
        tags.event_url ? undefined : tags.event,
        tags.location,
    ].filter(Boolean);

    const details = [
        tags.volume && `vol. ${tags.volume}`,
        tags.number && `no. ${tags.number}`,
        tags.pages && `pp. ${tags.pages}`,
    ].filter(Boolean);

    if (details.length > 0) {
        venueParts.push(details.join(", "));
    }

    return venueParts.join(", ");
}

function buildDate(tags: NormalizedTags): string {
    if (tags.date) return tags.date;
    const month = months.indexOf(tags.month?.slice(0, 3).toLowerCase() ?? "") + 1;
    return month ? `${tags.year}-${String(month).padStart(2, "0")}` : (tags.year ?? "");
}

const publications: Publication[] = entries
    .map((entry) => {
        const tags = normalizeTags(entry);
        return {
            id: entry.citationKey,
            section: tags.section ?? "",
            authors: formatAuthors(tags.author),
            title: tags.title ?? "",
            venue: buildVenue(tags),
            date: buildDate(tags),
            links: buildLinks(tags),
        };
    })
    .filter((publication) => publication.section)
    // ISO dates sort as text; a bare year sorts after its months, like month 0 did.
    .sort((a, b) => b.date.localeCompare(a.date));

/** The CV sections that have publications, each with its publications, newest first. */
export const publicationSections = sectionDefs
    .map((section) => ({
        ...section,
        publications: publications.filter((publication) =>
            section.sourceSections.includes(publication.section),
        ),
    }))
    .filter((section) => section.publications.length > 0);
