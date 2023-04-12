import flattenDeep from 'lodash/flattenDeep';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { RouteItemInterface } from './routeConfigs/index.type';
import { mainRoutes, regionRoutes } from './routes';

const AppRoutes = () => {
    let routes: Array<RouteItemInterface> = [];

    flattenDeep([...mainRoutes, ...regionRoutes.map((el) => el.routes)]).forEach(
        (route: RouteItemInterface) => {
            if (route?.subRoutes) {
                routes = [...routes, ...route?.subRoutes];
            } else {
                routes = [...routes, route];
            }
        },
    );

    const location = useLocation();

    return (
        <TransitionGroup>
            <Routes location={location}>
                {routes.map((route: RouteItemInterface, index) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component ? <route.component /> : <></>}
                        />
                    );
                })}
            </Routes>
        </TransitionGroup>
    );
};
export default AppRoutes;
