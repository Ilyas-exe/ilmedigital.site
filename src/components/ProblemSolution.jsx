import React from 'react';

function ProblemSolution() {
  const problems = [
    {
      title: "Mon site est trop lent",
      description: "Une première impression négative pour vos clients potentiels."
    },
    {
      title: "Je n'apparais pas sur Google",
      description: "Des opportunités manquées chaque jour au profit de vos concurrents."
    },
    {
      title: "Je n'ai qu'une page Facebook",
      description: "Un manque de professionnalisme et de contrôle sur votre image de marque."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet">
            Votre présence en ligne est-elle à la hauteur de votre réputation?
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-xl text-oxford-blue mb-2">"{problem.title}"</h3>
              <p className="text-jet">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Sentence */}
        <p className="text-center mt-12 text-xl text-jet max-w-3xl mx-auto">
          La solution : une fondation digitale solide, construite avec la précision d'un ingénieur.
        </p>

      </div>
    </section>
  );
}

export default ProblemSolution;