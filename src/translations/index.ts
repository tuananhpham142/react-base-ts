import { getLanguage, i18nConfig } from '../utils';
import * as resources from './resources';

export const initLangKeyStorage = process.env.LANGUAGE as string;
export const initLang = getLanguage(initLangKeyStorage);

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

export const i18n = i18nConfig({
    resources: {
        ...Object.entries(resources).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value,
            }),
            {},
        ),
    },
    fallbackLng: 'vi',
    namespace: 'common',
    i18nKey: initLangKeyStorage,
});
