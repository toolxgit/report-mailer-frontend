import AuthLayout from "js/components/customer/components/layouts/auth-layout";
import { PortalLayout } from "js/components/customer/components/layouts/portal-layout";

export const CustomerIndex = [
    { path: "/customer/auth", component: AuthLayout },
    { path: "/", component: PortalLayout },
    { path: "/customer", component: PortalLayout }
];
