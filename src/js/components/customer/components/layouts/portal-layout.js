import React, { useEffect } from "react";
import { portalRoutes } from "js/routes/customer/portal";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
//import { Spinner } from 'reactstrap';
import { SideBar } from "js/components/customer/components/layouts/components/sidebar";
import { Header } from "js/components/customer/components/layouts/components/header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authActions } from 'js/actions';

const switchRoutes = (
    <Switch>
        {portalRoutes.map((prop, key) => {
            if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            }
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

const PortalLayout = (props) => {

    useEffect(() => {
        props.getToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                props.auth && props.auth.login_success ?
                    <div className="base-container">
                        <SideBar />
                        <div className="global-content">
                            <Header />
                            <ToastContainer
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnVisibilityChange
                                draggable
                                pauseOnHover
                                position="top-right"
                            />
                            <div className="global-datawrap flex-grow-1 d-flex flex-column">
                                <div className="global-datawrap__inner">
                                    {switchRoutes}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <p>Unauthorized to access this account</p>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    getToken: () => dispatch(authActions.getToken()),
});

const connectedPortalLayout = connect(mapStateToProps, mapDispatchToProps)(PortalLayout);
export { connectedPortalLayout as PortalLayout }
