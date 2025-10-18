import React from 'react';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Contactez-nous</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Une question ? Un besoin d'assistance ? Notre équipe est là pour vous aider.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Envoyez-nous un message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="name" required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse e-mail</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Votre message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Informations de contact</h2>
            <div className="flex items-start">
              <MailIcon />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                <p>Pour le support technique ou toute question générale :</p>
                <a href="mailto:support@iptvpremuim.fr" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">support@iptvpremuim.fr</a>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Horaires du support</h3>
                <p>Notre équipe de support client est disponible pour vous aider :</p>
                <p className="font-semibold text-slate-900 dark:text-white">24 heures sur 24, 7 jours sur 7</p>
              </div>
            </div>
             <div className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Besoin d'un essai gratuit ?</h3>
                <p className="mt-2">Demandez votre essai gratuit de 24h via le formulaire de contact. Mentionnez simplement "Essai Gratuit" dans votre message !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;