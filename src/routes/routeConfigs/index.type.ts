import type { FunctionComponent } from 'react';

export type RouteItemInterface = {
    name: string;
    path: string;
    icon?: string;
    subRoutes?: Array<RouteItemInterface>;
    header?: Array<HeaderInterface>;
    exact?: boolean;
    component?: FunctionComponent<any>;
    isPrivate?: boolean;
    isLocked?: boolean;
};

export type HeaderInterface = {
    name: string;
    path: string;
};

export type RegionItemInterface = {
    name: string;
    routes: Array<RouteItemInterface>;
};

export type RouteInterface = Array<RouteItemInterface>;
export type RegionInterface = Array<RegionItemInterface>;
