import { Article, Analysis } from '../types';

const PAGE_ID = process.env.FB_PAGE_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export interface ArticleWithAnalysis extends Article {
  analysis?: Analysis;
}
export const postToFacebook = async (article: ArticleWithAnalysis) => {
  if (!article.analysis) return;

  const message = `
  "${article.title}"

  "${article.analysis.opinion}"

  " ${article.analysis.prediction}"
  #fotbal #ornitorincii
  `.trim();

  try {
    const response = await fetch(`https://graph.facebook.com/${PAGE_ID}/feed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        access_token: ACCESS_TOKEN,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error(`Eroare Facebook pentru "${article.title}":`, data.error);
    } else {
      console.log(`Postat pe Facebook: "${article.title}"`);
    }
  } catch (err) {
    console.error('Eroare Facebook:', err);
  }
};
