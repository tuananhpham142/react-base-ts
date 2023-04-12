import { ONLY_CHARACTERS_AND_NUMBER } from './regexConstant';
import regexValidation from './regexValidation';

const isOnlyCharAndNumber = (value: string): boolean =>
    regexValidation({
        value,
        regex: ONLY_CHARACTERS_AND_NUMBER,
        trim: true,
    });

export default isOnlyCharAndNumber;
