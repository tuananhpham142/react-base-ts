const isContainSqlInjection = (value: string) => {
    const trimValue = `${value}`.trim().toLowerCase();
    return trimValue && /('\s*?(\bor\b|\band\b|\bwhere\b))|--/g.test(trimValue);
};

export default isContainSqlInjection;
