import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from 'js/helpers';
import rootReducer from 'js/reducers';
import rootSaga from 'js/sagas/auth-saga';

const loggerMiddleware = createLogger();

const analyticsMiddleware = () => next => action => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: action.type,
        payload: action.payload
    });
    return next(action);
};

const sagaMiddleware = createSagaMiddleware();

let middlewares = [
    analyticsMiddleware,
    routerMiddleware(history),
];
middlewares.push(loggerMiddleware);

export const configureStore = () => {

    const store = createStore(
        rootReducer(history),
        applyMiddleware(sagaMiddleware, ...middlewares)
    )
    sagaMiddleware.run(rootSaga);
    return store;
}
