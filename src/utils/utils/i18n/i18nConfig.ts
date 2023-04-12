import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import getLanguage from './getLanguage';
import setLanguage from './setLanguage';

const i18nConfig = ({
    resources,
    fallbackLng,
    namespace,
    i18nKey = 'i18nLanguage',
}: {
    resources: Resource;
    fallbackLng: string;
    namespace: string;
    i18nKey: string;
}) => {
    const getLanguageDetector = getLanguage(i18nKey);

    getLanguageDetector ?? setLanguage(i18nKey, fallbackLng);

    const languageDetector = {
        init: Function.prototype,
        type: 'languageDetector',
        async: true, // flags below detection to be async
        detect: async (callback: any) => {
            const lang = getLanguageDetector ? getLanguageDetector : fallbackLng;
            callback(lang);
        },
        cacheUserLanguage: () => {},
    };
    i18n
        // @ts-ignore
        .use(languageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: fallbackLng,
            resources,
            // have a common namespace used around the full app
            ns: [namespace],
            defaultNS: namespace,
            // debug: true,
            cache: {
                enabled: true,
            },
            interpolation: {
                escapeValue: false, // not needed for react as it does escape per default to prevent xss!
            },
        });
    return i18n;
};

export default i18nConfig;
