import type { LanguageCode } from "../data/locales";

export type LegalCopy = {
  footer: {
    legal: string;
    notice: string;
    location: string;
    privacy: string;
  };
  page: {
    kicker: string;
    title: string;
    hero: string;
    information: string;
    operator: string;
    contact: string;
    privacy: string;
    ip: string;
    operatorHeading: string;
    brandWebsite: string;
    locationLabel: string;
    foundedLabel: string;
    operatorText: string;
    contactHeading: string;
    contactText: string;
    contactCta: string;
    privacyHeading: string;
    privacyText: string;
    securityText: string;
    ipHeading: string;
    ipText: string;
    clear: string;
  };
};

export const LEGAL_COPY: Record<LanguageCode, LegalCopy> = {
  "en": {
    "footer": {
      "legal": "LEGAL",
      "notice": "Legal notice",
      "location": "South Africa",
      "privacy": "Legal & privacy"
    },
    "page": {
      "kicker": "KONARA · LEGAL",
      "title": "Legal notice.",
      "hero": "Operator, contact, privacy and intellectual-property information for the KONARA website.",
      "information": "INFORMATION",
      "operator": "Operator",
      "contact": "Contact",
      "privacy": "Privacy",
      "ip": "Intellectual property",
      "operatorHeading": "Operator information",
      "brandWebsite": "Brand / website",
      "locationLabel": "Location",
      "foundedLabel": "Founded",
      "operatorText": "KONARA is a South African technology brand focused on AI automation, business systems and websites. Formal entity and service-address details will be added here when applicable.",
      "contactHeading": "Business contact",
      "contactText": "Business and website enquiries should be submitted through the KONARA contact page.",
      "contactCta": "Contact KONARA",
      "privacyHeading": "Privacy information",
      "privacyText": "The contact form may collect your name, company, email and enquiry details so KONARA can review and respond to your message.",
      "securityText": "Do not submit passwords, payment-card details, medical information or other highly sensitive information through the contact form.",
      "ipHeading": "Intellectual property",
      "ipText": "Unless stated otherwise, KONARA's original brand, website copy, interface design and visual materials are reserved to KONARA. Third-party marks belong to their respective owners.",
      "clear": "Clear information. Clear contact."
    }
  },
  "de": {
    "footer": {
      "legal": "RECHTLICH",
      "notice": "Impressum / Rechtliches",
      "location": "Südafrika",
      "privacy": "Rechtliches & Datenschutz"
    },
    "page": {
      "kicker": "KONARA · RECHTLICH",
      "title": "Impressum.",
      "hero": "Angaben zu Betreiber, Kontakt, Datenschutz und geistigem Eigentum für die KONARA-Website.",
      "information": "INFORMATIONEN",
      "operator": "Betreiber",
      "contact": "Kontakt",
      "privacy": "Datenschutz",
      "ip": "Geistiges Eigentum",
      "operatorHeading": "Betreiberinformationen",
      "brandWebsite": "Marke / Website",
      "locationLabel": "Standort",
      "foundedLabel": "Gegründet",
      "operatorText": "KONARA ist eine südafrikanische Technologiemarke mit Schwerpunkt auf KI-Automatisierung, Geschäftssystemen und Websites. Formelle Unternehmens- und Zustelladressdaten werden hier ergänzt, sobald sie anwendbar sind.",
      "contactHeading": "Geschäftskontakt",
      "contactText": "Geschäftliche Anfragen und Website-Anfragen sollten über die KONARA-Kontaktseite eingereicht werden.",
      "contactCta": "KONARA kontaktieren",
      "privacyHeading": "Datenschutzinformationen",
      "privacyText": "Das Kontaktformular kann Ihren Namen, Ihr Unternehmen, Ihre E-Mail-Adresse und Angaben zu Ihrer Anfrage erfassen, damit KONARA Ihre Nachricht prüfen und beantworten kann.",
      "securityText": "Übermitteln Sie über das Kontaktformular keine Passwörter, Zahlungskartendaten, medizinischen Informationen oder andere besonders sensible Informationen.",
      "ipHeading": "Geistiges Eigentum",
      "ipText": "Sofern nicht anders angegeben, bleiben die ursprüngliche KONARA-Marke, Website-Texte, das Interface-Design und die visuellen Materialien KONARA vorbehalten. Marken Dritter gehören ihren jeweiligen Eigentümern.",
      "clear": "Klare Informationen. Klarer Kontakt."
    }
  },
  "fr": {
    "footer": {
      "legal": "JURIDIQUE",
      "notice": "Mentions légales",
      "location": "Afrique du Sud",
      "privacy": "Mentions légales & confidentialité"
    },
    "page": {
      "kicker": "KONARA · JURIDIQUE",
      "title": "Mentions légales.",
      "hero": "Informations sur l’opérateur, le contact, la confidentialité et la propriété intellectuelle du site KONARA.",
      "information": "INFORMATIONS",
      "operator": "Opérateur",
      "contact": "Contact",
      "privacy": "Confidentialité",
      "ip": "Propriété intellectuelle",
      "operatorHeading": "Informations sur l’opérateur",
      "brandWebsite": "Marque / site web",
      "locationLabel": "Localisation",
      "foundedLabel": "Fondée",
      "operatorText": "KONARA est une marque technologique sud-africaine axée sur l’automatisation par l’IA, les systèmes d’entreprise et les sites web. Les informations officielles sur l’entité et l’adresse de service seront ajoutées ici lorsqu’elles s’appliqueront.",
      "contactHeading": "Contact professionnel",
      "contactText": "Les demandes professionnelles et liées au site doivent être envoyées via la page de contact KONARA.",
      "contactCta": "Contacter KONARA",
      "privacyHeading": "Informations sur la confidentialité",
      "privacyText": "Le formulaire de contact peut recueillir votre nom, votre entreprise, votre adresse e-mail et les détails de votre demande afin que KONARA puisse examiner votre message et y répondre.",
      "securityText": "N’envoyez pas de mots de passe, de données de carte de paiement, d’informations médicales ou d’autres informations très sensibles via le formulaire de contact.",
      "ipHeading": "Propriété intellectuelle",
      "ipText": "Sauf indication contraire, la marque originale KONARA, les textes du site, le design de l’interface et les éléments visuels sont réservés à KONARA. Les marques tierces appartiennent à leurs propriétaires respectifs.",
      "clear": "Des informations claires. Un contact clair."
    }
  },
  "nl": {
    "footer": {
      "legal": "JURIDISCH",
      "notice": "Juridische informatie",
      "location": "Zuid-Afrika",
      "privacy": "Juridisch & privacy"
    },
    "page": {
      "kicker": "KONARA · JURIDISCH",
      "title": "Juridische informatie.",
      "hero": "Informatie over beheerder, contact, privacy en intellectueel eigendom voor de KONARA-website.",
      "information": "INFORMATIE",
      "operator": "Beheerder",
      "contact": "Contact",
      "privacy": "Privacy",
      "ip": "Intellectueel eigendom",
      "operatorHeading": "Informatie over de beheerder",
      "brandWebsite": "Merk / website",
      "locationLabel": "Locatie",
      "foundedLabel": "Opgericht",
      "operatorText": "KONARA is een Zuid-Afrikaans technologiemerk gericht op AI-automatisering, bedrijfssystemen en websites. Formele gegevens over de entiteit en het serviceadres worden hier toegevoegd zodra die van toepassing zijn.",
      "contactHeading": "Zakelijk contact",
      "contactText": "Zakelijke vragen en websitevragen moeten via de KONARA-contactpagina worden ingediend.",
      "contactCta": "Contact opnemen met KONARA",
      "privacyHeading": "Privacy-informatie",
      "privacyText": "Het contactformulier kan uw naam, bedrijf, e-mailadres en details van uw aanvraag verzamelen zodat KONARA uw bericht kan beoordelen en beantwoorden.",
      "securityText": "Stuur via het contactformulier geen wachtwoorden, betaalkaartgegevens, medische informatie of andere zeer gevoelige informatie.",
      "ipHeading": "Intellectueel eigendom",
      "ipText": "Tenzij anders vermeld, zijn het oorspronkelijke KONARA-merk, de websiteteksten, het interfacedesign en de visuele materialen voorbehouden aan KONARA. Merken van derden behoren toe aan hun respectieve eigenaars.",
      "clear": "Duidelijke informatie. Duidelijk contact."
    }
  },
  "es": {
    "footer": {
      "legal": "LEGAL",
      "notice": "Aviso legal",
      "location": "Sudáfrica",
      "privacy": "Legal y privacidad"
    },
    "page": {
      "kicker": "KONARA · LEGAL",
      "title": "Aviso legal.",
      "hero": "Información sobre el operador, contacto, privacidad y propiedad intelectual del sitio web de KONARA.",
      "information": "INFORMACIÓN",
      "operator": "Operador",
      "contact": "Contacto",
      "privacy": "Privacidad",
      "ip": "Propiedad intelectual",
      "operatorHeading": "Información del operador",
      "brandWebsite": "Marca / sitio web",
      "locationLabel": "Ubicación",
      "foundedLabel": "Fundada",
      "operatorText": "KONARA es una marca tecnológica sudafricana centrada en automatización con IA, sistemas empresariales y sitios web. Los datos formales de la entidad y de la dirección de servicio se añadirán aquí cuando correspondan.",
      "contactHeading": "Contacto comercial",
      "contactText": "Las consultas comerciales y relacionadas con el sitio web deben enviarse a través de la página de contacto de KONARA.",
      "contactCta": "Contactar con KONARA",
      "privacyHeading": "Información de privacidad",
      "privacyText": "El formulario de contacto puede recopilar tu nombre, empresa, correo electrónico y detalles de la consulta para que KONARA pueda revisar y responder a tu mensaje.",
      "securityText": "No envíes contraseñas, datos de tarjetas de pago, información médica ni otra información altamente sensible mediante el formulario de contacto.",
      "ipHeading": "Propiedad intelectual",
      "ipText": "Salvo que se indique lo contrario, la marca original KONARA, los textos del sitio, el diseño de la interfaz y los materiales visuales quedan reservados a KONARA. Las marcas de terceros pertenecen a sus respectivos propietarios.",
      "clear": "Información clara. Contacto claro."
    }
  },
  "pt": {
    "footer": {
      "legal": "LEGAL",
      "notice": "Aviso legal",
      "location": "África do Sul",
      "privacy": "Legal e privacidade"
    },
    "page": {
      "kicker": "KONARA · LEGAL",
      "title": "Aviso legal.",
      "hero": "Informações sobre operador, contacto, privacidade e propriedade intelectual do site da KONARA.",
      "information": "INFORMAÇÕES",
      "operator": "Operador",
      "contact": "Contacto",
      "privacy": "Privacidade",
      "ip": "Propriedade intelectual",
      "operatorHeading": "Informações do operador",
      "brandWebsite": "Marca / site",
      "locationLabel": "Localização",
      "foundedLabel": "Fundada",
      "operatorText": "A KONARA é uma marca tecnológica sul-africana focada em automação com IA, sistemas empresariais e sites. Os dados formais da entidade e do endereço de serviço serão adicionados aqui quando aplicáveis.",
      "contactHeading": "Contacto comercial",
      "contactText": "As consultas comerciais e relacionadas com o site devem ser enviadas através da página de contacto da KONARA.",
      "contactCta": "Contactar a KONARA",
      "privacyHeading": "Informações de privacidade",
      "privacyText": "O formulário de contacto pode recolher o seu nome, empresa, e-mail e detalhes da consulta para que a KONARA possa analisar e responder à sua mensagem.",
      "securityText": "Não envie palavras-passe, dados de cartões de pagamento, informações médicas ou outras informações altamente sensíveis através do formulário de contacto.",
      "ipHeading": "Propriedade intelectual",
      "ipText": "Salvo indicação em contrário, a marca original KONARA, os textos do site, o design da interface e os materiais visuais ficam reservados à KONARA. As marcas de terceiros pertencem aos respetivos proprietários.",
      "clear": "Informação clara. Contacto claro."
    }
  },
  "it": {
    "footer": {
      "legal": "LEGALE",
      "notice": "Note legali",
      "location": "Sudafrica",
      "privacy": "Note legali e privacy"
    },
    "page": {
      "kicker": "KONARA · LEGALE",
      "title": "Note legali.",
      "hero": "Informazioni su operatore, contatti, privacy e proprietà intellettuale del sito KONARA.",
      "information": "INFORMAZIONI",
      "operator": "Operatore",
      "contact": "Contatti",
      "privacy": "Privacy",
      "ip": "Proprietà intellettuale",
      "operatorHeading": "Informazioni sull’operatore",
      "brandWebsite": "Marchio / sito web",
      "locationLabel": "Sede",
      "foundedLabel": "Fondata",
      "operatorText": "KONARA è un marchio tecnologico sudafricano focalizzato su automazione con IA, sistemi aziendali e siti web. I dati formali dell’entità e dell’indirizzo di servizio saranno aggiunti qui quando applicabili.",
      "contactHeading": "Contatto commerciale",
      "contactText": "Le richieste commerciali e relative al sito web devono essere inviate tramite la pagina Contatti di KONARA.",
      "contactCta": "Contatta KONARA",
      "privacyHeading": "Informazioni sulla privacy",
      "privacyText": "Il modulo di contatto può raccogliere nome, azienda, e-mail e dettagli della richiesta affinché KONARA possa esaminare e rispondere al messaggio.",
      "securityText": "Non inviare password, dati di carte di pagamento, informazioni mediche o altre informazioni altamente sensibili tramite il modulo di contatto.",
      "ipHeading": "Proprietà intellettuale",
      "ipText": "Salvo diversa indicazione, il marchio originale KONARA, i testi del sito, il design dell’interfaccia e i materiali visivi sono riservati a KONARA. I marchi di terzi appartengono ai rispettivi proprietari.",
      "clear": "Informazioni chiare. Contatto chiaro."
    }
  },
  "pl": {
    "footer": {
      "legal": "PRAWNE",
      "notice": "Informacje prawne",
      "location": "Republika Południowej Afryki",
      "privacy": "Prawo i prywatność"
    },
    "page": {
      "kicker": "KONARA · PRAWNE",
      "title": "Informacje prawne.",
      "hero": "Informacje o operatorze, kontakcie, prywatności i własności intelektualnej witryny KONARA.",
      "information": "INFORMACJE",
      "operator": "Operator",
      "contact": "Kontakt",
      "privacy": "Prywatność",
      "ip": "Własność intelektualna",
      "operatorHeading": "Informacje o operatorze",
      "brandWebsite": "Marka / strona",
      "locationLabel": "Lokalizacja",
      "foundedLabel": "Założona",
      "operatorText": "KONARA to południowoafrykańska marka technologiczna skupiona na automatyzacji AI, systemach biznesowych i stronach internetowych. Formalne dane podmiotu i adres do doręczeń zostaną tu dodane, gdy będą miały zastosowanie.",
      "contactHeading": "Kontakt biznesowy",
      "contactText": "Zapytania biznesowe i dotyczące witryny należy przesyłać przez stronę kontaktową KONARA.",
      "contactCta": "Skontaktuj się z KONARA",
      "privacyHeading": "Informacje o prywatności",
      "privacyText": "Formularz kontaktowy może zbierać Twoje imię, nazwę firmy, adres e-mail i szczegóły zapytania, aby KONARA mogła je przeanalizować i odpowiedzieć.",
      "securityText": "Nie przesyłaj przez formularz kontaktowy haseł, danych kart płatniczych, informacji medycznych ani innych szczególnie wrażliwych informacji.",
      "ipHeading": "Własność intelektualna",
      "ipText": "O ile nie zaznaczono inaczej, oryginalna marka KONARA, teksty witryny, projekt interfejsu i materiały wizualne są zastrzeżone dla KONARA. Znaki stron trzecich należą do ich właścicieli.",
      "clear": "Jasne informacje. Jasny kontakt."
    }
  },
  "cs": {
    "footer": {
      "legal": "PRÁVNÍ",
      "notice": "Právní informace",
      "location": "Jihoafrická republika",
      "privacy": "Právní informace a soukromí"
    },
    "page": {
      "kicker": "KONARA · PRÁVNÍ",
      "title": "Právní informace.",
      "hero": "Informace o provozovateli, kontaktu, soukromí a duševním vlastnictví webu KONARA.",
      "information": "INFORMACE",
      "operator": "Provozovatel",
      "contact": "Kontakt",
      "privacy": "Soukromí",
      "ip": "Duševní vlastnictví",
      "operatorHeading": "Informace o provozovateli",
      "brandWebsite": "Značka / web",
      "locationLabel": "Umístění",
      "foundedLabel": "Založeno",
      "operatorText": "KONARA je jihoafrická technologická značka zaměřená na automatizaci pomocí AI, podnikové systémy a weby. Formální údaje o subjektu a doručovací adrese zde budou doplněny, jakmile budou relevantní.",
      "contactHeading": "Obchodní kontakt",
      "contactText": "Obchodní dotazy a dotazy k webu posílejte prostřednictvím kontaktní stránky KONARA.",
      "contactCta": "Kontaktovat KONARA",
      "privacyHeading": "Informace o soukromí",
      "privacyText": "Kontaktní formulář může shromažďovat vaše jméno, firmu, e-mail a podrobnosti dotazu, aby KONARA mohla zprávu posoudit a odpovědět.",
      "securityText": "Prostřednictvím kontaktního formuláře neposílejte hesla, údaje o platebních kartách, zdravotní informace ani jiné vysoce citlivé údaje.",
      "ipHeading": "Duševní vlastnictví",
      "ipText": "Není-li uvedeno jinak, původní značka KONARA, texty webu, návrh rozhraní a vizuální materiály jsou vyhrazeny společnosti KONARA. Značky třetích stran patří jejich příslušným vlastníkům.",
      "clear": "Jasné informace. Jasný kontakt."
    }
  },
  "sk": {
    "footer": {
      "legal": "PRÁVNE",
      "notice": "Právne informácie",
      "location": "Južná Afrika",
      "privacy": "Právne informácie a súkromie"
    },
    "page": {
      "kicker": "KONARA · PRÁVNE",
      "title": "Právne informácie.",
      "hero": "Informácie o prevádzkovateľovi, kontakte, súkromí a duševnom vlastníctve webu KONARA.",
      "information": "INFORMÁCIE",
      "operator": "Prevádzkovateľ",
      "contact": "Kontakt",
      "privacy": "Súkromie",
      "ip": "Duševné vlastníctvo",
      "operatorHeading": "Informácie o prevádzkovateľovi",
      "brandWebsite": "Značka / web",
      "locationLabel": "Poloha",
      "foundedLabel": "Založené",
      "operatorText": "KONARA je juhoafrická technologická značka zameraná na automatizáciu pomocou AI, podnikové systémy a webové stránky. Formálne údaje o subjekte a adrese na doručovanie budú doplnené, keď budú relevantné.",
      "contactHeading": "Obchodný kontakt",
      "contactText": "Obchodné otázky a otázky týkajúce sa webu posielajte cez kontaktnú stránku KONARA.",
      "contactCta": "Kontaktovať KONARA",
      "privacyHeading": "Informácie o súkromí",
      "privacyText": "Kontaktný formulár môže zhromažďovať vaše meno, firmu, e-mail a podrobnosti otázky, aby KONARA mohla správu posúdiť a odpovedať.",
      "securityText": "Prostredníctvom kontaktného formulára neposielajte heslá, údaje o platobných kartách, zdravotné informácie ani iné veľmi citlivé údaje.",
      "ipHeading": "Duševné vlastníctvo",
      "ipText": "Ak nie je uvedené inak, pôvodná značka KONARA, texty webu, dizajn rozhrania a vizuálne materiály sú vyhradené spoločnosti KONARA. Značky tretích strán patria ich príslušným vlastníkom.",
      "clear": "Jasné informácie. Jasný kontakt."
    }
  },
  "hu": {
    "footer": {
      "legal": "JOGI",
      "notice": "Jogi tájékoztató",
      "location": "Dél-Afrika",
      "privacy": "Jogi és adatvédelmi információk"
    },
    "page": {
      "kicker": "KONARA · JOGI",
      "title": "Jogi tájékoztató.",
      "hero": "A KONARA webhely üzemeltetői, kapcsolattartási, adatvédelmi és szellemi tulajdoni információi.",
      "information": "INFORMÁCIÓ",
      "operator": "Üzemeltető",
      "contact": "Kapcsolat",
      "privacy": "Adatvédelem",
      "ip": "Szellemi tulajdon",
      "operatorHeading": "Üzemeltetői információk",
      "brandWebsite": "Márka / webhely",
      "locationLabel": "Helyszín",
      "foundedLabel": "Alapítva",
      "operatorText": "A KONARA egy dél-afrikai technológiai márka, amely AI-automatizálásra, üzleti rendszerekre és weboldalakra összpontosít. A hivatalos jogi és kézbesítési címadatok akkor kerülnek ide, amikor alkalmazandók.",
      "contactHeading": "Üzleti kapcsolat",
      "contactText": "Az üzleti és webhelyhez kapcsolódó megkereséseket a KONARA kapcsolatfelvételi oldalán keresztül küldje el.",
      "contactCta": "Kapcsolat a KONARA-val",
      "privacyHeading": "Adatvédelmi információk",
      "privacyText": "A kapcsolatfelvételi űrlap begyűjtheti a nevét, cégét, e-mail-címét és a megkeresés részleteit, hogy a KONARA áttekintse és megválaszolja az üzenetet.",
      "securityText": "Ne küldjön jelszavakat, bankkártyaadatokat, egészségügyi információkat vagy más különösen érzékeny adatokat a kapcsolatfelvételi űrlapon keresztül.",
      "ipHeading": "Szellemi tulajdon",
      "ipText": "Eltérő jelzés hiányában a KONARA eredeti márkája, webhelyszövegei, felületdizájnja és vizuális anyagai a KONARA számára vannak fenntartva. Harmadik felek védjegyei a megfelelő tulajdonosokhoz tartoznak.",
      "clear": "Egyértelmű információ. Egyértelmű kapcsolat."
    }
  },
  "ro": {
    "footer": {
      "legal": "LEGAL",
      "notice": "Informații juridice",
      "location": "Africa de Sud",
      "privacy": "Legal și confidențialitate"
    },
    "page": {
      "kicker": "KONARA · LEGAL",
      "title": "Informații juridice.",
      "hero": "Informații despre operator, contact, confidențialitate și proprietate intelectuală pentru site-ul KONARA.",
      "information": "INFORMAȚII",
      "operator": "Operator",
      "contact": "Contact",
      "privacy": "Confidențialitate",
      "ip": "Proprietate intelectuală",
      "operatorHeading": "Informații despre operator",
      "brandWebsite": "Marcă / site",
      "locationLabel": "Locație",
      "foundedLabel": "Fondată",
      "operatorText": "KONARA este un brand tehnologic sud-african axat pe automatizare AI, sisteme de afaceri și site-uri web. Detaliile formale ale entității și adresei de serviciu vor fi adăugate aici când devin aplicabile.",
      "contactHeading": "Contact comercial",
      "contactText": "Solicitările comerciale și cele legate de site trebuie trimise prin pagina de contact KONARA.",
      "contactCta": "Contactează KONARA",
      "privacyHeading": "Informații despre confidențialitate",
      "privacyText": "Formularul de contact poate colecta numele, compania, e-mailul și detaliile solicitării pentru ca KONARA să poată analiza și răspunde mesajului.",
      "securityText": "Nu trimite parole, date de card, informații medicale sau alte informații foarte sensibile prin formularul de contact.",
      "ipHeading": "Proprietate intelectuală",
      "ipText": "Dacă nu se precizează altfel, marca originală KONARA, textele site-ului, designul interfeței și materialele vizuale sunt rezervate KONARA. Mărcile terților aparțin proprietarilor respectivi.",
      "clear": "Informații clare. Contact clar."
    }
  },
  "bg": {
    "footer": {
      "legal": "ПРАВНА ИНФОРМАЦИЯ",
      "notice": "Правна информация",
      "location": "Южна Африка",
      "privacy": "Правна информация и поверителност"
    },
    "page": {
      "kicker": "KONARA · ПРАВНА ИНФОРМАЦИЯ",
      "title": "Правна информация.",
      "hero": "Информация за оператора, контактите, поверителността и интелектуалната собственост на уебсайта на KONARA.",
      "information": "ИНФОРМАЦИЯ",
      "operator": "Оператор",
      "contact": "Контакт",
      "privacy": "Поверителност",
      "ip": "Интелектуална собственост",
      "operatorHeading": "Информация за оператора",
      "brandWebsite": "Марка / уебсайт",
      "locationLabel": "Местоположение",
      "foundedLabel": "Основана",
      "operatorText": "KONARA е южноафриканска технологична марка, фокусирана върху AI автоматизация, бизнес системи и уебсайтове. Официалните данни за юридическото лице и адреса за обслужване ще бъдат добавени тук, когато са приложими.",
      "contactHeading": "Бизнес контакт",
      "contactText": "Бизнес запитванията и запитванията за уебсайта трябва да се изпращат чрез страницата за контакт на KONARA.",
      "contactCta": "Свържете се с KONARA",
      "privacyHeading": "Информация за поверителност",
      "privacyText": "Формулярът за контакт може да събира вашето име, компания, имейл и подробности за запитването, за да може KONARA да прегледа и отговори на съобщението ви.",
      "securityText": "Не изпращайте пароли, данни за платежни карти, медицинска информация или друга силно чувствителна информация чрез формуляра за контакт.",
      "ipHeading": "Интелектуална собственост",
      "ipText": "Освен ако не е посочено друго, оригиналната марка KONARA, текстовете на сайта, дизайнът на интерфейса и визуалните материали са запазени за KONARA. Марките на трети страни принадлежат на съответните им собственици.",
      "clear": "Ясна информация. Ясен контакт."
    }
  },
  "el": {
    "footer": {
      "legal": "ΝΟΜΙΚΑ",
      "notice": "Νομική ενημέρωση",
      "location": "Νότια Αφρική",
      "privacy": "Νομικά & απόρρητο"
    },
    "page": {
      "kicker": "KONARA · ΝΟΜΙΚΑ",
      "title": "Νομική ενημέρωση.",
      "hero": "Πληροφορίες για τον φορέα, την επικοινωνία, το απόρρητο και την πνευματική ιδιοκτησία του ιστότοπου KONARA.",
      "information": "ΠΛΗΡΟΦΟΡΙΕΣ",
      "operator": "Φορέας",
      "contact": "Επικοινωνία",
      "privacy": "Απόρρητο",
      "ip": "Πνευματική ιδιοκτησία",
      "operatorHeading": "Πληροφορίες φορέα",
      "brandWebsite": "Επωνυμία / ιστότοπος",
      "locationLabel": "Τοποθεσία",
      "foundedLabel": "Ιδρύθηκε",
      "operatorText": "Η KONARA είναι μια νοτιοαφρικανική τεχνολογική επωνυμία με έμφαση στην αυτοματοποίηση AI, τα επιχειρηματικά συστήματα και τους ιστότοπους. Τα επίσημα στοιχεία της οντότητας και της διεύθυνσης εξυπηρέτησης θα προστεθούν εδώ όταν ισχύουν.",
      "contactHeading": "Επαγγελματική επικοινωνία",
      "contactText": "Τα επαγγελματικά ερωτήματα και τα ερωτήματα για τον ιστότοπο πρέπει να υποβάλλονται μέσω της σελίδας επικοινωνίας της KONARA.",
      "contactCta": "Επικοινωνία με KONARA",
      "privacyHeading": "Πληροφορίες απορρήτου",
      "privacyText": "Η φόρμα επικοινωνίας μπορεί να συλλέγει το όνομά σας, την εταιρεία, το email και τις λεπτομέρειες του ερωτήματος, ώστε η KONARA να μπορεί να εξετάσει και να απαντήσει στο μήνυμά σας.",
      "securityText": "Μην υποβάλλετε κωδικούς πρόσβασης, στοιχεία καρτών πληρωμής, ιατρικές πληροφορίες ή άλλες ιδιαίτερα ευαίσθητες πληροφορίες μέσω της φόρμας επικοινωνίας.",
      "ipHeading": "Πνευματική ιδιοκτησία",
      "ipText": "Εκτός αν αναφέρεται διαφορετικά, η αρχική επωνυμία KONARA, τα κείμενα του ιστότοπου, ο σχεδιασμός διεπαφής και το οπτικό υλικό προορίζονται για την KONARA. Τα σήματα τρίτων ανήκουν στους αντίστοιχους ιδιοκτήτες τους.",
      "clear": "Σαφείς πληροφορίες. Σαφής επικοινωνία."
    }
  },
  "tr": {
    "footer": {
      "legal": "YASAL",
      "notice": "Yasal bildirim",
      "location": "Güney Afrika",
      "privacy": "Yasal & gizlilik"
    },
    "page": {
      "kicker": "KONARA · YASAL",
      "title": "Yasal bildirim.",
      "hero": "KONARA web sitesi için işletmeci, iletişim, gizlilik ve fikri mülkiyet bilgileri.",
      "information": "BİLGİLER",
      "operator": "İşletmeci",
      "contact": "İletişim",
      "privacy": "Gizlilik",
      "ip": "Fikri mülkiyet",
      "operatorHeading": "İşletmeci bilgileri",
      "brandWebsite": "Marka / web sitesi",
      "locationLabel": "Konum",
      "foundedLabel": "Kuruluş",
      "operatorText": "KONARA; yapay zekâ otomasyonu, iş sistemleri ve web sitelerine odaklanan Güney Afrikalı bir teknoloji markasıdır. Resmî kuruluş ve hizmet adresi bilgileri gerekli olduğunda buraya eklenecektir.",
      "contactHeading": "İş iletişimi",
      "contactText": "İş ve web sitesiyle ilgili talepler KONARA iletişim sayfası üzerinden gönderilmelidir.",
      "contactCta": "KONARA ile iletişime geç",
      "privacyHeading": "Gizlilik bilgileri",
      "privacyText": "İletişim formu; KONARA'nın mesajınızı inceleyip yanıtlayabilmesi için adınızı, şirketinizi, e-posta adresinizi ve talep ayrıntılarını toplayabilir.",
      "securityText": "İletişim formu üzerinden parola, ödeme kartı bilgileri, tıbbi bilgi veya diğer son derece hassas bilgileri göndermeyin.",
      "ipHeading": "Fikri mülkiyet",
      "ipText": "Aksi belirtilmedikçe KONARA'nın özgün markası, web sitesi metinleri, arayüz tasarımı ve görsel materyalleri KONARA'ya aittir. Üçüncü taraf markaları kendi sahiplerine aittir.",
      "clear": "Net bilgi. Net iletişim."
    }
  },
  "sv": {
    "footer": {
      "legal": "JURIDIK",
      "notice": "Juridisk information",
      "location": "Sydafrika",
      "privacy": "Juridik & integritet"
    },
    "page": {
      "kicker": "KONARA · JURIDIK",
      "title": "Juridisk information.",
      "hero": "Information om operatör, kontakt, integritet och immateriella rättigheter för KONARAs webbplats.",
      "information": "INFORMATION",
      "operator": "Operatör",
      "contact": "Kontakt",
      "privacy": "Integritet",
      "ip": "Immateriella rättigheter",
      "operatorHeading": "Operatörsinformation",
      "brandWebsite": "Varumärke / webbplats",
      "locationLabel": "Plats",
      "foundedLabel": "Grundad",
      "operatorText": "KONARA är ett sydafrikanskt teknikvarumärke med fokus på AI-automatisering, affärssystem och webbplatser. Formella uppgifter om juridisk enhet och delgivningsadress läggs till här när de blir tillämpliga.",
      "contactHeading": "Affärskontakt",
      "contactText": "Affärs- och webbplatsförfrågningar ska skickas via KONARAs kontaktsida.",
      "contactCta": "Kontakta KONARA",
      "privacyHeading": "Integritetsinformation",
      "privacyText": "Kontaktformuläret kan samla in ditt namn, företag, e-postadress och uppgifter om din förfrågan så att KONARA kan granska och besvara ditt meddelande.",
      "securityText": "Skicka inte lösenord, betalkortsuppgifter, medicinsk information eller annan mycket känslig information via kontaktformuläret.",
      "ipHeading": "Immateriella rättigheter",
      "ipText": "Om inget annat anges är KONARAs ursprungliga varumärke, webbplatstexter, gränssnittsdesign och visuella material reserverade för KONARA. Tredjepartsvarumärken tillhör sina respektive ägare.",
      "clear": "Tydlig information. Tydlig kontakt."
    }
  },
  "no": {
    "footer": {
      "legal": "JURIDISK",
      "notice": "Juridisk informasjon",
      "location": "Sør-Afrika",
      "privacy": "Juridisk & personvern"
    },
    "page": {
      "kicker": "KONARA · JURIDISK",
      "title": "Juridisk informasjon.",
      "hero": "Informasjon om operatør, kontakt, personvern og immaterielle rettigheter for KONARA-nettstedet.",
      "information": "INFORMASJON",
      "operator": "Operatør",
      "contact": "Kontakt",
      "privacy": "Personvern",
      "ip": "Immaterielle rettigheter",
      "operatorHeading": "Operatørinformasjon",
      "brandWebsite": "Merke / nettsted",
      "locationLabel": "Sted",
      "foundedLabel": "Grunnlagt",
      "operatorText": "KONARA er et sørafrikansk teknologimerke med fokus på AI-automatisering, forretningssystemer og nettsteder. Formelle opplysninger om juridisk enhet og tjenesteadresse legges til her når de blir relevante.",
      "contactHeading": "Forretningskontakt",
      "contactText": "Forretnings- og nettstedsforespørsler skal sendes via KONARAs kontaktside.",
      "contactCta": "Kontakt KONARA",
      "privacyHeading": "Personverninformasjon",
      "privacyText": "Kontaktskjemaet kan samle inn navn, selskap, e-post og detaljer om forespørselen slik at KONARA kan gjennomgå og svare på meldingen din.",
      "securityText": "Ikke send passord, betalingskortopplysninger, medisinsk informasjon eller annen svært sensitiv informasjon via kontaktskjemaet.",
      "ipHeading": "Immaterielle rettigheter",
      "ipText": "Med mindre annet er oppgitt, er KONARAs originale merke, nettstedstekster, grensesnittdesign og visuelle materialer forbeholdt KONARA. Tredjepartsmerker tilhører sine respektive eiere.",
      "clear": "Tydelig informasjon. Tydelig kontakt."
    }
  },
  "da": {
    "footer": {
      "legal": "JURIDISK",
      "notice": "Juridisk information",
      "location": "Sydafrika",
      "privacy": "Juridisk & privatliv"
    },
    "page": {
      "kicker": "KONARA · JURIDISK",
      "title": "Juridisk information.",
      "hero": "Information om operatør, kontakt, privatliv og immaterielle rettigheder for KONARA-webstedet.",
      "information": "INFORMATION",
      "operator": "Operatør",
      "contact": "Kontakt",
      "privacy": "Privatliv",
      "ip": "Immaterielle rettigheder",
      "operatorHeading": "Operatøroplysninger",
      "brandWebsite": "Brand / websted",
      "locationLabel": "Placering",
      "foundedLabel": "Grundlagt",
      "operatorText": "KONARA er et sydafrikansk teknologibrand med fokus på AI-automatisering, forretningssystemer og websteder. Formelle virksomheds- og serviceadresseoplysninger tilføjes her, når de er relevante.",
      "contactHeading": "Forretningskontakt",
      "contactText": "Forretnings- og webstedsforespørgsler skal sendes via KONARAs kontaktside.",
      "contactCta": "Kontakt KONARA",
      "privacyHeading": "Privatlivsinformation",
      "privacyText": "Kontaktformularen kan indsamle dit navn, din virksomhed, e-mail og oplysninger om din forespørgsel, så KONARA kan gennemgå og besvare din besked.",
      "securityText": "Indsend ikke adgangskoder, betalingskortoplysninger, medicinske oplysninger eller andre meget følsomme oplysninger via kontaktformularen.",
      "ipHeading": "Immaterielle rettigheder",
      "ipText": "Medmindre andet er angivet, er KONARAs originale brand, webstedstekster, grænsefladedesign og visuelle materialer forbeholdt KONARA. Tredjepartsmærker tilhører deres respektive ejere.",
      "clear": "Klar information. Klar kontakt."
    }
  },
  "fi": {
    "footer": {
      "legal": "OIKEUDELLISET TIEDOT",
      "notice": "Oikeudellinen ilmoitus",
      "location": "Etelä-Afrikka",
      "privacy": "Oikeudelliset tiedot ja tietosuoja"
    },
    "page": {
      "kicker": "KONARA · OIKEUDELLISET TIEDOT",
      "title": "Oikeudellinen ilmoitus.",
      "hero": "KONARA-verkkosivuston ylläpitäjää, yhteydenottoa, tietosuojaa ja immateriaalioikeuksia koskevat tiedot.",
      "information": "TIEDOT",
      "operator": "Ylläpitäjä",
      "contact": "Yhteystiedot",
      "privacy": "Tietosuoja",
      "ip": "Immateriaalioikeudet",
      "operatorHeading": "Ylläpitäjän tiedot",
      "brandWebsite": "Brändi / verkkosivusto",
      "locationLabel": "Sijainti",
      "foundedLabel": "Perustettu",
      "operatorText": "KONARA on eteläafrikkalainen teknologiabrändi, joka keskittyy AI-automaatioon, liiketoimintajärjestelmiin ja verkkosivustoihin. Viralliset yhteisö- ja palveluosoitetiedot lisätään tähän, kun ne tulevat sovellettaviksi.",
      "contactHeading": "Liiketoimintayhteys",
      "contactText": "Liiketoimintaan ja verkkosivustoon liittyvät tiedustelut tulee lähettää KONARAn yhteydenottosivun kautta.",
      "contactCta": "Ota yhteyttä KONARAan",
      "privacyHeading": "Tietosuojatiedot",
      "privacyText": "Yhteydenottolomake voi kerätä nimesi, yrityksesi, sähköpostiosoitteesi ja tiedustelun tiedot, jotta KONARA voi käsitellä viestisi ja vastata siihen.",
      "securityText": "Älä lähetä yhteydenottolomakkeella salasanoja, maksukorttitietoja, terveystietoja tai muita erittäin arkaluonteisia tietoja.",
      "ipHeading": "Immateriaalioikeudet",
      "ipText": "Ellei toisin mainita, KONARAn alkuperäinen brändi, verkkosivuston tekstit, käyttöliittymäsuunnittelu ja visuaaliset materiaalit on varattu KONARAlle. Kolmansien osapuolten tavaramerkit kuuluvat niiden omistajille.",
      "clear": "Selkeät tiedot. Selkeä yhteydenotto."
    }
  },
  "uk": {
    "footer": {
      "legal": "ЮРИДИЧНА ІНФОРМАЦІЯ",
      "notice": "Юридичне повідомлення",
      "location": "Південна Африка",
      "privacy": "Юридична інформація та конфіденційність"
    },
    "page": {
      "kicker": "KONARA · ЮРИДИЧНА ІНФОРМАЦІЯ",
      "title": "Юридичне повідомлення.",
      "hero": "Інформація про оператора, контакти, конфіденційність та інтелектуальну власність вебсайту KONARA.",
      "information": "ІНФОРМАЦІЯ",
      "operator": "Оператор",
      "contact": "Контакт",
      "privacy": "Конфіденційність",
      "ip": "Інтелектуальна власність",
      "operatorHeading": "Інформація про оператора",
      "brandWebsite": "Бренд / вебсайт",
      "locationLabel": "Місцезнаходження",
      "foundedLabel": "Засновано",
      "operatorText": "KONARA — південноафриканський технологічний бренд, зосереджений на AI-автоматизації, бізнес-системах і вебсайтах. Офіційні дані юридичної особи та адреси для обслуговування буде додано тут, коли це стане застосовним.",
      "contactHeading": "Бізнес-контакт",
      "contactText": "Бізнес-запити та запити щодо вебсайту слід надсилати через контактну сторінку KONARA.",
      "contactCta": "Зв’язатися з KONARA",
      "privacyHeading": "Інформація про конфіденційність",
      "privacyText": "Контактна форма може збирати ваше ім’я, компанію, електронну адресу та деталі запиту, щоб KONARA могла переглянути ваше повідомлення й відповісти на нього.",
      "securityText": "Не надсилайте через контактну форму паролі, дані платіжних карток, медичну інформацію чи інші особливо чутливі дані.",
      "ipHeading": "Інтелектуальна власність",
      "ipText": "Якщо не зазначено інше, оригінальний бренд KONARA, тексти вебсайту, дизайн інтерфейсу та візуальні матеріали зарезервовані за KONARA. Знаки третіх сторін належать їхнім відповідним власникам.",
      "clear": "Чітка інформація. Чіткий контакт."
    }
  },
  "ar": {
    "footer": {
      "legal": "قانوني",
      "notice": "إشعار قانوني",
      "location": "جنوب أفريقيا",
      "privacy": "القانون والخصوصية"
    },
    "page": {
      "kicker": "KONARA · قانوني",
      "title": "إشعار قانوني.",
      "hero": "معلومات المشغّل والتواصل والخصوصية والملكية الفكرية لموقع KONARA.",
      "information": "المعلومات",
      "operator": "المشغّل",
      "contact": "التواصل",
      "privacy": "الخصوصية",
      "ip": "الملكية الفكرية",
      "operatorHeading": "معلومات المشغّل",
      "brandWebsite": "العلامة / الموقع",
      "locationLabel": "الموقع",
      "foundedLabel": "تأسست",
      "operatorText": "KONARA علامة تقنية من جنوب أفريقيا تركز على أتمتة الذكاء الاصطناعي وأنظمة الأعمال والمواقع الإلكترونية. ستُضاف هنا بيانات الكيان الرسمية وعنوان الخدمة عندما تصبح مطلوبة.",
      "contactHeading": "التواصل التجاري",
      "contactText": "يجب إرسال الاستفسارات التجارية واستفسارات الموقع عبر صفحة التواصل مع KONARA.",
      "contactCta": "تواصل مع KONARA",
      "privacyHeading": "معلومات الخصوصية",
      "privacyText": "قد يجمع نموذج التواصل اسمك واسم شركتك وبريدك الإلكتروني وتفاصيل الاستفسار حتى تتمكن KONARA من مراجعة رسالتك والرد عليها.",
      "securityText": "لا ترسل كلمات مرور أو بيانات بطاقات دفع أو معلومات طبية أو أي معلومات شديدة الحساسية عبر نموذج التواصل.",
      "ipHeading": "الملكية الفكرية",
      "ipText": "ما لم يُذكر خلاف ذلك، تبقى علامة KONARA الأصلية ونصوص الموقع وتصميم الواجهة والمواد المرئية محفوظة لـ KONARA. وتبقى علامات الأطراف الثالثة ملكًا لأصحابها.",
      "clear": "معلومات واضحة. تواصل واضح."
    }
  },
  "hi": {
    "footer": {
      "legal": "कानूनी",
      "notice": "कानूनी सूचना",
      "location": "दक्षिण अफ्रीका",
      "privacy": "कानूनी और गोपनीयता"
    },
    "page": {
      "kicker": "KONARA · कानूनी",
      "title": "कानूनी सूचना.",
      "hero": "KONARA वेबसाइट के संचालक, संपर्क, गोपनीयता और बौद्धिक संपदा से संबंधित जानकारी।",
      "information": "जानकारी",
      "operator": "संचालक",
      "contact": "संपर्क",
      "privacy": "गोपनीयता",
      "ip": "बौद्धिक संपदा",
      "operatorHeading": "संचालक की जानकारी",
      "brandWebsite": "ब्रांड / वेबसाइट",
      "locationLabel": "स्थान",
      "foundedLabel": "स्थापित",
      "operatorText": "KONARA एक दक्षिण अफ्रीकी तकनीकी ब्रांड है जो AI ऑटोमेशन, बिज़नेस सिस्टम और वेबसाइटों पर केंद्रित है। लागू होने पर औपचारिक संस्था और सेवा-पते का विवरण यहाँ जोड़ा जाएगा।",
      "contactHeading": "व्यावसायिक संपर्क",
      "contactText": "व्यावसायिक और वेबसाइट संबंधी पूछताछ KONARA के संपर्क पेज के माध्यम से भेजी जानी चाहिए।",
      "contactCta": "KONARA से संपर्क करें",
      "privacyHeading": "गोपनीयता जानकारी",
      "privacyText": "संपर्क फ़ॉर्म आपका नाम, कंपनी, ईमेल और पूछताछ का विवरण एकत्र कर सकता है ताकि KONARA आपके संदेश की समीक्षा कर सके और जवाब दे सके।",
      "securityText": "संपर्क फ़ॉर्म के माध्यम से पासवर्ड, भुगतान कार्ड की जानकारी, चिकित्सा जानकारी या अन्य अत्यधिक संवेदनशील जानकारी न भेजें।",
      "ipHeading": "बौद्धिक संपदा",
      "ipText": "जब तक अन्यथा न कहा गया हो, KONARA का मूल ब्रांड, वेबसाइट सामग्री, इंटरफ़ेस डिज़ाइन और दृश्य सामग्री KONARA के लिए सुरक्षित हैं। तीसरे पक्ष के चिह्न उनके संबंधित स्वामियों के हैं।",
      "clear": "स्पष्ट जानकारी. स्पष्ट संपर्क."
    }
  },
  "ur": {
    "footer": {
      "legal": "قانونی",
      "notice": "قانونی نوٹس",
      "location": "جنوبی افریقہ",
      "privacy": "قانونی اور رازداری"
    },
    "page": {
      "kicker": "KONARA · قانونی",
      "title": "قانونی نوٹس.",
      "hero": "KONARA ویب سائٹ کے آپریٹر، رابطے، رازداری اور فکری ملکیت سے متعلق معلومات۔",
      "information": "معلومات",
      "operator": "آپریٹر",
      "contact": "رابطہ",
      "privacy": "رازداری",
      "ip": "فکری ملکیت",
      "operatorHeading": "آپریٹر کی معلومات",
      "brandWebsite": "برانڈ / ویب سائٹ",
      "locationLabel": "مقام",
      "foundedLabel": "قیام",
      "operatorText": "KONARA جنوبی افریقہ کا ایک ٹیکنالوجی برانڈ ہے جو AI آٹومیشن، کاروباری نظام اور ویب سائٹس پر مرکوز ہے۔ جب لاگو ہوگا تو ادارے اور سروس ایڈریس کی باضابطہ تفصیلات یہاں شامل کی جائیں گی۔",
      "contactHeading": "کاروباری رابطہ",
      "contactText": "کاروباری اور ویب سائٹ سے متعلق سوالات KONARA کے رابطہ صفحے کے ذریعے بھیجے جائیں۔",
      "contactCta": "KONARA سے رابطہ کریں",
      "privacyHeading": "رازداری کی معلومات",
      "privacyText": "رابطہ فارم آپ کا نام، کمپنی، ای میل اور سوال کی تفصیلات جمع کر سکتا ہے تاکہ KONARA آپ کے پیغام کا جائزہ لے کر جواب دے سکے۔",
      "securityText": "رابطہ فارم کے ذریعے پاس ورڈ، ادائیگی کارڈ کی تفصیلات، طبی معلومات یا دیگر انتہائی حساس معلومات نہ بھیجیں۔",
      "ipHeading": "فکری ملکیت",
      "ipText": "جب تک دوسری صورت میں نہ کہا جائے، KONARA کا اصل برانڈ، ویب سائٹ متن، انٹرفیس ڈیزائن اور بصری مواد KONARA کے لیے محفوظ ہیں۔ تیسرے فریق کے نشانات ان کے متعلقہ مالکان کی ملکیت ہیں۔",
      "clear": "واضح معلومات۔ واضح رابطہ۔"
    }
  },
  "bn": {
    "footer": {
      "legal": "আইনি",
      "notice": "আইনি নোটিশ",
      "location": "দক্ষিণ আফ্রিকা",
      "privacy": "আইনি ও গোপনীয়তা"
    },
    "page": {
      "kicker": "KONARA · আইনি",
      "title": "আইনি নোটিশ.",
      "hero": "KONARA ওয়েবসাইটের অপারেটর, যোগাযোগ, গোপনীয়তা এবং মেধাস্বত্ব সম্পর্কিত তথ্য।",
      "information": "তথ্য",
      "operator": "অপারেটর",
      "contact": "যোগাযোগ",
      "privacy": "গোপনীয়তা",
      "ip": "মেধাস্বত্ব",
      "operatorHeading": "অপারেটরের তথ্য",
      "brandWebsite": "ব্র্যান্ড / ওয়েবসাইট",
      "locationLabel": "অবস্থান",
      "foundedLabel": "প্রতিষ্ঠিত",
      "operatorText": "KONARA দক্ষিণ আফ্রিকার একটি প্রযুক্তি ব্র্যান্ড, যা AI অটোমেশন, ব্যবসায়িক সিস্টেম এবং ওয়েবসাইটে কেন্দ্রীভূত। প্রযোজ্য হলে আনুষ্ঠানিক প্রতিষ্ঠান ও সেবা-ঠিকানার তথ্য এখানে যোগ করা হবে।",
      "contactHeading": "ব্যবসায়িক যোগাযোগ",
      "contactText": "ব্যবসা ও ওয়েবসাইট-সংক্রান্ত জিজ্ঞাসা KONARA-এর যোগাযোগ পৃষ্ঠার মাধ্যমে পাঠাতে হবে।",
      "contactCta": "KONARA-এর সাথে যোগাযোগ করুন",
      "privacyHeading": "গোপনীয়তা তথ্য",
      "privacyText": "যোগাযোগ ফর্ম আপনার নাম, কোম্পানি, ইমেইল এবং জিজ্ঞাসার বিবরণ সংগ্রহ করতে পারে যাতে KONARA আপনার বার্তা পর্যালোচনা করে উত্তর দিতে পারে।",
      "securityText": "যোগাযোগ ফর্মের মাধ্যমে পাসওয়ার্ড, পেমেন্ট কার্ডের তথ্য, চিকিৎসা তথ্য বা অন্য কোনো অত্যন্ত সংবেদনশীল তথ্য পাঠাবেন না।",
      "ipHeading": "মেধাস্বত্ব",
      "ipText": "অন্যভাবে উল্লেখ না থাকলে KONARA-এর মূল ব্র্যান্ড, ওয়েবসাইটের লেখা, ইন্টারফেস ডিজাইন এবং ভিজ্যুয়াল উপকরণ KONARA-এর জন্য সংরক্ষিত। তৃতীয় পক্ষের চিহ্ন তাদের নিজ নিজ মালিকের সম্পত্তি।",
      "clear": "স্পষ্ট তথ্য। স্পষ্ট যোগাযোগ।"
    }
  },
  "ms": {
    "footer": {
      "legal": "UNDANG-UNDANG",
      "notice": "Notis undang-undang",
      "location": "Afrika Selatan",
      "privacy": "Undang-undang & privasi"
    },
    "page": {
      "kicker": "KONARA · UNDANG-UNDANG",
      "title": "Notis undang-undang.",
      "hero": "Maklumat pengendali, hubungan, privasi dan harta intelek untuk laman web KONARA.",
      "information": "MAKLUMAT",
      "operator": "Pengendali",
      "contact": "Hubungan",
      "privacy": "Privasi",
      "ip": "Harta intelek",
      "operatorHeading": "Maklumat pengendali",
      "brandWebsite": "Jenama / laman web",
      "locationLabel": "Lokasi",
      "foundedLabel": "Ditubuhkan",
      "operatorText": "KONARA ialah jenama teknologi Afrika Selatan yang memberi tumpuan kepada automasi AI, sistem perniagaan dan laman web. Butiran rasmi entiti dan alamat perkhidmatan akan ditambah di sini apabila berkenaan.",
      "contactHeading": "Hubungan perniagaan",
      "contactText": "Pertanyaan perniagaan dan berkaitan laman web hendaklah dihantar melalui halaman hubungan KONARA.",
      "contactCta": "Hubungi KONARA",
      "privacyHeading": "Maklumat privasi",
      "privacyText": "Borang hubungan boleh mengumpul nama, syarikat, e-mel dan butiran pertanyaan anda supaya KONARA boleh menyemak dan membalas mesej anda.",
      "securityText": "Jangan hantar kata laluan, butiran kad pembayaran, maklumat perubatan atau maklumat lain yang sangat sensitif melalui borang hubungan.",
      "ipHeading": "Harta intelek",
      "ipText": "Melainkan dinyatakan sebaliknya, jenama asal KONARA, teks laman web, reka bentuk antara muka dan bahan visual adalah dikhaskan untuk KONARA. Tanda pihak ketiga dimiliki oleh pemilik masing-masing.",
      "clear": "Maklumat jelas. Hubungan jelas."
    }
  },
  "id": {
    "footer": {
      "legal": "HUKUM",
      "notice": "Pemberitahuan hukum",
      "location": "Afrika Selatan",
      "privacy": "Hukum & privasi"
    },
    "page": {
      "kicker": "KONARA · HUKUM",
      "title": "Pemberitahuan hukum.",
      "hero": "Informasi operator, kontak, privasi, dan kekayaan intelektual untuk situs web KONARA.",
      "information": "INFORMASI",
      "operator": "Operator",
      "contact": "Kontak",
      "privacy": "Privasi",
      "ip": "Kekayaan intelektual",
      "operatorHeading": "Informasi operator",
      "brandWebsite": "Merek / situs web",
      "locationLabel": "Lokasi",
      "foundedLabel": "Didirikan",
      "operatorText": "KONARA adalah merek teknologi Afrika Selatan yang berfokus pada otomatisasi AI, sistem bisnis, dan situs web. Detail resmi entitas dan alamat layanan akan ditambahkan di sini jika berlaku.",
      "contactHeading": "Kontak bisnis",
      "contactText": "Pertanyaan bisnis dan terkait situs web harus dikirim melalui halaman kontak KONARA.",
      "contactCta": "Hubungi KONARA",
      "privacyHeading": "Informasi privasi",
      "privacyText": "Formulir kontak dapat mengumpulkan nama, perusahaan, email, dan detail pertanyaan Anda agar KONARA dapat meninjau dan membalas pesan Anda.",
      "securityText": "Jangan kirim kata sandi, detail kartu pembayaran, informasi medis, atau informasi sangat sensitif lainnya melalui formulir kontak.",
      "ipHeading": "Kekayaan intelektual",
      "ipText": "Kecuali dinyatakan lain, merek asli KONARA, teks situs web, desain antarmuka, dan materi visual dicadangkan untuk KONARA. Merek pihak ketiga adalah milik pemiliknya masing-masing.",
      "clear": "Informasi jelas. Kontak jelas."
    }
  },
  "tl": {
    "footer": {
      "legal": "LEGAL",
      "notice": "Legal na abiso",
      "location": "Timog Aprika",
      "privacy": "Legal at privacy"
    },
    "page": {
      "kicker": "KONARA · LEGAL",
      "title": "Legal na abiso.",
      "hero": "Impormasyon tungkol sa operator, contact, privacy at intellectual property ng KONARA website.",
      "information": "IMPORMASYON",
      "operator": "Operator",
      "contact": "Contact",
      "privacy": "Privacy",
      "ip": "Intellectual property",
      "operatorHeading": "Impormasyon ng operator",
      "brandWebsite": "Brand / website",
      "locationLabel": "Lokasyon",
      "foundedLabel": "Itinatag",
      "operatorText": "Ang KONARA ay isang technology brand mula sa Timog Aprika na nakatuon sa AI automation, business systems at websites. Idaragdag dito ang pormal na detalye ng entity at service address kapag naaangkop na.",
      "contactHeading": "Business contact",
      "contactText": "Ang mga business at website inquiry ay dapat ipadala sa pamamagitan ng KONARA contact page.",
      "contactCta": "Makipag-ugnayan sa KONARA",
      "privacyHeading": "Impormasyon sa privacy",
      "privacyText": "Maaaring kolektahin ng contact form ang iyong pangalan, kumpanya, email at detalye ng inquiry upang masuri at masagot ng KONARA ang iyong mensahe.",
      "securityText": "Huwag magsumite ng password, payment-card details, medical information o iba pang napakasensitibong impormasyon sa contact form.",
      "ipHeading": "Intellectual property",
      "ipText": "Maliban kung may ibang nakasaad, ang orihinal na KONARA brand, website copy, interface design at visual materials ay nakalaan sa KONARA. Ang third-party marks ay pag-aari ng kani-kanilang may-ari.",
      "clear": "Malinaw na impormasyon. Malinaw na contact."
    }
  },
  "ja": {
    "footer": {
      "legal": "法務",
      "notice": "法的表示",
      "location": "南アフリカ",
      "privacy": "法務・プライバシー"
    },
    "page": {
      "kicker": "KONARA · 法務",
      "title": "法的表示。",
      "hero": "KONARAウェブサイトの運営者、連絡先、プライバシー、知的財産に関する情報です。",
      "information": "情報",
      "operator": "運営者",
      "contact": "お問い合わせ",
      "privacy": "プライバシー",
      "ip": "知的財産",
      "operatorHeading": "運営者情報",
      "brandWebsite": "ブランド / ウェブサイト",
      "locationLabel": "所在地",
      "foundedLabel": "設立",
      "operatorText": "KONARAは、AI自動化、ビジネスシステム、ウェブサイトに注力する南アフリカのテクノロジーブランドです。正式な法人情報およびサービス住所は、該当する段階でここに追加されます。",
      "contactHeading": "ビジネスお問い合わせ",
      "contactText": "ビジネスおよびウェブサイトに関するお問い合わせは、KONARAのお問い合わせページから送信してください。",
      "contactCta": "KONARAに問い合わせる",
      "privacyHeading": "プライバシー情報",
      "privacyText": "お問い合わせフォームでは、KONARAがメッセージを確認して返信するために、氏名、会社名、メールアドレス、お問い合わせ内容を収集する場合があります。",
      "securityText": "お問い合わせフォームから、パスワード、支払いカード情報、医療情報、その他の機密性の高い情報を送信しないでください。",
      "ipHeading": "知的財産",
      "ipText": "特に明記されていない限り、KONARA独自のブランド、ウェブサイト文章、インターフェースデザイン、ビジュアル素材はKONARAに帰属します。第三者の商標はそれぞれの所有者に帰属します。",
      "clear": "明確な情報。明確な連絡先。"
    }
  },
  "ko": {
    "footer": {
      "legal": "법률",
      "notice": "법적 고지",
      "location": "남아프리카공화국",
      "privacy": "법률 및 개인정보"
    },
    "page": {
      "kicker": "KONARA · 법률",
      "title": "법적 고지.",
      "hero": "KONARA 웹사이트의 운영자, 연락처, 개인정보 보호 및 지식재산권 관련 정보입니다.",
      "information": "정보",
      "operator": "운영자",
      "contact": "연락처",
      "privacy": "개인정보 보호",
      "ip": "지식재산권",
      "operatorHeading": "운영자 정보",
      "brandWebsite": "브랜드 / 웹사이트",
      "locationLabel": "위치",
      "foundedLabel": "설립",
      "operatorText": "KONARA는 AI 자동화, 비즈니스 시스템 및 웹사이트에 중점을 둔 남아프리카공화국의 기술 브랜드입니다. 공식 법인 정보와 서비스 주소는 적용되는 시점에 여기에 추가됩니다.",
      "contactHeading": "비즈니스 문의",
      "contactText": "비즈니스 및 웹사이트 관련 문의는 KONARA 연락처 페이지를 통해 제출해 주세요.",
      "contactCta": "KONARA에 문의",
      "privacyHeading": "개인정보 보호 정보",
      "privacyText": "문의 양식은 KONARA가 메시지를 검토하고 답변할 수 있도록 이름, 회사, 이메일 및 문의 세부정보를 수집할 수 있습니다.",
      "securityText": "문의 양식을 통해 비밀번호, 결제 카드 정보, 의료 정보 또는 기타 매우 민감한 정보를 제출하지 마세요.",
      "ipHeading": "지식재산권",
      "ipText": "별도 표기가 없는 한 KONARA의 고유 브랜드, 웹사이트 문구, 인터페이스 디자인 및 시각 자료는 KONARA에 귀속됩니다. 제3자 상표는 각 소유자에게 귀속됩니다.",
      "clear": "명확한 정보. 명확한 연락."
    }
  },
  "zh-CN": {
    "footer": {
      "legal": "法律",
      "notice": "法律声明",
      "location": "南非",
      "privacy": "法律与隐私"
    },
    "page": {
      "kicker": "KONARA · 法律",
      "title": "法律声明。",
      "hero": "KONARA 网站的运营方、联系方式、隐私及知识产权信息。",
      "information": "信息",
      "operator": "运营方",
      "contact": "联系方式",
      "privacy": "隐私",
      "ip": "知识产权",
      "operatorHeading": "运营方信息",
      "brandWebsite": "品牌 / 网站",
      "locationLabel": "所在地",
      "foundedLabel": "创立",
      "operatorText": "KONARA 是一个南非科技品牌，专注于 AI 自动化、商业系统和网站。适用时，正式的实体信息和服务地址将补充在此处。",
      "contactHeading": "商务联系",
      "contactText": "商务及网站相关咨询应通过 KONARA 联系页面提交。",
      "contactCta": "联系 KONARA",
      "privacyHeading": "隐私信息",
      "privacyText": "联系表单可能会收集您的姓名、公司、电子邮件和咨询详情，以便 KONARA 审核并回复您的消息。",
      "securityText": "请勿通过联系表单提交密码、支付卡信息、医疗信息或其他高度敏感的信息。",
      "ipHeading": "知识产权",
      "ipText": "除非另有说明，KONARA 的原创品牌、网站文案、界面设计和视觉材料均归 KONARA 保留。第三方标识归其各自所有者所有。",
      "clear": "信息清晰。联系明确。"
    }
  },
  "zh-TW": {
    "footer": {
      "legal": "法律",
      "notice": "法律聲明",
      "location": "南非",
      "privacy": "法律與隱私"
    },
    "page": {
      "kicker": "KONARA · 法律",
      "title": "法律聲明。",
      "hero": "KONARA 網站的營運方、聯絡方式、隱私及智慧財產權資訊。",
      "information": "資訊",
      "operator": "營運方",
      "contact": "聯絡",
      "privacy": "隱私",
      "ip": "智慧財產權",
      "operatorHeading": "營運方資訊",
      "brandWebsite": "品牌 / 網站",
      "locationLabel": "所在地",
      "foundedLabel": "創立",
      "operatorText": "KONARA 是一個南非科技品牌，專注於 AI 自動化、商業系統與網站。適用時，正式的實體資訊與服務地址將補充於此。",
      "contactHeading": "商務聯絡",
      "contactText": "商務及網站相關詢問應透過 KONARA 聯絡頁面提交。",
      "contactCta": "聯絡 KONARA",
      "privacyHeading": "隱私資訊",
      "privacyText": "聯絡表單可能會收集您的姓名、公司、電子郵件與詢問詳情，以便 KONARA 審閱並回覆您的訊息。",
      "securityText": "請勿透過聯絡表單提交密碼、支付卡資料、醫療資訊或其他高度敏感的資訊。",
      "ipHeading": "智慧財產權",
      "ipText": "除非另有說明，KONARA 的原創品牌、網站文案、介面設計與視覺素材均由 KONARA 保留。第三方標誌屬於其各自的所有者。",
      "clear": "資訊清楚。聯絡明確。"
    }
  },
  "th": {
    "footer": {
      "legal": "กฎหมาย",
      "notice": "ประกาศทางกฎหมาย",
      "location": "แอฟริกาใต้",
      "privacy": "กฎหมายและความเป็นส่วนตัว"
    },
    "page": {
      "kicker": "KONARA · กฎหมาย",
      "title": "ประกาศทางกฎหมาย.",
      "hero": "ข้อมูลผู้ดำเนินการ การติดต่อ ความเป็นส่วนตัว และทรัพย์สินทางปัญญาสำหรับเว็บไซต์ KONARA",
      "information": "ข้อมูล",
      "operator": "ผู้ดำเนินการ",
      "contact": "ติดต่อ",
      "privacy": "ความเป็นส่วนตัว",
      "ip": "ทรัพย์สินทางปัญญา",
      "operatorHeading": "ข้อมูลผู้ดำเนินการ",
      "brandWebsite": "แบรนด์ / เว็บไซต์",
      "locationLabel": "ที่ตั้ง",
      "foundedLabel": "ก่อตั้ง",
      "operatorText": "KONARA เป็นแบรนด์เทคโนโลยีจากแอฟริกาใต้ที่มุ่งเน้นระบบอัตโนมัติด้วย AI ระบบธุรกิจ และเว็บไซต์ ข้อมูลนิติบุคคลและที่อยู่สำหรับให้บริการอย่างเป็นทางการจะเพิ่มไว้ที่นี่เมื่อมีผลใช้บังคับ",
      "contactHeading": "ติดต่อธุรกิจ",
      "contactText": "คำถามด้านธุรกิจและเว็บไซต์ควรส่งผ่านหน้าติดต่อของ KONARA",
      "contactCta": "ติดต่อ KONARA",
      "privacyHeading": "ข้อมูลความเป็นส่วนตัว",
      "privacyText": "แบบฟอร์มติดต่ออาจเก็บชื่อ บริษัท อีเมล และรายละเอียดคำถามของคุณ เพื่อให้ KONARA ตรวจสอบและตอบกลับข้อความของคุณได้",
      "securityText": "อย่าส่งรหัสผ่าน ข้อมูลบัตรชำระเงิน ข้อมูลทางการแพทย์ หรือข้อมูลที่มีความอ่อนไหวสูงอื่น ๆ ผ่านแบบฟอร์มติดต่อ",
      "ipHeading": "ทรัพย์สินทางปัญญา",
      "ipText": "เว้นแต่จะระบุไว้เป็นอย่างอื่น แบรนด์ KONARA ดั้งเดิม เนื้อหาเว็บไซต์ การออกแบบอินเทอร์เฟซ และสื่อภาพสงวนไว้สำหรับ KONARA เครื่องหมายของบุคคลที่สามเป็นของเจ้าของที่เกี่ยวข้อง",
      "clear": "ข้อมูลชัดเจน ติดต่อชัดเจน"
    }
  },
  "vi": {
    "footer": {
      "legal": "PHÁP LÝ",
      "notice": "Thông báo pháp lý",
      "location": "Nam Phi",
      "privacy": "Pháp lý & quyền riêng tư"
    },
    "page": {
      "kicker": "KONARA · PHÁP LÝ",
      "title": "Thông báo pháp lý.",
      "hero": "Thông tin về đơn vị vận hành, liên hệ, quyền riêng tư và sở hữu trí tuệ cho trang web KONARA.",
      "information": "THÔNG TIN",
      "operator": "Đơn vị vận hành",
      "contact": "Liên hệ",
      "privacy": "Quyền riêng tư",
      "ip": "Sở hữu trí tuệ",
      "operatorHeading": "Thông tin đơn vị vận hành",
      "brandWebsite": "Thương hiệu / trang web",
      "locationLabel": "Địa điểm",
      "foundedLabel": "Thành lập",
      "operatorText": "KONARA là một thương hiệu công nghệ Nam Phi tập trung vào tự động hóa AI, hệ thống doanh nghiệp và trang web. Thông tin pháp nhân chính thức và địa chỉ dịch vụ sẽ được bổ sung tại đây khi áp dụng.",
      "contactHeading": "Liên hệ kinh doanh",
      "contactText": "Các yêu cầu kinh doanh và liên quan đến trang web nên được gửi qua trang liên hệ của KONARA.",
      "contactCta": "Liên hệ KONARA",
      "privacyHeading": "Thông tin quyền riêng tư",
      "privacyText": "Biểu mẫu liên hệ có thể thu thập tên, công ty, email và chi tiết yêu cầu của bạn để KONARA xem xét và phản hồi tin nhắn.",
      "securityText": "Không gửi mật khẩu, thông tin thẻ thanh toán, thông tin y tế hoặc dữ liệu rất nhạy cảm khác qua biểu mẫu liên hệ.",
      "ipHeading": "Sở hữu trí tuệ",
      "ipText": "Trừ khi có ghi chú khác, thương hiệu gốc KONARA, nội dung trang web, thiết kế giao diện và tài liệu hình ảnh được dành cho KONARA. Nhãn hiệu của bên thứ ba thuộc về chủ sở hữu tương ứng.",
      "clear": "Thông tin rõ ràng. Liên hệ rõ ràng."
    }
  }
};

export function getLegalCopy(code: LanguageCode) {
  return LEGAL_COPY[code] ?? LEGAL_COPY.en;
}
