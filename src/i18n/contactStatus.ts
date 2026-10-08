import type { LanguageCode } from "../data/locales";

type ContactStatusCopy = {
  sending: string;
  successTitle: string;
  successText: string;
  error: string;
  returnToForm: string;
};

const STATUS: Record<LanguageCode, ContactStatusCopy> = {
  en: {
    sending: "Sending…",
    successTitle: "Enquiry received.",
    successText: "Thank you. KONARA has received your enquiry and will respond using the contact details you provided.",
    error: "We couldn't send your enquiry. Please try again.",
    returnToForm: "Send another enquiry",
  },
  de: {
    sending: "Wird gesendet…",
    successTitle: "Anfrage erhalten.",
    successText: "Vielen Dank. KONARA hat Ihre Anfrage erhalten und wird Sie über die angegebenen Kontaktdaten erreichen.",
    error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    returnToForm: "Weitere Anfrage senden",
  },
  fr: {
    sending: "Envoi en cours…",
    successTitle: "Demande reçue.",
    successText: "Merci. KONARA a bien reçu votre demande et vous répondra à l'aide des coordonnées fournies.",
    error: "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer.",
    returnToForm: "Envoyer une autre demande",
  },
  nl: {
    sending: "Verzenden…",
    successTitle: "Aanvraag ontvangen.",
    successText: "Bedankt. KONARA heeft uw aanvraag ontvangen en neemt contact op via de door u opgegeven gegevens.",
    error: "Uw aanvraag kon niet worden verzonden. Probeer het opnieuw.",
    returnToForm: "Nog een aanvraag sturen",
  },
  es: {
    sending: "Enviando…",
    successTitle: "Consulta recibida.",
    successText: "Gracias. KONARA ha recibido tu consulta y responderá utilizando los datos de contacto que proporcionaste.",
    error: "No pudimos enviar tu consulta. Inténtalo de nuevo.",
    returnToForm: "Enviar otra consulta",
  },
  pt: {
    sending: "Enviando…",
    successTitle: "Pedido recebido.",
    successText: "Obrigado. A KONARA recebeu o seu pedido e responderá através dos dados de contacto fornecidos.",
    error: "Não foi possível enviar o seu pedido. Tente novamente.",
    returnToForm: "Enviar outro pedido",
  },
  it: {
    sending: "Invio in corso…",
    successTitle: "Richiesta ricevuta.",
    successText: "Grazie. KONARA ha ricevuto la tua richiesta e risponderà utilizzando i recapiti forniti.",
    error: "Non è stato possibile inviare la richiesta. Riprova.",
    returnToForm: "Invia un'altra richiesta",
  },
  pl: {
    sending: "Wysyłanie…",
    successTitle: "Zapytanie otrzymane.",
    successText: "Dziękujemy. KONARA otrzymała Twoje zapytanie i odpowie, korzystając z podanych danych kontaktowych.",
    error: "Nie udało się wysłać zapytania. Spróbuj ponownie.",
    returnToForm: "Wyślij kolejne zapytanie",
  },
  cs: {
    sending: "Odesílání…",
    successTitle: "Dotaz byl přijat.",
    successText: "Děkujeme. KONARA obdržela váš dotaz a odpoví prostřednictvím uvedených kontaktních údajů.",
    error: "Dotaz se nepodařilo odeslat. Zkuste to prosím znovu.",
    returnToForm: "Odeslat další dotaz",
  },
  sk: {
    sending: "Odosielanie…",
    successTitle: "Dopyt bol prijatý.",
    successText: "Ďakujeme. KONARA prijala váš dopyt a odpovie prostredníctvom uvedených kontaktných údajov.",
    error: "Dopyt sa nepodarilo odoslať. Skúste to znova.",
    returnToForm: "Odoslať ďalší dopyt",
  },
  hu: {
    sending: "Küldés…",
    successTitle: "Megkeresés megérkezett.",
    successText: "Köszönjük. A KONARA megkapta a megkeresést, és a megadott elérhetőségeken fog válaszolni.",
    error: "A megkeresést nem sikerült elküldeni. Kérjük, próbálja újra.",
    returnToForm: "Új megkeresés küldése",
  },
  ro: {
    sending: "Se trimite…",
    successTitle: "Solicitare primită.",
    successText: "Vă mulțumim. KONARA a primit solicitarea și va răspunde folosind datele de contact furnizate.",
    error: "Nu am putut trimite solicitarea. Încercați din nou.",
    returnToForm: "Trimite o altă solicitare",
  },
  bg: {
    sending: "Изпращане…",
    successTitle: "Запитването е получено.",
    successText: "Благодарим ви. KONARA получи запитването ви и ще отговори чрез предоставените данни за контакт.",
    error: "Не успяхме да изпратим запитването ви. Моля, опитайте отново.",
    returnToForm: "Изпратете ново запитване",
  },
  el: {
    sending: "Αποστολή…",
    successTitle: "Το αίτημα ελήφθη.",
    successText: "Ευχαριστούμε. Η KONARA έλαβε το αίτημά σας και θα απαντήσει χρησιμοποιώντας τα στοιχεία επικοινωνίας που δώσατε.",
    error: "Δεν ήταν δυνατή η αποστολή του αιτήματός σας. Δοκιμάστε ξανά.",
    returnToForm: "Αποστολή νέου αιτήματος",
  },
  tr: {
    sending: "Gönderiliyor…",
    successTitle: "Talebiniz alındı.",
    successText: "Teşekkürler. KONARA talebinizi aldı ve verdiğiniz iletişim bilgileri üzerinden yanıt verecek.",
    error: "Talebiniz gönderilemedi. Lütfen tekrar deneyin.",
    returnToForm: "Başka bir talep gönder",
  },
  sv: {
    sending: "Skickar…",
    successTitle: "Förfrågan mottagen.",
    successText: "Tack. KONARA har tagit emot din förfrågan och svarar via kontaktuppgifterna du angav.",
    error: "Vi kunde inte skicka din förfrågan. Försök igen.",
    returnToForm: "Skicka en ny förfrågan",
  },
  no: {
    sending: "Sender…",
    successTitle: "Forespørsel mottatt.",
    successText: "Takk. KONARA har mottatt forespørselen din og svarer via kontaktopplysningene du oppga.",
    error: "Vi kunne ikke sende forespørselen din. Prøv igjen.",
    returnToForm: "Send en ny forespørsel",
  },
  da: {
    sending: "Sender…",
    successTitle: "Forespørgsel modtaget.",
    successText: "Tak. KONARA har modtaget din forespørgsel og svarer via de kontaktoplysninger, du har angivet.",
    error: "Vi kunne ikke sende din forespørgsel. Prøv igen.",
    returnToForm: "Send en ny forespørgsel",
  },
  fi: {
    sending: "Lähetetään…",
    successTitle: "Yhteydenotto vastaanotettu.",
    successText: "Kiitos. KONARA on vastaanottanut yhteydenottosi ja vastaa antamiesi yhteystietojen kautta.",
    error: "Yhteydenottoa ei voitu lähettää. Yritä uudelleen.",
    returnToForm: "Lähetä uusi yhteydenotto",
  },
  uk: {
    sending: "Надсилання…",
    successTitle: "Запит отримано.",
    successText: "Дякуємо. KONARA отримала ваш запит і відповість, використовуючи надані контактні дані.",
    error: "Не вдалося надіслати запит. Спробуйте ще раз.",
    returnToForm: "Надіслати ще один запит",
  },
  ar: {
    sending: "جارٍ الإرسال…",
    successTitle: "تم استلام الاستفسار.",
    successText: "شكرًا لك. استلمت KONARA استفسارك وستتواصل معك باستخدام بيانات الاتصال التي قدمتها.",
    error: "تعذر إرسال استفسارك. يرجى المحاولة مرة أخرى.",
    returnToForm: "إرسال استفسار آخر",
  },
  hi: {
    sending: "भेजा जा रहा है…",
    successTitle: "पूछताछ प्राप्त हुई।",
    successText: "धन्यवाद। KONARA को आपकी पूछताछ मिल गई है और आपके दिए गए संपर्क विवरण का उपयोग करके जवाब दिया जाएगा।",
    error: "आपकी पूछताछ भेजी नहीं जा सकी। कृपया फिर से प्रयास करें।",
    returnToForm: "एक और पूछताछ भेजें",
  },
  ur: {
    sending: "بھیجا جا رہا ہے…",
    successTitle: "درخواست موصول ہو گئی۔",
    successText: "شکریہ۔ KONARA کو آپ کی درخواست موصول ہو گئی ہے اور آپ کی فراہم کردہ رابطہ معلومات کے ذریعے جواب دیا جائے گا۔",
    error: "آپ کی درخواست نہیں بھیجی جا سکی۔ براہ کرم دوبارہ کوشش کریں۔",
    returnToForm: "ایک اور درخواست بھیجیں",
  },
  bn: {
    sending: "পাঠানো হচ্ছে…",
    successTitle: "অনুসন্ধান গ্রহণ করা হয়েছে।",
    successText: "ধন্যবাদ। KONARA আপনার অনুসন্ধান পেয়েছে এবং আপনার দেওয়া যোগাযোগের তথ্য ব্যবহার করে উত্তর দেবে।",
    error: "আপনার অনুসন্ধান পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
    returnToForm: "আরেকটি অনুসন্ধান পাঠান",
  },
  ms: {
    sending: "Menghantar…",
    successTitle: "Pertanyaan diterima.",
    successText: "Terima kasih. KONARA telah menerima pertanyaan anda dan akan membalas menggunakan butiran hubungan yang diberikan.",
    error: "Pertanyaan anda tidak dapat dihantar. Sila cuba lagi.",
    returnToForm: "Hantar pertanyaan lain",
  },
  id: {
    sending: "Mengirim…",
    successTitle: "Pertanyaan diterima.",
    successText: "Terima kasih. KONARA telah menerima pertanyaan Anda dan akan merespons menggunakan detail kontak yang Anda berikan.",
    error: "Pertanyaan Anda tidak dapat dikirim. Silakan coba lagi.",
    returnToForm: "Kirim pertanyaan lain",
  },
  tl: {
    sending: "Ipinapadala…",
    successTitle: "Natanggap ang inquiry.",
    successText: "Salamat. Natanggap ng KONARA ang iyong inquiry at sasagot gamit ang contact details na ibinigay mo.",
    error: "Hindi naipadala ang iyong inquiry. Pakisubukan muli.",
    returnToForm: "Magpadala ng isa pang inquiry",
  },
  ja: {
    sending: "送信中…",
    successTitle: "お問い合わせを受け付けました。",
    successText: "ありがとうございます。KONARAがお問い合わせを受け付けました。ご入力いただいた連絡先へ返信いたします。",
    error: "お問い合わせを送信できませんでした。もう一度お試しください。",
    returnToForm: "別のお問い合わせを送信",
  },
  ko: {
    sending: "전송 중…",
    successTitle: "문의가 접수되었습니다.",
    successText: "감사합니다. KONARA가 문의를 접수했으며 입력하신 연락처로 답변드리겠습니다.",
    error: "문의를 전송하지 못했습니다. 다시 시도해 주세요.",
    returnToForm: "다른 문의 보내기",
  },
  "zh-CN": {
    sending: "正在发送…",
    successTitle: "咨询已收到。",
    successText: "谢谢。KONARA 已收到您的咨询，并会通过您提供的联系方式回复。",
    error: "无法发送您的咨询。请重试。",
    returnToForm: "发送另一条咨询",
  },
  "zh-TW": {
    sending: "正在傳送…",
    successTitle: "已收到您的諮詢。",
    successText: "謝謝。KONARA 已收到您的諮詢，並會透過您提供的聯絡方式回覆。",
    error: "無法傳送您的諮詢。請再試一次。",
    returnToForm: "傳送另一項諮詢",
  },
  th: {
    sending: "กำลังส่ง…",
    successTitle: "ได้รับคำขอแล้ว",
    successText: "ขอบคุณ KONARA ได้รับคำขอของคุณแล้ว และจะตอบกลับผ่านข้อมูลติดต่อที่คุณให้ไว้",
    error: "ไม่สามารถส่งคำขอของคุณได้ โปรดลองอีกครั้ง",
    returnToForm: "ส่งคำขออีกครั้ง",
  },
  vi: {
    sending: "Đang gửi…",
    successTitle: "Đã nhận yêu cầu.",
    successText: "Cảm ơn bạn. KONARA đã nhận được yêu cầu và sẽ phản hồi qua thông tin liên hệ bạn cung cấp.",
    error: "Không thể gửi yêu cầu của bạn. Vui lòng thử lại.",
    returnToForm: "Gửi yêu cầu khác",
  },
};

export function getContactStatus(language: LanguageCode) {
  return STATUS[language] ?? STATUS.en;
}
