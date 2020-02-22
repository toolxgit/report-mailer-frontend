import React, { useState, useEffect } from 'react';
import { FormLayout, TextField, Card, Button } from '@shopify/polaris';
import { Select } from '@shopify/polaris';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { apiServices } from 'js/services';
import moment from 'moment';


export const ReportSettings = () => {
    let [state, setState] = useState({});
    let [errors, setErrors] = useState({});
    let [confirm_message, setConfirmMessage] = useState({});


    const weekly_days_lookups = [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
    ];

    useEffect(() => {
        apiServices.getReportSettings().then((response) => {
            setState({ ...response });
        }).catch((err) => setErrors(err));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const details = {
            ...state,
            weekly_time: state.weekly_time ? state.weekly_time.format('H:m') : '',
            daily_time: state.daily_time ? state.daily_time.format('H:m') : '',
            monthly_time: state.monthly_time ? state.monthly_time.format('H:m') : '',
        }

        apiServices.updateReportSettings(details)
            .then((response) => { setConfirmMessage(response) })
            .catch((err) => setErrors(err));
    }

    console.log('state+++++++', state)
    return (
        <div>
            <div className="generic-page-header">
                <h2 className="page-head my-0">Report Settings</h2>
            </div>
            <Card>
                <div className="report-settings-align">
                    <FormLayout>
                        <TextField
                            label="Which email should we send report to?"
                            placeholder="stepinfwd@gmail.com"
                            onChange={(e) => setState({ ...state, 'email': e })}
                            value={state.email ? state.email : ''}
                        />
                        <span className="label-tag">Weekly reports</span>

                        <div className="split">
                            <Select
                                placeholder="Day"
                                options={weekly_days_lookups}
                                onChange={(e) => setState({ ...state, 'daily_report_day': e })}
                                value={state.daily_report_day ? state.daily_report_day : ''}
                            />
                            <div className="select-box-align time-pick-align">
                                <TimePicker
                                    placeholder="Select a time"
                                    showSecond={false}
                                    className="react-time-select"
                                    use12Hours
                                    inputReadOnly
                                    onChange={(e) => setState({ ...state, 'weekly_time': e })}
                                />
                            </div>
                        </div>
                        <div className="select-box-align">
                            <label>Daily</label>
                            <TimePicker
                                placeholder="Select a time"
                                showSecond={false}
                                className="react-time-select"
                                use12Hours
                                inputReadOnly
                                onChange={(e) => setState({ ...state, 'daily_time': e })}

                            />
                        </div>
                        <div className="select-box-align">
                            <label>Monthly</label>
                            <TimePicker
                                placeholder="Select a time"
                                showSecond={false}
                                className="react-time-select"
                                use12Hours
                                inputReadOnly
                                onChange={(e) => setState({ ...state, 'monthly_time': e })}
                            />
                        </div>
                    </FormLayout>
                </div>
                <Button
                    textAlign="center"
                    onClick={(e) => onSubmit(e)}
                    className="btn btn-secondary"
                >
                    Save
                </Button>
            </Card>

        </div>
    );
}