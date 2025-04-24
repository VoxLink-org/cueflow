import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';

i18next
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || 'en',
        fallbackLng: 'en',
        interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      "zh-CN": {
        translation: zhCN,
      },
    },
  });

export default i18next;