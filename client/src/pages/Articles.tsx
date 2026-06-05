import ArticleCard from '../components/ArticleCard';
import { getAllNews } from '../services/api';
import { useEffect, useState } from 'react';
import type { Article } from '../types';

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews()
      .then((data) => setArticles(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='text-center py-20 text-xl font-light text-gray-500'>
        Se încarcă știrile...
      </div>
    );
  }
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <h1 className='text-4xl font-bold text-center font-ui text-slate-900'>
        ✦ Toate Știrile · {articles.length} articole ✦
      </h1>
      <div className='grid grid-cols-1 gap-6 mt-10'>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
