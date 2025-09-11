import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50"></div>
      <motion.div
        className="container mx-auto px-6 py-24 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-oxford-blue leading-tight"
          variants={itemVariants}
        >
          Votre Expertise Mérite une Présence Digitale d'Exception.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-jet max-w-3xl mx-auto"
          variants={itemVariants}
        >
          ilme Digital. Nous sommes des ingénieurs qui construisons des sites web ultra-performants pour les professionnels de Rabat. Rapides, sécurisés et fiables.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            to="contact" smooth={true} duration={500} offset={-70}
            className="cursor-pointer mt-10 inline-block bg-orange text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-orange-dark transition-transform transform hover:scale-105"
          >
            Obtenir Mon Audit Digital Gratuit
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;