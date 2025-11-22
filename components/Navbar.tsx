
import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Github, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../App';

// Abstract Geometric Logo
const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
    <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" className="text-slate-800 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-300"/>
    <path d="M20 4V36M4 20H36" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800 group-hover:text-emerald-500/30"/>
    <circle cx="20" cy="20" r="4" className="fill-emerald-500 group-hover:scale-125 transition-transform duration-300" />
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600 group-hover:animate-ping opacity-20"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'System', href: '#home' },
    { name: 'Architecture', href: '#about' },
    { name: 'Evolution', href: '#experience' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Creations', href: '#projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetId === '#home' ? 0 : elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="relative z-50 flex items-center gap-3 group"
          >
            <Logo />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none text-text group-hover:text-emerald-500 transition-colors">HASEEB</span>
              <span className="text-[10px] font-mono text-textDim tracking-[0.2em] group-hover:text-textDim transition-colors">ARCHITECT</span>
            </div>
          </a>

          {/* Desktop Menu - Floating Pill */}
          <div className={`hidden md:flex items-center px-2 py-2 rounded-full border transition-all duration-500 ${scrolled ? 'bg-surface/80 border-border backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent border-transparent'}`}>
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-5 py-2 text-sm font-medium text-textDim hover:text-primary hover:bg-border/50 rounded-full transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full text-textDim hover:text-primary hover:bg-border/50 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-emerald-400 rounded-full transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Connect
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-bg/95 backdrop-blur-3xl z-40 flex items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-bold text-textDim hover:text-primary hover:scale-110 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-1 bg-border rounded-full my-8"></div>
          <div className="flex gap-6 items-center">
            <button 
                onClick={toggleTheme}
                className="p-4 rounded-full bg-surface text-text border border-border"
              >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <a href="https://github.com/MuhammadHaseeb0070" className="p-4 rounded-full bg-surface text-text border border-border"><Github size={24} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
