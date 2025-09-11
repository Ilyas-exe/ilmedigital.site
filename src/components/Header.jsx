import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.webp'; // Step 1: Import the logo image

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: 'offre', text: 'Notre Offre' },
        { to: 'travail', text: 'Notre Travail' },
        { to: 'processus', text: 'Notre Processus' },
        { to: 'contact', text: 'Contact' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Step 2: Use the imported logo in an <img> tag */}
                    <Link to="accueil" smooth={true} duration={500} className="cursor-pointer">
                        <img src={logo} alt="ilme Digital Logo" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer text-jet hover:text-orange transition-colors"
                                activeClass="text-orange"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-jet focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="block py-2 px-6 text-sm text-jet hover:bg-gray-100"
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