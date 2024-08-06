export const ROUTE_ROOT = '/';

/** 메인 */
export const ROUTE_MAIN = `${ROUTE_ROOT}`;

/* project detail */
export const ROUTE_PROJ_DETAIL = `${ROUTE_ROOT}/proj/:id`;
export const ROUTE_PROJ_DETAIL_WITH_ID = (id: number) => `${ROUTE_ROOT}/proj/${id}`;