import queries from './query';

const actions: typeof queries = {
    ...queries,
};
const {
    useCreateDataMutation,
    useGetDetailQuery,
    useLazyGetDetailQuery,
    useGetListQuery,
    useLazyGetListQuery,
} = actions;

export {
    useCreateDataMutation,
    useGetDetailQuery,
    useLazyGetDetailQuery,
    useGetListQuery,
    useLazyGetListQuery,
};
export default actions;
