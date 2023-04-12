import { EMAIL_ADDRESS, VN_PHONE_NUMBER } from './regexConstant';
import regexValidation from './regexValidation';

const isVNPhoneOrEmail = (value: string) => {
    const phoneValidation = regexValidation({
        value,
        regex: VN_PHONE_NUMBER,
        trim: true,
    });
    const emailValidation = regexValidation({
        value,
        regex: EMAIL_ADDRESS,
        trim: true,
    });
    return phoneValidation || emailValidation;
};

export default isVNPhoneOrEmail;
