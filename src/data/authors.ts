export const Authors = {
  maxulysse: {
    name: "Maxime U. Garcia",
    twitter: "gau",
    github: "maxulysse",
  },
} as const;

export type AuthorKey = keyof typeof Authors;

export function getAuthor(key: string | undefined) {
  return Authors[(key as AuthorKey) ?? "maxulysse"] ?? Authors.maxulysse;
}
