const Footer = () => {
  return (
    <div className='bg-black text-cream w-full py-6'>
      <div className='max-w-7xl mx-auto'>
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} Ornitorincii. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
