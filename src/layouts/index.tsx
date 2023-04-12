import { RouteItemInterface } from '@/routes/routeConfigs/index.type';
import { mainRoutes, regionRoutes } from '@/routes/routes';
import flattenDeep from 'lodash/flattenDeep';
import { FunctionComponent, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = (props: MainLayoutProps) => {
    const { children } = props;
    const location = useLocation();
    let allRoutes: Array<RouteItemInterface> = [];

    flattenDeep([...mainRoutes, ...regionRoutes.map((el) => el.routes)]).forEach(
        (route: RouteItemInterface) => {
            if (route?.subRoutes) {
                allRoutes = [...allRoutes, ...route?.subRoutes];
            } else {
                allRoutes = [...allRoutes, route];
            }
        },
    );

    useEffect(() => {
        if (document && document?.title && allRoutes.length > 0) {
            let currentRoute = allRoutes.find(
                (e) => e.path.toLowerCase() === location.pathname.toLowerCase(),
            );
            if (currentRoute) {
                document.title = `${currentRoute.name}`;
            }
        }
    }, [location]);
    return <div>{children}</div>;
};

export default MainLayout;
