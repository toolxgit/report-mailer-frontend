import React from 'react';
import { Navigation } from '@shopify/polaris';


export const SideBar = () => {
    return (
        <Navigation location="/">
            <Navigation.Section
                items={[
                    {
                        url: '/customer/home',
                        label: 'Home',
                        //icon: HomeMajorMonotone,
                    },
                    {
                        url: '/path/to/place',
                        label: 'Orders',
                        //icon: OrdersMajorTwotone,
                    },
                    {
                        url: '/path/to/place',
                        label: 'Products',
                        // icon: ProductsMajorTwotone,
                    },
                ]}
            />
            <Navigation.Section
                items={[
                    {
                        url: '/path/to/place',
                        label: 'Online Store',
                        //icon: OnlineStoreMajorTwotone,
                    },
                ]}
                separator
            />
        </Navigation>
    );
}