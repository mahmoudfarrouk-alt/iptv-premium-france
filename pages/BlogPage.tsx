import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogPost } from '../types';
import MetaTags from '../components/MetaTags';
import StructuredData from '../components/StructuredData';

const blogPosts: BlogPost[] = [
  {
    slug: 'abonnement-iptv-france-guide-premium',
    title: 'Abonnement IPTV France : Le Guide Ultime pour une Expérience Premium',
    date: '25 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: 'Tout ce que vous devez savoir avant de prendre un abonnement IPTV en France. Découvrez comment un service premium peut transformer votre manière de regarder la télévision.',
    imageAlt: 'Un écran de télévision affichant une mosaïque de chaînes IPTV avec le drapeau français en surimpression',
    content: (
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p>Le choix d'un <strong>abonnement IPTV en France</strong> peut sembler complexe face à la multitude d'offres. Pourtant, opter pour un service <strong>IPTV premium</strong> est la garantie d'une expérience utilisateur sans commune mesure. Ce guide vous aidera à y voir plus clair.</p>
            <h3 className="text-slate-900 dark:text-white">Qu'est-ce qui définit un IPTV Premium ?</h3>
            <p>Un service premium se distingue sur plusieurs points cruciaux :</p>
            <ul>
                <li><strong>La Stabilité avant tout :</strong> La caractéristique principale d'un service <strong>IPTV premium</strong> est sa stabilité. Grâce à des serveurs puissants et bien entretenus, vous ne subirez ni coupures ni freezes, même lors des grands événements sportifs.</li>
                <li><strong>Une Qualité d'Image Exceptionnelle :</strong> Oubliez les flux pixellisés. Un bon <strong>abonnement IPTV</strong> vous donne accès à des milliers de chaînes en qualité HD, Full HD et même 4K/UHD.</li>
                <li><strong>Un Catalogue VOD Riche et à Jour :</strong> Au-delà des chaînes en direct, un service premium propose un catalogue de Vidéo à la Demande (VOD) avec des milliers de films et séries récents, mis à jour régulièrement.</li>
                <li><strong>Un Support Client Réactif :</strong> Un problème ? Une question ? Un support client disponible 24/7 est un signe de fiabilité indispensable.</li>
            </ul>
            <h3 className="text-slate-900 dark:text-white">Les Spécificités du Marché IPTV en France</h3>
            <p>En <strong>France</strong>, les spectateurs sont exigeants. Un bon fournisseur doit proposer tous les bouquets français essentiels (Canal+, RMC Sport, beIN Sports, etc.) en haute qualité. La richesse de l'offre, incluant les chaînes régionales et internationales, est également un critère de choix déterminant.</p>
            <h3 className="text-slate-900 dark:text-white">Conclusion : Pourquoi l'Investissement en Vaut la Peine</h3>
            <p>Choisir un <strong>abonnement IPTV premium</strong>, c'est investir dans la tranquillité et la qualité. C'est la certitude de profiter de tous vos programmes favoris dans les meilleures conditions possibles. Ne faites pas de compromis sur votre divertissement.</p>
      </div>
    ),
  },
  {
    slug: 'iptv-premium-sport-direct-france',
    title: 'Pourquoi un IPTV Premium est Essentiel pour le Sport en Direct en France',
    date: '22 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: 'Ne manquez plus aucun match ! Un abonnement IPTV premium est la clé pour accéder à toutes les compétitions sportives en direct, en haute qualité et sans coupure.',
    imageAlt: 'Un stade de football vu depuis les tribunes, avec des logos de chaînes sportives',
    content: (
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p>Pour tout amateur de sport en <strong>France</strong>, rien n'est plus frustrant qu'un flux qui coupe au moment d'un but ou d'une action décisive. C'est là qu'un <strong>abonnement IPTV premium</strong> fait toute la différence, en transformant votre salon en véritable loge de stade.</p>
            <h3 className="text-slate-900 dark:text-white">La Stabilité : Le Nerf de la Guerre pendant les Grands Matchs</h3>
            <p>Lors d'un match de Ligue des Champions ou d'un Grand Prix de F1, les serveurs des services bas de gamme sont surchargés, provoquant des freezes et des décalages. Un service <strong>IPTV premium</strong> utilise une infrastructure serveur robuste, conçue pour supporter des milliers de connexions simultanées sans la moindre faille. C'est la garantie d'une expérience fluide et en temps réel.</p>
            <h3 className="text-slate-900 dark:text-white">Un Accès Total à Toutes les Compétitions</h3>
            <p>Avec la fragmentation des droits de diffusion, suivre toutes vos équipes et sports favoris nécessite de jongler entre plusieurs abonnements coûteux. Le principal avantage d'un bon service <strong>IPTV en France</strong> est de regrouper toutes les chaînes sportives en un seul endroit :</p>
            <ul>
                <li>Football (Ligue 1, Premier League, La Liga, Serie A, Champions League...)</li>
                <li>Rugby (Top 14, Tournoi des 6 Nations...)</li>
                <li>Formule 1, MotoGP</li>
                <li>Tennis (Grands Chelems, Masters 1000...)</li>
                <li>Basket (NBA, EuroLeague), et bien plus encore.</li>
            </ul>
            <h3 className="text-slate-900 dark:text-white">La Qualité 4K pour une Immersion Totale</h3>
            <p>Le sport se vit avec intensité. La qualité d'image 4K/UHD proposée par les abonnements <strong>IPTV premium</strong> vous plonge au cœur de l'action. Chaque détail du terrain, chaque expression des joueurs est retransmis avec une clarté époustouflante. C'est l'assurance de vivre le match comme si vous y étiez.</p>
            <p>Pour un fan de sport, le choix est simple : un <strong>abonnement IPTV</strong> de qualité n'est pas un luxe, c'est une nécessité.</p>
        </div>
    ),
  },
  {
    slug: 'legalite-iptv-france',
    title: 'Légalité de l\'IPTV en France : Risques et Bonnes Pratiques',
    date: '18 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: 'L\'IPTV est-il légal en France ? Nous clarifions la situation, expliquons les risques liés aux offres illégales et comment choisir un service fiable et sécurisé.',
    imageAlt: 'Un marteau de juge à côté d\'un clavier d\'ordinateur',
    content: (
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p>La question de la légalité est centrale lorsqu'on aborde le sujet de l'<strong>IPTV en France</strong>. Il est crucial de bien comprendre les nuances pour faire un choix éclairé et éviter les mauvaises surprises.</p>
            <h3 className="text-slate-900 dark:text-white">L'IPTV est-il Légal ?</h3>
            <p>La technologie IPTV elle-même est parfaitement légale. C'est simplement un mode de diffusion de contenu vidéo via Internet. De nombreux opérateurs légaux, comme Orange ou Free, utilisent l'IPTV pour leurs box TV. Le problème de légalité se pose lorsque des fournisseurs diffusent des chaînes ou des contenus protégés par des droits d'auteur sans posséder les licences de diffusion adéquates.</p>
            <h3 className="text-slate-900 dark:text-white">Les Risques des Fournisseurs IPTV Illégaux</h3>
            <p>Opter pour un <strong>abonnement IPTV</strong> à un prix dérisoire auprès d'un vendeur non identifié vous expose à de nombreux risques :</p>
            <ul>
                <li><strong>Service instable et de mauvaise qualité :</strong> Coupures fréquentes, chaînes qui disparaissent, qualité médiocre.</li>
                <li><strong>Absence totale de support client :</strong> En cas de problème, vous êtes seul.</li>
                <li><strong>Risques de sécurité :</strong> Vos informations de paiement peuvent être compromises, et les applications fournies peuvent contenir des malwares.</li>
                <li><strong>Risques légaux :</strong> En France, la consommation de contenu piraté est illégale et vous expose à des sanctions (amendes, etc.).</li>
            </ul>
            <h3 className="text-slate-900 dark:text-white">Comment Choisir un Service IPTV Fiable ?</h3>
            <p>Pour profiter d'une expérience sereine, privilégiez un service <strong>IPTV premium</strong> qui montre des signes de fiabilité :</p>
            <ul>
                <li><strong>Transparence :</strong> Le fournisseur a un site web professionnel et des informations de contact claires.</li>
                <li><strong>Paiement sécurisé :</strong> Des méthodes de paiement reconnues sont proposées.</li>
                <li><strong>Essai gratuit :</strong> La possibilité de tester le service avant de s'engager est un gage de confiance.</li>
                <li><strong>Support client :</strong> Un service d'assistance réactif est mis à votre disposition.</li>
            </ul>
            <p>En conclusion, bien que des offres illégales existent, il est tout à fait possible de profiter de l'<strong>IPTV en France</strong> de manière sécurisée en choisissant un fournisseur sérieux qui mise sur la qualité de service et la satisfaction client.</p>
        </div>
    ),
  },
  {
    slug: 'quest-ce-que-iptv',
    title: "Qu'est-ce que l'IPTV et comment ça fonctionne en 2024 ?",
    date: '15 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: "Découvrez tout ce qu'il faut savoir sur l'IPTV : sa définition, son fonctionnement, ses avantages et pourquoi c'est la future norme de la télévision.",
    imageAlt: 'Schéma expliquant le fonctionnement de l\'IPTV',
    content: (
      <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
        <p>L'IPTV, ou "Internet Protocol Television", est une technologie qui révolutionne la manière dont nous consommons la télévision. Fini les antennes et les câbles coaxiaux ; avec l'IPTV, vos <strong className="text-slate-900 dark:text-white">chaînes TV en direct</strong> et vos contenus à la demande (VOD) vous parviennent via votre connexion Internet. Mais comment cela fonctionne-t-il exactement ?</p>
        <h3 className="text-slate-900 dark:text-white">Le principe de base de l'IPTV</h3>
        <p>Contrairement à la diffusion traditionnelle (terrestre, satellite, câble) qui envoie un signal en continu, l'IPTV fonctionne sur un modèle de réseau à commutation de paquets, comme le reste d'Internet. Voici les étapes clés :</p>
        <ol>
            <li><strong>Stockage et Encodage :</strong> Les chaînes TV sont reçues par le fournisseur IPTV, puis encodées dans un format numérique compressé (comme H.264 ou H.265).</li>
            <li><strong>Serveurs de diffusion :</strong> Ces flux vidéo sont stockés sur des serveurs puissants.</li>
            <li><strong>Requête de l'utilisateur :</strong> Lorsque vous sélectionnez une chaîne sur votre appareil, une requête est envoyée via Internet à ces serveurs.</li>
            <li><strong>Livraison du flux :</strong> Le serveur vous envoie alors les paquets de données correspondant uniquement à la chaîne que vous avez demandée. Cela rend le système très efficace.</li>
        </ol>
        <h3 className="text-slate-900 dark:text-white">Pourquoi choisir un abonnement IPTV premium ?</h3>
        <p>Si la technologie est accessible, la qualité du service varie énormément. Un <strong className="text-slate-900 dark:text-white">abonnement IPTV premium</strong> comme le nôtre offre des avantages cruciaux :</p>
        <ul>
            <li><strong className="text-slate-900 dark:text-white">Stabilité :</strong> Des serveurs robustes pour un service <strong className="text-slate-900 dark:text-white">IPTV stable</strong>, sans coupures ni mise en mémoire tampon, même pendant les heures de pointe.</li>
            <li><strong className="text-slate-900 dark:text-white">Qualité d'image :</strong> Des flux en haute définition (HD, FHD, 4K) pour une expérience visuelle immersive.</li>
            <li><strong className="text-slate-900 dark:text-white">Vaste catalogue :</strong> Accès à des milliers de chaînes du monde entier, ainsi qu'à d'immenses catalogues de films et séries à la demande.</li>
            <li><strong className="text-slate-900 dark:text-white">Support client :</strong> Une assistance technique pour vous aider à configurer et profiter de votre service.</li>
        </ul>
        <p>En 2024, l'IPTV n'est plus une alternative de niche, mais bien une solution mature et performante qui redéfinit le paysage audiovisuel. C'est la liberté de regarder ce que vous voulez, quand vous voulez, sur l'appareil de votre choix.</p>
      </div>
    ),
  },
  {
    slug: 'choisir-meilleur-abonnement-iptv',
    title: 'Le guide complet pour choisir le meilleur abonnement IPTV en France',
    date: '10 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: 'Face à la multitude d\'offres, comment trouver le meilleur abonnement IPTV ? Suivez nos conseils pour faire le bon choix et éviter les pièges.',
    imageAlt: 'Checklist pour choisir un service IPTV',
    content: (
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p>Le marché de l'IPTV est en pleine expansion, et avec lui, le nombre de fournisseurs. Pour un non-initié, il peut être difficile de s'y retrouver. Comment distinguer une offre de qualité d'une arnaque ? Voici les critères essentiels pour choisir le <strong className="text-slate-900 dark:text-white">meilleur IPTV en France</strong>.</p>
            <h3 className="text-slate-900 dark:text-white">1. La Stabilité du Service avant tout</h3>
            <p>C'est LE critère numéro un. Un service <strong className="text-slate-900 dark:text-white">IPTV stable</strong> est un service qui ne subit pas de freezes (image figée) ou de buffering (mise en mémoire tampon). Renseignez-vous sur la qualité des serveurs du fournisseur. Propose-t-il un essai gratuit ? C'est un excellent moyen de tester la stabilité en conditions réelles, notamment lors d'un grand événement sportif.</p>
            <h3 className="text-slate-900 dark:text-white">2. La Richesse et la Qualité du Contenu</h3>
            <p>Vérifiez la liste des chaînes proposées. Correspond-elle à vos centres d'intérêt (sport, cinéma, chaînes internationales) ? Regardez également la taille et la fraîcheur du catalogue VOD (films et séries). La qualité est aussi primordiale : le fournisseur propose-t-il des flux en 4K et FHD ?</p>
            <h3 className="text-slate-900 dark:text-white">3. La Compatibilité des Appareils</h3>
            <p>Assurez-vous que le service est compatible avec l'appareil que vous comptez utiliser (Smart TV, boîtier Android, Firestick, etc.). Un bon fournisseur propose des guides d'installation clairs pour chaque type d'appareil.</p>
            <h3 className="text-slate-900 dark:text-white">4. Le Support Client</h3>
            <p>Un support client réactif et compétent est un gage de sérieux. En cas de problème, vous devez pouvoir contacter quelqu'un facilement (via WhatsApp, email, ou ticket). Un fournisseur qui se cache derrière l'anonymat est souvent un mauvais signe.</p>
            <h3 className="text-slate-900 dark:text-white">5. Le Rapport Qualité/Prix</h3>
            <p>Méfiez-vous des offres trop alléchantes. Un prix dérisoire cache souvent un service de mauvaise qualité. Comparez les tarifs, mais mettez-les toujours en perspective avec les critères ci-dessus. Un <strong className="text-slate-900 dark:text-white">abonnement IPTV premium</strong> a un coût, mais il est le garant de votre tranquillité et de votre plaisir de visionnage.</p>
            <p>En suivant ces conseils, vous mettrez toutes les chances de votre côté pour trouver un fournisseur fiable qui transformera votre expérience télévisuelle.</p>
        </div>
    ),
  },
  {
    slug: 'iptv-vs-streaming-traditionnel',
    title: 'IPTV vs Streaming traditionnel (Netflix, Disney+) : Lequel choisir ?',
    date: '5 Juillet 2024',
    author: 'L\'équipe PremiumIPTV',
    excerpt: 'IPTV, Netflix, Prime Video... Les offres de contenu n\'ont jamais été aussi nombreuses. Nous analysons les forces et les faiblesses de chaque système pour vous aider à décider.',
    imageAlt: 'Logos de services IPTV et de streaming traditionnel côte à côte',
    content: (
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p>Le salon est devenu un champ de bataille pour votre attention. D'un côté, les géants du streaming comme Netflix, Disney+ ou Prime Video. De l'autre, la flexibilité et l'exhaustivité de l'IPTV. Alors, quelle est la meilleure option pour vous ?</p>
            <h3 className="text-slate-900 dark:text-white">La grande différence : le direct vs la demande</h3>
            <p>La distinction fondamentale réside dans le type de contenu principal :</p>
            <ul>
                <li><strong>Streaming traditionnel (SVoD) :</strong> Ces plateformes sont des bibliothèques de contenus à la demande. Vous y trouvez des films, des séries et des documentaires que vous pouvez regarder à tout moment. Elles ne proposent généralement pas de <strong className="text-slate-900 dark:text-white">chaînes TV en direct</strong>.</li>
                <li><strong>IPTV :</strong> Le cœur de l'IPTV est la diffusion de milliers de chaînes de télévision en direct du monde entier. C'est la solution idéale pour le sport, les informations et les émissions en temps réel. De plus, les services d'<strong className="text-slate-900 dark:text-white">IPTV premium</strong> incluent d'énormes catalogues VOD, combinant le meilleur des deux mondes.</li>
            </ul>
            <h3 className="text-slate-900 dark:text-white">Tableau Comparatif</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                    <thead className="bg-gray-100 dark:bg-slate-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Critère</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">IPTV Premium</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Streaming (Netflix, etc.)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-white">Contenu Principal</td>
                            <td className="px-6 py-4 whitespace-nowrap">Chaînes TV en direct + VOD</td>
                            <td className="px-6 py-4 whitespace-nowrap">VOD (films, séries, documentaires)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-white">Sport en direct</td>
                            <td className="px-6 py-4 whitespace-nowrap text-green-600 dark:text-green-400 font-bold">Excellent</td>
                            <td className="px-6 py-4 whitespace-nowrap">Limité ou inexistant</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-white">Volume de contenu</td>
                            <td className="px-6 py-4 whitespace-nowrap">Massif (dizaines de milliers de titres)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Important, mais limité à la plateforme</td>
                        </tr>
                         <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-white">Prix</td>
                            <td className="px-6 py-4 whitespace-nowrap">Un seul abonnement pour tout</td>
                            <td className="px-6 py-4 whitespace-nowrap">Multiples abonnements nécessaires</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className="text-slate-900 dark:text-white">Conclusion : Lequel est fait pour vous ?</h3>
            <p>Les deux systèmes ne sont pas forcément opposés et peuvent être complémentaires. Cependant :</p>
            <ul>
                <li>Si vous êtes un fan de <strong className="text-slate-900 dark:text-white">sport en direct</strong>, que vous aimez zapper entre les chaînes d'information internationales ou que vous voulez un accès "tout-en-un" à un catalogue gigantesque, l'<strong className="text-slate-900 dark:text-white">abonnement IPTV</strong> est sans conteste la solution la plus complète et la plus rentable.</li>
                <li>Si vous ne regardez que quelques séries ou films spécifiques et que le direct ne vous intéresse pas, un abonnement à un service de SVoD peut suffire.</li>
            </ul>
        </div>
    ),
  },
];

const BlogPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const postSlug = searchParams.get('post');
        if (postSlug) {
            const post = blogPosts.find(p => p.slug === postSlug);
            setSelectedPost(post || null);
        } else {
            setSelectedPost(null);
        }
    }, [searchParams]);

    if (selectedPost) {
        // Dynamically generate meta description and keywords for SEO
        const metaDescription = selectedPost.excerpt;

        const stopWords = ['le', 'la', 'les', 'de', 'des', 'du', 'et', 'ou', 'est', 'sont', 'un', 'une', 'en', 'pour', 'par', 'que', 'qui', 'quoi', 'comment', 'ça', 'vs', 'lequel', 'choisir', 'ce', 'qu', 'il', 'faut', 'savoir', 'sur', 'dans'];
        const baseKeywords = ['IPTV', 'abonnement IPTV', 'IPTV premium', 'chaînes TV', 'Premium IPTV France'];
        const titleWords = selectedPost.title
            .toLowerCase()
            .replace(/[?,:;()']/g, '') // Remove punctuation
            .split(/\s+/) // Split by whitespace
            .filter(word => !stopWords.includes(word) && word.length > 2);

        const keywords = [...new Set([...baseKeywords, ...titleWords])].join(', ');

        return (
            <MetaTags
                title={selectedPost.title}
                description={metaDescription}
                keywords={keywords}
            >
                <BlogPostView post={selectedPost} />
            </MetaTags>
        );
    }

    return (
        <MetaTags
            title="Blog IPTV | Conseils, Guides et Actualités"
            description="Conseils, actualités et guides sur le monde de l'IPTV pour vous aider à tirer le meilleur de votre abonnement premium."
            keywords="blog IPTV, guide IPTV, actualités IPTV, conseils IPTV"
        >
            <BlogListView />
        </MetaTags>
    );
};

const BlogListView: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Notre Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Conseils, actualités et guides sur le monde de l'IPTV pour vous aider à tirer le meilleur de votre abonnement.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img className="h-48 w-full object-cover" src={`https://picsum.photos/400/200?random=${post.slug}`} alt={post.imageAlt} />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date} par {post.author}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                <Link to={`/blog?post=${post.slug}`} className="mt-auto text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold">
                  Lire la suite &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPostView: React.FC<{ post: BlogPost }> = ({ post }) => {
    const convertFrenchDateToISO = (dateString: string): string => {
        const months: { [key: string]: string } = {
            'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04', 'mai': '05', 'juin': '06',
            'juillet': '07', 'août': '08', 'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
        };
        const parts = dateString.split(' ');
        if (parts.length !== 3) return new Date().toISOString();

        const day = parts[0].padStart(2, '0');
        const month = months[parts[1].toLowerCase()];
        const year = parts[2];

        if (!day || !month || !year) return new Date().toISOString();
        
        return `${year}-${month}-${day}`;
    };

    const blogPostSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://iptvpremuim.fr/#/blog?post=${post.slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://picsum.photos/800/400?random=${post.slug}`,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Premium IPTV France",
            "logo": {
                "@type": "ImageObject",
                "url": "https://iptvpremuim.fr/favicon.svg"
            }
        },
        "datePublished": convertFrenchDateToISO(post.date)
    };
    
    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
            <StructuredData data={blogPostSchema} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article>
                    <Link to="/blog" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 mb-8 inline-block">&larr; Retour au blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">{post.title}</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date} par {post.author}</p>
                    <img className="w-full rounded-lg shadow-lg mb-8" src={`https://picsum.photos/800/400?random=${post.slug}`} alt={post.imageAlt} />
                    {post.content}
                </article>
            </div>
        </div>
    );
};

export default BlogPage;