import { URL_REGEX_2 } from './regexConstant';
import regexValidation from './regexValidation';

const isUrl = (value: string): boolean =>
    regexValidation({
        value,
        regex: URL_REGEX_2,
        trim: true,
    });

export default isUrl;
