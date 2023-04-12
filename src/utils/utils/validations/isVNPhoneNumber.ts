import { VN_PHONE_NUMBER } from './regexConstant';
import regexValidation from './regexValidation';

const isVNPhoneNumber = (value: string): boolean =>
    regexValidation({
        value,
        regex: VN_PHONE_NUMBER,
        trim: true,
    });
export default isVNPhoneNumber;
