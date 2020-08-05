import {createStore,applyMiddleware} from 'redux';

import allReducer from '../redux/root.reducer';
import logger from 'redux-logger';

const middlewares=[logger];

const store = createStore(allReducer,applyMiddleware(...middlewares));

export default store;