import { request } from "js/helpers/api";

export const apiServices = {
    getDashboard
};

function getDashboard() {
    return request({
        method: 'GET',
        url: 'get-dashboard-data',
        is_authenticated: true,
        content_type: 'json',
    });
}
