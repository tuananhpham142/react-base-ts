import HomePage from '@/pages/Home';
import { RouteInterface } from '@/routes/routeConfigs/index.type';
import { i18n } from '@/translations/index';

const dashboardRoutes: RouteInterface = [
    {
        name: i18n.t<string>('Dashboard'),
        path: '/',
        icon: '', // css font icon
        component: HomePage,
        isLocked: false,
    },
];

export default dashboardRoutes;
