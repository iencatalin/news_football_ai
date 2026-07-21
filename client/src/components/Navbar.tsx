import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface Props {
  articles: Article[];
}

const Navbar = ({ articles }: Props) => {
  return (
    <>
      <nav className='bg-black text-white border-y-2 border-yellow'>
        <div className='max-w-7xl mx-auto px-4'>
          <ul className='flex items-center justify-center gap-8 py-3 font-ui uppercase tracking-widest text-sm'>
            <li>
              <Link to='/' className='transition-colors hover:text-yellow'>
                Acasă
              </Link>
            </li>

            <li>
              <Link
                to='/articles'
                className='transition-colors hover:text-yellow'
              >
                Toate știrile
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='bg-yellow text-black border-b-2 border-black'>
        <div className='max-w-7xl mx-auto px-4 py-2 flex items-center gap-3'>
          <span className='bg-red-600 text-white px-2 py-1 text-xs font-bold animate-pulse'>
            LIVE
          </span>

          <div className='overflow-hidden whitespace-nowrap'>
            <div className='animate-[marquee_30s_linear_infinite]'>
              {articles
                .map((article) => article.title.slice(0, 60))
                .join('  |  ')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
