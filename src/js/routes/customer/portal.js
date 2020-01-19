import { Dashboard } from 'js/components/customer/components/dashboard/dashboard';
import { ReportSettings } from 'js/components/customer/components/report-settings/report-settings';
import { ReportArchive } from 'js/components/customer/components/report-archive/report-archive';



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
        path: "/customer/report-archive",
        component: ReportArchive
    },
    {
        path: "/",
        redirect: true,
        to: "/customer/users"
    },
];
