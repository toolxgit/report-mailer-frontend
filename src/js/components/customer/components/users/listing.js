import React from 'react';
// import { Row, Col, Table, Spinner } from 'reactstrap';
// import { show } from 'redux-modal';
// import { connect } from 'react-redux';
// import { authActions } from 'js/actions';
import { Card } from '@shopify/polaris';


export const UsersListing = (props) => {
    // const [params] = useState({ page: null, sort: null })
    // useEffect(() => {
    //     props.getAllUsers();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [params]);
    return (
        <Card title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
        </Card>
    );
}




// const mapStateToProps = state => ({
//     user: state.user,
// });

// const mapDispatchtoProps = dispatch => ({
//     show: (name, props) => dispatch(show(name, props)),
//     getAllUsers: (params) => dispatch(authActions.getAll(params)),
// });

// const connectedListing = connect(mapStateToProps, mapDispatchtoProps)(UsersListing);
// export { connectedListing as UsersListing }
