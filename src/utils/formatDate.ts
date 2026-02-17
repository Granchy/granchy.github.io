/**
 * Format a YYYY-MM-DD date string as "February 16, 2026".
 * Parses as local date to avoid timezone shifting the day.
 */
export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number)
  // month is 0-indexed in Date constructor
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
