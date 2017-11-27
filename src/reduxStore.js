import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger';
import { offline } from 'redux-offline';

import AppReducer, { initialState } from './reducer'
console.info('AppReducer.initialState', initialState);
export default createStore(
  AppReducer, initialState,
  compose(
    applyMiddleware(logger),
    //offline({ ...offlineConfig, effect: highfiveFetcher }),
  ),
);
