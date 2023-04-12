import moment, { Moment } from "moment";

const getDateRangeBetween = (
  startDate: string | Moment,
  endDate: string | Moment
) => {
  const dates = [];

  const fromDate = moment(startDate).startOf("day");
  const toDate = moment(endDate).startOf("day");

  while (fromDate.add(1, "days").diff(toDate) < 0) {
    dates.push(fromDate.clone());
  }

  return dates;
};

export default getDateRangeBetween;
