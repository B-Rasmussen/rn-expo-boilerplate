import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import es from "./es.json";
// import de from "./de.json";

export const setI18nLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
};

const resources = {
    en: { translation: en },
    es: { translation: es },
    // de: { translation: de },
};

const getSystemLanguage = () => {
    const locales = getLocales();
    if (locales && locales.length > 0) {
        const systemLang = locales[0].languageCode;
        // Check if system language is supported
        if (systemLang === "es") return "es";
        if (systemLang === "en") return "en";
    }
    return "en"; // fallback
};

const initializeI18n = async () => {
    const systemLanguage = getSystemLanguage();

    i18n.use(initReactI18next).init({
        resources,
        fallbackLng: "en",
        lng: systemLanguage,
    });
};

initializeI18n();

export default i18n;
