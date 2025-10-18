import React from 'react';
import StructuredData from '../components/StructuredData';

const AboutPage: React.FC = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium IPTV France",
    "url": "https://iptvpremuim.fr/",
    "logo": "https://iptvpremuim.fr/favicon.svg",
    "description": "Découvrez notre histoire et notre engagement à fournir le service IPTV le plus stable et qualitatif en France. La satisfaction client est notre priorité.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@iptvpremuim.fr"
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <StructuredData data={aboutPageSchema} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Notre Mission : Révolutionner Votre Expérience TV
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Découvrez qui nous sommes et pourquoi nous sommes passionnés par l'IPTV.
          </p>
        </div>

        <div className="mt-16 text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Notre Histoire</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Fondé par une équipe de passionnés de technologie et de divertissement, Premium IPTV France est né d'un constat simple : l'accès à un service de télévision de qualité, stable et abordable était compliqué. Fatigués des services peu fiables, des coupures incessantes et d'un support client inexistant, nous avons décidé de créer la solution que nous aurions nous-mêmes voulu utiliser.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Aujourd'hui, nous sommes fiers de proposer un <strong className="text-slate-900 dark:text-white">abonnement IPTV premium</strong> qui allie performance, richesse de contenu et un service client irréprochable. Notre infrastructure de pointe garantit une diffusion fluide et une qualité d'image exceptionnelle pour toutes vos <strong className="text-slate-900 dark:text-white">chaînes TV en direct</strong>.
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-3">Notre Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Devenir le leader incontesté de l'IPTV en France en offrant une expérience utilisateur sans compromis. Nous visons à innover constamment pour intégrer les dernières technologies et enrichir notre catalogue pour satisfaire tous les goûts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-500 dark:text-purple-400 mb-3">Nos Valeurs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-slate-900 dark:text-white">Stabilité :</span> La base de notre service. Zéro coupure, 100% plaisir.</li>
                <li><span className="font-semibold text-slate-900 dark:text-white">Qualité :</span> De la HD à la 4K, nous offrons le meilleur pour vos yeux.</li>
                <li><span className="font-semibold text-slate-900 dark:text-white">Support :</span> Une équipe dévouée et réactive, disponible 24/7.</li>
                <li><span className="font-semibold text-slate-900 dark:text-white">Transparence :</span> Des tarifs clairs, sans frais cachés.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://picsum.photos/800/400?random=6" 
              alt="Équipe Premium IPTV France travaillant sur des serveurs" 
              className="rounded-lg shadow-lg mx-auto"
              // SEO : L'attribut alt est descriptif et pertinent.
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-500">Notre engagement : une infrastructure robuste pour un service IPTV stable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;