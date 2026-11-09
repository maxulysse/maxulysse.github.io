/**
 * Date formatting utilities.
 */

/**
 * Format a date as YYYY-MM-DD string.
 */
export function formatDateIso(date: Date): string {
    return date.toISOString().split("T")[0];
}
