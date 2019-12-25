import React from 'react'
import CardComponent from 'js/components/customer/components/card/card';
import { GraphComponent } from './graph-component';
import { Card } from '@shopify/polaris';
import SelectExample from 'js/components/customer/components/select/select';


export const Dashboard = (props) => {
    return (
        <div >
            <div className="generic-page-header">
                <h2 className="page-head my-0">Dashboard</h2>
            </div>
            <div className="Home-card-align">
                <CardComponent name="Reports Sent" />
                <CardComponent name="Next Daily Report In" />
                <CardComponent name="Next Weekly Report In" />
                <CardComponent name="Page Views" />
                <CardComponent name="Revenue Today" />
                <CardComponent name="Revenue This Month" />
            </div>
            <div className="dashboard-filter">
                <SelectExample />
            </div>
            <div className="home-graph">
                <Card>
                    <GraphComponent />
                </Card>
            </div>
        </div>
    )
}
