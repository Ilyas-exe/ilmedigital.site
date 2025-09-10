import React from 'react';
import { Link } from 'react-scroll'; // For the smooth scroll button

function Hero() {
  return (
    // The 'accueil' id is for the navigation link
    <section id="accueil" className="min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-6 py-24 text-center">
        
        {/* Main Headline (H1) */}
        <h1 className="text-4xl md:text-6xl font-bold text-oxford-blue leading-tight">
          Votre Expertise Mérite une Présence Digitale d'Exception.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-jet max-w-3xl mx-auto">
          ilme Digital. Nous sommes des ingénieurs qui construisons des sites web ultra-performants pour les professionnels de Rabat. Rapides, sécurisés et fiables.
        </p>

        {/* Main Call-to-Action Button */}
        <Link
          to="contact" // This tells the button to scroll to the 'contact' section
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer mt-10 inline-block bg-orange text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-orange-dark transition-transform transform hover:scale-105"
        >
          Obtenir Mon Audit Digital Gratuit
        </Link>
        
      </div>
    </section>
  );
}

export default Hero;