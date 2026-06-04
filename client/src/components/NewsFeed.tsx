import type { Article } from '../types';
import ArticleCard from './ArticleCard';

interface Props {
  articles: Article[];
}
const NewsFeed = ({ articles }: Props) => {
  return (
    <div className='max-w-5xl mx-auto py-10 grid grid-cols-1 gap-6'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
