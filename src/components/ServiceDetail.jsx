import React from 'react';

function ServiceDetail() {
  const features = [
    "Site web statique de 4 pages (Accueil, À propos, Services, Contact)",
    "Design professionnel basé sur nos modèles",
    "Vitesse de chargement garantie (>90/100 sur Google PageSpeed)",
    "Parfaitement adaptable (Mobile, Tablette, Ordinateur)",
    "Formulaire de contact sécurisé",
    "Intégration de Google Maps",
    "Optimisation SEO de base pour le référencement"
  ];

  return (
    <section id="service-details" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-jet mb-2">La Carte de Visite Digitale: L'Essentiel, à la Perfection.</h2>
          <p className="text-center text-lg text-jet mb-8">Pour les avocats, médecins, consultants et PME à Rabat qui exigent une présence en ligne professionnelle et performante.</p>
          
          <h3 className="text-2xl font-bold text-oxford-blue mb-6">Inclus dans le Forfait :</h3>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center mr-4 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-xl font-semibold text-jet mb-2">Ce qui n'est pas inclus :</h4>
            <p className="text-gray-600">Pour garantir ce niveau de qualité, ce forfait n'inclut pas : e-commerce, blog, systèmes de réservation, rédaction de contenu, ou création de logo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;