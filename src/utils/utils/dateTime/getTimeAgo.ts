import moment, { Moment } from "moment";

const getTimeAgo = (date: string | Moment) => {
  return moment(date).fromNow(true);
};

export default getTimeAgo;
