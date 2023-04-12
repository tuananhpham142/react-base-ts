import { i18n } from '@/translations/index';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import MainLayout from './layouts';
import AppRoutes from './routes/AppRoutes';
import store, { persistor } from './services/store';
import { I18nextProviderWrapper } from './utils';

const App: FunctionComponent<any> = (props: any) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <I18nextProviderWrapper i18n={i18n}>
                    <BrowserRouter>
                        <MainLayout>
                            <AppRoutes />
                        </MainLayout>
                    </BrowserRouter>
                </I18nextProviderWrapper>
            </PersistGate>
        </Provider>
    );
};

export default App;
