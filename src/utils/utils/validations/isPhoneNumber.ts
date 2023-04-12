import { PHONE_NUMBER } from './regexConstant';
import regexValidation from './regexValidation';

const isPhoneNumber = (value: string): boolean =>
    regexValidation({
        value,
        regex: PHONE_NUMBER,
        trim: true,
    });
export default isPhoneNumber;
