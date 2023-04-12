import { useLayoutEffect } from 'react';
import usePrevious from './usePrevious';

const useLayoutEffectWithPrevDeps = <T extends any[], PT = T>(cb: (args: PT) => void, dependencies: T) => {
    const prevDeps = usePrevious<T>(dependencies);
    return useLayoutEffect(() => {
        // @ts-ignore (workaround for "could be instantiated with a different subtype" issue)
        return cb(prevDeps || []);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

export default useLayoutEffectWithPrevDeps;
