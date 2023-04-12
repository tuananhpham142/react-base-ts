import moment, { Moment } from 'moment';
import { DATE_INPUT_TYPE } from './dateTime.type';

const formatDateMonthOnly = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('DD/MM');
};

export default formatDateMonthOnly;
