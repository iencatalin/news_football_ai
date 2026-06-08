const API_URL = import.meta.env.VITE_API_URL;

export const getNews = async () => {
  const response = await fetch(`${API_URL}/api/news`, { cache: 'no-store' });
  return response.json();
};

export const getAllNews = async () => {
  const response = await fetch(`${API_URL}/api/news/all`, {
    cache: 'no-store',
  });
  return response.json();
};
