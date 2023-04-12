const localStorageGetItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : undefined;
};

export default localStorageGetItem;
