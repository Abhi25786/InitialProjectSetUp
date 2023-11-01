import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import en from './en';
import ar from './ar';
export const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',//<--------default translation
  fallbackLng: 'en', // <----Fallback language in case of missing translations
  resources: languageResources,
});

export default i18next;
// use for diret get key from the object
export const strings = (key:string) => {
  const { t } = useTranslation();
  return t(key);
};