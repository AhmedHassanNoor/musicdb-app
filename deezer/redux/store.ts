import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createReduxPromiseListener from 'redux-promise-listener';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
const isServer = typeof window === 'undefined';

const initialState = {};
const reduxPromiseListener = createReduxPromiseListener();
const middleware = [thunk, reduxPromiseListener.middleware];
const enhancers: any[] = [];

const composeEnhancers = (!isServer && (window as Window)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers, applyMiddleware(...middleware)));

if (!isServer && (window as Window)) {
  (window as Window)['__store__'] = store;
}

persistStore(store);

export const promiseListener = reduxPromiseListener;
export default store;
