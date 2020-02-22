import { request } from "js/helpers/api";

export const apiServices = {
    getDashboard,
    reportSettings
};

function getDashboard() {
    return request({
        method: 'GET',
        url: 'get-dashboard-data',
        is_authenticated: true,
        content_type: 'json',
    });
}

function reportSettings(params) {
    return request({
        method: 'POST',
        url: 'send-mail',
        content_type: 'json',
        param: params,
    });
}
