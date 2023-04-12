import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { api } from './api';


const appReducer = combineReducers({
    [api.reducerPath]: api.reducer,
});

const reducer = (state: any, action: any) => {
    return appReducer(state, action);
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const initStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => {
    const store = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(api.middleware),
        ...options,
    });
    // setupListeners(store.dispatch);

    return store;
};

export const store = initStore();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export const persistor = persistStore(store);

export default store;
