
import { omit } from "lodash";
import { authConstants, configConstants } from 'js/constants';

let login_success = localStorage.getItem(configConstants.USER_TOKEN_NAME) ? true : false;
const initialState = {
    login_success
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                login_request: true,
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...omit(state, 'login_request'),
                login_success: true,
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...omit(state, 'login_request'),
                login_success: false,
                auth_error: action.error
            };

        case authConstants.CLEAR_PROPS:
            return {
                ...omit(state, [action.payload])
            }

        default:
            return state;
    }
}
