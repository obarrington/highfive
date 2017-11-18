import { combineReducers } from 'redux';
import currentUser, { initialCurrentUserState } from './reducers/currentUser';
console.info('currentUser.initialState', initialCurrentUserState);
export const initialState = {
  currentUser: initialCurrentUserState
};

export default combineReducers({
  currentUser
})
