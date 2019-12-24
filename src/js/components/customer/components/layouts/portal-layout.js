import React from "react";
import { portalRoutes } from "js/routes/customer/portal";
import { Redirect, Route, Switch } from "react-router-dom";
// import { connect } from 'react-redux';
//import { Spinner } from 'reactstrap';
import { SideBar } from "js/components/customer/components/layouts/components/sidebar";
import { Header } from "js/components/customer/components/layouts/components/header";

// import { authActions } from 'js/actions';

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

export const PortalLayout = (props) => {

    // useEffect(() => {
    //     props.getProfile();
    //     props.getLookups();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <div className="base-container">
            <SideBar />
            <div className="global-content">
                <Header />
                <div className="global-datawrap flex-grow-1 d-flex flex-column">
                    <div className="global-datawrap__inner">
                        {switchRoutes}
                    </div>
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     lookups: state.lookups,
//     auth: state.auth
// })

// const mapDispatchToProps = (dispatch) => ({
//     getProfile: () => dispatch(authActions.getProfile()),
//     getLookups: () => dispatch(authActions.lookups())
// });

// const connectedPortalLayout = connect(null, null)(PortalLayout);
// export { connectedPortalLayout as PortalLayout }
