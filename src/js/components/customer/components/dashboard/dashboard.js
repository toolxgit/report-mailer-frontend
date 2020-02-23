import React, { useEffect, useState } from 'react';
import CardComponent from 'js/components/customer/components/card/card';
import { GraphComponent } from './graph-component';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames';
import moment from 'moment';

import { Card } from '@shopify/polaris';
import img1 from './images/result.png';
import img2 from './images/report.png';
import img3 from './images/fast.png';
import img4 from './images/growth.png';
import img5 from './images/goal.png';
import { map } from 'lodash';

import { apiServices } from 'js/services';




export const Dashboard = (props) => {

    let [state, setState] = useState({});
    let [errors, setErrors] = useState({});

    useEffect(() => {
        apiServices.getDashboard()
            .then((response) => { setState(response) })
            .catch((err) => setErrors(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div >
            <div className="generic-page-header">
                <h2 className="page-head my-0">Dashboard</h2>
            </div>
            <div className="Home-card-align">
                <CardComponent name="Reports Sent" image={img1} />
                <CardComponent name="Next Daily Report In" image={img2} />
                <CardComponent name="Next Weekly Report In" image={img3} />
                <CardComponent name="Page Views" image={img4} />
                <CardComponent name="Revenue Today" image={img4} data={state.todayRevenue} />
                <CardComponent name="Revenue This Month" image={img5} data={state.monthlyRevenue} />
            </div>
            <div className="dashboard-filter">
            </div>
            <div className="dash-date">
            <DatePicker
                                className={classnames('form-control react-dob-input')}
                                // selected={selectedDate.selected_date ? moment(selectedDate.selected_date).toDate() : null}
                                // onChange={(e) => {
                                //     setSelectedDate({ ...selectedDate, 'selected_date': e });
                                //     getArchiveData();
                                // }
                                // }
                                maxDate={new Date()}
                                showYearDropdown
                                placeholderText='Select A Date'
                />
                </div>
     

            <div className="home-graph">
                <Card>
                    <GraphComponent />
                </Card>
            </div>
        </div>
    )
}
