import React from 'react';

function Process() {
  const steps = [
    { title: "Audit & Stratégie", description: "Nous commençons par un audit gratuit pour comprendre vos besoins." },
    { title: "Conception & Contenu", description: "Vous choisissez un modèle, nous vous aidons à structurer vos textes." },
    { title: "Développement & Ingénierie", description: "C'est ici que la science (Ilm) opère. Nous codons un site optimisé." },
    { title: "Lancement & Suivi", description: "Nous mettons votre site en ligne et restons à vos côtés." }
  ];

  return (
    <section id="processus" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet">De l'idée à la Mise en Ligne : 4 Étapes, Zéro Stress.</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 text-center">
          {steps.map((step, index) => (
            <div key={index} className="p-4">
              <div className="w-16 h-16 bg-orange text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">{index + 1}</div>
              <h3 className="font-bold text-lg text-oxford-blue">{step.title}</h3>
              <p className="text-sm text-jet mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;