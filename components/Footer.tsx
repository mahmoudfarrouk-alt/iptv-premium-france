
import React from 'react';
import { Link } from 'react-router-dom';

const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" /> 
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>
      <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" fill="url(#logoGradientFooter)"/>
      <path d="M10.5 15.5V8.5L15.5 12L10.5 15.5Z" fill="white"/>
    </svg>
  );

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-950 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center text-slate-900 dark:text-white font-bold text-xl">
              <LogoIcon />
              <span>Premium IPTV</span>
            </Link>
            <p className="text-sm">Votre source numéro 1 pour un divertissement de qualité. Stabilité et service client inégalés.</p>
            {/* Suggestion: Ajouter des icônes de réseaux sociaux ici */}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/a-propos" className="hover:text-slate-900 dark:hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/abonnements" className="hover:text-slate-900 dark:hover:text-white transition-colors">Abonnements</Link></li>
              <li><Link to="/blog" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/mentions-legales" className="hover:text-slate-900 dark:hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link to="/politique-de-confidentialite" className="hover:text-slate-900 dark:hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/conditions-generales-utilisation" className="hover:text-slate-900 dark:hover:text-white transition-colors">Conditions d'Utilisation</Link></li>
              <li><Link to="/politique-de-remboursement" className="hover:text-slate-900 dark:hover:text-white transition-colors">Politique de Remboursement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Ressources</h3>
            <ul className="mt-4 space-y-2">
                <li><Link to="/faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Premium IPTV France. Tous droits réservés.</p>
          <p className="mt-2 text-xs">Avis de non-responsabilité : Nous ne sommes pas responsables du contenu diffusé. Le service est destiné à un usage personnel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
