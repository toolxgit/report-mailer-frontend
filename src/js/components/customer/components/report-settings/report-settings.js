import React, { useState } from 'react';
import { FormLayout, TextField, Card, Button } from '@shopify/polaris';
import SelectShopify from '../select/select';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';


// import "./report-settings.css"

export const ReportSettings = () => {
    let [state, setState] = useState({});

    const weekly_days_lookups = [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
    ];

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
                        <div className="split">
                            <SelectShopify
                                label="Weekly reports"
                                callBack={(value, key) => setState({ ...state, [key]: value })}
                                key_name="daily_report_day"
                                options={weekly_days_lookups}
                            />
                            <div className="select-box-align">
                                <TimePicker
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
                                showSecond={false}
                                className="react-time-select"
                                use12Hours
                                inputReadOnly
                                onChange={(e) => setState({ ...state, 'monthly_time': e })}

                            />
                        </div>
                    </FormLayout>
                </div>
                <Button textAlign="center" >Save</Button>
            </Card>

        </div>
    );
}