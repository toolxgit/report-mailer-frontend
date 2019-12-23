import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Button,
    Spinner
} from 'reactstrap';
import { Link } from "react-router-dom";
//import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
//import { ErrorFormFeedback } from 'js/components/common';
//import { authActions } from 'js/actions';

export const Login = (props) => {

    const [login, handleChange] = useState({ email: '', password: '' });
    const [form_errors, handleErrorChange] = useState(false);

    useEffect(() => {
        if (props.auth && props.auth.auth_error && props.auth.auth_error.data) {
            handleErrorChange(props.auth.auth_error.data.errors)
        }
    }, [props.auth]);

    useEffect(() => {
        handleErrorChange(false);
        props.removeToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onEnterSubmit = (e) => {
        if (e.key === 'Enter') {
            props.userLogin(login)
        }
    }

    return (
        <DocumentTitle title='Login'>
            <Form>
                <Row>
                    <Col xs="12">
                        <FormGroup>
                            <Input
                                type="text"
                                className="global-input"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={(e) => handleChange({ ...login, email: e.target.value })}
                                invalid={form_errors && form_errors.email && true}
                                onKeyDown={onEnterSubmit}
                                autoComplete="username"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="12">
                        <FormGroup>
                            <Input
                                type="password"
                                className="global-input"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => handleChange({ ...login, password: e.target.value })}
                                invalid={form_errors && form_errors.password && true}
                                onKeyDown={onEnterSubmit}
                                autoComplete="current-password"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="12">
                        <div className="invalid-feedback d-block">{form_errors && form_errors.auth}</div>
                    </Col>
                    <Col xs="12">
                        <Button bg-color="primary" className="btn btn-primary" onClick={() => props.userLogin(login)}>
                            {props.auth.login_request ?
                                <Spinner size="sm" color="light" /> : <span>Log In</span>
                            }
                        </Button>
                    </Col>
                    <Col xs="12">
                        <Link to="/customer/auth/forgot-password" className="auth-link">Forgot Password &#x3f;</Link>
                        <Link to="#" className="auth-link float-right">Create Account</Link>
                    </Col>
                </Row>
            </Form>
        </DocumentTitle>
    );
}

// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     router: state.router
// });

// const mapDispatchToProps = (dispatch) => ({
//     userLogin: (params) => dispatch(authActions.login(params)),
//     getProfile: () => dispatch(authActions.getProfile()),
//     removeToken: () => dispatch(authActions.logout())
// });

// const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
// export { connectedLogin as Login }
