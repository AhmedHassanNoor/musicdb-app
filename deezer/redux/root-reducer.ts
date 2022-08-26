import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import tracks from './tracks/reducer';
import localforage from 'localforage';

const isServer = typeof window === 'undefined';

export const storage = !isServer
  ? localforage.createInstance({
      name: 'redux',
    })
  : null;

const persistReducerFn = (config: any, reducer: any): typeof reducer => {
  if (isServer) {
    return reducer;
  }
  config.timeout = 20000;
  return persistReducer(config, reducer);
};

export default combineReducers({
  tracks: persistReducerFn({ key: 'tracks', storage }, tracks) as typeof tracks,
});
