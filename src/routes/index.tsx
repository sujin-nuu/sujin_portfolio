import { useRoutes } from "react-router-dom"
import * as paths from './const';
import { DashLayout } from "src/layouts";
import { DashBoardPage, NotFoundPage } from "src/pages";

export const MainRouter = () => {

    const mainRoutes = useRoutes([
        {
            path: paths.ROUTE_ROOT,
            children: [
                {
                    element: <DashLayout />,
                    children: [
                        {
                            path: paths.ROUTE_MAIN,
                            element: <DashBoardPage />
                        },
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]);

    return mainRoutes;
}