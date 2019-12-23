import { history } from 'js/helpers'
import axios from 'axios';
import { configConstants } from "js/constants";

//Common Request
export function request(options) {

    return axios(
        requestOptions(
            options.method,
            options.url,
            options.param,
            options.is_authenticated,
            options.route,
            options.content_type
        )
    )
        .then(function (response) {
            return handleResponse(options.route, response, options.is_authenticated)
        })
        .catch(function (error) {
            return handleError(options.route, error);
        });
}


//Get Route Based API URL
function getRouteApiUrl(route) {
    return process.env.REACT_APP_API_URL + route + '/';
}
function getTokenName(route) {
    if (route === 'admin') {
        return configConstants.ADMIN_TOKEN_NAME;
    }
    else {
        return configConstants.CUSTOMER_TOKEN_NAME;
    }
}


// dowload file attachment
export function downloadAttachment(options) {
    let full_url = getRouteApiUrl(options.route);
    let url = full_url + options.url;
    let params = options.param;

    if (options.is_authenticated) {
        let token;
        if (options.route === "admin") {
            token = localStorage.getItem(configConstants.ADMIN_TOKEN_NAME);
        }
        if (options.route === "user") {
            token = localStorage.getItem(configConstants.CUSTOMER_TOKEN_NAME);
        }
        params.token = token;
    }
    let query_string = getQueryString(params);
    window.open(`${url}?${query_string}`);
    return Promise.resolve('success');
}

//Formate Request Options
function requestOptions(method = 'GET', url = null, params = null, is_authenticated = true, route = null, content_type = null) {
    let full_url = getRouteApiUrl(route);
    let requestOptions = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        method,
        url: full_url + url
    };
    if (is_authenticated) {
        let token = localStorage.getItem(getTokenName(route));
        if (token) {
            requestOptions.headers.Authorization = 'Bearer ' + token;
        }
    }

    if (method === 'GET' && params) {
        requestOptions.params = params;
    }
    else if (content_type === 'json') {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.data = params;
    }
    else {
        requestOptions.data = params
    }
    return requestOptions;
}

//Handle Error  Response
function handleError(route, error) {
    if (error && error.response) {
        if (error.response.status === 401) {
            if (route === "admin") {
                history.push("/");

            } else {
                history.push("/");
            }
        }
    }

    return Promise.reject(error.response)
}

//Handle Response
function handleResponse(route, response) {
    if (response && response.data) {
        return response.data;
    }

    return response;
}


function getQueryString(params) {
    return Object
        .keys(params)
        .map(k => {
            if (Array.isArray(params[k])) {
                return params[k]
                    .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
                    .join('&');
            }
            else if (isObject(params[k])) {
                return Object.keys(params[k])
                    .map(key => `${encodeURIComponent(k)}[${encodeURIComponent(key)}]=${encodeURIComponent(params[k][key])}`)
                    .join('&');
            }

            return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
        })
        .join('&');
}


// Returns if a value is an object
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}