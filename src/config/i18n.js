import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const lng = 'en-UK'
const fallbackLng = ['en-UK']
// const availableLanguages = ['en', 'es']

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    debug: true,
    lng,
    fallbackLng, // fallback language is english.
    interpolation: {
      escapeValue: false // no need for react. it escapes by default
    },
    resources: {}
    // whitelist: availableLanguages
  })

export default i18n
