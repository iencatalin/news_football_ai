export interface Article {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  sourceUrl: string;
  analysis?: Analysis;
}

export interface Analysis {
  opinion: string;
  stats: string;
  prediction: string;
}
