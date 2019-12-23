import React from 'react';
import { Route, Switch } from "react-router-dom";
import { CustomerIndex } from "js/routes/customer/index";

export default class AppUser extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {CustomerIndex.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </div>
        );
    }
}