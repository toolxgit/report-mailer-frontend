import React from 'react'
import CardComponent from 'js/components/customer/components/card/card';
import { GraphComponent } from './graph-component';
import { Card } from '@shopify/polaris';
import SelectExample from 'js/components/customer/components/select/select';
import img1 from './images/result.png'
import img2 from './images/report.png'
import img3 from './images/fast.png'
import img4 from './images/growth.png'
import img5 from './images/goal.png'



export const Dashboard = (props) => {
    return (
        <div >
            <div className="generic-page-header">
                <h2 className="page-head my-0">Dashboard</h2>
            </div>
            <div className="Home-card-align">
                <CardComponent name="Reports Sent" image={img1} />
                <CardComponent name="Next Daily Report In"  image={img2}/>
                <CardComponent name="Next Weekly Report In" image={img3} />
                <CardComponent name="Page Views" image={img4} />
                <CardComponent name="Revenue Today" image={img4} />
                <CardComponent name="Revenue This Month" image={img5} />
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
