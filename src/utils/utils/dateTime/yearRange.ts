const yearRange = (startYear: number = 1900, range: number = 100) => {
    let listYears = [];
    for (let from = +startYear, to = +(startYear + range); from <= to; from++) listYears.push(from);
    return listYears;
};

export default yearRange;
