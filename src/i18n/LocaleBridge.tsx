import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useLocale } from "../context/LocaleContext";
import { getCopy, type CopyPack } from "./copy";

const WEB_COPY: Record<string, string[]> = {
  en: [
    "Websites built to do business.",
    "Your website should move the customer forward.",
    "From focused pages to advanced websites.",
    "Desktop quality. Mobile quality.",
    "The website can become part of the system.",
    "Build a website that actually works for the business.",
    "Business Websites",
    "Landing Pages",
    "Mobile-first Builds",
    "Advanced Websites",
  ],

  de: [
    "Websites, die fürs Geschäft gemacht sind.",
    "Ihre Website sollte den Kunden weiterführen.",
    "Von fokussierten Seiten bis zu anspruchsvollen Websites.",
    "Qualität am Desktop. Qualität auf Mobilgeräten.",
    "Die Website kann Teil des Systems werden.",
    "Bauen Sie eine Website, die wirklich für Ihr Unternehmen arbeitet.",
    "Unternehmenswebsites",
    "Landingpages",
    "Mobile-First-Websites",
    "Erweiterte Websites",
  ],

  fr: [
    "Des sites web conçus pour faire avancer votre entreprise.",
    "Votre site web doit faire avancer le client.",
    "Des pages ciblées aux sites web avancés.",
    "Qualité sur ordinateur. Qualité sur mobile.",
    "Le site web peut faire partie du système.",
    "Créez un site web qui travaille réellement pour l’entreprise.",
    "Sites web d’entreprise",
    "Pages d’atterrissage",
    "Sites conçus d’abord pour mobile",
    "Sites web avancés",
  ],

  nl: [
    "Websites gebouwd om zaken te doen.",
    "Uw website moet de klant verder helpen.",
    "Van gerichte pagina's tot geavanceerde websites.",
    "Desktopkwaliteit. Mobiele kwaliteit.",
    "De website kan onderdeel worden van het systeem.",
    "Bouw een website die echt voor het bedrijf werkt.",
    "Bedrijfswebsites",
    "Landingspagina’s",
    "Mobile-first websites",
    "Geavanceerde websites",
  ],

  es: [
    "Sitios web creados para hacer negocios.",
    "Tu sitio web debe hacer avanzar al cliente.",
    "Desde páginas enfocadas hasta sitios web avanzados.",
    "Calidad en escritorio. Calidad en móvil.",
    "El sitio web puede formar parte del sistema.",
    "Crea un sitio web que realmente funcione para el negocio.",
    "Sitios web empresariales",
    "Páginas de destino",
    "Sitios mobile-first",
    "Sitios web avanzados",
  ],

  pt: [
    "Sites feitos para fazer negócios.",
    "O seu site deve levar o cliente adiante.",
    "De páginas focadas a sites avançados.",
    "Qualidade no desktop. Qualidade no mobile.",
    "O site pode fazer parte do sistema.",
    "Crie um site que realmente funcione para o negócio.",
    "Sites empresariais",
    "Landing pages",
    "Sites mobile-first",
    "Sites avançados",
  ],

  it: [
    "Siti web creati per fare business.",
    "Il tuo sito web dovrebbe accompagnare il cliente avanti.",
    "Da pagine mirate a siti web avanzati.",
    "Qualità desktop. Qualità mobile.",
    "Il sito web può diventare parte del sistema.",
    "Crea un sito web che lavori davvero per l'azienda.",
    "Siti web aziendali",
    "Landing page",
    "Siti mobile-first",
    "Siti web avanzati",
  ],

  pl: [
    "Strony internetowe stworzone do prowadzenia biznesu.",
    "Twoja strona powinna prowadzić klienta dalej.",
    "Od ukierunkowanych stron po zaawansowane serwisy.",
    "Jakość na komputerze. Jakość na urządzeniach mobilnych.",
    "Strona internetowa może stać się częścią systemu.",
    "Zbuduj stronę, która naprawdę pracuje dla firmy.",
    "Strony firmowe",
    "Strony docelowe",
    "Strony mobile-first",
    "Zaawansowane strony",
  ],

  cs: [
    "Weby vytvořené pro podnikání.",
    "Váš web by měl zákazníka posouvat dál.",
    "Od cílených stránek po pokročilé weby.",
    "Kvalita na počítači. Kvalita na mobilu.",
    "Web se může stát součástí systému.",
    "Vytvořte web, který skutečně pracuje pro firmu.",
    "Firemní weby",
    "Vstupní stránky",
    "Weby mobile-first",
    "Pokročilé weby",
  ],

  sk: [
    "Weby vytvorené pre podnikanie.",
    "Váš web by mal zákazníka posúvať ďalej.",
    "Od cielených stránok po pokročilé weby.",
    "Kvalita na počítači. Kvalita na mobile.",
    "Web sa môže stať súčasťou systému.",
    "Vytvorte web, ktorý skutočne pracuje pre firmu.",
    "Firemné weby",
    "Vstupné stránky",
    "Weby mobile-first",
    "Pokročilé weby",
  ],

  hu: [
    "Üzletre tervezett weboldalak.",
    "A weboldalának tovább kell vezetnie az ügyfelet.",
    "A célzott oldalaktól a fejlett weboldalakig.",
    "Asztali minőség. Mobil minőség.",
    "A weboldal a rendszer részévé válhat.",
    "Készítsen olyan weboldalt, amely valóban a vállalkozásért dolgozik.",
    "Üzleti weboldalak",
    "Landing oldalak",
    "Mobile-first weboldalak",
    "Fejlett weboldalak",
  ],

  ro: [
    "Site-uri construite pentru afaceri.",
    "Site-ul tău ar trebui să ducă clientul mai departe.",
    "De la pagini concentrate la site-uri avansate.",
    "Calitate pe desktop. Calitate pe mobil.",
    "Site-ul poate deveni parte din sistem.",
    "Construiește un site care chiar lucrează pentru afacere.",
    "Site-uri de business",
    "Pagini de destinație",
    "Site-uri mobile-first",
    "Site-uri avansate",
  ],

  bg: [
    "Уебсайтове, създадени за бизнес.",
    "Вашият уебсайт трябва да води клиента напред.",
    "От фокусирани страници до усъвършенствани уебсайтове.",
    "Качество на настолен компютър. Качество на мобилно устройство.",
    "Уебсайтът може да стане част от системата.",
    "Изградете уебсайт, който наистина работи за бизнеса.",
    "Бизнес уебсайтове",
    "Целеви страници",
    "Mobile-first сайтове",
    "Усъвършенствани уебсайтове",
  ],

  el: [
    "Ιστότοποι φτιαγμένοι για επιχειρήσεις.",
    "Ο ιστότοπός σας πρέπει να οδηγεί τον πελάτη στο επόμενο βήμα.",
    "Από στοχευμένες σελίδες έως προηγμένους ιστοτόπους.",
    "Ποιότητα σε υπολογιστή. Ποιότητα σε κινητό.",
    "Ο ιστότοπος μπορεί να γίνει μέρος του συστήματος.",
    "Δημιουργήστε έναν ιστότοπο που πραγματικά δουλεύει για την επιχείρηση.",
    "Εταιρικοί ιστότοποι",
    "Σελίδες προορισμού",
    "Ιστότοποι mobile-first",
    "Προηγμένοι ιστότοποι",
  ],

  tr: [
    "İş yapmak için tasarlanmış web siteleri.",
    "Web siteniz müşteriyi ileri taşımalıdır.",
    "Odaklı sayfalardan gelişmiş web sitelerine.",
    "Masaüstü kalitesi. Mobil kalite.",
    "Web sitesi sistemin bir parçası olabilir.",
    "İşletme için gerçekten çalışan bir web sitesi oluşturun.",
    "Kurumsal web siteleri",
    "Açılış sayfaları",
    "Mobil öncelikli siteler",
    "Gelişmiş web siteleri",
  ],

  sv: [
    "Webbplatser byggda för affärer.",
    "Din webbplats ska föra kunden vidare.",
    "Från fokuserade sidor till avancerade webbplatser.",
    "Kvalitet på dator. Kvalitet på mobil.",
    "Webbplatsen kan bli en del av systemet.",
    "Bygg en webbplats som verkligen arbetar för företaget.",
    "Företagswebbplatser",
    "Landningssidor",
    "Mobile-first-webbplatser",
    "Avancerade webbplatser",
  ],

  no: [
    "Nettsteder bygget for business.",
    "Nettstedet ditt skal føre kunden videre.",
    "Fra fokuserte sider til avanserte nettsteder.",
    "Kvalitet på desktop. Kvalitet på mobil.",
    "Nettstedet kan bli en del av systemet.",
    "Bygg et nettsted som faktisk jobber for virksomheten.",
    "Bedriftsnettsteder",
    "Landingssider",
    "Mobile-first-nettsteder",
    "Avanserte nettsteder",
  ],

  da: [
    "Websites bygget til forretning.",
    "Dit website skal føre kunden videre.",
    "Fra fokuserede sider til avancerede websites.",
    "Kvalitet på desktop. Kvalitet på mobil.",
    "Websitet kan blive en del af systemet.",
    "Byg et website, der faktisk arbejder for virksomheden.",
    "Virksomhedswebsites",
    "Landingssider",
    "Mobile-first-websites",
    "Avancerede websites",
  ],

  fi: [
    "Verkkosivut, jotka on rakennettu liiketoimintaa varten.",
    "Verkkosivustosi pitäisi viedä asiakasta eteenpäin.",
    "Kohdennetuista sivuista edistyneisiin verkkosivustoihin.",
    "Laatua työpöydällä. Laatua mobiilissa.",
    "Verkkosivusto voi olla osa järjestelmää.",
    "Rakenna verkkosivusto, joka todella toimii yrityksen hyväksi.",
    "Yrityssivustot",
    "Laskeutumissivut",
    "Mobile-first-sivustot",
    "Edistyneet verkkosivustot",
  ],

  uk: [
    "Сайти, створені для бізнесу.",
    "Ваш сайт має вести клієнта далі.",
    "Від цільових сторінок до складних вебсайтів.",
    "Якість на комп’ютері. Якість на мобільному.",
    "Сайт може стати частиною системи.",
    "Створіть сайт, який справді працює для бізнесу.",
    "Бізнес-сайти",
    "Цільові сторінки",
    "Mobile-first сайти",
    "Розширені вебсайти",
  ],

  ar: [
    "مواقع إلكترونية صُممت لخدمة الأعمال.",
    "يجب أن يدفع موقعك العميل إلى الخطوة التالية.",
    "من صفحات مركزة إلى مواقع إلكترونية متقدمة.",
    "جودة على سطح المكتب. جودة على الهاتف.",
    "يمكن أن يصبح الموقع جزءًا من النظام.",
    "أنشئ موقعًا يعمل فعليًا لصالح الأعمال.",
    "مواقع الأعمال",
    "صفحات الهبوط",
    "مواقع مهيأة للموبايل أولاً",
    "مواقع متقدمة",
  ],

  hi: [
    "व्यवसाय के लिए बनाए गए वेबसाइट।",
    "आपकी वेबसाइट ग्राहक को अगले कदम तक ले जानी चाहिए।",
    "केंद्रित पेजों से उन्नत वेबसाइटों तक।",
    "डेस्कटॉप पर गुणवत्ता। मोबाइल पर गुणवत्ता।",
    "वेबसाइट सिस्टम का हिस्सा बन सकती है।",
    "ऐसी वेबसाइट बनाएं जो वास्तव में व्यवसाय के लिए काम करे।",
    "व्यावसायिक वेबसाइटें",
    "लैंडिंग पेज",
    "मोबाइल-फर्स्ट वेबसाइटें",
    "उन्नत वेबसाइटें",
  ],

  ur: [
    "کاروبار کے لیے بنائی گئی ویب سائٹس۔",
    "آپ کی ویب سائٹ کو گاہک کو اگلے مرحلے تک لے جانا چاہیے۔",
    "مرکوز صفحات سے جدید ویب سائٹس تک۔",
    "ڈیسک ٹاپ پر معیار۔ موبائل پر معیار۔",
    "ویب سائٹ نظام کا حصہ بن سکتی ہے۔",
    "ایسی ویب سائٹ بنائیں جو واقعی کاروبار کے لیے کام کرے۔",
    "کاروباری ویب سائٹس",
    "لینڈنگ پیجز",
    "موبائل فرسٹ ویب سائٹس",
    "جدید ویب سائٹس",
  ],

  bn: [
    "ব্যবসার জন্য তৈরি ওয়েবসাইট।",
    "আপনার ওয়েবসাইট গ্রাহককে পরবর্তী ধাপে নিয়ে যাবে।",
    "কেন্দ্রিত পেজ থেকে উন্নত ওয়েবসাইট পর্যন্ত।",
    "ডেস্কটপে মান। মোবাইলে মান।",
    "ওয়েবসাইটটি সিস্টেমের অংশ হতে পারে।",
    "এমন একটি ওয়েবসাইট তৈরি করুন যা সত্যিই ব্যবসার জন্য কাজ করে।",
    "ব্যবসায়িক ওয়েবসাইট",
    "ল্যান্ডিং পেজ",
    "মোবাইল-ফার্স্ট ওয়েবসাইট",
    "উন্নত ওয়েবসাইট",
  ],

  ms: [
    "Laman web dibina untuk perniagaan.",
    "Laman web anda harus membawa pelanggan ke langkah seterusnya.",
    "Daripada halaman fokus kepada laman web lanjutan.",
    "Kualiti desktop. Kualiti mudah alih.",
    "Laman web boleh menjadi sebahagian daripada sistem.",
    "Bina laman web yang benar-benar berfungsi untuk perniagaan.",
    "Laman web perniagaan",
    "Halaman pendaratan",
    "Laman web mobile-first",
    "Laman web lanjutan",
  ],

  id: [
    "Situs web yang dibuat untuk bisnis.",
    "Situs web Anda harus membawa pelanggan ke langkah berikutnya.",
    "Dari halaman terfokus hingga situs web tingkat lanjut.",
    "Kualitas desktop. Kualitas mobile.",
    "Situs web dapat menjadi bagian dari sistem.",
    "Bangun situs web yang benar-benar bekerja untuk bisnis.",
    "Situs web bisnis",
    "Landing page",
    "Situs mobile-first",
    "Situs web tingkat lanjut",
  ],

  tl: [
    "Mga website na ginawa para sa negosyo.",
    "Dapat dalhin ng website mo ang customer sa susunod na hakbang.",
    "Mula sa focused pages hanggang advanced websites.",
    "Kalidad sa desktop. Kalidad sa mobile.",
    "Maaaring maging bahagi ng system ang website.",
    "Gumawa ng website na talagang gumagana para sa negosyo.",
    "Business websites",
    "Landing pages",
    "Mobile-first websites",
    "Advanced websites",
  ],

  ja: [
    "ビジネスのために作られたウェブサイト。",
    "ウェブサイトはお客様を次のステップへ導くべきです。",
    "目的を絞ったページから高度なウェブサイトまで。",
    "デスクトップ品質。モバイル品質。",
    "ウェブサイトはシステムの一部になれます。",
    "ビジネスのために本当に機能するウェブサイトを構築します。",
    "ビジネスサイト",
    "ランディングページ",
    "モバイルファーストサイト",
    "高度なウェブサイト",
  ],

  ko: [
    "비즈니스를 위해 만들어진 웹사이트.",
    "웹사이트는 고객을 다음 단계로 이끌어야 합니다.",
    "집중형 페이지부터 고급 웹사이트까지.",
    "데스크톱 품질. 모바일 품질.",
    "웹사이트는 시스템의 일부가 될 수 있습니다.",
    "비즈니스를 위해 실제로 작동하는 웹사이트를 만드세요.",
    "비즈니스 웹사이트",
    "랜딩 페이지",
    "모바일 우선 웹사이트",
    "고급 웹사이트",
  ],

  "zh-CN": [
    "为业务而打造的网站。",
    "您的网站应该推动客户进入下一步。",
    "从聚焦型页面到高级网站。",
    "桌面端品质。移动端品质。",
    "网站可以成为系统的一部分。",
    "打造一个真正为业务工作的网页。",
    "企业网站",
    "落地页",
    "移动优先网站",
    "高级网站",
  ],

  "zh-TW": [
    "為業務而打造的網站。",
    "您的網站應該推動客戶進入下一步。",
    "從聚焦型頁面到進階網站。",
    "桌面端品質。行動端品質。",
    "網站可以成為系統的一部分。",
    "打造一個真正為業務工作的網站。",
    "企業網站",
    "登陸頁",
    "行動優先網站",
    "進階網站",
  ],

  th: [
    "เว็บไซต์ที่สร้างมาเพื่อธุรกิจ",
    "เว็บไซต์ของคุณควรพาลูกค้าไปสู่ขั้นตอนถัดไป",
    "ตั้งแต่หน้าแบบโฟกัสไปจนถึงเว็บไซต์ขั้นสูง",
    "คุณภาพบนเดสก์ท็อป คุณภาพบนมือถือ",
    "เว็บไซต์สามารถเป็นส่วนหนึ่งของระบบได้",
    "สร้างเว็บไซต์ที่ทำงานเพื่อธุรกิจได้จริง",
    "เว็บไซต์ธุรกิจ",
    "แลนดิ้งเพจ",
    "เว็บไซต์แบบ mobile-first",
    "เว็บไซต์ขั้นสูง",
  ],

  vi: [
    "Website được xây dựng để phục vụ kinh doanh.",
    "Website của bạn nên đưa khách hàng đến bước tiếp theo.",
    "Từ các trang tập trung đến website nâng cao.",
    "Chất lượng trên desktop. Chất lượng trên mobile.",
    "Website có thể trở thành một phần của hệ thống.",
    "Xây dựng một website thực sự phục vụ doanh nghiệp.",
    "Website doanh nghiệp",
    "Trang đích",
    "Website ưu tiên di động",
    "Website nâng cao",
  ],
};

/* KONARA VISUAL LABEL I18N START */
const VISUAL_LABEL_COPY: Record<
  string,
  {
    lead: string;
    book: string;
    mail: string;
    data: string;
    web: string;
    auto: string;
    website: string;
  }
> = {
  "en": {
    "lead": "LEAD",
    "book": "BOOK",
    "mail": "MAIL",
    "data": "DATA",
    "web": "WEB",
    "auto": "AUTO",
    "website": "Website"
  },
  "de": {
    "lead": "ANFRAGE",
    "book": "BUCHEN",
    "mail": "E-MAIL",
    "data": "DATEN",
    "web": "WEBSEITE",
    "auto": "AUTOM.",
    "website": "Webseite"
  },
  "fr": {
    "lead": "PROSPECT",
    "book": "RÉSERVER",
    "mail": "E-MAIL",
    "data": "DONNÉES",
    "web": "SITE WEB",
    "auto": "AUTO.",
    "website": "Site web"
  },
  "nl": {
    "lead": "LEAD",
    "book": "BOEKEN",
    "mail": "E-MAIL",
    "data": "GEGEVENS",
    "web": "WEBSITE",
    "auto": "AUTO.",
    "website": "Website"
  },
  "es": {
    "lead": "CLIENTE",
    "book": "RESERVAR",
    "mail": "CORREO",
    "data": "DATOS",
    "web": "SITIO WEB",
    "auto": "AUTO.",
    "website": "Sitio web"
  },
  "pt": {
    "lead": "LEAD",
    "book": "AGENDAR",
    "mail": "E-MAIL",
    "data": "DADOS",
    "web": "SITE",
    "auto": "AUTO.",
    "website": "Site"
  },
  "it": {
    "lead": "CONTATTO",
    "book": "PRENOTA",
    "mail": "E-MAIL",
    "data": "DATI",
    "web": "SITO WEB",
    "auto": "AUTO.",
    "website": "Sito web"
  },
  "pl": {
    "lead": "KONTAKT",
    "book": "REZERWUJ",
    "mail": "E-MAIL",
    "data": "DANE",
    "web": "WWW",
    "auto": "AUTOM.",
    "website": "Strona"
  },
  "cs": {
    "lead": "ZÁJEMCE",
    "book": "REZERVACE",
    "mail": "E-MAIL",
    "data": "DATA",
    "web": "WEB",
    "auto": "AUTOM.",
    "website": "Web"
  },
  "sk": {
    "lead": "ZÁUJEMCA",
    "book": "REZERVÁCIA",
    "mail": "E-MAIL",
    "data": "ÚDAJE",
    "web": "WEB",
    "auto": "AUTOM.",
    "website": "Web"
  },
  "hu": {
    "lead": "ÉRDEKLŐDŐ",
    "book": "FOGLALÁS",
    "mail": "E-MAIL",
    "data": "ADAT",
    "web": "WEB",
    "auto": "AUTOM.",
    "website": "Weboldal"
  },
  "ro": {
    "lead": "PROSPECT",
    "book": "REZERVĂ",
    "mail": "E-MAIL",
    "data": "DATE",
    "web": "SITE WEB",
    "auto": "AUTO.",
    "website": "Site"
  },
  "bg": {
    "lead": "КЛИЕНТ",
    "book": "РЕЗЕРВ.",
    "mail": "ИМЕЙЛ",
    "data": "ДАННИ",
    "web": "УЕБ",
    "auto": "АВТОМ.",
    "website": "Уебсайт"
  },
  "el": {
    "lead": "ΕΠΑΦΗ",
    "book": "ΚΡΑΤΗΣΗ",
    "mail": "EMAIL",
    "data": "ΔΕΔΟΜ.",
    "web": "ΙΣΤΟΣ",
    "auto": "ΑΥΤΟΜ.",
    "website": "Ιστότοπος"
  },
  "tr": {
    "lead": "ADAY",
    "book": "REZERV.",
    "mail": "E-POSTA",
    "data": "VERİ",
    "web": "WEB",
    "auto": "OTOM.",
    "website": "Web sitesi"
  },
  "sv": {
    "lead": "LEAD",
    "book": "BOKA",
    "mail": "E-POST",
    "data": "DATA",
    "web": "WEBB",
    "auto": "AUTO.",
    "website": "Webbplats"
  },
  "no": {
    "lead": "LEAD",
    "book": "BESTILL",
    "mail": "E-POST",
    "data": "DATA",
    "web": "NETT",
    "auto": "AUTO.",
    "website": "Nettsted"
  },
  "da": {
    "lead": "LEAD",
    "book": "BOOK",
    "mail": "E-MAIL",
    "data": "DATA",
    "web": "WEB",
    "auto": "AUTO.",
    "website": "Website"
  },
  "fi": {
    "lead": "LIIDI",
    "book": "VARAA",
    "mail": "SÄHKÖP.",
    "data": "DATA",
    "web": "VERKKO",
    "auto": "AUTO.",
    "website": "Verkkosivu"
  },
  "uk": {
    "lead": "ЛІД",
    "book": "БРОНЮВ.",
    "mail": "ПОШТА",
    "data": "ДАНІ",
    "web": "ВЕБ",
    "auto": "АВТОМ.",
    "website": "Вебсайт"
  },
  "ar": {
    "lead": "عميل",
    "book": "حجز",
    "mail": "بريد",
    "data": "بيانات",
    "web": "ويب",
    "auto": "أتمتة",
    "website": "موقع"
  },
  "hi": {
    "lead": "लीड",
    "book": "बुकिंग",
    "mail": "ईमेल",
    "data": "डेटा",
    "web": "वेब",
    "auto": "ऑटो.",
    "website": "वेबसाइट"
  },
  "ur": {
    "lead": "لیڈ",
    "book": "بکنگ",
    "mail": "ای میل",
    "data": "ڈیٹا",
    "web": "ویب",
    "auto": "آٹوم.",
    "website": "ویب سائٹ"
  },
  "bn": {
    "lead": "লিড",
    "book": "বুকিং",
    "mail": "ইমেইল",
    "data": "ডেটা",
    "web": "ওয়েব",
    "auto": "অটো.",
    "website": "ওয়েবসাইট"
  },
  "ms": {
    "lead": "PROSPEK",
    "book": "TEMPAH",
    "mail": "E-MEL",
    "data": "DATA",
    "web": "WEB",
    "auto": "AUTO.",
    "website": "Laman web"
  },
  "id": {
    "lead": "PROSPEK",
    "book": "PESAN",
    "mail": "EMAIL",
    "data": "DATA",
    "web": "WEB",
    "auto": "OTO.",
    "website": "Situs web"
  },
  "tl": {
    "lead": "PROSPEK",
    "book": "MAG-BOOK",
    "mail": "EMAIL",
    "data": "DATOS",
    "web": "WEB",
    "auto": "AUTO.",
    "website": "Website"
  },
  "ja": {
    "lead": "見込み客",
    "book": "予約",
    "mail": "メール",
    "data": "データ",
    "web": "ウェブ",
    "auto": "自動化",
    "website": "ウェブサイト"
  },
  "ko": {
    "lead": "리드",
    "book": "예약",
    "mail": "메일",
    "data": "데이터",
    "web": "웹",
    "auto": "자동화",
    "website": "웹사이트"
  },
  "zh-CN": {
    "lead": "线索",
    "book": "预约",
    "mail": "邮件",
    "data": "数据",
    "web": "网页",
    "auto": "自动化",
    "website": "网站"
  },
  "zh-TW": {
    "lead": "名單",
    "book": "預約",
    "mail": "郵件",
    "data": "資料",
    "web": "網頁",
    "auto": "自動化",
    "website": "網站"
  },
  "th": {
    "lead": "ลีด",
    "book": "จอง",
    "mail": "อีเมล",
    "data": "ข้อมูล",
    "web": "เว็บ",
    "auto": "อัตโนมัติ",
    "website": "เว็บไซต์"
  },
  "vi": {
    "lead": "KHÁCH",
    "book": "ĐẶT LỊCH",
    "mail": "EMAIL",
    "data": "DỮ LIỆU",
    "web": "WEB",
    "auto": "TỰ ĐỘNG",
    "website": "Trang web"
  }
};
/* KONARA VISUAL LABEL I18N END */

function normalize(value: string) {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function pipePart(value: string, index: number) {
  const pieces = value.split("|");
  return (pieces[index] ?? pieces[0] ?? "").trim();
}

function add(
  map: Map<string, string>,
  english: string,
  translated: string,
) {
  const key = normalize(english);

  if (!key) return;

  map.set(key, translated);
}

function buildExactMap(
  english: unknown,
  translated: unknown,
  map: Map<string, string>,
) {
  if (
    typeof english === "string" &&
    typeof translated === "string"
  ) {
    add(map, english, translated);

    if (english.includes("|") && translated.includes("|")) {
      const enParts = english.split("|");
      const translatedParts = translated.split("|");

      enParts.forEach((part, index) => {
        const result = translatedParts[index];

        if (typeof result === "string") {
          add(map, part, result.trim());
        }
      });
    }

    return;
  }

  if (Array.isArray(english) && Array.isArray(translated)) {
    const length = Math.min(
      english.length,
      translated.length,
    );

    for (let index = 0; index < length; index += 1) {
      buildExactMap(
        english[index],
        translated[index],
        map,
      );
    }

    return;
  }

  if (
    english &&
    translated &&
    typeof english === "object" &&
    typeof translated === "object"
  ) {
    const englishRecord = english as Record<string, unknown>;
    const translatedRecord =
      translated as Record<string, unknown>;

    Object.keys(englishRecord).forEach((key) => {
      if (key in translatedRecord) {
        buildExactMap(
          englishRecord[key],
          translatedRecord[key],
          map,
        );
      }
    });
  }
}

function buildAliasMap(
  copy: CopyPack,
  languageCode: string,
) {
  const map = new Map<string, string>();

  const a = (english: string, translated: string) => {
    add(map, english, translated);
  };

  const productTitle = (index: number) =>
    pipePart(copy.solutions.products[index] ?? "", 0);

  const productText = (index: number) =>
    pipePart(copy.solutions.products[index] ?? "", 1);

  const serviceTitle = (index: number) =>
    pipePart(copy.services.cards[index] ?? "", 0);

  const serviceText = (index: number) =>
    pipePart(copy.services.cards[index] ?? "", 1);

  const homeSolutionText = (index: number) =>
    pipePart(copy.home.solutions[index] ?? "", 1);

  const processTitle = (index: number) =>
    pipePart(copy.services.process[index] ?? "", 0);

  const processText = (index: number) =>
    pipePart(copy.services.process[index] ?? "", 1);

  const principleTitle = (index: number) =>
    pipePart(copy.about.principles[index] ?? "", 0);

  const principleText = (index: number) =>
    pipePart(copy.about.principles[index] ?? "", 1);

  const homeStepTitle = (index: number) =>
    pipePart(copy.home.steps[index] ?? "", 0);

  const timelineTitle = (index: number) =>
    pipePart(copy.about.timeline[index] ?? "", 0);

  const web =
    WEB_COPY[languageCode] ??
    WEB_COPY.en;

  /* KONARA VISUAL LABEL ALIASES START */
  const visual =
    VISUAL_LABEL_COPY[languageCode] ??
    VISUAL_LABEL_COPY.en;

  a("LEAD", visual.lead);
  a("BOOK", visual.book);
  a("MAIL", visual.mail);
  a("DATA", visual.data);
  a("WEB", visual.web);
  a("AUTO", visual.auto);
  a("Website", visual.website);
  /* KONARA VISUAL LABEL ALIASES END */

  /* ----------------------------------------------------------
     GLOBAL
     ---------------------------------------------------------- */

  a(
    "Intelligent systems built for modern business.",
    copy.footer.tagline,
  );

  a(
    "Intelligent systems for modern businesses.",
    copy.footer.tagline,
  );

  a("Explore KONARA", copy.common.explore);
  a("About KONARA", copy.nav[3]);
  a("Explore Services", copy.nav[2]);
  a("Explore KONARA Solutions", copy.common.explore);
  a("Explore this solution", copy.common.explore);
  a("Explore capabilities", copy.common.explore);
  a("Find the right solution", copy.common.explore);
  a("See all solutions", copy.common.explore);
  a("Explore the system", copy.common.explore);
  a("How KONARA thinks", copy.nav[3]);
  a("Learn how KONARA works", copy.nav[3]);
  a("Design my KONARA system", copy.common.book);
  a("Start a Project", copy.contact.send);
  a("Start a Conversation", copy.contact.send);
  a("Start a Website Project", copy.contact.send);
  a("Explore what we build", copy.common.explore);
  a("Explore Website Design", copy.common.explore);
  a("Book a Demo", copy.common.book);

  a("Website Design", "KONARA WEB");
  a("Website Design & Development", "KONARA WEB");

  /* ----------------------------------------------------------
     HOME HERO
     ---------------------------------------------------------- */

  a(
    "INTELLIGENT SYSTEMS FOR MODERN BUSINESS",
    copy.home.eyebrow,
  );

  a(
    "Business,",
    pipePart(copy.home.hero, 0),
  );

  a(
    "made intelligent.",
    pipePart(copy.home.hero, 1),
  );

  a(
    "KONARA connects customer conversations, websites and business workflows into one intelligent layer — designed around the way your company actually works.",
    copy.home.text,
  );

  /* PRODUCT DATA */

  a("Lead Capture", serviceTitle(1));
  a("Appointment Booking", productTitle(1));
  a("Connected CRM", productTitle(4));
  a("CRM Integration", productTitle(4));
  a("WhatsApp Automation", serviceTitle(4));
  a("Email Automation", serviceTitle(4));
  a("Business Automation", serviceTitle(4));

  a(
    "An intelligent first point of contact that answers questions, understands intent and moves customers toward the right next step.",
    productText(0),
  );

  a(
    "An intelligent first point of contact that can answer questions, understand intent, qualify visitors and guide customers toward the right next step.",
    productText(0),
  );

  a(
    "Give customers a fast, intelligent first point of contact that can answer questions, understand intent, qualify enquiries and route conversations correctly.",
    serviceText(0),
  );

  a(
    "Give customers fast, intelligent answers while capturing context your team can actually use.",
    homeSolutionText(0),
  );

  a(
    "Turn website traffic and conversations into structured opportunities instead of letting valuable enquiries disappear.",
    serviceText(1),
  );

  a(
    "Turn website visitors and conversations into structured opportunities instead of lost enquiries.",
    serviceText(1),
  );

  a(
    "Turn website visitors and conversations into structured opportunities your team can understand, prioritise and follow up.",
    serviceText(1),
  );

  a(
    "Move customers from questions to confirmed appointments through a smoother automated booking journey.",
    productText(1),
  );

  a(
    "Move customers from questions to confirmed appointments with less friction and fewer manual steps.",
    homeSolutionText(1),
  );

  a(
    "Move customers smoothly from questions to confirmed appointments while reducing repetitive coordination for your team.",
    productText(1),
  );

  a(
    "Create smoother journeys from enquiry to confirmed appointment while reducing repetitive coordination for your team.",
    serviceText(2),
  );

  a(
    "Keep customer information, conversations and follow-up activity connected in one clearer workflow.",
    productText(4),
  );

  a(
    "Keep customer information, conversations, lead activity and follow-up context connected instead of scattered across separate tools.",
    productText(4),
  );

  a(
    "Connect customer information, conversations and follow-up activity with the systems your business already uses.",
    productText(4),
  );

  a(
    "Bring conversations, customer information and follow-ups into one clearer business workflow.",
    productText(4),
  );

  a(
    "Build intelligent customer journeys around the messaging channel your customers already use.",
    serviceText(4),
  );

  a(
    "Build useful automated customer journeys around one of the communication channels businesses and customers already rely on.",
    serviceText(4),
  );

  a(
    "Keep leads and customers moving with timely follow-ups based on what actually happened before.",
    serviceText(4),
  );

  a(
    "Keep leads and customers moving with relevant follow-ups based on their previous activity and where they are in the journey.",
    serviceText(4),
  );

  a(
    "Turn customer and operational activity into clearer information your business can actually use.",
    productText(5),
  );

  a(
    "Turn customer interactions and operational activity into clearer information that helps teams understand what is actually happening.",
    productText(5),
  );

  a(
    "Turn customer activity and operational information into a clearer view of what is happening across the business.",
    productText(5),
  );

  a(
    "Premium responsive websites built around clarity, conversion and the systems working behind the experience.",
    copy.services.text,
  );

  a(
    "Modern responsive websites designed around clarity, conversion and the intelligent systems working behind the customer experience.",
    copy.services.text,
  );

  a(
    "Modern responsive websites built around clarity, conversion and the intelligent systems working behind the experience.",
    copy.services.text,
  );

  /* HOME SECTIONS */

  a("KONARA PRODUCTS", copy.solutions.eyebrow);

  a(
    "The systems behind",
    pipePart(copy.solutions.hero, 0),
  );

  a(
    "smarter businesses.",
    pipePart(copy.solutions.hero, 1),
  );

  a("THE KONARA APPROACH", copy.about.eyebrow);

  a(
    "Your business does not need",
    copy.solutions.togetherTitle,
  );

  a("six disconnected tools.", "");

  a(
    "It needs a system that understands how customers enter, where information should go and what action should happen next.",
    copy.solutions.customText,
  );

  a("WHAT WE BUILD", copy.solutions.eyebrow);

  a(
    "One intelligent layer.",
    copy.solutions.togetherTitle,
  );

  a("Multiple capabilities.", "");

  a(
    "KONARA combines the right pieces around the business problem rather than forcing every company into the same system.",
    copy.solutions.text,
  );

  a(
    "Different systems.",
    copy.home.osTitle,
  );

  a("One connected journey.", "");

  a(
    "Customer-facing AI, lead capture, booking, CRM, communication and analytics working together instead of operating as isolated tools.",
    copy.home.osText,
  );

  a(
    "We can build",
    web[0],
  );

  a("your website too.", "");

  a(
    "From focused landing pages to advanced business websites, KONARA builds responsive digital experiences designed around clarity, conversion and the systems behind them.",
    copy.services.text,
  );

  a("Business websites", web[6]);
  a("Landing pages", web[7]);
  a("Responsive design", web[8]);
  a("Advanced builds", web[9]);

  a("HOW WE WORK", copy.services.eyebrow);

  a(
    "Start with the problem.",
    copy.services.processTitle,
  );

  a("Build the right system.", "");

  a(
    "Your next system",
    pipePart(copy.contact.hero, 0),
  );

  a(
    "starts with a conversation.",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "Tell us how your business works and where the friction is. We’ll help identify what should happen next.",
    copy.contact.text,
  );

  /* ----------------------------------------------------------
     SOLUTIONS PAGE
     ---------------------------------------------------------- */

  a(
    "Not more software.",
    pipePart(copy.solutions.hero, 0),
  );

  a(
    "Better systems.",
    pipePart(copy.solutions.hero, 1),
  );

  a(
    "KONARA combines AI, automation, customer data and digital experiences around the way your business actually works.",
    copy.solutions.text,
  );

  a("BUILT AROUND THE BUSINESS", copy.services.eyebrow);

  a(
    "Start with the friction.",
    copy.solutions.customTitle,
  );

  a("Then choose the technology.", "");

  a(
    "A business should not have to reshape itself around software. KONARA identifies where conversations, customer information and repetitive work break down — then builds the right combination around that problem.",
    copy.solutions.customText,
  );

  a("CAPABILITIES", copy.solutions.eyebrow);

  a(
    "Build one piece.",
    copy.solutions.togetherTitle,
  );

  a("Or connect the whole journey.", "");

  a(
    "Each capability can solve a focused problem or become part of a wider KONARA system.",
    copy.solutions.text,
  );

  a("THE CONNECTED JOURNEY", copy.home.howTitle);

  a(
    "One interaction can",
    copy.solutions.togetherTitle,
  );

  a("trigger the whole system.", "");

  a(
    "A conversation should not end when the chat closes. The right information can move into lead capture, booking, CRM, follow-up and analytics automatically.",
    copy.home.osText,
  );

  a(
    "The customer journey often",
    web[1],
  );

  a("starts with your website.", "");

  a(
    "KONARA can design the digital experience and the intelligent systems operating behind it, so the website becomes part of the workflow rather than a separate brochure.",
    copy.services.text,
  );

  a(
    "NOT SURE WHAT YOU NEED?",
    copy.contact.eyebrow,
  );

  a(
    "Tell us where",
    pipePart(copy.contact.hero, 0),
  );

  a(
    "the friction is.",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "KONARA can help identify which parts of the customer or business journey are worth improving first.",
    copy.contact.text,
  );

  /* ----------------------------------------------------------
     SERVICES PAGE
     ---------------------------------------------------------- */

  a(
    "Built around",
    pipePart(copy.services.hero, 0),
  );

  a(
    "your business.",
    pipePart(copy.services.hero, 1),
  );

  a(
    "KONARA designs and implements intelligent customer experiences, automation systems and digital products around the way your company actually works.",
    copy.services.text,
  );

  a("THE DIFFERENCE", copy.services.eyebrow);

  a(
    "Not every business needs",
    copy.services.existingTitle,
  );

  a("the same automation.", "");

  a(
    "KONARA starts with the customer journey, the operational problem and the systems already in place. The technology comes after the problem is understood.",
    copy.services.existingText,
  );

  a("WHAT WE CAN BUILD", copy.services.eyebrow);

  a(
    "Focused services.",
    copy.services.processTitle,
  );

  a("Connected when needed.", "");

  a(
    "Start with one business problem or connect multiple capabilities into a larger KONARA system.",
    copy.services.text,
  );

  a("SYSTEM THINKING", copy.solutions.eyebrow);

  a(
    "One service can solve a problem.",
    copy.solutions.togetherTitle,
  );

  a(
    "A connected system can transform the journey.",
    "",
  );

  a(
    "A customer conversation can become a qualified lead, trigger a booking, update the CRM, start a follow-up journey and appear in analytics — without every step becoming another manual task.",
    copy.solutions.customText,
  );

  a("OUR PROCESS", copy.services.eyebrow);

  a(
    "From business problem",
    copy.services.processTitle,
  );

  a("to working system.", "");

  a(
    "Need the digital experience",
    web[4],
  );

  a("as well as the system?", "");

  a(
    "KONARA can design and build the website customers interact with, then connect it to the intelligent workflows operating behind the experience.",
    copy.home.osText,
  );

  a("START WITH THE PROBLEM", copy.contact.eyebrow);

  a(
    "Tell us what is",
    pipePart(copy.contact.hero, 0),
  );

  a(
    "slowing the business down.",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "We’ll help identify which customer journey, workflow or system is worth improving first.",
    copy.contact.text,
  );

  /* PROCESS DESCRIPTIONS */

  a(
    "Understand the business, customer journey and the real problem worth solving.",
    processText(0),
  );

  a(
    "Map the system, experience, information flow and handoffs before building anything.",
    processText(1),
  );

  a(
    "Create the website, automations and AI workflows around the business.",
    processText(2),
  );

  a(
    "Use real activity and feedback to refine the system after launch.",
    processText(5),
  );

  a(
    "We understand the business, customer journey and the problem worth solving.",
    processText(0),
  );

  a(
    "We map the experience, workflows, information flow and system structure.",
    processText(1),
  );

  a(
    "We create the AI, website and automation components required for the solution.",
    processText(2),
  );

  a(
    "We test conversations, edge cases, handoffs and customer journeys before launch.",
    processText(3),
  );

  a(
    "We deploy the system into the business and connect the required workflows.",
    processText(4),
  );

  a(
    "Real usage and feedback reveal opportunities to refine the experience over time.",
    processText(5),
  );

  /* ----------------------------------------------------------
     WEBSITE PAGE
     ---------------------------------------------------------- */

  a("Websites built to", web[0]);
  a("do business.", "");

  a(
    "KONARA designs and develops premium responsive websites built around clarity, conversion and the intelligent systems operating behind the customer experience.",
    copy.services.text,
  );

  a(
    "A better digital",
    web[1],
  );

  a("first impression.", "");

  a("MORE THAN A FRONT PAGE", "KONARA WEB");

  a(
    "Your website should",
    web[1],
  );

  a("move the customer forward.", "");

  a(
    "A good website should explain the business clearly, build trust and make the next step obvious. When useful, KONARA can also connect that experience directly to AI, lead capture, booking, CRM and follow-up systems.",
    copy.home.text,
  );

  a(
    "From focused pages",
    web[2],
  );

  a("to advanced websites.", "");

  a(
    "The right website depends on what your business needs customers to understand, trust and do.",
    copy.solutions.customText,
  );

  a("Business Websites", web[6]);
  a("Landing Pages", web[7]);
  a("Mobile-first Builds", web[8]);
  a("Advanced Websites", web[9]);

  a(
    "Clear, professional websites built around credibility, customer journeys and the information people actually need.",
    copy.about.text,
  );

  a(
    "Focused pages designed around one offer, one audience and one clear action.",
    copy.contact.text,
  );

  a(
    "Experiences designed to feel intentional across desktop, tablet and mobile instead of simply shrinking the desktop layout.",
    copy.services.existingText,
  );

  a(
    "More sophisticated digital experiences for businesses that need deeper interactions, custom sections and intelligent systems behind the interface.",
    copy.solutions.customText,
  );

  a("RESPONSIVE BY DESIGN", "KONARA WEB");

  a(
    "Desktop quality.",
    web[3],
  );

  a("Mobile quality.", "");

  a(
    "Mobile is not treated as a smaller desktop version. Layout, spacing, navigation and interaction are designed intentionally for different screen sizes.",
    copy.services.existingText,
  );

  a(
    "The website can become",
    web[4],
  );

  a("part of the system.", "");

  a(
    "Instead of ending with a contact form, the customer journey can continue into the tools and workflows your business actually uses.",
    copy.home.osText,
  );

  a("THE PROCESS", copy.services.eyebrow);

  a(
    "From first idea",
    copy.services.processTitle,
  );

  a("to live website.", "");

  a("SELECTED WORK", copy.about.eyebrow);

  a(
    "Built to feel",
    pipePart(copy.about.hero, 0),
  );

  a(
    "like the business.",
    pipePart(copy.about.hero, 1),
  );

  a(
    "KONARA projects will appear here as the portfolio grows.",
    copy.home.ctaText,
  );

  a(
    "Projects coming soon.",
    pipePart(copy.coming.hero, 0),
  );

  a(
    "Current work is being prepared for the KONARA portfolio.",
    copy.coming.text,
  );

  a(
    "Build a website",
    web[5],
  );

  a(
    "that actually works for the business.",
    "",
  );

  a(
    "Tell us what you need the website to achieve and we’ll help shape the right digital experience around it.",
    copy.contact.text,
  );

  /* ----------------------------------------------------------
     ABOUT PAGE
     ---------------------------------------------------------- */

  a(
    "Building smarter ways",
    pipePart(copy.about.hero, 0),
  );

  a(
    "to do business.",
    pipePart(copy.about.hero, 1),
  );

  a(
    "KONARA is building intelligent systems that connect customer conversations, business workflows and digital experiences into one clearer journey.",
    copy.about.text,
  );

  a("WHY KONARA EXISTS", copy.about.eyebrow);

  a(
    "Business technology should",
    copy.about.whyTitle,
  );

  a("reduce friction.", "");

  a(
    "Businesses often end up with customer conversations in one place, leads somewhere else, bookings in another system and important follow-ups depending on manual work.",
    copy.about.whyText,
  );

  a(
    "KONARA's goal is to connect those moments intelligently so the business can respond faster, stay organised and create a better customer experience.",
    copy.about.text,
  );

  a("THE IDEA", copy.home.osTitle);

  a(
    "One intelligent layer",
    copy.home.osTitle,
  );

  a("between conversation and action.", "");

  a(
    "A customer asking a question should be able to become a lead, book an appointment, update a CRM and enter the right follow-up journey without every step requiring another disconnected tool or manual process.",
    copy.home.osText,
  );

  a("HOW WE THINK", copy.about.principlesTitle);

  a(
    "Principles before",
    copy.about.principlesTitle,
  );

  a("features.", "");

  a(
    "Good systems are not built by adding technology everywhere. They are built by understanding what should happen, when it should happen and why.",
    copy.about.whyText,
  );

  a("Start with the problem", principleTitle(4));

  a(
    "Technology only matters when it improves something real. KONARA begins by understanding the business problem before choosing the system.",
    principleText(4),
  );

  a(
    "Keep the customer journey connected",
    principleTitle(1),
  );

  a(
    "Conversations, websites, leads, bookings and follow-ups should work together instead of becoming separate experiences.",
    principleText(1),
  );

  a(
    "Build around the business",
    principleTitle(2),
  );

  a(
    "Different companies work differently. KONARA designs systems around existing people, workflows and goals.",
    principleText(2),
  );

  a(
    "Improve after launch",
    principleTitle(3),
  );

  a(
    "A live system creates new information. Real usage should guide the next improvements instead of assuming everything is finished on day one.",
    principleText(3),
  );

  a("MEET NARA", copy.assistant.welcome);

  a(
    "The intelligence",
    copy.assistant.title,
  );

  a("inside the experience.", "");

  a(
    "NARA is KONARA's intelligent business guide, designed to help visitors understand the company, explore relevant solutions and navigate the KONARA experience.",
    copy.assistant.text,
  );

  a(
    "Over time, NARA can become part of a broader demonstration of what intelligent customer experiences can look like.",
    copy.assistant.voiceText,
  );

  a(
    "The best place to start",
    pipePart(copy.contact.hero, 0),
  );

  a(
    "is the business problem.",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "Tell us what is creating friction and we'll help identify where an intelligent system could make sense.",
    copy.contact.text,
  );

  /* ----------------------------------------------------------
     CONTACT PAGE
     ---------------------------------------------------------- */

  a("CONTACT KONARA", copy.contact.eyebrow);

  a(
    "Start with",
    pipePart(copy.contact.hero, 0),
  );

  a(
    "the problem.",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "Tell us what your business is trying to improve. We’ll help identify where AI, automation, a website or a connected KONARA system could make sense.",
    copy.contact.text,
  );

  a(
    "NO TECHNICAL BRIEF REQUIRED",
    copy.contact.eyebrow,
  );

  a(
    "You don’t need to know",
    copy.contact.directTitle,
  );

  a("what system you need yet.", "");

  a(
    "Describe the business, the customer journey or the repetitive work causing friction. KONARA can help translate the problem into the right technical direction.",
    copy.contact.directText,
  );

  a("PROJECT ENQUIRY", copy.contact.eyebrow);

  a(
    "Tell us a little",
    copy.contact.directTitle,
  );

  a("about what you need.", "");

  a(
    "The more context you provide, the easier it is to understand where KONARA may be useful.",
    copy.contact.text,
  );

  a("Name", copy.contact.name);
  a("Company", copy.contact.business);
  a("Email", copy.contact.email);

  a(
    "Your business",
    copy.contact.business,
  );

  a(
    "What does the company do?",
    copy.contact.business,
  );

  a(
    "The problem",
    pipePart(copy.contact.hero, 1),
  );

  a(
    "Where is the friction or repetitive work?",
    copy.contact.text,
  );

  a(
    "The outcome",
    copy.home.ctaTitle,
  );

  a(
    "What would a better experience look like?",
    copy.home.ctaText,
  );

  a(
    "Tell us about the business",
    copy.contact.business,
  );

  a(
    "What would you like to improve?",
    copy.demo.improve,
  );

  a("Send Project Enquiry", copy.contact.send);

  a(
    "NOT SURE WHERE TO START?",
    copy.assistant.menuTitle,
  );

  a(
    "NARA can help",
    copy.assistant.title,
  );

  a("narrow it down.", "");

  a(
    "KONARA’s intelligent business guide can help visitors understand the company, explore solutions and work out which direction may be most relevant before contacting the team.",
    copy.assistant.text,
  );

  a("Ask questions", copy.assistant.ask);
  a("Find a solution", copy.common.explore);
  a("Website guidance", "KONARA WEB");

  a(
    "WHAT HAPPENS NEXT?",
    copy.services.processTitle,
  );

  a(
    "Understand first.",
    processTitle(0),
  );

  a("Build second.", processTitle(2));

  a(
    "Learn how the business currently works.",
    processText(0),
  );

  a(
    "Find the highest-value friction to improve.",
    processText(1),
  );

  a(
    "Shape the right KONARA system around it.",
    processText(2),
  );

  a(
    "Better systems begin with",
    copy.contact.directTitle,
  );

  a("better understanding.", "");

  a(
    "Bring the business problem. We’ll work from there.",
    copy.contact.directText,
  );

  /* FORM PLACEHOLDERS */

  a("Your name", copy.contact.name);
  a("Company name", copy.contact.business);
  a(
    "What does your business do?",
    copy.contact.business,
  );

  a(
    "Tell us about the customer journey, workflow or problem you're trying to improve.",
    copy.contact.text,
  );


  /* ----------------------------------------------------------
     FINAL SOURCE-COVERAGE ALIASES
     Every user-facing phrase in the current six-page build is
     either translated here, translated by CopyPack, or is a
     deliberate brand / technical token.
     ---------------------------------------------------------- */

  a("CUSTOMER CONVERSATIONS", productTitle(0));
  a("AI Receptionist", productTitle(0));
  a("24/7 customer conversations", productTitle(0));
  a("Intelligent question handling", homeStepTitle(1));
  a("Lead qualification", serviceTitle(1));
  a("Human handoff when needed", serviceTitle(3));
  a("BUSINESS GROWTH", serviceTitle(1));
  a("Contact capture", serviceTitle(1));
  a("Intent qualification", homeStepTitle(1));
  a("Lead routing", homeStepTitle(2));
  a("Structured customer context", homeStepTitle(3));
  a("CUSTOMER ACTION", productTitle(1));
  a("Booking journeys", productTitle(1));
  a("Availability workflows", productTitle(1));
  a("Confirmations", homeStepTitle(3));
  a("Appointment follow-ups", serviceTitle(4));
  a("CUSTOMER DATA", productTitle(4));
  a("Customer records", productTitle(4));
  a("Conversation context", productTitle(4));
  a("Lead visibility", serviceTitle(1));
  a("Team handoffs", serviceTitle(4));
  a("MESSAGING", serviceTitle(4));
  a("Automated replies", serviceTitle(3));
  a("Customer updates", serviceTitle(3));
  a("Lead journeys", serviceTitle(1));
  a("Follow-up workflows", serviceTitle(4));
  a("FOLLOW-UP", serviceTitle(4));
  a("Lead follow-ups", serviceTitle(1));
  a("Customer reminders", productTitle(1));
  a("Automated sequences", serviceTitle(4));
  a("Journey-based messaging", serviceTitle(4));
  a("INSIGHT", productTitle(5));
  a("Analytics", productTitle(5));
  a("Activity overview", productTitle(5));
  a("Performance signals", productTitle(5));
  a("Business insight", productTitle(5));
  a("DIGITAL EXPERIENCE", "KONARA WEB");
  a("Responsive builds", web[8]);
  a("Advanced digital experiences", web[9]);
  a("Customer arrives", homeStepTitle(0));
  a("NARA understands intent", homeStepTitle(1));
  a("Lead is captured", serviceTitle(1));
  a("Action is triggered", homeStepTitle(2));
  a("CRM stays updated", productTitle(4));
  a("Follow-up continues", serviceTitle(4));
  a("Analytics reveal activity", productTitle(5));
  a("AI & Automation", `${productTitle(0)} / ${serviceTitle(4)}`);
  a("Business Consultation", copy.contact.directTitle);
  a("Something Else", copy.assistant.help);
  a("LET’S TALK", copy.contact.directTitle);
  a("BUSINESS → SYSTEM", copy.home.osTitle);
  a("What can we help with?", copy.assistant.help);
  a("Select an option", copy.assistant.continue);
  a("BUSINESS GUIDE", copy.assistant.title);
  a("AVAILABLE", "✓");
  a("Understand", processTitle(0));
  a("Identify", processTitle(1));
  a("Design", processTitle(1));
  a("CONVERSATIONS", productTitle(0));
  a("24/7 conversations", productTitle(0));
  a("Human handoff", serviceTitle(3));
  a("GROWTH", serviceTitle(1));
  a("Capture details", serviceTitle(1));
  a("Qualify interest", homeStepTitle(1));
  a("Route opportunities", homeStepTitle(2));
  a("BOOKING", productTitle(1));
  a("Availability", productTitle(1));
  a("Confirmation", homeStepTitle(3));
  a("Follow-up", serviceTitle(4));
  a("CUSTOMERS", productTitle(4));
  a("Customer context", productTitle(4));
  a("Conversation history", productTitle(4));
  a("Team visibility", productTitle(4));
  a("Customer replies", serviceTitle(3));
  a("Updates", serviceTitle(3));
  a("Automated journeys", serviceTitle(4));
  a("Reminders", productTitle(1));
  a("Customer journeys", copy.home.howTitle);
  a("01 / CONVERSATIONS", productTitle(0));
  a("AI Reception", productTitle(0));
  a("02 / GROWTH", serviceTitle(1));
  a("03 / ACTION", productTitle(1));
  a("Smart Booking", productTitle(1));
  a("04 / SYSTEMS", productTitle(4));
  a("Follow-ups", serviceTitle(4));
  a("Discover", processTitle(0));
  a("Build", processTitle(2));
  a("Improve", processTitle(5));
  a("Previous product", "←");
  a("Next product", "→");
  a("LIVE", "●");
  a("Overview", copy.home.howTitle);
  a("Conversations", productTitle(0));
  a("Leads", serviceTitle(1));
  a("Automations", serviceTitle(4));
  a("Good morning", copy.assistant.welcome);
  a("Your business, connected.", copy.home.osTitle);
  a("System healthy", copy.home.liveTitle);
  a("Active conversations", productTitle(0));
  a("+18% this week", "+18%");
  a("Qualified leads", serviceTitle(1));
  a("12 today", "12");
  a("Bookings", productTitle(1));
  a("8 automated", "8");
  a("Customer activity", productTitle(5));
  a("Last 7 days", "7");
  a("14 new leads were qualified while your team was away.", serviceText(1));
  a("Review activity", copy.common.explore);
  a("AI RECEPTION", productTitle(0));
  a("Always on.", "24/7");
  a("AUTOMATION", serviceTitle(4));
  a("Working quietly.", "✓");
  a("STATUS", "●");
  a("ACTIVE", "✓");
  a("FLOW", "→");
  a("CONNECTED", "✓");
  a("BUILT BY KONARA", "KONARA");
  a("A website should do", web[1]);
  a("more than look good.", "");
  a("BUILD WITH KONARA", copy.common.explore);
  a("BUSINESS", web[6]);
  a("CONVERSION", copy.common.explore);
  a("RESPONSIVE", web[8]);
  a("ADVANCED", web[9]);
  a("Understand the business, audience, goals and customer journey.", processText(0));
  a("Shape the structure, visual direction and user experience before development.", processText(1));
  a("Develop the responsive website and connect the required functionality.", processText(2));
  a("Test", processTitle(3));
  a("Check devices, layouts, interactions, links and customer journeys.", processText(3));
  a("Launch", processTitle(4));
  a("Deploy the finished website and connect the production systems.", processText(4));
  a("Use real activity, feedback and business needs to refine the site over time.", processText(5));
  a("WhatsApp", serviceTitle(4));
  a("Email Follow-ups", serviceTitle(4));
  a("Desktop", "▣");
  a("Tablet", "▤");
  a("Mobile", "▯");
  a("CONNECTED TO KONARA", copy.home.osTitle);
  a("AI & CUSTOMER EXPERIENCE", serviceTitle(0));
  a("LEAD GENERATION", serviceTitle(1));
  a("CUSTOMER SYSTEMS", productTitle(4));
  a("Reduce repetitive work by connecting the tasks, customer journeys and operational processes that keep your business moving.", serviceText(4));
  a("Intent recognition", homeStepTitle(1));
  a("Customer detail capture", serviceTitle(1));
  a("Interest qualification", homeStepTitle(1));
  a("Follow-up context", serviceTitle(4));
  a("Workflow automation", serviceTitle(4));
  a("Information routing", homeStepTitle(2));
  a("Internal handoffs", serviceTitle(4));
  a("Advanced experiences", web[9]);
  a("SYSTEM", copy.home.osTitle);
  a("Customer conversation", productTitle(0));
  a("Booking or next action", productTitle(1));
  a("CRM update", productTitle(4));
  a("Automated follow-up", serviceTitle(4));
  a("Analytics & insight", productTitle(5));
  a("Automation", serviceTitle(4));
  a("INTELLIGENCE", copy.assistant.title);
  a("SYSTEMS", copy.home.osTitle);
  a("ACTION", processTitle(2));
  a("THE DIRECTION", timelineTitle(2));
  a("From individual tools", timelineTitle(0));
  a("toward KONARA OS.", timelineTitle(2));
  a("The long-term KONARA vision is an intelligent business layer where customer-facing AI, lead capture, booking, CRM, communication and analytics can operate as one connected system.", copy.home.osText);
  a("INTELLIGENT GUIDE", copy.assistant.title);
  a("READY", "✓");

  return map;
}

/* KONARA DASHBOARD NAV TABLE START */
const DASHBOARD_NAV_COPY: Record<
  string,
  {
    overview: string;
    conversations: string;
    leads: string;
    automations: string;
  }
> = {
  en: { overview: "Overview", conversations: "Conversations", leads: "Leads", automations: "Automations" },
  de: { overview: "Übersicht", conversations: "Gespräche", leads: "Leads", automations: "Automatisierungen" },
  fr: { overview: "Vue d’ensemble", conversations: "Conversations", leads: "Prospects", automations: "Automatisations" },
  nl: { overview: "Overzicht", conversations: "Gesprekken", leads: "Leads", automations: "Automatiseringen" },
  es: { overview: "Resumen", conversations: "Conversaciones", leads: "Clientes potenciales", automations: "Automatizaciones" },
  pt: { overview: "Visão geral", conversations: "Conversas", leads: "Leads", automations: "Automações" },
  it: { overview: "Panoramica", conversations: "Conversazioni", leads: "Lead", automations: "Automazioni" },
  pl: { overview: "Przegląd", conversations: "Rozmowy", leads: "Leady", automations: "Automatyzacje" },
  cs: { overview: "Přehled", conversations: "Konverzace", leads: "Potenciální zákazníci", automations: "Automatizace" },
  sk: { overview: "Prehľad", conversations: "Konverzácie", leads: "Potenciálni zákazníci", automations: "Automatizácie" },
  hu: { overview: "Áttekintés", conversations: "Beszélgetések", leads: "Érdeklődők", automations: "Automatizálások" },
  ro: { overview: "Prezentare generală", conversations: "Conversații", leads: "Clienți potențiali", automations: "Automatizări" },
  bg: { overview: "Преглед", conversations: "Разговори", leads: "Потенциални клиенти", automations: "Автоматизации" },
  el: { overview: "Επισκόπηση", conversations: "Συνομιλίες", leads: "Υποψήφιοι πελάτες", automations: "Αυτοματισμοί" },
  tr: { overview: "Genel Bakış", conversations: "Görüşmeler", leads: "Potansiyel Müşteriler", automations: "Otomasyonlar" },
  sv: { overview: "Översikt", conversations: "Konversationer", leads: "Leads", automations: "Automatiseringar" },
  no: { overview: "Oversikt", conversations: "Samtaler", leads: "Leads", automations: "Automatiseringer" },
  da: { overview: "Oversigt", conversations: "Samtaler", leads: "Leads", automations: "Automatiseringer" },
  fi: { overview: "Yleiskatsaus", conversations: "Keskustelut", leads: "Liidit", automations: "Automaatiot" },
  uk: { overview: "Огляд", conversations: "Розмови", leads: "Ліди", automations: "Автоматизації" },
  ar: { overview: "نظرة عامة", conversations: "المحادثات", leads: "العملاء المحتملون", automations: "الأتمتة" },
  hi: { overview: "अवलोकन", conversations: "बातचीत", leads: "लीड्स", automations: "ऑटोमेशन" },
  ur: { overview: "جائزہ", conversations: "گفتگوئیں", leads: "ممکنہ گاہک", automations: "خودکار نظام" },
  bn: { overview: "সারসংক্ষেপ", conversations: "কথোপকথন", leads: "লিড", automations: "অটোমেশন" },
  ms: { overview: "Gambaran keseluruhan", conversations: "Perbualan", leads: "Prospek", automations: "Automasi" },
  id: { overview: "Ringkasan", conversations: "Percakapan", leads: "Prospek", automations: "Otomatisasi" },
  tl: { overview: "Pangkalahatang-ideya", conversations: "Mga pag-uusap", leads: "Mga lead", automations: "Mga automation" },
  ja: { overview: "概要", conversations: "会話", leads: "リード", automations: "自動化" },
  ko: { overview: "개요", conversations: "대화", leads: "잠재 고객", automations: "자동화" },
  "zh-CN": { overview: "概览", conversations: "对话", leads: "潜在客户", automations: "自动化" },
  "zh-TW": { overview: "概覽", conversations: "對話", leads: "潛在客戶", automations: "自動化" },
  th: { overview: "ภาพรวม", conversations: "การสนทนา", leads: "ลีด", automations: "ระบบอัตโนมัติ" },
  vi: { overview: "Tổng quan", conversations: "Cuộc trò chuyện", leads: "Khách hàng tiềm năng", automations: "Tự động hóa" },
};

function applyDashboardNavOverrides(
  map: Map<string, string>,
  languageCode: string,
) {
  const t =
    DASHBOARD_NAV_COPY[languageCode] ??
    DASHBOARD_NAV_COPY.en;

  add(map, "Overview", t.overview);
  add(map, "Conversations", t.conversations);
  add(map, "Leads", t.leads);
  add(map, "Automations", t.automations);
}
/* KONARA DASHBOARD NAV TABLE END */

function buildTranslations(
  languageCode: string,
  copy: CopyPack,
) {
  const map = new Map<string, string>();

  buildExactMap(
    getCopy("en"),
    copy,
    map,
  );

  const aliases = buildAliasMap(
    copy,
    languageCode,
  );

  aliases.forEach((value, key) => {
    map.set(key, value);
  });

  applyDashboardNavOverrides(map, languageCode);

  return map;
}

function translateValue(
  original: string,
  translations: Map<string, string>,
) {
  const key = normalize(original);

  if (!key) return original;

  if (!translations.has(key)) {
    return original;
  }

  return translations.get(key) ?? original;
}

export default function LocaleBridge() {
  const { language } = useLocale();
  const location = useLocation();

  const originalText = useRef(
    new WeakMap<Text, string>(),
  );

  const lastAppliedText = useRef(
    new WeakMap<Text, string>(),
  );

  const originalAttributes = useRef(
    new WeakMap<Element, Map<string, string>>(),
  );

  const lastAppliedAttributes = useRef(
    new WeakMap<Element, Map<string, string>>(),
  );

  useEffect(() => {
    const root =
      document.querySelector(".site-shell");

    if (!root) return;

    const copy = getCopy(language.code);

    const translations = buildTranslations(
      language.code,
      copy,
    );

    let scheduled = false;

    const preserveWhitespace = (
      original: string,
      replacement: string,
    ) => {
      const leading =
        original.match(/^\s*/)?.[0] ?? "";

      const trailing =
        original.match(/\s*$/)?.[0] ?? "";

      return `${leading}${replacement}${trailing}`;
    };

    const applyTextNode = (node: Text) => {
      const parent = node.parentElement;

      if (!parent) return;

      if (
        parent.closest(
          "script, style, noscript, [data-konara-no-translate]",
        )
      ) {
        return;
      }

      const current = node.nodeValue ?? "";
      const previousApplied =
        lastAppliedText.current.get(node);

      if (!originalText.current.has(node)) {
        originalText.current.set(node, current);
      } else if (
        previousApplied !== undefined &&
        current !== previousApplied
      ) {
        originalText.current.set(node, current);
      }

      const original =
        originalText.current.get(node) ?? current;

      const translated =
        language.code === "en"
          ? original.trim()
          : translateValue(
              original.trim(),
              translations,
            );

      const desired = preserveWhitespace(
        original,
        translated,
      );

      if (current !== desired) {
        node.nodeValue = desired;
      }

      lastAppliedText.current.set(
        node,
        desired,
      );
    };

    const getAttributeMap = (
      weakMap: WeakMap<
        Element,
        Map<string, string>
      >,
      element: Element,
    ) => {
      let value = weakMap.get(element);

      if (!value) {
        value = new Map();
        weakMap.set(element, value);
      }

      return value;
    };

    const applyAttribute = (
      element: Element,
      attribute: string,
    ) => {
      const current =
        element.getAttribute(attribute);

      if (current === null) return;

      const originals = getAttributeMap(
        originalAttributes.current,
        element,
      );

      const lastApplied = getAttributeMap(
        lastAppliedAttributes.current,
        element,
      );

      const previousApplied =
        lastApplied.get(attribute);

      if (!originals.has(attribute)) {
        originals.set(attribute, current);
      } else if (
        previousApplied !== undefined &&
        current !== previousApplied
      ) {
        originals.set(attribute, current);
      }

      const original =
        originals.get(attribute) ?? current;

      const translated =
        language.code === "en"
          ? original
          : translateValue(
              original,
              translations,
            );

      if (current !== translated) {
        element.setAttribute(
          attribute,
          translated,
        );
      }

      lastApplied.set(
        attribute,
        translated,
      );
    };

    const apply = () => {
      scheduled = false;

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
      );

      let currentNode = walker.nextNode();

      while (currentNode) {
        applyTextNode(currentNode as Text);
        currentNode = walker.nextNode();
      }

      root
        .querySelectorAll(
          "input, textarea, select, button, a",
        )
        .forEach((element) => {
          applyAttribute(
            element,
            "placeholder",
          );

          applyAttribute(
            element,
            "aria-label",
          );

          applyAttribute(
            element,
            "title",
          );
        });
    };

    const scheduleApply = () => {
      if (scheduled) return;

      scheduled = true;

      window.requestAnimationFrame(apply);
    };

    apply();

    const observer = new MutationObserver(
      scheduleApply,
    );

    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        "placeholder",
        "aria-label",
        "title",
      ],
    });

    return () => {
      observer.disconnect();
    };
  }, [
    language.code,
    location.pathname,
  ]);

  return null;
}