import moment, { Moment } from 'moment';
import { DATE_INPUT_TYPE } from './dateTime.type';

const formatDateCustom = ({
    value,
    inputType = undefined,
    format,
}: {
    value: string | Moment;
    inputType?: DATE_INPUT_TYPE;
    format: string;
}) => {
    return moment(value, inputType).format(format);
};

export default formatDateCustom;
