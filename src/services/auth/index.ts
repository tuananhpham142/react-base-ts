import queries from './query';

const actions: typeof queries = {
    ...queries,
};
const {
    useLogoutMutation,
} = actions;

export {
    useLogoutMutation,
};
export default actions;
