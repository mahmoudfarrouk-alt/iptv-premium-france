import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: { [key: string]: any };
    Tawk_LoadStart?: Date;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Check for cookie consent and ensure the script isn't already loaded
    if (localStorage.getItem('cookie_consent') === 'true' && !document.querySelector('script[src*="tawk.to"]')) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68f065b0ca9057194f018192/1j7lgqf65';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      document.head.appendChild(s1);
    }
  }, []); // Run only once when the component mounts

  // This component doesn't render anything to the DOM, it just manages the script.
  return null;
};

export default ChatWidget;
