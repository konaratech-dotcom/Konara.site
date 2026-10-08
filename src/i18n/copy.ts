import type { LanguageCode } from "../data/locales";

export type CopyPack = {
  nav: [string, string, string, string, string, string];

  common: {
    book: string;
    explore: string;
    region: string;
    language: string;
    otherLanguage: string;
    keepRegion: string;
    required: string;
    invalidEmail: string;
    wrongPassword: string;
    locked: string;
    granted: string;
  };

  coming: {
    eyebrow: string;
    hero: string;
    text: string;
    building: string;
    founderAccess: string;
    founderTitle: string;
    founderText: string;
    password: string;
    enter: string;
  };

  home: {
    eyebrow: string;
    hero: string;
    text: string;
    challengeTitle: string;
    challenges: string[];
    solutionTitle: string;
    solutions: string[];
    howTitle: string;
    steps: string[];
    liveTitle: string;
    liveText: string;
    osTitle: string;
    osText: string;
    ctaTitle: string;
    ctaText: string;
  };

  solutions: {
    eyebrow: string;
    hero: string;
    text: string;
    products: string[];
    togetherTitle: string;
    customTitle: string;
    customText: string;
  };

  services: {
    eyebrow: string;
    hero: string;
    text: string;
    cards: string[];
    processTitle: string;
    process: string[];
    existingTitle: string;
    existingText: string;
    afterTitle: string;
    afterText: string;
  };

  about: {
    eyebrow: string;
    hero: string;
    text: string;
    whyTitle: string;
    whyText: string;
    principlesTitle: string;
    principles: string[];
    timeline: string[];
  };

  contact: {
    eyebrow: string;
    hero: string;
    text: string;
    directTitle: string;
    directText: string;
    name: string;
    email: string;
    business: string;
    message: string;
    send: string;
  };

  demo: {
    eyebrow: string;
    hero: string;
    text: string;
    phone: string;
    industry: string;
    improve: string;
    request: string;
    chooseTime: string;
  };

  assistant: {
    welcome: string;
    title: string;
    text: string;
    continue: string;
    menuTitle: string;
    explore: string;
    demo: string;
    ask: string;
    voiceTitle: string;
    voiceText: string;
    help: string;
  };

  footer: {
    tagline: string;
    vision: string;
    founded: string;
  };
};

const EN: CopyPack = {
  nav: ['Home', 'Solutions', 'Services', 'About', 'Contact', 'Book a Demo'],

  common: {
    book: 'Book a Demo',
    explore: 'Explore Solutions',
    region: 'Region',
    language: 'Language',
    otherLanguage: 'Choose another language',
    keepRegion: 'Keep this region',
    required: 'Please complete all required fields.',
    invalidEmail: 'Please enter a valid email address.',
    wrongPassword: 'Incorrect password.',
    locked: 'Too many attempts. Please try again shortly.',
    granted: 'Access granted.',
  },

  coming: {
    eyebrow: 'THE FUTURE OF BUSINESS AUTOMATION',
    hero: 'Something Intelligent|Is Coming.',
    text: 'KONARA is building the intelligent layer between customer conversations and business action — faster responses, cleaner workflows and systems designed to work together.',
    building: 'BUILDING THE NEXT GENERATION OF BUSINESS AUTOMATION',
    founderAccess: 'Founder Access',
    founderTitle: 'Founder Access',
    founderText:
      'Enter the founder access password to continue to the private KONARA website.',
    password: 'Founder password',
    enter: 'Enter Preview',
  },

  home: {
    eyebrow: 'AI AUTOMATION FOR MODERN BUSINESSES',
    hero: 'AI Solutions|That Work for You.',
    text: 'KONARA builds intelligent systems that help businesses respond faster, capture more opportunities and streamline repetitive work.',
    challengeTitle:
      'Your business should not lose opportunities to repetitive work.',
    challenges: [
      'Missed Enquiries|Customers should not have to wait for answers.',
      'Manual Administration|Repetitive tasks pull people away from higher-value work.',
      'Slow Response Times|Modern customers expect fast and consistent communication.',
      'Disconnected Workflows|Important information should move seamlessly through your business.',
    ],
    solutionTitle: 'Automation built around results.',
    solutions: [
      'AI Receptionist|Answer questions, capture intent and guide enquiries around the clock.',
      'Smart Booking|Move customers from interest to confirmed appointments.',
      'Customer Support|Resolve routine requests quickly with clear human handover.',
    ],
    howTitle: 'From conversation to action.',
    steps: [
      'Connect|A customer interacts with your business.',
      'Understand|KONARA understands the question, intent and context.',
      'Automate|The correct workflow, lead or booking action is triggered.',
      'Deliver|Customers get fast service while your team gets structured information.',
    ],
    liveTitle: 'Your business. Available 24/7.',
    liveText:
      'Give customers an intelligent first point of contact for questions, leads, bookings and support.',
    osTitle: 'One intelligent system for your business.',
    osText:
      'KONARA OS is our long-term vision for bringing communication, CRM, booking, workflows and analytics together.',
    ctaTitle: 'Ready to Automate Smarter?',
    ctaText:
      'Discover how KONARA can save time, improve customer communication and create a better digital experience.',
  },

  solutions: {
    eyebrow: 'KONARA SOLUTIONS',
    hero: 'AI Built for Real|Business.',
    text: 'Intelligent solutions designed to automate communication, streamline workflows and help businesses operate more efficiently.',
    products: [
      'AI Receptionist|Customer communication that stays available around the clock.',
      'Smart Booking|Turn conversations into confirmed appointments.',
      'Customer Support|Fast answers with thoughtful human handover.',
      'AI Sales|Capture opportunities while customer interest is high.',
      'CRM & Automation|Keep information moving between conversations, systems and teams.',
      'Analytics & Reporting|Turn activity into clearer business information.',
    ],
    togetherTitle: 'One intelligent layer, not six disconnected tools.',
    customTitle: 'Not every business needs the same automation.',
    customText:
      'KONARA starts with the problem, customer journey and existing systems, then builds the right workflow around them.',
  },

  services: {
    eyebrow: 'KONARA SERVICES',
    hero: 'Automation Built Around|Your Business.',
    text: 'Every implementation begins with the business problem, customer journey and outcome the system needs to improve.',
    cards: [
      'AI Receptionist|Customer communication designed around your knowledge, tone and handover rules.',
      'Lead Automation|Capture, qualify and route opportunities with less repetitive administration.',
      'Smart Booking|Move customers from enquiry to confirmed appointment through a cleaner workflow.',
      'Customer Support|Handle common requests quickly while keeping human escalation available.',
      'Business Integrations|Connect AI workflows with systems your business already uses.',
      'Analytics|Turn customer and operational activity into clearer information.',
    ],
    processTitle: 'A clear path from problem to operating system.',
    process: [
      'Discover|Understand the business and automation opportunity.',
      'Design|Map the experience, logic, information and handovers.',
      'Build|Create the AI workflow around the real operating process.',
      'Test|Stress-test conversations, edge cases and business rules.',
      'Launch|Deploy with a controlled rollout and clear ownership.',
      'Improve|Refine the system using real usage and feedback.',
    ],
    existingTitle: 'Keep the tools that already work.',
    existingText:
      'KONARA fits around the systems, people and processes your business already trusts.',
    afterTitle: 'Launch is the beginning, not the finish line.',
    afterText:
      'Real usage reveals better questions, new edge cases and stronger opportunities for improvement.',
  },

  about: {
    eyebrow: 'ABOUT KONARA',
    hero: 'Building Smarter Ways|to Do Business.',
    text: 'KONARA focuses on practical artificial intelligence that improves communication, removes repetitive work and helps businesses operate more efficiently.',
    whyTitle: 'Technology should remove work, not create more of it.',
    whyText:
      'KONARA was founded in 2026 around the idea that AI should quietly connect communication, decisions and action — starting with useful automation today and building toward KONARA OS tomorrow.',
    principlesTitle: 'Build useful. Keep it clear. Earn trust.',
    principles: [
      'Innovation|Use new technology where it creates real value.',
      'Simplicity|Complex systems should feel simple to the people using them.',
      'Trust|Automation should keep businesses and customers in control.',
      'Excellence|Every detail contributes to the quality of the experience.',
      'Customer Success|Technology matters when the business gets a better outcome.',
    ],
    timeline: [
      'Foundation|Focused AI workflows and customer automation.',
      'Connected Intelligence|More systems working together as one.',
      'KONARA OS|A unified intelligent operating layer for modern business.',
    ],
  },

  contact: {
    eyebrow: 'CONTACT KONARA',
    hero: 'Start With the|Business Problem.',
    text: 'Tell us what you want to improve and we can explore whether an AI workflow could make the process faster, clearer or easier to manage.',
    directTitle: 'Talk to KONARA.',
    directText:
      'For a business conversation, a tailored demonstration is the best starting point.',
    name: 'Full Name',
    email: 'Business Email',
    business: 'Business',
    message: 'Message',
    send: 'Send Message',
  },

  demo: {
    eyebrow: 'BOOK A DEMO',
    hero: 'See What KONARA Could Do|for Your Business.',
    text: 'Tell us about your business and the workflow you want to improve, then choose a demonstration time.',
    phone: 'Phone',
    industry: 'Industry',
    improve: 'What would you like to automate or improve?',
    request: 'Request a Demo',
    chooseTime: 'Choose your demo time.',
  },

  assistant: {
    welcome: 'WELCOME TO KONARA',
    title: 'Built to make business feel intelligent.',
    text: 'KONARA was founded in 2026 to build practical AI systems that help businesses respond faster, capture more opportunities and remove repetitive work.',
    continue: 'Continue',
    menuTitle: 'Explore KONARA your way.',
    explore: 'Explore Solutions',
    demo: 'Book a Demo',
    ask: 'Ask KONARA',
    voiceTitle: 'Voiceflow connects here.',
    voiceText:
      'This area is ready for a live KONARA assistant that can answer enquiries, qualify leads and guide bookings.',
    help: 'Get Help',
  },

  footer: {
    tagline: 'AI solutions for modern businesses.',
    vision: 'KONARA OS',
    founded: 'Founded 2026',
  },
};

const DE: CopyPack = {
  nav: [
    'Startseite',
    'Lösungen',
    'Leistungen',
    'Über uns',
    'Kontakt',
    'Demo buchen',
  ],

  common: {
    book: 'Demo buchen',
    explore: 'Lösungen entdecken',
    region: 'Region',
    language: 'Sprache',
    otherLanguage: 'Andere Sprache wählen',
    keepRegion: 'Region beibehalten',
    required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    wrongPassword: 'Falsches Passwort.',
    locked: 'Zu viele Versuche. Bitte versuchen Sie es später erneut.',
    granted: 'Zugriff gewährt.',
  },

  coming: {
    eyebrow: 'DIE ZUKUNFT DER GESCHÄFTSAUTOMATISIERUNG',
    hero: 'Etwas Intelligentes|Kommt.',
    text: 'KONARA entwickelt die intelligente Ebene zwischen Kundengesprächen und geschäftlichen Aktionen — schnellere Antworten, klarere Abläufe und Systeme, die zusammenarbeiten.',
    building: 'WIR BAUEN DIE NÄCHSTE GENERATION DER GESCHÄFTSAUTOMATISIERUNG',
    founderAccess: 'Gründerzugang',
    founderTitle: 'Gründerzugang',
    founderText:
      'Geben Sie das Gründerpasswort ein, um die private KONARA-Website zu öffnen.',
    password: 'Gründerpasswort',
    enter: 'Vorschau öffnen',
  },

  home: {
    eyebrow: 'KI-AUTOMATISIERUNG FÜR MODERNE UNTERNEHMEN',
    hero: 'KI-Lösungen|Die für Sie arbeiten.',
    text: 'KONARA entwickelt intelligente Systeme, mit denen Unternehmen schneller reagieren, mehr Chancen nutzen und wiederkehrende Arbeit automatisieren können.',
    challengeTitle:
      'Ihr Unternehmen sollte keine Chancen durch repetitive Arbeit verlieren.',
    challenges: [
      'Verpasste Anfragen|Kunden sollten nicht auf Antworten warten müssen.',
      'Manuelle Verwaltung|Wiederkehrende Aufgaben nehmen Zeit für wichtigere Arbeit.',
      'Langsame Reaktionszeiten|Moderne Kunden erwarten schnelle und verlässliche Kommunikation.',
      'Getrennte Abläufe|Wichtige Informationen sollten nahtlos durch Ihr Unternehmen fließen.',
    ],
    solutionTitle: 'Automatisierung, die auf Ergebnisse ausgerichtet ist.',
    solutions: [
      'KI-Rezeption|Beantwortet Fragen, erkennt Absichten und begleitet Anfragen rund um die Uhr.',
      'Intelligente Buchung|Führt Kunden vom Interesse zum bestätigten Termin.',
      'Kundensupport|Löst Routineanfragen schnell und übergibt bei Bedarf an Menschen.',
    ],
    howTitle: 'Vom Gespräch zur Aktion.',
    steps: [
      'Verbinden|Ein Kunde tritt mit Ihrem Unternehmen in Kontakt.',
      'Verstehen|KONARA versteht Frage, Absicht und Kontext.',
      'Automatisieren|Der passende Workflow, Lead oder Buchungsvorgang wird ausgelöst.',
      'Liefern|Kunden erhalten schnellen Service und Ihr Team strukturierte Informationen.',
    ],
    liveTitle: 'Ihr Unternehmen. Rund um die Uhr erreichbar.',
    liveText:
      'Bieten Sie Kunden einen intelligenten ersten Kontaktpunkt für Fragen, Leads, Buchungen und Support.',
    osTitle: 'Ein intelligentes System für Ihr Unternehmen.',
    osText:
      'KONARA OS ist unsere langfristige Vision, Kommunikation, CRM, Buchungen, Workflows und Analysen zusammenzuführen.',
    ctaTitle: 'Bereit für intelligentere Automatisierung?',
    ctaText:
      'Entdecken Sie, wie KONARA Zeit sparen, Kundenkommunikation verbessern und bessere digitale Erlebnisse schaffen kann.',
  },

  solutions: {
    eyebrow: 'KONARA LÖSUNGEN',
    hero: 'KI für echte|Unternehmen.',
    text: 'Intelligente Lösungen zur Automatisierung von Kommunikation, Workflows und täglichen Geschäftsprozessen.',
    products: [
      'KI-Rezeption|Kundenkommunikation, die rund um die Uhr verfügbar bleibt.',
      'Intelligente Buchung|Verwandelt Gespräche in bestätigte Termine.',
      'Kundensupport|Schnelle Antworten mit sinnvoller menschlicher Übergabe.',
      'KI-Vertrieb|Erfasst Chancen, solange das Kundeninteresse hoch ist.',
      'CRM & Automatisierung|Hält Informationen zwischen Gesprächen, Systemen und Teams in Bewegung.',
      'Analysen & Berichte|Verwandelt Aktivität in klarere Geschäftsinformationen.',
    ],
    togetherTitle: 'Eine intelligente Ebene statt sechs getrennter Tools.',
    customTitle: 'Nicht jedes Unternehmen braucht dieselbe Automatisierung.',
    customText:
      'KONARA beginnt mit dem Problem, der Customer Journey und bestehenden Systemen und baut den passenden Workflow darum.',
  },

  services: {
    eyebrow: 'KONARA LEISTUNGEN',
    hero: 'Automatisierung für|Ihr Unternehmen.',
    text: 'Jede Umsetzung beginnt mit dem Geschäftsproblem, der Customer Journey und dem Ergebnis, das verbessert werden soll.',
    cards: [
      'KI-Rezeption|Kundenkommunikation passend zu Wissen, Ton und Übergaberegeln Ihres Unternehmens.',
      'Lead-Automatisierung|Erfasst, qualifiziert und verteilt Chancen mit weniger Verwaltungsaufwand.',
      'Intelligente Buchung|Führt Kunden über einen klaren Prozess von der Anfrage zum Termin.',
      'Kundensupport|Bearbeitet häufige Anliegen schnell und ermöglicht menschliche Eskalation.',
      'Geschäftsintegrationen|Verbindet KI-Workflows mit den Systemen, die Sie bereits nutzen.',
      'Analysen|Macht Kunden- und Betriebsaktivitäten verständlicher.',
    ],
    processTitle: 'Ein klarer Weg vom Problem zum funktionierenden System.',
    process: [
      'Entdecken|Unternehmen und Automatisierungspotenzial verstehen.',
      'Entwerfen|Erlebnis, Logik, Informationen und Übergaben planen.',
      'Bauen|Den KI-Workflow um den realen Geschäftsprozess erstellen.',
      'Testen|Gespräche, Sonderfälle und Geschäftsregeln intensiv prüfen.',
      'Starten|Kontrolliert einführen und klare Verantwortung festlegen.',
      'Verbessern|Das System anhand echter Nutzung und Feedback optimieren.',
    ],
    existingTitle: 'Behalten Sie die Tools, die bereits funktionieren.',
    existingText:
      'KONARA fügt sich in die Systeme, Menschen und Prozesse ein, denen Ihr Unternehmen bereits vertraut.',
    afterTitle: 'Der Start ist der Anfang, nicht das Ende.',
    afterText:
      'Echte Nutzung zeigt neue Fragen, Sonderfälle und Chancen zur kontinuierlichen Verbesserung.',
  },

  about: {
    eyebrow: 'ÜBER KONARA',
    hero: 'Intelligentere Wege|für Unternehmen.',
    text: 'KONARA konzentriert sich auf praktische künstliche Intelligenz, die Kommunikation verbessert, repetitive Arbeit reduziert und Unternehmen effizienter macht.',
    whyTitle:
      'Technologie sollte Arbeit reduzieren, nicht mehr davon erzeugen.',
    whyText:
      'KONARA wurde 2026 mit der Idee gegründet, dass KI Kommunikation, Entscheidungen und Aktionen leise verbinden sollte — heute mit nützlicher Automatisierung und morgen mit KONARA OS.',
    principlesTitle: 'Nützlich bauen. Klar bleiben. Vertrauen verdienen.',
    principles: [
      'Innovation|Neue Technologie dort einsetzen, wo sie echten Mehrwert schafft.',
      'Einfachheit|Komplexe Systeme sollten sich für Nutzer einfach anfühlen.',
      'Vertrauen|Automatisierung sollte Unternehmen und Kunden die Kontrolle lassen.',
      'Exzellenz|Jedes Detail trägt zur Qualität des Erlebnisses bei.',
      'Kundenerfolg|Technologie zählt, wenn das Unternehmen bessere Ergebnisse erzielt.',
    ],
    timeline: [
      'Grundlage|Fokussierte KI-Workflows und Kundenautomatisierung.',
      'Vernetzte Intelligenz|Mehr Systeme arbeiten als Einheit zusammen.',
      'KONARA OS|Eine einheitliche intelligente Betriebsebene für moderne Unternehmen.',
    ],
  },

  contact: {
    eyebrow: 'KONARA KONTAKT',
    hero: 'Beginnen Sie mit dem|Geschäftsproblem.',
    text: 'Sagen Sie uns, was Sie verbessern möchten. Gemeinsam prüfen wir, ob ein KI-Workflow den Prozess schneller, klarer oder einfacher machen kann.',
    directTitle: 'Sprechen Sie mit KONARA.',
    directText:
      'Für ein Geschäftsgespräch ist eine individuelle Demo der beste Ausgangspunkt.',
    name: 'Vollständiger Name',
    email: 'Geschäftliche E-Mail',
    business: 'Unternehmen',
    message: 'Nachricht',
    send: 'Nachricht senden',
  },

  demo: {
    eyebrow: 'DEMO BUCHEN',
    hero: 'Sehen Sie, was KONARA|für Ihr Unternehmen tun kann.',
    text: 'Erzählen Sie uns von Ihrem Unternehmen und dem Workflow, den Sie verbessern möchten, und wählen Sie anschließend einen Demo-Termin.',
    phone: 'Telefon',
    industry: 'Branche',
    improve: 'Was möchten Sie automatisieren oder verbessern?',
    request: 'Demo anfragen',
    chooseTime: 'Demo-Zeit auswählen.',
  },

  assistant: {
    welcome: 'WILLKOMMEN BEI KONARA',
    title: 'Entwickelt, damit sich Business intelligent anfühlt.',
    text: 'KONARA wurde 2026 gegründet, um praktische KI-Systeme zu bauen, die Unternehmen schneller reagieren lassen, mehr Chancen erfassen und repetitive Arbeit reduzieren.',
    continue: 'Weiter',
    menuTitle: 'Entdecken Sie KONARA auf Ihre Weise.',
    explore: 'Lösungen entdecken',
    demo: 'Demo buchen',
    ask: 'KONARA fragen',
    voiceTitle: 'Hier wird Voiceflow verbunden.',
    voiceText:
      'Dieser Bereich ist für einen Live-KONARA-Assistenten vorbereitet, der Anfragen beantwortet, Leads qualifiziert und Buchungen unterstützt.',
    help: 'Hilfe erhalten',
  },

  footer: {
    tagline: 'KI-Lösungen für moderne Unternehmen.',
    vision: 'KONARA OS',
    founded: 'Gegründet 2026',
  },
};

const FR: CopyPack = {
  nav: [
    'Accueil',
    'Solutions',
    'Services',
    'À propos',
    'Contact',
    'Réserver une démo',
  ],

  common: {
    book: 'Réserver une démo',
    explore: 'Découvrir les solutions',
    region: 'Région',
    language: 'Langue',
    otherLanguage: 'Choisir une autre langue',
    keepRegion: 'Conserver cette région',
    required: 'Veuillez remplir tous les champs obligatoires.',
    invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
    wrongPassword: 'Mot de passe incorrect.',
    locked: 'Trop de tentatives. Veuillez réessayer plus tard.',
    granted: 'Accès autorisé.',
  },

  coming: {
    eyebrow: "L'AVENIR DE L'AUTOMATISATION DES ENTREPRISES",
    hero: "Quelque chose d'intelligent|arrive.",
    text: "KONARA construit la couche intelligente entre les conversations clients et l'action commerciale — réponses plus rapides, flux plus clairs et systèmes conçus pour fonctionner ensemble.",
    building: "NOUS CONSTRUISONS LA PROCHAINE GÉNÉRATION D'AUTOMATISATION",
    founderAccess: 'Accès fondateur',
    founderTitle: 'Accès fondateur',
    founderText:
      'Saisissez le mot de passe fondateur pour accéder au site privé de KONARA.',
    password: 'Mot de passe fondateur',
    enter: "Ouvrir l'aperçu",
  },

  home: {
    eyebrow: 'AUTOMATISATION IA POUR LES ENTREPRISES MODERNES',
    hero: 'Des solutions IA|qui travaillent pour vous.',
    text: "KONARA crée des systèmes intelligents qui aident les entreprises à répondre plus vite, saisir davantage d'opportunités et automatiser les tâches répétitives.",
    challengeTitle:
      "Votre entreprise ne devrait pas perdre d'opportunités à cause du travail répétitif.",
    challenges: [
      'Demandes manquées|Les clients ne devraient pas attendre une réponse.',
      'Administration manuelle|Les tâches répétitives éloignent les équipes du travail à forte valeur.',
      'Réponses lentes|Les clients modernes attendent une communication rapide et cohérente.',
      "Flux déconnectés|Les informations importantes doivent circuler facilement dans l'entreprise.",
    ],
    solutionTitle: 'Une automatisation orientée résultats.',
    solutions: [
      "Réceptionniste IA|Répond aux questions, comprend l'intention et guide les demandes 24h/24.",
      "Réservation intelligente|Transforme l'intérêt en rendez-vous confirmé.",
      'Support client|Résout rapidement les demandes courantes avec transfert humain si nécessaire.',
    ],
    howTitle: "De la conversation à l'action.",
    steps: [
      'Connecter|Un client interagit avec votre entreprise.',
      "Comprendre|KONARA comprend la question, l'intention et le contexte.",
      'Automatiser|Le bon workflow, prospect ou processus de réservation est déclenché.',
      'Livrer|Le client reçoit un service rapide et votre équipe des informations structurées.',
    ],
    liveTitle: 'Votre entreprise. Disponible 24h/24.',
    liveText:
      "Offrez aux clients un premier point de contact intelligent pour les questions, prospects, réservations et demandes d'assistance.",
    osTitle: 'Un système intelligent pour votre entreprise.',
    osText:
      'KONARA OS est notre vision à long terme pour réunir communication, CRM, réservation, workflows et analyses.',
    ctaTitle: 'Prêt à automatiser plus intelligemment ?',
    ctaText:
      'Découvrez comment KONARA peut faire gagner du temps, améliorer la communication client et créer une meilleure expérience numérique.',
  },

  solutions: {
    eyebrow: 'SOLUTIONS KONARA',
    hero: 'Une IA conçue pour|les vraies entreprises.',
    text: "Des solutions intelligentes pour automatiser la communication, fluidifier les workflows et améliorer l'efficacité opérationnelle.",
    products: [
      'Réceptionniste IA|Une communication client disponible à tout moment.',
      'Réservation intelligente|Transforme les conversations en rendez-vous confirmés.',
      'Support client|Des réponses rapides avec un transfert humain réfléchi.',
      "Ventes IA|Capture les opportunités lorsque l'intérêt client est élevé.",
      "CRM & Automatisation|Fait circuler l'information entre conversations, systèmes et équipes.",
      "Analyses & Rapports|Transforme l'activité en informations commerciales plus claires.",
    ],
    togetherTitle: 'Une couche intelligente, pas six outils déconnectés.',
    customTitle:
      "Toutes les entreprises n'ont pas besoin de la même automatisation.",
    customText:
      'KONARA commence par le problème, le parcours client et les systèmes existants, puis construit le workflow adapté.',
  },

  services: {
    eyebrow: 'SERVICES KONARA',
    hero: 'Une automatisation construite autour|de votre entreprise.',
    text: 'Chaque mise en œuvre commence par le problème métier, le parcours client et le résultat à améliorer.',
    cards: [
      'Réceptionniste IA|Communication client adaptée à vos connaissances, votre ton et vos règles de transfert.',
      "Automatisation des prospects|Capture, qualifie et dirige les opportunités avec moins d'administration.",
      'Réservation intelligente|Fait passer le client de la demande au rendez-vous confirmé.',
      "Support client|Traite rapidement les demandes courantes tout en gardant l'escalade humaine.",
      'Intégrations métier|Connecte les workflows IA aux systèmes que vous utilisez déjà.',
      "Analyses|Transforme l'activité client et opérationnelle en informations plus claires.",
    ],
    processTitle: 'Un chemin clair du problème au système opérationnel.',
    process: [
      "Découvrir|Comprendre l'entreprise et l'opportunité d'automatisation.",
      "Concevoir|Cartographier l'expérience, la logique, les informations et les transferts.",
      'Construire|Créer le workflow IA autour du processus réel.',
      'Tester|Tester les conversations, cas limites et règles métier.',
      'Lancer|Déployer progressivement avec des responsabilités claires.',
      "Améliorer|Optimiser grâce à l'usage réel et aux retours.",
    ],
    existingTitle: 'Conservez les outils qui fonctionnent déjà.',
    existingText:
      "KONARA s'intègre aux systèmes, équipes et processus auxquels votre entreprise fait déjà confiance.",
    afterTitle: 'Le lancement est le début, pas la fin.',
    afterText:
      "L'usage réel révèle de nouvelles questions, des cas limites et de meilleures opportunités d'amélioration.",
  },

  about: {
    eyebrow: 'À PROPOS DE KONARA',
    hero: 'Construire des façons plus intelligentes|de travailler.',
    text: 'KONARA se concentre sur une intelligence artificielle pratique qui améliore la communication, réduit le travail répétitif et aide les entreprises à fonctionner plus efficacement.',
    whyTitle:
      'La technologie doit supprimer du travail, pas en créer davantage.',
    whyText:
      "KONARA a été fondée en 2026 autour de l'idée que l'IA doit relier discrètement communication, décisions et actions — avec une automatisation utile aujourd'hui et KONARA OS demain.",
    principlesTitle: 'Construire utile. Rester clair. Gagner la confiance.',
    principles: [
      "Innovation|Utiliser les nouvelles technologies lorsqu'elles créent une vraie valeur.",
      'Simplicité|Les systèmes complexes doivent rester simples pour leurs utilisateurs.',
      "Confiance|L'automatisation doit laisser le contrôle aux entreprises et aux clients.",
      "Excellence|Chaque détail contribue à la qualité de l'expérience.",
      "Réussite client|La technologie compte lorsqu'elle améliore les résultats de l'entreprise.",
    ],
    timeline: [
      'Fondation|Workflows IA ciblés et automatisation client.',
      'Intelligence connectée|Davantage de systèmes fonctionnant ensemble.',
      'KONARA OS|Une couche opérationnelle intelligente unifiée pour les entreprises modernes.',
    ],
  },

  contact: {
    eyebrow: 'CONTACTER KONARA',
    hero: 'Commencez par le|problème métier.',
    text: 'Expliquez-nous ce que vous souhaitez améliorer et nous verrons si un workflow IA peut rendre le processus plus rapide, plus clair ou plus simple.',
    directTitle: 'Parlez à KONARA.',
    directText:
      'Pour une discussion professionnelle, une démonstration personnalisée est le meilleur point de départ.',
    name: 'Nom complet',
    email: 'E-mail professionnel',
    business: 'Entreprise',
    message: 'Message',
    send: 'Envoyer le message',
  },

  demo: {
    eyebrow: 'RÉSERVER UNE DÉMO',
    hero: 'Découvrez ce que KONARA peut faire|pour votre entreprise.',
    text: 'Parlez-nous de votre entreprise et du workflow que vous souhaitez améliorer, puis choisissez un horaire de démonstration.',
    phone: 'Téléphone',
    industry: 'Secteur',
    improve: 'Que souhaitez-vous automatiser ou améliorer ?',
    request: 'Demander une démo',
    chooseTime: "Choisissez l'heure de votre démo.",
  },

  assistant: {
    welcome: 'BIENVENUE CHEZ KONARA',
    title: "Conçu pour rendre l'entreprise intelligente.",
    text: "KONARA a été fondée en 2026 pour créer des systèmes IA pratiques qui aident les entreprises à répondre plus vite, saisir plus d'opportunités et réduire le travail répétitif.",
    continue: 'Continuer',
    menuTitle: 'Explorez KONARA à votre manière.',
    explore: 'Découvrir les solutions',
    demo: 'Réserver une démo',
    ask: 'Demander à KONARA',
    voiceTitle: 'Voiceflow se connecte ici.',
    voiceText:
      'Cette zone est prête à accueillir un assistant KONARA en direct capable de répondre aux demandes, qualifier les prospects et guider les réservations.',
    help: "Obtenir de l'aide",
  },

  footer: {
    tagline: 'Solutions IA pour les entreprises modernes.',
    vision: 'KONARA OS',
    founded: 'Fondée en 2026',
  },
};

const NL: CopyPack = {
  nav: [
    'Home',
    'Oplossingen',
    'Diensten',
    'Over ons',
    'Contact',
    'Demo boeken',
  ],

  common: {
    book: 'Demo boeken',
    explore: 'Oplossingen bekijken',
    region: 'Regio',
    language: 'Taal',
    otherLanguage: 'Andere taal kiezen',
    keepRegion: 'Deze regio behouden',
    required: 'Vul alle verplichte velden in.',
    invalidEmail: 'Voer een geldig e-mailadres in.',
    wrongPassword: 'Onjuist wachtwoord.',
    locked: 'Te veel pogingen. Probeer het later opnieuw.',
    granted: 'Toegang verleend.',
  },

  coming: {
    eyebrow: 'DE TOEKOMST VAN BEDRIJFSAUTOMATISERING',
    hero: 'Iets intelligents|komt eraan.',
    text: 'KONARA bouwt de intelligente laag tussen klantgesprekken en bedrijfsactie — snellere antwoorden, duidelijkere workflows en systemen die samenwerken.',
    building: 'WIJ BOUWEN DE VOLGENDE GENERATIE BEDRIJFSAUTOMATISERING',
    founderAccess: 'Founder Access',
    founderTitle: 'Founder Access',
    founderText:
      'Voer het founder-wachtwoord in om naar de privéwebsite van KONARA te gaan.',
    password: 'Founder-wachtwoord',
    enter: 'Preview openen',
  },

  home: {
    eyebrow: 'AI-AUTOMATISERING VOOR MODERNE BEDRIJVEN',
    hero: 'AI-oplossingen|die voor u werken.',
    text: 'KONARA bouwt intelligente systemen waarmee bedrijven sneller reageren, meer kansen benutten en repetitief werk automatiseren.',
    challengeTitle:
      'Uw bedrijf mag geen kansen verliezen door repetitief werk.',
    challenges: [
      'Gemiste aanvragen|Klanten zouden niet op antwoorden hoeven wachten.',
      'Handmatige administratie|Repetitieve taken halen mensen weg bij werk met meer waarde.',
      'Trage reacties|Moderne klanten verwachten snelle en consistente communicatie.',
      'Losstaande workflows|Belangrijke informatie moet soepel door uw bedrijf bewegen.',
    ],
    solutionTitle: 'Automatisering gebouwd rond resultaat.',
    solutions: [
      'AI-receptionist|Beantwoordt vragen, begrijpt intentie en begeleidt aanvragen 24/7.',
      'Slim boeken|Verandert interesse in bevestigde afspraken.',
      'Klantenservice|Lost veelvoorkomende vragen snel op met menselijke overdracht waar nodig.',
    ],
    howTitle: 'Van gesprek naar actie.',
    steps: [
      'Verbinden|Een klant neemt contact op met uw bedrijf.',
      'Begrijpen|KONARA begrijpt de vraag, intentie en context.',
      'Automatiseren|De juiste workflow, lead- of boekingsactie wordt gestart.',
      'Leveren|De klant krijgt snelle service en uw team gestructureerde informatie.',
    ],
    liveTitle: 'Uw bedrijf. 24/7 beschikbaar.',
    liveText:
      'Geef klanten een intelligent eerste contactpunt voor vragen, leads, boekingen en ondersteuning.',
    osTitle: 'Eén intelligent systeem voor uw bedrijf.',
    osText:
      'KONARA OS is onze langetermijnvisie om communicatie, CRM, boekingen, workflows en analyses samen te brengen.',
    ctaTitle: 'Klaar om slimmer te automatiseren?',
    ctaText:
      'Ontdek hoe KONARA tijd kan besparen, klantcommunicatie kan verbeteren en een betere digitale ervaring kan creëren.',
  },

  solutions: {
    eyebrow: 'KONARA OPLOSSINGEN',
    hero: 'AI gebouwd voor echte|bedrijven.',
    text: 'Intelligente oplossingen voor communicatie, workflows en efficiëntere bedrijfsvoering.',
    products: [
      'AI-receptionist|Klantcommunicatie die altijd beschikbaar blijft.',
      'Slim boeken|Zet gesprekken om in bevestigde afspraken.',
      'Klantenservice|Snelle antwoorden met doordachte menselijke overdracht.',
      'AI-verkoop|Leg kansen vast zolang de interesse hoog is.',
      'CRM & Automatisering|Houdt informatie in beweging tussen gesprekken, systemen en teams.',
      'Analyse & Rapportage|Zet activiteit om in duidelijkere bedrijfsinformatie.',
    ],
    togetherTitle: 'Eén intelligente laag, geen zes losse tools.',
    customTitle: 'Niet ieder bedrijf heeft dezelfde automatisering nodig.',
    customText:
      'KONARA begint bij het probleem, de klantreis en bestaande systemen en bouwt daar de juiste workflow omheen.',
  },

  services: {
    eyebrow: 'KONARA DIENSTEN',
    hero: 'Automatisering gebouwd rond|uw bedrijf.',
    text: 'Elke implementatie begint bij het bedrijfsprobleem, de klantreis en het gewenste resultaat.',
    cards: [
      'AI-receptionist|Klantcommunicatie afgestemd op uw kennis, toon en overdrachtsregels.',
      'Lead-automatisering|Legt kansen vast, kwalificeert ze en stuurt ze door met minder administratie.',
      'Slim boeken|Brengt klanten via een duidelijk proces van aanvraag naar bevestigde afspraak.',
      'Klantenservice|Behandelt veelvoorkomende vragen snel met menselijke escalatie beschikbaar.',
      'Bedrijfsintegraties|Verbindt AI-workflows met systemen die uw bedrijf al gebruikt.',
      'Analyse|Maakt klant- en operationele activiteit duidelijker.',
    ],
    processTitle: 'Een duidelijk pad van probleem naar werkend systeem.',
    process: [
      'Ontdekken|Begrijp het bedrijf en de automatiseringskans.',
      'Ontwerpen|Breng ervaring, logica, informatie en overdracht in kaart.',
      'Bouwen|Maak de AI-workflow rond het echte proces.',
      'Testen|Test gesprekken, uitzonderingen en bedrijfsregels.',
      'Lanceren|Rol gecontroleerd uit met duidelijke verantwoordelijkheid.',
      'Verbeteren|Optimaliseer met echte gebruiksdata en feedback.',
    ],
    existingTitle: 'Behoud de tools die al werken.',
    existingText:
      'KONARA sluit aan op de systemen, mensen en processen die uw bedrijf al vertrouwt.',
    afterTitle: 'Lancering is het begin, niet de finish.',
    afterText:
      'Echt gebruik onthult nieuwe vragen, uitzonderingen en kansen voor verbetering.',
  },

  about: {
    eyebrow: 'OVER KONARA',
    hero: 'Slimmere manieren bouwen|om zaken te doen.',
    text: 'KONARA richt zich op praktische kunstmatige intelligentie die communicatie verbetert, repetitief werk vermindert en bedrijven efficiënter laat werken.',
    whyTitle: 'Technologie moet werk wegnemen, niet meer werk creëren.',
    whyText:
      'KONARA werd in 2026 opgericht vanuit het idee dat AI communicatie, beslissingen en actie stil moet verbinden — vandaag met bruikbare automatisering en morgen met KONARA OS.',
    principlesTitle: 'Bouw nuttig. Houd het helder. Verdien vertrouwen.',
    principles: [
      'Innovatie|Gebruik nieuwe technologie waar die echte waarde creëert.',
      'Eenvoud|Complexe systemen moeten eenvoudig voelen voor gebruikers.',
      'Vertrouwen|Automatisering moet bedrijven en klanten controle geven.',
      'Excellentie|Elk detail draagt bij aan de kwaliteit van de ervaring.',
      'Klantresultaat|Technologie telt wanneer het bedrijf een beter resultaat behaalt.',
    ],
    timeline: [
      'Fundament|Gerichte AI-workflows en klantautomatisering.',
      'Verbonden intelligentie|Meer systemen werken samen als één geheel.',
      'KONARA OS|Een uniforme intelligente bedrijfslaag voor moderne ondernemingen.',
    ],
  },

  contact: {
    eyebrow: 'CONTACT KONARA',
    hero: 'Begin met het|bedrijfsprobleem.',
    text: 'Vertel ons wat u wilt verbeteren en we bekijken of een AI-workflow het proces sneller, duidelijker of eenvoudiger kan maken.',
    directTitle: 'Praat met KONARA.',
    directText:
      'Voor een zakelijk gesprek is een persoonlijke demo het beste startpunt.',
    name: 'Volledige naam',
    email: 'Zakelijk e-mailadres',
    business: 'Bedrijf',
    message: 'Bericht',
    send: 'Bericht verzenden',
  },

  demo: {
    eyebrow: 'DEMO BOEKEN',
    hero: 'Ontdek wat KONARA kan doen|voor uw bedrijf.',
    text: 'Vertel ons over uw bedrijf en de workflow die u wilt verbeteren en kies daarna een demotijd.',
    phone: 'Telefoon',
    industry: 'Sector',
    improve: 'Wat wilt u automatiseren of verbeteren?',
    request: 'Demo aanvragen',
    chooseTime: 'Kies uw demotijd.',
  },

  assistant: {
    welcome: 'WELKOM BIJ KONARA',
    title: 'Gebouwd om bedrijven intelligent te laten werken.',
    text: 'KONARA werd in 2026 opgericht om praktische AI-systemen te bouwen die bedrijven sneller laten reageren, meer kansen laten vastleggen en repetitief werk verminderen.',
    continue: 'Doorgaan',
    menuTitle: 'Ontdek KONARA op uw manier.',
    explore: 'Oplossingen bekijken',
    demo: 'Demo boeken',
    ask: 'Vraag KONARA',
    voiceTitle: 'Voiceflow wordt hier gekoppeld.',
    voiceText:
      'Deze ruimte is klaar voor een live KONARA-assistent die vragen kan beantwoorden, leads kan kwalificeren en boekingen kan begeleiden.',
    help: 'Hulp krijgen',
  },

  footer: {
    tagline: 'AI-oplossingen voor moderne bedrijven.',
    vision: 'KONARA OS',
    founded: 'Opgericht in 2026',
  },
};

const ES: CopyPack = {
  nav: [
    'Inicio',
    'Soluciones',
    'Servicios',
    'Nosotros',
    'Contacto',
    'Reservar una demo',
  ],

  common: {
    book: 'Reservar una demo',
    explore: 'Explorar soluciones',
    region: 'Región',
    language: 'Idioma',
    otherLanguage: 'Elegir otro idioma',
    keepRegion: 'Mantener esta región',
    required: 'Completa todos los campos obligatorios.',
    invalidEmail: 'Introduce una dirección de correo válida.',
    wrongPassword: 'Contraseña incorrecta.',
    locked: 'Demasiados intentos. Vuelve a intentarlo más tarde.',
    granted: 'Acceso concedido.',
  },

  coming: {
    eyebrow: 'EL FUTURO DE LA AUTOMATIZACIÓN EMPRESARIAL',
    hero: 'Algo inteligente|está por llegar.',
    text: 'KONARA está construyendo la capa inteligente entre las conversaciones con clientes y la acción empresarial: respuestas más rápidas, procesos más claros y sistemas que trabajan juntos.',
    building:
      'CONSTRUYENDO LA PRÓXIMA GENERACIÓN DE AUTOMATIZACIÓN EMPRESARIAL',
    founderAccess: 'Acceso de fundador',
    founderTitle: 'Acceso de fundador',
    founderText:
      'Introduce la contraseña de fundador para acceder al sitio privado de KONARA.',
    password: 'Contraseña de fundador',
    enter: 'Abrir vista previa',
  },

  home: {
    eyebrow: 'AUTOMATIZACIÓN CON IA PARA EMPRESAS MODERNAS',
    hero: 'Soluciones de IA|que trabajan para ti.',
    text: 'KONARA crea sistemas inteligentes que ayudan a las empresas a responder más rápido, captar más oportunidades y automatizar tareas repetitivas.',
    challengeTitle:
      'Tu empresa no debería perder oportunidades por trabajo repetitivo.',
    challenges: [
      'Consultas perdidas|Los clientes no deberían tener que esperar una respuesta.',
      'Administración manual|Las tareas repetitivas alejan al equipo del trabajo de mayor valor.',
      'Respuestas lentas|Los clientes actuales esperan una comunicación rápida y coherente.',
      'Procesos desconectados|La información importante debe moverse fácilmente por la empresa.',
    ],
    solutionTitle: 'Automatización diseñada para generar resultados.',
    solutions: [
      'Recepcionista IA|Responde preguntas, entiende la intención y guía consultas las 24 horas.',
      'Reservas inteligentes|Convierte el interés en citas confirmadas.',
      'Atención al cliente|Resuelve solicitudes comunes rápidamente y deriva a una persona cuando es necesario.',
    ],
    howTitle: 'De la conversación a la acción.',
    steps: [
      'Conectar|Un cliente interactúa con tu empresa.',
      'Entender|KONARA entiende la pregunta, intención y contexto.',
      'Automatizar|Se activa el flujo, lead o proceso de reserva correcto.',
      'Entregar|El cliente recibe atención rápida y tu equipo información estructurada.',
    ],
    liveTitle: 'Tu empresa. Disponible 24/7.',
    liveText:
      'Ofrece a tus clientes un primer punto de contacto inteligente para preguntas, leads, reservas y soporte.',
    osTitle: 'Un sistema inteligente para tu empresa.',
    osText:
      'KONARA OS es nuestra visión a largo plazo para unir comunicación, CRM, reservas, workflows y analítica.',
    ctaTitle: '¿Listo para automatizar de forma más inteligente?',
    ctaText:
      'Descubre cómo KONARA puede ahorrar tiempo, mejorar la comunicación con clientes y crear una mejor experiencia digital.',
  },

  solutions: {
    eyebrow: 'SOLUCIONES KONARA',
    hero: 'IA creada para empresas|reales.',
    text: 'Soluciones inteligentes para automatizar la comunicación, simplificar procesos y mejorar la eficiencia empresarial.',
    products: [
      'Recepcionista IA|Comunicación con clientes disponible a cualquier hora.',
      'Reservas inteligentes|Convierte conversaciones en citas confirmadas.',
      'Atención al cliente|Respuestas rápidas con una derivación humana bien diseñada.',
      'Ventas con IA|Captura oportunidades mientras el interés del cliente es alto.',
      'CRM y automatización|Mantiene la información en movimiento entre conversaciones, sistemas y equipos.',
      'Analítica e informes|Convierte la actividad en información empresarial más clara.',
    ],
    togetherTitle: 'Una capa inteligente, no seis herramientas desconectadas.',
    customTitle: 'No todas las empresas necesitan la misma automatización.',
    customText:
      'KONARA comienza con el problema, el recorrido del cliente y los sistemas existentes para construir el workflow adecuado.',
  },

  services: {
    eyebrow: 'SERVICIOS KONARA',
    hero: 'Automatización creada alrededor|de tu empresa.',
    text: 'Cada implementación comienza con el problema empresarial, el recorrido del cliente y el resultado que debe mejorar.',
    cards: [
      'Recepcionista IA|Comunicación adaptada al conocimiento, tono y reglas de derivación de tu empresa.',
      'Automatización de leads|Captura, califica y dirige oportunidades con menos administración repetitiva.',
      'Reservas inteligentes|Lleva al cliente desde la consulta hasta la cita confirmada.',
      'Atención al cliente|Resuelve solicitudes comunes manteniendo disponible la escalación humana.',
      'Integraciones empresariales|Conecta workflows de IA con los sistemas que ya utiliza tu empresa.',
      'Analítica|Convierte la actividad de clientes y operaciones en información más clara.',
    ],
    processTitle:
      'Un camino claro desde el problema hasta el sistema operativo.',
    process: [
      'Descubrir|Entender la empresa y la oportunidad de automatización.',
      'Diseñar|Mapear la experiencia, lógica, información y derivaciones.',
      'Construir|Crear el workflow de IA alrededor del proceso real.',
      'Probar|Probar conversaciones, casos límite y reglas empresariales.',
      'Lanzar|Desplegar de forma controlada con responsabilidades claras.',
      'Mejorar|Optimizar utilizando uso real y feedback.',
    ],
    existingTitle: 'Conserva las herramientas que ya funcionan.',
    existingText:
      'KONARA se adapta a los sistemas, personas y procesos en los que tu empresa ya confía.',
    afterTitle: 'El lanzamiento es el comienzo, no el final.',
    afterText:
      'El uso real revela nuevas preguntas, casos límite y mejores oportunidades para seguir mejorando.',
  },

  about: {
    eyebrow: 'SOBRE KONARA',
    hero: 'Construyendo formas más inteligentes|de hacer negocios.',
    text: 'KONARA se centra en inteligencia artificial práctica que mejora la comunicación, reduce el trabajo repetitivo y ayuda a las empresas a operar con mayor eficiencia.',
    whyTitle: 'La tecnología debería eliminar trabajo, no crear más.',
    whyText:
      'KONARA nació en 2026 con la idea de que la IA debe conectar de forma silenciosa la comunicación, las decisiones y la acción: automatización útil hoy y KONARA OS mañana.',
    principlesTitle: 'Construir algo útil. Mantenerlo claro. Ganar confianza.',
    principles: [
      'Innovación|Usar nueva tecnología cuando crea valor real.',
      'Simplicidad|Los sistemas complejos deben sentirse simples para quienes los utilizan.',
      'Confianza|La automatización debe mantener el control en manos de empresas y clientes.',
      'Excelencia|Cada detalle contribuye a la calidad de la experiencia.',
      'Éxito del cliente|La tecnología importa cuando la empresa obtiene mejores resultados.',
    ],
    timeline: [
      'Fundación|Workflows de IA enfocados y automatización del cliente.',
      'Inteligencia conectada|Más sistemas trabajando juntos como uno.',
      'KONARA OS|Una capa operativa inteligente y unificada para empresas modernas.',
    ],
  },

  contact: {
    eyebrow: 'CONTACTAR CON KONARA',
    hero: 'Empieza con el|problema empresarial.',
    text: 'Cuéntanos qué quieres mejorar y podremos explorar si un workflow de IA puede hacer el proceso más rápido, claro o fácil de gestionar.',
    directTitle: 'Habla con KONARA.',
    directText:
      'Para una conversación empresarial, una demostración personalizada es el mejor punto de partida.',
    name: 'Nombre completo',
    email: 'Correo empresarial',
    business: 'Empresa',
    message: 'Mensaje',
    send: 'Enviar mensaje',
  },

  demo: {
    eyebrow: 'RESERVAR UNA DEMO',
    hero: 'Descubre lo que KONARA puede hacer|por tu empresa.',
    text: 'Cuéntanos sobre tu empresa y el workflow que quieres mejorar y después elige una hora para la demostración.',
    phone: 'Teléfono',
    industry: 'Sector',
    improve: '¿Qué te gustaría automatizar o mejorar?',
    request: 'Solicitar una demo',
    chooseTime: 'Elige la hora de tu demo.',
  },

  assistant: {
    welcome: 'BIENVENIDO A KONARA',
    title: 'Creado para hacer que los negocios se sientan inteligentes.',
    text: 'KONARA fue fundada en 2026 para crear sistemas de IA prácticos que ayuden a las empresas a responder más rápido, captar más oportunidades y reducir el trabajo repetitivo.',
    continue: 'Continuar',
    menuTitle: 'Explora KONARA a tu manera.',
    explore: 'Explorar soluciones',
    demo: 'Reservar una demo',
    ask: 'Preguntar a KONARA',
    voiceTitle: 'Voiceflow se conecta aquí.',
    voiceText:
      'Esta zona está preparada para un asistente KONARA en vivo que pueda responder consultas, calificar leads y ayudar con reservas.',
    help: 'Obtener ayuda',
  },

  footer: {
    tagline: 'Soluciones de IA para empresas modernas.',
    vision: 'KONARA OS',
    founded: 'Fundada en 2026',
  },
};

const PT: CopyPack = {
  nav: [
    'Início',
    'Soluções',
    'Serviços',
    'Sobre',
    'Contato',
    'Agendar demonstração',
  ],

  common: {
    book: 'Agendar demonstração',
    explore: 'Explorar soluções',
    region: 'Região',
    language: 'Idioma',
    otherLanguage: 'Escolher outro idioma',
    keepRegion: 'Manter esta região',
    required: 'Preencha todos os campos obrigatórios.',
    invalidEmail: 'Digite um endereço de e-mail válido.',
    wrongPassword: 'Senha incorreta.',
    locked: 'Muitas tentativas. Tente novamente em breve.',
    granted: 'Acesso concedido.',
  },

  coming: {
    eyebrow: 'O FUTURO DA AUTOMAÇÃO EMPRESARIAL',
    hero: 'Algo inteligente|está chegando.',
    text: 'A KONARA está construindo a camada inteligente entre conversas com clientes e ações empresariais — respostas mais rápidas, fluxos mais claros e sistemas criados para trabalhar juntos.',
    building: 'CONSTRUINDO A PRÓXIMA GERAÇÃO DE AUTOMAÇÃO EMPRESARIAL',
    founderAccess: 'Acesso do fundador',
    founderTitle: 'Acesso do fundador',
    founderText:
      'Digite a senha do fundador para acessar o site privado da KONARA.',
    password: 'Senha do fundador',
    enter: 'Abrir prévia',
  },

  home: {
    eyebrow: 'AUTOMAÇÃO COM IA PARA EMPRESAS MODERNAS',
    hero: 'Soluções de IA|que trabalham para você.',
    text: 'A KONARA cria sistemas inteligentes que ajudam empresas a responder mais rápido, captar mais oportunidades e automatizar trabalhos repetitivos.',
    challengeTitle:
      'Sua empresa não deveria perder oportunidades por causa de tarefas repetitivas.',
    challenges: [
      'Contatos perdidos|Clientes não deveriam esperar por respostas.',
      'Administração manual|Tarefas repetitivas afastam as pessoas de trabalhos de maior valor.',
      'Respostas lentas|Clientes modernos esperam comunicação rápida e consistente.',
      'Fluxos desconectados|Informações importantes devem circular facilmente pela empresa.',
    ],
    solutionTitle: 'Automação construída em torno de resultados.',
    solutions: [
      'Recepcionista IA|Responde perguntas, entende intenções e orienta contatos 24 horas por dia.',
      'Agendamento inteligente|Transforma interesse em compromissos confirmados.',
      'Suporte ao cliente|Resolve solicitações comuns rapidamente e encaminha para humanos quando necessário.',
    ],
    howTitle: 'Da conversa à ação.',
    steps: [
      'Conectar|Um cliente entra em contato com sua empresa.',
      'Entender|A KONARA entende a pergunta, intenção e contexto.',
      'Automatizar|O fluxo, lead ou processo de agendamento correto é acionado.',
      'Entregar|O cliente recebe atendimento rápido e sua equipe recebe informações estruturadas.',
    ],
    liveTitle: 'Sua empresa. Disponível 24/7.',
    liveText:
      'Ofereça aos clientes um primeiro ponto de contato inteligente para perguntas, leads, agendamentos e suporte.',
    osTitle: 'Um sistema inteligente para sua empresa.',
    osText:
      'KONARA OS é nossa visão de longo prazo para reunir comunicação, CRM, agendamento, workflows e análises.',
    ctaTitle: 'Pronto para automatizar de forma mais inteligente?',
    ctaText:
      'Descubra como a KONARA pode economizar tempo, melhorar a comunicação com clientes e criar uma experiência digital melhor.',
  },

  solutions: {
    eyebrow: 'SOLUÇÕES KONARA',
    hero: 'IA criada para empresas|reais.',
    text: 'Soluções inteligentes para automatizar comunicação, simplificar workflows e aumentar a eficiência operacional.',
    products: [
      'Recepcionista IA|Comunicação com clientes disponível a qualquer hora.',
      'Agendamento inteligente|Transforma conversas em compromissos confirmados.',
      'Suporte ao cliente|Respostas rápidas com encaminhamento humano inteligente.',
      'Vendas com IA|Captura oportunidades enquanto o interesse do cliente está alto.',
      'CRM & Automação|Mantém informações em movimento entre conversas, sistemas e equipes.',
      'Análises & Relatórios|Transforma atividade em informações empresariais mais claras.',
    ],
    togetherTitle:
      'Uma camada inteligente, não seis ferramentas desconectadas.',
    customTitle: 'Nem toda empresa precisa da mesma automação.',
    customText:
      'A KONARA começa pelo problema, pela jornada do cliente e pelos sistemas existentes para construir o workflow certo.',
  },

  services: {
    eyebrow: 'SERVIÇOS KONARA',
    hero: 'Automação construída em torno|da sua empresa.',
    text: 'Cada implementação começa com o problema empresarial, a jornada do cliente e o resultado que precisa melhorar.',
    cards: [
      'Recepcionista IA|Comunicação adaptada ao conhecimento, tom e regras de encaminhamento da sua empresa.',
      'Automação de leads|Captura, qualifica e encaminha oportunidades com menos administração repetitiva.',
      'Agendamento inteligente|Leva clientes da consulta até um compromisso confirmado.',
      'Suporte ao cliente|Resolve solicitações comuns mantendo o encaminhamento humano disponível.',
      'Integrações empresariais|Conecta workflows de IA aos sistemas que sua empresa já utiliza.',
      'Análises|Transforma atividade de clientes e operações em informações mais claras.',
    ],
    processTitle:
      'Um caminho claro do problema até o sistema em funcionamento.',
    process: [
      'Descobrir|Entender a empresa e a oportunidade de automação.',
      'Projetar|Mapear experiência, lógica, informações e encaminhamentos.',
      'Construir|Criar o workflow de IA ao redor do processo real.',
      'Testar|Testar conversas, exceções e regras empresariais.',
      'Lançar|Implantar de forma controlada com responsabilidades claras.',
      'Melhorar|Otimizar usando uso real e feedback.',
    ],
    existingTitle: 'Mantenha as ferramentas que já funcionam.',
    existingText:
      'A KONARA se adapta aos sistemas, pessoas e processos nos quais sua empresa já confia.',
    afterTitle: 'O lançamento é o começo, não o fim.',
    afterText:
      'O uso real revela novas perguntas, exceções e oportunidades melhores para continuar evoluindo.',
  },

  about: {
    eyebrow: 'SOBRE A KONARA',
    hero: 'Construindo formas mais inteligentes|de fazer negócios.',
    text: 'A KONARA concentra-se em inteligência artificial prática que melhora a comunicação, reduz trabalhos repetitivos e ajuda empresas a operar com mais eficiência.',
    whyTitle: 'A tecnologia deve remover trabalho, não criar mais.',
    whyText:
      'A KONARA foi fundada em 2026 com a ideia de que a IA deve conectar discretamente comunicação, decisões e ação — automação útil hoje e KONARA OS amanhã.',
    principlesTitle:
      'Construa algo útil. Mantenha simples. Conquiste confiança.',
    principles: [
      'Inovação|Use novas tecnologias quando elas criarem valor real.',
      'Simplicidade|Sistemas complexos devem parecer simples para quem os utiliza.',
      'Confiança|A automação deve manter empresas e clientes no controle.',
      'Excelência|Cada detalhe contribui para a qualidade da experiência.',
      'Sucesso do cliente|A tecnologia importa quando a empresa alcança resultados melhores.',
    ],
    timeline: [
      'Fundação|Workflows de IA focados e automação de clientes.',
      'Inteligência conectada|Mais sistemas trabalhando juntos como um só.',
      'KONARA OS|Uma camada operacional inteligente e unificada para empresas modernas.',
    ],
  },

  contact: {
    eyebrow: 'CONTATO KONARA',
    hero: 'Comece pelo|problema empresarial.',
    text: 'Conte o que você deseja melhorar e podemos analisar se um workflow de IA pode tornar o processo mais rápido, claro ou fácil de gerenciar.',
    directTitle: 'Fale com a KONARA.',
    directText:
      'Para uma conversa empresarial, uma demonstração personalizada é o melhor ponto de partida.',
    name: 'Nome completo',
    email: 'E-mail empresarial',
    business: 'Empresa',
    message: 'Mensagem',
    send: 'Enviar mensagem',
  },

  demo: {
    eyebrow: 'AGENDAR DEMONSTRAÇÃO',
    hero: 'Veja o que a KONARA pode fazer|pela sua empresa.',
    text: 'Conte-nos sobre sua empresa e o workflow que deseja melhorar e depois escolha um horário para a demonstração.',
    phone: 'Telefone',
    industry: 'Setor',
    improve: 'O que você gostaria de automatizar ou melhorar?',
    request: 'Solicitar demonstração',
    chooseTime: 'Escolha o horário da sua demonstração.',
  },

  assistant: {
    welcome: 'BEM-VINDO À KONARA',
    title: 'Criada para tornar os negócios mais inteligentes.',
    text: 'A KONARA foi fundada em 2026 para criar sistemas práticos de IA que ajudam empresas a responder mais rápido, captar mais oportunidades e reduzir tarefas repetitivas.',
    continue: 'Continuar',
    menuTitle: 'Explore a KONARA do seu jeito.',
    explore: 'Explorar soluções',
    demo: 'Agendar demonstração',
    ask: 'Perguntar à KONARA',
    voiceTitle: 'Voiceflow conecta aqui.',
    voiceText:
      'Esta área está pronta para um assistente KONARA ao vivo capaz de responder perguntas, qualificar leads e orientar agendamentos.',
    help: 'Obter ajuda',
  },

  footer: {
    tagline: 'Soluções de IA para empresas modernas.',
    vision: 'KONARA OS',
    founded: 'Fundada em 2026',
  },
};

const IT: CopyPack = {
  nav: [
    'Home',
    'Soluzioni',
    'Servizi',
    'Chi siamo',
    'Contatti',
    'Prenota una demo',
  ],

  common: {
    book: 'Prenota una demo',
    explore: 'Esplora le soluzioni',
    region: 'Regione',
    language: 'Lingua',
    otherLanguage: "Scegli un'altra lingua",
    keepRegion: 'Mantieni questa regione',
    required: 'Compila tutti i campi obbligatori.',
    invalidEmail: 'Inserisci un indirizzo e-mail valido.',
    wrongPassword: 'Password errata.',
    locked: 'Troppi tentativi. Riprova più tardi.',
    granted: 'Accesso consentito.',
  },

  coming: {
    eyebrow: "IL FUTURO DELL'AUTOMAZIONE AZIENDALE",
    hero: 'Qualcosa di intelligente|sta arrivando.',
    text: "KONARA sta costruendo il livello intelligente tra le conversazioni con i clienti e l'azione aziendale — risposte più rapide, workflow più chiari e sistemi progettati per lavorare insieme.",
    building:
      'STIAMO COSTRUENDO LA PROSSIMA GENERAZIONE DI AUTOMAZIONE AZIENDALE',
    founderAccess: 'Accesso fondatore',
    founderTitle: 'Accesso fondatore',
    founderText:
      'Inserisci la password del fondatore per accedere al sito privato di KONARA.',
    password: 'Password fondatore',
    enter: 'Apri anteprima',
  },

  home: {
    eyebrow: 'AUTOMAZIONE AI PER AZIENDE MODERNE',
    hero: 'Soluzioni AI|che lavorano per te.',
    text: 'KONARA crea sistemi intelligenti che aiutano le aziende a rispondere più velocemente, cogliere più opportunità e automatizzare il lavoro ripetitivo.',
    challengeTitle:
      'La tua azienda non dovrebbe perdere opportunità a causa del lavoro ripetitivo.',
    challenges: [
      'Richieste perse|I clienti non dovrebbero aspettare una risposta.',
      'Amministrazione manuale|Le attività ripetitive allontanano le persone dal lavoro di maggior valore.',
      'Risposte lente|I clienti moderni si aspettano una comunicazione rapida e coerente.',
      "Workflow scollegati|Le informazioni importanti devono muoversi facilmente nell'azienda.",
    ],
    solutionTitle: 'Automazione costruita intorno ai risultati.',
    solutions: [
      "Receptionist AI|Risponde alle domande, comprende l'intento e guida le richieste 24/7.",
      "Prenotazione intelligente|Trasforma l'interesse in appuntamenti confermati.",
      'Assistenza clienti|Risolve rapidamente le richieste comuni con passaggio umano quando necessario.',
    ],
    howTitle: "Dalla conversazione all'azione.",
    steps: [
      'Connetti|Un cliente interagisce con la tua azienda.',
      'Comprendi|KONARA comprende domanda, intento e contesto.',
      'Automatizza|Viene attivato il workflow, lead o processo di prenotazione corretto.',
      'Consegna|Il cliente riceve assistenza rapida e il team informazioni strutturate.',
    ],
    liveTitle: 'La tua azienda. Disponibile 24/7.',
    liveText:
      'Offri ai clienti un primo punto di contatto intelligente per domande, lead, prenotazioni e supporto.',
    osTitle: 'Un sistema intelligente per la tua azienda.',
    osText:
      'KONARA OS è la nostra visione a lungo termine per unire comunicazione, CRM, prenotazioni, workflow e analisi.',
    ctaTitle: 'Pronto ad automatizzare in modo più intelligente?',
    ctaText:
      "Scopri come KONARA può far risparmiare tempo, migliorare la comunicazione con i clienti e creare un'esperienza digitale migliore.",
  },

  solutions: {
    eyebrow: 'SOLUZIONI KONARA',
    hero: 'AI costruita per aziende|reali.',
    text: "Soluzioni intelligenti per automatizzare la comunicazione, semplificare i workflow e migliorare l'efficienza.",
    products: [
      'Receptionist AI|Comunicazione con i clienti disponibile in ogni momento.',
      'Prenotazione intelligente|Trasforma le conversazioni in appuntamenti confermati.',
      'Assistenza clienti|Risposte rapide con un passaggio umano ben progettato.',
      "Vendite AI|Cattura opportunità mentre l'interesse del cliente è alto.",
      'CRM & Automazione|Mantiene le informazioni in movimento tra conversazioni, sistemi e team.',
      "Analisi & Report|Trasforma l'attività in informazioni aziendali più chiare.",
    ],
    togetherTitle:
      'Un unico livello intelligente, non sei strumenti scollegati.',
    customTitle: 'Non tutte le aziende hanno bisogno della stessa automazione.',
    customText:
      'KONARA parte dal problema, dal percorso cliente e dai sistemi esistenti per costruire il workflow giusto.',
  },

  services: {
    eyebrow: 'SERVIZI KONARA',
    hero: 'Automazione costruita intorno|alla tua azienda.',
    text: 'Ogni implementazione parte dal problema aziendale, dal percorso cliente e dal risultato da migliorare.',
    cards: [
      'Receptionist AI|Comunicazione adattata alla conoscenza, al tono e alle regole di passaggio della tua azienda.',
      'Automazione lead|Cattura, qualifica e indirizza opportunità con meno amministrazione ripetitiva.',
      "Prenotazione intelligente|Porta il cliente dalla richiesta all'appuntamento confermato.",
      "Assistenza clienti|Gestisce rapidamente richieste comuni mantenendo disponibile l'escalation umana.",
      'Integrazioni aziendali|Collega i workflow AI ai sistemi che la tua azienda utilizza già.',
      'Analisi|Trasforma attività clienti e operative in informazioni più chiare.',
    ],
    processTitle: 'Un percorso chiaro dal problema al sistema operativo.',
    process: [
      "Scopri|Comprendi l'azienda e l'opportunità di automazione.",
      'Progetta|Mappa esperienza, logica, informazioni e passaggi.',
      'Costruisci|Crea il workflow AI intorno al processo reale.',
      'Testa|Verifica conversazioni, casi limite e regole aziendali.',
      'Lancia|Distribuisci gradualmente con responsabilità chiare.',
      'Migliora|Ottimizza utilizzando uso reale e feedback.',
    ],
    existingTitle: 'Mantieni gli strumenti che funzionano già.',
    existingText:
      'KONARA si adatta ai sistemi, alle persone e ai processi di cui la tua azienda si fida già.',
    afterTitle: "Il lancio è l'inizio, non la fine.",
    afterText:
      "L'uso reale rivela nuove domande, casi limite e opportunità migliori di miglioramento.",
  },

  about: {
    eyebrow: 'CHI È KONARA',
    hero: 'Costruire modi più intelligenti|di fare business.',
    text: "KONARA si concentra su un'intelligenza artificiale pratica che migliora la comunicazione, riduce il lavoro ripetitivo e aiuta le aziende a operare in modo più efficiente.",
    whyTitle: 'La tecnologia dovrebbe eliminare lavoro, non crearne altro.',
    whyText:
      "KONARA è stata fondata nel 2026 con l'idea che l'AI debba collegare silenziosamente comunicazione, decisioni e azioni — automazione utile oggi e KONARA OS domani.",
    principlesTitle: 'Costruire utile. Restare chiari. Guadagnare fiducia.',
    principles: [
      'Innovazione|Usare nuove tecnologie quando creano valore reale.',
      'Semplicità|I sistemi complessi devono sembrare semplici a chi li usa.',
      "Fiducia|L'automazione deve lasciare il controllo ad aziende e clienti.",
      "Eccellenza|Ogni dettaglio contribuisce alla qualità dell'esperienza.",
      "Successo del cliente|La tecnologia conta quando l'azienda ottiene risultati migliori.",
    ],
    timeline: [
      'Fondazione|Workflow AI mirati e automazione dei clienti.',
      'Intelligenza connessa|Più sistemi lavorano insieme come uno.',
      'KONARA OS|Un livello operativo intelligente e unificato per aziende moderne.',
    ],
  },

  contact: {
    eyebrow: 'CONTATTA KONARA',
    hero: 'Parti dal|problema aziendale.',
    text: 'Raccontaci cosa vuoi migliorare e valuteremo se un workflow AI può rendere il processo più rapido, chiaro o semplice da gestire.',
    directTitle: 'Parla con KONARA.',
    directText:
      'Per una conversazione aziendale, una demo personalizzata è il punto di partenza migliore.',
    name: 'Nome completo',
    email: 'E-mail aziendale',
    business: 'Azienda',
    message: 'Messaggio',
    send: 'Invia messaggio',
  },

  demo: {
    eyebrow: 'PRENOTA UNA DEMO',
    hero: 'Scopri cosa può fare KONARA|per la tua azienda.',
    text: 'Parlaci della tua azienda e del workflow che vuoi migliorare, quindi scegli un orario per la demo.',
    phone: 'Telefono',
    industry: 'Settore',
    improve: 'Cosa vorresti automatizzare o migliorare?',
    request: 'Richiedi una demo',
    chooseTime: "Scegli l'orario della demo.",
  },

  assistant: {
    welcome: 'BENVENUTO IN KONARA',
    title: 'Creata per rendere il business intelligente.',
    text: 'KONARA è stata fondata nel 2026 per creare sistemi AI pratici che aiutano le aziende a rispondere più velocemente, catturare più opportunità e ridurre il lavoro ripetitivo.',
    continue: 'Continua',
    menuTitle: 'Esplora KONARA a modo tuo.',
    explore: 'Esplora soluzioni',
    demo: 'Prenota una demo',
    ask: 'Chiedi a KONARA',
    voiceTitle: 'Voiceflow si collega qui.',
    voiceText:
      "Quest'area è pronta per un assistente KONARA live che può rispondere alle richieste, qualificare lead e guidare le prenotazioni.",
    help: 'Ottieni aiuto',
  },

  footer: {
    tagline: 'Soluzioni AI per aziende moderne.',
    vision: 'KONARA OS',
    founded: 'Fondata nel 2026',
  },
};

const PL: CopyPack = {
  nav: [
    'Strona główna',
    'Rozwiązania',
    'Usługi',
    'O nas',
    'Kontakt',
    'Umów demo',
  ],

  common: {
    book: 'Umów demo',
    explore: 'Poznaj rozwiązania',
    region: 'Region',
    language: 'Język',
    otherLanguage: 'Wybierz inny język',
    keepRegion: 'Zachowaj ten region',
    required: 'Wypełnij wszystkie wymagane pola.',
    invalidEmail: 'Wprowadź prawidłowy adres e-mail.',
    wrongPassword: 'Nieprawidłowe hasło.',
    locked: 'Zbyt wiele prób. Spróbuj ponownie później.',
    granted: 'Dostęp przyznany.',
  },

  coming: {
    eyebrow: 'PRZYSZŁOŚĆ AUTOMATYZACJI BIZNESU',
    hero: 'Nadchodzi coś|inteligentnego.',
    text: 'KONARA tworzy inteligentną warstwę między rozmowami z klientami a działaniami biznesowymi — szybsze odpowiedzi, sprawniejsze procesy i systemy zaprojektowane do współpracy.',
    building: 'TWORZYMY NOWĄ GENERACJĘ AUTOMATYZACJI BIZNESU',
    founderAccess: 'Dostęp założyciela',
    founderTitle: 'Dostęp założyciela',
    founderText:
      'Wprowadź hasło założyciela, aby przejść do prywatnej strony KONARA.',
    password: 'Hasło założyciela',
    enter: 'Otwórz podgląd',
  },

  home: {
    eyebrow: 'AUTOMATYZACJA AI DLA NOWOCZESNYCH FIRM',
    hero: 'Rozwiązania AI|które pracują dla Ciebie.',
    text: 'KONARA tworzy inteligentne systemy, które pomagają firmom odpowiadać szybciej, wykorzystywać więcej szans i automatyzować powtarzalną pracę.',
    challengeTitle:
      'Twoja firma nie powinna tracić szans przez powtarzalne zadania.',
    challenges: [
      'Utracone zapytania|Klienci nie powinni czekać na odpowiedź.',
      'Ręczna administracja|Powtarzalne zadania zabierają czas na bardziej wartościową pracę.',
      'Wolne odpowiedzi|Współcześni klienci oczekują szybkiej i spójnej komunikacji.',
      'Rozłączone procesy|Ważne informacje powinny płynnie przepływać przez firmę.',
    ],
    solutionTitle: 'Automatyzacja zbudowana wokół rezultatów.',
    solutions: [
      'Recepcjonista AI|Odpowiada na pytania, rozpoznaje intencje i obsługuje zapytania przez całą dobę.',
      'Inteligentne rezerwacje|Zmienia zainteresowanie w potwierdzone spotkania.',
      'Obsługa klienta|Szybko rozwiązuje typowe sprawy i przekazuje je człowiekowi, gdy jest to potrzebne.',
    ],
    howTitle: 'Od rozmowy do działania.',
    steps: [
      'Połącz|Klient kontaktuje się z Twoją firmą.',
      'Zrozum|KONARA rozumie pytanie, intencję i kontekst.',
      'Automatyzuj|Uruchamiany jest właściwy proces, lead lub rezerwacja.',
      'Dostarcz|Klient otrzymuje szybką pomoc, a zespół uporządkowane informacje.',
    ],
    liveTitle: 'Twoja firma. Dostępna 24/7.',
    liveText:
      'Daj klientom inteligentny pierwszy punkt kontaktu dla pytań, leadów, rezerwacji i wsparcia.',
    osTitle: 'Jeden inteligentny system dla Twojej firmy.',
    osText:
      'KONARA OS to nasza długoterminowa wizja połączenia komunikacji, CRM, rezerwacji, workflow i analityki.',
    ctaTitle: 'Gotowy na inteligentniejszą automatyzację?',
    ctaText:
      'Zobacz, jak KONARA może oszczędzać czas, poprawiać komunikację z klientami i tworzyć lepsze doświadczenia cyfrowe.',
  },

  solutions: {
    eyebrow: 'ROZWIĄZANIA KONARA',
    hero: 'AI stworzone dla|prawdziwego biznesu.',
    text: 'Inteligentne rozwiązania automatyzujące komunikację, procesy i codzienną działalność firmy.',
    products: [
      'Recepcjonista AI|Komunikacja z klientami dostępna przez całą dobę.',
      'Inteligentne rezerwacje|Zamienia rozmowy w potwierdzone terminy.',
      'Obsługa klienta|Szybkie odpowiedzi z przemyślanym przekazaniem do człowieka.',
      'Sprzedaż AI|Wychwytuje szanse, gdy zainteresowanie klienta jest wysokie.',
      'CRM i automatyzacja|Utrzymuje przepływ informacji między rozmowami, systemami i zespołami.',
      'Analityka i raportowanie|Zmienia aktywność w bardziej przejrzyste informacje biznesowe.',
    ],
    togetherTitle:
      'Jedna inteligentna warstwa zamiast sześciu rozłączonych narzędzi.',
    customTitle: 'Nie każda firma potrzebuje takiej samej automatyzacji.',
    customText:
      'KONARA zaczyna od problemu, ścieżki klienta i istniejących systemów, a następnie buduje odpowiedni workflow.',
  },

  services: {
    eyebrow: 'USŁUGI KONARA',
    hero: 'Automatyzacja zbudowana wokół|Twojej firmy.',
    text: 'Każde wdrożenie zaczyna się od problemu biznesowego, ścieżki klienta i rezultatu, który należy poprawić.',
    cards: [
      'Recepcjonista AI|Komunikacja dopasowana do wiedzy, tonu i zasad przekazywania w Twojej firmie.',
      'Automatyzacja leadów|Pozyskuje, kwalifikuje i kieruje szanse przy mniejszej ilości administracji.',
      'Inteligentne rezerwacje|Prowadzi klienta od zapytania do potwierdzonego terminu.',
      'Obsługa klienta|Szybko obsługuje typowe sprawy z możliwością eskalacji do człowieka.',
      'Integracje biznesowe|Łączy workflow AI z systemami, których firma już używa.',
      'Analityka|Zmienia aktywność klientów i operacji w czytelniejsze informacje.',
    ],
    processTitle: 'Jasna droga od problemu do działającego systemu.',
    process: [
      'Odkryj|Zrozum firmę i potencjał automatyzacji.',
      'Zaprojektuj|Zmapuj doświadczenie, logikę, informacje i przekazania.',
      'Zbuduj|Stwórz workflow AI wokół rzeczywistego procesu.',
      'Przetestuj|Sprawdź rozmowy, sytuacje nietypowe i reguły biznesowe.',
      'Uruchom|Wdróż rozwiązanie kontrolowanie i z jasną odpowiedzialnością.',
      'Ulepszaj|Optymalizuj system na podstawie realnego użycia i opinii.',
    ],
    existingTitle: 'Zachowaj narzędzia, które już działają.',
    existingText:
      'KONARA dopasowuje się do systemów, ludzi i procesów, którym Twoja firma już ufa.',
    afterTitle: 'Uruchomienie to początek, nie koniec.',
    afterText:
      'Prawdziwe użycie ujawnia nowe pytania, wyjątki i lepsze możliwości dalszego rozwoju.',
  },

  about: {
    eyebrow: 'O KONARA',
    hero: 'Budujemy inteligentniejsze sposoby|prowadzenia biznesu.',
    text: 'KONARA skupia się na praktycznej sztucznej inteligencji, która poprawia komunikację, ogranicza powtarzalną pracę i pomaga firmom działać sprawniej.',
    whyTitle: 'Technologia powinna usuwać pracę, a nie tworzyć jej więcej.',
    whyText:
      'KONARA została założona w 2026 roku z ideą, że AI powinno dyskretnie łączyć komunikację, decyzje i działania — użyteczna automatyzacja dziś i KONARA OS jutro.',
    principlesTitle:
      'Buduj użytecznie. Zachowuj przejrzystość. Zdobywaj zaufanie.',
    principles: [
      'Innowacja|Wykorzystuj nowe technologie tam, gdzie tworzą realną wartość.',
      'Prostota|Złożone systemy powinny być proste dla użytkowników.',
      'Zaufanie|Automatyzacja powinna pozostawiać kontrolę firmom i klientom.',
      'Doskonałość|Każdy szczegół wpływa na jakość doświadczenia.',
      'Sukces klienta|Technologia ma znaczenie, gdy firma osiąga lepszy rezultat.',
    ],
    timeline: [
      'Fundament|Skoncentrowane workflow AI i automatyzacja obsługi klienta.',
      'Połączona inteligencja|Więcej systemów pracujących razem jako jedna całość.',
      'KONARA OS|Jednolita inteligentna warstwa operacyjna dla nowoczesnego biznesu.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKT Z KONARA',
    hero: 'Zacznij od|problemu biznesowego.',
    text: 'Powiedz nam, co chcesz poprawić, a sprawdzimy, czy workflow AI może uczynić proces szybszym, prostszym lub łatwiejszym w zarządzaniu.',
    directTitle: 'Porozmawiaj z KONARA.',
    directText:
      'Dla rozmowy biznesowej najlepszym punktem wyjścia jest dopasowana demonstracja.',
    name: 'Imię i nazwisko',
    email: 'E-mail firmowy',
    business: 'Firma',
    message: 'Wiadomość',
    send: 'Wyślij wiadomość',
  },

  demo: {
    eyebrow: 'UMÓW DEMO',
    hero: 'Zobacz, co KONARA może zrobić|dla Twojej firmy.',
    text: 'Opowiedz nam o swojej firmie i workflow, który chcesz poprawić, a następnie wybierz termin demonstracji.',
    phone: 'Telefon',
    industry: 'Branża',
    improve: 'Co chcesz zautomatyzować lub poprawić?',
    request: 'Poproś o demo',
    chooseTime: 'Wybierz godzinę demonstracji.',
  },

  assistant: {
    welcome: 'WITAJ W KONARA',
    title: 'Stworzone, aby biznes działał inteligentniej.',
    text: 'KONARA powstała w 2026 roku, aby tworzyć praktyczne systemy AI pomagające firmom odpowiadać szybciej, wykorzystywać więcej szans i ograniczać powtarzalną pracę.',
    continue: 'Dalej',
    menuTitle: 'Poznaj KONARA po swojemu.',
    explore: 'Poznaj rozwiązania',
    demo: 'Umów demo',
    ask: 'Zapytaj KONARA',
    voiceTitle: 'Tutaj podłączany jest Voiceflow.',
    voiceText:
      'Ta sekcja jest gotowa na asystenta KONARA, który może odpowiadać na pytania, kwalifikować leady i prowadzić rezerwacje.',
    help: 'Uzyskaj pomoc',
  },

  footer: {
    tagline: 'Rozwiązania AI dla nowoczesnych firm.',
    vision: 'KONARA OS',
    founded: 'Założona w 2026',
  },
};

const CS: CopyPack = {
  nav: ['Domů', 'Řešení', 'Služby', 'O nás', 'Kontakt', 'Rezervovat demo'],

  common: {
    book: 'Rezervovat demo',
    explore: 'Prozkoumat řešení',
    region: 'Region',
    language: 'Jazyk',
    otherLanguage: 'Vybrat jiný jazyk',
    keepRegion: 'Ponechat tento region',
    required: 'Vyplňte všechna povinná pole.',
    invalidEmail: 'Zadejte platnou e-mailovou adresu.',
    wrongPassword: 'Nesprávné heslo.',
    locked: 'Příliš mnoho pokusů. Zkuste to později.',
    granted: 'Přístup povolen.',
  },

  coming: {
    eyebrow: 'BUDOUCNOST AUTOMATIZACE PODNIKÁNÍ',
    hero: 'Přichází něco|inteligentního.',
    text: 'KONARA buduje inteligentní vrstvu mezi komunikací se zákazníky a obchodními akcemi — rychlejší odpovědi, jasnější procesy a systémy navržené ke spolupráci.',
    building: 'BUDUJEME DALŠÍ GENERACI AUTOMATIZACE PODNIKÁNÍ',
    founderAccess: 'Přístup zakladatele',
    founderTitle: 'Přístup zakladatele',
    founderText:
      'Zadejte heslo zakladatele a pokračujte na soukromý web KONARA.',
    password: 'Heslo zakladatele',
    enter: 'Otevřít náhled',
  },

  home: {
    eyebrow: 'AI AUTOMATIZACE PRO MODERNÍ FIRMY',
    hero: 'AI řešení|která pracují pro vás.',
    text: 'KONARA vytváří inteligentní systémy, které firmám pomáhají reagovat rychleji, zachytit více příležitostí a automatizovat opakující se práci.',
    challengeTitle:
      'Vaše firma by neměla přicházet o příležitosti kvůli opakující se práci.',
    challenges: [
      'Zmeškané dotazy|Zákazníci by neměli čekat na odpověď.',
      'Ruční administrativa|Opakující se úkoly odvádějí lidi od důležitější práce.',
      'Pomalé odpovědi|Moderní zákazníci očekávají rychlou a konzistentní komunikaci.',
      'Nespojené procesy|Důležité informace by měly firmou proudit plynule.',
    ],
    solutionTitle: 'Automatizace postavená na výsledcích.',
    solutions: [
      'AI recepční|Odpovídá na dotazy, rozpoznává záměr a vede zákazníka 24/7.',
      'Chytré rezervace|Mění zájem na potvrzené schůzky.',
      'Zákaznická podpora|Rychle řeší běžné požadavky a v případě potřeby je předává člověku.',
    ],
    howTitle: 'Od konverzace k akci.',
    steps: [
      'Spojit|Zákazník kontaktuje vaši firmu.',
      'Porozumět|KONARA rozumí otázce, záměru a kontextu.',
      'Automatizovat|Spustí se správný workflow, lead nebo rezervace.',
      'Doručit|Zákazník dostane rychlou pomoc a tým strukturované informace.',
    ],
    liveTitle: 'Vaše firma. Dostupná 24/7.',
    liveText:
      'Nabídněte zákazníkům inteligentní první kontaktní bod pro otázky, leady, rezervace a podporu.',
    osTitle: 'Jeden inteligentní systém pro vaši firmu.',
    osText:
      'KONARA OS je naše dlouhodobá vize spojení komunikace, CRM, rezervací, workflow a analytiky.',
    ctaTitle: 'Připraveni automatizovat chytřeji?',
    ctaText:
      'Zjistěte, jak KONARA může šetřit čas, zlepšit komunikaci se zákazníky a vytvořit lepší digitální zkušenost.',
  },

  solutions: {
    eyebrow: 'ŘEŠENÍ KONARA',
    hero: 'AI vytvořená pro|skutečný byznys.',
    text: 'Inteligentní řešení pro automatizaci komunikace, workflow a každodenního provozu.',
    products: [
      'AI recepční|Komunikace se zákazníky dostupná kdykoli.',
      'Chytré rezervace|Mění konverzace na potvrzené schůzky.',
      'Zákaznická podpora|Rychlé odpovědi s promyšleným lidským předáním.',
      'AI prodej|Zachytí příležitosti, dokud je zájem zákazníka vysoký.',
      'CRM a automatizace|Udržuje tok informací mezi konverzacemi, systémy a týmy.',
      'Analytika a reporting|Mění aktivitu v jasnější obchodní informace.',
    ],
    togetherTitle: 'Jedna inteligentní vrstva místo šesti oddělených nástrojů.',
    customTitle: 'Ne každá firma potřebuje stejnou automatizaci.',
    customText:
      'KONARA začíná problémem, cestou zákazníka a existujícími systémy a následně vytvoří správný workflow.',
  },

  services: {
    eyebrow: 'SLUŽBY KONARA',
    hero: 'Automatizace postavená kolem|vaší firmy.',
    text: 'Každá implementace začíná obchodním problémem, cestou zákazníka a výsledkem, který je potřeba zlepšit.',
    cards: [
      'AI recepční|Komunikace přizpůsobená znalostem, tónu a pravidlům předávání vaší firmy.',
      'Automatizace leadů|Zachycuje, kvalifikuje a směruje příležitosti s menší administrativou.',
      'Chytré rezervace|Vede zákazníka od dotazu až k potvrzenému termínu.',
      'Zákaznická podpora|Rychle zpracuje běžné požadavky s možností lidské eskalace.',
      'Firemní integrace|Propojuje AI workflow se systémy, které vaše firma již používá.',
      'Analytika|Mění zákaznickou a provozní aktivitu v přehlednější informace.',
    ],
    processTitle: 'Jasná cesta od problému k fungujícímu systému.',
    process: [
      'Objevit|Porozumět firmě a příležitosti pro automatizaci.',
      'Navrhnout|Zmapovat zkušenost, logiku, informace a předávání.',
      'Postavit|Vytvořit AI workflow kolem skutečného procesu.',
      'Testovat|Prověřit konverzace, okrajové případy a pravidla.',
      'Spustit|Nasadit řešení kontrolovaně a s jasnou odpovědností.',
      'Zlepšovat|Optimalizovat podle skutečného používání a zpětné vazby.',
    ],
    existingTitle: 'Ponechte si nástroje, které už fungují.',
    existingText:
      'KONARA se přizpůsobuje systémům, lidem a procesům, kterým vaše firma již důvěřuje.',
    afterTitle: 'Spuštění je začátek, ne konec.',
    afterText:
      'Skutečné používání odhaluje nové otázky, výjimky a další možnosti zlepšení.',
  },

  about: {
    eyebrow: 'O KONARA',
    hero: 'Budujeme chytřejší způsoby|podnikání.',
    text: 'KONARA se zaměřuje na praktickou umělou inteligenci, která zlepšuje komunikaci, snižuje opakující se práci a pomáhá firmám fungovat efektivněji.',
    whyTitle: 'Technologie by měla práci odebírat, ne ji přidávat.',
    whyText:
      'KONARA byla založena v roce 2026 s myšlenkou, že AI má nenápadně propojovat komunikaci, rozhodování a akci — užitečná automatizace dnes a KONARA OS zítra.',
    principlesTitle: 'Stavět užitečně. Zůstat srozumitelní. Získávat důvěru.',
    principles: [
      'Inovace|Používat nové technologie tam, kde vytvářejí skutečnou hodnotu.',
      'Jednoduchost|Složité systémy by měly uživatelům připadat jednoduché.',
      'Důvěra|Automatizace musí ponechat kontrolu firmám a zákazníkům.',
      'Excelence|Každý detail přispívá ke kvalitě zkušenosti.',
      'Úspěch zákazníka|Technologie má smysl, když firma dosahuje lepších výsledků.',
    ],
    timeline: [
      'Základ|Cílené AI workflow a automatizace zákazníků.',
      'Propojená inteligence|Více systémů pracuje společně jako jeden celek.',
      'KONARA OS|Jednotná inteligentní provozní vrstva pro moderní firmy.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKT KONARA',
    hero: 'Začněte|obchodním problémem.',
    text: 'Řekněte nám, co chcete zlepšit, a společně zjistíme, zda AI workflow může proces zrychlit, zpřehlednit nebo zjednodušit.',
    directTitle: 'Promluvte si s KONARA.',
    directText:
      'Pro obchodní rozhovor je nejlepší začít přizpůsobenou demonstrací.',
    name: 'Celé jméno',
    email: 'Firemní e-mail',
    business: 'Firma',
    message: 'Zpráva',
    send: 'Odeslat zprávu',
  },

  demo: {
    eyebrow: 'REZERVOVAT DEMO',
    hero: 'Zjistěte, co může KONARA udělat|pro vaši firmu.',
    text: 'Řekněte nám o své firmě a workflow, který chcete zlepšit, a vyberte si čas demonstrace.',
    phone: 'Telefon',
    industry: 'Odvětví',
    improve: 'Co chcete automatizovat nebo zlepšit?',
    request: 'Požádat o demo',
    chooseTime: 'Vyberte čas demonstrace.',
  },

  assistant: {
    welcome: 'VÍTEJTE V KONARA',
    title: 'Navrženo tak, aby podnikání působilo inteligentně.',
    text: 'KONARA vznikla v roce 2026, aby vytvářela praktické AI systémy, které firmám pomáhají reagovat rychleji, zachytit více příležitostí a omezit opakující se práci.',
    continue: 'Pokračovat',
    menuTitle: 'Prozkoumejte KONARA podle sebe.',
    explore: 'Prozkoumat řešení',
    demo: 'Rezervovat demo',
    ask: 'Zeptat se KONARA',
    voiceTitle: 'Zde se připojuje Voiceflow.',
    voiceText:
      'Tato část je připravena pro živého asistenta KONARA, který může odpovídat na dotazy, kvalifikovat leady a pomáhat s rezervacemi.',
    help: 'Získat pomoc',
  },

  footer: {
    tagline: 'AI řešení pro moderní firmy.',
    vision: 'KONARA OS',
    founded: 'Založeno v roce 2026',
  },
};

const SK: CopyPack = {
  nav: ['Domov', 'Riešenia', 'Služby', 'O nás', 'Kontakt', 'Rezervovať demo'],

  common: {
    book: 'Rezervovať demo',
    explore: 'Preskúmať riešenia',
    region: 'Región',
    language: 'Jazyk',
    otherLanguage: 'Vybrať iný jazyk',
    keepRegion: 'Ponechať tento región',
    required: 'Vyplňte všetky povinné polia.',
    invalidEmail: 'Zadajte platnú e-mailovú adresu.',
    wrongPassword: 'Nesprávne heslo.',
    locked: 'Príliš veľa pokusov. Skúste to neskôr.',
    granted: 'Prístup povolený.',
  },

  coming: {
    eyebrow: 'BUDÚCNOSŤ AUTOMATIZÁCIE PODNIKANIA',
    hero: 'Prichádza niečo|inteligentné.',
    text: 'KONARA buduje inteligentnú vrstvu medzi komunikáciou so zákazníkmi a obchodnými krokmi — rýchlejšie odpovede, jasnejšie procesy a systémy navrhnuté na spoluprácu.',
    building: 'BUDUJEME ĎALŠIU GENERÁCIU AUTOMATIZÁCIE PODNIKANIA',
    founderAccess: 'Prístup zakladateľa',
    founderTitle: 'Prístup zakladateľa',
    founderText:
      'Zadajte heslo zakladateľa a pokračujte na súkromnú stránku KONARA.',
    password: 'Heslo zakladateľa',
    enter: 'Otvoriť náhľad',
  },

  home: {
    eyebrow: 'AI AUTOMATIZÁCIA PRE MODERNÉ FIRMY',
    hero: 'AI riešenia|ktoré pracujú pre vás.',
    text: 'KONARA vytvára inteligentné systémy, ktoré firmám pomáhajú reagovať rýchlejšie, zachytiť viac príležitostí a automatizovať opakovanú prácu.',
    challengeTitle:
      'Vaša firma by nemala prichádzať o príležitosti kvôli opakovanej práci.',
    challenges: [
      'Zmeškané dopyty|Zákazníci by nemali čakať na odpoveď.',
      'Ručná administratíva|Opakované úlohy oberajú ľudí o čas na hodnotnejšiu prácu.',
      'Pomalé odpovede|Moderní zákazníci očakávajú rýchlu a konzistentnú komunikáciu.',
      'Nespojené procesy|Dôležité informácie by mali firmou prechádzať plynulo.',
    ],
    solutionTitle: 'Automatizácia postavená na výsledkoch.',
    solutions: [
      'AI recepčný|Odpovedá na otázky, rozpoznáva zámer a sprevádza dopyty 24/7.',
      'Inteligentné rezervácie|Menia záujem na potvrdené stretnutia.',
      'Zákaznícka podpora|Rýchlo rieši bežné požiadavky a podľa potreby ich odovzdá človeku.',
    ],
    howTitle: 'Od rozhovoru k akcii.',
    steps: [
      'Spojiť|Zákazník kontaktuje vašu firmu.',
      'Porozumieť|KONARA rozumie otázke, zámeru a kontextu.',
      'Automatizovať|Spustí sa správny workflow, lead alebo rezervácia.',
      'Doručiť|Zákazník dostane rýchlu pomoc a tím štruktúrované informácie.',
    ],
    liveTitle: 'Vaša firma. Dostupná 24/7.',
    liveText:
      'Ponúknite zákazníkom inteligentný prvý kontaktný bod pre otázky, leady, rezervácie a podporu.',
    osTitle: 'Jeden inteligentný systém pre vašu firmu.',
    osText:
      'KONARA OS je naša dlhodobá vízia spojenia komunikácie, CRM, rezervácií, workflow a analytiky.',
    ctaTitle: 'Pripravení automatizovať inteligentnejšie?',
    ctaText:
      'Zistite, ako KONARA môže šetriť čas, zlepšiť komunikáciu so zákazníkmi a vytvoriť lepší digitálny zážitok.',
  },

  solutions: {
    eyebrow: 'RIEŠENIA KONARA',
    hero: 'AI vytvorená pre|skutočný biznis.',
    text: 'Inteligentné riešenia pre automatizáciu komunikácie, workflow a každodenných procesov.',
    products: [
      'AI recepčný|Komunikácia so zákazníkmi dostupná kedykoľvek.',
      'Inteligentné rezervácie|Menia rozhovory na potvrdené termíny.',
      'Zákaznícka podpora|Rýchle odpovede s premysleným odovzdaním človeku.',
      'AI predaj|Zachytáva príležitosti, kým je záujem zákazníka vysoký.',
      'CRM a automatizácia|Udržiava tok informácií medzi rozhovormi, systémami a tímami.',
      'Analytika a reporty|Mení aktivitu na jasnejšie obchodné informácie.',
    ],
    togetherTitle:
      'Jedna inteligentná vrstva namiesto šiestich oddelených nástrojov.',
    customTitle: 'Nie každá firma potrebuje rovnakú automatizáciu.',
    customText:
      'KONARA začína problémom, cestou zákazníka a existujúcimi systémami a následne vytvorí správny workflow.',
  },

  services: {
    eyebrow: 'SLUŽBY KONARA',
    hero: 'Automatizácia postavená okolo|vašej firmy.',
    text: 'Každá implementácia začína obchodným problémom, cestou zákazníka a výsledkom, ktorý treba zlepšiť.',
    cards: [
      'AI recepčný|Komunikácia prispôsobená znalostiam, tónu a pravidlám odovzdania vašej firmy.',
      'Automatizácia leadov|Zachytáva, kvalifikuje a smeruje príležitosti s menšou administratívou.',
      'Inteligentné rezervácie|Vedú zákazníka od dopytu k potvrdenému termínu.',
      'Zákaznícka podpora|Rýchlo vybavuje bežné požiadavky s možnosťou ľudskej eskalácie.',
      'Firemné integrácie|Prepája AI workflow so systémami, ktoré už používate.',
      'Analytika|Mení zákaznícku a prevádzkovú aktivitu na jasnejšie informácie.',
    ],
    processTitle: 'Jasná cesta od problému k fungujúcemu systému.',
    process: [
      'Objaviť|Pochopiť firmu a príležitosť na automatizáciu.',
      'Navrhnúť|Zmapovať skúsenosť, logiku, informácie a odovzdania.',
      'Vybudovať|Vytvoriť AI workflow okolo reálneho procesu.',
      'Testovať|Overiť rozhovory, okrajové prípady a obchodné pravidlá.',
      'Spustiť|Nasadiť riešenie kontrolovane a s jasnou zodpovednosťou.',
      'Zlepšovať|Optimalizovať podľa skutočného používania a spätnej väzby.',
    ],
    existingTitle: 'Ponechajte si nástroje, ktoré už fungujú.',
    existingText:
      'KONARA sa prispôsobuje systémom, ľuďom a procesom, ktorým vaša firma už dôveruje.',
    afterTitle: 'Spustenie je začiatok, nie koniec.',
    afterText:
      'Skutočné používanie odhaľuje nové otázky, výnimky a ďalšie možnosti zlepšenia.',
  },

  about: {
    eyebrow: 'O KONARA',
    hero: 'Budujeme inteligentnejšie spôsoby|podnikania.',
    text: 'KONARA sa zameriava na praktickú umelú inteligenciu, ktorá zlepšuje komunikáciu, znižuje opakovanú prácu a pomáha firmám fungovať efektívnejšie.',
    whyTitle: 'Technológia by mala prácu odstraňovať, nie vytvárať ďalšiu.',
    whyText:
      'KONARA bola založená v roku 2026 s myšlienkou, že AI má nenápadne prepájať komunikáciu, rozhodovanie a akciu — užitočná automatizácia dnes a KONARA OS zajtra.',
    principlesTitle: 'Budovať užitočne. Zostať jasní. Získavať dôveru.',
    principles: [
      'Inovácia|Používať nové technológie tam, kde vytvárajú skutočnú hodnotu.',
      'Jednoduchosť|Zložité systémy by mali používateľom pripadať jednoduché.',
      'Dôvera|Automatizácia musí ponechať kontrolu firmám a zákazníkom.',
      'Excelentnosť|Každý detail prispieva ku kvalite skúsenosti.',
      'Úspech zákazníka|Technológia má význam, keď firma dosahuje lepšie výsledky.',
    ],
    timeline: [
      'Základ|Cielené AI workflow a automatizácia zákazníkov.',
      'Prepojená inteligencia|Viac systémov pracuje spolu ako jeden celok.',
      'KONARA OS|Jednotná inteligentná prevádzková vrstva pre moderné firmy.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKT KONARA',
    hero: 'Začnite|obchodným problémom.',
    text: 'Povedzte nám, čo chcete zlepšiť, a zistíme, či AI workflow môže proces zrýchliť, sprehľadniť alebo zjednodušiť.',
    directTitle: 'Porozprávajte sa s KONARA.',
    directText:
      'Pre obchodnú diskusiu je najlepším začiatkom prispôsobená ukážka.',
    name: 'Celé meno',
    email: 'Firemný e-mail',
    business: 'Firma',
    message: 'Správa',
    send: 'Odoslať správu',
  },

  demo: {
    eyebrow: 'REZERVOVAŤ DEMO',
    hero: 'Zistite, čo môže KONARA urobiť|pre vašu firmu.',
    text: 'Povedzte nám o svojej firme a workflow, ktorý chcete zlepšiť, a vyberte si čas demonstrácie.',
    phone: 'Telefón',
    industry: 'Odvetvie',
    improve: 'Čo chcete automatizovať alebo zlepšiť?',
    request: 'Požiadať o demo',
    chooseTime: 'Vyberte čas ukážky.',
  },

  assistant: {
    welcome: 'VITAJTE V KONARA',
    title: 'Navrhnuté tak, aby podnikanie pôsobilo inteligentne.',
    text: 'KONARA vznikla v roku 2026, aby vytvárala praktické AI systémy, ktoré firmám pomáhajú reagovať rýchlejšie, zachytiť viac príležitostí a znižovať opakovanú prácu.',
    continue: 'Pokračovať',
    menuTitle: 'Preskúmajte KONARA podľa seba.',
    explore: 'Preskúmať riešenia',
    demo: 'Rezervovať demo',
    ask: 'Opýtať sa KONARA',
    voiceTitle: 'Tu sa pripája Voiceflow.',
    voiceText:
      'Táto časť je pripravená pre živého asistenta KONARA, ktorý môže odpovedať na otázky, kvalifikovať leady a pomáhať s rezerváciami.',
    help: 'Získať pomoc',
  },

  footer: {
    tagline: 'AI riešenia pre moderné firmy.',
    vision: 'KONARA OS',
    founded: 'Založené v roku 2026',
  },
};

const HU: CopyPack = {
  nav: [
    'Főoldal',
    'Megoldások',
    'Szolgáltatások',
    'Rólunk',
    'Kapcsolat',
    'Demó foglalása',
  ],

  common: {
    book: 'Demó foglalása',
    explore: 'Megoldások megtekintése',
    region: 'Régió',
    language: 'Nyelv',
    otherLanguage: 'Másik nyelv választása',
    keepRegion: 'Régió megtartása',
    required: 'Töltse ki az összes kötelező mezőt.',
    invalidEmail: 'Adjon meg érvényes e-mail-címet.',
    wrongPassword: 'Helytelen jelszó.',
    locked: 'Túl sok próbálkozás. Próbálja újra később.',
    granted: 'Hozzáférés engedélyezve.',
  },

  coming: {
    eyebrow: 'AZ ÜZLETI AUTOMATIZÁLÁS JÖVŐJE',
    hero: 'Valami intelligens|érkezik.',
    text: 'A KONARA intelligens réteget épít az ügyfélbeszélgetések és az üzleti műveletek közé — gyorsabb válaszokkal, tisztább folyamatokkal és együttműködő rendszerekkel.',
    building: 'AZ ÜZLETI AUTOMATIZÁLÁS KÖVETKEZŐ GENERÁCIÓJÁT ÉPÍTJÜK',
    founderAccess: 'Alapítói hozzáférés',
    founderTitle: 'Alapítói hozzáférés',
    founderText:
      'Adja meg az alapítói jelszót a KONARA privát webhelyének megnyitásához.',
    password: 'Alapítói jelszó',
    enter: 'Előnézet megnyitása',
  },

  home: {
    eyebrow: 'AI AUTOMATIZÁLÁS MODERN VÁLLALKOZÁSOKNAK',
    hero: 'AI-megoldások|amelyek Önért dolgoznak.',
    text: 'A KONARA intelligens rendszereket épít, amelyek segítenek a vállalkozásoknak gyorsabban reagálni, több lehetőséget megragadni és automatizálni az ismétlődő munkát.',
    challengeTitle:
      'Vállalkozása ne veszítsen lehetőségeket az ismétlődő munka miatt.',
    challenges: [
      'Elveszett megkeresések|Az ügyfeleknek nem kellene válaszra várniuk.',
      'Kézi adminisztráció|Az ismétlődő feladatok időt vesznek el az értékesebb munkától.',
      'Lassú válaszidő|A modern ügyfelek gyors és következetes kommunikációt várnak.',
      'Széttagolt folyamatok|A fontos információknak zökkenőmentesen kell mozogniuk a vállalkozásban.',
    ],
    solutionTitle: 'Eredmények köré épített automatizálás.',
    solutions: [
      'AI recepciós|Kérdésekre válaszol, felismeri a szándékot és 24/7 kezeli a megkereséseket.',
      'Intelligens foglalás|Az érdeklődést visszaigazolt időpontokká alakítja.',
      'Ügyfélszolgálat|Gyorsan megoldja a gyakori kérdéseket, és szükség esetén embernek adja át őket.',
    ],
    howTitle: 'A beszélgetéstől a cselekvésig.',
    steps: [
      'Kapcsolódás|Az ügyfél kapcsolatba lép a vállalkozással.',
      'Megértés|A KONARA megérti a kérdést, szándékot és kontextust.',
      'Automatizálás|Elindul a megfelelő workflow, lead vagy foglalási folyamat.',
      'Teljesítés|Az ügyfél gyors segítséget, a csapat pedig strukturált információt kap.',
    ],
    liveTitle: 'Vállalkozása. Elérhető 24/7.',
    liveText:
      'Adjon ügyfeleinek intelligens első kapcsolódási pontot kérdésekhez, leadekhez, foglalásokhoz és támogatáshoz.',
    osTitle: 'Egy intelligens rendszer vállalkozásának.',
    osText:
      'A KONARA OS hosszú távú víziónk a kommunikáció, CRM, foglalások, workflow-k és analitika egyesítésére.',
    ctaTitle: 'Készen áll az intelligensebb automatizálásra?',
    ctaText:
      'Fedezze fel, hogyan takaríthat meg időt a KONARA, javíthatja az ügyfélkommunikációt és teremthet jobb digitális élményt.',
  },

  solutions: {
    eyebrow: 'KONARA MEGOLDÁSOK',
    hero: 'AI valódi|vállalkozásoknak.',
    text: 'Intelligens megoldások a kommunikáció, workflow-k és mindennapi működés automatizálására.',
    products: [
      'AI recepciós|Mindig elérhető ügyfélkommunikáció.',
      'Intelligens foglalás|A beszélgetéseket visszaigazolt időpontokká alakítja.',
      'Ügyfélszolgálat|Gyors válaszok átgondolt emberi átadással.',
      'AI értékesítés|Megragadja a lehetőségeket, amikor az ügyfél érdeklődése magas.',
      'CRM és automatizálás|Mozgásban tartja az információt a beszélgetések, rendszerek és csapatok között.',
      'Analitika és riportok|Az aktivitást átláthatóbb üzleti információvá alakítja.',
    ],
    togetherTitle: 'Egy intelligens réteg hat különálló eszköz helyett.',
    customTitle:
      'Nem minden vállalkozásnak ugyanarra az automatizálásra van szüksége.',
    customText:
      'A KONARA a problémából, az ügyfélútból és a meglévő rendszerekből indul ki, majd ezek köré építi a megfelelő workflow-t.',
  },

  services: {
    eyebrow: 'KONARA SZOLGÁLTATÁSOK',
    hero: 'Automatizálás az Ön|vállalkozása köré építve.',
    text: 'Minden bevezetés az üzleti problémával, az ügyfélúttal és a javítandó eredménnyel kezdődik.',
    cards: [
      'AI recepciós|Az Ön tudásához, hangneméhez és átadási szabályaihoz igazított ügyfélkommunikáció.',
      'Lead automatizálás|Kevesebb adminisztrációval rögzíti, minősíti és irányítja a lehetőségeket.',
      'Intelligens foglalás|Az érdeklődőt a megkereséstől a visszaigazolt időpontig vezeti.',
      'Ügyfélszolgálat|Gyorsan kezeli a gyakori kéréseket emberi eszkaláció lehetőségével.',
      'Üzleti integrációk|Összeköti az AI workflow-kat a már használt rendszerekkel.',
      'Analitika|Az ügyfél- és működési aktivitást átláthatóbb információvá alakítja.',
    ],
    processTitle: 'Világos út a problémától a működő rendszerig.',
    process: [
      'Felfedezés|A vállalkozás és az automatizálási lehetőség megértése.',
      'Tervezés|Az élmény, logika, információ és átadások feltérképezése.',
      'Építés|Az AI workflow létrehozása a valós folyamat köré.',
      'Tesztelés|Beszélgetések, kivételes esetek és üzleti szabályok ellenőrzése.',
      'Indítás|Kontrollált bevezetés egyértelmű felelősséggel.',
      'Fejlesztés|Optimalizálás valós használat és visszajelzés alapján.',
    ],
    existingTitle: 'Tartsa meg a már jól működő eszközöket.',
    existingText:
      'A KONARA a vállalkozás által már használt és megbízhatónak tartott rendszerekhez, emberekhez és folyamatokhoz illeszkedik.',
    afterTitle: 'Az indulás a kezdet, nem a vég.',
    afterText:
      'A valós használat új kérdéseket, kivételeket és további fejlesztési lehetőségeket tár fel.',
  },

  about: {
    eyebrow: 'A KONARA-RÓL',
    hero: 'Intelligensebb módokat építünk|az üzlet működtetésére.',
    text: 'A KONARA gyakorlati mesterséges intelligenciára összpontosít, amely javítja a kommunikációt, csökkenti az ismétlődő munkát és hatékonyabbá teszi a vállalkozásokat.',
    whyTitle:
      'A technológiának munkát kell levennie a válláról, nem többet teremtenie.',
    whyText:
      'A KONARA 2026-ban azzal az elképzeléssel indult, hogy az AI csendben összekösse a kommunikációt, döntéseket és cselekvést — hasznos automatizálás ma, KONARA OS holnap.',
    principlesTitle:
      'Építsünk hasznosat. Maradjunk egyszerűek. Érdemeljünk bizalmat.',
    principles: [
      'Innováció|Új technológiát ott használunk, ahol valódi értéket teremt.',
      'Egyszerűség|Az összetett rendszereknek egyszerűnek kell érződniük a felhasználók számára.',
      'Bizalom|Az automatizálásnak meg kell őriznie a vállalkozások és ügyfelek kontrollját.',
      'Kiválóság|Minden részlet hozzájárul az élmény minőségéhez.',
      'Ügyfélsiker|A technológia akkor számít, ha jobb üzleti eredményt hoz.',
    ],
    timeline: [
      'Alapok|Célzott AI workflow-k és ügyfélautomatizálás.',
      'Kapcsolt intelligencia|Több rendszer működik együtt egyetlen egységként.',
      'KONARA OS|Egységes intelligens működési réteg modern vállalkozások számára.',
    ],
  },

  contact: {
    eyebrow: 'KAPCSOLAT A KONARA-VAL',
    hero: 'Kezdje az|üzleti problémával.',
    text: 'Mondja el, mit szeretne javítani, és megvizsgáljuk, hogy egy AI workflow gyorsabbá, átláthatóbbá vagy egyszerűbbé teheti-e a folyamatot.',
    directTitle: 'Beszéljen a KONARA-val.',
    directText:
      'Üzleti egyeztetéshez a személyre szabott bemutató a legjobb kiindulópont.',
    name: 'Teljes név',
    email: 'Üzleti e-mail',
    business: 'Vállalkozás',
    message: 'Üzenet',
    send: 'Üzenet küldése',
  },

  demo: {
    eyebrow: 'DEMÓ FOGLALÁSA',
    hero: 'Nézze meg, mire képes a KONARA|vállalkozása számára.',
    text: 'Meséljen vállalkozásáról és a javítani kívánt workflow-ról, majd válasszon időpontot a bemutatóra.',
    phone: 'Telefon',
    industry: 'Iparág',
    improve: 'Mit szeretne automatizálni vagy javítani?',
    request: 'Demó kérése',
    chooseTime: 'Válasszon időpontot a bemutatóra.',
  },

  assistant: {
    welcome: 'ÜDVÖZÖLJÜK A KONARA-NÁL',
    title: 'Azért épült, hogy az üzlet intelligensebben működjön.',
    text: 'A KONARA 2026-ban indult, hogy gyakorlati AI rendszereket építsen, amelyek gyorsabb reakciót, több lehetőséget és kevesebb ismétlődő munkát tesznek lehetővé.',
    continue: 'Tovább',
    menuTitle: 'Fedezze fel a KONARA-t a saját módján.',
    explore: 'Megoldások megtekintése',
    demo: 'Demó foglalása',
    ask: 'Kérdezze a KONARA-t',
    voiceTitle: 'Itt kapcsolódik a Voiceflow.',
    voiceText:
      'Ez a terület készen áll egy élő KONARA asszisztensre, amely kérdésekre válaszolhat, leadeket minősíthet és foglalásokat irányíthat.',
    help: 'Segítség kérése',
  },

  footer: {
    tagline: 'AI-megoldások modern vállalkozásoknak.',
    vision: 'KONARA OS',
    founded: 'Alapítva 2026-ban',
  },
};

const RO: CopyPack = {
  nav: [
    'Acasă',
    'Soluții',
    'Servicii',
    'Despre',
    'Contact',
    'Programează un demo',
  ],

  common: {
    book: 'Programează un demo',
    explore: 'Explorează soluțiile',
    region: 'Regiune',
    language: 'Limbă',
    otherLanguage: 'Alege altă limbă',
    keepRegion: 'Păstrează această regiune',
    required: 'Completează toate câmpurile obligatorii.',
    invalidEmail: 'Introdu o adresă de e-mail validă.',
    wrongPassword: 'Parolă incorectă.',
    locked: 'Prea multe încercări. Încearcă din nou mai târziu.',
    granted: 'Acces acordat.',
  },

  coming: {
    eyebrow: 'VIITORUL AUTOMATIZĂRII ÎN AFACERI',
    hero: 'Ceva inteligent|urmează să apară.',
    text: 'KONARA construiește stratul inteligent dintre conversațiile cu clienții și acțiunile de business — răspunsuri mai rapide, fluxuri mai clare și sisteme create să lucreze împreună.',
    building: 'CONSTRUIM URMĂTOAREA GENERAȚIE DE AUTOMATIZARE ÎN AFACERI',
    founderAccess: 'Acces fondator',
    founderTitle: 'Acces fondator',
    founderText:
      'Introdu parola fondatorului pentru a continua către site-ul privat KONARA.',
    password: 'Parola fondatorului',
    enter: 'Deschide previzualizarea',
  },

  home: {
    eyebrow: 'AUTOMATIZARE AI PENTRU AFACERI MODERNE',
    hero: 'Soluții AI|care lucrează pentru tine.',
    text: 'KONARA construiește sisteme inteligente care ajută companiile să răspundă mai rapid, să capteze mai multe oportunități și să automatizeze munca repetitivă.',
    challengeTitle:
      'Compania ta nu ar trebui să piardă oportunități din cauza muncii repetitive.',
    challenges: [
      'Solicitări pierdute|Clienții nu ar trebui să aștepte răspunsuri.',
      'Administrare manuală|Sarcinile repetitive consumă timpul pentru activități mai valoroase.',
      'Răspunsuri lente|Clienții moderni așteaptă comunicare rapidă și consecventă.',
      'Fluxuri de lucru separate|Informațiile importante trebuie să circule ușor prin companie.',
    ],
    solutionTitle: 'Automatizare construită în jurul rezultatelor.',
    solutions: [
      'Recepționer AI|Răspunde la întrebări, înțelege intenția și gestionează solicitări 24/7.',
      'Programări inteligente|Transformă interesul în întâlniri confirmate.',
      'Suport clienți|Rezolvă rapid cererile obișnuite cu transfer uman când este necesar.',
    ],
    howTitle: 'De la conversație la acțiune.',
    steps: [
      'Conectare|Un client interacționează cu afacerea ta.',
      'Înțelegere|KONARA înțelege întrebarea, intenția și contextul.',
      'Automatizare|Este pornit fluxul, leadul sau procesul de programare potrivit.',
      'Livrare|Clientul primește servicii rapide, iar echipa informații structurate.',
    ],
    liveTitle: 'Afacerea ta. Disponibilă 24/7.',
    liveText:
      'Oferă clienților un prim punct de contact inteligent pentru întrebări, leaduri, programări și suport.',
    osTitle: 'Un singur sistem inteligent pentru afacerea ta.',
    osText:
      'KONARA OS este viziunea noastră pe termen lung pentru unirea comunicării, CRM-ului, programărilor, fluxurilor și analizelor.',
    ctaTitle: 'Pregătit pentru o automatizare mai inteligentă?',
    ctaText:
      'Descoperă cum KONARA poate economisi timp, îmbunătăți comunicarea cu clienții și crea o experiență digitală mai bună.',
  },

  solutions: {
    eyebrow: 'SOLUȚII KONARA',
    hero: 'AI construit pentru|afaceri reale.',
    text: 'Soluții inteligente pentru automatizarea comunicării, proceselor și operațiunilor zilnice.',
    products: [
      'Recepționer AI|Comunicare cu clienții disponibilă oricând.',
      'Programări inteligente|Transformă conversațiile în întâlniri confirmate.',
      'Suport clienți|Răspunsuri rapide cu transfer uman bine gândit.',
      'Vânzări AI|Captează oportunitățile când interesul clientului este ridicat.',
      'CRM și automatizare|Menține informația în mișcare între conversații, sisteme și echipe.',
      'Analiză și raportare|Transformă activitatea în informații de business mai clare.',
    ],
    togetherTitle: 'Un singur strat inteligent, nu șase instrumente separate.',
    customTitle: 'Nu toate companiile au nevoie de aceeași automatizare.',
    customText:
      'KONARA începe cu problema, parcursul clientului și sistemele existente, apoi construiește fluxul potrivit.',
  },

  services: {
    eyebrow: 'SERVICII KONARA',
    hero: 'Automatizare construită în jurul|afacerii tale.',
    text: 'Fiecare implementare începe cu problema de business, parcursul clientului și rezultatul care trebuie îmbunătățit.',
    cards: [
      'Recepționer AI|Comunicare adaptată informațiilor, tonului și regulilor de transfer ale afacerii.',
      'Automatizare leaduri|Captează, califică și distribuie oportunități cu mai puțină administrare.',
      'Programări inteligente|Ghidează clientul de la întrebare la programare confirmată.',
      'Suport clienți|Rezolvă rapid solicitările comune și păstrează escaladarea umană disponibilă.',
      'Integrări business|Conectează fluxurile AI cu sistemele deja utilizate.',
      'Analiză|Transformă activitatea clienților și operațiunilor în informații mai clare.',
    ],
    processTitle: 'Un traseu clar de la problemă la sistemul funcțional.',
    process: [
      'Descoperă|Înțelege afacerea și oportunitatea de automatizare.',
      'Proiectează|Mapează experiența, logica, informațiile și transferurile.',
      'Construiește|Creează fluxul AI în jurul procesului real.',
      'Testează|Verifică conversații, cazuri limită și reguli de business.',
      'Lansează|Implementează controlat, cu responsabilități clare.',
      'Îmbunătățește|Optimizează folosind utilizarea reală și feedbackul.',
    ],
    existingTitle: 'Păstrează instrumentele care deja funcționează.',
    existingText:
      'KONARA se adaptează sistemelor, oamenilor și proceselor în care compania ta deja are încredere.',
    afterTitle: 'Lansarea este începutul, nu finalul.',
    afterText:
      'Utilizarea reală dezvăluie întrebări noi, excepții și oportunități mai bune de îmbunătățire.',
  },

  about: {
    eyebrow: 'DESPRE KONARA',
    hero: 'Construim moduri mai inteligente|de a face afaceri.',
    text: 'KONARA se concentrează pe inteligență artificială practică, ce îmbunătățește comunicarea, reduce munca repetitivă și ajută companiile să funcționeze mai eficient.',
    whyTitle: 'Tehnologia ar trebui să elimine muncă, nu să creeze mai multă.',
    whyText:
      'KONARA a fost fondată în 2026 cu ideea că AI trebuie să conecteze discret comunicarea, deciziile și acțiunea — automatizare utilă astăzi și KONARA OS mâine.',
    principlesTitle: 'Construim util. Rămânem clari. Câștigăm încredere.',
    principles: [
      'Inovație|Folosim tehnologii noi acolo unde creează valoare reală.',
      'Simplitate|Sistemele complexe trebuie să pară simple pentru utilizatori.',
      'Încredere|Automatizarea trebuie să păstreze controlul la companii și clienți.',
      'Excelență|Fiecare detaliu contribuie la calitatea experienței.',
      'Succesul clientului|Tehnologia contează atunci când afacerea obține rezultate mai bune.',
    ],
    timeline: [
      'Fundație|Fluxuri AI concentrate și automatizare pentru clienți.',
      'Inteligență conectată|Mai multe sisteme lucrând împreună ca unul singur.',
      'KONARA OS|Un strat operațional inteligent și unificat pentru afaceri moderne.',
    ],
  },

  contact: {
    eyebrow: 'CONTACT KONARA',
    hero: 'Începe cu|problema de business.',
    text: 'Spune-ne ce vrei să îmbunătățești și putem analiza dacă un flux AI poate face procesul mai rapid, mai clar sau mai ușor de gestionat.',
    directTitle: 'Vorbește cu KONARA.',
    directText:
      'Pentru o conversație de business, o demonstrație personalizată este cel mai bun punct de plecare.',
    name: 'Nume complet',
    email: 'E-mail de business',
    business: 'Companie',
    message: 'Mesaj',
    send: 'Trimite mesajul',
  },

  demo: {
    eyebrow: 'PROGRAMEAZĂ UN DEMO',
    hero: 'Vezi ce poate face KONARA|pentru afacerea ta.',
    text: 'Spune-ne despre afacerea ta și fluxul pe care vrei să îl îmbunătățești, apoi alege o oră pentru demonstrație.',
    phone: 'Telefon',
    industry: 'Industrie',
    improve: 'Ce ai dori să automatizezi sau să îmbunătățești?',
    request: 'Solicită un demo',
    chooseTime: 'Alege ora demonstrației.',
  },

  assistant: {
    welcome: 'BINE AI VENIT LA KONARA',
    title: 'Creat pentru a face afacerile să funcționeze inteligent.',
    text: 'KONARA a fost fondată în 2026 pentru a construi sisteme AI practice care ajută companiile să răspundă mai repede, să capteze mai multe oportunități și să reducă munca repetitivă.',
    continue: 'Continuă',
    menuTitle: 'Explorează KONARA în stilul tău.',
    explore: 'Explorează soluțiile',
    demo: 'Programează un demo',
    ask: 'Întreabă KONARA',
    voiceTitle: 'Voiceflow se conectează aici.',
    voiceText:
      'Această zonă este pregătită pentru un asistent KONARA live care poate răspunde la solicitări, califica leaduri și ghida programările.',
    help: 'Obține ajutor',
  },

  footer: {
    tagline: 'Soluții AI pentru afaceri moderne.',
    vision: 'KONARA OS',
    founded: 'Fondată în 2026',
  },
};

const BG: CopyPack = {
  nav: ['Начало', 'Решения', 'Услуги', 'За нас', 'Контакт', 'Резервирай демо'],

  common: {
    book: 'Резервирай демо',
    explore: 'Разгледай решенията',
    region: 'Регион',
    language: 'Език',
    otherLanguage: 'Избери друг език',
    keepRegion: 'Запази този регион',
    required: 'Моля, попълнете всички задължителни полета.',
    invalidEmail: 'Моля, въведете валиден имейл адрес.',
    wrongPassword: 'Грешна парола.',
    locked: 'Твърде много опити. Опитайте отново по-късно.',
    granted: 'Достъпът е разрешен.',
  },

  coming: {
    eyebrow: 'БЪДЕЩЕТО НА БИЗНЕС АВТОМАТИЗАЦИЯТА',
    hero: 'Нещо интелигентно|идва.',
    text: 'KONARA изгражда интелигентния слой между разговорите с клиенти и бизнес действията — по-бързи отговори, по-ясни процеси и системи, създадени да работят заедно.',
    building: 'ИЗГРАЖДАМЕ СЛЕДВАЩОТО ПОКОЛЕНИЕ БИЗНЕС АВТОМАТИЗАЦИЯ',
    founderAccess: 'Достъп за основател',
    founderTitle: 'Достъп за основател',
    founderText:
      'Въведете паролата на основателя, за да продължите към частния сайт на KONARA.',
    password: 'Парола на основателя',
    enter: 'Отвори преглед',
  },

  home: {
    eyebrow: 'AI АВТОМАТИЗАЦИЯ ЗА МОДЕРНИ БИЗНЕСИ',
    hero: 'AI решения|които работят за вас.',
    text: 'KONARA създава интелигентни системи, които помагат на компаниите да отговарят по-бързо, да улавят повече възможности и да автоматизират повтарящата се работа.',
    challengeTitle:
      'Вашият бизнес не трябва да губи възможности заради повтаряща се работа.',
    challenges: [
      'Пропуснати запитвания|Клиентите не трябва да чакат за отговор.',
      'Ръчна администрация|Повтарящите се задачи отнемат време от по-ценната работа.',
      'Бавни отговори|Съвременните клиенти очакват бърза и последователна комуникация.',
      'Несвързани процеси|Важната информация трябва да се движи свободно през бизнеса.',
    ],
    solutionTitle: 'Автоматизация, изградена около резултатите.',
    solutions: [
      'AI рецепционист|Отговаря на въпроси, разбира намеренията и управлява запитвания 24/7.',
      'Интелигентно резервиране|Превръща интереса в потвърдени срещи.',
      'Поддръжка на клиенти|Решава бързо стандартни заявки и ги предава на човек при нужда.',
    ],
    howTitle: 'От разговор към действие.',
    steps: [
      'Свързване|Клиент се свързва с вашия бизнес.',
      'Разбиране|KONARA разбира въпроса, намерението и контекста.',
      'Автоматизация|Активира се правилният workflow, lead или процес за резервация.',
      'Резултат|Клиентът получава бързо обслужване, а екипът — структурирана информация.',
    ],
    liveTitle: 'Вашият бизнес. Достъпен 24/7.',
    liveText:
      'Осигурете интелигентна първа точка за контакт за въпроси, lead-ове, резервации и поддръжка.',
    osTitle: 'Една интелигентна система за вашия бизнес.',
    osText:
      'KONARA OS е нашата дългосрочна визия за обединяване на комуникация, CRM, резервации, workflow и анализи.',
    ctaTitle: 'Готови ли сте за по-умна автоматизация?',
    ctaText:
      'Вижте как KONARA може да спести време, да подобри комуникацията с клиентите и да създаде по-добро дигитално изживяване.',
  },

  solutions: {
    eyebrow: 'РЕШЕНИЯ KONARA',
    hero: 'AI, създаден за|реален бизнес.',
    text: 'Интелигентни решения за автоматизиране на комуникация, процеси и ежедневна работа.',
    products: [
      'AI рецепционист|Комуникация с клиенти, достъпна по всяко време.',
      'Интелигентни резервации|Превръща разговорите в потвърдени срещи.',
      'Поддръжка на клиенти|Бързи отговори с обмислено човешко предаване.',
      'AI продажби|Улавя възможности, докато интересът на клиента е висок.',
      'CRM и автоматизация|Поддържа движението на информация между разговори, системи и екипи.',
      'Анализи и отчети|Превръща активността в по-ясна бизнес информация.',
    ],
    togetherTitle: 'Един интелигентен слой вместо шест несвързани инструмента.',
    customTitle: 'Не всеки бизнес се нуждае от една и съща автоматизация.',
    customText:
      'KONARA започва от проблема, пътя на клиента и съществуващите системи и изгражда правилния workflow.',
  },

  services: {
    eyebrow: 'УСЛУГИ KONARA',
    hero: 'Автоматизация, изградена около|вашия бизнес.',
    text: 'Всяко внедряване започва с бизнес проблема, пътя на клиента и резултата, който трябва да бъде подобрен.',
    cards: [
      'AI рецепционист|Комуникация, съобразена със знанията, тона и правилата на вашия бизнес.',
      'Автоматизация на lead-ове|Улавя, квалифицира и насочва възможности с по-малко администрация.',
      'Интелигентни резервации|Води клиента от запитване до потвърдена среща.',
      'Поддръжка на клиенти|Обработва стандартни заявки бързо с възможност за човешка ескалация.',
      'Бизнес интеграции|Свързва AI workflow със системите, които вече използвате.',
      'Анализи|Превръща клиентската и оперативната активност в по-ясна информация.',
    ],
    processTitle: 'Ясен път от проблема до работещата система.',
    process: [
      'Откриване|Разбиране на бизнеса и възможността за автоматизация.',
      'Дизайн|Картиране на изживяването, логиката, информацията и предаването.',
      'Изграждане|Създаване на AI workflow около реалния процес.',
      'Тестване|Проверка на разговори, гранични случаи и бизнес правила.',
      'Стартиране|Контролирано внедряване с ясна отговорност.',
      'Подобряване|Оптимизация на база реална употреба и обратна връзка.',
    ],
    existingTitle: 'Запазете инструментите, които вече работят.',
    existingText:
      'KONARA се вписва в системите, хората и процесите, на които вашият бизнес вече разчита.',
    afterTitle: 'Стартирането е началото, не краят.',
    afterText:
      'Реалната употреба разкрива нови въпроси, изключения и възможности за подобрение.',
  },

  about: {
    eyebrow: 'ЗА KONARA',
    hero: 'Изграждаме по-интелигентни начини|за правене на бизнес.',
    text: 'KONARA се фокусира върху практичен изкуствен интелект, който подобрява комуникацията, намалява повтарящата се работа и помага на компаниите да работят по-ефективно.',
    whyTitle: 'Технологията трябва да премахва работа, а не да създава още.',
    whyText:
      'KONARA е основана през 2026 г. с идеята, че AI трябва тихо да свързва комуникацията, решенията и действията — полезна автоматизация днес и KONARA OS утре.',
    principlesTitle: 'Създавай полезно. Бъди ясен. Печели доверие.',
    principles: [
      'Иновация|Използвайте нови технологии там, където създават реална стойност.',
      'Простота|Сложните системи трябва да изглеждат лесни за хората, които ги използват.',
      'Доверие|Автоматизацията трябва да оставя контрола у бизнеса и клиентите.',
      'Съвършенство|Всеки детайл допринася за качеството на изживяването.',
      'Успех на клиента|Технологията има значение, когато бизнесът получава по-добър резултат.',
    ],
    timeline: [
      'Основа|Фокусирани AI workflow и автоматизация на клиентското обслужване.',
      'Свързана интелигентност|Повече системи работят заедно като едно.',
      'KONARA OS|Единен интелигентен оперативен слой за модерния бизнес.',
    ],
  },

  contact: {
    eyebrow: 'КОНТАКТ С KONARA',
    hero: 'Започнете с|бизнес проблема.',
    text: 'Кажете ни какво искате да подобрите и ще проверим дали AI workflow може да направи процеса по-бърз, ясен или лесен за управление.',
    directTitle: 'Говорете с KONARA.',
    directText:
      'За бизнес разговор персонализираната демонстрация е най-добрата отправна точка.',
    name: 'Пълно име',
    email: 'Бизнес имейл',
    business: 'Компания',
    message: 'Съобщение',
    send: 'Изпрати съобщение',
  },

  demo: {
    eyebrow: 'РЕЗЕРВИРАЙ ДЕМО',
    hero: 'Вижте какво може да направи KONARA|за вашия бизнес.',
    text: 'Разкажете ни за бизнеса си и workflow-а, който искате да подобрите, след което изберете време за демонстрация.',
    phone: 'Телефон',
    industry: 'Индустрия',
    improve: 'Какво искате да автоматизирате или подобрите?',
    request: 'Заяви демо',
    chooseTime: 'Изберете час за демонстрацията.',
  },

  assistant: {
    welcome: 'ДОБРЕ ДОШЛИ В KONARA',
    title: 'Създадено, за да направи бизнеса по-интелигентен.',
    text: 'KONARA е основана през 2026 г., за да изгражда практични AI системи, които помагат на бизнеса да отговаря по-бързо, да улавя повече възможности и да намалява повтарящата се работа.',
    continue: 'Продължи',
    menuTitle: 'Разгледайте KONARA по ваш начин.',
    explore: 'Разгледай решенията',
    demo: 'Резервирай демо',
    ask: 'Попитай KONARA',
    voiceTitle: 'Тук се свързва Voiceflow.',
    voiceText:
      'Тази зона е готова за KONARA асистент на живо, който може да отговаря на запитвания, да квалифицира lead-ове и да подпомага резервациите.',
    help: 'Получете помощ',
  },

  footer: {
    tagline: 'AI решения за модерни бизнеси.',
    vision: 'KONARA OS',
    founded: 'Основана през 2026',
  },
};

const EL: CopyPack = {
  nav: [
    'Αρχική',
    'Λύσεις',
    'Υπηρεσίες',
    'Σχετικά',
    'Επικοινωνία',
    'Κλείστε demo',
  ],

  common: {
    book: 'Κλείστε demo',
    explore: 'Εξερευνήστε λύσεις',
    region: 'Περιοχή',
    language: 'Γλώσσα',
    otherLanguage: 'Επιλέξτε άλλη γλώσσα',
    keepRegion: 'Διατήρηση περιοχής',
    required: 'Συμπληρώστε όλα τα υποχρεωτικά πεδία.',
    invalidEmail: 'Εισαγάγετε έγκυρη διεύθυνση email.',
    wrongPassword: 'Λανθασμένος κωδικός.',
    locked: 'Πάρα πολλές προσπάθειες. Δοκιμάστε ξανά αργότερα.',
    granted: 'Η πρόσβαση εγκρίθηκε.',
  },

  coming: {
    eyebrow: 'ΤΟ ΜΕΛΛΟΝ ΤΟΥ BUSINESS AUTOMATION',
    hero: 'Κάτι έξυπνο|έρχεται.',
    text: 'Η KONARA δημιουργεί το έξυπνο επίπεδο μεταξύ των συνομιλιών πελατών και της επιχειρηματικής δράσης — ταχύτερες απαντήσεις, καθαρότερες ροές και συστήματα που συνεργάζονται.',
    building: 'ΧΤΙΖΟΥΜΕ ΤΗΝ ΕΠΟΜΕΝΗ ΓΕΝΙΑ BUSINESS AUTOMATION',
    founderAccess: 'Πρόσβαση ιδρυτή',
    founderTitle: 'Πρόσβαση ιδρυτή',
    founderText:
      'Εισαγάγετε τον κωδικό ιδρυτή για να συνεχίσετε στον ιδιωτικό ιστότοπο της KONARA.',
    password: 'Κωδικός ιδρυτή',
    enter: 'Άνοιγμα προεπισκόπησης',
  },

  home: {
    eyebrow: 'AI AUTOMATION ΓΙΑ ΣΥΓΧΡΟΝΕΣ ΕΠΙΧΕΙΡΗΣΕΙΣ',
    hero: 'Λύσεις AI|που δουλεύουν για εσάς.',
    text: 'Η KONARA δημιουργεί έξυπνα συστήματα που βοηθούν τις επιχειρήσεις να απαντούν γρηγορότερα, να αξιοποιούν περισσότερες ευκαιρίες και να αυτοματοποιούν επαναλαμβανόμενη εργασία.',
    challengeTitle:
      'Η επιχείρησή σας δεν πρέπει να χάνει ευκαιρίες λόγω επαναλαμβανόμενης εργασίας.',
    challenges: [
      'Χαμένα αιτήματα|Οι πελάτες δεν πρέπει να περιμένουν για απάντηση.',
      'Χειροκίνητη διαχείριση|Οι επαναλαμβανόμενες εργασίες απομακρύνουν τους ανθρώπους από πιο σημαντική δουλειά.',
      'Αργές απαντήσεις|Οι σύγχρονοι πελάτες περιμένουν γρήγορη και σταθερή επικοινωνία.',
      'Αποσυνδεδεμένες ροές|Οι σημαντικές πληροφορίες πρέπει να κινούνται ομαλά στην επιχείρηση.',
    ],
    solutionTitle: 'Αυτοματισμός σχεδιασμένος γύρω από αποτελέσματα.',
    solutions: [
      'AI Receptionist|Απαντά ερωτήσεις, κατανοεί πρόθεση και διαχειρίζεται αιτήματα 24/7.',
      'Έξυπνες κρατήσεις|Μετατρέπει το ενδιαφέρον σε επιβεβαιωμένα ραντεβού.',
      'Υποστήριξη πελατών|Επιλύει γρήγορα συνηθισμένα αιτήματα με ανθρώπινη μεταφορά όταν χρειάζεται.',
    ],
    howTitle: 'Από τη συνομιλία στη δράση.',
    steps: [
      'Σύνδεση|Ένας πελάτης επικοινωνεί με την επιχείρησή σας.',
      'Κατανόηση|Η KONARA κατανοεί την ερώτηση, την πρόθεση και το πλαίσιο.',
      'Αυτοματοποίηση|Ενεργοποιείται η σωστή ροή, lead ή διαδικασία κράτησης.',
      'Παράδοση|Ο πελάτης λαμβάνει γρήγορη εξυπηρέτηση και η ομάδα δομημένες πληροφορίες.',
    ],
    liveTitle: 'Η επιχείρησή σας. Διαθέσιμη 24/7.',
    liveText:
      'Δώστε στους πελάτες ένα έξυπνο πρώτο σημείο επαφής για ερωτήσεις, leads, κρατήσεις και υποστήριξη.',
    osTitle: 'Ένα έξυπνο σύστημα για την επιχείρησή σας.',
    osText:
      'Το KONARA OS είναι το μακροπρόθεσμο όραμά μας για ενοποίηση επικοινωνίας, CRM, κρατήσεων, workflow και analytics.',
    ctaTitle: 'Έτοιμοι για πιο έξυπνη αυτοματοποίηση;',
    ctaText:
      'Δείτε πώς η KONARA μπορεί να εξοικονομήσει χρόνο, να βελτιώσει την επικοινωνία πελατών και να δημιουργήσει καλύτερη ψηφιακή εμπειρία.',
  },

  solutions: {
    eyebrow: 'ΛΥΣΕΙΣ KONARA',
    hero: 'AI για πραγματικές|επιχειρήσεις.',
    text: 'Έξυπνες λύσεις για αυτοματοποίηση επικοινωνίας, workflow και καθημερινών λειτουργιών.',
    products: [
      'AI Receptionist|Επικοινωνία πελατών διαθέσιμη οποιαδήποτε στιγμή.',
      'Έξυπνες κρατήσεις|Μετατρέπει συνομιλίες σε επιβεβαιωμένα ραντεβού.',
      'Υποστήριξη πελατών|Γρήγορες απαντήσεις με σωστή ανθρώπινη μεταφορά.',
      'AI Πωλήσεις|Καταγράφει ευκαιρίες όσο το ενδιαφέρον του πελάτη είναι υψηλό.',
      'CRM & Αυτοματισμός|Διατηρεί τις πληροφορίες σε κίνηση μεταξύ συνομιλιών, συστημάτων και ομάδων.',
      'Analytics & Αναφορές|Μετατρέπει τη δραστηριότητα σε καθαρότερη επιχειρηματική πληροφόρηση.',
    ],
    togetherTitle: 'Ένα έξυπνο επίπεδο, όχι έξι αποσυνδεδεμένα εργαλεία.',
    customTitle: 'Δεν χρειάζονται όλες οι επιχειρήσεις τον ίδιο αυτοματισμό.',
    customText:
      'Η KONARA ξεκινά από το πρόβλημα, το customer journey και τα υπάρχοντα συστήματα και χτίζει το κατάλληλο workflow.',
  },

  services: {
    eyebrow: 'ΥΠΗΡΕΣΙΕΣ KONARA',
    hero: 'Αυτοματισμός χτισμένος γύρω|από την επιχείρησή σας.',
    text: 'Κάθε υλοποίηση ξεκινά από το επιχειρηματικό πρόβλημα, τη διαδρομή πελάτη και το αποτέλεσμα που πρέπει να βελτιωθεί.',
    cards: [
      'AI Receptionist|Επικοινωνία προσαρμοσμένη στη γνώση, τον τόνο και τους κανόνες μεταφοράς της επιχείρησης.',
      'Αυτοματισμός leads|Καταγράφει, αξιολογεί και δρομολογεί ευκαιρίες με λιγότερη διαχείριση.',
      'Έξυπνες κρατήσεις|Καθοδηγεί τον πελάτη από το αίτημα στο επιβεβαιωμένο ραντεβού.',
      'Υποστήριξη πελατών|Διαχειρίζεται γρήγορα κοινά αιτήματα με δυνατότητα ανθρώπινης κλιμάκωσης.',
      'Business integrations|Συνδέει AI workflow με τα συστήματα που χρησιμοποιείτε ήδη.',
      'Analytics|Μετατρέπει την πελατειακή και λειτουργική δραστηριότητα σε καθαρότερες πληροφορίες.',
    ],
    processTitle: 'Καθαρή διαδρομή από το πρόβλημα στο λειτουργικό σύστημα.',
    process: [
      'Ανακάλυψη|Κατανόηση της επιχείρησης και της ευκαιρίας αυτοματοποίησης.',
      'Σχεδιασμός|Χαρτογράφηση εμπειρίας, λογικής, πληροφοριών και μεταφορών.',
      'Κατασκευή|Δημιουργία AI workflow γύρω από την πραγματική διαδικασία.',
      'Δοκιμή|Έλεγχος συνομιλιών, edge cases και επιχειρηματικών κανόνων.',
      'Έναρξη|Ελεγχόμενη ανάπτυξη με σαφή ευθύνη.',
      'Βελτίωση|Βελτιστοποίηση με βάση πραγματική χρήση και feedback.',
    ],
    existingTitle: 'Κρατήστε τα εργαλεία που ήδη λειτουργούν.',
    existingText:
      'Η KONARA προσαρμόζεται στα συστήματα, τους ανθρώπους και τις διαδικασίες που ήδη εμπιστεύεται η επιχείρησή σας.',
    afterTitle: 'Η έναρξη είναι η αρχή, όχι το τέλος.',
    afterText:
      'Η πραγματική χρήση αποκαλύπτει νέες ερωτήσεις, εξαιρέσεις και νέες ευκαιρίες βελτίωσης.',
  },

  about: {
    eyebrow: 'ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ KONARA',
    hero: 'Χτίζουμε πιο έξυπνους τρόπους|για επιχειρήσεις.',
    text: 'Η KONARA επικεντρώνεται στην πρακτική τεχνητή νοημοσύνη που βελτιώνει την επικοινωνία, μειώνει την επαναλαμβανόμενη εργασία και βοηθά τις επιχειρήσεις να λειτουργούν πιο αποτελεσματικά.',
    whyTitle:
      'Η τεχνολογία πρέπει να αφαιρεί δουλειά, όχι να δημιουργεί περισσότερη.',
    whyText:
      'Η KONARA ιδρύθηκε το 2026 με την ιδέα ότι η AI πρέπει να συνδέει αθόρυβα επικοινωνία, αποφάσεις και δράση — χρήσιμος αυτοματισμός σήμερα και KONARA OS αύριο.',
    principlesTitle:
      'Χτίζουμε χρήσιμα. Παραμένουμε ξεκάθαροι. Κερδίζουμε εμπιστοσύνη.',
    principles: [
      'Καινοτομία|Χρησιμοποιούμε νέα τεχνολογία όπου δημιουργεί πραγματική αξία.',
      'Απλότητα|Τα σύνθετα συστήματα πρέπει να φαίνονται απλά στους χρήστες.',
      'Εμπιστοσύνη|Ο αυτοματισμός πρέπει να αφήνει τον έλεγχο σε επιχειρήσεις και πελάτες.',
      'Αριστεία|Κάθε λεπτομέρεια επηρεάζει την ποιότητα της εμπειρίας.',
      'Επιτυχία πελάτη|Η τεχνολογία έχει αξία όταν η επιχείρηση έχει καλύτερο αποτέλεσμα.',
    ],
    timeline: [
      'Θεμέλιο|Στοχευμένα AI workflow και αυτοματοποίηση πελατών.',
      'Συνδεδεμένη νοημοσύνη|Περισσότερα συστήματα λειτουργούν μαζί ως ένα.',
      'KONARA OS|Ενιαίο έξυπνο λειτουργικό επίπεδο για σύγχρονες επιχειρήσεις.',
    ],
  },

  contact: {
    eyebrow: 'ΕΠΙΚΟΙΝΩΝΙΑ ΜΕ KONARA',
    hero: 'Ξεκινήστε από|το επιχειρηματικό πρόβλημα.',
    text: 'Πείτε μας τι θέλετε να βελτιώσετε και θα εξετάσουμε αν ένα AI workflow μπορεί να κάνει τη διαδικασία ταχύτερη, καθαρότερη ή ευκολότερη.',
    directTitle: 'Μιλήστε με την KONARA.',
    directText:
      'Για επιχειρηματική συζήτηση, μια εξατομικευμένη παρουσίαση είναι το καλύτερο σημείο εκκίνησης.',
    name: 'Ονοματεπώνυμο',
    email: 'Επαγγελματικό email',
    business: 'Επιχείρηση',
    message: 'Μήνυμα',
    send: 'Αποστολή μηνύματος',
  },

  demo: {
    eyebrow: 'ΚΛΕΙΣΤΕ DEMO',
    hero: 'Δείτε τι μπορεί να κάνει η KONARA|για την επιχείρησή σας.',
    text: 'Πείτε μας για την επιχείρησή σας και το workflow που θέλετε να βελτιώσετε και επιλέξτε ώρα για το demo.',
    phone: 'Τηλέφωνο',
    industry: 'Κλάδος',
    improve: 'Τι θέλετε να αυτοματοποιήσετε ή να βελτιώσετε;',
    request: 'Ζητήστε demo',
    chooseTime: 'Επιλέξτε ώρα για το demo.',
  },

  assistant: {
    welcome: 'ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΗΝ KONARA',
    title: 'Σχεδιασμένο για πιο έξυπνη λειτουργία των επιχειρήσεων.',
    text: 'Η KONARA ιδρύθηκε το 2026 για να δημιουργεί πρακτικά AI συστήματα που βοηθούν τις επιχειρήσεις να απαντούν γρηγορότερα, να αξιοποιούν περισσότερες ευκαιρίες και να μειώνουν την επαναλαμβανόμενη εργασία.',
    continue: 'Συνέχεια',
    menuTitle: 'Εξερευνήστε την KONARA με τον τρόπο σας.',
    explore: 'Εξερευνήστε λύσεις',
    demo: 'Κλείστε demo',
    ask: 'Ρωτήστε την KONARA',
    voiceTitle: 'Το Voiceflow συνδέεται εδώ.',
    voiceText:
      'Αυτή η περιοχή είναι έτοιμη για έναν live KONARA assistant που μπορεί να απαντά σε αιτήματα, να αξιολογεί leads και να καθοδηγεί κρατήσεις.',
    help: 'Λήψη βοήθειας',
  },

  footer: {
    tagline: 'AI λύσεις για σύγχρονες επιχειρήσεις.',
    vision: 'KONARA OS',
    founded: 'Ιδρύθηκε το 2026',
  },
};

const TR: CopyPack = {
  nav: [
    'Ana Sayfa',
    'Çözümler',
    'Hizmetler',
    'Hakkımızda',
    'İletişim',
    'Demo Planla',
  ],

  common: {
    book: 'Demo Planla',
    explore: 'Çözümleri Keşfet',
    region: 'Bölge',
    language: 'Dil',
    otherLanguage: 'Başka bir dil seç',
    keepRegion: 'Bu bölgeyi koru',
    required: 'Lütfen tüm zorunlu alanları doldurun.',
    invalidEmail: 'Lütfen geçerli bir e-posta adresi girin.',
    wrongPassword: 'Yanlış parola.',
    locked: 'Çok fazla deneme. Lütfen daha sonra tekrar deneyin.',
    granted: 'Erişim verildi.',
  },

  coming: {
    eyebrow: 'İŞ OTOMASYONUNUN GELECEĞİ',
    hero: 'Akıllı bir şey|geliyor.',
    text: 'KONARA, müşteri konuşmaları ile iş aksiyonları arasındaki akıllı katmanı oluşturuyor — daha hızlı yanıtlar, daha net iş akışları ve birlikte çalışan sistemler.',
    building: 'YENİ NESİL İŞ OTOMASYONUNU İNŞA EDİYORUZ',
    founderAccess: 'Kurucu Erişimi',
    founderTitle: 'Kurucu Erişimi',
    founderText:
      'Özel KONARA sitesine devam etmek için kurucu parolasını girin.',
    password: 'Kurucu parolası',
    enter: 'Önizlemeyi Aç',
  },

  home: {
    eyebrow: 'MODERN İŞLETMELER İÇİN AI OTOMASYONU',
    hero: 'Sizin için çalışan|AI çözümleri.',
    text: 'KONARA, işletmelerin daha hızlı yanıt vermesine, daha fazla fırsat yakalamasına ve tekrarlayan işleri otomatikleştirmesine yardımcı olan akıllı sistemler oluşturur.',
    challengeTitle:
      'İşletmeniz tekrarlayan işler yüzünden fırsat kaybetmemeli.',
    challenges: [
      'Kaçırılan talepler|Müşteriler yanıt beklemek zorunda kalmamalı.',
      'Manuel yönetim|Tekrarlayan görevler insanları daha değerli işlerden uzaklaştırır.',
      'Yavaş yanıtlar|Modern müşteriler hızlı ve tutarlı iletişim bekler.',
      'Kopuk iş akışları|Önemli bilgiler işletme içinde sorunsuz hareket etmelidir.',
    ],
    solutionTitle: 'Sonuç odaklı otomasyon.',
    solutions: [
      'AI Resepsiyonist|Soruları yanıtlar, niyeti anlar ve talepleri 24/7 yönlendirir.',
      'Akıllı Rezervasyon|İlgiyi onaylanmış randevulara dönüştürür.',
      'Müşteri Desteği|Yaygın talepleri hızlıca çözer ve gerektiğinde insana aktarır.',
    ],
    howTitle: 'Konuşmadan aksiyona.',
    steps: [
      'Bağlan|Bir müşteri işletmenizle iletişim kurar.',
      'Anla|KONARA soruyu, niyeti ve bağlamı anlar.',
      'Otomatikleştir|Doğru workflow, lead veya rezervasyon süreci başlatılır.',
      'Teslim Et|Müşteri hızlı hizmet alır, ekibiniz düzenli bilgiye ulaşır.',
    ],
    liveTitle: 'İşletmeniz. 7/24 erişilebilir.',
    liveText:
      "Müşterilere sorular, lead'ler, rezervasyonlar ve destek için akıllı bir ilk temas noktası sunun.",
    osTitle: 'İşletmeniz için tek akıllı sistem.',
    osText:
      'KONARA OS, iletişim, CRM, rezervasyon, workflow ve analitiği tek yerde birleştirme vizyonumuzdur.',
    ctaTitle: 'Daha akıllı otomasyona hazır mısınız?',
    ctaText:
      "KONARA'nın zamandan tasarruf etmenize, müşteri iletişimini geliştirmenize ve daha iyi dijital deneyimler oluşturmanıza nasıl yardımcı olabileceğini görün.",
  },

  solutions: {
    eyebrow: 'KONARA ÇÖZÜMLERİ',
    hero: 'Gerçek işletmeler için|AI.',
    text: "İletişimi, workflow'ları ve günlük operasyonları otomatikleştirmek için akıllı çözümler.",
    products: [
      'AI Resepsiyonist|Her zaman erişilebilir müşteri iletişimi.',
      'Akıllı Rezervasyon|Konuşmaları onaylanmış randevulara dönüştürür.',
      'Müşteri Desteği|Akıllı insan aktarımıyla hızlı yanıtlar.',
      'AI Satış|Müşteri ilgisi yüksekken fırsatları yakalar.',
      'CRM ve Otomasyon|Bilgiyi konuşmalar, sistemler ve ekipler arasında hareket ettirir.',
      'Analitik ve Raporlama|Aktiviteyi daha net iş bilgilerine dönüştürür.',
    ],
    togetherTitle: 'Altı ayrı araç yerine tek akıllı katman.',
    customTitle: 'Her işletmenin aynı otomasyona ihtiyacı yoktur.',
    customText:
      "KONARA problemden, müşteri yolculuğundan ve mevcut sistemlerden başlar ve doğru workflow'u bunların etrafında oluşturur.",
  },

  services: {
    eyebrow: 'KONARA HİZMETLERİ',
    hero: 'İşletmenizin etrafında|oluşturulan otomasyon.',
    text: 'Her uygulama iş problemi, müşteri yolculuğu ve iyileştirilmesi gereken sonuçla başlar.',
    cards: [
      'AI Resepsiyonist|İşletmenizin bilgisine, tonuna ve aktarım kurallarına uyarlanmış iletişim.',
      'Lead Otomasyonu|Daha az yönetimle fırsatları yakalar, değerlendirir ve yönlendirir.',
      'Akıllı Rezervasyon|Müşteriyi talepten onaylanmış randevuya taşır.',
      'Müşteri Desteği|Yaygın talepleri hızlıca işler ve insan desteğini erişilebilir tutar.',
      "İş Entegrasyonları|AI workflow'larını halihazırda kullandığınız sistemlere bağlar.",
      'Analitik|Müşteri ve operasyon aktivitesini daha anlaşılır bilgiye dönüştürür.',
    ],
    processTitle: 'Problemden çalışan sisteme net bir yol.',
    process: [
      'Keşfet|İşletmeyi ve otomasyon fırsatını anlayın.',
      'Tasarla|Deneyimi, mantığı, bilgiyi ve aktarımları haritalayın.',
      "Oluştur|AI workflow'unu gerçek süreç etrafında oluşturun.",
      'Test Et|Konuşmaları, istisnaları ve iş kurallarını test edin.',
      'Başlat|Kontrollü biçimde yayına alın ve sorumlulukları netleştirin.',
      'Geliştir|Gerçek kullanım ve geri bildirimle optimize edin.',
    ],
    existingTitle: 'Zaten çalışan araçları koruyun.',
    existingText:
      'KONARA, işletmenizin zaten güvendiği sistemlere, insanlara ve süreçlere uyum sağlar.',
    afterTitle: 'Yayın başlangıçtır, bitiş değil.',
    afterText:
      'Gerçek kullanım yeni soruları, istisnaları ve daha iyi geliştirme fırsatlarını ortaya çıkarır.',
  },

  about: {
    eyebrow: 'KONARA HAKKINDA',
    hero: 'İş yapmanın daha akıllı|yollarını oluşturuyoruz.',
    text: 'KONARA, iletişimi geliştiren, tekrarlayan işleri azaltan ve işletmelerin daha verimli çalışmasına yardımcı olan pratik yapay zekaya odaklanır.',
    whyTitle: 'Teknoloji daha fazla iş yaratmamalı, işi azaltmalı.',
    whyText:
      "KONARA, AI'ın iletişimi, kararları ve aksiyonu sessizce birbirine bağlaması gerektiği fikriyle 2026'da kuruldu — bugün faydalı otomasyon, yarın KONARA OS.",
    principlesTitle: 'Faydalı oluştur. Net kal. Güven kazan.',
    principles: [
      'İnovasyon|Yeni teknolojiyi gerçek değer yarattığı yerde kullanın.',
      'Basitlik|Karmaşık sistemler kullanıcı için basit hissettirmelidir.',
      'Güven|Otomasyon, kontrolü işletmelerde ve müşterilerde tutmalıdır.',
      'Mükemmellik|Her detay deneyimin kalitesine katkı sağlar.',
      'Müşteri Başarısı|Teknoloji, işletme daha iyi sonuç aldığında anlamlıdır.',
    ],
    timeline: [
      "Temel|Odaklanmış AI workflow'ları ve müşteri otomasyonu.",
      'Bağlantılı Zekâ|Daha fazla sistem tek bir yapı gibi birlikte çalışır.',
      'KONARA OS|Modern işletmeler için birleşik akıllı operasyon katmanı.',
    ],
  },

  contact: {
    eyebrow: 'KONARA İLETİŞİM',
    hero: 'İş problemiyle|başlayın.',
    text: "Neyi geliştirmek istediğinizi anlatın; bir AI workflow'un süreci daha hızlı, net veya kolay hale getirip getiremeyeceğini birlikte değerlendirelim.",
    directTitle: 'KONARA ile konuşun.',
    directText:
      'Bir iş görüşmesi için kişiselleştirilmiş demo en iyi başlangıç noktasıdır.',
    name: 'Ad Soyad',
    email: 'İş E-postası',
    business: 'İşletme',
    message: 'Mesaj',
    send: 'Mesaj Gönder',
  },

  demo: {
    eyebrow: 'DEMO PLANLA',
    hero: "KONARA'nın işletmeniz için|neler yapabileceğini görün.",
    text: "İşletmenizden ve geliştirmek istediğiniz workflow'dan bahsedin, ardından demo saatini seçin.",
    phone: 'Telefon',
    industry: 'Sektör',
    improve: 'Neyi otomatikleştirmek veya geliştirmek istersiniz?',
    request: 'Demo Talep Et',
    chooseTime: 'Demo saatini seçin.',
  },

  assistant: {
    welcome: "KONARA'YA HOŞ GELDİNİZ",
    title: 'İşletmeyi daha akıllı hissettirmek için tasarlandı.',
    text: "KONARA, işletmelerin daha hızlı yanıt vermesine, daha fazla fırsat yakalamasına ve tekrarlayan işleri azaltmasına yardımcı olan pratik AI sistemleri kurmak için 2026'da kuruldu.",
    continue: 'Devam Et',
    menuTitle: "KONARA'yı kendi yolunuzla keşfedin.",
    explore: 'Çözümleri Keşfet',
    demo: 'Demo Planla',
    ask: "KONARA'ya Sor",
    voiceTitle: 'Voiceflow buraya bağlanır.',
    voiceText:
      "Bu alan, talepleri yanıtlayabilen, lead'leri değerlendirebilen ve rezervasyonları yönlendirebilen canlı bir KONARA asistanına hazırdır.",
    help: 'Yardım Al',
  },

  footer: {
    tagline: 'Modern işletmeler için AI çözümleri.',
    vision: 'KONARA OS',
    founded: "2026'da kuruldu",
  },
};

const SV: CopyPack = {
  nav: ['Hem', 'Lösningar', 'Tjänster', 'Om oss', 'Kontakt', 'Boka en demo'],

  common: {
    book: 'Boka en demo',
    explore: 'Utforska lösningar',
    region: 'Region',
    language: 'Språk',
    otherLanguage: 'Välj ett annat språk',
    keepRegion: 'Behåll denna region',
    required: 'Fyll i alla obligatoriska fält.',
    invalidEmail: 'Ange en giltig e-postadress.',
    wrongPassword: 'Fel lösenord.',
    locked: 'För många försök. Försök igen senare.',
    granted: 'Åtkomst beviljad.',
  },

  coming: {
    eyebrow: 'FRAMTIDEN FÖR FÖRETAGSAUTOMATION',
    hero: 'Något intelligent|är på väg.',
    text: 'KONARA bygger det intelligenta lagret mellan kundsamtal och affärsåtgärder — snabbare svar, tydligare arbetsflöden och system som fungerar tillsammans.',
    building: 'VI BYGGER NÄSTA GENERATION AV FÖRETAGSAUTOMATION',
    founderAccess: 'Grundaråtkomst',
    founderTitle: 'Grundaråtkomst',
    founderText:
      'Ange grundarlösenordet för att fortsätta till KONARAs privata webbplats.',
    password: 'Grundarlösenord',
    enter: 'Öppna förhandsvisning',
  },

  home: {
    eyebrow: 'AI-AUTOMATION FÖR MODERNA FÖRETAG',
    hero: 'AI-lösningar|som arbetar för dig.',
    text: 'KONARA bygger intelligenta system som hjälper företag att svara snabbare, fånga fler möjligheter och automatisera repetitivt arbete.',
    challengeTitle:
      'Ditt företag ska inte förlora möjligheter på grund av repetitivt arbete.',
    challenges: [
      'Missade förfrågningar|Kunder ska inte behöva vänta på svar.',
      'Manuell administration|Repetitiva uppgifter tar tid från mer värdefullt arbete.',
      'Långsamma svar|Moderna kunder förväntar sig snabb och konsekvent kommunikation.',
      'Frånkopplade arbetsflöden|Viktig information ska röra sig smidigt genom verksamheten.',
    ],
    solutionTitle: 'Automation byggd kring resultat.',
    solutions: [
      'AI-receptionist|Svarar på frågor, förstår avsikt och hanterar förfrågningar dygnet runt.',
      'Smart bokning|Förvandlar intresse till bekräftade möten.',
      'Kundsupport|Löser vanliga ärenden snabbt och lämnar över till en människa vid behov.',
    ],
    howTitle: 'Från samtal till handling.',
    steps: [
      'Anslut|En kund kontaktar ditt företag.',
      'Förstå|KONARA förstår frågan, avsikten och sammanhanget.',
      'Automatisera|Rätt workflow, lead eller bokningsprocess startas.',
      'Leverera|Kunden får snabb hjälp och teamet strukturerad information.',
    ],
    liveTitle: 'Ditt företag. Tillgängligt 24/7.',
    liveText:
      'Ge kunderna en intelligent första kontaktpunkt för frågor, leads, bokningar och support.',
    osTitle: 'Ett intelligent system för ditt företag.',
    osText:
      'KONARA OS är vår långsiktiga vision för att samla kommunikation, CRM, bokning, workflow och analys.',
    ctaTitle: 'Redo att automatisera smartare?',
    ctaText:
      'Upptäck hur KONARA kan spara tid, förbättra kundkommunikation och skapa en bättre digital upplevelse.',
  },

  solutions: {
    eyebrow: 'KONARA-LÖSNINGAR',
    hero: 'AI byggd för|riktiga företag.',
    text: 'Intelligenta lösningar för att automatisera kommunikation, workflow och daglig drift.',
    products: [
      'AI-receptionist|Kundkommunikation som alltid är tillgänglig.',
      'Smart bokning|Förvandlar samtal till bekräftade möten.',
      'Kundsupport|Snabba svar med genomtänkt mänsklig överlämning.',
      'AI-försäljning|Fångar möjligheter när kundens intresse är högt.',
      'CRM & Automation|Håller information i rörelse mellan samtal, system och team.',
      'Analys & Rapportering|Gör aktivitet till tydligare affärsinformation.',
    ],
    togetherTitle: 'Ett intelligent lager istället för sex separata verktyg.',
    customTitle: 'Alla företag behöver inte samma typ av automation.',
    customText:
      'KONARA börjar med problemet, kundresan och befintliga system och bygger rätt workflow runt dem.',
  },

  services: {
    eyebrow: 'KONARA-TJÄNSTER',
    hero: 'Automation byggd kring|ditt företag.',
    text: 'Varje implementation börjar med affärsproblemet, kundresan och resultatet som behöver förbättras.',
    cards: [
      'AI-receptionist|Kommunikation anpassad till företagets kunskap, ton och överlämningsregler.',
      'Lead-automation|Fångar, kvalificerar och styr möjligheter med mindre administration.',
      'Smart bokning|Tar kunden från förfrågan till bekräftad tid.',
      'Kundsupport|Hanterar vanliga ärenden snabbt med mänsklig eskalering tillgänglig.',
      'Företagsintegrationer|Ansluter AI-workflow till systemen ni redan använder.',
      'Analys|Gör kund- och verksamhetsaktivitet tydligare.',
    ],
    processTitle: 'En tydlig väg från problem till fungerande system.',
    process: [
      'Upptäck|Förstå företaget och automationsmöjligheten.',
      'Designa|Kartlägg upplevelse, logik, information och överlämningar.',
      'Bygg|Skapa AI-workflow runt den verkliga processen.',
      'Testa|Testa samtal, specialfall och affärsregler.',
      'Lansera|Rulla ut kontrollerat med tydligt ansvar.',
      'Förbättra|Optimera utifrån verklig användning och feedback.',
    ],
    existingTitle: 'Behåll verktygen som redan fungerar.',
    existingText:
      'KONARA passar in runt de system, människor och processer företaget redan litar på.',
    afterTitle: 'Lanseringen är början, inte slutet.',
    afterText:
      'Verklig användning avslöjar nya frågor, undantag och bättre möjligheter till förbättring.',
  },

  about: {
    eyebrow: 'OM KONARA',
    hero: 'Vi bygger smartare sätt|att driva företag.',
    text: 'KONARA fokuserar på praktisk artificiell intelligens som förbättrar kommunikation, minskar repetitivt arbete och hjälper företag att arbeta effektivare.',
    whyTitle: 'Teknik ska ta bort arbete, inte skapa mer.',
    whyText:
      'KONARA grundades 2026 med idén att AI diskret ska koppla samman kommunikation, beslut och handling — användbar automation idag och KONARA OS imorgon.',
    principlesTitle: 'Bygg användbart. Håll det tydligt. Förtjäna förtroende.',
    principles: [
      'Innovation|Använd ny teknik där den skapar verkligt värde.',
      'Enkelhet|Komplexa system ska kännas enkla för användaren.',
      'Förtroende|Automation ska låta företag och kunder behålla kontrollen.',
      'Excellens|Varje detalj bidrar till kvaliteten på upplevelsen.',
      'Kundframgång|Teknik spelar roll när företaget får ett bättre resultat.',
    ],
    timeline: [
      'Grund|Fokuserade AI-workflow och kundautomation.',
      'Sammankopplad intelligens|Fler system arbetar tillsammans som ett.',
      'KONARA OS|Ett enhetligt intelligent operativt lager för moderna företag.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKTA KONARA',
    hero: 'Börja med|affärsproblemet.',
    text: 'Berätta vad du vill förbättra så kan vi undersöka om ett AI-workflow kan göra processen snabbare, tydligare eller enklare.',
    directTitle: 'Prata med KONARA.',
    directText:
      'För ett affärssamtal är en skräddarsydd demo den bästa utgångspunkten.',
    name: 'Fullständigt namn',
    email: 'Företags-e-post',
    business: 'Företag',
    message: 'Meddelande',
    send: 'Skicka meddelande',
  },

  demo: {
    eyebrow: 'BOKA EN DEMO',
    hero: 'Se vad KONARA kan göra|för ditt företag.',
    text: 'Berätta om ditt företag och det workflow du vill förbättra och välj sedan en tid för demonstrationen.',
    phone: 'Telefon',
    industry: 'Bransch',
    improve: 'Vad vill du automatisera eller förbättra?',
    request: 'Begär demo',
    chooseTime: 'Välj tid för din demo.',
  },

  assistant: {
    welcome: 'VÄLKOMMEN TILL KONARA',
    title: 'Byggt för att få företag att fungera smartare.',
    text: 'KONARA grundades 2026 för att skapa praktiska AI-system som hjälper företag att svara snabbare, fånga fler möjligheter och minska repetitivt arbete.',
    continue: 'Fortsätt',
    menuTitle: 'Utforska KONARA på ditt sätt.',
    explore: 'Utforska lösningar',
    demo: 'Boka en demo',
    ask: 'Fråga KONARA',
    voiceTitle: 'Voiceflow ansluts här.',
    voiceText:
      'Det här området är redo för en live KONARA-assistent som kan svara på frågor, kvalificera leads och guida bokningar.',
    help: 'Få hjälp',
  },

  footer: {
    tagline: 'AI-lösningar för moderna företag.',
    vision: 'KONARA OS',
    founded: 'Grundat 2026',
  },
};

const NO: CopyPack = {
  nav: ['Hjem', 'Løsninger', 'Tjenester', 'Om oss', 'Kontakt', 'Bestill demo'],

  common: {
    book: 'Bestill demo',
    explore: 'Utforsk løsninger',
    region: 'Region',
    language: 'Språk',
    otherLanguage: 'Velg et annet språk',
    keepRegion: 'Behold denne regionen',
    required: 'Fyll ut alle obligatoriske felt.',
    invalidEmail: 'Skriv inn en gyldig e-postadresse.',
    wrongPassword: 'Feil passord.',
    locked: 'For mange forsøk. Prøv igjen senere.',
    granted: 'Tilgang godkjent.',
  },

  coming: {
    eyebrow: 'FREMTIDEN FOR BEDRIFTSAUTOMATISERING',
    hero: 'Noe intelligent|er på vei.',
    text: 'KONARA bygger det intelligente laget mellom kundesamtaler og forretningshandling — raskere svar, tydeligere arbeidsflyter og systemer laget for å fungere sammen.',
    building: 'VI BYGGER NESTE GENERASJON BEDRIFTSAUTOMATISERING',
    founderAccess: 'Grunnlegger-tilgang',
    founderTitle: 'Grunnlegger-tilgang',
    founderText:
      'Skriv inn grunnleggerpassordet for å åpne KONARAs private nettsted.',
    password: 'Grunnleggerpassord',
    enter: 'Åpne forhåndsvisning',
  },

  home: {
    eyebrow: 'AI-AUTOMATISERING FOR MODERNE BEDRIFTER',
    hero: 'AI-løsninger|som jobber for deg.',
    text: 'KONARA bygger intelligente systemer som hjelper bedrifter med å svare raskere, fange flere muligheter og automatisere repetitivt arbeid.',
    challengeTitle:
      'Bedriften din bør ikke miste muligheter på grunn av repetitivt arbeid.',
    challenges: [
      'Tapte henvendelser|Kunder skal ikke måtte vente på svar.',
      'Manuell administrasjon|Repetitive oppgaver tar tid fra mer verdifullt arbeid.',
      'Trege svar|Moderne kunder forventer rask og konsekvent kommunikasjon.',
      'Frakoblede arbeidsflyter|Viktig informasjon bør bevege seg sømløst gjennom bedriften.',
    ],
    solutionTitle: 'Automatisering bygget rundt resultater.',
    solutions: [
      'AI-resepsjonist|Svar på spørsmål, forstå hensikt og håndter henvendelser døgnet rundt.',
      'Smart booking|Gjør interesse om til bekreftede avtaler.',
      'Kundestøtte|Løs vanlige forespørsler raskt og overfør til mennesker når det trengs.',
    ],
    howTitle: 'Fra samtale til handling.',
    steps: [
      'Koble til|En kunde tar kontakt med bedriften din.',
      'Forstå|KONARA forstår spørsmålet, hensikten og konteksten.',
      'Automatiser|Riktig workflow, lead eller bookingprosess startes.',
      'Lever|Kunden får rask hjelp og teamet strukturert informasjon.',
    ],
    liveTitle: 'Bedriften din. Tilgjengelig 24/7.',
    liveText:
      'Gi kundene et intelligent første kontaktpunkt for spørsmål, leads, booking og support.',
    osTitle: 'Ett intelligent system for bedriften din.',
    osText:
      'KONARA OS er vår langsiktige visjon om å samle kommunikasjon, CRM, booking, workflow og analyse.',
    ctaTitle: 'Klar for smartere automatisering?',
    ctaText:
      'Oppdag hvordan KONARA kan spare tid, forbedre kundekommunikasjon og skape en bedre digital opplevelse.',
  },

  solutions: {
    eyebrow: 'KONARA-LØSNINGER',
    hero: 'AI bygget for|ekte virksomheter.',
    text: 'Intelligente løsninger for å automatisere kommunikasjon, workflow og daglig drift.',
    products: [
      'AI-resepsjonist|Kundekommunikasjon som alltid er tilgjengelig.',
      'Smart booking|Gjør samtaler om til bekreftede avtaler.',
      'Kundestøtte|Raske svar med gjennomtenkt menneskelig overføring.',
      'AI-salg|Fanger muligheter mens kundens interesse er høy.',
      'CRM og automatisering|Holder informasjon i bevegelse mellom samtaler, systemer og team.',
      'Analyse og rapportering|Gjør aktivitet om til tydeligere forretningsinformasjon.',
    ],
    togetherTitle: 'Ett intelligent lag, ikke seks frakoblede verktøy.',
    customTitle: 'Ikke alle bedrifter trenger den samme automatiseringen.',
    customText:
      'KONARA starter med problemet, kundereisen og eksisterende systemer og bygger riktig workflow rundt dem.',
  },

  services: {
    eyebrow: 'KONARA-TJENESTER',
    hero: 'Automatisering bygget rundt|bedriften din.',
    text: 'Hver implementering starter med forretningsproblemet, kundereisen og resultatet som skal forbedres.',
    cards: [
      'AI-resepsjonist|Kommunikasjon tilpasset bedriftens kunnskap, tone og overføringsregler.',
      'Lead-automatisering|Fanger, kvalifiserer og ruter muligheter med mindre administrasjon.',
      'Smart booking|Fører kunden fra henvendelse til bekreftet avtale.',
      'Kundestøtte|Håndterer vanlige forespørsler raskt med menneskelig eskalering tilgjengelig.',
      'Bedriftsintegrasjoner|Kobler AI-workflow til systemene dere allerede bruker.',
      'Analyse|Gjør kunde- og driftsaktivitet enklere å forstå.',
    ],
    processTitle: 'En tydelig vei fra problem til fungerende system.',
    process: [
      'Oppdag|Forstå bedriften og automatiseringsmuligheten.',
      'Design|Kartlegg opplevelse, logikk, informasjon og overføringer.',
      'Bygg|Lag AI-workflow rundt den virkelige prosessen.',
      'Test|Test samtaler, unntak og forretningsregler.',
      'Lanser|Rull ut kontrollert med tydelig ansvar.',
      'Forbedre|Optimaliser basert på virkelig bruk og tilbakemeldinger.',
    ],
    existingTitle: 'Behold verktøyene som allerede fungerer.',
    existingText:
      'KONARA passer inn rundt systemene, menneskene og prosessene bedriften allerede stoler på.',
    afterTitle: 'Lansering er begynnelsen, ikke slutten.',
    afterText:
      'Virkelig bruk avdekker nye spørsmål, unntak og bedre muligheter for forbedring.',
  },

  about: {
    eyebrow: 'OM KONARA',
    hero: 'Vi bygger smartere måter|å drive virksomhet.',
    text: 'KONARA fokuserer på praktisk kunstig intelligens som forbedrer kommunikasjon, reduserer repetitivt arbeid og hjelper bedrifter med å jobbe mer effektivt.',
    whyTitle: 'Teknologi skal fjerne arbeid, ikke skape mer.',
    whyText:
      'KONARA ble grunnlagt i 2026 med ideen om at AI stille skal koble sammen kommunikasjon, beslutninger og handling — nyttig automatisering i dag og KONARA OS i morgen.',
    principlesTitle: 'Bygg nyttig. Hold det tydelig. Fortjen tillit.',
    principles: [
      'Innovasjon|Bruk ny teknologi der den skaper reell verdi.',
      'Enkelhet|Komplekse systemer skal føles enkle for brukeren.',
      'Tillit|Automatisering skal la bedrifter og kunder beholde kontrollen.',
      'Kvalitet|Hver detalj bidrar til kvaliteten på opplevelsen.',
      'Kundesuksess|Teknologi betyr noe når virksomheten får et bedre resultat.',
    ],
    timeline: [
      'Grunnlag|Fokuserte AI-workflow og kundeautomatisering.',
      'Tilkoblet intelligens|Flere systemer jobber sammen som ett.',
      'KONARA OS|Et samlet intelligent driftslag for moderne bedrifter.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKT KONARA',
    hero: 'Start med|forretningsproblemet.',
    text: 'Fortell oss hva du ønsker å forbedre, så kan vi undersøke om et AI-workflow kan gjøre prosessen raskere, tydeligere eller enklere.',
    directTitle: 'Snakk med KONARA.',
    directText:
      'For en forretningssamtale er en tilpasset demo det beste utgangspunktet.',
    name: 'Fullt navn',
    email: 'Jobb-e-post',
    business: 'Bedrift',
    message: 'Melding',
    send: 'Send melding',
  },

  demo: {
    eyebrow: 'BESTILL DEMO',
    hero: 'Se hva KONARA kan gjøre|for bedriften din.',
    text: 'Fortell oss om bedriften din og workflow du vil forbedre, og velg deretter et tidspunkt for demonstrasjonen.',
    phone: 'Telefon',
    industry: 'Bransje',
    improve: 'Hva ønsker du å automatisere eller forbedre?',
    request: 'Be om demo',
    chooseTime: 'Velg tidspunkt for demoen.',
  },

  assistant: {
    welcome: 'VELKOMMEN TIL KONARA',
    title: 'Bygget for å få virksomheter til å fungere smartere.',
    text: 'KONARA ble grunnlagt i 2026 for å bygge praktiske AI-systemer som hjelper bedrifter med å svare raskere, fange flere muligheter og redusere repetitivt arbeid.',
    continue: 'Fortsett',
    menuTitle: 'Utforsk KONARA på din måte.',
    explore: 'Utforsk løsninger',
    demo: 'Bestill demo',
    ask: 'Spør KONARA',
    voiceTitle: 'Voiceflow kobles til her.',
    voiceText:
      'Dette området er klart for en live KONARA-assistent som kan svare på henvendelser, kvalifisere leads og veilede bookinger.',
    help: 'Få hjelp',
  },

  footer: {
    tagline: 'AI-løsninger for moderne bedrifter.',
    vision: 'KONARA OS',
    founded: 'Grunnlagt i 2026',
  },
};

const DA: CopyPack = {
  nav: ['Hjem', 'Løsninger', 'Services', 'Om os', 'Kontakt', 'Book en demo'],

  common: {
    book: 'Book en demo',
    explore: 'Udforsk løsninger',
    region: 'Region',
    language: 'Sprog',
    otherLanguage: 'Vælg et andet sprog',
    keepRegion: 'Behold denne region',
    required: 'Udfyld alle obligatoriske felter.',
    invalidEmail: 'Indtast en gyldig e-mailadresse.',
    wrongPassword: 'Forkert adgangskode.',
    locked: 'For mange forsøg. Prøv igen senere.',
    granted: 'Adgang godkendt.',
  },

  coming: {
    eyebrow: 'FREMTIDEN FOR FORRETNINGSAUTOMATISERING',
    hero: 'Noget intelligent|er på vej.',
    text: 'KONARA bygger det intelligente lag mellem kundesamtaler og forretningshandlinger — hurtigere svar, klarere workflows og systemer designet til at arbejde sammen.',
    building: 'VI BYGGER NÆSTE GENERATION AF FORRETNINGSAUTOMATISERING',
    founderAccess: 'Grundlæggeradgang',
    founderTitle: 'Grundlæggeradgang',
    founderText:
      'Indtast grundlæggeradgangskoden for at fortsætte til KONARAs private website.',
    password: 'Grundlæggeradgangskode',
    enter: 'Åbn forhåndsvisning',
  },

  home: {
    eyebrow: 'AI-AUTOMATISERING TIL MODERNE VIRKSOMHEDER',
    hero: 'AI-løsninger|der arbejder for dig.',
    text: 'KONARA bygger intelligente systemer, der hjælper virksomheder med at svare hurtigere, fange flere muligheder og automatisere gentaget arbejde.',
    challengeTitle:
      'Din virksomhed bør ikke miste muligheder på grund af gentaget arbejde.',
    challenges: [
      'Mistede henvendelser|Kunder bør ikke skulle vente på svar.',
      'Manuel administration|Gentagne opgaver tager tid fra mere værdifuldt arbejde.',
      'Langsomme svar|Moderne kunder forventer hurtig og ensartet kommunikation.',
      'Adskilte workflows|Vigtig information bør bevæge sig problemfrit gennem virksomheden.',
    ],
    solutionTitle: 'Automatisering bygget omkring resultater.',
    solutions: [
      'AI-receptionist|Besvarer spørgsmål, forstår intention og håndterer henvendelser døgnet rundt.',
      'Smart booking|Forvandler interesse til bekræftede aftaler.',
      'Kundesupport|Løser almindelige forespørgsler hurtigt og overdrager til mennesker ved behov.',
    ],
    howTitle: 'Fra samtale til handling.',
    steps: [
      'Forbind|En kunde kontakter din virksomhed.',
      'Forstå|KONARA forstår spørgsmålet, intentionen og konteksten.',
      'Automatiser|Det rigtige workflow, lead eller bookingforløb aktiveres.',
      'Lever|Kunden får hurtig hjælp, og teamet modtager struktureret information.',
    ],
    liveTitle: 'Din virksomhed. Tilgængelig 24/7.',
    liveText:
      'Giv kunder et intelligent første kontaktpunkt til spørgsmål, leads, booking og support.',
    osTitle: 'Ét intelligent system til din virksomhed.',
    osText:
      'KONARA OS er vores langsigtede vision om at samle kommunikation, CRM, booking, workflows og analyse.',
    ctaTitle: 'Klar til at automatisere smartere?',
    ctaText:
      'Se hvordan KONARA kan spare tid, forbedre kundekommunikation og skabe en bedre digital oplevelse.',
  },

  solutions: {
    eyebrow: 'KONARA-LØSNINGER',
    hero: 'AI bygget til|rigtige virksomheder.',
    text: 'Intelligente løsninger til at automatisere kommunikation, workflows og daglig drift.',
    products: [
      'AI-receptionist|Kundekommunikation der altid er tilgængelig.',
      'Smart booking|Forvandler samtaler til bekræftede aftaler.',
      'Kundesupport|Hurtige svar med gennemtænkt menneskelig overdragelse.',
      'AI-salg|Fanger muligheder mens kundens interesse er høj.',
      'CRM & Automation|Holder information i bevægelse mellem samtaler, systemer og teams.',
      'Analyse & Rapportering|Gør aktivitet til tydeligere forretningsinformation.',
    ],
    togetherTitle: 'Ét intelligent lag, ikke seks adskilte værktøjer.',
    customTitle:
      'Ikke alle virksomheder har brug for den samme automatisering.',
    customText:
      'KONARA starter med problemet, kunderejsen og eksisterende systemer og bygger det rigtige workflow omkring dem.',
  },

  services: {
    eyebrow: 'KONARA-SERVICES',
    hero: 'Automatisering bygget omkring|din virksomhed.',
    text: 'Hver implementering starter med forretningsproblemet, kunderejsen og det resultat, der skal forbedres.',
    cards: [
      'AI-receptionist|Kommunikation tilpasset virksomhedens viden, tone og regler for overdragelse.',
      'Lead-automatisering|Fanger, kvalificerer og dirigerer muligheder med mindre administration.',
      'Smart booking|Fører kunden fra henvendelse til bekræftet aftale.',
      'Kundesupport|Håndterer almindelige forespørgsler hurtigt med menneskelig eskalering tilgængelig.',
      'Forretningsintegrationer|Forbinder AI-workflows med systemer virksomheden allerede bruger.',
      'Analyse|Gør kunde- og driftsaktivitet lettere at forstå.',
    ],
    processTitle: 'En klar vej fra problem til fungerende system.',
    process: [
      'Opdag|Forstå virksomheden og automatiseringsmuligheden.',
      'Design|Kortlæg oplevelse, logik, information og overdragelser.',
      'Byg|Skab AI-workflowet omkring den virkelige proces.',
      'Test|Test samtaler, undtagelser og forretningsregler.',
      'Lancér|Udrul kontrolleret med tydeligt ansvar.',
      'Forbedr|Optimer med virkelig brug og feedback.',
    ],
    existingTitle: 'Behold værktøjerne der allerede virker.',
    existingText:
      'KONARA passer ind omkring de systemer, mennesker og processer virksomheden allerede stoler på.',
    afterTitle: 'Lanceringen er begyndelsen, ikke slutningen.',
    afterText:
      'Virkelig brug afslører nye spørgsmål, undtagelser og bedre muligheder for forbedring.',
  },

  about: {
    eyebrow: 'OM KONARA',
    hero: 'Vi bygger smartere måder|at drive virksomhed på.',
    text: 'KONARA fokuserer på praktisk kunstig intelligens, der forbedrer kommunikation, reducerer gentaget arbejde og hjælper virksomheder med at arbejde mere effektivt.',
    whyTitle: 'Teknologi bør fjerne arbejde, ikke skabe mere.',
    whyText:
      'KONARA blev grundlagt i 2026 med idéen om, at AI stille skal forbinde kommunikation, beslutninger og handling — nyttig automatisering i dag og KONARA OS i morgen.',
    principlesTitle: 'Byg nyttigt. Hold det klart. Fortjen tillid.',
    principles: [
      'Innovation|Brug ny teknologi hvor den skaber reel værdi.',
      'Enkelhed|Komplekse systemer skal føles enkle for brugeren.',
      'Tillid|Automatisering skal lade virksomheder og kunder bevare kontrollen.',
      'Kvalitet|Hver detalje bidrager til kvaliteten af oplevelsen.',
      'Kundesucces|Teknologi betyder noget, når virksomheden får et bedre resultat.',
    ],
    timeline: [
      'Grundlag|Fokuserede AI-workflows og kundeautomatisering.',
      'Forbundet intelligens|Flere systemer arbejder sammen som ét.',
      'KONARA OS|Et samlet intelligent driftslag for moderne virksomheder.',
    ],
  },

  contact: {
    eyebrow: 'KONTAKT KONARA',
    hero: 'Start med|forretningsproblemet.',
    text: 'Fortæl os hvad du vil forbedre, så kan vi undersøge om et AI-workflow kan gøre processen hurtigere, klarere eller lettere.',
    directTitle: 'Tal med KONARA.',
    directText:
      'Til en forretningssamtale er en skræddersyet demo det bedste udgangspunkt.',
    name: 'Fulde navn',
    email: 'Virksomheds-e-mail',
    business: 'Virksomhed',
    message: 'Besked',
    send: 'Send besked',
  },

  demo: {
    eyebrow: 'BOOK EN DEMO',
    hero: 'Se hvad KONARA kan gøre|for din virksomhed.',
    text: 'Fortæl os om din virksomhed og det workflow du vil forbedre, og vælg derefter et tidspunkt til demonstrationen.',
    phone: 'Telefon',
    industry: 'Branche',
    improve: 'Hvad vil du automatisere eller forbedre?',
    request: 'Anmod om demo',
    chooseTime: 'Vælg tidspunkt for demoen.',
  },

  assistant: {
    welcome: 'VELKOMMEN TIL KONARA',
    title: 'Bygget til at gøre virksomheder mere intelligente.',
    text: 'KONARA blev grundlagt i 2026 for at bygge praktiske AI-systemer, der hjælper virksomheder med at svare hurtigere, fange flere muligheder og reducere gentaget arbejde.',
    continue: 'Fortsæt',
    menuTitle: 'Udforsk KONARA på din måde.',
    explore: 'Udforsk løsninger',
    demo: 'Book en demo',
    ask: 'Spørg KONARA',
    voiceTitle: 'Voiceflow forbindes her.',
    voiceText:
      'Dette område er klar til en live KONARA-assistent, der kan besvare henvendelser, kvalificere leads og guide bookinger.',
    help: 'Få hjælp',
  },

  footer: {
    tagline: 'AI-løsninger til moderne virksomheder.',
    vision: 'KONARA OS',
    founded: 'Grundlagt i 2026',
  },
};

const FI: CopyPack = {
  nav: [
    'Etusivu',
    'Ratkaisut',
    'Palvelut',
    'Tietoa meistä',
    'Yhteys',
    'Varaa demo',
  ],

  common: {
    book: 'Varaa demo',
    explore: 'Tutustu ratkaisuihin',
    region: 'Alue',
    language: 'Kieli',
    otherLanguage: 'Valitse toinen kieli',
    keepRegion: 'Pidä tämä alue',
    required: 'Täytä kaikki pakolliset kentät.',
    invalidEmail: 'Anna kelvollinen sähköpostiosoite.',
    wrongPassword: 'Väärä salasana.',
    locked: 'Liian monta yritystä. Yritä myöhemmin uudelleen.',
    granted: 'Pääsy myönnetty.',
  },

  coming: {
    eyebrow: 'LIIKETOIMINNAN AUTOMAATION TULEVAISUUS',
    hero: 'Jotain älykästä|on tulossa.',
    text: 'KONARA rakentaa älykkään kerroksen asiakaskeskustelujen ja liiketoiminnan toimien väliin — nopeampia vastauksia, selkeämpiä työnkulkuja ja yhdessä toimivia järjestelmiä.',
    building: 'RAKENNAMME LIIKETOIMINNAN AUTOMAATION SEURAAVAA SUKUPOLVEA',
    founderAccess: 'Perustajan pääsy',
    founderTitle: 'Perustajan pääsy',
    founderText:
      'Syötä perustajan salasana avataksesi KONARAn yksityisen verkkosivun.',
    password: 'Perustajan salasana',
    enter: 'Avaa esikatselu',
  },

  home: {
    eyebrow: 'AI-AUTOMAATIO MODERNEILLE YRITYKSILLE',
    hero: 'AI-ratkaisuja|jotka työskentelevät puolestasi.',
    text: 'KONARA rakentaa älykkäitä järjestelmiä, jotka auttavat yrityksiä vastaamaan nopeammin, hyödyntämään enemmän mahdollisuuksia ja automatisoimaan toistuvaa työtä.',
    challengeTitle:
      'Yrityksesi ei pitäisi menettää mahdollisuuksia toistuvan työn vuoksi.',
    challenges: [
      'Menetetyt yhteydenotot|Asiakkaiden ei pitäisi joutua odottamaan vastausta.',
      'Manuaalinen hallinto|Toistuvat tehtävät vievät aikaa arvokkaammalta työltä.',
      'Hitaat vastaukset|Nykyaikaiset asiakkaat odottavat nopeaa ja johdonmukaista viestintää.',
      'Irralliset työnkulut|Tärkeän tiedon pitäisi liikkua sujuvasti yrityksen läpi.',
    ],
    solutionTitle: 'Tuloksiin rakennettu automaatio.',
    solutions: [
      'AI-vastaanottovirkailija|Vastaa kysymyksiin, ymmärtää tarkoituksen ja käsittelee yhteydenottoja 24/7.',
      'Älykäs ajanvaraus|Muuttaa kiinnostuksen vahvistetuiksi tapaamisiksi.',
      'Asiakastuki|Ratkaisee yleiset pyynnöt nopeasti ja siirtää ihmiselle tarvittaessa.',
    ],
    howTitle: 'Keskustelusta toimintaan.',
    steps: [
      'Yhdistä|Asiakas ottaa yhteyttä yritykseesi.',
      'Ymmärrä|KONARA ymmärtää kysymyksen, tarkoituksen ja kontekstin.',
      'Automatisoi|Oikea workflow, lead tai varausprosessi käynnistyy.',
      'Toimita|Asiakas saa nopeaa palvelua ja tiimi jäsenneltyä tietoa.',
    ],
    liveTitle: 'Yrityksesi. Saatavilla 24/7.',
    liveText:
      'Tarjoa asiakkaille älykäs ensimmäinen yhteyspiste kysymyksiin, leadeihin, varauksiin ja tukeen.',
    osTitle: 'Yksi älykäs järjestelmä yrityksellesi.',
    osText:
      'KONARA OS on pitkän aikavälin visiomme viestinnän, CRM:n, varausten, työnkulkujen ja analytiikan yhdistämisestä.',
    ctaTitle: 'Valmis automatisoimaan älykkäämmin?',
    ctaText:
      'Tutustu siihen, miten KONARA voi säästää aikaa, parantaa asiakasviestintää ja luoda paremman digitaalisen kokemuksen.',
  },

  solutions: {
    eyebrow: 'KONARA-RATKAISUT',
    hero: 'AI todellisiin|yrityksiin.',
    text: "Älykkäitä ratkaisuja viestinnän, workflow'iden ja päivittäisen toiminnan automatisointiin.",
    products: [
      'AI-vastaanottovirkailija|Asiakasviestintä, joka on aina käytettävissä.',
      'Älykäs ajanvaraus|Muuttaa keskustelut vahvistetuiksi tapaamisiksi.',
      'Asiakastuki|Nopeat vastaukset harkitulla siirrolla ihmiselle.',
      'AI-myynti|Tarttuu mahdollisuuksiin, kun asiakkaan kiinnostus on korkealla.',
      'CRM ja automaatio|Pitää tiedon liikkeessä keskustelujen, järjestelmien ja tiimien välillä.',
      'Analytiikka ja raportointi|Muuttaa toiminnan selkeämmäksi liiketoimintatiedoksi.',
    ],
    togetherTitle: 'Yksi älykäs kerros kuuden erillisen työkalun sijaan.',
    customTitle: 'Kaikki yritykset eivät tarvitse samaa automaatiota.',
    customText:
      "KONARA lähtee ongelmasta, asiakaspolusta ja olemassa olevista järjestelmistä ja rakentaa oikean workflow'n niiden ympärille.",
  },

  services: {
    eyebrow: 'KONARA-PALVELUT',
    hero: 'Yrityksesi ympärille|rakennettu automaatio.',
    text: 'Jokainen toteutus alkaa liiketoimintaongelmasta, asiakaspolusta ja parannettavasta tuloksesta.',
    cards: [
      'AI-vastaanottovirkailija|Yrityksen tietoon, sävyyn ja siirtosääntöihin mukautettu asiakasviestintä.',
      'Lead-automaatiot|Kerää, arvioi ja ohjaa mahdollisuuksia vähemmällä hallinnolla.',
      'Älykäs ajanvaraus|Ohjaa asiakkaan yhteydenotosta vahvistettuun tapaamiseen.',
      'Asiakastuki|Käsittelee yleiset pyynnöt nopeasti ja mahdollistaa ihmiseskalaation.',
      "Yritysintegraatiot|Yhdistää AI-workflow't jo käytössä oleviin järjestelmiin.",
      'Analytiikka|Muuttaa asiakas- ja operatiivisen toiminnan selkeämmäksi tiedoksi.',
    ],
    processTitle: 'Selkeä polku ongelmasta toimivaan järjestelmään.',
    process: [
      'Tutki|Ymmärrä yritys ja automaation mahdollisuus.',
      'Suunnittele|Kartoita kokemus, logiikka, tieto ja siirrot.',
      'Rakenna|Luo AI-workflow todellisen prosessin ympärille.',
      'Testaa|Testaa keskustelut, poikkeustilanteet ja liiketoimintasäännöt.',
      'Julkaise|Ota käyttöön hallitusti ja selkeällä vastuulla.',
      'Paranna|Optimoi oikean käytön ja palautteen perusteella.',
    ],
    existingTitle: 'Pidä työkalut, jotka jo toimivat.',
    existingText:
      'KONARA mukautuu järjestelmiin, ihmisiin ja prosesseihin, joihin yrityksesi jo luottaa.',
    afterTitle: 'Julkaisu on alku, ei loppu.',
    afterText:
      'Todellinen käyttö paljastaa uusia kysymyksiä, poikkeuksia ja parempia mahdollisuuksia kehittää järjestelmää.',
  },

  about: {
    eyebrow: 'TIETOA KONARASTA',
    hero: 'Rakennamme älykkäämpiä tapoja|tehdä liiketoimintaa.',
    text: 'KONARA keskittyy käytännölliseen tekoälyyn, joka parantaa viestintää, vähentää toistuvaa työtä ja auttaa yrityksiä toimimaan tehokkaammin.',
    whyTitle: 'Teknologian pitäisi poistaa työtä, ei luoda lisää.',
    whyText:
      'KONARA perustettiin vuonna 2026 ajatuksella, että AI:n pitäisi yhdistää viestintä, päätökset ja toiminta huomaamattomasti — hyödyllistä automaatiota tänään ja KONARA OS huomenna.',
    principlesTitle:
      'Rakenna hyödyllistä. Pidä se selkeänä. Ansaitse luottamus.',
    principles: [
      'Innovaatio|Käytä uutta teknologiaa siellä, missä se luo todellista arvoa.',
      'Yksinkertaisuus|Monimutkaisten järjestelmien tulee tuntua käyttäjistä yksinkertaisilta.',
      'Luottamus|Automaation tulee pitää yritykset ja asiakkaat hallinnassa.',
      'Laatu|Jokainen yksityiskohta vaikuttaa kokemuksen laatuun.',
      'Asiakassuccess|Teknologialla on merkitystä, kun yritys saa paremman lopputuloksen.',
    ],
    timeline: [
      "Perusta|Kohdennetut AI-workflow't ja asiakasautomaatio.",
      'Yhdistetty älykkyys|Useammat järjestelmät toimivat yhdessä yhtenä kokonaisuutena.',
      'KONARA OS|Yhtenäinen älykäs toimintakerros moderneille yrityksille.',
    ],
  },

  contact: {
    eyebrow: 'OTA YHTEYTTÄ KONARAAN',
    hero: 'Aloita|liiketoimintaongelmasta.',
    text: 'Kerro meille mitä haluat parantaa, niin voimme selvittää, voiko AI-workflow tehdä prosessista nopeamman, selkeämmän tai helpomman.',
    directTitle: 'Keskustele KONARAn kanssa.',
    directText:
      'Liiketoimintakeskusteluun räätälöity demo on paras lähtökohta.',
    name: 'Koko nimi',
    email: 'Yrityssähköposti',
    business: 'Yritys',
    message: 'Viesti',
    send: 'Lähetä viesti',
  },

  demo: {
    eyebrow: 'VARAA DEMO',
    hero: 'Katso, mitä KONARA voi tehdä|yrityksellesi.',
    text: "Kerro yrityksestäsi ja workflow'sta, jota haluat parantaa, ja valitse sitten aika demolle.",
    phone: 'Puhelin',
    industry: 'Toimiala',
    improve: 'Mitä haluaisit automatisoida tai parantaa?',
    request: 'Pyydä demo',
    chooseTime: 'Valitse demoaika.',
  },

  assistant: {
    welcome: 'TERVETULOA KONARAAN',
    title: 'Rakennettu tekemään liiketoiminnasta älykkäämpää.',
    text: 'KONARA perustettiin vuonna 2026 rakentamaan käytännöllisiä AI-järjestelmiä, jotka auttavat yrityksiä vastaamaan nopeammin, hyödyntämään enemmän mahdollisuuksia ja vähentämään toistuvaa työtä.',
    continue: 'Jatka',
    menuTitle: 'Tutustu KONARAan omalla tavallasi.',
    explore: 'Tutustu ratkaisuihin',
    demo: 'Varaa demo',
    ask: 'Kysy KONARAlta',
    voiceTitle: 'Voiceflow yhdistetään tähän.',
    voiceText:
      'Tämä alue on valmis live-KONARA-assistentille, joka voi vastata kyselyihin, arvioida leadeja ja ohjata varauksia.',
    help: 'Hanki apua',
  },

  footer: {
    tagline: 'AI-ratkaisuja moderneille yrityksille.',
    vision: 'KONARA OS',
    founded: 'Perustettu 2026',
  },
};

const UK: CopyPack = {
  nav: [
    'Головна',
    'Рішення',
    'Послуги',
    'Про нас',
    'Контакти',
    'Замовити демо',
  ],

  common: {
    book: 'Замовити демо',
    explore: 'Переглянути рішення',
    region: 'Регіон',
    language: 'Мова',
    otherLanguage: 'Вибрати іншу мову',
    keepRegion: 'Зберегти цей регіон',
    required: "Заповніть усі обов'язкові поля.",
    invalidEmail: 'Введіть коректну адресу електронної пошти.',
    wrongPassword: 'Неправильний пароль.',
    locked: 'Забагато спроб. Спробуйте ще раз пізніше.',
    granted: 'Доступ дозволено.',
  },

  coming: {
    eyebrow: 'МАЙБУТНЄ АВТОМАТИЗАЦІЇ БІЗНЕСУ',
    hero: 'Наближається щось|інтелектуальне.',
    text: 'KONARA створює інтелектуальний рівень між розмовами з клієнтами та бізнес-діями — швидші відповіді, зрозуміліші процеси та системи, що працюють разом.',
    building: 'МИ СТВОРЮЄМО НАСТУПНЕ ПОКОЛІННЯ БІЗНЕС-АВТОМАТИЗАЦІЇ',
    founderAccess: 'Доступ засновника',
    founderTitle: 'Доступ засновника',
    founderText:
      'Введіть пароль засновника, щоб перейти до приватного сайту KONARA.',
    password: 'Пароль засновника',
    enter: 'Відкрити перегляд',
  },

  home: {
    eyebrow: 'AI-АВТОМАТИЗАЦІЯ ДЛЯ СУЧАСНОГО БІЗНЕСУ',
    hero: 'AI-рішення|які працюють для вас.',
    text: 'KONARA створює інтелектуальні системи, які допомагають бізнесу швидше відповідати, знаходити більше можливостей і автоматизувати повторювану роботу.',
    challengeTitle:
      'Ваш бізнес не повинен втрачати можливості через повторювану роботу.',
    challenges: [
      'Пропущені звернення|Клієнти не повинні чекати відповіді.',
      'Ручне адміністрування|Повторювані завдання відволікають людей від важливішої роботи.',
      'Повільні відповіді|Сучасні клієнти очікують швидкої та послідовної комунікації.',
      "Роз'єднані процеси|Важлива інформація повинна безперешкодно проходити через бізнес.",
    ],
    solutionTitle: 'Автоматизація, побудована навколо результатів.',
    solutions: [
      'AI-рецепціоніст|Відповідає на запитання, розуміє намір і обробляє звернення 24/7.',
      'Розумне бронювання|Перетворює зацікавленість на підтверджені зустрічі.',
      'Підтримка клієнтів|Швидко вирішує типові запити та передає людині, коли потрібно.',
    ],
    howTitle: 'Від розмови до дії.',
    steps: [
      'Підключення|Клієнт взаємодіє з вашим бізнесом.',
      'Розуміння|KONARA розуміє запитання, намір і контекст.',
      'Автоматизація|Запускається правильний workflow, lead або процес бронювання.',
      'Результат|Клієнт отримує швидку допомогу, а команда — структуровану інформацію.',
    ],
    liveTitle: 'Ваш бізнес. Доступний 24/7.',
    liveText:
      'Надайте клієнтам інтелектуальну першу точку контакту для запитань, lead-ів, бронювання та підтримки.',
    osTitle: 'Одна інтелектуальна система для вашого бізнесу.',
    osText:
      "KONARA OS — наша довгострокова візія об'єднання комунікації, CRM, бронювання, workflow та аналітики.",
    ctaTitle: 'Готові до розумнішої автоматизації?',
    ctaText:
      'Дізнайтеся, як KONARA може заощаджувати час, покращувати комунікацію з клієнтами та створювати кращий цифровий досвід.',
  },

  solutions: {
    eyebrow: 'РІШЕННЯ KONARA',
    hero: 'AI для реального|бізнесу.',
    text: 'Інтелектуальні рішення для автоматизації комунікації, workflow та щоденної роботи.',
    products: [
      'AI-рецепціоніст|Комунікація з клієнтами, доступна у будь-який час.',
      'Розумне бронювання|Перетворює розмови на підтверджені зустрічі.',
      'Підтримка клієнтів|Швидкі відповіді з продуманою передачею людині.',
      'AI-продажі|Захоплює можливості, поки інтерес клієнта високий.',
      'CRM та автоматизація|Підтримує рух інформації між розмовами, системами та командами.',
      'Аналітика та звітність|Перетворює активність на зрозумілішу бізнес-інформацію.',
    ],
    togetherTitle:
      "Один інтелектуальний рівень замість шести роз'єднаних інструментів.",
    customTitle: 'Не кожному бізнесу потрібна однакова автоматизація.',
    customText:
      'KONARA починає з проблеми, шляху клієнта та наявних систем, а потім створює відповідний workflow.',
  },

  services: {
    eyebrow: 'ПОСЛУГИ KONARA',
    hero: 'Автоматизація, побудована навколо|вашого бізнесу.',
    text: 'Кожне впровадження починається з бізнес-проблеми, шляху клієнта та результату, який потрібно покращити.',
    cards: [
      'AI-рецепціоніст|Комунікація, адаптована до знань, тону та правил передачі вашого бізнесу.',
      'Автоматизація lead-ів|Захоплює, кваліфікує та направляє можливості з меншою адміністративною роботою.',
      'Розумне бронювання|Веде клієнта від звернення до підтвердженої зустрічі.',
      'Підтримка клієнтів|Швидко обробляє типові запити з можливістю людської ескалації.',
      'Бізнес-інтеграції|Підключає AI-workflow до систем, якими ви вже користуєтесь.',
      'Аналітика|Перетворює клієнтську та операційну активність на зрозумілішу інформацію.',
    ],
    processTitle: 'Чіткий шлях від проблеми до працюючої системи.',
    process: [
      'Дослідити|Зрозуміти бізнес і можливість автоматизації.',
      'Спроєктувати|Відобразити досвід, логіку, інформацію та передачі.',
      'Побудувати|Створити AI-workflow навколо реального процесу.',
      'Протестувати|Перевірити розмови, нестандартні випадки та бізнес-правила.',
      'Запустити|Впровадити контрольовано з чіткою відповідальністю.',
      'Покращувати|Оптимізувати на основі реального використання та відгуків.',
    ],
    existingTitle: 'Збережіть інструменти, які вже працюють.',
    existingText:
      'KONARA адаптується до систем, людей і процесів, яким ваш бізнес уже довіряє.',
    afterTitle: 'Запуск — це початок, а не кінець.',
    afterText:
      'Реальне використання виявляє нові запитання, винятки та кращі можливості для розвитку.',
  },

  about: {
    eyebrow: 'ПРО KONARA',
    hero: 'Створюємо розумніші способи|ведення бізнесу.',
    text: 'KONARA зосереджується на практичному штучному інтелекті, який покращує комунікацію, зменшує повторювану роботу та допомагає бізнесу працювати ефективніше.',
    whyTitle: 'Технології повинні прибирати роботу, а не створювати більше.',
    whyText:
      'KONARA була заснована у 2026 році з ідеєю, що AI має непомітно поєднувати комунікацію, рішення та дії — корисна автоматизація сьогодні і KONARA OS завтра.',
    principlesTitle: 'Створювати корисне. Бути зрозумілими. Заслужити довіру.',
    principles: [
      'Інновації|Використовувати нові технології там, де вони створюють реальну цінність.',
      'Простота|Складні системи повинні відчуватися простими для користувачів.',
      'Довіра|Автоматизація повинна залишати контроль бізнесу та клієнтам.',
      'Якість|Кожна деталь впливає на якість досвіду.',
      'Успіх клієнта|Технологія має значення, коли бізнес отримує кращий результат.',
    ],
    timeline: [
      'Основа|Сфокусовані AI-workflow та автоматизація клієнтського досвіду.',
      "З'єднаний інтелект|Більше систем працюють разом як одне ціле.",
      'KONARA OS|Єдиний інтелектуальний операційний рівень для сучасного бізнесу.',
    ],
  },

  contact: {
    eyebrow: 'КОНТАКТ KONARA',
    hero: 'Почніть з|бізнес-проблеми.',
    text: 'Розкажіть, що ви хочете покращити, і ми перевіримо, чи може AI-workflow зробити процес швидшим, зрозумілішим або простішим.',
    directTitle: 'Поговоріть з KONARA.',
    directText:
      'Для бізнес-розмови найкращою відправною точкою є персоналізована демонстрація.',
    name: "Повне ім'я",
    email: 'Робочий e-mail',
    business: 'Компанія',
    message: 'Повідомлення',
    send: 'Надіслати повідомлення',
  },

  demo: {
    eyebrow: 'ЗАМОВИТИ ДЕМО',
    hero: 'Дізнайтеся, що KONARA може зробити|для вашого бізнесу.',
    text: 'Розкажіть про свій бізнес і workflow, який хочете покращити, а потім оберіть час демонстрації.',
    phone: 'Телефон',
    industry: 'Галузь',
    improve: 'Що ви хочете автоматизувати або покращити?',
    request: 'Запросити демо',
    chooseTime: 'Оберіть час демонстрації.',
  },

  assistant: {
    welcome: 'ЛАСКАВО ПРОСИМО ДО KONARA',
    title: 'Створено, щоб бізнес працював розумніше.',
    text: 'KONARA була заснована у 2026 році для створення практичних AI-систем, які допомагають бізнесу швидше відповідати, знаходити більше можливостей і скорочувати повторювану роботу.',
    continue: 'Продовжити',
    menuTitle: 'Досліджуйте KONARA по-своєму.',
    explore: 'Переглянути рішення',
    demo: 'Замовити демо',
    ask: 'Запитати KONARA',
    voiceTitle: 'Voiceflow підключається тут.',
    voiceText:
      'Ця зона готова для live-асистента KONARA, який може відповідати на звернення, кваліфікувати lead-и та допомагати з бронюванням.',
    help: 'Отримати допомогу',
  },

  footer: {
    tagline: 'AI-рішення для сучасного бізнесу.',
    vision: 'KONARA OS',
    founded: 'Заснована у 2026',
  },
};

const AR: CopyPack = {
  nav: ['الرئيسية', 'الحلول', 'الخدمات', 'من نحن', 'تواصل معنا', 'احجز عرضاً'],

  common: {
    book: 'احجز عرضاً',
    explore: 'استكشف الحلول',
    region: 'المنطقة',
    language: 'اللغة',
    otherLanguage: 'اختر لغة أخرى',
    keepRegion: 'احتفظ بهذه المنطقة',
    required: 'يرجى إكمال جميع الحقول المطلوبة.',
    invalidEmail: 'يرجى إدخال بريد إلكتروني صالح.',
    wrongPassword: 'كلمة المرور غير صحيحة.',
    locked: 'محاولات كثيرة جداً. يرجى المحاولة لاحقاً.',
    granted: 'تم منح الوصول.',
  },

  coming: {
    eyebrow: 'مستقبل أتمتة الأعمال',
    hero: 'شيء ذكي|في الطريق.',
    text: 'تبني KONARA طبقة ذكية بين محادثات العملاء وإجراءات الأعمال — ردود أسرع، سير عمل أوضح، وأنظمة مصممة للعمل معاً.',
    building: 'نبني الجيل القادم من أتمتة الأعمال',
    founderAccess: 'دخول المؤسس',
    founderTitle: 'دخول المؤسس',
    founderText: 'أدخل كلمة مرور المؤسس للانتقال إلى موقع KONARA الخاص.',
    password: 'كلمة مرور المؤسس',
    enter: 'فتح المعاينة',
  },

  home: {
    eyebrow: 'أتمتة بالذكاء الاصطناعي للأعمال الحديثة',
    hero: 'حلول ذكاء اصطناعي|تعمل من أجلك.',
    text: 'تبني KONARA أنظمة ذكية تساعد الشركات على الرد بشكل أسرع، واغتنام فرص أكثر، وأتمتة الأعمال المتكررة.',
    challengeTitle: 'لا ينبغي لأعمالك أن تفقد الفرص بسبب المهام المتكررة.',
    challenges: [
      'استفسارات مفقودة|لا ينبغي للعملاء انتظار الرد.',
      'إدارة يدوية|المهام المتكررة تستهلك الوقت من الأعمال الأعلى قيمة.',
      'ردود بطيئة|العملاء اليوم يتوقعون تواصلاً سريعاً ومتسقاً.',
      'سير عمل منفصل|يجب أن تتحرك المعلومات المهمة بسلاسة داخل الشركة.',
    ],
    solutionTitle: 'أتمتة مبنية حول النتائج.',
    solutions: [
      'موظف استقبال بالذكاء الاصطناعي|يجيب عن الأسئلة ويفهم النية ويتعامل مع الاستفسارات على مدار الساعة.',
      'حجز ذكي|يحوّل الاهتمام إلى مواعيد مؤكدة.',
      'دعم العملاء|يحل الطلبات الشائعة بسرعة وينقلها للإنسان عند الحاجة.',
    ],
    howTitle: 'من المحادثة إلى التنفيذ.',
    steps: [
      'الاتصال|يتواصل العميل مع شركتك.',
      'الفهم|تفهم KONARA السؤال والنية والسياق.',
      'الأتمتة|يتم تشغيل سير العمل أو الـ lead أو عملية الحجز المناسبة.',
      'التنفيذ|يحصل العميل على خدمة سريعة ويحصل فريقك على معلومات منظمة.',
    ],
    liveTitle: 'عملك. متاح على مدار الساعة.',
    liveText:
      'امنح العملاء نقطة اتصال ذكية أولى للأسئلة والعملاء المحتملين والحجوزات والدعم.',
    osTitle: 'نظام ذكي واحد لعملك.',
    osText:
      'KONARA OS هي رؤيتنا طويلة المدى لدمج التواصل وCRM والحجوزات وسير العمل والتحليلات.',
    ctaTitle: 'هل أنت جاهز لأتمتة أكثر ذكاءً؟',
    ctaText:
      'اكتشف كيف يمكن لـ KONARA توفير الوقت وتحسين التواصل مع العملاء وبناء تجربة رقمية أفضل.',
  },

  solutions: {
    eyebrow: 'حلول KONARA',
    hero: 'ذكاء اصطناعي مصمم|للأعمال الحقيقية.',
    text: 'حلول ذكية لأتمتة التواصل وسير العمل والعمليات اليومية.',
    products: [
      'موظف استقبال بالذكاء الاصطناعي|تواصل مع العملاء متاح في أي وقت.',
      'حجز ذكي|يحوّل المحادثات إلى مواعيد مؤكدة.',
      'دعم العملاء|ردود سريعة مع تحويل مدروس للإنسان.',
      'مبيعات بالذكاء الاصطناعي|يلتقط الفرص عندما يكون اهتمام العميل مرتفعاً.',
      'CRM والأتمتة|يحافظ على تدفق المعلومات بين المحادثات والأنظمة والفرق.',
      'التحليلات والتقارير|يحوّل النشاط إلى معلومات أعمال أوضح.',
    ],
    togetherTitle: 'طبقة ذكية واحدة بدلاً من ست أدوات منفصلة.',
    customTitle: 'ليست كل الشركات بحاجة إلى نفس الأتمتة.',
    customText:
      'تبدأ KONARA بالمشكلة ورحلة العميل والأنظمة الموجودة، ثم تبني سير العمل المناسب حولها.',
  },

  services: {
    eyebrow: 'خدمات KONARA',
    hero: 'أتمتة مبنية حول|عملك.',
    text: 'يبدأ كل تنفيذ بمشكلة العمل ورحلة العميل والنتيجة التي تحتاج إلى تحسين.',
    cards: [
      'موظف استقبال بالذكاء الاصطناعي|تواصل مصمم وفق معرفة شركتك ونبرتها وقواعد التحويل.',
      'أتمتة العملاء المحتملين|يلتقط الفرص ويؤهلها ويوجهها مع تقليل الإدارة اليدوية.',
      'الحجز الذكي|ينقل العميل من الاستفسار إلى الموعد المؤكد.',
      'دعم العملاء|يتعامل مع الطلبات الشائعة بسرعة مع إبقاء التصعيد البشري متاحاً.',
      'تكاملات الأعمال|يربط سير العمل بالذكاء الاصطناعي بالأنظمة التي تستخدمها بالفعل.',
      'التحليلات|يحوّل نشاط العملاء والعمليات إلى معلومات أوضح.',
    ],
    processTitle: 'مسار واضح من المشكلة إلى نظام يعمل.',
    process: [
      'الاكتشاف|فهم العمل وفرصة الأتمتة.',
      'التصميم|رسم التجربة والمنطق والمعلومات والتحويلات.',
      'البناء|إنشاء سير عمل الذكاء الاصطناعي حول العملية الفعلية.',
      'الاختبار|اختبار المحادثات والحالات الخاصة وقواعد العمل.',
      'الإطلاق|النشر بشكل منظم مع مسؤوليات واضحة.',
      'التحسين|تطوير النظام بناءً على الاستخدام الحقيقي والملاحظات.',
    ],
    existingTitle: 'احتفظ بالأدوات التي تعمل بالفعل.',
    existingText:
      'تتكامل KONARA مع الأنظمة والأشخاص والعمليات التي تعتمد عليها شركتك بالفعل.',
    afterTitle: 'الإطلاق هو البداية وليس النهاية.',
    afterText:
      'يكشف الاستخدام الحقيقي أسئلة جديدة وحالات استثنائية وفرصاً أفضل للتحسين.',
  },

  about: {
    eyebrow: 'عن KONARA',
    hero: 'نبني طرقاً أكثر ذكاءً|لممارسة الأعمال.',
    text: 'تركز KONARA على ذكاء اصطناعي عملي يحسن التواصل ويقلل العمل المتكرر ويساعد الشركات على العمل بكفاءة أكبر.',
    whyTitle: 'يجب أن تقلل التكنولوجيا العمل، لا أن تضيف المزيد منه.',
    whyText:
      'تأسست KONARA في عام 2026 على فكرة أن الذكاء الاصطناعي يجب أن يربط التواصل والقرارات والتنفيذ بهدوء — أتمتة مفيدة اليوم وKONARA OS غداً.',
    principlesTitle: 'ابنِ ما هو مفيد. كن واضحاً. اكسب الثقة.',
    principles: [
      'الابتكار|استخدام التقنية الجديدة عندما تخلق قيمة حقيقية.',
      'البساطة|يجب أن تبدو الأنظمة المعقدة بسيطة لمن يستخدمها.',
      'الثقة|يجب أن تبقي الأتمتة التحكم بيد الشركات والعملاء.',
      'التميز|كل تفصيل يساهم في جودة التجربة.',
      'نجاح العميل|التكنولوجيا مهمة عندما تحقق الشركة نتيجة أفضل.',
    ],
    timeline: [
      'الأساس|سير عمل AI مركز وأتمتة لخدمة العملاء.',
      'ذكاء مترابط|مزيد من الأنظمة تعمل معاً كوحدة واحدة.',
      'KONARA OS|طبقة تشغيل ذكية موحدة للأعمال الحديثة.',
    ],
  },

  contact: {
    eyebrow: 'تواصل مع KONARA',
    hero: 'ابدأ من|مشكلة العمل.',
    text: 'أخبرنا بما تريد تحسينه وسنرى ما إذا كان سير عمل AI يمكن أن يجعل العملية أسرع أو أوضح أو أسهل.',
    directTitle: 'تحدث مع KONARA.',
    directText: 'لبدء محادثة تجارية، يعد العرض المخصص أفضل نقطة بداية.',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني للعمل',
    business: 'الشركة',
    message: 'الرسالة',
    send: 'إرسال الرسالة',
  },

  demo: {
    eyebrow: 'احجز عرضاً',
    hero: 'اكتشف ما يمكن أن تفعله KONARA|لعملك.',
    text: 'أخبرنا عن عملك وسير العمل الذي تريد تحسينه ثم اختر وقت العرض.',
    phone: 'الهاتف',
    industry: 'المجال',
    improve: 'ما الذي تريد أتمتته أو تحسينه؟',
    request: 'طلب عرض',
    chooseTime: 'اختر وقت العرض.',
  },

  assistant: {
    welcome: 'مرحباً بك في KONARA',
    title: 'مصمم لجعل الأعمال تعمل بذكاء.',
    text: 'تأسست KONARA في 2026 لبناء أنظمة AI عملية تساعد الشركات على الرد أسرع، واغتنام فرص أكثر، وتقليل العمل المتكرر.',
    continue: 'متابعة',
    menuTitle: 'استكشف KONARA بطريقتك.',
    explore: 'استكشف الحلول',
    demo: 'احجز عرضاً',
    ask: 'اسأل KONARA',
    voiceTitle: 'يتم ربط Voiceflow هنا.',
    voiceText:
      'هذه المنطقة جاهزة لمساعد KONARA مباشر يمكنه الرد على الاستفسارات وتأهيل العملاء المحتملين وتوجيه الحجوزات.',
    help: 'الحصول على مساعدة',
  },

  footer: {
    tagline: 'حلول AI للأعمال الحديثة.',
    vision: 'KONARA OS',
    founded: 'تأسست في 2026',
  },
};

const HI: CopyPack = {
  nav: ['होम', 'समाधान', 'सेवाएँ', 'हमारे बारे में', 'संपर्क', 'डेमो बुक करें'],

  common: {
    book: 'डेमो बुक करें',
    explore: 'समाधान देखें',
    region: 'क्षेत्र',
    language: 'भाषा',
    otherLanguage: 'दूसरी भाषा चुनें',
    keepRegion: 'यह क्षेत्र रखें',
    required: 'कृपया सभी आवश्यक फ़ील्ड भरें।',
    invalidEmail: 'कृपया सही ईमेल पता दर्ज करें।',
    wrongPassword: 'गलत पासवर्ड।',
    locked: 'बहुत अधिक प्रयास। कृपया बाद में फिर कोशिश करें।',
    granted: 'प्रवेश स्वीकृत।',
  },

  coming: {
    eyebrow: 'बिज़नेस ऑटोमेशन का भविष्य',
    hero: 'कुछ बुद्धिमान|आ रहा है।',
    text: 'KONARA ग्राहक बातचीत और बिज़नेस कार्रवाई के बीच एक बुद्धिमान लेयर बना रहा है — तेज़ जवाब, साफ़ workflow और साथ काम करने वाले सिस्टम।',
    building: 'हम अगली पीढ़ी का बिज़नेस ऑटोमेशन बना रहे हैं',
    founderAccess: 'फाउंडर एक्सेस',
    founderTitle: 'फाउंडर एक्सेस',
    founderText:
      'KONARA की निजी वेबसाइट खोलने के लिए फाउंडर पासवर्ड दर्ज करें।',
    password: 'फाउंडर पासवर्ड',
    enter: 'प्रीव्यू खोलें',
  },

  home: {
    eyebrow: 'आधुनिक व्यवसायों के लिए AI ऑटोमेशन',
    hero: 'AI समाधान|जो आपके लिए काम करें।',
    text: 'KONARA ऐसे बुद्धिमान सिस्टम बनाता है जो व्यवसायों को तेज़ जवाब देने, अधिक अवसर पकड़ने और दोहराए जाने वाले काम को ऑटोमेट करने में मदद करते हैं।',
    challengeTitle:
      'आपके व्यवसाय को दोहराए जाने वाले काम की वजह से अवसर नहीं खोने चाहिए।',
    challenges: [
      'छूटे हुए सवाल|ग्राहकों को जवाब के लिए इंतज़ार नहीं करना चाहिए।',
      'मैनुअल प्रशासन|दोहराए जाने वाले काम लोगों को अधिक महत्वपूर्ण कार्य से दूर करते हैं।',
      'धीमे जवाब|आज के ग्राहक तेज़ और लगातार संवाद की उम्मीद करते हैं।',
      'अलग-अलग workflow|महत्वपूर्ण जानकारी पूरे व्यवसाय में आसानी से चलनी चाहिए।',
    ],
    solutionTitle: 'परिणामों के लिए बनाया गया ऑटोमेशन।',
    solutions: [
      'AI रिसेप्शनिस्ट|सवालों का जवाब देता है, इरादा समझता है और 24/7 पूछताछ संभालता है।',
      'स्मार्ट बुकिंग|रुचि को पक्के अपॉइंटमेंट में बदलता है।',
      'कस्टमर सपोर्ट|आम समस्याएँ जल्दी हल करता है और ज़रूरत पर इंसान को सौंप देता है।',
    ],
    howTitle: 'बातचीत से कार्रवाई तक।',
    steps: [
      'कनेक्ट|ग्राहक आपके व्यवसाय से संपर्क करता है।',
      'समझें|KONARA सवाल, इरादा और संदर्भ समझता है।',
      'ऑटोमेट|सही workflow, lead या booking प्रक्रिया शुरू होती है।',
      'डिलीवर|ग्राहक को तेज़ सेवा और टीम को व्यवस्थित जानकारी मिलती है।',
    ],
    liveTitle: 'आपका व्यवसाय। 24/7 उपलब्ध।',
    liveText:
      'ग्राहकों को सवाल, lead, booking और support के लिए एक बुद्धिमान पहला संपर्क बिंदु दें।',
    osTitle: 'आपके व्यवसाय के लिए एक बुद्धिमान सिस्टम।',
    osText:
      'KONARA OS हमारी दीर्घकालिक दृष्टि है जिसमें communication, CRM, booking, workflow और analytics को एक साथ लाया जाता है।',
    ctaTitle: 'और स्मार्ट ऑटोमेशन के लिए तैयार हैं?',
    ctaText:
      'देखें कि KONARA समय कैसे बचा सकता है, ग्राहक संवाद सुधार सकता है और बेहतर डिजिटल अनुभव बना सकता है।',
  },

  solutions: {
    eyebrow: 'KONARA समाधान',
    hero: 'असली व्यवसायों के लिए|बनाया गया AI.',
    text: 'कम्युनिकेशन, workflow और दैनिक ऑपरेशन को ऑटोमेट करने के लिए बुद्धिमान समाधान।',
    products: [
      'AI रिसेप्शनिस्ट|हर समय उपलब्ध ग्राहक संवाद।',
      'स्मार्ट बुकिंग|बातचीत को पक्के अपॉइंटमेंट में बदलता है।',
      'कस्टमर सपोर्ट|तेज़ जवाब और सही समय पर मानव हस्तांतरण।',
      'AI सेल्स|ग्राहक की रुचि अधिक होने पर अवसर पकड़ता है।',
      'CRM और ऑटोमेशन|बातचीत, सिस्टम और टीम के बीच जानकारी को चलाता रहता है।',
      'एनालिटिक्स और रिपोर्टिंग|एक्टिविटी को साफ़ बिज़नेस जानकारी में बदलता है।',
    ],
    togetherTitle: 'छह अलग टूल नहीं, एक बुद्धिमान लेयर।',
    customTitle: 'हर व्यवसाय को एक जैसा ऑटोमेशन नहीं चाहिए।',
    customText:
      'KONARA समस्या, customer journey और मौजूदा सिस्टम से शुरू करता है और उसके अनुसार सही workflow बनाता है।',
  },

  services: {
    eyebrow: 'KONARA सेवाएँ',
    hero: 'आपके व्यवसाय के आसपास|बनाया गया ऑटोमेशन।',
    text: 'हर implementation बिज़नेस समस्या, customer journey और उस परिणाम से शुरू होता है जिसे बेहतर करना है।',
    cards: [
      'AI रिसेप्शनिस्ट|आपके ज्ञान, tone और handover rules के अनुसार customer communication.',
      'Lead Automation|कम प्रशासन के साथ अवसर capture, qualify और route करता है।',
      'Smart Booking|ग्राहक को enquiry से confirmed appointment तक ले जाता है।',
      'Customer Support|आम requests जल्दी संभालता है और human escalation उपलब्ध रखता है।',
      'Business Integrations|AI workflow को आपके existing systems से जोड़ता है।',
      'Analytics|Customer और operational activity को साफ़ information में बदलता है।',
    ],
    processTitle: 'समस्या से काम करने वाले सिस्टम तक एक स्पष्ट रास्ता।',
    process: [
      'खोजें|बिज़नेस और automation opportunity को समझें।',
      'डिज़ाइन|Experience, logic, information और handover map करें।',
      'बनाएँ|Real process के आसपास AI workflow बनाएँ।',
      'टेस्ट|Conversations, edge cases और business rules टेस्ट करें।',
      'लॉन्च|Controlled rollout और clear ownership के साथ deploy करें।',
      'सुधारें|Real usage और feedback से optimize करें।',
    ],
    existingTitle: 'जो टूल पहले से काम करते हैं उन्हें बनाए रखें।',
    existingText:
      'KONARA उन systems, लोगों और processes के आसपास फिट होता है जिन पर आपका बिज़नेस पहले से भरोसा करता है।',
    afterTitle: 'लॉन्च शुरुआत है, अंत नहीं।',
    afterText:
      'Real usage नए सवाल, edge cases और सुधार के बेहतर अवसर दिखाता है।',
  },

  about: {
    eyebrow: 'KONARA के बारे में',
    hero: 'बिज़नेस करने के|स्मार्ट तरीके बना रहे हैं।',
    text: 'KONARA practical artificial intelligence पर केंद्रित है जो communication सुधारता है, repetitive work कम करता है और businesses को अधिक efficiently काम करने में मदद करता है।',
    whyTitle: 'Technology को काम कम करना चाहिए, बढ़ाना नहीं।',
    whyText:
      'KONARA की स्थापना 2026 में इस विचार से हुई कि AI communication, decisions और action को चुपचाप जोड़ सके — useful automation आज और KONARA OS कल।',
    principlesTitle: 'उपयोगी बनाओ। साफ़ रखो। भरोसा कमाओ।',
    principles: [
      'Innovation|नई technology वहीं उपयोग करें जहाँ real value बनती है।',
      'Simplicity|Complex systems users के लिए simple महसूस होने चाहिए।',
      'Trust|Automation में business और customers का control बना रहना चाहिए।',
      'Excellence|हर detail experience की quality में योगदान देता है।',
      'Customer Success|Technology तब मायने रखती है जब business को बेहतर result मिले।',
    ],
    timeline: [
      'Foundation|Focused AI workflows और customer automation.',
      'Connected Intelligence|अधिक systems एक साथ एक system की तरह काम करें।',
      'KONARA OS|Modern business के लिए unified intelligent operating layer.',
    ],
  },

  contact: {
    eyebrow: 'KONARA से संपर्क',
    hero: 'बिज़नेस समस्या|से शुरू करें।',
    text: 'हमें बताइए आप क्या सुधारना चाहते हैं और हम देखेंगे कि AI workflow प्रक्रिया को तेज़, साफ़ या आसान बना सकता है या नहीं।',
    directTitle: 'KONARA से बात करें।',
    directText:
      'Business conversation के लिए personalized demo सबसे अच्छा starting point है।',
    name: 'पूरा नाम',
    email: 'बिज़नेस ईमेल',
    business: 'बिज़नेस',
    message: 'संदेश',
    send: 'संदेश भेजें',
  },

  demo: {
    eyebrow: 'डेमो बुक करें',
    hero: 'देखें KONARA आपके व्यवसाय|के लिए क्या कर सकता है।',
    text: 'अपने बिज़नेस और उस workflow के बारे में बताइए जिसे आप सुधारना चाहते हैं, फिर demo time चुनें।',
    phone: 'फ़ोन',
    industry: 'इंडस्ट्री',
    improve: 'आप क्या automate या improve करना चाहते हैं?',
    request: 'डेमो अनुरोध करें',
    chooseTime: 'अपना demo time चुनें।',
  },

  assistant: {
    welcome: 'KONARA में आपका स्वागत है',
    title: 'बिज़नेस को अधिक intelligent बनाने के लिए बनाया गया।',
    text: 'KONARA की स्थापना 2026 में practical AI systems बनाने के लिए हुई जो businesses को faster respond करने, more opportunities capture करने और repetitive work कम करने में मदद करें।',
    continue: 'जारी रखें',
    menuTitle: 'KONARA को अपने तरीके से explore करें।',
    explore: 'समाधान देखें',
    demo: 'डेमो बुक करें',
    ask: 'KONARA से पूछें',
    voiceTitle: 'Voiceflow यहाँ connect होता है।',
    voiceText:
      'यह area live KONARA assistant के लिए तैयार है जो enquiries का जवाब दे सकता है, leads qualify कर सकता है और bookings guide कर सकता है।',
    help: 'मदद लें',
  },

  footer: {
    tagline: 'आधुनिक व्यवसायों के लिए AI समाधान।',
    vision: 'KONARA OS',
    founded: '2026 में स्थापित',
  },
};

const UR: CopyPack = {
  nav: ['ہوم', 'حل', 'خدمات', 'ہمارے بارے میں', 'رابطہ', 'ڈیمو بک کریں'],

  common: {
    book: 'ڈیمو بک کریں',
    explore: 'حل دیکھیں',
    region: 'علاقہ',
    language: 'زبان',
    otherLanguage: 'دوسری زبان منتخب کریں',
    keepRegion: 'یہ علاقہ برقرار رکھیں',
    required: 'براہ کرم تمام ضروری خانے مکمل کریں۔',
    invalidEmail: 'براہ کرم درست ای میل ایڈریس درج کریں۔',
    wrongPassword: 'غلط پاس ورڈ۔',
    locked: 'بہت زیادہ کوششیں۔ بعد میں دوبارہ کوشش کریں۔',
    granted: 'رسائی منظور ہوگئی۔',
  },

  coming: {
    eyebrow: 'کاروباری آٹومیشن کا مستقبل',
    hero: 'کچھ ذہین|آ رہا ہے۔',
    text: 'KONARA کسٹمر گفتگو اور کاروباری کارروائی کے درمیان ایک ذہین تہہ بنا رہا ہے — تیز جوابات، واضح workflows اور ایک ساتھ کام کرنے والے نظام۔',
    building: 'ہم کاروباری آٹومیشن کی اگلی نسل بنا رہے ہیں',
    founderAccess: 'بانی کی رسائی',
    founderTitle: 'بانی کی رسائی',
    founderText:
      'KONARA کی نجی ویب سائٹ کھولنے کے لیے بانی کا پاس ورڈ درج کریں۔',
    password: 'بانی کا پاس ورڈ',
    enter: 'پری ویو کھولیں',
  },

  home: {
    eyebrow: 'جدید کاروبار کے لیے AI آٹومیشن',
    hero: 'AI حل|جو آپ کے لیے کام کریں۔',
    text: 'KONARA ذہین نظام بناتا ہے جو کاروبار کو تیزی سے جواب دینے، زیادہ مواقع حاصل کرنے اور بار بار ہونے والے کام کو خودکار بنانے میں مدد دیتے ہیں۔',
    challengeTitle:
      'آپ کے کاروبار کو بار بار ہونے والے کام کی وجہ سے مواقع نہیں کھونے چاہئیں۔',
    challenges: [
      'چھوٹی ہوئی پوچھ گچھ|کسٹمر کو جواب کے لیے انتظار نہیں کرنا چاہیے۔',
      'دستی انتظام|بار بار کے کام لوگوں کو زیادہ اہم کام سے دور کرتے ہیں۔',
      'سست جواب|آج کے کسٹمر تیز اور مستقل رابطے کی توقع کرتے ہیں۔',
      'الگ workflows|اہم معلومات کو کاروبار میں آسانی سے چلنا چاہیے۔',
    ],
    solutionTitle: 'نتائج کے لیے بنائی گئی آٹومیشن۔',
    solutions: [
      'AI ریسپشنسٹ|سوالات کا جواب دیتا ہے، نیت سمجھتا ہے اور 24/7 درخواستیں سنبھالتا ہے۔',
      'اسمارٹ بکنگ|دلچسپی کو پکی ملاقاتوں میں بدلتا ہے۔',
      'کسٹمر سپورٹ|عام مسائل جلد حل کرتا ہے اور ضرورت پڑنے پر انسان کو منتقل کرتا ہے۔',
    ],
    howTitle: 'گفتگو سے کارروائی تک۔',
    steps: [
      'کنیکٹ|کسٹمر آپ کے کاروبار سے رابطہ کرتا ہے۔',
      'سمجھیں|KONARA سوال، نیت اور سیاق سمجھتا ہے۔',
      'آٹومیٹ|صحیح workflow، lead یا booking process شروع ہوتا ہے۔',
      'ڈیلیور|کسٹمر کو تیز سروس اور ٹیم کو منظم معلومات ملتی ہیں۔',
    ],
    liveTitle: 'آپ کا کاروبار۔ 24/7 دستیاب۔',
    liveText:
      'کسٹمر کو سوالات، leads، booking اور support کے لیے ایک ذہین پہلا رابطہ دیں۔',
    osTitle: 'آپ کے کاروبار کے لیے ایک ذہین نظام۔',
    osText:
      'KONARA OS ہماری طویل مدتی سوچ ہے جس میں communication، CRM، booking، workflows اور analytics کو ایک جگہ جوڑا جائے۔',
    ctaTitle: 'زیادہ ذہین آٹومیشن کے لیے تیار ہیں؟',
    ctaText:
      'دیکھیں KONARA وقت بچانے، کسٹمر رابطہ بہتر کرنے اور بہتر ڈیجیٹل تجربہ بنانے میں کیسے مدد کر سکتا ہے۔',
  },

  solutions: {
    eyebrow: 'KONARA حل',
    hero: 'حقیقی کاروبار کے لیے|بنایا گیا AI.',
    text: 'Communication، workflow اور روزمرہ آپریشن کو خودکار بنانے کے لیے ذہین حل۔',
    products: [
      'AI ریسپشنسٹ|کسٹمر رابطہ ہر وقت دستیاب۔',
      'اسمارٹ بکنگ|گفتگو کو پکی ملاقاتوں میں بدلتا ہے۔',
      'کسٹمر سپورٹ|تیز جواب اور مناسب انسانی منتقلی۔',
      'AI سیلز|کسٹمر کی دلچسپی زیادہ ہو تو مواقع حاصل کرتا ہے۔',
      'CRM اور آٹومیشن|گفتگو، نظام اور ٹیموں کے درمیان معلومات کو حرکت میں رکھتا ہے۔',
      'Analytics اور Reporting|سرگرمی کو واضح کاروباری معلومات میں بدلتا ہے۔',
    ],
    togetherTitle: 'چھ الگ tools نہیں، ایک ذہین layer.',
    customTitle: 'ہر کاروبار کو ایک جیسی آٹومیشن کی ضرورت نہیں ہوتی۔',
    customText:
      'KONARA مسئلے، customer journey اور موجودہ systems سے شروع کرتا ہے اور ان کے مطابق درست workflow بناتا ہے۔',
  },

  services: {
    eyebrow: 'KONARA خدمات',
    hero: 'آپ کے کاروبار کے مطابق|بنائی گئی آٹومیشن۔',
    text: 'ہر implementation کاروباری مسئلے، customer journey اور اس نتیجے سے شروع ہوتی ہے جسے بہتر کرنا ہو۔',
    cards: [
      'AI ریسپشنسٹ|آپ کے علم، tone اور handover rules کے مطابق customer communication.',
      'Lead Automation|کم انتظام کے ساتھ مواقع capture، qualify اور route کرتا ہے۔',
      'Smart Booking|کسٹمر کو enquiry سے confirmed appointment تک لے جاتا ہے۔',
      'Customer Support|عام requests جلد سنبھالتا ہے اور human escalation برقرار رکھتا ہے۔',
      'Business Integrations|AI workflows کو موجودہ systems سے جوڑتا ہے۔',
      'Analytics|Customer اور operational activity کو زیادہ واضح information میں بدلتا ہے۔',
    ],
    processTitle: 'مسئلے سے کام کرنے والے نظام تک واضح راستہ۔',
    process: [
      'دریافت|کاروبار اور automation opportunity سمجھیں۔',
      'ڈیزائن|Experience، logic، information اور handover map کریں۔',
      'بنائیں|حقیقی process کے مطابق AI workflow بنائیں۔',
      'ٹیسٹ|Conversations، edge cases اور business rules ٹیسٹ کریں۔',
      'لانچ|Controlled rollout اور clear ownership کے ساتھ deploy کریں۔',
      'بہتر کریں|Real usage اور feedback سے optimize کریں۔',
    ],
    existingTitle: 'وہ tools برقرار رکھیں جو پہلے سے کام کر رہے ہیں۔',
    existingText:
      'KONARA ان systems، لوگوں اور processes کے مطابق کام کرتا ہے جن پر آپ کا کاروبار پہلے سے اعتماد کرتا ہے۔',
    afterTitle: 'لانچ آغاز ہے، اختتام نہیں۔',
    afterText:
      'حقیقی استعمال نئے سوالات، exceptions اور بہتری کے مزید مواقع دکھاتا ہے۔',
  },

  about: {
    eyebrow: 'KONARA کے بارے میں',
    hero: 'کاروبار کے لیے|زیادہ ذہین طریقے۔',
    text: 'KONARA practical artificial intelligence پر توجہ دیتا ہے جو communication بہتر کرتا ہے، بار بار کے کام کم کرتا ہے اور کاروبار کو زیادہ مؤثر بناتا ہے۔',
    whyTitle: 'Technology کو کام کم کرنا چاہیے، بڑھانا نہیں۔',
    whyText:
      'KONARA کی بنیاد 2026 میں اس خیال پر رکھی گئی کہ AI communication، decisions اور action کو خاموشی سے جوڑے — آج useful automation اور کل KONARA OS.',
    principlesTitle: 'فائدہ مند بنائیں۔ واضح رہیں۔ اعتماد حاصل کریں۔',
    principles: [
      'Innovation|نئی technology وہاں استعمال کریں جہاں حقیقی value بنے۔',
      'Simplicity|Complex systems users کے لیے simple محسوس ہونے چاہئیں۔',
      'Trust|Automation میں business اور customers کا control برقرار رہنا چاہیے۔',
      'Excellence|ہر detail experience کی quality بہتر بناتا ہے۔',
      'Customer Success|Technology تب اہم ہے جب business کو بہتر result ملے۔',
    ],
    timeline: [
      'Foundation|Focused AI workflows اور customer automation.',
      'Connected Intelligence|مزید systems ایک unit کی طرح مل کر کام کریں۔',
      'KONARA OS|Modern business کے لیے unified intelligent operating layer.',
    ],
  },

  contact: {
    eyebrow: 'KONARA سے رابطہ',
    hero: 'کاروباری مسئلے|سے شروع کریں۔',
    text: 'ہمیں بتائیں آپ کیا بہتر کرنا چاہتے ہیں اور ہم دیکھیں گے کہ AI workflow process کو تیز، واضح یا آسان بنا سکتا ہے یا نہیں۔',
    directTitle: 'KONARA سے بات کریں۔',
    directText:
      'Business conversation کے لیے personalized demo بہترین starting point ہے۔',
    name: 'پورا نام',
    email: 'کاروباری ای میل',
    business: 'کاروبار',
    message: 'پیغام',
    send: 'پیغام بھیجیں',
  },

  demo: {
    eyebrow: 'ڈیمو بک کریں',
    hero: 'دیکھیں KONARA آپ کے کاروبار|کے لیے کیا کر سکتا ہے۔',
    text: 'اپنے کاروبار اور اس workflow کے بارے میں بتائیں جسے آپ بہتر کرنا چاہتے ہیں، پھر demo time منتخب کریں۔',
    phone: 'فون',
    industry: 'انڈسٹری',
    improve: 'آپ کیا automate یا improve کرنا چاہتے ہیں؟',
    request: 'ڈیمو کی درخواست کریں',
    chooseTime: 'اپنا demo time منتخب کریں۔',
  },

  assistant: {
    welcome: 'KONARA میں خوش آمدید',
    title: 'کاروبار کو زیادہ ذہین بنانے کے لیے تیار کیا گیا۔',
    text: 'KONARA کی بنیاد 2026 میں practical AI systems بنانے کے لیے رکھی گئی جو کاروبار کو تیزی سے جواب دینے، زیادہ مواقع حاصل کرنے اور repetitive work کم کرنے میں مدد دیں۔',
    continue: 'جاری رکھیں',
    menuTitle: 'KONARA کو اپنے انداز میں explore کریں۔',
    explore: 'حل دیکھیں',
    demo: 'ڈیمو بک کریں',
    ask: 'KONARA سے پوچھیں',
    voiceTitle: 'Voiceflow یہاں connect ہوتا ہے۔',
    voiceText:
      'یہ جگہ live KONARA assistant کے لیے تیار ہے جو enquiries کا جواب دے سکتا ہے، leads qualify کر سکتا ہے اور bookings guide کر سکتا ہے۔',
    help: 'مدد حاصل کریں',
  },

  footer: {
    tagline: 'جدید کاروبار کے لیے AI حل۔',
    vision: 'KONARA OS',
    founded: '2026 میں قائم ہوا',
  },
};

const BN: CopyPack = {
  nav: ['হোম', 'সমাধান', 'সেবা', 'আমাদের সম্পর্কে', 'যোগাযোগ', 'ডেমো বুক করুন'],

  common: {
    book: 'ডেমো বুক করুন',
    explore: 'সমাধান দেখুন',
    region: 'অঞ্চল',
    language: 'ভাষা',
    otherLanguage: 'অন্য ভাষা বেছে নিন',
    keepRegion: 'এই অঞ্চল রাখুন',
    required: 'সব আবশ্যিক ঘর পূরণ করুন।',
    invalidEmail: 'সঠিক ইমেইল ঠিকানা দিন।',
    wrongPassword: 'ভুল পাসওয়ার্ড।',
    locked: 'অনেকবার চেষ্টা করা হয়েছে। পরে আবার চেষ্টা করুন।',
    granted: 'অ্যাক্সেস অনুমোদিত।',
  },

  coming: {
    eyebrow: 'ব্যবসায়িক অটোমেশনের ভবিষ্যৎ',
    hero: 'বুদ্ধিমান কিছু|আসছে।',
    text: 'KONARA গ্রাহক কথোপকথন এবং ব্যবসায়িক পদক্ষেপের মাঝে একটি বুদ্ধিমান স্তর তৈরি করছে — দ্রুত উত্তর, পরিষ্কার workflow এবং একসঙ্গে কাজ করা সিস্টেম।',
    building: 'আমরা পরবর্তী প্রজন্মের ব্যবসায়িক অটোমেশন তৈরি করছি',
    founderAccess: 'প্রতিষ্ঠাতা অ্যাক্সেস',
    founderTitle: 'প্রতিষ্ঠাতা অ্যাক্সেস',
    founderText:
      'KONARA-এর ব্যক্তিগত সাইটে যেতে প্রতিষ্ঠাতার পাসওয়ার্ড লিখুন।',
    password: 'প্রতিষ্ঠাতার পাসওয়ার্ড',
    enter: 'প্রিভিউ খুলুন',
  },

  home: {
    eyebrow: 'আধুনিক ব্যবসার জন্য AI অটোমেশন',
    hero: 'AI সমাধান|যা আপনার জন্য কাজ করে।',
    text: 'KONARA বুদ্ধিমান সিস্টেম তৈরি করে যা ব্যবসাকে দ্রুত উত্তর দিতে, আরও সুযোগ ধরতে এবং পুনরাবৃত্ত কাজ অটোমেট করতে সাহায্য করে।',
    challengeTitle:
      'পুনরাবৃত্ত কাজের কারণে আপনার ব্যবসার সুযোগ হারানো উচিত নয়।',
    challenges: [
      'হারানো অনুসন্ধান|গ্রাহকদের উত্তরের জন্য অপেক্ষা করা উচিত নয়।',
      'ম্যানুয়াল প্রশাসন|পুনরাবৃত্ত কাজ মানুষকে বেশি মূল্যবান কাজ থেকে দূরে রাখে।',
      'ধীর উত্তর|আধুনিক গ্রাহক দ্রুত ও ধারাবাহিক যোগাযোগ আশা করে।',
      'বিচ্ছিন্ন workflow|গুরুত্বপূর্ণ তথ্য ব্যবসার মধ্যে সহজে চলা উচিত।',
    ],
    solutionTitle: 'ফলাফলের জন্য তৈরি অটোমেশন।',
    solutions: [
      'AI রিসেপশনিস্ট|প্রশ্নের উত্তর দেয়, উদ্দেশ্য বোঝে এবং ২৪/৭ অনুসন্ধান পরিচালনা করে।',
      'স্মার্ট বুকিং|আগ্রহকে নিশ্চিত অ্যাপয়েন্টমেন্টে রূপান্তর করে।',
      'কাস্টমার সাপোর্ট|সাধারণ অনুরোধ দ্রুত সমাধান করে এবং প্রয়োজন হলে মানুষের কাছে দেয়।',
    ],
    howTitle: 'কথোপকথন থেকে পদক্ষেপে।',
    steps: [
      'সংযোগ|একজন গ্রাহক আপনার ব্যবসার সাথে যোগাযোগ করে।',
      'বোঝা|KONARA প্রশ্ন, উদ্দেশ্য এবং প্রেক্ষাপট বোঝে।',
      'অটোমেশন|সঠিক workflow, lead বা booking process শুরু হয়।',
      'ডেলিভারি|গ্রাহক দ্রুত সেবা পায় এবং দল সংগঠিত তথ্য পায়।',
    ],
    liveTitle: 'আপনার ব্যবসা। ২৪/৭ উপলব্ধ।',
    liveText:
      'প্রশ্ন, lead, booking এবং support-এর জন্য গ্রাহকদের একটি বুদ্ধিমান প্রথম যোগাযোগ দিন।',
    osTitle: 'আপনার ব্যবসার জন্য একটি বুদ্ধিমান সিস্টেম।',
    osText:
      'KONARA OS হলো communication, CRM, booking, workflow এবং analytics একত্র করার আমাদের দীর্ঘমেয়াদি ভিশন।',
    ctaTitle: 'আরও স্মার্ট অটোমেশনের জন্য প্রস্তুত?',
    ctaText:
      'দেখুন KONARA কীভাবে সময় বাঁচাতে, গ্রাহক যোগাযোগ উন্নত করতে এবং ভালো ডিজিটাল অভিজ্ঞতা তৈরি করতে সাহায্য করতে পারে।',
  },

  solutions: {
    eyebrow: 'KONARA সমাধান',
    hero: 'বাস্তব ব্যবসার জন্য|তৈরি AI.',
    text: 'Communication, workflow এবং দৈনন্দিন কাজ অটোমেট করার জন্য বুদ্ধিমান সমাধান।',
    products: [
      'AI রিসেপশনিস্ট|সব সময় উপলব্ধ গ্রাহক যোগাযোগ।',
      'স্মার্ট বুকিং|কথোপকথনকে নিশ্চিত অ্যাপয়েন্টমেন্টে রূপান্তর করে।',
      'কাস্টমার সাপোর্ট|দ্রুত উত্তর এবং সঠিক human handover.',
      'AI Sales|গ্রাহকের আগ্রহ বেশি থাকলে সুযোগ ধরে।',
      'CRM এবং Automation|কথোপকথন, system এবং team-এর মধ্যে তথ্য চলমান রাখে।',
      'Analytics এবং Reporting|Activity-কে পরিষ্কার business information-এ রূপান্তর করে।',
    ],
    togetherTitle: 'ছয়টি আলাদা tool নয়, একটি intelligent layer.',
    customTitle: 'প্রতিটি ব্যবসার একই ধরনের automation দরকার হয় না।',
    customText:
      'KONARA সমস্যা, customer journey এবং existing system থেকে শুরু করে সঠিক workflow তৈরি করে।',
  },

  services: {
    eyebrow: 'KONARA সেবা',
    hero: 'আপনার ব্যবসাকে ঘিরে|তৈরি অটোমেশন।',
    text: 'প্রতিটি implementation business problem, customer journey এবং উন্নত করার ফলাফল দিয়ে শুরু হয়।',
    cards: [
      'AI রিসেপশনিস্ট|আপনার knowledge, tone এবং handover rules অনুযায়ী customer communication.',
      'Lead Automation|কম administration দিয়ে সুযোগ capture, qualify এবং route করে।',
      'Smart Booking|গ্রাহককে enquiry থেকে confirmed appointment পর্যন্ত নিয়ে যায়।',
      'Customer Support|সাধারণ request দ্রুত handle করে এবং human escalation রাখে।',
      'Business Integrations|AI workflow-কে আপনার existing system-এর সাথে যুক্ত করে।',
      'Analytics|Customer এবং operational activity-কে পরিষ্কার information-এ রূপান্তর করে।',
    ],
    processTitle: 'সমস্যা থেকে কার্যকর সিস্টেম পর্যন্ত পরিষ্কার পথ।',
    process: [
      'আবিষ্কার|Business এবং automation opportunity বুঝুন।',
      'ডিজাইন|Experience, logic, information এবং handover map করুন।',
      'তৈরি|Real process ঘিরে AI workflow তৈরি করুন।',
      'টেস্ট|Conversation, edge case এবং business rule পরীক্ষা করুন।',
      'লঞ্চ|Controlled rollout এবং clear ownership দিয়ে deploy করুন।',
      'উন্নতি|Real usage এবং feedback দিয়ে optimize করুন।',
    ],
    existingTitle: 'যে tools ইতিমধ্যে কাজ করে সেগুলো রাখুন।',
    existingText:
      'KONARA আপনার ব্যবসার trusted system, people এবং process-এর সাথে মানিয়ে চলে।',
    afterTitle: 'লঞ্চ শুরু, শেষ নয়।',
    afterText: 'Real usage নতুন প্রশ্ন, edge case এবং উন্নতির সুযোগ দেখায়।',
  },

  about: {
    eyebrow: 'KONARA সম্পর্কে',
    hero: 'ব্যবসা করার আরও স্মার্ট|পদ্ধতি তৈরি করছি।',
    text: 'KONARA practical artificial intelligence-এর উপর কাজ করে যা communication উন্নত করে, repetitive work কমায় এবং business-কে efficient করে।',
    whyTitle: 'Technology-এর কাজ কমানো উচিত, বাড়ানো নয়।',
    whyText:
      'KONARA ২০২৬ সালে এই ধারণা নিয়ে প্রতিষ্ঠিত হয় যে AI communication, decision এবং action-কে নীরবে যুক্ত করবে — useful automation আজ এবং KONARA OS আগামীকাল।',
    principlesTitle:
      'উপকারী কিছু তৈরি করুন। পরিষ্কার রাখুন। বিশ্বাস অর্জন করুন।',
    principles: [
      'Innovation|নতুন technology সেখানে ব্যবহার করুন যেখানে real value তৈরি হয়।',
      'Simplicity|Complex system user-এর জন্য simple মনে হওয়া উচিত।',
      'Trust|Automation-এ business এবং customer-এর control বজায় থাকতে হবে।',
      'Excellence|প্রতিটি detail experience-এর quality উন্নত করে।',
      'Customer Success|Technology তখনই গুরুত্বপূর্ণ যখন business ভালো ফল পায়।',
    ],
    timeline: [
      'Foundation|Focused AI workflow এবং customer automation.',
      'Connected Intelligence|আরও system একসাথে একটি system-এর মতো কাজ করে।',
      'KONARA OS|Modern business-এর জন্য unified intelligent operating layer.',
    ],
  },

  contact: {
    eyebrow: 'KONARA যোগাযোগ',
    hero: 'Business problem|দিয়ে শুরু করুন।',
    text: 'আপনি কী উন্নত করতে চান তা বলুন এবং আমরা দেখব AI workflow process-কে দ্রুত, পরিষ্কার বা সহজ করতে পারে কি না।',
    directTitle: 'KONARA-এর সাথে কথা বলুন।',
    directText:
      'Business conversation-এর জন্য customized demo সবচেয়ে ভালো starting point.',
    name: 'পূর্ণ নাম',
    email: 'ব্যবসায়িক ইমেইল',
    business: 'ব্যবসা',
    message: 'বার্তা',
    send: 'বার্তা পাঠান',
  },

  demo: {
    eyebrow: 'ডেমো বুক করুন',
    hero: 'দেখুন KONARA আপনার ব্যবসার জন্য|কী করতে পারে।',
    text: 'আপনার business এবং যে workflow উন্নত করতে চান তা বলুন, তারপর demo time বেছে নিন।',
    phone: 'ফোন',
    industry: 'ইন্ডাস্ট্রি',
    improve: 'আপনি কী automate বা improve করতে চান?',
    request: 'ডেমো অনুরোধ করুন',
    chooseTime: 'আপনার demo time বেছে নিন।',
  },

  assistant: {
    welcome: 'KONARA-তে স্বাগতম',
    title: 'Business-কে smarter করতে তৈরি।',
    text: 'KONARA ২০২৬ সালে practical AI system তৈরি করতে প্রতিষ্ঠিত হয় যা business-কে দ্রুত উত্তর দিতে, বেশি সুযোগ ধরতে এবং repetitive work কমাতে সাহায্য করে।',
    continue: 'চালিয়ে যান',
    menuTitle: 'KONARA আপনার মতো করে explore করুন।',
    explore: 'সমাধান দেখুন',
    demo: 'ডেমো বুক করুন',
    ask: 'KONARA-কে জিজ্ঞাসা করুন',
    voiceTitle: 'Voiceflow এখানে connect হয়।',
    voiceText:
      'এই area live KONARA assistant-এর জন্য প্রস্তুত যা enquiry answer, lead qualify এবং booking guide করতে পারে।',
    help: 'সহায়তা নিন',
  },

  footer: {
    tagline: 'আধুনিক ব্যবসার জন্য AI সমাধান।',
    vision: 'KONARA OS',
    founded: '২০২৬ সালে প্রতিষ্ঠিত',
  },
};

const MS: CopyPack = {
  nav: [
    'Utama',
    'Penyelesaian',
    'Perkhidmatan',
    'Tentang Kami',
    'Hubungi',
    'Tempah Demo',
  ],

  common: {
    book: 'Tempah Demo',
    explore: 'Teroka Penyelesaian',
    region: 'Wilayah',
    language: 'Bahasa',
    otherLanguage: 'Pilih bahasa lain',
    keepRegion: 'Kekalkan wilayah ini',
    required: 'Sila lengkapkan semua medan wajib.',
    invalidEmail: 'Sila masukkan alamat e-mel yang sah.',
    wrongPassword: 'Kata laluan salah.',
    locked: 'Terlalu banyak percubaan. Cuba lagi kemudian.',
    granted: 'Akses diberikan.',
  },

  coming: {
    eyebrow: 'MASA DEPAN AUTOMASI PERNIAGAAN',
    hero: 'Sesuatu yang pintar|sedang tiba.',
    text: 'KONARA membina lapisan pintar antara perbualan pelanggan dan tindakan perniagaan — respons lebih pantas, aliran kerja lebih jelas dan sistem yang direka untuk bekerjasama.',
    building: 'MEMBINA GENERASI SETERUSNYA AUTOMASI PERNIAGAAN',
    founderAccess: 'Akses Pengasas',
    founderTitle: 'Akses Pengasas',
    founderText:
      'Masukkan kata laluan pengasas untuk membuka laman peribadi KONARA.',
    password: 'Kata laluan pengasas',
    enter: 'Buka Pratonton',
  },

  home: {
    eyebrow: 'AUTOMASI AI UNTUK PERNIAGAAN MODEN',
    hero: 'Penyelesaian AI|yang bekerja untuk anda.',
    text: 'KONARA membina sistem pintar yang membantu perniagaan memberi respons lebih cepat, menangkap lebih banyak peluang dan mengautomasikan kerja berulang.',
    challengeTitle:
      'Perniagaan anda tidak sepatutnya kehilangan peluang kerana kerja berulang.',
    challenges: [
      'Pertanyaan terlepas|Pelanggan tidak seharusnya menunggu jawapan.',
      'Pentadbiran manual|Tugas berulang mengambil masa daripada kerja bernilai lebih tinggi.',
      'Respons lambat|Pelanggan moden menjangkakan komunikasi pantas dan konsisten.',
      'Aliran kerja terpisah|Maklumat penting harus bergerak lancar melalui perniagaan.',
    ],
    solutionTitle: 'Automasi dibina berdasarkan hasil.',
    solutions: [
      'Penyambut Tetamu AI|Menjawab soalan, memahami niat dan mengurus pertanyaan 24/7.',
      'Tempahan Pintar|Menukar minat menjadi janji temu yang disahkan.',
      'Sokongan Pelanggan|Menyelesaikan permintaan biasa dengan cepat dan menyerahkan kepada manusia apabila perlu.',
    ],
    howTitle: 'Daripada perbualan kepada tindakan.',
    steps: [
      'Sambung|Pelanggan berinteraksi dengan perniagaan anda.',
      'Fahami|KONARA memahami soalan, niat dan konteks.',
      'Automasi|Workflow, lead atau proses tempahan yang betul dicetuskan.',
      'Sampaikan|Pelanggan mendapat perkhidmatan pantas dan pasukan mendapat maklumat berstruktur.',
    ],
    liveTitle: 'Perniagaan anda. Tersedia 24/7.',
    liveText:
      'Berikan pelanggan titik hubungan pertama yang pintar untuk soalan, lead, tempahan dan sokongan.',
    osTitle: 'Satu sistem pintar untuk perniagaan anda.',
    osText:
      'KONARA OS ialah visi jangka panjang kami untuk menggabungkan komunikasi, CRM, tempahan, workflow dan analitik.',
    ctaTitle: 'Bersedia untuk automasi yang lebih pintar?',
    ctaText:
      'Ketahui bagaimana KONARA boleh menjimatkan masa, meningkatkan komunikasi pelanggan dan mencipta pengalaman digital yang lebih baik.',
  },

  solutions: {
    eyebrow: 'PENYELESAIAN KONARA',
    hero: 'AI dibina untuk|perniagaan sebenar.',
    text: 'Penyelesaian pintar untuk mengautomasikan komunikasi, workflow dan operasi harian.',
    products: [
      'Penyambut Tetamu AI|Komunikasi pelanggan yang sentiasa tersedia.',
      'Tempahan Pintar|Menukar perbualan kepada janji temu yang disahkan.',
      'Sokongan Pelanggan|Jawapan pantas dengan penyerahan manusia yang terancang.',
      'Jualan AI|Menangkap peluang ketika minat pelanggan tinggi.',
      'CRM & Automasi|Memastikan maklumat bergerak antara perbualan, sistem dan pasukan.',
      'Analitik & Pelaporan|Menukar aktiviti menjadi maklumat perniagaan yang lebih jelas.',
    ],
    togetherTitle: 'Satu lapisan pintar, bukan enam alat yang terpisah.',
    customTitle: 'Tidak semua perniagaan memerlukan automasi yang sama.',
    customText:
      'KONARA bermula dengan masalah, perjalanan pelanggan dan sistem sedia ada sebelum membina workflow yang tepat.',
  },

  services: {
    eyebrow: 'PERKHIDMATAN KONARA',
    hero: 'Automasi dibina mengikut|perniagaan anda.',
    text: 'Setiap pelaksanaan bermula dengan masalah perniagaan, perjalanan pelanggan dan hasil yang perlu diperbaiki.',
    cards: [
      'Penyambut Tetamu AI|Komunikasi mengikut pengetahuan, nada dan peraturan penyerahan perniagaan anda.',
      'Automasi Lead|Menangkap, menilai dan menghalakan peluang dengan kurang pentadbiran.',
      'Tempahan Pintar|Membawa pelanggan daripada pertanyaan kepada janji temu yang disahkan.',
      'Sokongan Pelanggan|Mengendalikan permintaan biasa dengan cepat dan mengekalkan eskalasi manusia.',
      'Integrasi Perniagaan|Menghubungkan workflow AI dengan sistem yang anda sudah gunakan.',
      'Analitik|Menukar aktiviti pelanggan dan operasi menjadi maklumat lebih jelas.',
    ],
    processTitle:
      'Laluan yang jelas daripada masalah kepada sistem yang berfungsi.',
    process: [
      'Temui|Fahami perniagaan dan peluang automasi.',
      'Reka|Petakan pengalaman, logik, maklumat dan penyerahan.',
      'Bina|Cipta workflow AI di sekeliling proses sebenar.',
      'Uji|Uji perbualan, kes khas dan peraturan perniagaan.',
      'Lancar|Laksanakan secara terkawal dengan tanggungjawab jelas.',
      'Tingkatkan|Optimumkan berdasarkan penggunaan sebenar dan maklum balas.',
    ],
    existingTitle: 'Kekalkan alat yang sudah berfungsi.',
    existingText:
      'KONARA menyesuaikan diri dengan sistem, manusia dan proses yang dipercayai oleh perniagaan anda.',
    afterTitle: 'Pelancaran ialah permulaan, bukan penamat.',
    afterText:
      'Penggunaan sebenar mendedahkan soalan baharu, kes khas dan peluang penambahbaikan.',
  },

  about: {
    eyebrow: 'TENTANG KONARA',
    hero: 'Membina cara yang lebih pintar|untuk menjalankan perniagaan.',
    text: 'KONARA memberi tumpuan kepada kecerdasan buatan praktikal yang meningkatkan komunikasi, mengurangkan kerja berulang dan membantu perniagaan beroperasi dengan lebih cekap.',
    whyTitle: 'Teknologi sepatutnya mengurangkan kerja, bukan menambahnya.',
    whyText:
      'KONARA diasaskan pada 2026 dengan idea bahawa AI harus menghubungkan komunikasi, keputusan dan tindakan secara senyap — automasi berguna hari ini dan KONARA OS pada masa depan.',
    principlesTitle:
      'Bina sesuatu yang berguna. Kekal jelas. Dapatkan kepercayaan.',
    principles: [
      'Inovasi|Gunakan teknologi baharu apabila ia mencipta nilai sebenar.',
      'Kesederhanaan|Sistem kompleks harus terasa mudah kepada pengguna.',
      'Kepercayaan|Automasi harus mengekalkan kawalan pada perniagaan dan pelanggan.',
      'Kecemerlangan|Setiap perincian menyumbang kepada kualiti pengalaman.',
      'Kejayaan Pelanggan|Teknologi bermakna apabila perniagaan mendapat hasil yang lebih baik.',
    ],
    timeline: [
      'Asas|Workflow AI tertumpu dan automasi pelanggan.',
      'Kecerdasan Bersambung|Lebih banyak sistem bekerja bersama sebagai satu.',
      'KONARA OS|Lapisan operasi pintar bersatu untuk perniagaan moden.',
    ],
  },

  contact: {
    eyebrow: 'HUBUNGI KONARA',
    hero: 'Mulakan dengan|masalah perniagaan.',
    text: 'Beritahu kami apa yang anda mahu perbaiki dan kami boleh menilai sama ada workflow AI boleh menjadikan proses lebih pantas, jelas atau mudah.',
    directTitle: 'Bercakap dengan KONARA.',
    directText:
      'Untuk perbualan perniagaan, demo yang disesuaikan ialah titik permulaan terbaik.',
    name: 'Nama Penuh',
    email: 'E-mel Perniagaan',
    business: 'Perniagaan',
    message: 'Mesej',
    send: 'Hantar Mesej',
  },

  demo: {
    eyebrow: 'TEMPAH DEMO',
    hero: 'Lihat apa yang KONARA boleh lakukan|untuk perniagaan anda.',
    text: 'Beritahu kami tentang perniagaan dan workflow yang anda mahu perbaiki, kemudian pilih waktu demo.',
    phone: 'Telefon',
    industry: 'Industri',
    improve: 'Apa yang anda mahu automasikan atau perbaiki?',
    request: 'Minta Demo',
    chooseTime: 'Pilih waktu demo anda.',
  },

  assistant: {
    welcome: 'SELAMAT DATANG KE KONARA',
    title: 'Dibina untuk menjadikan perniagaan lebih pintar.',
    text: 'KONARA diasaskan pada 2026 untuk membina sistem AI praktikal yang membantu perniagaan bertindak lebih pantas, menangkap lebih banyak peluang dan mengurangkan kerja berulang.',
    continue: 'Teruskan',
    menuTitle: 'Teroka KONARA dengan cara anda.',
    explore: 'Teroka Penyelesaian',
    demo: 'Tempah Demo',
    ask: 'Tanya KONARA',
    voiceTitle: 'Voiceflow disambungkan di sini.',
    voiceText:
      'Ruang ini bersedia untuk pembantu KONARA secara langsung yang boleh menjawab pertanyaan, menilai lead dan membantu tempahan.',
    help: 'Dapatkan Bantuan',
  },

  footer: {
    tagline: 'Penyelesaian AI untuk perniagaan moden.',
    vision: 'KONARA OS',
    founded: 'Diasaskan pada 2026',
  },
};

const ID: CopyPack = {
  nav: ['Beranda', 'Solusi', 'Layanan', 'Tentang', 'Kontak', 'Pesan Demo'],

  common: {
    book: 'Pesan Demo',
    explore: 'Jelajahi Solusi',
    region: 'Wilayah',
    language: 'Bahasa',
    otherLanguage: 'Pilih bahasa lain',
    keepRegion: 'Pertahankan wilayah ini',
    required: 'Lengkapi semua kolom wajib.',
    invalidEmail: 'Masukkan alamat email yang valid.',
    wrongPassword: 'Kata sandi salah.',
    locked: 'Terlalu banyak percobaan. Silakan coba lagi nanti.',
    granted: 'Akses diberikan.',
  },

  coming: {
    eyebrow: 'MASA DEPAN OTOMATISASI BISNIS',
    hero: 'Sesuatu yang cerdas|akan hadir.',
    text: 'KONARA membangun lapisan cerdas antara percakapan pelanggan dan tindakan bisnis — respons lebih cepat, workflow lebih jelas, dan sistem yang dirancang untuk bekerja bersama.',
    building: 'MEMBANGUN GENERASI BERIKUTNYA OTOMATISASI BISNIS',
    founderAccess: 'Akses Pendiri',
    founderTitle: 'Akses Pendiri',
    founderText:
      'Masukkan kata sandi pendiri untuk membuka situs pribadi KONARA.',
    password: 'Kata sandi pendiri',
    enter: 'Buka Pratinjau',
  },

  home: {
    eyebrow: 'OTOMATISASI AI UNTUK BISNIS MODERN',
    hero: 'Solusi AI|yang bekerja untuk Anda.',
    text: 'KONARA membangun sistem cerdas yang membantu bisnis merespons lebih cepat, menangkap lebih banyak peluang, dan mengotomatiskan pekerjaan berulang.',
    challengeTitle:
      'Bisnis Anda tidak seharusnya kehilangan peluang karena pekerjaan berulang.',
    challenges: [
      'Pertanyaan Terlewat|Pelanggan tidak seharusnya menunggu jawaban.',
      'Administrasi Manual|Tugas berulang menghabiskan waktu yang bisa digunakan untuk pekerjaan bernilai lebih tinggi.',
      'Respons Lambat|Pelanggan modern mengharapkan komunikasi yang cepat dan konsisten.',
      'Workflow Terpisah|Informasi penting seharusnya bergerak lancar di seluruh bisnis.',
    ],
    solutionTitle: 'Otomatisasi yang dibangun berdasarkan hasil.',
    solutions: [
      'Resepsionis AI|Menjawab pertanyaan, memahami niat, dan menangani permintaan 24/7.',
      'Pemesanan Cerdas|Mengubah minat menjadi janji temu yang dikonfirmasi.',
      'Dukungan Pelanggan|Menyelesaikan permintaan umum dengan cepat dan meneruskan ke manusia bila diperlukan.',
    ],
    howTitle: 'Dari percakapan ke tindakan.',
    steps: [
      'Terhubung|Pelanggan berinteraksi dengan bisnis Anda.',
      'Memahami|KONARA memahami pertanyaan, niat, dan konteks.',
      'Otomatisasi|Workflow, lead, atau proses booking yang tepat dijalankan.',
      'Hasil|Pelanggan mendapat layanan cepat dan tim mendapat informasi terstruktur.',
    ],
    liveTitle: 'Bisnis Anda. Tersedia 24/7.',
    liveText:
      'Berikan pelanggan titik kontak pertama yang cerdas untuk pertanyaan, lead, booking, dan support.',
    osTitle: 'Satu sistem cerdas untuk bisnis Anda.',
    osText:
      'KONARA OS adalah visi jangka panjang kami untuk menggabungkan komunikasi, CRM, booking, workflow, dan analitik.',
    ctaTitle: 'Siap mengotomatiskan dengan lebih cerdas?',
    ctaText:
      'Temukan bagaimana KONARA dapat menghemat waktu, meningkatkan komunikasi pelanggan, dan menciptakan pengalaman digital yang lebih baik.',
  },

  solutions: {
    eyebrow: 'SOLUSI KONARA',
    hero: 'AI yang dibangun untuk|bisnis nyata.',
    text: 'Solusi cerdas untuk mengotomatiskan komunikasi, workflow, dan operasi harian.',
    products: [
      'Resepsionis AI|Komunikasi pelanggan yang selalu tersedia.',
      'Pemesanan Cerdas|Mengubah percakapan menjadi janji temu yang dikonfirmasi.',
      'Dukungan Pelanggan|Jawaban cepat dengan handover manusia yang tepat.',
      'Penjualan AI|Menangkap peluang ketika minat pelanggan masih tinggi.',
      'CRM & Otomatisasi|Menjaga informasi bergerak di antara percakapan, sistem, dan tim.',
      'Analitik & Pelaporan|Mengubah aktivitas menjadi informasi bisnis yang lebih jelas.',
    ],
    togetherTitle: 'Satu lapisan cerdas, bukan enam alat yang terpisah.',
    customTitle: 'Tidak semua bisnis memerlukan otomatisasi yang sama.',
    customText:
      'KONARA dimulai dari masalah, perjalanan pelanggan, dan sistem yang sudah ada lalu membangun workflow yang tepat.',
  },

  services: {
    eyebrow: 'LAYANAN KONARA',
    hero: 'Otomatisasi yang dibangun sesuai|bisnis Anda.',
    text: 'Setiap implementasi dimulai dari masalah bisnis, perjalanan pelanggan, dan hasil yang perlu ditingkatkan.',
    cards: [
      'Resepsionis AI|Komunikasi berdasarkan pengetahuan, tone, dan aturan handover bisnis Anda.',
      'Otomatisasi Lead|Menangkap, mengkualifikasi, dan mengarahkan peluang dengan lebih sedikit administrasi.',
      'Pemesanan Cerdas|Membawa pelanggan dari pertanyaan hingga janji temu terkonfirmasi.',
      'Dukungan Pelanggan|Menangani permintaan umum dengan cepat sambil tetap menyediakan eskalasi manusia.',
      'Integrasi Bisnis|Menghubungkan workflow AI dengan sistem yang sudah Anda gunakan.',
      'Analitik|Mengubah aktivitas pelanggan dan operasional menjadi informasi yang lebih jelas.',
    ],
    processTitle: 'Jalur yang jelas dari masalah hingga sistem yang berfungsi.',
    process: [
      'Temukan|Pahami bisnis dan peluang otomatisasi.',
      'Desain|Petakan pengalaman, logika, informasi, dan handover.',
      'Bangun|Buat workflow AI di sekitar proses nyata.',
      'Uji|Uji percakapan, edge case, dan aturan bisnis.',
      'Luncurkan|Deploy secara terkendali dengan tanggung jawab jelas.',
      'Tingkatkan|Optimalkan berdasarkan penggunaan nyata dan feedback.',
    ],
    existingTitle: 'Pertahankan alat yang sudah bekerja dengan baik.',
    existingText:
      'KONARA menyesuaikan diri dengan sistem, orang, dan proses yang sudah dipercaya bisnis Anda.',
    afterTitle: 'Peluncuran adalah awal, bukan akhir.',
    afterText:
      'Penggunaan nyata mengungkap pertanyaan baru, edge case, dan peluang peningkatan yang lebih baik.',
  },

  about: {
    eyebrow: 'TENTANG KONARA',
    hero: 'Membangun cara yang lebih cerdas|untuk menjalankan bisnis.',
    text: 'KONARA berfokus pada kecerdasan buatan praktis yang meningkatkan komunikasi, mengurangi pekerjaan berulang, dan membantu bisnis beroperasi lebih efisien.',
    whyTitle: 'Teknologi seharusnya mengurangi pekerjaan, bukan menambahnya.',
    whyText:
      'KONARA didirikan pada 2026 dengan gagasan bahwa AI harus menghubungkan komunikasi, keputusan, dan tindakan secara tenang — otomatisasi berguna hari ini dan KONARA OS besok.',
    principlesTitle:
      'Bangun sesuatu yang berguna. Tetap jelas. Raih kepercayaan.',
    principles: [
      'Inovasi|Gunakan teknologi baru saat menciptakan nilai nyata.',
      'Kesederhanaan|Sistem kompleks harus terasa sederhana bagi pengguna.',
      'Kepercayaan|Otomatisasi harus mempertahankan kontrol pada bisnis dan pelanggan.',
      'Keunggulan|Setiap detail berkontribusi pada kualitas pengalaman.',
      'Kesuksesan Pelanggan|Teknologi berarti ketika bisnis mendapat hasil yang lebih baik.',
    ],
    timeline: [
      'Fondasi|Workflow AI terfokus dan otomatisasi pelanggan.',
      'Kecerdasan Terhubung|Lebih banyak sistem bekerja bersama sebagai satu kesatuan.',
      'KONARA OS|Lapisan operasi cerdas terpadu untuk bisnis modern.',
    ],
  },

  contact: {
    eyebrow: 'HUBUNGI KONARA',
    hero: 'Mulai dengan|masalah bisnis.',
    text: 'Beri tahu kami apa yang ingin Anda tingkatkan dan kami akan melihat apakah workflow AI dapat membuat proses lebih cepat, jelas, atau mudah.',
    directTitle: 'Bicara dengan KONARA.',
    directText:
      'Untuk percakapan bisnis, demo yang disesuaikan adalah titik awal terbaik.',
    name: 'Nama Lengkap',
    email: 'Email Bisnis',
    business: 'Bisnis',
    message: 'Pesan',
    send: 'Kirim Pesan',
  },

  demo: {
    eyebrow: 'PESAN DEMO',
    hero: 'Lihat apa yang KONARA dapat lakukan|untuk bisnis Anda.',
    text: 'Ceritakan tentang bisnis dan workflow yang ingin Anda tingkatkan, lalu pilih waktu demo.',
    phone: 'Telepon',
    industry: 'Industri',
    improve: 'Apa yang ingin Anda otomatisasi atau tingkatkan?',
    request: 'Minta Demo',
    chooseTime: 'Pilih waktu demo Anda.',
  },

  assistant: {
    welcome: 'SELAMAT DATANG DI KONARA',
    title: 'Dibangun untuk membuat bisnis terasa cerdas.',
    text: 'KONARA didirikan pada 2026 untuk membangun sistem AI praktis yang membantu bisnis merespons lebih cepat, menangkap lebih banyak peluang, dan mengurangi pekerjaan berulang.',
    continue: 'Lanjutkan',
    menuTitle: 'Jelajahi KONARA dengan cara Anda.',
    explore: 'Jelajahi Solusi',
    demo: 'Pesan Demo',
    ask: 'Tanya KONARA',
    voiceTitle: 'Voiceflow terhubung di sini.',
    voiceText:
      'Area ini siap untuk asisten KONARA live yang dapat menjawab pertanyaan, mengkualifikasi lead, dan memandu booking.',
    help: 'Dapatkan Bantuan',
  },

  footer: {
    tagline: 'Solusi AI untuk bisnis modern.',
    vision: 'KONARA OS',
    founded: 'Didirikan pada 2026',
  },
};

const TL: CopyPack = {
  nav: [
    'Home',
    'Mga Solusyon',
    'Mga Serbisyo',
    'Tungkol',
    'Contact',
    'Mag-book ng Demo',
  ],

  common: {
    book: 'Mag-book ng Demo',
    explore: 'Tingnan ang Mga Solusyon',
    region: 'Rehiyon',
    language: 'Wika',
    otherLanguage: 'Pumili ng ibang wika',
    keepRegion: 'Panatilihin ang rehiyong ito',
    required: 'Pakikumpleto ang lahat ng kinakailangang field.',
    invalidEmail: 'Maglagay ng wastong email address.',
    wrongPassword: 'Maling password.',
    locked: 'Masyadong maraming pagtatangka. Subukan muli mamaya.',
    granted: 'Pinayagan ang access.',
  },

  coming: {
    eyebrow: 'ANG KINABUKASAN NG BUSINESS AUTOMATION',
    hero: 'May matalinong bagay|na paparating.',
    text: 'Binubuo ng KONARA ang intelligent layer sa pagitan ng customer conversations at business action — mas mabilis na sagot, mas malinaw na workflow, at mga sistemang nagtutulungan.',
    building: 'BINUBUO ANG SUSUNOD NA HENERASYON NG BUSINESS AUTOMATION',
    founderAccess: 'Founder Access',
    founderTitle: 'Founder Access',
    founderText:
      'Ilagay ang founder password para buksan ang pribadong KONARA website.',
    password: 'Founder password',
    enter: 'Buksan ang Preview',
  },

  home: {
    eyebrow: 'AI AUTOMATION PARA SA MODERNONG NEGOSYO',
    hero: 'Mga AI Solution|na nagtatrabaho para sa iyo.',
    text: 'Gumagawa ang KONARA ng intelligent systems na tumutulong sa negosyo na sumagot nang mas mabilis, makakuha ng mas maraming oportunidad, at i-automate ang paulit-ulit na trabaho.',
    challengeTitle:
      'Hindi dapat mawalan ng oportunidad ang negosyo mo dahil sa paulit-ulit na trabaho.',
    challenges: [
      'Nawawalang inquiry|Hindi dapat naghihintay nang matagal ang customers para sa sagot.',
      'Manual administration|Kinukuha ng paulit-ulit na task ang oras mula sa mas mahalagang trabaho.',
      'Mabagal na sagot|Inaasahan ng modern customers ang mabilis at consistent na communication.',
      'Disconnected workflow|Dapat madaling dumaloy ang important information sa buong negosyo.',
    ],
    solutionTitle: 'Automation na nakatuon sa resulta.',
    solutions: [
      'AI Receptionist|Sumasagot sa tanong, nakakaunawa ng intent at humahawak ng inquiries 24/7.',
      'Smart Booking|Ginagawang confirmed appointment ang customer interest.',
      'Customer Support|Mabilis na sinasagot ang common requests at ipinapasa sa tao kapag kailangan.',
    ],
    howTitle: 'Mula conversation papunta sa action.',
    steps: [
      'Connect|Nakikipag-ugnayan ang customer sa negosyo mo.',
      'Understand|Nauunawaan ng KONARA ang tanong, intent at context.',
      'Automate|Nati-trigger ang tamang workflow, lead o booking process.',
      'Deliver|Nakakakuha ang customer ng mabilis na service at ang team ng structured information.',
    ],
    liveTitle: 'Negosyo mo. Available 24/7.',
    liveText:
      'Bigyan ang customers ng intelligent first point of contact para sa tanong, leads, booking at support.',
    osTitle: 'Isang intelligent system para sa negosyo mo.',
    osText:
      'Ang KONARA OS ang long-term vision namin para pagsamahin ang communication, CRM, booking, workflow at analytics.',
    ctaTitle: 'Handa ka na bang mag-automate nang mas matalino?',
    ctaText:
      'Tingnan kung paano makakatipid ng oras ang KONARA, mapapabuti ang customer communication at makagagawa ng mas magandang digital experience.',
  },

  solutions: {
    eyebrow: 'KONARA SOLUTIONS',
    hero: 'AI na ginawa para sa|tunay na negosyo.',
    text: 'Intelligent solutions para i-automate ang communication, workflow at daily operations.',
    products: [
      'AI Receptionist|Customer communication na available anumang oras.',
      'Smart Booking|Ginagawang confirmed appointments ang conversations.',
      'Customer Support|Mabilis na sagot na may maayos na human handover.',
      'AI Sales|Kinukuha ang opportunities habang mataas ang customer interest.',
      'CRM & Automation|Pinapadaloy ang information sa conversations, systems at teams.',
      'Analytics & Reporting|Ginagawang mas malinaw na business information ang activity.',
    ],
    togetherTitle: 'Isang intelligent layer, hindi anim na hiwalay na tools.',
    customTitle:
      'Hindi pare-pareho ang automation na kailangan ng bawat negosyo.',
    customText:
      'Nagsisimula ang KONARA sa problem, customer journey at existing systems bago gumawa ng tamang workflow.',
  },

  services: {
    eyebrow: 'KONARA SERVICES',
    hero: 'Automation na ginawa para|sa negosyo mo.',
    text: 'Bawat implementation ay nagsisimula sa business problem, customer journey at resultang kailangang mapabuti.',
    cards: [
      'AI Receptionist|Communication na nakaayon sa knowledge, tone at handover rules ng negosyo.',
      'Lead Automation|Kinukuha, kino-qualify at niruruta ang opportunities nang mas kaunting admin work.',
      'Smart Booking|Dinadala ang customer mula inquiry hanggang confirmed appointment.',
      'Customer Support|Mabilis na humahawak ng common requests habang available ang human escalation.',
      'Business Integrations|Kinokonekta ang AI workflow sa systems na ginagamit mo na.',
      'Analytics|Ginagawang mas malinaw na information ang customer at operational activity.',
    ],
    processTitle: 'Malinaw na daan mula problema hanggang working system.',
    process: [
      'Discover|Unawain ang negosyo at automation opportunity.',
      'Design|I-map ang experience, logic, information at handover.',
      'Build|Gawin ang AI workflow sa paligid ng real process.',
      'Test|Subukan ang conversations, edge cases at business rules.',
      'Launch|I-deploy nang controlled at may malinaw na responsibility.',
      'Improve|I-optimize gamit ang real usage at feedback.',
    ],
    existingTitle: 'Panatilihin ang tools na gumagana na.',
    existingText:
      'Umaangkop ang KONARA sa systems, tao at processes na pinagkakatiwalaan na ng negosyo.',
    afterTitle: 'Ang launch ay simula, hindi katapusan.',
    afterText:
      'Ipinapakita ng real usage ang bagong questions, edge cases at mas magandang opportunities para sa improvement.',
  },

  about: {
    eyebrow: 'TUNGKOL SA KONARA',
    hero: 'Gumagawa ng mas matalinong paraan|para magnegosyo.',
    text: 'Nakatuon ang KONARA sa practical artificial intelligence na nagpapabuti ng communication, nagpapababa ng repetitive work at tumutulong sa negosyo na maging mas efficient.',
    whyTitle: 'Dapat bawasan ng technology ang trabaho, hindi dagdagan.',
    whyText:
      'Itinatag ang KONARA noong 2026 sa ideyang dapat tahimik na pagdugtungin ng AI ang communication, decisions at action — useful automation ngayon at KONARA OS sa hinaharap.',
    principlesTitle:
      'Gumawa ng kapaki-pakinabang. Manatiling malinaw. Kumita ng tiwala.',
    principles: [
      'Innovation|Gamitin ang bagong technology kung may real value.',
      'Simplicity|Dapat simple gamitin ang complex systems.',
      'Trust|Dapat may control pa rin ang business at customers sa automation.',
      'Excellence|Bawat detalye ay may ambag sa quality ng experience.',
      'Customer Success|Mahalaga ang technology kapag mas maganda ang result ng business.',
    ],
    timeline: [
      'Foundation|Focused AI workflows at customer automation.',
      'Connected Intelligence|Mas maraming systems na nagtutulungan bilang isa.',
      'KONARA OS|Unified intelligent operating layer para sa modern business.',
    ],
  },

  contact: {
    eyebrow: 'CONTACT KONARA',
    hero: 'Magsimula sa|business problem.',
    text: 'Sabihin kung ano ang gusto mong mapabuti at titingnan natin kung kayang gawing mas mabilis, malinaw o simple ng AI workflow ang process.',
    directTitle: 'Makipag-usap sa KONARA.',
    directText:
      'Para sa business conversation, customized demo ang pinakamagandang simula.',
    name: 'Buong Pangalan',
    email: 'Business Email',
    business: 'Negosyo',
    message: 'Mensahe',
    send: 'Ipadala ang Mensahe',
  },

  demo: {
    eyebrow: 'MAG-BOOK NG DEMO',
    hero: 'Tingnan kung ano ang magagawa ng KONARA|para sa negosyo mo.',
    text: 'Sabihin ang tungkol sa negosyo at workflow na gusto mong mapabuti, pagkatapos pumili ng demo time.',
    phone: 'Telepono',
    industry: 'Industriya',
    improve: 'Ano ang gusto mong i-automate o mapabuti?',
    request: 'Humiling ng Demo',
    chooseTime: 'Piliin ang oras ng demo.',
  },

  assistant: {
    welcome: 'WELCOME SA KONARA',
    title: 'Ginawa para maging mas intelligent ang negosyo.',
    text: 'Itinatag ang KONARA noong 2026 para gumawa ng practical AI systems na tumutulong sa negosyo na sumagot nang mas mabilis, makakuha ng mas maraming opportunities at bawasan ang repetitive work.',
    continue: 'Magpatuloy',
    menuTitle: 'I-explore ang KONARA sa paraan mo.',
    explore: 'Tingnan ang Mga Solusyon',
    demo: 'Mag-book ng Demo',
    ask: 'Tanungin ang KONARA',
    voiceTitle: 'Dito kumokonekta ang Voiceflow.',
    voiceText:
      'Handa ang area na ito para sa live KONARA assistant na kayang sumagot sa inquiries, mag-qualify ng leads at gumabay sa bookings.',
    help: 'Humingi ng Tulong',
  },

  footer: {
    tagline: 'AI solutions para sa modernong negosyo.',
    vision: 'KONARA OS',
    founded: 'Itinatag noong 2026',
  },
};

const JA: CopyPack = {
  nav: [
    'ホーム',
    'ソリューション',
    'サービス',
    '会社情報',
    'お問い合わせ',
    'デモを予約',
  ],

  common: {
    book: 'デモを予約',
    explore: 'ソリューションを見る',
    region: '地域',
    language: '言語',
    otherLanguage: '別の言語を選択',
    keepRegion: 'この地域を維持',
    required: '必須項目をすべて入力してください。',
    invalidEmail: '有効なメールアドレスを入力してください。',
    wrongPassword: 'パスワードが正しくありません。',
    locked: '試行回数が多すぎます。後でもう一度お試しください。',
    granted: 'アクセスが許可されました。',
  },

  coming: {
    eyebrow: 'ビジネスオートメーションの未来',
    hero: 'インテリジェントな何かが|まもなく始まります。',
    text: 'KONARAは、顧客との会話とビジネスアクションをつなぐインテリジェントレイヤーを構築しています。より速い応答、より明確なワークフロー、そして連携するシステムを実現します。',
    building: '次世代のビジネスオートメーションを構築中',
    founderAccess: '創業者アクセス',
    founderTitle: '創業者アクセス',
    founderText:
      '創業者用パスワードを入力して、KONARAのプライベートサイトへ進んでください。',
    password: '創業者パスワード',
    enter: 'プレビューを開く',
  },

  home: {
    eyebrow: '現代のビジネスのためのAI自動化',
    hero: 'あなたのために働く|AIソリューション。',
    text: 'KONARAは、企業がより迅速に対応し、より多くの機会を獲得し、反復作業を自動化できるインテリジェントなシステムを構築します。',
    challengeTitle:
      '反復作業によってビジネスチャンスを失うべきではありません。',
    challenges: [
      '問い合わせの取りこぼし|顧客が回答を待ち続ける必要はありません。',
      '手作業の管理|反復作業は、より価値の高い仕事に使う時間を奪います。',
      '遅い応答|現代の顧客は迅速で一貫したコミュニケーションを期待しています。',
      '分断されたワークフロー|重要な情報はビジネス全体をスムーズに流れるべきです。',
    ],
    solutionTitle: '成果を中心に設計された自動化。',
    solutions: [
      'AI受付|質問に回答し、意図を理解し、問い合わせを24時間対応します。',
      'スマート予約|関心を確定した予約へ変換します。',
      'カスタマーサポート|一般的な問い合わせを素早く解決し、必要に応じて人へ引き継ぎます。',
    ],
    howTitle: '会話からアクションへ。',
    steps: [
      '接続|顧客があなたのビジネスに連絡します。',
      '理解|KONARAが質問、意図、文脈を理解します。',
      '自動化|適切なワークフロー、リード、予約プロセスを開始します。',
      '実行|顧客は迅速なサービスを受け、チームは整理された情報を受け取ります。',
    ],
    liveTitle: 'あなたのビジネスを24時間対応に。',
    liveText:
      '質問、リード、予約、サポートのためのインテリジェントな最初の窓口を提供します。',
    osTitle: 'ビジネスのための一つのインテリジェントシステム。',
    osText:
      'KONARA OSは、コミュニケーション、CRM、予約、ワークフロー、分析を一つに統合する長期ビジョンです。',
    ctaTitle: 'よりスマートな自動化を始めませんか？',
    ctaText:
      'KONARAが時間を節約し、顧客コミュニケーションを改善し、より良いデジタル体験を実現する方法をご覧ください。',
  },

  solutions: {
    eyebrow: 'KONARA ソリューション',
    hero: '実際のビジネスのために|設計されたAI。',
    text: 'コミュニケーション、ワークフロー、日常業務を自動化するインテリジェントソリューション。',
    products: [
      'AI受付|いつでも利用できる顧客コミュニケーション。',
      'スマート予約|会話を確定済みの予約に変換します。',
      'カスタマーサポート|迅速な回答と適切な有人引き継ぎ。',
      'AIセールス|顧客の関心が高いうちに機会を捉えます。',
      'CRM・自動化|会話、システム、チーム間で情報を流し続けます。',
      '分析・レポート|活動データをより明確なビジネス情報へ変換します。',
    ],
    togetherTitle:
      '6つの分断されたツールではなく、一つのインテリジェントレイヤー。',
    customTitle: 'すべてのビジネスに同じ自動化が必要なわけではありません。',
    customText:
      'KONARAは課題、顧客体験、既存システムから始め、適切なワークフローを設計します。',
  },

  services: {
    eyebrow: 'KONARA サービス',
    hero: 'あなたのビジネスに合わせた|自動化。',
    text: 'すべての導入は、ビジネス課題、顧客体験、改善すべき成果から始まります。',
    cards: [
      'AI受付|企業の知識、トーン、引き継ぎルールに合わせた顧客コミュニケーション。',
      'リード自動化|管理作業を減らしながら、機会を獲得・評価・振り分けします。',
      'スマート予約|問い合わせから確定予約まで顧客を案内します。',
      'カスタマーサポート|一般的な問い合わせを素早く処理し、有人対応も可能にします。',
      'ビジネス連携|AIワークフローを既存システムと接続します。',
      '分析|顧客と業務の活動をより分かりやすい情報へ変換します。',
    ],
    processTitle: '課題から実際に動くシステムまで、明確なプロセス。',
    process: [
      '発見|ビジネスと自動化の機会を理解します。',
      '設計|体験、ロジック、情報、引き継ぎを設計します。',
      '構築|実際の業務プロセスに沿ってAIワークフローを構築します。',
      'テスト|会話、例外、ビジネスルールを検証します。',
      '公開|責任範囲を明確にし、段階的に導入します。',
      '改善|実際の利用とフィードバックをもとに最適化します。',
    ],
    existingTitle: 'すでに機能しているツールはそのまま活用。',
    existingText:
      'KONARAは、企業がすでに信頼しているシステム、人、プロセスに合わせて設計されます。',
    afterTitle: '公開はゴールではなく、スタートです。',
    afterText:
      '実際の利用から、新しい質問、例外、そして改善の機会が見えてきます。',
  },

  about: {
    eyebrow: 'KONARAについて',
    hero: 'よりスマートな|ビジネスの仕組みを構築。',
    text: 'KONARAは、コミュニケーションを改善し、反復作業を減らし、企業の効率を高める実用的なAIに取り組んでいます。',
    whyTitle: 'テクノロジーは仕事を増やすのではなく、減らすべきです。',
    whyText:
      'KONARAは2026年、AIがコミュニケーション、意思決定、アクションを自然につなぐべきだという考えから始まりました。今日の有用な自動化から、将来のKONARA OSへ。',
    principlesTitle: '役立つものを作る。分かりやすくする。信頼を得る。',
    principles: [
      'イノベーション|本当の価値を生み出す場所で新しい技術を活用します。',
      'シンプルさ|複雑なシステムでも、ユーザーには簡単に感じられるべきです。',
      '信頼|自動化でも企業と顧客がコントロールを維持できるようにします。',
      '品質|あらゆる細部が体験の品質に影響します。',
      '顧客成功|テクノロジーの価値は、ビジネス成果が改善されたときに生まれます。',
    ],
    timeline: [
      '基盤|重点的なAIワークフローと顧客自動化。',
      '接続されたインテリジェンス|より多くのシステムが一つのように連携。',
      'KONARA OS|現代のビジネスのための統合インテリジェント運用レイヤー。',
    ],
  },

  contact: {
    eyebrow: 'KONARAへのお問い合わせ',
    hero: 'まずは|ビジネス課題から。',
    text: '改善したいことを教えてください。AIワークフローでより速く、分かりやすく、管理しやすくできるか検討します。',
    directTitle: 'KONARAにご相談ください。',
    directText: 'ビジネス相談には、個別デモが最適なスタートです。',
    name: '氏名',
    email: 'ビジネスメール',
    business: '会社名',
    message: 'メッセージ',
    send: 'メッセージを送信',
  },

  demo: {
    eyebrow: 'デモを予約',
    hero: 'KONARAがあなたのビジネスに|何を提供できるか確認。',
    text: '会社と改善したいワークフローについて教えていただき、デモの時間を選択してください。',
    phone: '電話番号',
    industry: '業界',
    improve: '何を自動化または改善したいですか？',
    request: 'デモをリクエスト',
    chooseTime: 'デモ時間を選択してください。',
  },

  assistant: {
    welcome: 'KONARAへようこそ',
    title: 'ビジネスをよりインテリジェントに。',
    text: 'KONARAは2026年、企業がより迅速に対応し、より多くの機会を獲得し、反復作業を削減できる実用的なAIシステムを構築するために設立されました。',
    continue: '続ける',
    menuTitle: 'あなたの方法でKONARAを探索。',
    explore: 'ソリューションを見る',
    demo: 'デモを予約',
    ask: 'KONARAに質問',
    voiceTitle: 'ここにVoiceflowを接続します。',
    voiceText:
      'このエリアは、問い合わせ対応、リード評価、予約案内ができるKONARAライブアシスタントに対応しています。',
    help: 'サポートを受ける',
  },

  footer: {
    tagline: '現代のビジネスのためのAIソリューション。',
    vision: 'KONARA OS',
    founded: '2026年設立',
  },
};

const KO: CopyPack = {
  nav: ['홈', '솔루션', '서비스', '회사 소개', '문의', '데모 예약'],

  common: {
    book: '데모 예약',
    explore: '솔루션 살펴보기',
    region: '지역',
    language: '언어',
    otherLanguage: '다른 언어 선택',
    keepRegion: '이 지역 유지',
    required: '필수 항목을 모두 입력해 주세요.',
    invalidEmail: '유효한 이메일 주소를 입력해 주세요.',
    wrongPassword: '비밀번호가 올바르지 않습니다.',
    locked: '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.',
    granted: '접근이 승인되었습니다.',
  },

  coming: {
    eyebrow: '비즈니스 자동화의 미래',
    hero: '지능적인 무언가가|다가오고 있습니다.',
    text: 'KONARA는 고객 대화와 비즈니스 행동 사이의 지능형 레이어를 구축합니다. 더 빠른 응답, 더 명확한 워크플로우, 함께 작동하는 시스템을 제공합니다.',
    building: '차세대 비즈니스 자동화를 구축하고 있습니다',
    founderAccess: '창립자 접근',
    founderTitle: '창립자 접근',
    founderText:
      'KONARA 비공개 사이트로 이동하려면 창립자 비밀번호를 입력하세요.',
    password: '창립자 비밀번호',
    enter: '미리보기 열기',
  },

  home: {
    eyebrow: '현대 비즈니스를 위한 AI 자동화',
    hero: '당신을 위해 일하는|AI 솔루션.',
    text: 'KONARA는 기업이 더 빠르게 응답하고, 더 많은 기회를 포착하며, 반복 작업을 자동화할 수 있도록 지능형 시스템을 구축합니다.',
    challengeTitle: '반복 작업 때문에 비즈니스 기회를 잃어서는 안 됩니다.',
    challenges: [
      '놓친 문의|고객이 답변을 기다릴 필요가 없어야 합니다.',
      '수동 관리|반복 업무는 더 가치 있는 업무에 사용할 시간을 빼앗습니다.',
      '느린 응답|현대 고객은 빠르고 일관된 커뮤니케이션을 기대합니다.',
      '분리된 워크플로우|중요한 정보가 비즈니스 전체에서 원활하게 이동해야 합니다.',
    ],
    solutionTitle: '성과를 중심으로 설계된 자동화.',
    solutions: [
      'AI 리셉셔니스트|질문에 답하고 의도를 이해하며 문의를 24시간 처리합니다.',
      '스마트 예약|관심을 확정된 예약으로 전환합니다.',
      '고객 지원|일반적인 요청을 빠르게 해결하고 필요할 경우 사람에게 연결합니다.',
    ],
    howTitle: '대화에서 실행까지.',
    steps: [
      '연결|고객이 비즈니스와 상호작용합니다.',
      '이해|KONARA가 질문, 의도, 맥락을 이해합니다.',
      '자동화|적절한 워크플로우, 리드 또는 예약 프로세스가 실행됩니다.',
      '제공|고객은 빠른 서비스를 받고 팀은 구조화된 정보를 받습니다.',
    ],
    liveTitle: '당신의 비즈니스. 24시간 이용 가능.',
    liveText:
      '질문, 리드, 예약, 지원을 위한 지능형 첫 접점을 고객에게 제공하세요.',
    osTitle: '비즈니스를 위한 하나의 지능형 시스템.',
    osText:
      'KONARA OS는 커뮤니케이션, CRM, 예약, 워크플로우, 분석을 하나로 통합하는 장기 비전입니다.',
    ctaTitle: '더 스마트한 자동화를 시작할 준비가 되셨나요?',
    ctaText:
      'KONARA가 시간을 절약하고 고객 커뮤니케이션을 개선하며 더 나은 디지털 경험을 만드는 방법을 확인해 보세요.',
  },

  solutions: {
    eyebrow: 'KONARA 솔루션',
    hero: '실제 비즈니스를 위해|설계된 AI.',
    text: '커뮤니케이션, 워크플로우, 일상 운영을 자동화하는 지능형 솔루션.',
    products: [
      'AI 리셉셔니스트|언제든 이용 가능한 고객 커뮤니케이션.',
      '스마트 예약|대화를 확정된 예약으로 전환합니다.',
      '고객 지원|빠른 답변과 적절한 사람 연결.',
      'AI 세일즈|고객 관심이 높은 순간 기회를 포착합니다.',
      'CRM 및 자동화|대화, 시스템, 팀 사이에서 정보를 지속적으로 이동시킵니다.',
      '분석 및 리포팅|활동 데이터를 더 명확한 비즈니스 정보로 바꿉니다.',
    ],
    togetherTitle: '여섯 개의 분리된 도구가 아니라 하나의 지능형 레이어.',
    customTitle: '모든 비즈니스에 동일한 자동화가 필요한 것은 아닙니다.',
    customText:
      'KONARA는 문제, 고객 여정, 기존 시스템에서 시작해 적절한 워크플로우를 설계합니다.',
  },

  services: {
    eyebrow: 'KONARA 서비스',
    hero: '비즈니스를 중심으로|설계된 자동화.',
    text: '모든 구현은 비즈니스 문제, 고객 여정, 개선해야 할 결과에서 시작합니다.',
    cards: [
      'AI 리셉셔니스트|기업의 지식, 톤, 전달 규칙에 맞춘 고객 커뮤니케이션.',
      '리드 자동화|관리 업무를 줄이면서 기회를 수집, 평가, 전달합니다.',
      '스마트 예약|고객을 문의에서 확정된 예약까지 안내합니다.',
      '고객 지원|일반 문의를 빠르게 처리하면서 사람에게 연결할 수 있습니다.',
      '비즈니스 통합|AI 워크플로우를 기존 시스템과 연결합니다.',
      '분석|고객 및 운영 활동을 더 명확한 정보로 변환합니다.',
    ],
    processTitle: '문제에서 실제 작동하는 시스템까지 명확한 과정.',
    process: [
      '발견|비즈니스와 자동화 기회를 이해합니다.',
      '설계|경험, 로직, 정보, 전달 방식을 설계합니다.',
      '구축|실제 프로세스를 중심으로 AI 워크플로우를 만듭니다.',
      '테스트|대화, 예외 상황, 비즈니스 규칙을 검증합니다.',
      '출시|명확한 책임과 함께 단계적으로 배포합니다.',
      '개선|실제 사용과 피드백을 기반으로 최적화합니다.',
    ],
    existingTitle: '이미 잘 작동하는 도구는 그대로 유지하세요.',
    existingText:
      'KONARA는 기업이 이미 신뢰하는 시스템, 사람, 프로세스에 맞춰 설계됩니다.',
    afterTitle: '출시는 끝이 아니라 시작입니다.',
    afterText:
      '실제 사용은 새로운 질문, 예외 상황, 더 나은 개선 기회를 보여줍니다.',
  },

  about: {
    eyebrow: 'KONARA 소개',
    hero: '더 스마트한 비즈니스 방식을|만듭니다.',
    text: 'KONARA는 커뮤니케이션을 개선하고 반복 업무를 줄이며 기업의 효율을 높이는 실용적인 인공지능에 집중합니다.',
    whyTitle: '기술은 일을 더 만드는 것이 아니라 줄여야 합니다.',
    whyText:
      'KONARA는 AI가 커뮤니케이션, 의사결정, 행동을 자연스럽게 연결해야 한다는 생각으로 2026년에 시작되었습니다. 오늘은 유용한 자동화, 미래에는 KONARA OS.',
    principlesTitle: '유용하게 만들고, 명확하게 유지하며, 신뢰를 얻습니다.',
    principles: [
      '혁신|실제 가치를 만드는 곳에서 새로운 기술을 사용합니다.',
      '단순함|복잡한 시스템도 사용자는 간단하게 느껴야 합니다.',
      '신뢰|자동화에서도 비즈니스와 고객이 통제권을 유지해야 합니다.',
      '탁월함|모든 세부 요소가 경험의 품질에 영향을 줍니다.',
      '고객 성공|기술은 비즈니스 결과가 개선될 때 의미가 있습니다.',
    ],
    timeline: [
      '기반|집중된 AI 워크플로우와 고객 자동화.',
      '연결된 지능|더 많은 시스템이 하나처럼 함께 작동합니다.',
      'KONARA OS|현대 비즈니스를 위한 통합 지능형 운영 레이어.',
    ],
  },

  contact: {
    eyebrow: 'KONARA 문의',
    hero: '비즈니스 문제에서|시작하세요.',
    text: '개선하고 싶은 부분을 알려주시면 AI 워크플로우가 프로세스를 더 빠르고 명확하며 쉽게 만들 수 있는지 검토하겠습니다.',
    directTitle: 'KONARA와 이야기하세요.',
    directText: '비즈니스 상담에는 맞춤형 데모가 가장 좋은 출발점입니다.',
    name: '이름',
    email: '비즈니스 이메일',
    business: '회사명',
    message: '메시지',
    send: '메시지 보내기',
  },

  demo: {
    eyebrow: '데모 예약',
    hero: 'KONARA가 비즈니스에|어떤 도움을 줄 수 있는지 확인하세요.',
    text: '비즈니스와 개선하고 싶은 워크플로우에 대해 알려주신 후 데모 시간을 선택하세요.',
    phone: '전화번호',
    industry: '산업',
    improve: '무엇을 자동화하거나 개선하고 싶으신가요?',
    request: '데모 요청',
    chooseTime: '데모 시간을 선택하세요.',
  },

  assistant: {
    welcome: 'KONARA에 오신 것을 환영합니다',
    title: '비즈니스를 더 지능적으로 만들기 위해 설계되었습니다.',
    text: 'KONARA는 기업이 더 빠르게 응답하고, 더 많은 기회를 포착하고, 반복 업무를 줄일 수 있도록 실용적인 AI 시스템을 만들기 위해 2026년에 설립되었습니다.',
    continue: '계속',
    menuTitle: '원하는 방식으로 KONARA를 살펴보세요.',
    explore: '솔루션 살펴보기',
    demo: '데모 예약',
    ask: 'KONARA에게 질문',
    voiceTitle: 'Voiceflow는 여기에 연결됩니다.',
    voiceText:
      '이 영역은 문의 응답, 리드 평가, 예약 안내가 가능한 KONARA 라이브 어시스턴트를 위해 준비되어 있습니다.',
    help: '도움 받기',
  },

  footer: {
    tagline: '현대 비즈니스를 위한 AI 솔루션.',
    vision: 'KONARA OS',
    founded: '2026년 설립',
  },
};

const ZH_CN: CopyPack = {
  nav: ['首页', '解决方案', '服务', '关于我们', '联系我们', '预约演示'],

  common: {
    book: '预约演示',
    explore: '探索解决方案',
    region: '地区',
    language: '语言',
    otherLanguage: '选择其他语言',
    keepRegion: '保留此地区',
    required: '请填写所有必填项。',
    invalidEmail: '请输入有效的电子邮件地址。',
    wrongPassword: '密码错误。',
    locked: '尝试次数过多，请稍后再试。',
    granted: '访问已授权。',
  },

  coming: {
    eyebrow: '商业自动化的未来',
    hero: '更智能的未来|即将到来。',
    text: 'KONARA 正在构建连接客户对话与业务行动的智能层——更快的响应、更清晰的工作流程，以及能够协同工作的系统。',
    building: '正在构建下一代商业自动化',
    founderAccess: '创始人访问',
    founderTitle: '创始人访问',
    founderText: '请输入创始人密码以进入 KONARA 私有网站。',
    password: '创始人密码',
    enter: '打开预览',
  },

  home: {
    eyebrow: '面向现代企业的 AI 自动化',
    hero: '真正为你工作的|AI 解决方案。',
    text: 'KONARA 构建智能系统，帮助企业更快响应、捕捉更多机会并自动化重复工作。',
    challengeTitle: '你的企业不应该因为重复工作而错失机会。',
    challenges: [
      '错过客户咨询|客户不应该长时间等待回复。',
      '人工管理|重复任务会占用更有价值工作的时间。',
      '响应缓慢|现代客户期待快速且一致的沟通。',
      '流程割裂|重要信息应该在企业内部顺畅流动。',
    ],
    solutionTitle: '围绕结果构建的自动化。',
    solutions: [
      'AI 接待员|回答问题、理解客户意图，并全天候处理咨询。',
      '智能预约|将客户兴趣转化为已确认的预约。',
      '客户支持|快速解决常见问题，并在需要时转交人工处理。',
    ],
    howTitle: '从对话到行动。',
    steps: [
      '连接|客户与企业开始互动。',
      '理解|KONARA 理解问题、意图和上下文。',
      '自动化|触发正确的工作流程、lead 或预约流程。',
      '交付|客户获得快速服务，团队获得结构化信息。',
    ],
    liveTitle: '你的企业。全天候在线。',
    liveText: '为客户提供一个智能的第一接触点，用于问题、lead、预约和支持。',
    osTitle: '一个面向企业的智能系统。',
    osText:
      'KONARA OS 是我们的长期愿景，将沟通、CRM、预约、工作流程和分析整合到一个系统中。',
    ctaTitle: '准备开始更智能的自动化了吗？',
    ctaText:
      '了解 KONARA 如何帮助你节省时间、改善客户沟通并打造更好的数字体验。',
  },

  solutions: {
    eyebrow: 'KONARA 解决方案',
    hero: '为真实业务而设计的|AI。',
    text: '用于自动化沟通、工作流程和日常运营的智能解决方案。',
    products: [
      'AI 接待员|随时可用的客户沟通。',
      '智能预约|将对话转化为已确认的预约。',
      '客户支持|快速响应，并提供合理的人工转接。',
      'AI 销售|在客户兴趣最强时捕捉机会。',
      'CRM 与自动化|让信息在对话、系统和团队之间持续流动。',
      '分析与报告|将活动数据转化为更清晰的业务信息。',
    ],
    togetherTitle: '一个智能层，而不是六个彼此割裂的工具。',
    customTitle: '并不是每家企业都需要相同的自动化。',
    customText:
      'KONARA 从问题、客户旅程和现有系统出发，然后围绕它们构建合适的工作流程。',
  },

  services: {
    eyebrow: 'KONARA 服务',
    hero: '围绕你的企业|构建自动化。',
    text: '每一次实施都从业务问题、客户旅程和需要改善的结果开始。',
    cards: [
      'AI 接待员|根据企业知识、语气和转接规则设计客户沟通。',
      'Lead 自动化|减少人工管理，同时捕捉、筛选并分配机会。',
      '智能预约|将客户从咨询带到已确认的预约。',
      '客户支持|快速处理常见请求，同时保留人工升级能力。',
      '业务集成|将 AI 工作流程连接到你已经使用的系统。',
      '分析|将客户和运营活动转化为更清晰的信息。',
    ],
    processTitle: '从问题到可运行系统的清晰路径。',
    process: [
      '发现|了解企业和自动化机会。',
      '设计|梳理体验、逻辑、信息和人工转接。',
      '构建|围绕真实流程建立 AI 工作流程。',
      '测试|测试对话、边缘情况和业务规则。',
      '上线|以可控方式部署并明确责任。',
      '改进|根据真实使用和反馈持续优化。',
    ],
    existingTitle: '保留已经有效的工具。',
    existingText: 'KONARA 会适配企业已经信任的系统、人员和流程。',
    afterTitle: '上线只是开始，而不是结束。',
    afterText: '真实使用会揭示新的问题、特殊情况和进一步优化的机会。',
  },

  about: {
    eyebrow: '关于 KONARA',
    hero: '构建更智能的|商业方式。',
    text: 'KONARA 专注于实用型人工智能，通过改善沟通、减少重复工作并帮助企业提高效率。',
    whyTitle: '技术应该减少工作，而不是制造更多工作。',
    whyText:
      'KONARA 成立于 2026 年，理念是让 AI 自然连接沟通、决策和行动——今天提供实用自动化，未来走向 KONARA OS。',
    principlesTitle: '构建有用的产品。保持清晰。赢得信任。',
    principles: [
      '创新|在能够创造真实价值的地方使用新技术。',
      '简单|复杂系统对使用者来说应该保持简单。',
      '信任|自动化应该让企业和客户保持控制权。',
      '卓越|每一个细节都会影响体验质量。',
      '客户成功|只有当企业获得更好的结果时，技术才真正有价值。',
    ],
    timeline: [
      '基础|聚焦的 AI 工作流程和客户自动化。',
      '互联智能|更多系统作为一个整体协同工作。',
      'KONARA OS|面向现代企业的统一智能运营层。',
    ],
  },

  contact: {
    eyebrow: '联系 KONARA',
    hero: '从|业务问题开始。',
    text: '告诉我们你想改善什么，我们会评估 AI 工作流程是否能让流程更快、更清晰或更容易管理。',
    directTitle: '与 KONARA 沟通。',
    directText: '对于业务咨询，定制演示是最好的起点。',
    name: '姓名',
    email: '企业邮箱',
    business: '公司',
    message: '留言',
    send: '发送信息',
  },

  demo: {
    eyebrow: '预约演示',
    hero: '看看 KONARA 能为|你的企业做什么。',
    text: '告诉我们你的企业情况和希望改善的工作流程，然后选择演示时间。',
    phone: '电话',
    industry: '行业',
    improve: '你希望自动化或改善什么？',
    request: '申请演示',
    chooseTime: '选择演示时间。',
  },

  assistant: {
    welcome: '欢迎来到 KONARA',
    title: '让企业运作更加智能。',
    text: 'KONARA 成立于 2026 年，致力于构建实用 AI 系统，帮助企业更快响应、捕捉更多机会并减少重复工作。',
    continue: '继续',
    menuTitle: '按照你的方式探索 KONARA。',
    explore: '探索解决方案',
    demo: '预约演示',
    ask: '询问 KONARA',
    voiceTitle: 'Voiceflow 将连接到这里。',
    voiceText:
      '该区域已准备好连接 KONARA 实时助手，可回答咨询、筛选 lead 并引导预约。',
    help: '获取帮助',
  },

  footer: {
    tagline: '面向现代企业的 AI 解决方案。',
    vision: 'KONARA OS',
    founded: '成立于 2026 年',
  },
};

const ZH_TW: CopyPack = {
  nav: ['首頁', '解決方案', '服務', '關於我們', '聯絡我們', '預約示範'],

  common: {
    book: '預約示範',
    explore: '探索解決方案',
    region: '地區',
    language: '語言',
    otherLanguage: '選擇其他語言',
    keepRegion: '保留此地區',
    required: '請填寫所有必填欄位。',
    invalidEmail: '請輸入有效的電子郵件地址。',
    wrongPassword: '密碼錯誤。',
    locked: '嘗試次數過多，請稍後再試。',
    granted: '存取已授權。',
  },

  coming: {
    eyebrow: '商業自動化的未來',
    hero: '更智慧的未來|即將到來。',
    text: 'KONARA 正在建立連接客戶對話與商業行動的智慧層——更快的回應、更清晰的工作流程，以及能彼此協作的系統。',
    building: '正在打造下一代商業自動化',
    founderAccess: '創辦人存取',
    founderTitle: '創辦人存取',
    founderText: '請輸入創辦人密碼以進入 KONARA 私人網站。',
    password: '創辦人密碼',
    enter: '開啟預覽',
  },

  home: {
    eyebrow: '為現代企業打造的 AI 自動化',
    hero: '真正為你工作的|AI 解決方案。',
    text: 'KONARA 建立智慧系統，幫助企業更快回應、掌握更多機會並自動化重複工作。',
    challengeTitle: '你的企業不應該因重複工作而錯失機會。',
    challenges: [
      '錯過客戶詢問|客戶不應長時間等待回覆。',
      '人工管理|重複任務會佔用更高價值工作的時間。',
      '回應緩慢|現代客戶期待快速且一致的溝通。',
      '流程分散|重要資訊應在企業內順暢流動。',
    ],
    solutionTitle: '以成果為核心打造的自動化。',
    solutions: [
      'AI 接待員|回答問題、理解客戶意圖並全天候處理詢問。',
      '智慧預約|將客戶興趣轉化為已確認的預約。',
      '客戶支援|快速解決常見問題，必要時轉交真人處理。',
    ],
    howTitle: '從對話到行動。',
    steps: [
      '連接|客戶與你的企業互動。',
      '理解|KONARA 理解問題、意圖與情境。',
      '自動化|啟動正確的工作流程、lead 或預約流程。',
      '執行|客戶獲得快速服務，團隊獲得結構化資訊。',
    ],
    liveTitle: '你的企業。全天候在線。',
    liveText: '為客戶提供智慧的第一接觸點，用於問題、lead、預約與支援。',
    osTitle: '一個為企業而生的智慧系統。',
    osText:
      'KONARA OS 是我們的長期願景，將溝通、CRM、預約、工作流程和分析整合在一起。',
    ctaTitle: '準備開始更智慧的自動化了嗎？',
    ctaText: '了解 KONARA 如何節省時間、改善客戶溝通並創造更好的數位體驗。',
  },

  solutions: {
    eyebrow: 'KONARA 解決方案',
    hero: '為真實商業而設計的|AI。',
    text: '用於自動化溝通、工作流程和日常營運的智慧解決方案。',
    products: [
      'AI 接待員|隨時可用的客戶溝通。',
      '智慧預約|將對話轉化為已確認的預約。',
      '客戶支援|快速回應並提供適當的真人交接。',
      'AI 銷售|在客戶興趣最高時掌握機會。',
      'CRM 與自動化|讓資訊在對話、系統與團隊間持續流動。',
      '分析與報告|將活動資料轉化為更清晰的商業資訊。',
    ],
    togetherTitle: '一個智慧層，而不是六個彼此分離的工具。',
    customTitle: '不是每家企業都需要相同的自動化。',
    customText: 'KONARA 從問題、客戶旅程與現有系統出發，再建立合適的工作流程。',
  },

  services: {
    eyebrow: 'KONARA 服務',
    hero: '圍繞你的企業|打造自動化。',
    text: '每一次導入都從商業問題、客戶旅程和需要改善的成果開始。',
    cards: [
      'AI 接待員|依照企業知識、語氣與交接規則設計客戶溝通。',
      'Lead 自動化|減少人工管理，同時捕捉、篩選並分配機會。',
      '智慧預約|將客戶從詢問帶到已確認預約。',
      '客戶支援|快速處理常見要求，同時保留真人升級能力。',
      '商業整合|將 AI 工作流程連接到你已使用的系統。',
      '分析|將客戶與營運活動轉化為更清晰的資訊。',
    ],
    processTitle: '從問題到可運作系統的清晰路徑。',
    process: [
      '發現|了解企業與自動化機會。',
      '設計|規劃體驗、邏輯、資訊與交接。',
      '建立|圍繞真實流程建立 AI 工作流程。',
      '測試|測試對話、例外情況與商業規則。',
      '上線|以可控方式部署並明確責任。',
      '改善|根據真實使用與回饋持續優化。',
    ],
    existingTitle: '保留已經有效的工具。',
    existingText: 'KONARA 會配合企業已經信任的系統、人員和流程。',
    afterTitle: '上線只是開始，而不是終點。',
    afterText: '真實使用會揭示新的問題、例外與更多改善機會。',
  },

  about: {
    eyebrow: '關於 KONARA',
    hero: '打造更智慧的|商業方式。',
    text: 'KONARA 專注於實用人工智慧，改善溝通、減少重複工作並幫助企業提高效率。',
    whyTitle: '科技應該減少工作，而不是創造更多工作。',
    whyText:
      'KONARA 於 2026 年成立，核心理念是讓 AI 自然連接溝通、決策與行動——今天提供實用自動化，未來走向 KONARA OS。',
    principlesTitle: '打造有用的產品。保持清晰。贏得信任。',
    principles: [
      '創新|在能創造真正價值的地方使用新技術。',
      '簡單|即使系統複雜，也應讓使用者感到簡單。',
      '信任|自動化仍應讓企業與客戶保有控制權。',
      '卓越|每一個細節都影響整體體驗品質。',
      '客戶成功|只有當企業獲得更好的結果時，科技才真正有價值。',
    ],
    timeline: [
      '基礎|聚焦 AI 工作流程與客戶自動化。',
      '互聯智慧|更多系統像一個整體一樣協同運作。',
      'KONARA OS|為現代企業打造的統一智慧營運層。',
    ],
  },

  contact: {
    eyebrow: '聯絡 KONARA',
    hero: '從|商業問題開始。',
    text: '告訴我們你想改善什麼，我們會評估 AI 工作流程是否能讓流程更快、更清楚或更容易管理。',
    directTitle: '與 KONARA 聊聊。',
    directText: '對於商業諮詢，客製化示範是最好的起點。',
    name: '姓名',
    email: '商業電子郵件',
    business: '公司',
    message: '訊息',
    send: '傳送訊息',
  },

  demo: {
    eyebrow: '預約示範',
    hero: '看看 KONARA 能為|你的企業做什麼。',
    text: '告訴我們你的企業與希望改善的工作流程，再選擇示範時間。',
    phone: '電話',
    industry: '產業',
    improve: '你希望自動化或改善什麼？',
    request: '申請示範',
    chooseTime: '選擇示範時間。',
  },

  assistant: {
    welcome: '歡迎來到 KONARA',
    title: '讓企業運作更加智慧。',
    text: 'KONARA 於 2026 年成立，致力於建立實用 AI 系統，幫助企業更快回應、掌握更多機會並減少重複工作。',
    continue: '繼續',
    menuTitle: '按照你的方式探索 KONARA。',
    explore: '探索解決方案',
    demo: '預約示範',
    ask: '詢問 KONARA',
    voiceTitle: 'Voiceflow 將連接到這裡。',
    voiceText:
      '此區域已準備好連接 KONARA 即時助理，可回答詢問、篩選 lead 並引導預約。',
    help: '取得協助',
  },

  footer: {
    tagline: '為現代企業打造的 AI 解決方案。',
    vision: 'KONARA OS',
    founded: '成立於 2026 年',
  },
};

const TH: CopyPack = {
  nav: ['หน้าแรก', 'โซลูชัน', 'บริการ', 'เกี่ยวกับเรา', 'ติดต่อ', 'จองเดโม'],

  common: {
    book: 'จองเดโม',
    explore: 'ดูโซลูชัน',
    region: 'ภูมิภาค',
    language: 'ภาษา',
    otherLanguage: 'เลือกภาษาอื่น',
    keepRegion: 'คงภูมิภาคนี้ไว้',
    required: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน',
    invalidEmail: 'กรุณากรอกอีเมลที่ถูกต้อง',
    wrongPassword: 'รหัสผ่านไม่ถูกต้อง',
    locked: 'พยายามหลายครั้งเกินไป กรุณาลองใหม่ภายหลัง',
    granted: 'อนุญาตการเข้าถึงแล้ว',
  },

  coming: {
    eyebrow: 'อนาคตของระบบอัตโนมัติทางธุรกิจ',
    hero: 'สิ่งที่ชาญฉลาด|กำลังมา.',
    text: 'KONARA กำลังสร้างชั้นอัจฉริยะระหว่างบทสนทนากับลูกค้าและการดำเนินการทางธุรกิจ — ตอบเร็วขึ้น workflow ชัดขึ้น และระบบที่ทำงานร่วมกัน',
    building: 'กำลังสร้างระบบอัตโนมัติทางธุรกิจรุ่นถัดไป',
    founderAccess: 'การเข้าถึงสำหรับผู้ก่อตั้ง',
    founderTitle: 'การเข้าถึงสำหรับผู้ก่อตั้ง',
    founderText:
      'กรอกรหัสผ่านของผู้ก่อตั้งเพื่อเข้าสู่เว็บไซต์ส่วนตัวของ KONARA',
    password: 'รหัสผ่านผู้ก่อตั้ง',
    enter: 'เปิดตัวอย่าง',
  },

  home: {
    eyebrow: 'AI AUTOMATION สำหรับธุรกิจยุคใหม่',
    hero: 'โซลูชัน AI|ที่ทำงานให้คุณ.',
    text: 'KONARA สร้างระบบอัจฉริยะที่ช่วยให้ธุรกิจตอบเร็วขึ้น จับโอกาสได้มากขึ้น และทำงานซ้ำๆ แบบอัตโนมัติ',
    challengeTitle: 'ธุรกิจของคุณไม่ควรเสียโอกาสเพราะงานที่ต้องทำซ้ำ',
    challenges: [
      'พลาดคำถามจากลูกค้า|ลูกค้าไม่ควรต้องรอคำตอบนาน',
      'งานจัดการแบบ manual|งานซ้ำๆ ทำให้ทีมเสียเวลาไปจากงานที่มีมูลค่ามากกว่า',
      'ตอบช้า|ลูกค้ายุคใหม่คาดหวังการสื่อสารที่รวดเร็วและสม่ำเสมอ',
      'Workflow แยกกัน|ข้อมูลสำคัญควรไหลผ่านธุรกิจได้อย่างราบรื่น',
    ],
    solutionTitle: 'Automation ที่สร้างขึ้นเพื่อผลลัพธ์.',
    solutions: [
      'AI Receptionist|ตอบคำถาม เข้าใจเจตนา และจัดการคำถามจากลูกค้า 24/7',
      'Smart Booking|เปลี่ยนความสนใจให้เป็นนัดหมายที่ยืนยันแล้ว',
      'Customer Support|จัดการคำขอทั่วไปอย่างรวดเร็ว และส่งต่อให้คนเมื่อจำเป็น',
    ],
    howTitle: 'จากบทสนทนาไปสู่การดำเนินการ.',
    steps: [
      'เชื่อมต่อ|ลูกค้าติดต่อธุรกิจของคุณ',
      'เข้าใจ|KONARA เข้าใจคำถาม เจตนา และบริบท',
      'อัตโนมัติ|เริ่ม workflow, lead หรือ booking process ที่เหมาะสม',
      'ส่งมอบ|ลูกค้าได้รับบริการรวดเร็ว และทีมได้รับข้อมูลที่เป็นระบบ',
    ],
    liveTitle: 'ธุรกิจของคุณ พร้อมใช้งาน 24/7.',
    liveText: 'มอบจุดติดต่อแรกที่ชาญฉลาดสำหรับคำถาม leads การจอง และ support',
    osTitle: 'หนึ่งระบบอัจฉริยะสำหรับธุรกิจของคุณ.',
    osText:
      'KONARA OS คือวิสัยทัศน์ระยะยาวในการรวม communication, CRM, booking, workflow และ analytics ไว้ด้วยกัน',
    ctaTitle: 'พร้อมทำ Automation ให้ฉลาดขึ้นหรือยัง?',
    ctaText:
      'ดูว่า KONARA จะช่วยประหยัดเวลา ปรับปรุงการสื่อสารกับลูกค้า และสร้างประสบการณ์ดิจิทัลที่ดีขึ้นได้อย่างไร',
  },

  solutions: {
    eyebrow: 'KONARA SOLUTIONS',
    hero: 'AI ที่สร้างเพื่อ|ธุรกิจจริง.',
    text: 'โซลูชันอัจฉริยะสำหรับ automation ของ communication, workflow และงานประจำวัน',
    products: [
      'AI Receptionist|การสื่อสารกับลูกค้าที่พร้อมใช้งานตลอดเวลา',
      'Smart Booking|เปลี่ยนบทสนทนาเป็นนัดหมายที่ยืนยันแล้ว',
      'Customer Support|ตอบเร็ว พร้อม human handover ที่เหมาะสม',
      'AI Sales|จับโอกาสในช่วงที่ลูกค้ามีความสนใจสูง',
      'CRM & Automation|ทำให้ข้อมูลไหลระหว่างบทสนทนา ระบบ และทีม',
      'Analytics & Reporting|เปลี่ยน activity ให้เป็นข้อมูลธุรกิจที่ชัดเจนขึ้น',
    ],
    togetherTitle: 'หนึ่ง intelligent layer ไม่ใช่หก tools ที่แยกจากกัน.',
    customTitle: 'ไม่ใช่ทุกธุรกิจที่ต้องการ automation แบบเดียวกัน.',
    customText:
      'KONARA เริ่มจากปัญหา customer journey และระบบเดิม แล้วสร้าง workflow ที่เหมาะสม',
  },

  services: {
    eyebrow: 'KONARA SERVICES',
    hero: 'Automation ที่สร้างรอบ|ธุรกิจของคุณ.',
    text: 'ทุก implementation เริ่มจากปัญหาธุรกิจ customer journey และผลลัพธ์ที่ต้องการปรับปรุง',
    cards: [
      'AI Receptionist|Communication ที่ปรับตาม knowledge, tone และ handover rules ของธุรกิจ',
      'Lead Automation|จับ qualify และ route โอกาสด้วยงาน admin ที่น้อยลง',
      'Smart Booking|พาลูกค้าจาก enquiry ไปสู่ confirmed appointment',
      'Customer Support|จัดการคำขอทั่วไปเร็ว พร้อม human escalation',
      'Business Integrations|เชื่อม AI workflow กับ systems ที่ธุรกิจใช้อยู่แล้ว',
      'Analytics|เปลี่ยน customer และ operational activity ให้เป็นข้อมูลที่ชัดเจนขึ้น',
    ],
    processTitle: 'เส้นทางชัดเจนจากปัญหาไปสู่ระบบที่ใช้งานจริง.',
    process: [
      'Discover|เข้าใจธุรกิจและ automation opportunity',
      'Design|ออกแบบ experience, logic, information และ handover',
      'Build|สร้าง AI workflow รอบ process จริง',
      'Test|ทดสอบ conversations, edge cases และ business rules',
      'Launch|Deploy แบบควบคุมพร้อม ownership ที่ชัดเจน',
      'Improve|Optimize จาก real usage และ feedback',
    ],
    existingTitle: 'เก็บ tools ที่ทำงานดีอยู่แล้ว.',
    existingText:
      'KONARA ทำงานร่วมกับ systems, people และ processes ที่ธุรกิจของคุณไว้วางใจอยู่แล้ว',
    afterTitle: 'Launch คือจุดเริ่มต้น ไม่ใช่จุดจบ.',
    afterText:
      'การใช้งานจริงเผยให้เห็นคำถามใหม่ edge cases และโอกาสในการพัฒนาต่อ',
  },

  about: {
    eyebrow: 'เกี่ยวกับ KONARA',
    hero: 'สร้างวิธีที่ชาญฉลาดกว่า|ในการทำธุรกิจ.',
    text: 'KONARA มุ่งเน้น practical artificial intelligence ที่ช่วยปรับปรุง communication ลดงานซ้ำๆ และเพิ่มประสิทธิภาพธุรกิจ',
    whyTitle: 'Technology ควรลดงาน ไม่ใช่เพิ่มงาน.',
    whyText:
      'KONARA ก่อตั้งในปี 2026 จากแนวคิดว่า AI ควรเชื่อม communication, decisions และ action อย่างเป็นธรรมชาติ — useful automation วันนี้ และ KONARA OS ในอนาคต',
    principlesTitle: 'สร้างสิ่งที่มีประโยชน์ ทำให้ชัดเจน และสร้างความไว้วางใจ.',
    principles: [
      'Innovation|ใช้เทคโนโลยีใหม่เมื่อสร้าง real value',
      'Simplicity|ระบบที่ซับซ้อนควรรู้สึกใช้งานง่าย',
      'Trust|Automation ต้องทำให้ business และ customer ยังควบคุมได้',
      'Excellence|ทุก detail มีผลต่อ quality ของ experience',
      'Customer Success|Technology มีความหมายเมื่อ business ได้ผลลัพธ์ที่ดีขึ้น',
    ],
    timeline: [
      'Foundation|Focused AI workflow และ customer automation',
      'Connected Intelligence|ระบบมากขึ้นทำงานร่วมกันเป็นหนึ่งเดียว',
      'KONARA OS|Unified intelligent operating layer สำหรับ modern business',
    ],
  },

  contact: {
    eyebrow: 'ติดต่อ KONARA',
    hero: 'เริ่มจาก|ปัญหาธุรกิจ.',
    text: 'บอกเราว่าคุณต้องการปรับปรุงอะไร แล้วเราจะดูว่า AI workflow ช่วยให้ process เร็ว ชัด หรือจัดการง่ายขึ้นได้หรือไม่',
    directTitle: 'พูดคุยกับ KONARA.',
    directText:
      'สำหรับ business conversation การ demo แบบ tailored คือจุดเริ่มต้นที่ดีที่สุด',
    name: 'ชื่อ-นามสกุล',
    email: 'อีเมลธุรกิจ',
    business: 'ธุรกิจ',
    message: 'ข้อความ',
    send: 'ส่งข้อความ',
  },

  demo: {
    eyebrow: 'จองเดโม',
    hero: 'ดูว่า KONARA ทำอะไรได้บ้าง|สำหรับธุรกิจของคุณ.',
    text: 'บอกเราเกี่ยวกับธุรกิจและ workflow ที่ต้องการปรับปรุง จากนั้นเลือกเวลา demo',
    phone: 'โทรศัพท์',
    industry: 'อุตสาหกรรม',
    improve: 'คุณต้องการ automate หรือ improve อะไร?',
    request: 'ขอเดโม',
    chooseTime: 'เลือกเวลา demo',
  },

  assistant: {
    welcome: 'ยินดีต้อนรับสู่ KONARA',
    title: 'สร้างขึ้นเพื่อให้ธุรกิจฉลาดขึ้น.',
    text: 'KONARA ก่อตั้งในปี 2026 เพื่อสร้าง practical AI systems ที่ช่วยให้ธุรกิจตอบเร็วขึ้น จับโอกาสได้มากขึ้น และลด repetitive work',
    continue: 'ดำเนินการต่อ',
    menuTitle: 'สำรวจ KONARA ในแบบของคุณ.',
    explore: 'ดูโซลูชัน',
    demo: 'จองเดโม',
    ask: 'ถาม KONARA',
    voiceTitle: 'Voiceflow เชื่อมต่อที่นี่.',
    voiceText:
      'ส่วนนี้พร้อมสำหรับ live KONARA assistant ที่สามารถตอบ enquiries, qualify leads และ guide bookings',
    help: 'รับความช่วยเหลือ',
  },

  footer: {
    tagline: 'AI solutions สำหรับธุรกิจยุคใหม่.',
    vision: 'KONARA OS',
    founded: 'ก่อตั้งในปี 2026',
  },
};

const VI: CopyPack = {
  nav: [
    'Trang chủ',
    'Giải pháp',
    'Dịch vụ',
    'Giới thiệu',
    'Liên hệ',
    'Đặt lịch demo',
  ],

  common: {
    book: 'Đặt lịch demo',
    explore: 'Khám phá giải pháp',
    region: 'Khu vực',
    language: 'Ngôn ngữ',
    otherLanguage: 'Chọn ngôn ngữ khác',
    keepRegion: 'Giữ khu vực này',
    required: 'Vui lòng điền đầy đủ các trường bắt buộc.',
    invalidEmail: 'Vui lòng nhập địa chỉ email hợp lệ.',
    wrongPassword: 'Mật khẩu không đúng.',
    locked: 'Quá nhiều lần thử. Vui lòng thử lại sau.',
    granted: 'Đã cấp quyền truy cập.',
  },

  coming: {
    eyebrow: 'TƯƠNG LAI CỦA TỰ ĐỘNG HÓA DOANH NGHIỆP',
    hero: 'Một điều thông minh|đang đến.',
    text: 'KONARA đang xây dựng lớp thông minh giữa hội thoại khách hàng và hành động kinh doanh — phản hồi nhanh hơn, workflow rõ ràng hơn và các hệ thống được thiết kế để phối hợp với nhau.',
    building: 'XÂY DỰNG THẾ HỆ TỰ ĐỘNG HÓA DOANH NGHIỆP TIẾP THEO',
    founderAccess: 'Truy cập nhà sáng lập',
    founderTitle: 'Truy cập nhà sáng lập',
    founderText:
      'Nhập mật khẩu nhà sáng lập để tiếp tục đến website riêng của KONARA.',
    password: 'Mật khẩu nhà sáng lập',
    enter: 'Mở bản xem trước',
  },

  home: {
    eyebrow: 'TỰ ĐỘNG HÓA AI CHO DOANH NGHIỆP HIỆN ĐẠI',
    hero: 'Giải pháp AI|làm việc cho bạn.',
    text: 'KONARA xây dựng các hệ thống thông minh giúp doanh nghiệp phản hồi nhanh hơn, nắm bắt nhiều cơ hội hơn và tự động hóa công việc lặp lại.',
    challengeTitle:
      'Doanh nghiệp của bạn không nên mất cơ hội vì công việc lặp lại.',
    challenges: [
      'Bỏ lỡ yêu cầu|Khách hàng không nên phải chờ đợi phản hồi.',
      'Quản trị thủ công|Công việc lặp lại lấy thời gian khỏi những nhiệm vụ có giá trị hơn.',
      'Phản hồi chậm|Khách hàng hiện đại mong đợi giao tiếp nhanh và nhất quán.',
      'Workflow rời rạc|Thông tin quan trọng cần di chuyển liền mạch trong doanh nghiệp.',
    ],
    solutionTitle: 'Tự động hóa được xây dựng xoay quanh kết quả.',
    solutions: [
      'Lễ tân AI|Trả lời câu hỏi, hiểu ý định và xử lý yêu cầu 24/7.',
      'Đặt lịch thông minh|Biến sự quan tâm thành cuộc hẹn đã xác nhận.',
      'Hỗ trợ khách hàng|Giải quyết nhanh yêu cầu phổ biến và chuyển cho con người khi cần.',
    ],
    howTitle: 'Từ hội thoại đến hành động.',
    steps: [
      'Kết nối|Khách hàng tương tác với doanh nghiệp của bạn.',
      'Hiểu|KONARA hiểu câu hỏi, ý định và ngữ cảnh.',
      'Tự động hóa|Workflow, lead hoặc quy trình đặt lịch phù hợp được kích hoạt.',
      'Thực hiện|Khách hàng nhận dịch vụ nhanh và đội ngũ nhận thông tin có cấu trúc.',
    ],
    liveTitle: 'Doanh nghiệp của bạn. Hoạt động 24/7.',
    liveText:
      'Cung cấp cho khách hàng một điểm liên hệ đầu tiên thông minh cho câu hỏi, lead, đặt lịch và hỗ trợ.',
    osTitle: 'Một hệ thống thông minh cho doanh nghiệp của bạn.',
    osText:
      'KONARA OS là tầm nhìn dài hạn của chúng tôi để kết hợp giao tiếp, CRM, đặt lịch, workflow và phân tích.',
    ctaTitle: 'Sẵn sàng tự động hóa thông minh hơn?',
    ctaText:
      'Khám phá cách KONARA có thể tiết kiệm thời gian, cải thiện giao tiếp khách hàng và tạo trải nghiệm số tốt hơn.',
  },

  solutions: {
    eyebrow: 'GIẢI PHÁP KONARA',
    hero: 'AI được xây dựng cho|doanh nghiệp thực tế.',
    text: 'Giải pháp thông minh để tự động hóa giao tiếp, workflow và hoạt động hằng ngày.',
    products: [
      'Lễ tân AI|Giao tiếp khách hàng luôn sẵn sàng.',
      'Đặt lịch thông minh|Biến hội thoại thành cuộc hẹn đã xác nhận.',
      'Hỗ trợ khách hàng|Phản hồi nhanh với quy trình chuyển giao cho con người phù hợp.',
      'Bán hàng AI|Nắm bắt cơ hội khi mức độ quan tâm của khách hàng còn cao.',
      'CRM & Tự động hóa|Giữ thông tin luân chuyển giữa hội thoại, hệ thống và đội ngũ.',
      'Phân tích & Báo cáo|Biến hoạt động thành thông tin kinh doanh rõ ràng hơn.',
    ],
    togetherTitle: 'Một lớp thông minh, không phải sáu công cụ tách rời.',
    customTitle:
      'Không phải doanh nghiệp nào cũng cần cùng một kiểu tự động hóa.',
    customText:
      'KONARA bắt đầu từ vấn đề, hành trình khách hàng và hệ thống hiện có rồi xây dựng workflow phù hợp.',
  },

  services: {
    eyebrow: 'DỊCH VỤ KONARA',
    hero: 'Tự động hóa được xây dựng quanh|doanh nghiệp của bạn.',
    text: 'Mỗi lần triển khai bắt đầu từ vấn đề kinh doanh, hành trình khách hàng và kết quả cần được cải thiện.',
    cards: [
      'Lễ tân AI|Giao tiếp theo kiến thức, giọng điệu và quy tắc chuyển giao của doanh nghiệp.',
      'Tự động hóa Lead|Thu thập, đánh giá và định tuyến cơ hội với ít công việc quản trị hơn.',
      'Đặt lịch thông minh|Dẫn khách hàng từ yêu cầu đến cuộc hẹn được xác nhận.',
      'Hỗ trợ khách hàng|Xử lý yêu cầu phổ biến nhanh chóng và vẫn cho phép chuyển sang con người.',
      'Tích hợp doanh nghiệp|Kết nối workflow AI với các hệ thống bạn đang sử dụng.',
      'Phân tích|Biến hoạt động khách hàng và vận hành thành thông tin rõ ràng hơn.',
    ],
    processTitle: 'Con đường rõ ràng từ vấn đề đến hệ thống hoạt động.',
    process: [
      'Khám phá|Hiểu doanh nghiệp và cơ hội tự động hóa.',
      'Thiết kế|Lập bản đồ trải nghiệm, logic, thông tin và chuyển giao.',
      'Xây dựng|Tạo workflow AI quanh quy trình thực tế.',
      'Kiểm thử|Kiểm tra hội thoại, tình huống đặc biệt và quy tắc kinh doanh.',
      'Ra mắt|Triển khai có kiểm soát với trách nhiệm rõ ràng.',
      'Cải thiện|Tối ưu dựa trên sử dụng thực tế và phản hồi.',
    ],
    existingTitle: 'Giữ lại những công cụ đang hoạt động tốt.',
    existingText:
      'KONARA thích ứng với các hệ thống, con người và quy trình mà doanh nghiệp của bạn đã tin dùng.',
    afterTitle: 'Ra mắt là khởi đầu, không phải kết thúc.',
    afterText:
      'Việc sử dụng thực tế cho thấy những câu hỏi mới, trường hợp đặc biệt và cơ hội cải thiện tốt hơn.',
  },

  about: {
    eyebrow: 'VỀ KONARA',
    hero: 'Xây dựng cách thông minh hơn|để vận hành doanh nghiệp.',
    text: 'KONARA tập trung vào trí tuệ nhân tạo thực tế giúp cải thiện giao tiếp, giảm công việc lặp lại và giúp doanh nghiệp vận hành hiệu quả hơn.',
    whyTitle: 'Công nghệ nên giảm công việc, không tạo thêm công việc.',
    whyText:
      'KONARA được thành lập vào năm 2026 với ý tưởng rằng AI nên kết nối giao tiếp, quyết định và hành động một cách tự nhiên — tự động hóa hữu ích hôm nay và KONARA OS trong tương lai.',
    principlesTitle:
      'Xây dựng thứ hữu ích. Giữ mọi thứ rõ ràng. Tạo dựng niềm tin.',
    principles: [
      'Đổi mới|Sử dụng công nghệ mới khi nó tạo ra giá trị thực.',
      'Đơn giản|Hệ thống phức tạp vẫn phải đơn giản đối với người sử dụng.',
      'Tin cậy|Tự động hóa phải giữ quyền kiểm soát cho doanh nghiệp và khách hàng.',
      'Xuất sắc|Mỗi chi tiết đều đóng góp vào chất lượng trải nghiệm.',
      'Thành công khách hàng|Công nghệ có ý nghĩa khi doanh nghiệp đạt kết quả tốt hơn.',
    ],
    timeline: [
      'Nền tảng|Workflow AI tập trung và tự động hóa khách hàng.',
      'Trí tuệ kết nối|Nhiều hệ thống hơn hoạt động cùng nhau như một.',
      'KONARA OS|Lớp vận hành thông minh thống nhất cho doanh nghiệp hiện đại.',
    ],
  },

  contact: {
    eyebrow: 'LIÊN HỆ KONARA',
    hero: 'Bắt đầu từ|vấn đề kinh doanh.',
    text: 'Hãy cho chúng tôi biết bạn muốn cải thiện điều gì và chúng tôi sẽ xem liệu workflow AI có thể làm quy trình nhanh hơn, rõ hơn hoặc dễ quản lý hơn không.',
    directTitle: 'Trao đổi với KONARA.',
    directText:
      'Đối với cuộc trao đổi kinh doanh, một bản demo được cá nhân hóa là điểm bắt đầu tốt nhất.',
    name: 'Họ và tên',
    email: 'Email doanh nghiệp',
    business: 'Doanh nghiệp',
    message: 'Tin nhắn',
    send: 'Gửi tin nhắn',
  },

  demo: {
    eyebrow: 'ĐẶT LỊCH DEMO',
    hero: 'Xem KONARA có thể làm gì|cho doanh nghiệp của bạn.',
    text: 'Hãy cho chúng tôi biết về doanh nghiệp và workflow bạn muốn cải thiện, sau đó chọn thời gian demo.',
    phone: 'Điện thoại',
    industry: 'Ngành',
    improve: 'Bạn muốn tự động hóa hoặc cải thiện điều gì?',
    request: 'Yêu cầu Demo',
    chooseTime: 'Chọn thời gian demo.',
  },

  assistant: {
    welcome: 'CHÀO MỪNG ĐẾN VỚI KONARA',
    title: 'Được xây dựng để giúp doanh nghiệp thông minh hơn.',
    text: 'KONARA được thành lập vào năm 2026 để xây dựng các hệ thống AI thực tế giúp doanh nghiệp phản hồi nhanh hơn, nắm bắt nhiều cơ hội hơn và giảm công việc lặp lại.',
    continue: 'Tiếp tục',
    menuTitle: 'Khám phá KONARA theo cách của bạn.',
    explore: 'Khám phá giải pháp',
    demo: 'Đặt lịch demo',
    ask: 'Hỏi KONARA',
    voiceTitle: 'Voiceflow kết nối tại đây.',
    voiceText:
      'Khu vực này sẵn sàng cho trợ lý KONARA trực tiếp có thể trả lời yêu cầu, đánh giá lead và hướng dẫn đặt lịch.',
    help: 'Nhận trợ giúp',
  },

  footer: {
    tagline: 'Giải pháp AI cho doanh nghiệp hiện đại.',
    vision: 'KONARA OS',
    founded: 'Thành lập năm 2026',
  },
};

export const COPY: Record<LanguageCode, CopyPack> = {
  en: EN,
  de: DE,
  fr: FR,
  nl: NL,
  es: ES,
  pt: PT,
  it: IT,
  pl: PL,
  cs: CS,
  sk: SK,
  hu: HU,
  ro: RO,
  bg: BG,
  el: EL,
  tr: TR,
  sv: SV,
  no: NO,
  da: DA,
  fi: FI,
  uk: UK,
  ar: AR,
  hi: HI,
  ur: UR,
  bn: BN,
  ms: MS,
  id: ID,
  tl: TL,
  ja: JA,
  ko: KO,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  th: TH,
  vi: VI,
};

export function getCopy(languageCode: LanguageCode): CopyPack {
  return COPY[languageCode] ?? COPY.en;
}
