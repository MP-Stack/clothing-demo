import {createStore,applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist';

import allReducer from '../redux/root.reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares=[sagaMiddleware];

if (process.env.NODE_ENV==='development'){
  middlewares.push(logger);
}

export const store = createStore(allReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default {store,persistor};