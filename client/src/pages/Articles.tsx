import ArticleCard from '../components/ArticleCard';
import { mockArticles } from '../data/mockArticles';

const Articles = () => {
  return (
    <>
      <h1> Articole</h1>
      <div>
        <ArticleCard article={mockArticles[0]} />
      </div>
    </>
  );
};

export default Articles;
