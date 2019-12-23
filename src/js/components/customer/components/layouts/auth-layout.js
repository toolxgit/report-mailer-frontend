import React from "react";
import { CustomerAuthRoutes } from "js/routes/customer/auth";
import { Redirect, Route, Switch } from "react-router-dom";
import {
    Row,
    Col,
} from 'reactstrap';


const switchRoutes = (
    <Switch>
        {CustomerAuthRoutes.map((prop, key) => {
            if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            }
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);


const AuthLayout = (props) => {
    return (
        <div className="login-global-wrap">
            <div className="container">
                <Row>
                    <Col xs="12">
                        <div className="login-wrap">
                            <div className="login-head">
                                <h5 className="login-head-text">Log In To <a href="/" className="p-0 nav-link"> <img src="/images/rm_login_logo.png" alt="logo" /></a></h5>
                            </div>
                            {switchRoutes}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default AuthLayout;
