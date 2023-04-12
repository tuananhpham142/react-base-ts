import moment, { Moment } from "moment";

export const getDateDiff = (
  startDate: string | Moment,
  endDate: string | Moment,
  format:
    | "year"
    | "month"
    | "week"
    | "day"
    | "hour"
    | "minute"
    | "second"
    | "millisecond" = "day"
) => {
  const fromDate = moment(startDate).startOf("day");
  const toDate = moment(endDate).startOf("day");

  const dateDiff = fromDate.diff(toDate, format);

  return dateDiff;
};
