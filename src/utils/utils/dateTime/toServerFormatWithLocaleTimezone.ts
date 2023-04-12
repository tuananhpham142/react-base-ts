import moment, { Moment } from 'moment';
import { DATE_INPUT_TYPE } from './dateTime.type';

const toServerFormatWithLocaleTimezone = ({
    value,
    inputType = 'DD-MM-YYYY',
    startOfDay = false,
}: {
    value: string | Moment;
    inputType?: DATE_INPUT_TYPE;
    startOfDay?: boolean;
}) => {
    const time = moment(value, inputType).add(moment().utcOffset(), 'minutes');
    if (startOfDay) {
        time.startOf('day');
    }
    return time.toISOString();
};
export default toServerFormatWithLocaleTimezone;
