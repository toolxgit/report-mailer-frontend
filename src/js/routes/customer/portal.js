import { Home } from 'js/components/customer/components/home/home';
import { ReportSettings } from 'js/components/customer/components/report-settings/report-settings';


export const portalRoutes = [
    {
        path: "/customer/home",
        component: Home
    },
    {
        path: "/customer/report-settings",
        component: ReportSettings
    },
    {
        path: "/",
        redirect: true,
        to: "/customer/users"
    },
];
