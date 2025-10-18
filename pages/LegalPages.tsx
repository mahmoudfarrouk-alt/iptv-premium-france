
import React from 'react';

interface LegalPagesProps {
  page: 'mentions' | 'confidentialite' | 'cgu' | 'remboursement';
}

const LegalPages: React.FC<LegalPagesProps> = ({ page }) => {
  const content = {
    mentions: {
      title: "Mentions Légales",
      body: (
        <>
          <p><strong>Date de dernière mise à jour :</strong> 23 Juillet 2024</p>
          <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Premium IPTV France l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">1. Édition du site</h2>
          <p>Le présent site, accessible à l’URL iptvpremuim.fr, est édité par :</p>
          <p><strong>Premium IPTV France</strong></p>
          <p>Pour toute question, veuillez nous contacter à l'adresse suivante : support@iptvpremuim.fr</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Hébergement</h2>
          <p>Le Site est hébergé sur une infrastructure cloud sécurisée et performante pour garantir une disponibilité optimale. Pour des raisons de sécurité, le nom de notre hébergeur n'est pas divulgué publiquement.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">3. Propriété Intellectuelle</h2>
          <p>Tous les éléments graphiques, la structure et, plus généralement, le contenu du site Premium IPTV France sont protégés par le droit d'auteur. Toute personne qui recueille ou télécharge du contenu ou des informations diffusées sur le site ne dispose sur ceux-ci que d’un droit d’usage privé, personnel et non transmissible. La reproduction d’une page du site dans un cadre extérieur à Premium IPTV France ou l’insertion d’une page appartenant à Premium IPTV France dans la page d’un autre site est interdite.</p>
          
           <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">4. Responsabilité</h2>
           <p>Premium IPTV France agit en tant qu'intermédiaire technique et ne stocke ni n'héberge aucun des contenus audiovisuels accessibles via son service. Nous fournissons uniquement un accès à des flux déjà disponibles sur Internet. L'utilisateur est seul responsable de l'utilisation qu'il fait du service et s'engage à respecter les lois en vigueur concernant les droits d'auteur dans son pays de résidence. Il est de la responsabilité de l'utilisateur de s'assurer qu'il dispose des droits nécessaires pour accéder au contenu.</p>
        </>
      ),
    },
    confidentialite: {
      title: "Politique de Confidentialité",
      body: (
        <>
          <p><strong>Date de dernière mise à jour :</strong> 23 Juillet 2024</p>
          <p>Votre vie privée est importante pour nous. La présente politique de confidentialité explique quelles données personnelles nous collectons auprès de vous et comment nous les utilisons.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">1. Collecte des Données Personnelles</h2>
          <p>Nous collectons des données pour fonctionner efficacement et vous fournir les meilleures expériences avec nos services. Vous fournissez certaines de ces données directement, comme lorsque vous créez un compte, effectuez un achat ou nous contactez pour du support. Les données que nous collectons peuvent inclure :</p>
          <ul className="list-disc list-inside space-y-2">
              <li><strong>Informations d'identification :</strong> Votre nom et votre adresse e-mail.</li>
              <li><strong>Informations de contact :</strong> Votre numéro de téléphone (optionnel, via WhatsApp) pour le support.</li>
              <li><strong>Données techniques :</strong> Votre adresse IP pour la livraison du service et la protection contre la fraude.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Utilisation de Vos Données</h2>
          <p>Nous utilisons les données que nous collectons pour :</p>
          <ul className="list-disc list-inside space-y-2">
              <li>Fournir et gérer votre abonnement.</li>
              <li>Communiquer avec vous concernant votre compte ou vos achats.</li>
              <li>Vous offrir un support client efficace.</li>
              <li>Améliorer et personnaliser nos services.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">3. Partage des Données</h2>
          <p>Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager des informations avec des tiers uniquement dans les cas suivants :</p>
          <ul className="list-disc list-inside space-y-2">
             <li>Avec des processeurs de paiement sécurisés pour traiter vos transactions.</li>
             <li>Si la loi l'exige, pour nous conformer à une obligation légale.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">4. Sécurité de Vos Données</h2>
          <p>Nous nous engageons à protéger la sécurité de vos données personnelles. Nous utilisons diverses technologies et procédures de sécurité pour aider à protéger vos données personnelles contre l'accès, l'utilisation ou la divulgation non autorisés. Les paiements sont traités via des passerelles sécurisées et nous ne stockons pas les informations de votre carte de crédit sur nos serveurs.</p>

           <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">5. Vos Droits</h2>
          <p>Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à support@iptvpremuim.fr.</p>
        </>
      ),
    },
    cgu: {
      title: "Conditions Générales d'Utilisation",
      body: (
        <>
          <p><strong>Date de dernière mise à jour :</strong> 23 Juillet 2024</p>
          <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent votre utilisation de nos services IPTV. En souscrivant à un abonnement, vous acceptez ces conditions.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">1. Objet du Service</h2>
          <p>Premium IPTV France fournit un service d'accès à des flux de télévision sur Internet. Le service est destiné à un usage strictement personnel et non commercial.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Conditions d'Accès</h2>
          <ul className="list-disc list-inside space-y-2">
              <li>Vous devez être âgé d'au moins 18 ans pour souscrire à nos services.</li>
              <li>Chaque abonnement est valable pour le nombre d'écrans spécifié lors de l'achat. L'utilisation simultanée sur un nombre d'appareils supérieur à celui autorisé est interdite et peut entraîner la suspension du compte.</li>
              <li>Vous êtes responsable de la sécurité de vos identifiants de connexion.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">3. Utilisation Interdite</h2>
          <p>Il est strictement interdit de :</p>
          <ul className="list-disc list-inside space-y-2">
              <li>Revendre, redistribuer ou diffuser publiquement le service ou son contenu.</li>
              <li>Utiliser un VPN pour contourner les restrictions géographiques si celles-ci sont appliquées.</li>
              <li>Utiliser le service à des fins illégales.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">4. Qualité du Service</h2>
          <p>Nous nous efforçons de fournir un service stable et de haute qualité. Cependant, la qualité de visionnage dépend fortement de votre connexion Internet. Une connexion haut débit (minimum 20 Mbps recommandé) est nécessaire pour une expérience optimale. Nous ne pouvons être tenus responsables des problèmes de performance liés à une connexion Internet lente ou instable de votre côté.</p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">5. Paiement et Renouvellement</h2>
          <p>Les abonnements sont payés d'avance pour la période choisie. Les paiements sont uniques et non récurrents. Il n'y a pas de renouvellement automatique. Vous devrez effectuer une nouvelle commande pour prolonger votre service.</p>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">6. Modification des CGU</h2>
          <p>Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications seront effectives dès leur publication sur le site.</p>
        </>
      ),
    },
    remboursement: {
      title: "Politique de Remboursement",
      body: (
        <>
          <p><strong>Date de dernière mise à jour :</strong> 23 Juillet 2024</p>
          <p>Nous nous engageons à la satisfaction de nos clients. Notre politique de remboursement est conçue pour être claire et équitable. Veuillez la lire attentivement avant de faire un achat.</p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">1. Période de Remboursement</h2>
          <p>Nous offrons une garantie de remboursement de <strong>7 jours</strong> à compter de la date de votre achat. Passé ce délai, aucun remboursement ne sera possible.</p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Conditions d'Éligibilité au Remboursement</h2>
          <p>Pour être éligible à un remboursement, vous devez remplir les conditions suivantes :</p>
          <ul className="list-disc list-inside space-y-2">
              <li>Le service est totalement non fonctionnel ou inaccessible en raison d'un problème technique de notre côté.</li>
              <li>Vous devez avoir contacté notre support technique pour tenter de résoudre le problème. Un remboursement ne sera envisagé que si notre équipe technique est incapable de résoudre votre problème dans un délai de 48 heures.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">3. Cas de Non-Remboursement</h2>
          <p>Un remboursement ne sera <strong>PAS</strong> accordé dans les cas suivants :</p>
          <ul className="list-disc list-inside space-y-2">
              <li>Vous avez changé d'avis après l'achat.</li>
              <li>Vous n'êtes pas satisfait de la liste des chaînes ou du contenu VOD. Nous vous encourageons à poser toutes vos questions avant l'achat.</li>
              <li>Le service ne fonctionne pas en raison d'une mauvaise configuration de votre côté, d'une connexion Internet lente ou instable, ou de restrictions de votre fournisseur d'accès Internet.</li>
              <li>Vous avez violé nos Conditions Générales d'Utilisation.</li>
              <li>Vous avez commandé par erreur un abonnement ou un plan.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">4. Comment Demander un Remboursement</h2>
          <p>Si vous remplissez les conditions d'éligibilité, veuillez envoyer un e-mail à notre support client à <strong>support@iptvpremuim.fr</strong> avec les informations suivantes :</p>
           <ul className="list-disc list-inside space-y-2">
               <li>L'adresse e-mail utilisée lors de l'achat.</li>
               <li>La raison détaillée de votre demande de remboursement.</li>
               <li>Une preuve que vous avez contacté le support pour résoudre le problème (captures d'écran des conversations, etc.).</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">5. Traitement du Remboursement</h2>
          <p>Une fois votre demande reçue et approuvée, le remboursement sera traité via votre méthode de paiement originale dans un délai de 5 à 10 jours ouvrables.</p>
        </>
      )
    }
  };

  const selectedContent = content[page];

  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8">{selectedContent.title}</h1>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none space-y-4">
                {selectedContent.body}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
