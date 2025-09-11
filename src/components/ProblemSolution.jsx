import React from 'react';
import { motion } from 'framer-motion';

function ProblemSolution() {
  const problems = [
    { title: "Mon site est trop lent", description: "Une première impression négative pour vos clients potentiels." },
    { title: "Je n'apparais pas sur Google", description: "Des opportunités manquées chaque jour au profit de vos concurrents." },
    { title: "Je n'ai qu'une page Facebook", description: "Un manque de professionnalisme et de contrôle sur votre image de marque." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jet">
            Votre présence en ligne est-elle à la hauteur de votre réputation?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold text-xl text-oxford-blue mb-2">"{problem.title}"</h3>
              <p className="text-jet">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-16 text-xl text-jet max-w-3xl mx-auto">
          La solution : une fondation digitale solide, construite avec la précision d'un ingénieur.
        </p>
      </div>
    </section>
  );
}

export default ProblemSolution;