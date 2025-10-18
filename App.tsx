
import React, { Suspense, lazy, useEffect, useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// Layout
import Header from './components/Header';
import Footer from './components/Footer';
import MetaTags from './components/MetaTags';
// import ChatWidget from './components/ChatWidget';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';

// Page Components (using lazy loading for better performance)
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SubscriptionsPage = lazy(() => import('./pages/SubscriptionsPage'));
const ChannelsPage = lazy(() => import('./pages/ChannelsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPages = lazy(() => import('./pages/LegalPages'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));


// --- Theme Context ---
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// ---

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme;
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={
                  <MetaTags
                    title="IPTV Premium France | Votre Fournisseur #1 de Chaînes TV"
                    description="Découvrez le meilleur service IPTV en France. Profitez de milliers de chaînes TV en direct, films et séries en 4K/FHD. Abonnement IPTV stable, support 24/7 et essai gratuit."
                    keywords="IPTV premium, abonnement IPTV, meilleur IPTV France, IPTV stable, chaînes TV en direct, IPTV 4K, essai IPTV"
                  >
                    <HomePage />
                  </MetaTags>
                } />
                <Route path="/a-propos" element={
                   <MetaTags
                    title="À Propos de Premium IPTV France | Notre Mission"
                    description="Découvrez notre histoire et notre engagement à fournir le service IPTV le plus stable et qualitatif en France. La satisfaction client est notre priorité."
                    keywords="à propos de nous, mission IPTV, service IPTV fiable, histoire iptv"
                  >
                    <AboutPage />
                   </MetaTags>
                } />
                <Route path="/abonnements" element={
                   <MetaTags
                    title="Abonnements IPTV | Tarifs et Plans Premium"
                    description="Choisissez votre abonnement IPTV parmi nos offres flexibles et abordables. Profitez d'un service stable avec des milliers de chaînes dès aujourd'hui."
                    keywords="abonnement IPTV, prix IPTV, tarifs IPTV, plan IPTV, acheter IPTV"
                  >
                    <SubscriptionsPage />
                  </MetaTags>
                } />
                <Route path="/checkout" element={
                  <MetaTags
                    title="Finaliser la Commande | Premium IPTV France"
                    description="Finalisez votre commande d'abonnement IPTV en toute sécurité. Activation instantanée."
                    keywords="checkout, paiement IPTV, acheter abonnement IPTV"
                  >
                    <CheckoutPage />
                  </MetaTags>
                } />
                <Route path="/chaines" element={
                  <MetaTags
                    title="Liste des Chaînes IPTV | Sport, Cinéma, International"
                    description="Explorez notre vaste liste de chaînes IPTV. Accédez à des milliers de chaînes françaises et internationales, sport, films, et plus en qualité 4K/FHD."
                    keywords="liste chaînes IPTV, chaînes sport IPTV, chaînes cinéma, chaînes france iptv"
                  >
                    <ChannelsPage />
                  </MetaTags>
                } />
                <Route path="/faq" element={
                   <MetaTags
                    title="FAQ IPTV | Questions Fréquemment Posées"
                    description="Trouvez les réponses à vos questions sur notre service IPTV. Installation, compatibilité, stabilité, nous couvrons tous les sujets."
                    keywords="FAQ IPTV, questions IPTV, aide IPTV, support IPTV"
                  >
                    <FaqPage />
                  </MetaTags>
                } />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={
                  <MetaTags
                    title="Contactez-nous | Support IPTV 24/7 & Essai Gratuit"
                    description="Contactez notre support client pour toute question ou pour demander votre essai IPTV gratuit de 24h. Nous sommes disponibles 24/7 pour vous aider."
                    keywords="contact IPTV, support IPTV, aide IPTV, essai gratuit IPTV"
                  >
                    <ContactPage />
                  </MetaTags>
                } />
                <Route path="/mentions-legales" element={
                  <MetaTags
                    title="Mentions Légales | Premium IPTV France"
                    description="Consultez les mentions légales de notre site Premium IPTV France."
                  >
                    <LegalPages page="mentions" />
                  </MetaTags>
                } />
                <Route path="/politique-de-confidentialite" element={
                  <MetaTags
                    title="Politique de Confidentialité | Premium IPTV France"
                    description="Consultez notre politique de confidentialité et la gestion de vos données personnelles."
                  >
                    <LegalPages page="confidentialite" />
                  </MetaTags>
                } />
                <Route path="/conditions-generales-utilisation" element={
                  <MetaTags
                    title="Conditions Générales d'Utilisation | Premium IPTV France"
                    description="Lisez nos conditions générales d'utilisation pour notre service IPTV."
                  >
                    <LegalPages page="cgu" />
                  </MetaTags>
                } />
                <Route path="/politique-de-remboursement" element={
                  <MetaTags
                    title="Politique de Remboursement | Premium IPTV France"
                    description="Consultez notre politique de remboursement pour les abonnements IPTV."
                  >
                    <LegalPages page="remboursement" />
                  </MetaTags>
                } />
                <Route path="*" element={
                  <MetaTags
                    title="404 Page non trouvée | Premium IPTV France"
                    description="La page que vous recherchez n'a pas pu être trouvée sur notre site."
                  >
                    <NotFoundPage />
                  </MetaTags>
                } />
              </Routes>
            </Suspense>
          </main>
          <WhatsAppButton />
          {/* <ChatWidget /> */}
          <CookieBanner />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
