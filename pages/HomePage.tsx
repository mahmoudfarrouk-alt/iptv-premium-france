import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icons ---
const ZapIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ShieldCheckIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0 12.02 12.02 0 00-2.382-8.984z" /></svg>;
const FilmIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>;
const SupportIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const ShoppingCartIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MailOpenIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M12 12l6.75 4.5M12 12l-6.75 4.5" /></svg>;
const PlayIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className || "h-5 w-5 text-green-500 mr-2 flex-shrink-0"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);
const ScreenIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const CartIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);


// --- Constants ---
const vodContent = [
    { title: 'Oppenheimer', type: 'Film', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Oppenheimer-scaled-1.jpeg' },
    { title: 'Dune: Part Two', type: 'Sci-Fi', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Dune-Part-Two-scaled-1.jpg' },
    { title: 'John Wick: Chapter 4', type: 'Action', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/john-wick-4.jpg' },
    { title: 'Succession', type: 'Série', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Succession.jpg' },
    { title: 'Stranger Things', type: 'Série', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/stranger-things-seasons-i132237.jpg' },
    { title: 'Mission: Impossible 7', type: 'Action', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/mission-impossible-7.jpg' },
    { title: 'Scream VI', type: 'Film', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Scream-VI.jpg' },
    { title: 'M3gan', type: 'Horreur', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/M3gan.webp' },
    { title: 'Evil Dead Rise', type: 'Horreur', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Evil-Dead-Rise.jpg' },
    { title: 'Meg 2: The Trench', type: 'Film', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Meg-2-The-Trench.jpg' },
    { title: 'Luther: The Fallen Sun', type: 'Film', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Luther-The-Fallen-Sun.jpg' },
    { title: 'Renfield', type: 'Comédie', imgUrl: 'https://tv-smarterpro.fr/wp-content/uploads/2025/02/Renfield.jpg' },
];

const channelLogos = [
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/canal.png",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/nbc-1-1-1.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/m6.png",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/disn.png",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/netf.png",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/bein-1-1-1-1.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/natgeo-1-1-1-1.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/cn-1-1-1-1.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/espn-1-1-1-1.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/brand_item08-150x46-1-12.webp",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/plutv.png",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/06/dazn-1-150x150-1.jpeg",
    "https://tv-smarterpro.fr/wp-content/uploads/2025/04/bbc-3-1.webp"
];

// --- Helper function for SEO ---
const getLogoAltText = (url: string): string => {
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    // Extracts the most meaningful part of the filename, e.g., "canal" from "canal.png"
    const namePart = fileName.split('.')[0].split('-')[0]; 
    
    const nameMap: { [key: string]: string } = {
        canal: 'Canal+',
        nbc: 'NBC',
        m6: 'M6',
        disn: 'Disney+',
        netf: 'Netflix',
        bein: 'beIN Sports',
        natgeo: 'National Geographic',
        cn: 'Cartoon Network',
        espn: 'ESPN',
        brand_item08: 'Sky', // Best guess for a generic name
        plutv: 'Pluto TV',
        dazn: 'DAZN',
        bbc: 'BBC'
    };
    
    const mappedName = nameMap[namePart.toLowerCase()];
    return `Logo de ${mappedName || namePart.charAt(0).toUpperCase() + namePart.slice(1)}`;
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-center">{children}</p>
  </div>
);

// --- Pricing Shortcut Section ---
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
  'Qualité 4K/UHD/FHD',
  'Compatible tous appareils',
  'Support live chat 24/7',
  'Activation instantanée',
];

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

const PricingCard: React.FC<{ plan: typeof plansData.oneScreen[0], screens: number }> = ({ plan, screens }) => {
    const checkoutUrl = `/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.promoPrice}&screens=${screens}`;

    return (
        <div className={`bg-white dark:bg-slate-900 text-slate-800 dark:text-gray-200 rounded-xl shadow-lg p-6 flex flex-col border-2 transition-all duration-300 ${plan.savePercent ? 'border-fuchsia-500 transform lg:scale-105' : 'border-gray-200 dark:border-slate-800 hover:border-violet-400'}`}>
            {plan.savePercent && (
                <div className="text-center mb-4">
                    <span className="bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">ÉCONOMISEZ {plan.savePercent}</span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">{plan.name}</h3>
            <div className="mt-4 text-center flex justify-center items-baseline gap-x-3">
                <span className="text-4xl font-semibold text-gray-500 dark:text-gray-400 line-through">{plan.originalPrice}€</span>
                <span className="text-5xl font-extrabold text-violet-600 dark:text-violet-400">{plan.promoPrice}€</span>
            </div>
            <ul className="mt-6 space-y-3 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
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


const HomePage: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [activeScreen, setActiveScreen] = useState<'oneScreen' | 'twoScreens'>('oneScreen');


    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const calculateProgress = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            if (scrollWidth <= clientWidth) {
                setScrollProgress(0);
            } else {
                const progress = scrollLeft / (scrollWidth - clientWidth);
                setScrollProgress(progress);
            }
        };

        calculateProgress();

        const handleResize = () => calculateProgress();
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(scrollContainer);

        scrollContainer.addEventListener('scroll', calculateProgress);

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', calculateProgress);
            }
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isHovering) {
            return;
        }

        const intervalId = setInterval(() => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: clientWidth * 0.75, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [isHovering]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.75;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://tv-smarterpro.fr/wp-content/uploads/2025/02/bg-8.jpg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-glowing-lines-of-a-futuristic-grid-in-a-dark-background-32924-large.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-20">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    L'Expérience <span className="text-blue-400">IPTV Ultime</span> en France
                </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationDuration: '0.8s' }}>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    Accédez à plus de 20 000 chaînes, films et séries en 4K/FHD. Profitez d'un service stable, sans coupure, et d'un support 24/7.
                </p>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationDuration: '0.8s' }}>
                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <Link to="/abonnements" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
                        Voir nos abonnements
                    </Link>
                    <Link to="/contact" className="bg-gray-100/20 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-100/30 text-lg">
                        Demander un essai gratuit
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Pourquoi nous choisir ?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                    Nous nous engageons à vous offrir le meilleur service IPTV du marché.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <FeatureCard icon={<ZapIcon />} title="Qualité 4K/FHD">
                    Profitez d'une image ultra-haute définition pour une immersion totale. La majorité de nos chaînes sont disponibles en 4K et Full HD.
                </FeatureCard>
                <FeatureCard icon={<ShieldCheckIcon />} title="IPTV Stable & Fiable">
                    Nos serveurs puissants garantissent une diffusion fluide sans coupures ni freezes, même pendant les grands événements.
                </FeatureCard>
                <FeatureCard icon={<FilmIcon />} title="Contenu Vaste">
                    +20 000 chaînes en direct, +100 000 films et séries à la demande. Mises à jour quotidiennes du contenu.
                </FeatureCard>
                <FeatureCard icon={<SupportIcon />} title="Support 24/7">
                    Notre équipe d'experts est disponible 24/7 par chat et email pour vous aider à tout moment.
                </FeatureCard>
            </div>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Commencez en 3 Étapes Simples</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                    Rejoindre notre service est rapide, facile et sécurisé.
                </p>
            </div>
            <div className="mt-16 relative">
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-slate-700"></div>
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Step 1 */}
                    <div className="relative text-center">
                        <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-900 shadow-lg">
                            <ShoppingCartIcon />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">1. Choisissez Votre Plan</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Sélectionnez l'abonnement qui vous convient le mieux et passez votre commande en toute sécurité.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative text-center">
                        <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-900 shadow-lg">
                            <MailOpenIcon />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">2. Recevez vos Identifiants</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Quelques minutes après, vous recevrez un email avec vos identifiants et les guides d'installation.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative text-center">
                        <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-900 shadow-lg">
                            <PlayIcon />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">3. Profitez Partout</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Installez le service sur votre appareil préféré et commencez à regarder des milliers de chaînes.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Pricing Shortcut Section --- */}
      <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Nos Abonnements Populaires</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                    Rejoignez-nous dès aujourd'hui avec nos offres les plus appréciées. Économisez 50% sur le plan annuel !
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
             <div className="mt-12 text-center">
                <Link to="/abonnements" className="text-blue-500 dark:text-blue-400 hover:underline font-semibold text-lg">
                    Voir tous nos abonnements &rarr;
                </Link>
            </div>
        </div>
      </section>

      {/* --- VOD Carousel Section --- */}
      <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl text-center mb-12">Derniers Films & Séries en VOD</h2>
            <div 
                className="relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <button onClick={() => handleScroll('left')} className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-20 p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full shadow-lg text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 focus:outline-none" aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div ref={scrollRef} className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none' }}>
                    {vodContent.map((item) => (
                        <div key={item.title} className="group/item relative flex-shrink-0 w-[220px] md:w-[256px] aspect-[2/3] rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-slate-800" style={{ scrollSnapAlign: 'start' }}>
                            <img
                                src={item.imgUrl}
                                alt={`Affiche pour ${item.title}`}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-110"
                                loading="lazy"
                                width="256"
                                height="384"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300 group-hover/item:from-black/95 group-hover/item:via-black/70"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 w-full transition-transform duration-300 group-hover/item:-translate-y-2">
                                <h3 className="text-white text-lg font-bold transition-all duration-300 group-hover/item:text-purple-400 group-hover/item:text-xl">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => handleScroll('right')} className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-20 p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full shadow-lg text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 focus:outline-none" aria-label="Next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <div className="w-1/2 max-w-xs mx-auto mt-8">
                <div className="h-1.5 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                        className="h-1.5 bg-purple-600 rounded-full"
                        style={{ width: '100%', transform: `scaleX(${scrollProgress})`, transformOrigin: 'left', transition: 'transform 150ms ease-out' }}
                    ></div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Channel Logos Carousel --- */}
       <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl text-center mb-12">
                Bouquet de Chaînes Exceptionnel
            </h2>
            <div className="relative w-full overflow-hidden">
                {/* FIX: Merged duplicate className attributes into one. */}
                <div className="absolute inset-0 z-10 dark:hidden" style={{background: 'linear-gradient(to right, rgb(249 250 251) 0%, rgba(249, 250, 251, 0) 10%, rgba(249, 250, 251, 0) 70%, rgb(249 250 251) 100%)'}}></div>
                <div className="absolute inset-0 z-10 hidden dark:block" style={{background: 'linear-gradient(to right, rgb(2, 6, 23) 0%, rgba(2, 6, 23, 0) 10%, rgba(2, 6, 23, 0) 90%, rgb(2, 6, 23) 100%)'}}></div>
                <div className="flex animate-infinite-scroll">
                    {[...channelLogos, ...channelLogos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8">
                            <img src={logo} alt={getLogoAltText(logo)} className="max-h-12 max-w-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- Content Showcase --- */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Le meilleur du divertissement, réuni en un seul endroit.</h2>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Ne manquez plus jamais vos programmes préférés. Sport en direct, derniers blockbusters, séries exclusives, chaînes internationales... Tout y est !</p>
                <ul className="mt-6 space-y-4 text-lg">
                    <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Toutes les chaînes de sport (Foot, F1, Basket...)</li>
                    <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Chaînes cinéma et séries exclusives</li>
                    <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Bouquets internationaux (USA, UK, Espagne, Italie...)</li>
                    <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Contenus jeunesse, documentaires, et plus encore.</li>
                </ul>
                <div className="mt-8">
                     <Link to="/chaines" className="text-blue-500 dark:text-blue-400 hover:underline font-semibold text-lg">
                        Découvrir notre liste de chaînes &rarr;
                    </Link>
                </div>
            </div>
             <div className="order-1 md:order-2">
                <img src="https://tv-smarterpro.fr/wp-content/uploads/2025/02/55-1.webp" alt="Mosaïque de chaînes de sport en direct disponibles via le service IPTV" className="rounded-lg shadow-2xl"/>
            </div>
        </div>
      </section>

       {/* --- Compatibility Section --- */}
      <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Compatible avec tous vos appareils</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                   Regardez la télévision où vous voulez, quand vous voulez. Notre service fonctionne sur tous vos écrans.
                </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-500 dark:text-gray-400">
                <span className="text-lg font-semibold">Smart TV</span>
                <span className="text-lg font-semibold">Android Box</span>
                <span className="text-lg font-semibold">Amazon Firestick</span>
                <span className="text-lg font-semibold">MAG</span>
                <span className="text-lg font-semibold">PC / Mac</span>
                <span className="text-lg font-semibold">Smartphone</span>
                <span className="text-lg font-semibold">Tablette</span>
            </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Prêt à transformer votre expérience TV ?</h2>
            <p className="mt-4 text-xl text-blue-100">
                Rejoignez des milliers d'utilisateurs satisfaits et profitez du meilleur de la télévision dès aujourd'hui. Activation instantanée.
            </p>
            <div className="mt-8">
                 <Link to="/abonnements" className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 text-xl shadow-lg">
                    Je m'abonne
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;