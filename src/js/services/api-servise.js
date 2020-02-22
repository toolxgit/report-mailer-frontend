import { request } from "js/helpers/api";

export const apiServices = {
    getDashboard,
    updateReportSettings,
    getReportSettings,
    getReportArchive
};

function getDashboard() {
    return request({
        method: 'GET',
        url: 'get-dashboard-data',
        is_authenticated: true,
        content_type: 'json',
    });
}

function updateReportSettings(params) {
    return request({
        method: 'POST',
        url: 'send-mail',
        content_type: 'json',
        param: params,
    });
}


function getReportSettings() {
    return request({
        method: 'GET',
        url: 'send-mail',
        content_type: 'json',
    });
}


function getReportArchive(params) {
    return request({
        method: 'GET',
        url: 'send-mail',
        content_type: 'json',
        param: params
    });
}