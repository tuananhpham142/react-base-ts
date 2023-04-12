import { URL_REGEX_1 } from './regexConstant';
import regexValidation from './regexValidation';

const isIncludesUrl = (value: string): boolean =>
    regexValidation({
        value,
        regex: URL_REGEX_1,
        trim: true,
    });
export default isIncludesUrl;
