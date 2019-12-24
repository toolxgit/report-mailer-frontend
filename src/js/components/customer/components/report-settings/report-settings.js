import React from 'react';
import { FormLayout, TextField, Card, Button } from '@shopify/polaris';
import SelectExample from '../select/select'
// import "./report-settings.css"

export const ReportSettings = () => {
    return (
        <div>
            <div className="generic-page-header">
                <h2 className="page-head my-0">Report Settings</h2>

            </div>
            <Card>
                <div className="report-settings-align">

                    <FormLayout>

                        <TextField label="Which email should we send report to?" placeholder="stepinfwd@gmail.com" />
                        <div className="split">
                            <SelectExample label="Weekly reports" />
                            <div className="select-box-align">
                                <SelectExample label="." />
                            </div>
                        </div>

                        <SelectExample
                            label="Daily reports"
                        />
                        <SelectExample label="Time Zone" />

                        <SelectExample label="Monthly reports sent at" />

                    </FormLayout>
                </div>
                <Button textAlign="center" >Save </Button>
            </Card>

        </div>
    );
}