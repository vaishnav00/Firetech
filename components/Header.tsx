
import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Logo: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2 cursor-pointer">
    <span className="text-3xl font-bold text-fire-red bg-dark-gray px-2 py-0.5">F</span>
    <span className="text-3xl font-bold text-dark-gray">IT</span>
  </a>
);


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  
  const isHeaderSolid = isScrolled || currentPage !== 'home';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderSolid ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo setCurrentPage={setCurrentPage} />
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href="#"
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} 
              className={`font-medium hover:text-fire-red transition-colors duration-300 ${currentPage === link.id ? 'text-fire-red' : 'text-dark-gray'}`}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-gray focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href="#"
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} 
                className={`font-medium hover:text-fire-red transition-colors duration-300 ${currentPage === link.id ? 'text-fire-red' : 'text-dark-gray'}`}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
