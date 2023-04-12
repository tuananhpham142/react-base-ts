import { RegionItemInterface } from '@/routes/routeConfigs/index.type';
import { i18n } from '@/translations/index';

const appsRoutes: RegionItemInterface = {
    name: i18n.t<string>('layout:sidebar.app'),
    routes: [],
};

export default appsRoutes;
