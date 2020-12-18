import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

// i18n.defaultLocale = "pt-BR";
// i18n.locale = "pt-BR";
// i18n.currentLocale();
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: false,
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    }
  }, function(err, t) {
    // initialized and ready to go!
    i18n.t('key'); // -> ok
  })
export default i18n