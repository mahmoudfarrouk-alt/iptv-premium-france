import React, { useState } from 'react';
import { FaqItem as FaqItemType } from '../types';
import StructuredData from '../components/StructuredData';

const FaqItem: React.FC<{ item: FaqItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-200 dark:border-slate-800">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const faqData: FaqItemType[] = [
    {
      question: "Qu'est-ce que l'IPTV ?",
      answer: "L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des chaînes de télévision via une connexion internet, au lieu des signaux satellites ou des câbles traditionnels. Cela vous donne accès à un plus grand nombre de chaînes du monde entier avec une grande flexibilité."
    },
    {
      question: "Sur quels appareils puis-je utiliser votre service ?",
      answer: "Notre service IPTV est compatible avec une large gamme d'appareils, incluant les Smart TV (Samsung, LG, etc.), les boîtiers Android (Nvidia Shield, Formuler), Amazon Firestick, MAG, les ordinateurs (PC/Mac via VLC ou applications dédiées), et les smartphones/tablettes (iOS/Android)."
    },
    {
      question: "La qualité de l'image est-elle bonne ?",
      answer: "Absolument. Nous proposons la majorité de nos chaînes en qualité HD, FHD et 4K. La qualité dépendra également de la vitesse de votre connexion internet. Nous recommandons une connexion d'au moins 20 Mbps pour une expérience optimale et un service IPTV stable."
    },
    {
      question: "Comment installer et configurer mon abonnement ?",
      answer: "C'est très simple ! Après votre commande, vous recevrez un email avec vos identifiants et un guide d'installation détaillé pour votre appareil. Notre support client est également disponible 24/7 pour vous aider pas à pas si nécessaire."
    },
    {
      question: "Est-ce que votre service est stable ?",
      answer: "La stabilité est notre priorité absolue. Nous utilisons des serveurs dédiés de dernière génération avec une technologie anti-coupure pour vous garantir un visionnage fluide, même pendant les grands événements sportifs. C'est ce qui fait de nous l'un des meilleurs fournisseurs IPTV en France."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements sécurisés par carte de crédit (Visa, MasterCard) et PayPal. Toutes les transactions sont cryptées pour garantir la sécurité de vos informations."
    }
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
      <StructuredData data={faqPageSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Questions Fréquemment Posées</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </div>
        <div className="mt-12">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;