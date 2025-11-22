import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <a 
          href="#home" 
          onClick={scrollToTop}
          className="text-2xl font-bold font-mono tracking-tighter mb-4 md:mb-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-emerald-500">&lt;</span>
          <span className="text-slate-200">MH</span>
          <span className="text-cyan-500">/&gt;</span>
        </a>
        
        <div className="text-slate-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Muhammad Haseeb. All rights reserved.</p>
          <p className="mt-1">Engineered with React, Tailwind & Systems Thinking.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;