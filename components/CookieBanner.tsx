import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.5 9a.5.5 0 000 1h.01a.5.5 0 000-1H6.5zm1.5 2.5a.5.5 0 01.5-.5h.01a.5.5 0 010 1H8.5a.5.5 0 01-.5-.5zM12 7.5a.5.5 0 000 1h.01a.5.5 0 000-1H12zm1.5 3a.5.5 0 01.5-.5h.01a.5.5 0 010 1H13.5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
    </svg>
);

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    // Reload to apply changes and load scripts like Tawk.to
    window.location.reload(); 
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white p-5 shadow-2xl z-[100] animate-fade-in-up" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-center md:text-left">
            <CookieIcon/>
            <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience et pour nos services de chat. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies. 
                <Link to="/politique-de-confidentialite" className="underline hover:text-blue-300 ml-1">En savoir plus</Link>.
            </p>
        </div>
        <div className="flex-shrink-0 flex gap-4 mt-4 md:mt-0">
          <button onClick={handleAccept} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Accepter
          </button>
          <button onClick={handleDecline} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
