const regexValidation = ({ value, regex, trim }: { value: string; regex: RegExp; trim?: boolean }): boolean => {
    const valueToTest = trim ? value.trim() : value;
    return new RegExp(regex).test(valueToTest);
};
export default regexValidation;
