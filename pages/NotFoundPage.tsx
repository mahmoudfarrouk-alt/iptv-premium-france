import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div>
        <h1 className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
          Page non trouvée.
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;