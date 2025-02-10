
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero.title": "Natural Beauty, Handcrafted in France",
      "hero.subtitle": "Discover our artisanal natural cosmetics made with love",
      "about.title": "Our Story",
      "about.description": "Each soap is handcrafted in our atelier in France using traditional methods and natural ingredients.",
      "products.title": "Our Collection",
      "newsletter.title": "Join Our Journey",
      "newsletter.subtitle": "Subscribe for exclusive offers and natural beauty tips",
      "newsletter.button": "Subscribe",
      "newsletter.placeholder": "Your email",
    }
  },
  fr: {
    translation: {
      "hero.title": "Beauté Naturelle, Fabriquée en France",
      "hero.subtitle": "Découvrez nos cosmétiques naturels artisanaux faits avec amour",
      "about.title": "Notre Histoire",
      "about.description": "Chaque savon est fabriqué à la main dans notre atelier en France selon des méthodes traditionnelles et des ingrédients naturels.",
      "products.title": "Notre Collection",
      "newsletter.title": "Rejoignez Notre Aventure",
      "newsletter.subtitle": "Inscrivez-vous pour des offres exclusives et des conseils beauté naturels",
      "newsletter.button": "S'inscrire",
      "newsletter.placeholder": "Votre email",
    }
  },
  it: {
    translation: {
      "hero.title": "Bellezza Naturale, Artigianale dalla Francia",
      "hero.subtitle": "Scopri i nostri cosmetici naturali artigianali fatti con amore",
      "about.title": "La Nostra Storia",
      "about.description": "Ogni sapone è realizzato a mano nel nostro atelier in Francia utilizzando metodi tradizionali e ingredienti naturali.",
      "products.title": "La Nostra Collezione",
      "newsletter.title": "Unisciti al Nostro Viaggio",
      "newsletter.subtitle": "Iscriviti per offerte esclusive e consigli sulla bellezza naturale",
      "newsletter.button": "Iscriviti",
      "newsletter.placeholder": "La tua email",
    }
  },
  de: {
    translation: {
      "hero.title": "Natürliche Schönheit, Handgefertigt in Frankreich",
      "hero.subtitle": "Entdecken Sie unsere handgefertigten natürlichen Kosmetika, hergestellt mit Liebe",
      "about.title": "Unsere Geschichte",
      "about.description": "Jede Seife wird in unserem Atelier in Frankreich nach traditionellen Methoden und mit natürlichen Zutaten handgefertigt.",
      "products.title": "Unsere Kollektion",
      "newsletter.title": "Werden Sie Teil unserer Reise",
      "newsletter.subtitle": "Abonnieren Sie für exklusive Angebote und natürliche Schönheitstipps",
      "newsletter.button": "Abonnieren",
      "newsletter.placeholder": "Ihre E-Mail",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.split('-')[0],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
