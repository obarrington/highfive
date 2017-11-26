import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import AppReducer, { initialState } from './reducer'

function highfiveStore(effect, action){
  return effect.firebaseFn(action.params)
};

export default createStore(
  AppReducer, initialState,
  compose(
    applyMiddleware(logger),
    offline({ ...offlineConfig, effect: highfiveStore}),
  ),
);
