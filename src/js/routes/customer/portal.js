import { UsersListing } from 'js/components/customer/components/users/listing';


export const portalRoutes = [
    {
        path: "/customer/home",
        component: UsersListing
    },
    {
        path: "/",
        redirect: true,
        to: "/customer/users"
    },
];
