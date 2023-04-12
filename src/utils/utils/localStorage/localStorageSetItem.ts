const localStorageSetItem = ({ key, value }: { key: string; value: string }) => {
    return typeof window !== 'undefined' ? localStorage.setItem(key, value) : undefined;
};
export default localStorageSetItem;
