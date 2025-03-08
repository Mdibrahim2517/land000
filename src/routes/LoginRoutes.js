import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import Loadable from '../components/Loadable';
import { ROUTES } from '../utils/constants';

const Privacy = Loadable(lazy(() => import('pages/privacy')));
const Tos = Loadable(lazy(() => import('pages/tos')));
const Login = Loadable(lazy(() => import('pages/login')));


const LoginRoutes = {
    path: '/',
    element: <Outlet />,
    children: [
        {
            path: ROUTES.LOGIN,
            element: <Login />
        },
        {
            path: ROUTES.PRIVACY_POLICY,
            element: <Privacy />
        },
        {
            path: ROUTES.TOS,
            element: <Tos />
        },
    ]
};

export default LoginRoutes;
