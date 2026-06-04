import { useNavigate, useParams } from 'react-router-dom';
import type { Article } from '../types';
import { formatDate } from '../utils/formatDate';
import { ArrowLeft } from 'lucide-react';

interface Props {
  articles: Article[];
}
const ArticlePage = ({ articles }: Props) => {
  const { id } = useParams();

  const article = articles.find((a) => a.id === id);

  const navigate = useNavigate();

  if (!article) {
    return <p>Articolul nu a fost găsit.</p>;
  }
  return (
    <article className='max-w-7xl mx-auto py-12 px-4'>
      <button
        onClick={() => navigate(-1)}
        className='mb-8 flex items-center gap-2 text-sm font-ui uppercase tracking-wider  bg-yellow text-text-secondary font-semibold px-3 py-2 hover:opacity-70 transition cursor-pointer'
      >
        <ArrowLeft className='w-4 h-4' />
        Înapoi
      </button>
      <span className='font-ui text-xs uppercase tracking-[0.25em] text-text-muted'>
        ● {article.category}
      </span>

      <h1 className='text-2xl md:text-4xl font-display mt-4 mb-6 leading-tight'>
        {article.title}
      </h1>

      <div className='flex items-center gap-3 text-sm text-text-muted mb-8'>
        <span>Sursa: {article.source}</span>
        <span>•</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>

      <div className='h-px bg-black/20 mb-10' />

      <p className='text-lg leading-relaxed text-text-primary mb-12'>
        {article.summary}
      </p>

      {article.analysis && (
        <section className='overflow-hidden rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_#000]'>
          <div className='bg-yellow px-8 py-5'>
            <h2 className='font-ui text-xl font-bold flex items-center gap-2'>
              ✦ Analiza Ornitorincilor
            </h2>

            <p className='text-sm opacity-80 mt-1'>
              Generată de AI · opinie de fan, nu de ziarist
            </p>
          </div>

          <div className='bg-text-secondary text-white p-8 space-y-10'>
            <div>
              <p className='font-ui text-xs uppercase tracking-widest text-yellow mb-3'>
                📊 De știut
              </p>

              <p className='text-xl leading-relaxed'>
                {article.analysis.stats}
              </p>
            </div>

            <div className='border-l-4 border-yellow pl-6'>
              <p className='font-ui text-xs uppercase tracking-widest text-yellow mb-3'>
                💭 Opinia ornitorincilor
              </p>

              <p className='text-xl italic leading-relaxed'>
                "{article.analysis.opinion}"
              </p>
            </div>

            <div>
              <p className='font-ui text-xs uppercase tracking-widest text-yellow mb-3'>
                🔮 Predicție
              </p>

              <p className='text-xl leading-relaxed'>
                {article.analysis.prediction}
              </p>
            </div>
          </div>
        </section>
      )}

      <div className='flex items-center justify-between mt-12 p-4 text-sm text-slate-800 border'>
        Citește articolul complet pe {article.source}
        <a
          href={article.sourceUrl}
          className='bg-yellow text-text-secondary font-semibold px-3 py-2 hover:opacity-70 transition cursor-pointer'
          target='_blank'
          rel='noopener noreferrer'
        >
          Articol original
        </a>
      </div>
    </article>
  );
};

export default ArticlePage;
