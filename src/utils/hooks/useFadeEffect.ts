import React from 'react';

const TIMEOUT = 1000;

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'start':
            return {
                isTransitioning: true,
                shouldBeVisible: action.shouldBeVisible,
            };
        case 'finish':
            return {
                isTransitioning: false,
                shouldBeVisible: state.shouldBeVisible,
            };
        default:
            return state;
    }
};

const useFadeEffect = (visible: boolean) => {
    const ref = React.useRef(null);
    const [state, setState] = React.useReducer(reducer, {
        isTransitioning: false,
        shouldBeVisible: false,
    });

    const { isTransitioning, shouldBeVisible } = state;
    const hiddenRef: any = React.useRef(null);
    const showRef: any = React.useRef(null);

    React.useEffect(() => {
        return () => {
            if (hiddenRef.current != null) {
                clearTimeout(hiddenRef.current);
            }
            if (showRef.current != null) {
                window.cancelAnimationFrame(showRef.current);
            }
        };
    }, []);

    const handleFinish = React.useCallback(() => {
        setState({
            type: 'finish',
        });
        if (hiddenRef.current != null) {
            clearTimeout(hiddenRef.current);
            hiddenRef.current = null;
        }
    }, []);

    const handleStart = React.useCallback(
        (visible: boolean) => {
            if (showRef.current != null) {
                window.cancelAnimationFrame(showRef.current);
            }

            showRef.current = window.requestAnimationFrame(() => {
                setState({
                    shouldBeVisible: visible,
                    type: 'start',
                });

                showRef.current = null;

                if (hiddenRef.current != null) {
                    clearTimeout(hiddenRef.current);
                    hiddenRef.current = setTimeout(handleFinish, TIMEOUT);
                }
            });
        },
        [handleFinish],
    );

    const visibleRef = React.useRef(false);

    React.useLayoutEffect(() => {
        if (visibleRef.current !== visible && (!visible || ref.current != null)) {
            handleStart(visible);
            visibleRef.current = visible;
        }
    }, [visible, handleStart]);

    const _ref = React.useCallback(
        (_re: any) => {
            var _elm: any = ref.current;
            ref.current = _re;
            if (_re !== null) {
                if (_re.addEventListener !== null) {
                    _re.addEventListener('transitionend', handleFinish);
                    _re.addEventListener('webkitTransitionEnd', handleFinish);
                }

                if (visibleRef.current) {
                    handleStart(true);
                }
            } else if (_elm !== null) {
                if (_elm.removeEventListener !== null) {
                    _elm.removeEventListener('transitionend', handleFinish);
                    _elm.removeEventListener('webkitTransitionEnd', handleFinish);
                }
            }
        },
        [handleFinish, handleStart],
    );
    const _isTransitioning = isTransitioning || shouldBeVisible || visible;
    return [_isTransitioning, shouldBeVisible, _ref];
};
export default useFadeEffect;
