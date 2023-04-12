const setLanguage = (key: string, lang: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, lang);
        window.location.reload();
    }
};

export default setLanguage;
