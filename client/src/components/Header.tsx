import { formatDate } from '../utils/formatDate';
const Header = () => {
  return (
    <header>
      <div className='max-w-full mx-5 flex items-center justify-between py-4 text-xs text-text-secondary/60'>
        <p className='uppercase tracking-wide text-xs md:text-sm'>
          {formatDate(new Date())} <span>Nr. 1.245</span>
        </p>
        <p className='text-xs md:text-sm hidden md:block'>
          Ediția de dimineață · 5 știri noi
        </p>
      </div>
      <hr className='max-w-full mx-5 border-black border' />
      <div className='text-center py-2 text-sm md:text-base font-light uppercase text-text-primary tracking-wide'>
        "Nu pe vorbe, pe fapte, adică trebuie sa știi ce să vorbești"
      </div>
      <h1 className='text-5xl md:text-7xl font-bold text-center text-slate-900 tracking-[0.7rem]'>
        Ornitorincii
      </h1>
      <div className='flex items-center justify-center max-w-full mx-5 gap-3 py-2'>
        <hr className='flex-1 border-black border' />

        <div className='flex items-center gap-3 text-sm md:text-base font-light uppercase tracking-wide text-text-primary'>
          <span>✦</span>
          <span>știri</span>
          <span>•</span>
          <span>opinii</span>
          <span>•</span>
          <span>analize</span>
          <span>✦</span>
        </div>

        <hr className='flex-1 border-black border' />
      </div>
    </header>
  );
};

export default Header;
