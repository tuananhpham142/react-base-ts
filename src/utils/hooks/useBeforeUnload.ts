import { useEffect } from 'react';
import { onBeforeUnload } from '../utils/scheduler';

export default function useBeforeUnload(callback: VoidFunction) {
    useEffect(() => {
        return onBeforeUnload(callback);
    }, [callback]);
}
