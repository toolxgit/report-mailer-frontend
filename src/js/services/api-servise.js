import { request } from "js/helpers/api";

export const apiServices = {
    getDashboard,
    updateReportSettings,
    getReportSettings,
    getReportArchive,
    getChartData
};

function getDashboard() {
    return request({
        method: 'GET',
        url: 'get-dashboard-data',
        is_authenticated: true,
        content_type: 'json',
    });
}

function getChartData() {
    return request({
        method: 'GET',
        url: 'get-chart-data',
        is_authenticated: true,
        content_type: 'json',
    });
}

function updateReportSettings(params) {
    return request({
        method: 'PUT',
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
        url: 'get-revenue',
        content_type: 'json',
        param: params
    });
}