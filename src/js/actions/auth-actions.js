import { authConstants } from 'js/constants';

export const authActions = {
    login: (params) => {
        return { type: authConstants.LOGIN_REQUEST, payload: params }
    },
    forgotPassword: (email) => {
        return { type: authConstants.FORGOT_PASSWORD_REQUEST, payload: email }
    },
    resetPassword: (params) => {
        return { type: authConstants.RESET_PASSWORD_REQUEST, payload: params }
    },
    logout: () => {
        return { type: authConstants.LOGOUT_REQUEST }
    },
    getProfile: () => {
        return { type: authConstants.PROFILE_GET_REQUEST }
    },
    updateProfile: (details) => {
        return { type: authConstants.PROFILE_UPDATE_REQUEST, payload: details }
    },
    lookups: () => {
        return { type: authConstants.LOOKUPS_REQUEST }
    },
    clear: (value) => {
        return { type: authConstants.CLEAR_PROPS, payload: value }
    }
}
