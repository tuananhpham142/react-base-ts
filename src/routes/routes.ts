import compact from 'lodash/compact';
import { RegionInterface, RouteInterface } from './routeConfigs/index.type';
import sampleRoutes from './routeConfigs/main/sample';
import appsRoutes from './routeConfigs/regions/apps';

export const mainRoutes: RouteInterface = [...sampleRoutes];

export const regionRoutes: RegionInterface = compact([appsRoutes]);
