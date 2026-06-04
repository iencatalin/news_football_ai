import type { Article } from '../types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Real Madrid Eliminată Acasă Pentru Prima Oară în 4 Ani',
    summary:
      'Arsenal a câștigat cu 2-1 pe Bernabeu în sferturile de finală ale Champions League. Mbappé a fost invizibil toată seara, fără niciun șut pe poartă în cele 90 de minute.',
    source: 'BBC Sport',
    slug: 'real-madrid-eliminata-acasa-pentru-prima-oara-in-4-ani',
    sourceUrl: 'https://www.bbc.com/sport/football',
    category: 'Champions League',
    publishedAt: '2026-05-22T22:45:00Z',
    analysis: {
      short:
        'Arsenal a venit cu un plan clar și l-a executat perfect. Madridul a dominat posesia dar n-a creat nimic concret în fața unei apărări bine organizate de Arteta.',
      opinion:
        'Mbappé de 200 de milioane n-a atins mingea decisiv toată seara. Ancelotti a jucat fricos — 5 în apărare acasă în Champions League? Serios? Ăsta nu-i fotbalul Madridului pe care îl știam.',
      stats:
        'Prima eliminare a Madridului acasă în UCL din 2022. Mbappé — 0 șuturi pe poartă. Arsenal n-a pierdut niciun meci în deplasare în UCL în acest sezon.',
      prediction:
        'Arsenal merge în semifinale și acolo dă de PSG. Va fi cel mai bun meci al turneului.',
    },
  },
  {
    id: '2',
    title: 'FCSB Fuge la 7 Puncte După Derby-ul cu Rapid',
    summary:
      'Victorie clară 3-1 pentru FCSB în derby-ul capitalei. Olaru a fost omul meciului cu un gol și o pasă decisivă. Rapid a ratat 4 ocazii clare în prima repriză.',
    source: 'GSP',
    sourceUrl: 'https://www.gsp.ro',
    slug: 'fcsb-fuge-la-7-puncte-dupa-dderul-cu-rapid',
    category: 'Liga 1',
    publishedAt: '2026-05-22T21:00:00Z',
    analysis: {
      short:
        'FCSB a controlat meciul de la un capăt la altul. Rapid a existat doar în statistici, nu și pe teren.',
      opinion:
        '4 ocazii ratate și după te miri că pierzi? Oltean are o problemă serioasă dacă nu se trezește până la play-off. FCSB în schimb arată ca o echipă cu cap și cu plan.',
      stats:
        'FCSB — 7 puncte avans față de locul 2 cu 4 etape rămase. Olaru — 12 goluri și 9 pase decisive în acest sezon. Rapid n-a câștigat niciun derby în ultimele 5 meciuri.',
      prediction:
        'FCSB e campioană dacă nu o încurcă accidentările în ultima lună de sezon.',
    },
  },
  {
    id: '3',
    title: 'Liverpool Egal în Minutul 94. Titlul Scapă Printre Degete',
    summary:
      'Wolves a egalat la Anfield dintr-un corner în prelungiri. City rămâne la doar 2 puncte distanță cu 5 etape de jucat. Seară neagră pe Anfield.',
    source: 'BBC Sport',
    sourceUrl: 'https://www.bbc.com/sport/football',
    slug: 'liverpool-egal-in-minutul-94-titlul-scapa-printre-degete',
    category: 'Premier League',
    publishedAt: '2026-05-22T17:30:00Z',
    analysis: {
      short:
        'Liverpool a dominat 93 de minute și a reușit să nu câștige. City mulțumește și continuă lupta pentru titlu.',
      opinion:
        'Un corner banal în minutul 94. Dacă pierzi titlul ăsta nu ai voie să te mai plângi de nimeni, vreodată. Liverpool a căzut psihic și se simte la fiecare meci.',
      stats:
        'Liverpool — 3 puncte pierdute din poziții câștigătoare în ultimele 5 etape. City — 8 victorii consecutive. Wolves n-a câștigat niciun meci în deplasare în ultimele 10 runde.',
      prediction:
        'City câștigă titlul. Liverpool a pierdut-o din cap, nu din picioare.',
    },
  },
];
