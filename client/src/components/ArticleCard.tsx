import { Link } from 'react-router-dom';
import type { Article } from '../types';
import { formatDate } from '../utils/formatDate';
import { ArrowRight } from 'lucide-react';

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Link to={`/articles/${article.id}`}>
      <div className='border-2 bg-cream-card cursor-pointer hover:bg-cream-dark transition-colors'>
        <div className='p-4 border-b border-divider'>
          <div className='flex justify-between mb-2'>
            <span className='font-ui text-xs tracking-widest uppercase text-text-muted'>
              ● {article.category}
            </span>
            <span className='text-xs text-text-muted/90'>
              {formatDate(article.publishedAt)} ● {article.source}
            </span>
          </div>
          <h2 className='font-display text-2xl mb-2'>{article.title}</h2>
          <p className='font-ui text-sm leading-relaxed text-text-secondary'>
            {article.summary}
          </p>
        </div>

        {article.analysis && (
          <div className='p-4 border-b border-divider'>
            <p className='font-ui text-xs tracking-widest uppercase mb-2'>
              ▶ Opinia ornitorincilor
            </p>
            <p className='font-body italic text-text-secondary text-sm leading-relaxed border-l-2 border-yellow pl-3'>
              "{article.analysis.opinion}"
            </p>
          </div>
        )}

        <div className='px-4 py-3 flex justify-between items-center border-t border-divider/70'>
          <span className='font-ui text-xs font-semibold'>
            {article.source}
          </span>
          <button className='flex items-center gap-2 font-ui text-xs font-bold tracking-widest bg-black uppercase text-yellow px-4 py-2 cursor-pointer'>
            Citește
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
