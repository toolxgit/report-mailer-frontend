import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as modal } from 'redux-modal';

import { auth } from './auth-reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    modal,
    auth,
});

export default rootReducer;
