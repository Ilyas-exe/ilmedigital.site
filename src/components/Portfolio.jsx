import React from 'react';

function Portfolio() {
  // We will make this interactive later
  return (
    <section id="travail" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet">Découvrez la Qualité de Notre Travail</h2>
          <p className="mt-4 text-lg text-jet">Performance et Élégance en Action.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-oxford-blue">Modèle "Le Professionnel"</h3>
              <p className="mt-2 text-jet">Idéal pour les cabinets de conseil, les avocats et les experts-comptables qui souhaitent projeter une image de sérieux et de confiance.</p>
              
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold text-jet">Points Techniques Clés :</h4>
                <div className="flex justify-around text-center mt-2">
                  <div><span className="font-bold text-2xl text-orange">98</span><span className="text-gray-500">/100</span><p className="text-sm">Vitesse</p></div>
                  <div><span className="font-bold text-2xl text-orange">100</span><span className="text-gray-500">/100</span><p className="text-sm">Mobile</p></div>
                  <div><span className="font-bold text-2xl text-orange">A+</span><p className="text-sm">Sécurité</p></div>
                </div>
              </div>
               <a href="#" className="mt-6 inline-block text-center w-full bg-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-dark transition-all">
                  Voir la Démo en Direct (Bientôt !)
              </a>
            </div>
            <div className="relative h-64 md:h-96">
              {/* Placeholder for template image */}
              <div className="bg-oxford-blue w-full h-full rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Template A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;