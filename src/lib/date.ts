/**
 * Date formatting utilities.
 */

/** ISO date separator character */
export const ISO_DATE_SEPARATOR = "T";

/**
 * Format a date as YYYY-MM-DD string.
 */
export function formatDateIso(date: Date): string {
    return date.toISOString().split(ISO_DATE_SEPARATOR)[0];
}

/**
 * Format a date for display in a human-readable format.
 */
export function formatDateLocal(date: Date, locale = "en-US"): string {
    return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
