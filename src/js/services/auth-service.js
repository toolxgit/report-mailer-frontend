import { request } from "js/helpers/api";

export const authServices = {
    login
};

function login(params) {
    return request({
        method: 'POST',
        url: 'auth/login',
        param: params,
        is_authenticated: false,
        content_type: 'json',
    });
}
