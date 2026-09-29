import bibtexParse from "@orcid/bibtex-parse-js";
import bibContent from "../data/publications.bib?raw";

type BibEntry = {
    citationKey: string;
    entryTags?: Record<string, unknown>;
};

export type PublicationSection = {
    id: string;
    label: string;
    icon: string;
    sourceSections: string[];
};

type PublicationLink = {
    href: string;
    label: string;
    iconClass?: string;
    text?: string;
};

export type Publication = {
    id: string;
    section: string;
    year: number;
    month: number;
    authors: string;
    title: string;
    venue: string;
    date: string;
    links: PublicationLink[];
};

type NormalizedTags = Record<string, string | undefined>;

export const publicationSections: PublicationSection[] = [
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
];

const monthOrder: Record<string, number> = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
};

let entries: BibEntry[] = [];
try {
    entries = bibtexParse.toJSON(bibContent) as BibEntry[];
} catch {
    console.error("Failed to parse bibtex content");
    entries = [];
}

function normalizeTags(entry: BibEntry): NormalizedTags {
    const tags = entry.entryTags ?? {};
    return Object.fromEntries(
        Object.entries(tags).map(([key, value]) => [
            key.toLowerCase(),
            String(value ?? "").trim(),
        ]),
    ) as NormalizedTags;
}

function parseMonth(month?: string): number {
    if (!month) return 0;

    const numeric = Number.parseInt(month, 10);
    if (!Number.isNaN(numeric) && numeric >= 1 && numeric <= 12) {
        return numeric;
    }

    const normalized = month.toLowerCase().slice(0, 3);
    return monthOrder[normalized] ?? 0;
}

function parseYear(year?: string): number {
    const parsed = Number.parseInt(year ?? "", 10);
    return Number.isNaN(parsed) ? 0 : parsed;
}

function formatAuthors(author?: string): string {
    if (!author) return "";
    const authors = author.split(/\s+and\s+/i).map((a) => a.trim());
    const first = authors[0];
    return authors.length > 1 ? `${first} et al.` : first;
}

function toPubMedUrl(pubmed: string): string {
    return `https://pubmed.ncbi.nlm.nih.gov/${pubmed}/`;
}

function toDoiUrl(doi: string): string {
    return `https://doi.org/${doi}`;
}

function buildLinks(tags: NormalizedTags): PublicationLink[] {
    const specs: Array<{
        key: string;
        href: (value: string) => string;
        iconClass: string;
        label: string;
    }> = [
        { key: "pubmed", href: toPubMedUrl, iconClass: "ai ai-pubmed", label: "PubMed" },
        { key: "doi", href: toDoiUrl, iconClass: "ai ai-doi", label: "DOI" },
        { key: "url", href: (v) => v, iconClass: "fa-solid fa-earth-europe", label: "Link" },
        { key: "pdf", href: (v) => v, iconClass: "fa-solid fa-file-pdf", label: "PDF" },
        { key: "github", href: (v) => v, iconClass: "fab fa-github", label: "GitHub" },
        { key: "slides", href: (v) => v, iconClass: "fa-solid fa-chalkboard-user", label: "Slides" },
        { key: "video", href: (v) => v, iconClass: "fab fa-youtube", label: "Video" },
    ];

    const links: PublicationLink[] = [];

    for (const spec of specs) {
        const value = tags[spec.key];
        if (value) {
            links.push({ href: spec.href(value), iconClass: spec.iconClass, label: spec.label });
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

function toIsoDateString(value?: string): string {
    if (!value) return "";

    const normalized = value.trim().replace(/\//g, "-");
    const match = normalized.match(/^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?$/);
    if (!match) return value;

    const [, year, month, day] = match;
    if (!month) return year;

    const monthInt = Number.parseInt(month, 10);
    if (Number.isNaN(monthInt) || monthInt < 1 || monthInt > 12) return value;
    const monthPadded = String(monthInt).padStart(2, "0");

    if (!day) return `${year}-${monthPadded}`;

    const dayInt = Number.parseInt(day, 10);
    if (Number.isNaN(dayInt) || dayInt < 1 || dayInt > 31) return value;
    return `${year}-${monthPadded}-${String(dayInt).padStart(2, "0")}`;
}

function buildDate(tags: NormalizedTags): string {
    if (tags.date) return toIsoDateString(tags.date);

    const year = parseYear(tags.year);
    const month = parseMonth(tags.month);

    if (year && month) return `${year}-${String(month).padStart(2, "0")}`;
    if (year) return String(year);
    return "";
}

const publications: Publication[] = entries
    .map((entry: BibEntry) => {
        const tags = normalizeTags(entry);
        return {
            id: entry.citationKey,
            section: tags.section ?? "",
            year: parseYear(tags.year),
            month: parseMonth(tags.month),
            authors: formatAuthors(tags.author),
            title: tags.title ?? "",
            venue: buildVenue(tags),
            date: buildDate(tags),
            links: buildLinks(tags),
        };
    })
    .filter((publication: Publication) => publication.section)
    .sort((a: Publication, b: Publication) => {
        if (a.year !== b.year) return b.year - a.year;
        return b.month - a.month;
    });

export const publicationsBySection: Record<string, Publication[]> =
    Object.fromEntries(
        publicationSections.map((section) => [
            section.id,
            publications.filter((publication: Publication) =>
                section.sourceSections.includes(publication.section),
            ),
        ]),
    );
