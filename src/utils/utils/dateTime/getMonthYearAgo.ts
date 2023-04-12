import moment from "moment";

const getMonthYearAgo = (yearsAgo: number) => {
  return moment()
    .subtract(12 * yearsAgo, "month")
    .format("MMMM, YYYY");
};

export default getMonthYearAgo;
