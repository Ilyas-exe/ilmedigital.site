import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet">Commençons la Conversation.</h2>
          <p className="mt-4 text-lg text-jet max-w-2xl mx-auto">Que ce soit pour un projet, une question, ou pour planifier votre audit gratuit, nous sommes là pour vous écouter.</p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-jet font-semibold mb-2">Nom</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-jet font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-jet font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-orange text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-dark transition-colors">Envoyer le Message</button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-jet">Ou contactez-nous directement :</p>
            <a href="mailto:contact@ilmedigital.ma" className="text-oxford-blue font-semibold hover:text-orange">contact@ilmedigital.ma</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;