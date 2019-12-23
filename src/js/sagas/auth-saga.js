import { put, takeLatest } from 'redux-saga/effects';
import { authServices } from 'js/services';
import { history } from 'js/helpers';
import { authConstants, configConstants } from 'js/constants';

function* authLogin(action) {
    try {
        const route = action.route;
        const token_name = configConstants.USER_TOKEN_NAME
        const response = yield (authServices.login(action.payload)).then(response => response);

        yield put({ type: authConstants.LOGIN_SUCCESS, payload: response, route });
        yield localStorage.setItem(token_name, response.token);
        yield history.push('/');
    }
    catch (error) {
        yield put({ type: authConstants.LOGIN_FAILURE, error: error });
    }
}

export default function* authSaga() {
    yield takeLatest(authConstants.LOGIN_REQUEST, authLogin);
}

