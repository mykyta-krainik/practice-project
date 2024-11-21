import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    interpolation: {
      escapeValue: false,
    },
    resources: { en: { translationsNS: {} } },
  });

export default i18n;
