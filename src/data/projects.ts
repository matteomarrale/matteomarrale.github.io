// Schede dei progetti: testi approvati (DEC-026, DEC-034, DEC-039), copiati parola per parola dal sito del 27/10.
// Un dato che manca non si mostra (DEC-017): i segnaposto in `dev` si vedono solo con ?dev=1.
// `did` accetta HTML (link, nomi).

export type Lang = 'en' | 'it';
export interface Text {
  role: string;          // riga breve nell'elenco della home
  card: { meta: string; line: string; tags: string[] }; // card della home (etichette ricavate dai fatti da Claude, approvate da Matteo il 27/10)
  when: string;
  facts: [string, string][];
  context: string;
  did: string[];
  loop?: string[];       // core loop (solo Antiques)
  links?: { href: string; label: string }[];
  dev?: string[];        // segnaposto, solo con ?dev=1
}
export interface Project {
  slug: string;
  title: string;
  group: 'academy' | 'personal';
  en: Text;
  it: Text;
}

// Ordine: prima i progetti con prove QA (scelta di Matteo, 27/10).
export const projects: Project[] = [
  {
    slug: 'cosmic', title: 'Cosmic Chaos', group: 'academy',
    en: {
      card: { meta: 'Feb 2026 · Unity', line: 'Game &amp; Level Designer, Testing &amp; Balancing', tags: ['Testing', 'Bug reports', 'Balancing'] },
      role: 'Game &amp; Level Designer, Testing &amp; Balancing', when: 'Feb 2026',
      facts: [['Role', 'Game &amp; Level Designer, Testing &amp; Balancing'], ['When', 'Feb 2026'], ['Engine', 'Unity'], ['Format', '"Shuffle": a new team every 5 days']],
      context: 'Space Invaders with a twist. "Shuffle" format: the project moved to a different team every 5 days.',
      did: [
        'Co-wrote the GDD with the team; designed the twist and the enemy spawn and movement patterns',
        'Testing, bug reports and balancing analysis (difficulty curve, usefulness of elements), with tuning up to the final build',
        'Took over work started by other teams and handed off my own',
      ],
      dev: ['[IMG 16:9 · gameplay with enemy formations]', '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'feb 2026 · Unity', line: 'Game &amp; Level Designer, Testing &amp; Balancing', tags: ['Testing', 'Bug report', 'Balancing'] },
      role: 'Game &amp; Level Designer, Testing &amp; Balancing', when: 'feb 2026',
      facts: [['Ruolo', 'Game &amp; Level Designer, Testing &amp; Balancing'], ['Periodo', 'feb 2026'], ['Motore', 'Unity'], ['Formato', '"Shuffle": team diversi ogni 5 giorni']],
      context: 'Space Invaders con un twist. Formato "Shuffle": il progetto passava a un altro team ogni 5 giorni.',
      did: [
        'Co-stesura del GDD con il team; design del twist e dei pattern di spawn e movimento dei nemici',
        'Testing, bug report e analisi di bilanciamento (curva di difficoltà, utilità degli elementi), con tuning fino alla build finale',
        'Ripresa del lavoro avviato da altri team e passaggio di consegne ai team successivi',
      ],
      dev: ['[IMG 16:9 · gameplay con le formazioni nemiche]', '[DA FORNIRE: link build / documenti]'],
    },
  },
  {
    slug: 'casino', title: 'One Hell of a Casino', group: 'academy',
    en: {
      card: { meta: 'Mar–Apr 2026 · Unity · Android', line: 'Producer · team of 15', tags: ['Feedback form', 'Beta'] },
      role: 'Producer', when: 'Mar–Apr 2026',
      facts: [['Role', 'Producer'], ['When', 'Mar–Apr 2026'], ['Engine', 'Unity'], ['Platform', 'Android'], ['Team', '15']],
      context: 'Hell-themed casual mobile game for Android: a mini-game collection with a gacha system and simulated monetization.',
      did: [
        'Coordinated the team for 6 weeks, through to release',
        'Managed milestones (Alpha 29/03, Beta 10/04, Release 24/04) and dependencies between departments',
        "Created the feedback form (Google Forms) to collect testers' impressions of the beta",
        'Delivered on time with Android APK, pitch, walkthrough, promo art and technical documentation',
      ],
      dev: ['[IMG 16:9 · main menu with mascot, mini-game, shop/gacha]', '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'mar–apr 2026 · Unity · Android', line: 'Producer · team di 15', tags: ['Modulo di feedback', 'Beta'] },
      role: 'Producer', when: 'mar–apr 2026',
      facts: [['Ruolo', 'Producer'], ['Periodo', 'mar–apr 2026'], ['Motore', 'Unity'], ['Piattaforma', 'Android'], ['Team', '15']],
      context: 'Gioco mobile casual a tema infernale per Android: una raccolta di minigiochi con sistema gacha e monetizzazione simulata.',
      did: [
        "Coordinamento del team per 6 settimane, fino all'uscita",
        'Gestione delle milestone (Alpha 29/03, Beta 10/04, Release 24/04) e delle dipendenze tra reparti',
        'Creazione del modulo di feedback (Google Forms) per raccogliere le impressioni dei tester sulla beta',
        'Consegna nei tempi con APK Android, pitch, walkthrough, promo art e documentazione tecnica',
      ],
      dev: ['[IMG 16:9 · menu principale con mascotte, minigioco, shop/gacha]', '[DA FORNIRE: link build / documenti]'],
    },
  },
  {
    slug: 'nigishida', title: 'The Hunger of Nigishida', group: 'academy',
    en: {
      card: { meta: 'Nov–Dec 2025 · Unity', line: 'Game &amp; Level Designer · team of 8', tags: ['Internal test', '17 changes'] },
      role: 'Game &amp; Level Designer', when: 'Nov–Dec 2025',
      facts: [['Role', 'Game &amp; Level Designer'], ['When', 'Nov–Dec 2025'], ['Engine', 'Unity · first Unity project'], ['Team', '8'], ['Genre', 'Top-down arcade inspired by the classic Snake']],
      context: 'Top-down arcade game set in Sumerian mythology: 3 levels, scoring and power-ups.',
      did: [
        'Game and level design of one of the 3 levels; co-designed the score system, items (Beer, Speed Potion) and NPC rules',
        'After internal testing, collected the feedback into a list of 17 changes assigned to team members',
        'Wrote the GDD in English (core loop, mechanics, NPC behavior, level design, UI/UX, audio spec)',
      ],
      dev: ['[IMG 16:9 · top-down view of a level]', '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'nov–dic 2025 · Unity', line: 'Game &amp; Level Designer · team di 8', tags: ['Test interno', '17 modifiche'] },
      role: 'Game &amp; Level Designer', when: 'nov–dic 2025',
      facts: [['Ruolo', 'Game &amp; Level Designer'], ['Periodo', 'nov–dic 2025'], ['Motore', 'Unity · primo progetto Unity'], ['Team', '8'], ['Genere', 'Arcade top-down ispirato al classico Snake']],
      context: 'Arcade top-down ambientato nella mitologia sumera: 3 livelli, punteggio e power-up.',
      did: [
        'Game e level design di uno dei 3 livelli; co-design del sistema di punteggio, degli item (Beer, Speed Potion) e delle regole degli NPC',
        'Dopo il test interno, raccolta dei feedback in una lista di 17 modifiche, assegnate ai membri del team',
        'Stesura del GDD in inglese (core loop, meccaniche, comportamento degli NPC, level design, UI/UX, specifiche audio)',
      ],
      dev: ['[IMG 16:9 · vista top-down di un livello]', '[DA FORNIRE: link build / documenti]'],
    },
  },
  {
    slug: 'antiques', title: 'Antiques: The Last Owner', group: 'academy',
    en: {
      card: { meta: 'May–Jul 2026 · Unity (URP)', line: 'Narrative Designer &amp; Writer · team of 14', tags: ['Narrative design', 'Dialogue'] },
      role: 'Narrative Designer &amp; Writer', when: 'May–Jul 2026',
      facts: [['Role', 'Narrative Designer &amp; Writer'], ['When', 'May–Jul 2026'], ['Engine', 'Unity (URP)'], ['Platform', 'PC'], ['Team', '14'], ['Release', '3 July 2026']],
      context: 'First-person restoration sim with supernatural elements. An antique shop where every object to restore is possessed by a ghost with a regret. 6 in-game days, 3 ghosts, 6 objects.',
      loop: ['object', 'ghost', 'regret', 'ritual'],
      did: [
        'Narrative design of the core concept: object → ghost → regret → ritual',
        'Wrote two of the three ghosts (Eleanor and Anselmo) and their in-game dialogue in English, with triggers, word counts and notes for programmers',
        'Beat chart of the 6 days and tutorial texts (IT + EN), delivered inside the scene',
      ],
      links: [{ href: '/campioni/Antiques_Eleanor_dialogue_sample_EN.pdf', label: 'Dialogue sample (PDF)' }],
      dev: ['[VIDEO 16:9 · Antiques trailer / gameplay]', '[IMG 16:9 · restoration bench]', '[IMG 16:9 · ritual table]', '[IMG 16:9 · on-screen dialogue]', '[DA FORNIRE: link GDD / Beat chart, playable build]'],
    },
    it: {
      card: { meta: 'mag–lug 2026 · Unity (URP)', line: 'Narrative Designer &amp; Writer · team di 14', tags: ['Narrative design', 'Dialoghi'] },
      role: 'Narrative Designer &amp; Writer', when: 'mag–lug 2026',
      facts: [['Ruolo', 'Narrative Designer &amp; Writer'], ['Periodo', 'mag–lug 2026'], ['Motore', 'Unity (URP)'], ['Piattaforma', 'PC'], ['Team', '14'], ['Uscita', '3 luglio 2026']],
      context: 'Simulatore di restauro in prima persona con elementi soprannaturali. Un negozio di antiquariato dove ogni oggetto da restaurare è posseduto da un fantasma con un rimpianto. 6 giorni di gioco, 3 fantasmi, 6 oggetti.',
      loop: ['oggetto', 'fantasma', 'rimpianto', 'rituale'],
      did: [
        'Narrative design del concept centrale: oggetto → fantasma → rimpianto → rituale',
        'Scrittura di due dei tre fantasmi (Eleanor e Anselmo) e dei loro dialoghi in inglese, con trigger, word count e note per i programmatori',
        'Beat chart dei 6 giorni e testi del tutorial (IT + EN), integrati nella scena',
      ],
      links: [{ href: '/campioni/Antiques_Eleanor_dialogue_sample_IT.pdf', label: 'Campione di dialoghi (PDF)' }],
      dev: ['[VIDEO 16:9 · trailer / gameplay di Antiques]', '[IMG 16:9 · banco di restauro]', '[IMG 16:9 · tavolo del rituale]', '[IMG 16:9 · dialogo a schermo]', '[DA FORNIRE: link GDD / Beat chart, build giocabile]'],
    },
  },
  {
    slug: 'train', title: 'What a Train', group: 'academy',
    en: {
      card: { meta: 'Jan 2026 · Unity', line: 'Game &amp; Level Designer', tags: ['Game jam', '5 days'] },
      role: 'Game &amp; Level Designer', when: 'Jan 2026',
      facts: [['Role', 'Game &amp; Level Designer'], ['When', 'Jan 2026'], ['Engine', 'Unity'], ['Format', '5-day game jam']],
      context: 'Theme "origin of music": side camera, 26-second runs, at least one mandatory diversifier.',
      did: ['From brainstorm to playable prototype in 5 days, cutting features to fit a 26-second experience'],
      dev: ['[IMG 16:9 · prototype]', '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'gen 2026 · Unity', line: 'Game &amp; Level Designer', tags: ['Game jam', '5 giorni'] },
      role: 'Game &amp; Level Designer', when: 'gen 2026',
      facts: [['Ruolo', 'Game &amp; Level Designer'], ['Periodo', 'gen 2026'], ['Motore', 'Unity'], ['Formato', 'Game jam di 5 giorni']],
      context: 'Tema "origine della musica": camera laterale, run di 26 secondi, almeno un diversifier obbligatorio.',
      did: ['Dal brainstorming al prototipo giocabile in 5 giorni, tagliando feature per far stare tutto in 26 secondi'],
      dev: ['[IMG 16:9 · prototipo]', '[DA FORNIRE: link build / documenti]'],
    },
  },
  {
    slug: 'catnhell', title: "Cat 'n' Hell!", group: 'personal',
    en: {
      card: { meta: 'Personal project · Unity · PC', line: 'Game design &amp; development', tags: ['Playtest', 'Bug list'] },
      role: "2D run'n'gun roguelite · Unity · playable prototype", when: '',
      facts: [['Role', 'Game design &amp; development'], ['Status', 'Playable prototype'], ['Engine', 'Unity'], ['Platform', 'PC'], ['Genre', "2D run'n'gun roguelite"]],
      context: "A 2D run'n'gun roguelite set in a cat-shaped Hell, developed in Unity.",
      did: [
        'Game design and development: Matteo Marrale (programming with Claude Code)',
        'Playtested the prototype and listed bugs and fixes for the 1.0 demo',
        'Narrative and lore: <a href="https://www.linkedin.com/in/said-serbouti-63a073270/" target="_blank" rel="noopener">Said Serbouti</a>',
      ],
      dev: ["[IMG 16:9 · Cat ’n’ Hell! gameplay]", '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'Progetto personale · Unity · PC', line: 'Game design e sviluppo', tags: ['Playtest', 'Lista di bug'] },
      role: "Roguelite run'n'gun 2D · Unity · prototipo giocabile", when: '',
      facts: [['Ruolo', 'Game design e sviluppo'], ['Stato', 'Prototipo giocabile'], ['Motore', 'Unity'], ['Piattaforma', 'PC'], ['Genere', "Roguelite run'n'gun 2D"]],
      context: "Un roguelite run'n'gun 2D ambientato in un Inferno a forma di gatto, sviluppato in Unity.",
      did: [
        'Game design e sviluppo: Matteo Marrale (programmazione con Claude Code)',
        'Playtest del prototipo e lista di bug e correzioni verso la demo 1.0',
        'Narrativa e lore: <a href="https://www.linkedin.com/in/said-serbouti-63a073270/" target="_blank" rel="noopener">Said Serbouti</a>',
      ],
      dev: ["[IMG 16:9 · gameplay di Cat ’n’ Hell!]", '[DA FORNIRE: link build / documenti]'],
    },
  },
  {
    slug: 'otherside', title: 'Other Side', group: 'personal',
    en: {
      card: { meta: 'Personal project · Unity (URP) · PC', line: 'First-person turn-based dungeon crawler', tags: [] },
      role: 'First-person turn-based dungeon crawler · Unity · playable prototype', when: '',
      facts: [['Role', 'Personal project'], ['Status', 'Playable prototype'], ['Engine', 'Unity (URP)'], ['Platform', 'PC'], ['Genre', 'First-person turn-based dungeon crawler, permadeath']],
      context: 'A first-person, turn-based dungeon crawler with permadeath, developed in Unity. You beat each enemy by using your items and the room around you. When you die, you start over: all you keep between runs is a journal you draw and write in yourself.',
      did: ['Game design and development: Matteo Marrale (programming with Claude Code)'],
      dev: ['[IMG 16:9 · Other Side gameplay]', '[DA FORNIRE: link build / docs]'],
    },
    it: {
      card: { meta: 'Progetto personale · Unity (URP) · PC', line: 'Dungeon crawler a turni in prima persona', tags: [] },
      role: 'Dungeon crawler a turni in prima persona · Unity · prototipo giocabile', when: '',
      facts: [['Ruolo', 'Progetto personale'], ['Stato', 'Prototipo giocabile'], ['Motore', 'Unity (URP)'], ['Piattaforma', 'PC'], ['Genere', 'Dungeon crawler a turni in prima persona, permadeath']],
      context: "Un dungeon crawler a turni in prima persona con permadeath, sviluppato in Unity. Ogni nemico si sconfigge sfruttando gli oggetti e la stanza. Quando muori ricominci da capo: tra una run e l'altra conservi solo un diario che disegni e scrivi tu.",
      did: ['Game design e sviluppo: Matteo Marrale (programmazione con Claude Code)'],
      dev: ['[IMG 16:9 · gameplay di Other Side]', '[DA FORNIRE: link build / documenti]'],
    },
  },
];
