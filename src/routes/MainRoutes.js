import { lazy } from 'react';
import { ROUTES } from '../utils/constants';
import Home from '../pages/home';
import MinimalLayout from '../layout/MinimalLayout';
import SignUp from '../pages/login/SignUp';
import Sign from '../pages/login/index';
const MainRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: ROUTES.ROOT,
            element: <Home />
        },
        {
            path: ROUTES.Login,
            element: <Sign />
        },
        {
            path: ROUTES.SignUp,
            element: <SignUp />

        }
        // {
        //     path: ROUTES.PROFESSIONALS,
        //     element: <Professionals />
        // },
        // {
        //     path: ROUTES.USERNAME,
        //     element: <Profile />
        // },
        // {
        //     path: ROUTES.POST_DETAIL,
        //     element: <PostDetail />
        // },
    ]
};

export default MainRoutes;
