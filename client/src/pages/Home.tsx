import NewsFeed from '../components/NewsFeed';
import type { Article } from '../types';

interface Props {
  articles: Article[];
}
const Home = ({ articles }: Props) => {
  return (
    <>
      <NewsFeed articles={articles} />
    </>
  );
};

export default Home;
