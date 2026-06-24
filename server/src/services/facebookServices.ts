import { Article, Analysis } from '../types';

const PAGE_ID = process.env.FB_PAGE_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export interface ArticleWithAnalysis extends Article {
  analysis?: Analysis;
}

const facebookQueue: ArticleWithAnalysis[] = [];
let isProcessing = false;

const POSTING_DELAY = 10 * 60 * 1000;

export const postToFacebook = async (article: ArticleWithAnalysis) => {
  if (!article.analysis) return;

  facebookQueue.push(article);

  if (!isProcessing) {
    processQueue();
  }
};

const processQueue = async () => {
  if (facebookQueue.length === 0) {
    isProcessing = false;
    return;
  }

  isProcessing = true;

  const article = facebookQueue.shift();
  if (!article) return;

  await executeFacebookPost(article);

  if (facebookQueue.length > 0) {
    setTimeout(processQueue, POSTING_DELAY);
  } else {
    isProcessing = false;
  }
};

const executeFacebookPost = async (article: ArticleWithAnalysis) => {
  const message = `
 

  OPINIA ORNITORINCULUI:
${article.analysis?.opinion}

${article.analysis?.prediction}

---
#ornitorincii #fotbal #analizafotbal #predicții #oracolulAI #FotbalEntertainment #ComediePeTeren #AI_DeCapulMeu #UmorInGhete
`.trim();

  try {
    const url = `https://graph.facebook.com/v22.0/${PAGE_ID}/feed?access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        message: message,
      }),
    });

    const data = (await response.json()) as any;

    if (data.error) {
      console.error(
        `Facebook error pentru "${article.title.slice(0, 40)}":`,
        data.error.message,
      );
    } else {
      console.log(
        `Postat pe Facebook: "${article.title.slice(0, 40)}" (ID: ${data.id})`,
      );
    }
  } catch (err) {
    console.error('Eroare de rețea la postarea pe Facebook:', err);
  }
};
