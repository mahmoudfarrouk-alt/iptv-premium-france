import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StructuredData from '../components/StructuredData';

// --- SVG Icons ---

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "h-6 w-6 text-green-500"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ScreenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const PaymentIcons: React.FC = () => (
    <div className="flex justify-center items-center space-x-2 mt-6">
        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6"/>
        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6"/>
        <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6"/>
        <img src="https://img.icons8.com/color/48/amex.png" alt="American Express" className="h-6"/>
        <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="h-6"/>
        <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" className="h-6"/>
    </div>
);


// --- Data ---

interface Plan {
  name: string;
  originalPrice: string;
  promoPrice: string;
  savePercent?: string;
}

const plansData = {
  oneScreen: [
    { name: '6 Mois', originalPrice: '58', promoPrice: '29' },
    { name: '12 Mois', originalPrice: '90', promoPrice: '45', savePercent: '50%' },
    { name: '24 Mois', originalPrice: '138', promoPrice: '69', savePercent: '50%' },
  ],
  twoScreens: [
    { name: '6 Mois', originalPrice: '88', promoPrice: '44' },
    { name: '12 Mois', originalPrice: '130', promoPrice: '65', savePercent: '50%' },
    { name: '24 Mois', originalPrice: '198', promoPrice: '99', savePercent: '50%' },
  ]
};

const features = [
  '20 000 chaînes en direct',
  'Toutes les chaînes sportives',
  'Mise à jour gratuite (films, émissions, VOD)',
  'Tous les événements PPV',
  'Qualité 4K/UHD/FHD/HD',
  'Compatible tous appareils',
  'Support live chat 24/7',
  'Activation instantanée',
];

// --- Components ---

const PricingCard: React.FC<{ plan: Plan, screens: number }> = ({ plan, screens }) => {
    const checkoutUrl = `/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.promoPrice}&screens=${screens}`;

    return (
        <div className={`bg-white text-slate-800 rounded-xl shadow-lg p-6 flex flex-col border-2 transition-all duration-300 ${plan.savePercent ? 'border-fuchsia-500 transform lg:scale-105' : 'border-gray-200 dark:border-slate-800 hover:border-violet-400'}`}>
            {plan.savePercent && (
                <div className="text-center mb-4">
                    <span className="bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">ÉCONOMISEZ {plan.savePercent}</span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-center text-slate-900">{plan.name}</h3>
            <div className="mt-4 text-center flex justify-center items-baseline gap-x-3">
                <span className="text-4xl font-semibold text-gray-500 dark:text-gray-400 line-through">{plan.originalPrice}€</span>
                <span className="text-5xl font-extrabold text-violet-600">{plan.promoPrice}€</span>
            </div>
            <ul className="mt-6 space-y-3 flex-grow text-center">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/>
                <span>{feature}</span>
                </li>
            ))}
            </ul>
            <div className="mt-8">
            <Link to={checkoutUrl} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                Commander
                <CartIcon/>
            </Link>
            </div>
            <PaymentIcons/>
        </div>
    );
};


const SubscriptionsPage: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<'oneScreen' | 'twoScreens'>('oneScreen');

    // --- Structured Data for SEO ---
    const offerCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": `Abonnements IPTV pour ${activeScreen === 'oneScreen' ? '1 Écran' : '2 Écrans'}`,
      "description": "Choisissez le meilleur abonnement IPTV premium pour vos besoins. Plans flexibles de 6, 12, et 24 mois.",
      "itemListElement": plansData[activeScreen].map(plan => ({
        "@type": "Offer",
        "name": `Abonnement IPTV ${plan.name}`,
        "price": plan.promoPrice,
        "priceCurrency": "EUR",
        "itemOffered": {
          "@type": "Service",
          "name": `Service IPTV Premium - ${plan.name} (${activeScreen === 'oneScreen' ? '1 Écran' : '2 Écrans'})`,
          "serviceType": "IPTV Subscription"
        }
      }))
    };

    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
            <StructuredData data={offerCatalogSchema} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Choisissez Votre Plan Idéal</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Un divertissement sans limites, flexible et abordable. Activation instantanée après paiement.
                    </p>
                </div>
                
                <div className="mt-10 flex justify-center items-center space-x-4">
                    <button 
                        onClick={() => setActiveScreen('oneScreen')}
                        className={`font-semibold py-3 px-6 rounded-full flex items-center transition-all duration-300 ${activeScreen === 'oneScreen' ? 'bg-violet-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
                        <ScreenIcon/> Offre 1 Ecran
                    </button>
                    <button 
                        onClick={() => setActiveScreen('twoScreens')}
                        className={`font-semibold py-3 px-6 rounded-full flex items-center transition-all duration-300 ${activeScreen === 'twoScreens' ? 'bg-violet-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
                        <ScreenIcon/> Offre 2 Ecrans
                    </button>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 items-start max-w-5xl mx-auto">
                    {plansData[activeScreen].map((plan) => (
                        <PricingCard 
                            key={plan.name} 
                            plan={plan} 
                            screens={activeScreen === 'oneScreen' ? 1 : 2}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-slate-900/50 p-6 rounded-lg">
                    <p className="text-lg font-semibold">Satisfaction garantie ou remboursé sous 7 jours.</p>
                    <p className="mt-2">Tous nos abonnements sont sécurisés, sans engagement et sans renouvellement automatique.</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionsPage;