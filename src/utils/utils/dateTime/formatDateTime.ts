import moment, { Moment } from 'moment';
import { DATE_INPUT_TYPE } from './dateTime.type';

const formatDateTime = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('DD/MM/YYYY hh:mm:ss');
};

export default formatDateTime;
