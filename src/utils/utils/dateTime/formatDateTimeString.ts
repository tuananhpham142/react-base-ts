import moment, { Moment } from 'moment';
import { DATE_INPUT_TYPE } from './dateTime.type';

const formatDateTimeString = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('LLLL');
};
export default formatDateTimeString;
