import { EMAIL_PATTERN } from './regexConstant';
import regexValidation from './regexValidation';

const isIncludesEmail = (value: string): boolean =>
    regexValidation({
        value,
        regex: EMAIL_PATTERN,
        trim: true,
    });
export default isIncludesEmail;
