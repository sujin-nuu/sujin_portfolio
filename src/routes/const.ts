export const ROUTE_ROOT = '/';

/** 메인 */
export const ROUTE_MAIN = `${ROUTE_ROOT}`;


/* project detail */
export const ROUTE_PROJ = `${ROUTE_ROOT}/proj`;

export const ROUTE_PROJ_DETAIL = `${ROUTE_PROJ}/:id`;
export const ROUTE_PROJ_DETAIL_WITH_ID = (id: number) => `${ROUTE_PROJ}/${id}`;


/* career*/
export const ROUTE_CAREER = `${ROUTE_ROOT}/career`;

export const ROUTE_CAREER_DETAIL = `${ROUTE_CAREER}/:id`;
export const ROUT_CAREER_DETAIL_WITH_ID = (id: number) => `${ROUTE_CAREER}/${id}`;