import { put, takeLatest } from 'redux-saga/effects';
import { authServices } from 'js/services';
import { history } from 'js/helpers';
import { authConstants, configConstants } from 'js/constants';

function* getToken(action) {
    console.log('11111111111')
    try {
        const route = action.route;
        const token_name = configConstants.USER_TOKEN_NAME
        console.log('222222222')
        const response = yield (authServices.getToken()).then(response => response);
        console.log('response++++++++', response)

        yield put({ type: authConstants.GET_TOKEN_SUCCESS, payload: response, route });
        yield localStorage.setItem(token_name, response.accessToken);
        yield history.push('/');
    }
    catch (error) {
        console.log('errrr++++++++', error)
        yield put({ type: authConstants.GET_TOKEN_FAILURE, error: error });
    }
}

export default function* authSaga() {
    yield takeLatest(authConstants.GET_TOKEN_REQUEST, getToken);
}

