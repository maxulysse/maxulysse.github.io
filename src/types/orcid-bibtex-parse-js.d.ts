declare module "@orcid/bibtex-parse-js" {
    export type BibtexEntry = {
        citationKey: string;
        entryType?: string;
        entryTags?: Record<string, unknown>;
    };

    export interface BibtexParse {
        toJSON(input: string): BibtexEntry[];
    }

    const bibtexParse: BibtexParse;
    export default bibtexParse;
}
