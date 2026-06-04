export interface Article {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  sourceUrl: string;
}

export interface Analysis {
  opinion: string;
  stats: string;
  prediction: string;
}
