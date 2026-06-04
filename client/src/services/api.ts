const API_URL = 'http://localhost:3001';

export const getNews = async () => {
  const response = await fetch(`${API_URL}/api/news`);
  const data = await response.json();
  return data;
};
