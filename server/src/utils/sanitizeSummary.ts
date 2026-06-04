export const sanitizeSummary = (summary: string): string => {
  return summary
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8211;/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/The post .* appeared first on .*\.?/i, '')
    .trim();
};
