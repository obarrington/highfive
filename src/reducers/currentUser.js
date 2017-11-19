import { LOGIN_AS_GUEST } from '../actions/currentUserActions'

export const initialCurrentUserState = { }

export default function currentUserReducer(state = initialCurrentUserState, action) {
  let nextState;

switch (action.type) {
  case LOGIN_AS_GUEST:
    nextState = {
      isLoggedIn: true,
    };
    break;
  default:
    nextState = {...state};

}

  return nextState;
}
