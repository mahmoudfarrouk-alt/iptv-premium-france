import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode, lang: string }> = ({ children, lang }) => (
  <pre className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-4 overflow-x-auto">
    <code className={`language-${lang} text-sm text-slate-800 dark:text-gray-200`}>
      {children}
    </code>
  </pre>
);

const SeoGuide: React.FC = () => {
  const robotsTxtContent = `User-agent: *
Allow: /

Sitemap: https://votre-domaine.com/sitemap.xml`;

  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.com/</loc>
    <lastmod>2024-07-21</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://votre-domaine.com/#/abonnements</loc>
    <lastmod>2024-07-21</lastmod>
    <priority>0.80</priority>
  </url>
  <!-- Ajouter les autres URLs ici -->
</urlset>`;

  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Guide Technique SEO</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Recommandations techniques pour optimiser le référencement de votre site sur Google.
          </p>
        </div>

        <div className="mt-12 space-y-12 text-gray-700 dark:text-gray-300">
          
          <section>
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-4">1. Fichiers Essentiels pour le SEO</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-2">Favicon</h3>
            <p>Le favicon est l'icône de votre site qui apparaît dans l'onglet du navigateur. Il renforce votre image de marque. Assurez-vous d'avoir un fichier `favicon.ico` ou `favicon.svg` à la racine de votre site et de le lier dans votre `index.html` :</p>
            <CodeBlock lang="html">{`<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`}</CodeBlock>
            
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-2">robots.txt</h3>
            <p>Ce fichier, placé à la racine de votre site, indique aux robots des moteurs de recherche quelles pages ils peuvent ou ne peuvent pas explorer. Pour un site standard, autorisez tout et indiquez l'emplacement de votre sitemap.</p>
            <CodeBlock lang="text">{robotsTxtContent}</CodeBlock>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-2">sitemap.xml</h3>
            <p>Le sitemap est un fichier XML qui liste toutes les URLs importantes de votre site. Il aide Google à découvrir et à indexer votre contenu plus efficacement. Voici un exemple de base :</p>
            <CodeBlock lang="xml">{sitemapXmlContent}</CodeBlock>
            <p>N'oubliez pas de soumettre ce fichier à la Google Search Console.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-4">2. Optimisation des Performances</h2>
            <p>La vitesse de chargement est un facteur de classement crucial.</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Compression d'images :</strong> Utilisez des formats modernes comme WebP et compressez vos images sans perte de qualité significative. Des outils comme Squoosh ou TinyPNG sont excellents.</li>
              <li><strong>Lazy Loading :</strong> Le chargement différé des images (comme implémenté sur la page Chaînes) permet de ne charger les images que lorsqu'elles deviennent visibles à l'écran, accélérant le chargement initial.</li>
              <li><strong>Minification du Code :</strong> Les outils de build modernes (comme Vite ou Webpack) minifient automatiquement le HTML, CSS, et JavaScript pour réduire la taille des fichiers.</li>
              <li><strong>Mise en cache du navigateur (Caching) :</strong> Configurez votre serveur pour qu'il envoie des en-têtes de mise en cache. Cela permet aux visiteurs récurrents de charger le site plus rapidement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-4">3. Suivi et Analyse</h2>
            <p>Pour mesurer vos performances SEO, il est indispensable d'utiliser des outils d'analyse.</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Google Analytics :</strong> Intégrez le tag Google Analytics pour suivre le trafic, le comportement des utilisateurs, les conversions, etc.</li>
                <li><strong>Google Search Console :</strong> Cet outil gratuit de Google vous permet de surveiller la performance de votre site dans les résultats de recherche, de voir les mots-clés qui amènent du trafic, et d'identifier les problèmes techniques.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SeoGuide;