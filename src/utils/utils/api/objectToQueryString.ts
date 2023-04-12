const objectToQueryString = (object: Record<string, any>) => {
    return Object.keys(object)
        .map((key: string) => (key !== '' ? `${key}=${encodeURI(object[key])}` : undefined))
        .join('&');
};
export default objectToQueryString;
