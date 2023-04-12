const isContainJsInjection = (value: string) => {
    const trimValue = `${value}`.trim().toLowerCase();
    return trimValue && /<(\/)?script.*/g.test(trimValue);
};

export default isContainJsInjection;
