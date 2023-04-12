import moment, { Moment } from "moment";
import { DATE_INPUT_TYPE } from "./dateTime.type";

const formatDateOnly = (
  value: string | Moment,
  inputType: DATE_INPUT_TYPE = undefined
) => {
  return moment(value, inputType).format("L");
};
export default formatDateOnly;
