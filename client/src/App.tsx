import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import type { Article } from './types';
import { getNews } from './services/api';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home articles={articles} />} />
        <Route path='/articles' element={<Articles articles={articles} />} />
        <Route
          path='/articles/:id'
          element={<ArticlePage articles={articles} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
