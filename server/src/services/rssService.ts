import Parser from 'rss-parser';
import { Article } from '../types';
import { sanitizeSummary } from '../utils/sanitizeSummary';

const parser = new Parser();

const FEEDS_URL = [
  {
    url: 'https://www.sport.ro/rss',
    source: 'Sport.ro',
  },
  {
    url: 'https://www.digisport.ro/rss',
    source: 'Digisport',
  },
  { url: 'https://www.prosport.ro/feed', source: 'ProSport' },
];

export const fetchAllNews = async (): Promise<Article[]> => {
  const results = await Promise.all(
    FEEDS_URL.map(async ({ url, source }) => {
      try {
        const feed = await parser.parseURL(url);
        return feed.items
          .filter((item) => item.title && item.link)
          .map((item) => ({
            id: Buffer.from(item.link ?? '').toString('base64url'),
            title: item.title ?? '',
            summary: sanitizeSummary(item.contentSnippet ?? ''),
            source,
            sourceUrl: item.link ?? '',
            category: item.categories?.[0] ?? 'Fotbal',
            publishedAt: item.pubDate ?? '',
          }));
      } catch (err) {
        console.error(`Failed to fetch news from ${source}:`, err);
        return [];
      }
    }),
  );
  return results.flat();
};
