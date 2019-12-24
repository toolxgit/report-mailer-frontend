import React from 'react';
import { Navigation } from '@shopify/polaris';
import moment from 'moment';


export const SideBar = () => {
    return (
        <div className="global-sidebar offcanvas-collapse" id="sidebarNav" >
            <aside className="sidebar-wrapper sidebar-collapse shadow"  >
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
                <div className="sidebar__footer">
                    <div className="sidebar__footer-text">
                        <p>{moment().format('YYYY')} &copy; ModRN Health, Inc.<br />privacy - Terms of Service</p>
                    </div>
                </div>
                <div className="sidebar__footer--color">
                </div>
            </aside>
        </div>
    );
}