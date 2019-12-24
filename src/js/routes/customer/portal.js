import { Dashboard } from 'js/components/customer/components/dashboard/dashboard';
import { ReportSettings } from 'js/components/customer/components/report-settings/report-settings';


export const portalRoutes = [
    {
        path: "/customer/dashboard",
        component: Dashboard
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
