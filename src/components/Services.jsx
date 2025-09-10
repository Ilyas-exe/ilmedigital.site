import React from 'react';
import { Link } from 'react-scroll';

function Services() {
  return (
    <section id="offre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet">Nos Services Principaux</h2>
          <p className="mt-4 text-lg text-jet max-w-2xl mx-auto">Nous offrons des solutions digitales précises pour garantir votre succès en ligne.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Digital Business Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-oxford-blue mb-4">La Carte de Visite Digitale</h3>
            <p className="text-jet mb-6 flex-grow">Un site web professionnel de 4 pages, conçu pour établir votre crédibilité et être livré rapidement.</p>
            <Link
              to="service-details"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-center mt-auto bg-white text-orange font-bold py-3 px-6 rounded-lg border-2 border-orange hover:bg-orange hover:text-white transition-all"
            >
              Découvrir plus
            </Link>
          </div>

          {/* Card 2: Digital Audit */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-oxford-blue mb-4">L'Audit Digital Gratuit</h3>
            <p className="text-jet mb-6 flex-grow">Commencez avec une analyse gratuite de votre site (vitesse, sécurité, SEO) pour identifier des opportunités concrètes d'amélioration.</p>
            <Link
              to="contact" // This can scroll to the contact form to request the audit
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-center mt-auto bg-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-dark transition-all"
            >
              Demander Mon Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;