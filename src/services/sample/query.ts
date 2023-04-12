import { api } from '../api';
import { createData } from './queries/createData';
import { getDetail } from './queries/getDetail';
import { getList } from './queries/getList';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        // API Query Function
        getList: getList(builder),
        getDetail: getDetail(builder),
        createData: createData(builder),
    }),
});

export default queries;
