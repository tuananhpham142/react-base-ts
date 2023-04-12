const localStorageRemoveItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.removeItem(key) : undefined;
};

export default localStorageRemoveItem;
