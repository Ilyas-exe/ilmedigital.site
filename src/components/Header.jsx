import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.webp';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'offre', text: 'Notre Offre' },
    { to: 'travail', text: 'Notre Travail' },
    { to: 'processus', text: 'Notre Processus' },
    { to: 'contact', text: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white/80'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="accueil" smooth={true} duration={500} className="cursor-pointer">
            <img src={logo} alt="ilme Digital Logo" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to} to={link.to} spy={true} smooth={true} offset={-70} duration={500}
                className="cursor-pointer text-jet hover:text-orange transition-colors"
                activeClass="text-orange font-semibold"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-jet focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md`}>
        {navLinks.map((link) => (
          <Link
            key={link.to} to={link.to} smooth={true} offset={-70} duration={500}
            className="block py-3 px-6 text-sm text-jet hover:bg-gray-100 hover:text-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;