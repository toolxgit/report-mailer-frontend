import { Home } from 'js/components/customer/components/home/home';

export const portalRoutes = [
    {
        path: "/customer/home",
        component: Home
    },
    {
        path: "/",
        redirect: true,
        to: "/customer/users"
    },
];
