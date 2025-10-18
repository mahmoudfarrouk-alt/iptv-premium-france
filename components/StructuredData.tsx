import React, { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
}

/**
 * A component to inject JSON-LD structured data into the document head.
 * This helps search engines understand the content of the page.
 * It automatically removes the script tag on component unmount.
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    script.id = 'structured-data-script'; // Use a unique ID

    // Remove previous script if it exists, to avoid duplicates on navigation
    const existingScript = document.getElementById(script.id);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      const scriptOnUnmount = document.getElementById(script.id);
      if (scriptOnUnmount) {
        document.head.removeChild(scriptOnUnmount);
      }
    };
  }, [data]); // Rerun effect if data changes

  return null; // This component renders nothing to the DOM
};

export default StructuredData;
