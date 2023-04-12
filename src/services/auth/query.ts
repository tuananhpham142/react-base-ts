import { api } from '../api';
import { logout } from './queries/logout';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        logout: logout(builder),
    }),
});

export default queries;
