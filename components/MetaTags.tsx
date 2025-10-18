import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  children: React.ReactNode;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, keywords, children }) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    
    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    
    // Twitter
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);

  }, [title, description, keywords]);

  return <>{children}</>;
};

export default MetaTags;
