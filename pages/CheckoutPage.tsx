import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

// --- SVG Icons ---
const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm-2 5V5a2 2 0 114 0v1h-4z" clipRule="evenodd" />
    </svg>
);

const SuccessIcon: React.FC = () => (
     <svg className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);


const CheckoutPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const planName = searchParams.get('plan') || 'Plan non spécifié';
    const price = searchParams.get('price') || '0';
    const screens = searchParams.get('screens') || '1';
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Dans une application réelle, vous traiteriez ici le paiement avec une passerelle comme Stripe ou PayPal.
        setIsSubmitted(true);
    };
    
    if (isSubmitted) {
        return (
            <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-lg shadow-2xl text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/50 mb-6">
                           <SuccessIcon />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Commande Reçue !</h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Merci pour votre confiance, {name}. Nous avons bien reçu votre demande de commande.
                        </p>
                        <div className="mt-8 text-left bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg space-y-3">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Récapitulatif de votre commande :</h2>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Plan :</span>
                                <span className="font-semibold text-slate-800 dark:text-gray-200">{planName} ({screens} écran(s))</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Total :</span>
                                <span className="font-semibold text-slate-800 dark:text-gray-200">{price}€</span>
                            </div>
                            {whatsapp && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">WhatsApp :</span>
                                    <span className="font-semibold text-slate-800 dark:text-gray-200">{whatsapp}</span>
                                </div>
                            )}
                        </div>
                        <p className="mt-6 text-gray-700 dark:text-gray-300">
                            Un membre de notre équipe vous contactera sous peu à l'adresse e-mail <strong className="text-slate-900 dark:text-white">{email}</strong> avec les instructions pour finaliser votre commande et procéder au paiement.
                        </p>
                        <div className="mt-10">
                            <Link to="/" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Finalisez Votre Commande</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Vous êtes à une étape de l'expérience IPTV ultime.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Order Summary */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg order-last lg:order-first">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Résumé de la commande</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Durée :</span>
                                <span className="font-semibold text-slate-800 dark:text-gray-200">{planName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Écrans :</span>
                                <span className="font-semibold text-slate-800 dark:text-gray-200">{screens}</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-slate-700 my-4"></div>
                            <div className="flex justify-between text-2xl font-bold">
                                <span className="text-slate-900 dark:text-white">Total à payer :</span>
                                <span className="text-violet-600">{price}€</span>
                            </div>
                        </div>
                        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 p-4 rounded-md">
                            <p>Ceci est un paiement unique. Votre abonnement n'est pas renouvelé automatiquement.</p>
                            <p className="mt-2 font-semibold">Votre service sera activé instantanément après le paiement.</p>
                        </div>
                         <div className="mt-6">
                            <Link to="/abonnements" className="text-blue-500 dark:text-blue-400 hover:underline">
                                &larr; Changer de plan
                            </Link>
                        </div>
                    </div>
                    
                    {/* Payment Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Vos informations</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
                                    <input type="text" name="name" id="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse e-mail (pour l'envoi de vos identifiants)</label>
                                    <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Numéro WhatsApp (Optionnel)</label>
                                    <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" placeholder="+33 6 12 34 56 78" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white" />
                                </div>
                            </div>
                            
                            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg shadow-lg transform hover:scale-105">
                                Commander
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;