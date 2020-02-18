import { authConstants } from 'js/constants';

export const authActions = {
    getToken: (params) => {
        return { type: authConstants.GET_TOKEN_REQUEST, payload: params }
    },
    clear: (value) => {
        return { type: authConstants.CLEAR_PROPS, payload: value }
    }
}
