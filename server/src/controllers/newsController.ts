import { Request, Response } from 'express';
import { fetchAllNews } from '../services/rssService';
import { generateAnalysis } from '../services/geminiService';
import { loadNews, saveNews } from '../utils/newsStorage';
import { Article, Analysis } from '../types';

export interface ArticleWithAnalysis extends Article {
  analysis?: Analysis;
}

let cachedNews: ArticleWithAnalysis[] = [];
const MAX_HISTORY = 20;

export const getNews = (req: Request, res: Response) => {
  const sorted = [...cachedNews].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  res.json(sorted.slice(0, 10));
};

export const initNews = async () => {
  try {
    cachedNews = await loadNews();
  } catch (err) {
    console.error('Error loading JSON:', err);
    cachedNews = [];
  }
};

export const refreshNews = async () => {
  try {
    const articles = await fetchAllNews();

    const latestRaw = articles
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .slice(0, 5);

    const existingMap = new Map(cachedNews.map((a) => [a.id, a]));
    const updatedNewbies: ArticleWithAnalysis[] = [];

    for (let i = 0; i < latestRaw.length; i++) {
      const article = latestRaw[i];
      const existing = existingMap.get(article.id);

      if (existing?.analysis) {
        updatedNewbies.push(existing);
        continue;
      }

      const analysis = await generateAnalysis(article);

      updatedNewbies.push({ ...article, analysis });

      if (i < latestRaw.length - 1) {
        await new Promise((r) => setTimeout(r, 4500));
      }
    }

    const allArticlesMap = new Map<string, ArticleWithAnalysis>();

    updatedNewbies.forEach((a) => allArticlesMap.set(a.id, a));

    cachedNews.forEach((a) => {
      if (!allArticlesMap.has(a.id)) {
        allArticlesMap.set(a.id, a);
      }
    });

    cachedNews = Array.from(allArticlesMap.values())
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .slice(0, MAX_HISTORY);

    await saveNews(cachedNews);
  } catch (err) {
    console.error('❌ Refresh error:', err);
  }
};

export const getCachedCount = () => cachedNews.length;
