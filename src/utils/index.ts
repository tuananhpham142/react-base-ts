import { getDateDiff } from './utils/dateTime/getDateDiff';
// String
import capitalize from './utils/string/capitalize';
import cleanAccents from './utils/string/cleanAccents';
import ellipsisByChar from './utils/string/ellipsisByChar';
import getFirstLetter from './utils/string/getFirstLetter';
import guessNameFromEmail from './utils/string/guessNameFromEmail';
import parseJwt from './utils/string/jwt';
import toSlug from './utils/string/toSlug';
import trimTextByChar from './utils/string/trimTextByChar';
import truncate from './utils/string/truncate';
import urlExtractor from './utils/string/urlExtractor';
// Array
import groupBy from './utils/array/groupBy';
import isInArray from './utils/array/isInArray';
import range from './utils/array/range';
import subtract from './utils/array/subtract';
import toRecord from './utils/array/toRecord';
import uniqueByKey from './utils/array/uniqueByKey';
// API
import objectToQueryString from './utils/api/objectToQueryString';
import queryStringToObject from './utils/api/queryStringToObject';

//Country
import {
    CountryData,
    defaultPhoneNumberFormatRegex,
    formatsCache,
    ListCountry,
} from './utils/country/constant';
import getCountryPhoneNumber from './utils/country/getCountryPhoneNumber';
import formatDateCustom from './utils/dateTime/formatDateCustom';
import formatDateMonthOnly from './utils/dateTime/formatDateMonthOnly';
import formatDateOnly from './utils/dateTime/formatDateOnly';
import formatDateString from './utils/dateTime/formatDateString';
import formatDateTime from './utils/dateTime/formatDateTime';
import formatDateTimeString from './utils/dateTime/formatDateTimeString';
import formatMonthYearOnly from './utils/dateTime/formatMonthYearOnly';
import getDateRangeBetween from './utils/dateTime/getDateRangeBetween';
import getMonthYearAgo from './utils/dateTime/getMonthYearAgo';
import getTimeAgo from './utils/dateTime/getTimeAgo';
import getTimeOfDay from './utils/dateTime/getTimeOfDay';
import toServerFormatWithLocaleTimezone from './utils/dateTime/toServerFormatWithLocaleTimezone';
import yearRange from './utils/dateTime/yearRange';
// lazy import
import importWithRety from './utils/importWithRety';
// Number
import bytesToSize from './utils/number/bytesToSize';
import currencyFormat from './utils/number/currencyFormat';
import roundByNum from './utils/number/roundByNum';
import toThousandSeparator from './utils/number/toThousandSeparator';

// URL
import addRedirectUrl from './utils/url/addRedirectUrl';
import b64toBlobUrl from './utils/url/b64toBlobUrl';
import getSearchParams from './utils/url/getSearchParams';
import preserveEndingSlash from './utils/url/preserveEndingSlash';
import preventNavigation from './utils/url/preventNavigation';
import toLink from './utils/url/toLink';
// cookie
import getCookie from './utils/cookies/getCookie';
import removeCookie from './utils/cookies/removeCookie';
import setCookie from './utils/cookies/setCookie';
//hooks
import useBeforeUnload from './hooks/useBeforeUnload';
import useCurrentOrPrev from './hooks/useCurrentOrPrev';
import useDebounce from './hooks/useDebounce';
import useDebouncedCallback from './hooks/useDebounceCallback';
import useFadeEffect from './hooks/useFadeEffect';
import useForceUpdate from './hooks/useForceUpdate';
import useHover from './hooks/useHover';
import useLayoutEffectWithPrevDeps from './hooks/useLayoutEffectWithPrevDeps';
import useLazyComponent from './hooks/useLazyComponent';
import useModal from './hooks/useModal';
import useOnClickOutside from './hooks/useOnClickOutside';
import usePrevious from './hooks/usePrevious';
import useStateCallback from './hooks/useStateCallback';
import useToggle from './hooks/useToggle';
import useTranslation from './hooks/useTranslation';
import useUrlScraping from './hooks/useUrlScraping';
import useWindowCommunication from './hooks/useWindowCommunication';
import getLanguage from './utils/i18n/getLanguage';
import i18nConfig from './utils/i18n/i18nConfig';
import I18nextProviderWrapper from './utils/i18n/I18nextProviderWrapper';
import setLanguage from './utils/i18n/setLanguage';
import Translate from './utils/i18n/Translate';
import localStorageGetItem from './utils/localStorage/localStorageGetItem';
import localStorageRemoveItem from './utils/localStorage/localStorageRemoveItem';
import localStorageSetItem from './utils/localStorage/localStorageSetItem';
// Validations
import isContainJsInjection from './utils/validations/isContainJsInjection';
import isContainSqlInjection from './utils/validations/isContainSqlInjection';
import isEmail from './utils/validations/isEmail';
import isIncludeEmail from './utils/validations/isIncludeEmail';
import isIncludeUrl from './utils/validations/isIncludeUrl';
import isOnlyCharAndNumber from './utils/validations/isOnlyCharAndNumber';
import isPhoneNumber from './utils/validations/isPhoneNumber';
import isPhoneOrEmail from './utils/validations/isPhoneOrEmail';
import isUrl from './utils/validations/isUrl';
import isVnPhoneNumber from './utils/validations/isVNPhoneNumber';
import isVNPhoneOrEmail from './utils/validations/isVNPhoneOrEmail';
import * as regexConstant from './utils/validations/regexConstant';
import regexValidation from './utils/validations/regexValidation';
//Scheduler
import {
    debounce,
    fastPrimaryRaf,
    fastRaf,
    onBeforeUnload,
    onTickEnd,
    pause,
    rafPromise,
    throttle,
    throttleWith,
    throttleWithNow,
    throttleWithPrimaryRaf,
    throttleWithRaf,
    throttleWithTickEnd,
} from './utils/scheduler';

import * as commonTypes from './models/common.types';
import * as customArray from './models/customArray.types';
import * as dynamicFilterTypes from './models/dynamicFilter.types';
import * as routeTypes from './models/route.types';

export {
    toSlug,
    cleanAccents,
    getFirstLetter,
    ellipsisByChar,
    capitalize,
    truncate,
    trimTextByChar,
    urlExtractor,
    parseJwt,
    guessNameFromEmail,
    // Array
    groupBy,
    isInArray,
    range,
    subtract,
    toRecord,
    uniqueByKey,
    // API
    objectToQueryString,
    queryStringToObject,
    // Country
    ListCountry,
    CountryData,
    defaultPhoneNumberFormatRegex,
    formatsCache,
    // Datetime
    getCountryPhoneNumber,
    yearRange,
    toServerFormatWithLocaleTimezone,
    formatDateTimeString,
    formatDateMonthOnly,
    formatDateString,
    formatDateOnly,
    formatDateTime,
    formatMonthYearOnly,
    formatDateCustom,
    getMonthYearAgo,
    getTimeAgo,
    getDateRangeBetween,
    getDateDiff,
    getTimeOfDay,
    // lazy import
    importWithRety,
    // Number
    bytesToSize,
    currencyFormat,
    roundByNum,
    toThousandSeparator,
    // URL
    addRedirectUrl,
    toLink,
    preventNavigation,
    preserveEndingSlash,
    getSearchParams,
    b64toBlobUrl,
    // Scheduler
    debounce,
    throttle,
    throttleWithRaf,
    throttleWithPrimaryRaf,
    throttleWithTickEnd,
    throttleWithNow,
    throttleWith,
    onTickEnd,
    pause,
    rafPromise,
    fastRaf,
    fastPrimaryRaf,
    onBeforeUnload,
    //Cookies
    setCookie,
    getCookie,
    removeCookie,
    //hook
    useBeforeUnload,
    useCurrentOrPrev,
    useDebounce,
    useDebouncedCallback,
    useFadeEffect,
    useForceUpdate,
    useHover,
    useLayoutEffectWithPrevDeps,
    useLazyComponent,
    useOnClickOutside,
    useModal,
    usePrevious,
    useStateCallback,
    useUrlScraping,
    useWindowCommunication,
    useToggle,
    //
    i18nConfig,
    getLanguage,
    setLanguage,
    I18nextProviderWrapper,
    useTranslation,
    Translate,
    // Local storage
    localStorageSetItem,
    localStorageGetItem,
    localStorageRemoveItem,
    //validations
    regexValidation,
    isPhoneOrEmail,
    isVNPhoneOrEmail,
    isOnlyCharAndNumber,
    isContainSqlInjection,
    isContainJsInjection,
    isUrl,
    isEmail,
    isVnPhoneNumber,
    isPhoneNumber,
    // isValidUsername,
    isIncludeUrl,
    isIncludeEmail,
    regexConstant,
    commonTypes,
    customArray,
    dynamicFilterTypes,
    routeTypes,
};
