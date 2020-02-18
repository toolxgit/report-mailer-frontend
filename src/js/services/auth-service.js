import { request } from "js/helpers/api";

export const authServices = {
    getToken
};

function getToken() {
    return request({
        method: 'GET',
        url: 'get-token',
        is_authenticated: false,
        content_type: 'json',
    });
}
