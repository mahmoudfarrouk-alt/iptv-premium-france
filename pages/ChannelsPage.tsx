import React, { useState, useMemo, useEffect } from 'react';
import StructuredData from '../components/StructuredData';

// --- Interfaces & Data ---
interface SubCategory {
    name: string;
    channels: string[];
}

interface Category {
    name: string;
    approxCount: string;
    subcategories: SubCategory[];
}

interface Region {
    name: string;
    categories: Category[];
}

const channelDataByRegion: Region[] = [
    {
        name: 'Europe',
        categories: [
            {
                name: 'FRANCE',
                approxCount: '800+',
                subcategories: [
                    { name: 'Général (Haute Qualité FHD/4K)', channels: ['TF1 4K/FHD', 'FRANCE 2 4K/FHD', 'FRANCE 3 National', 'M6 4K/FHD', 'ARTE 4K/FHD', 'C8 FHD', 'W9 FHD', 'TMC FHD', 'TFX FHD', 'NRJ 12', 'France 4', 'Culturebox', '6TER FHD', 'RTS UN/DEUX FHD', 'TV5 MONDE', 'TV BREIZH FHD', 'AB1 FHD'] },
                    { name: 'Divertissement & Documentaire', channels: ['RMC DECOUVERTE FHD', 'RMC STORY FHD', 'USHUAIA TV 4K/FHD', 'NATIONAL GEO 4K/FHD', 'NAT GEO WILD 4K/FHD', 'PLANETE+ FHD', 'PLANETE+ A&E', 'HISTOIRE TV FHD', 'SCIENCE & VIE TV', 'ANIMAUX', 'CHASSE & PÊCHE', 'TREK', 'Voyage'] },
                    { name: 'Cinéma & Séries', channels: ['CANAL+ 4K/FHD', 'CANAL+ CINEMA(S) 4K/FHD', 'CANAL+ GRAND ECRAN 4K/FHD', 'CANAL+ SERIES FHD', 'OCS MAX/PULP/GEANTS FHD', 'ACTION FHD', 'PARAMOUNT CHANNEL FHD', 'CINE+ PREMIER/FRISSON/EMOTION/CLASSIC', 'TCM CINEMA', 'WARNER TV', 'POLAR+', 'SERIE CLUB'] },
                    { name: 'Sport', channels: ['Ligue 1 Uber Eats (Pass Ligue 1)', 'RMC SPORT 1-4 UHD/FHD', 'beIN SPORTS 1-10 FHD', 'EUROSPORT 1-2 4K/FHD', 'CANAL+ SPORT 360', 'CANAL+ SPORT 4K/FHD', 'CANAL+ FOOT', 'FOOT+ 24/24 FHD', 'GOLF+ 4K/FHD', 'INFOSPORT+ FHD', 'L\'EQUIPE 21', 'DAZN FRANCE', 'Multisports 1-6'] },
                    { name: 'Jeunesse', channels: ['DISNEY CHANNEL FHD', 'NICKELODEON FHD/4TEEN', 'CANAL J FHD', 'GULLI', 'MANGAS', 'CARTOON NETWORK FHD', 'BOOMERANG', 'TIJI', 'PIWI+', 'Toonami'] },
                    { name: 'Actualités & Régions', channels: ['BFM TV FHD', 'CNEWS FHD', 'LCI FHD', 'FRANCE 24 FHD', 'EURONEWS', 'FRANCEINFO', 'Toutes les France 3 Régions'] },
                    { name: 'Musique', channels: ['M6 MUSIC', 'NRJ HITS', 'TRACE URBAN', 'MTV HITS', 'RFM TV', 'MEZZO LIVE HD', 'Melody', 'Stingray'] },
                ]
            },
            {
                name: 'BELGIQUE',
                approxCount: '150+',
                subcategories: [
                    { name: 'Général', channels: ['LA UNE HD', 'LA DEUX', 'LA TROIS', 'RTL TVI HD', 'CLUB RTL', 'PLUG RTL', 'EEN HD', 'VTM HD', 'VIER HD', 'CANVAS'] },
                    { name: 'Sport', channels: ['VOOsport World 1-5', 'Play Sports 1-8 HD', 'Proximus Sports', 'Eleven Pro League 1-3 HD'] },
                ]
            },
            {
                name: 'SUISSE',
                approxCount: '100+',
                subcategories: [
                    { name: 'Général', channels: ['RTS 1-2 HD', 'SRF 1-2 HD', 'RSI LA 1-2 HD', 'LFM TV', 'TVM3', '3+', '4+', '5+'] },
                    { name: 'Sport', channels: ['MySports 1-10 HD', 'Blue Sport 1-10 HD (Teleclub)', 'DAZN'] },
                ]
            },
            {
                name: 'ALLEMAGNE',
                approxCount: '700+',
                subcategories: [
                    { name: 'Général', channels: ['ARD Das Erste HD', 'ZDF HD', 'RTL HD', 'SAT.1 HD', 'ProSieben HD', 'VOX HD', 'Kabel Eins HD', 'ARTE DE', '3sat'] },
                    { name: 'Sport', channels: ['Sky Sport 1-10 HD', 'Sky Sport Bundesliga 1-10 HD', 'DAZN 1 & 2 BAR HD', 'Sport1+ HD', 'EUROSPORT 1 & 2 DE HD'] },
                    { name: 'Cinéma', channels: ['Sky Cinema Premieren HD', 'Sky Cinema Action HD', 'Sky Atlantic HD', 'TNT Film HD', '13th Street HD', 'SYFY HD'] },
                ]
            },
            {
                name: 'ITALIE',
                approxCount: '600+',
                subcategories: [
                    { name: 'Général', channels: ['RAI 1-3 UHD', 'Canale 5 UHD', 'Italia 1 UHD', 'Rete 4 UHD', 'LA7 UHD'] },
                    { name: 'Sport', channels: ['Sky Sport Uno UHD', 'Sky Sport Calcio UHD', 'Sky Sport F1 UHD', 'Sky Sport NBA UHD', 'DAZN Serie A UHD', 'EUROSPORT 1 & 2 IT HD'] },
                    { name: 'Cinéma', channels: ['Sky Cinema Uno UHD', 'Sky Cinema Due UHD', 'Sky Cinema Collection', 'Premium Cinema 1-3 FHD', 'Rai Movie UHD'] },
                ]
            },
            {
                name: 'ESPAGNE',
                approxCount: '500+',
                subcategories: [
                    { name: 'Général', channels: ['La 1 HD', 'Antena 3 HD', 'Telecinco HD', 'Cuatro HD', 'laSexta HD'] },
                    { name: 'Sport', channels: ['M+ LaLiga TV HD', 'M+ Liga de Campeones HD', 'DAZN 1-4 HD', 'GOL PLAY', 'EUROSPORT 1 & 2 ES HD'] },
                    { name: 'Cinéma', channels: ['M+ Estrenos HD', 'M+ Acción HD', 'FOX HD', 'AXN HD', 'TCM HD', 'Calle 13 HD'] },
                ]
            },
            {
                name: 'PORTUGAL',
                approxCount: '400+',
                subcategories: [
                    { name: 'Général', channels: ['RTP 1 HD', 'RTP 2 HD', 'SIC HD', 'TVI HD', 'CMTV HD'] },
                    { name: 'Sport', channels: ['Sport TV 1-6 HD', 'Eleven Sports 1-6 HD', 'BTV HD (Benfica TV)', 'Canal 11 HD'] },
                    { name: 'Cinéma', channels: ['TVCine Top HD', 'TVCine Edition HD', 'Hollywood HD', 'FOX Movies HD', 'AXN HD'] },
                ]
            },
            {
                name: 'PAYS-BAS',
                approxCount: '300+',
                subcategories: [
                    { name: 'Général', channels: ['NPO 1-3 HD', 'RTL 4-8 HD', 'SBS 6/9 HD', 'Veronica HD'] },
                    { name: 'Sport', channels: ['Ziggo Sport Select HD', 'Ziggo Sport Voetbal', 'ESPN 1-4 NL HD', 'Viaplay Xtra'] },
                    { name: 'Cinéma', channels: ['Film1 Premiere HD', 'Film1 Action HD', 'RTL Crime'] },
                ]
            },
            {
                name: 'SCANDINAVIE (SE/DK/NO/FI)',
                approxCount: '500+',
                subcategories: [
                    { name: 'Général', channels: ['SVT1 (SE)', 'DR1 (DK)', 'NRK1 (NO)', 'YLE TV1 (FI)', 'TV4 (SE)', 'TV2 (DK/NO)'] },
                    { name: 'Sport', channels: ['Viaplay Ultra HD', 'Viasat Sport Premium HD', 'C More Sport 1-2 HD', 'TV3 Sport'] },
                    { name: 'Cinéma', channels: ['Viasat Film Premiere', 'C More First HD', 'SF-Kanalen'] },
                ]
            },
            {
                name: 'POLOGNE',
                approxCount: '300+',
                subcategories: [
                    { name: 'Général', channels: ['TVP 1-2 HD', 'Polsat HD', 'TVN HD'] },
                    { name: 'Sport', channels: ['Canal+ Sport 1-4 HD', 'Polsat Sport Premium 1-6 PPV', 'Eleven Sports 1-4 HD', 'TVP Sport HD'] },
                    { name: 'Cinéma', channels: ['Canal+ Film HD', 'HBO 1-3 HD', 'Cinemax HD', 'Filmbox Premium'] },
                ]
            },
            {
                name: 'GRÈCE & CHYPRE',
                approxCount: '250+',
                subcategories: [
                    { name: 'Général', channels: ['ERT 1-3 HD', 'Alpha HD', 'ANT1 HD', 'Skai HD', 'Star HD'] },
                    { name: 'Sport', channels: ['Cosmote Sport 1-9 HD', 'Novasports 1-6 HD', 'Cytavision Sports (CY)'] },
                ]
            },
        ]
    },
    {
        name: 'UK',
        categories: [
            {
                name: 'UK - GÉNÉRAL',
                approxCount: '300+',
                subcategories: [
                    { name: 'Chaînes Nationales', channels: ['BBC ONE UHD', 'BBC TWO UHD', 'BBC Three', 'BBC Four', 'ITV 1 UHD', 'CHANNEL 4 FHD', 'CHANNEL 5 FHD'] },
                    { name: 'Divertissement', channels: ['Sky Showcase HD', 'Sky Max HD', 'Sky Atlantic FHD', 'Sky Witness', 'Sky Comedy', 'Dave FHD', 'Gold', 'Alibi HD'] },
                    { name: 'Irlande', channels: ['RTÉ One HD', 'RTÉ2 HD', 'Virgin Media One HD', 'TG4 HD'] },
                ]
            },
            {
                name: 'UK - SPORTS',
                approxCount: '400+',
                subcategories: [
                    { name: 'Football', channels: ['Sky Sports Premier League UHD', 'Sky Sports Football UHD', 'TNT Sports 1-4 UHD (BT Sport)', 'Sky Sports Main Event UHD'] },
                    { name: 'Autres Sports', channels: ['Sky Sports F1 UHD', 'Sky Sports Cricket UHD', 'Sky Sports Golf UHD', 'Sky Sports Arena UHD', 'Sky Sports NFL', 'Sky Sports Racing'] },
                    { name: 'Chaînes Club & Ligues', channels: ['MUTV', 'LFCTV', 'Chelsea TV', 'City TV', 'EFL iFollow', 'National League TV'] },
                ]
            },
            {
                name: 'UK - CINÉMA',
                approxCount: '200+',
                subcategories: [
                    { name: 'Sky Cinema', channels: ['Sky Cinema Premiere UHD', 'Sky Cinema Hits UHD', 'Sky Cinema Greats', 'Sky Cinema Family', 'Sky Cinema Action UHD', 'Sky Cinema Comedy UHD', 'Sky Cinema Thriller', 'Sky Cinema Sci-Fi & Horror'] },
                    { name: 'Autres Films', channels: ['TCM FHD', 'Film 4 FHD', 'Sony Movies', 'Talking Pictures TV'] },
                ]
            },
            {
                name: 'UK - DOCUMENTAIRES',
                approxCount: '150+',
                subcategories: [
                    { name: 'Nature & Science', channels: ['Sky Nature FHD', 'Sky Documentaries FHD', 'Nat Geo Wild FHD', 'Discovery FHD', 'Animal Planet'] },
                    { name: 'Histoire & Crime', channels: ['Sky History FHD', 'Sky Crime FHD', 'Crime+Investigation', 'Yesterday'] },
                ]
            },
             {
                name: 'UK - PPV & ÉVÉNEMENTS',
                approxCount: '500+',
                subcategories: [
                    { name: 'Événements', channels: ['Sky Sports Box Office HD', 'TNT Sports Box Office', 'UFC PPV UHD', 'WWE Network', 'DAZN PPV', 'FITE TV'] },
                    { name: 'Red Button', channels: ['BBC Red Button 1-8', 'Sky Sports Red Button'] },
                ]
            },
             {
                name: 'UK - JEUNESSE',
                approxCount: '100+',
                subcategories: [
                    { name: 'Chaînes', channels: ['CBBC', 'CBeebies', 'Nickelodeon', 'Nick Jr.', 'Cartoon Network', 'Boomerang', 'Disney Channel'] },
                ]
            },
             {
                name: 'UK - MUSIQUE & 24/7',
                approxCount: '350+',
                subcategories: [
                    { name: 'Musique', channels: ['MTV Hits', 'MTV Base', 'The BOX', 'Kiss', 'Magic', 'Karaoke Channels'] },
                    { name: 'Chaînes 24/7', channels: ['24/7 The Simpsons', '24/7 Friends', '24/7 The Office', '24/7 Movie Collections'] },
                ]
            },
        ]
    },
    {
        name: 'USA & Canada',
        categories: [
            {
                name: 'USA - GÉNÉRAL',
                approxCount: '1500+',
                subcategories: [
                    { name: 'Chaînes Nationales (Locals)', channels: ['ABC HD', 'CBS HD', 'NBC HD', 'FOX HD (Est/West)', 'The CW', 'PBS'] },
                    { name: 'Câble Premium', channels: ['HBO', 'AMC HD', 'TNT HD', 'TBS', 'FX', 'USA Network', 'Showtime', 'Starz'] },
                    { name: 'Actualités', channels: ['CNN', 'Fox News', 'MSNBC', 'CNBC', 'BBC World News America'] },
                ]
            },
            {
                name: 'USA - SPORTS',
                approxCount: '2000+',
                subcategories: [
                    { name: 'Ligues Majeures', channels: ['ESPN 1-4', 'FOX SPORTS 1-2', 'NFL Network', 'NBA TV', 'MLB Network', 'NHL Network', 'CBS Sports Network'] },
                    { name: 'Packages Sportifs', channels: ['NFL Sunday Ticket', 'NBA League Pass', 'MLB Extra Innings', 'NHL Center Ice', 'ESPN+'] },
                    { name: 'Événements', channels: ['ESPN+ PPV (UFC)', 'WWE Network', 'DAZN USA', 'Pay-Per-View Events'] },
                ]
            },
            {
                name: 'USA - CINÉMA',
                approxCount: '500+',
                subcategories: [
                    { name: 'Films', channels: ['HBO', 'Showtime', 'Cinemax', 'Starz', 'EPIX', 'TCM', 'FXM', 'AMC Theaters On Demand'] },
                ]
            },
            {
                name: 'USA - 24/7 & AUTRES',
                approxCount: '1000+',
                subcategories: [
                    { name: 'Chaînes 24/7', channels: ['Séries populaires en continu', 'Collections de films par genre/acteur', 'Dessins animés classiques'] },
                ]
            },
            {
                name: 'CANADA',
                approxCount: '1000+',
                subcategories: [
                    { name: 'Anglophone', channels: ['CBC HD', 'CTV HD', 'Global HD', 'CityTV', 'Showcase', 'History Canada'] },
                    { name: 'Francophone (Québec)', channels: ['ICI Radio-Canada Télé', 'TVA HD', 'Noovo', 'Télé-Québec', 'Super Écran', 'Z télé'] },
                    { name: 'Sport', channels: ['TSN 1-5', 'Sportsnet (East, West, 360, ONE)', 'RDS', 'TVA Sports', 'NBA TV Canada'] },
                ]
            }
        ]
    },
    {
        name: 'Ex-YU',
        categories: [
            {
                name: 'BALKANS (SRB/HR/BiH...)',
                approxCount: '500+',
                subcategories: [
                    { name: 'Général', channels: ['RTS 1 (SR)', 'HRT 1 (HR)', 'BHT 1 (BIH)', 'Pink', 'Prva', 'Nova TV (HR)', 'OBN'] },
                    { name: 'Sport', channels: ['Arena Sport 1-10 Premium', 'Sport Klub 1-10 HD', 'Arena Sport BIH', 'HNTV'] },
                    { name: 'Divertissement & Films', channels: ['Grand TV', 'CMC Music', 'Klasik TV', 'Cinestar TV', 'HBO Adria', 'FOX Adria'] },
                ]
            },
            {
                name: 'ALBANIE & KOSOVO',
                approxCount: '500+',
                subcategories: [
                    { name: 'Général', channels: ['Top Channel HD', 'Klan TV HD', 'Vizion Plus HD', 'RTK 1 HD', 'RTV21'] },
                    { name: 'Sport', channels: ['SuperSport 1-7 HD', 'Tring Sport 1-4 HD', 'K Sport 1-5 HD', 'Art Sport 1-6 HD'] },
                    { name: 'Musique & Films', channels: ['My Music HD', 'Film Një HD', 'Film Aksion', 'Digitalb Gold'] },
                ]
            },
        ]
    },
    {
        name: 'Monde',
        categories: [
            {
                name: 'MONDE ARABE',
                approxCount: '1500+',
                subcategories: [
                    { name: 'Divertissement', channels: ['MBC 1/2/3/4/Action/Drama', 'Rotana Cinema/Classic', 'OSN Yahala/Movies/Series', 'Dubai One', 'AD Drama'] },
                    { name: 'Sport', channels: ['beIN Sports Global 1-16 HD (AR)', 'beIN Sports XTRA/PREMIUM', 'AD Sports 1-6 HD', 'SSC Sports 1-7 HD', 'Dubai Sports', 'KSA Sports', 'OnTime Sports'] },
                    { name: 'Actualités', channels: ['Al Jazeera', 'Al Arabiya', 'Sky News Arabia', 'BBC Arabic'] },
                    { name: 'Maroc', channels: ['Al Aoula', '2M Maroc', 'Arryadia', 'Medi 1 TV', 'Tamazight'] },
                    { name: 'Algérie', channels: ['Echorouk TV', 'El Heddaf TV', 'Canal Algérie', 'A3', 'Ennahar TV'] },
                    { name: 'Tunisie', channels: ['Watania 1/2', 'El Hiwar Ettounsi', 'Nessma TV', 'Attessia TV'] },
                    { name: 'Egypte & Golfe', channels: ['DMC', 'ON E', 'CBC', 'Kuwait TV', 'Qatar TV', 'Al Kass Sports'] },
                ]
            },
            {
                name: 'TURQUIE',
                approxCount: '400+',
                subcategories: [
                    { name: 'Général', channels: ['TRT 1', 'Kanal D', 'ATV', 'Star TV', 'Show TV', 'TV8', 'FOX TR'] },
                    { name: 'Sport', channels: ['beIN Sports TR 1-5 HD', 'TRT Spor', 'A Spor', 'S Sport 1-2 HD', 'Exxen Spor'] },
                ]
            },
            {
                name: 'AMÉRIQUE LATINE',
                approxCount: '1000+',
                subcategories: [
                    { name: 'Brésil', channels: ['Globo HD', 'RecordTV', 'SBT', 'Band', 'SporTV 1-4', 'Premiere Clubes', 'ESPN Brasil', 'Combate'] },
                    { name: 'Mexique', channels: ['Las Estrellas', 'Azteca Uno', 'Canal 5', 'TUDN', 'Fox Sports MX', 'ESPN MX'] },
                    { name: 'Argentine', channels: ['Telefe', 'El Trece', 'TV Pública', 'TyC Sports', 'ESPN/Fox Sports Argentina'] },
                    { name: 'Colombie & autres', channels: ['Caracol', 'RCN', 'Win Sports+', 'Chilevisión', 'TVN Chile'] },
                ]
            },
            {
                name: 'AFRIQUE',
                approxCount: '800+',
                subcategories: [
                    { name: 'Francophone', channels: ['RTI 1 (CI)', '2STV (SN)', 'CRTV (CM)', 'ORTM (ML)', 'Canal+ Afrique (Sport, Cinema...)', 'NCI', 'A+'] },
                    { name: 'Anglophone', channels: ['SuperSport (toutes les chaînes)', 'NTA (Nigeria)', 'GTV (Ghana)', 'SABC (Afrique du Sud)', 'DSTV Bouquets'] },
                ]
            },
            {
                name: 'ASIE',
                approxCount: '1200+',
                subcategories: [
                    { name: 'Inde & Pakistan', channels: ['Star Plus', 'Sony Entertainment', 'Zee TV', 'Colors', 'Star Sports', 'Sony TEN', 'PTT Sports', 'Geo Super'] },
                    { name: 'Philippines', channels: ['ABS-CBN', 'GMA', 'TV5', 'NBA TV Philippines'] },
                    { name: 'Autres', channels: ['CCTV-5 (Chine)', 'NHK World (Japon)', 'KBS World (Corée)', 'beIN Sports Asia', 'TVB (Hong Kong)'] },
                ]
            },
             {
                name: 'OCÉANIE & AUTRES',
                approxCount: '100+',
                subcategories: [
                    { name: 'Australie', channels: ['ABC', 'Seven', 'Nine', 'TEN', 'Fox Sports', 'beIN Sports Australia'] },
                    { name: 'Russie', channels: ['Channel One', 'Russia 1', 'Match TV', 'NTV'] },
                ]
            }
        ]
    }
];

// --- Helper Components ---
const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return (
        <>
            {text.split(regex).map((part, i) =>
                regex.test(part) ? <mark key={i} className="bg-yellow-400 text-black px-0">{part}</mark> : part
            )}
        </>
    );
};

const AccordionRegion: React.FC<{ region: Region; searchTerm: string; initiallyOpen: boolean }> = ({ region, searchTerm, initiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);

    useEffect(() => {
        if (searchTerm && region.categories.length > 0) {
            setIsOpen(true);
        } else if (!searchTerm) {
            setIsOpen(initiallyOpen);
        }
    }, [searchTerm, region.categories.length, initiallyOpen]);
    
    return (
        <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white dark:bg-slate-900 rounded-md">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center text-left p-4 focus:outline-none hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
                    aria-expanded={isOpen}
                >
                    <span className="text-2xl font-bold text-slate-900 dark:text-white"><HighlightedText text={region.name} highlight={searchTerm} /></span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 border-t border-gray-200 dark:border-slate-700 space-y-6">
                        {region.categories.map(category => (
                            <div key={category.name}>
                                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                                    <HighlightedText text={category.name} highlight={searchTerm} />
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">({category.approxCount} chaînes)</span>
                                </h3>
                                {category.subcategories.map(sub => (
                                    <div key={sub.name} className="ml-4 mb-2">
                                        <p className="font-semibold text-gray-800 dark:text-gray-300"><HighlightedText text={sub.name} highlight={searchTerm} /> :</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                                            {sub.channels.map((ch, i) => (
                                                <React.Fragment key={ch}>
                                                    <HighlightedText text={ch} highlight={searchTerm} />
                                                    {i < sub.channels.length - 1 ? ', ' : ''}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
const ChannelsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IPTV Service",
        "provider": {
            "@type": "Organization",
            "name": "Premium IPTV France"
        },
        "name": "Catalogue de Chaînes IPTV",
        "description": "Accès à plus de 20 000 chaînes de télévision en direct, films et séries VOD du monde entier en qualité 4K/FHD. Inclut les bouquets France, UK, USA, Sports, Cinéma et bien plus.",
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        }
    };

    const filteredRegions = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return channelDataByRegion;

        return channelDataByRegion
            .map(region => {
                const regionNameMatches = region.name.toLowerCase().includes(term);

                const filteredCategories = region.categories
                    .map(category => {
                        const categoryNameMatches = category.name.toLowerCase().includes(term);

                        const matchingSubcategories = category.subcategories.filter(sub =>
                            sub.name.toLowerCase().includes(term) ||
                            sub.channels.some(ch => ch.toLowerCase().includes(term))
                        );

                        if (categoryNameMatches || matchingSubcategories.length > 0) {
                            return {
                                ...category,
                                subcategories: categoryNameMatches ? category.subcategories : matchingSubcategories
                            };
                        }
                        return null;
                    })
                    .filter((c): c is Category => c !== null);

                if (regionNameMatches || filteredCategories.length > 0) {
                    return {
                        ...region,
                        categories: regionNameMatches && filteredCategories.length === 0 ? region.categories : filteredCategories
                    };
                }

                return null;
            })
            .filter((r): r is Region => r !== null);
    }, [searchTerm]);

    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-950 animate-fadeIn">
            <StructuredData data={serviceSchema} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Notre Catalogue Mondial de +20 000 Chaînes</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Explorez nos milliers de chaînes classées par région. Utilisez la recherche pour trouver exactement ce que vous cherchez.
                    </p>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher une région, un pays, une chaîne (ex: RMC Sport)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 rounded-full py-3 pl-12 pr-4 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <SearchIcon />
                        </div>
                    </div>
                </div>

                <div className="mt-12 max-w-5xl mx-auto space-y-4">
                    {filteredRegions.length > 0 ? (
                        filteredRegions.map((region, index) => (
                            <AccordionRegion 
                                key={region.name} 
                                region={region} 
                                searchTerm={searchTerm}
                                initiallyOpen={index === 0 && !searchTerm} 
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 text-lg py-10 bg-white dark:bg-slate-900 rounded-lg">
                            <p>Aucun résultat ne correspond à votre recherche.</p>
                            <p className="text-sm mt-2">Essayez un autre mot-clé ou effacez la recherche pour voir toutes les catégories.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChannelsPage;
