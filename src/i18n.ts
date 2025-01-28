import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ["navigator", "querystring", "localStorage", "cookie"],
            caches: ["localStorage", "cookie"],
        },
        backend: {
            loadPath: `${import.meta.env.VITE_HOST}/locales/{{lng}}.json`,
        },
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;