import React, { useState } from 'react';

// NOTE: We will replace this with React Scroll later for smooth scrolling.
// For now, we use simple anchor links.
const Link = ({ to, children }) => <a href={`#${to}`}>{children}</a>;

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a href="#" className="text-3xl font-bold">
                        <span className="gradient-logo">
                            ilme Digital
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="offre" className="cursor-pointer text-jet hover:text-orange transition-colors">Notre Offre</Link>
                        <Link to="travail" className="cursor-pointer text-jet hover:text-orange transition-colors">Notre Travail</Link>
                        <Link to="processus" className="cursor-pointer text-jet hover:text-orange transition-colors">Notre Processus</Link>
                        <Link to="contact" className="cursor-pointer text-jet hover:text-orange transition-colors">Contact</Link>
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
                <Link to="offre" className="block py-2 px-6 text-sm text-jet hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Notre Offre</Link>
                <Link to="travail" className="block py-2 px-6 text-sm text-jet hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Notre Travail</Link>
                <Link to="processus" className="block py-2 px-6 text-sm text-jet hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Notre Processus</Link>
                <Link to="contact" className="block py-2 px-6 text-sm text-jet hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
        </header>
    );
}

export default Header;