import ArticleCard from '../components/ArticleCard';
import type { Article } from '../types';

interface Props {
  articles: Article[];
}

const Articles = ({ articles }: Props) => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <h1 className='text-5xl font-bold text-center font-ui text-slate-900'>
        Articole
      </h1>
      <div className='grid grid-cols-1 gap-6 pt-4'>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
