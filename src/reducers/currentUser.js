import { LOGIN_AS_GUEST, LOGIN_USER, LOGIN_USER_COMMIT, LOGIN_USER_ROLLBACK } from '../actions/currentUserActions'

export const initialCurrentUserState = { }

export default function currentUserReducer(state = initialCurrentUserState, action) {
  let nextState;

switch (action.type) {
  case LOGIN_AS_GUEST:
    nextState = {
      isLoggedIn: true,
    };
    break;

  case LOGIN_USER:
    nextState = {
      isLoggedIn: true,
    };
    break;
  
  case LOGIN_USER_COMMIT:
    nextState = {
      isLoggedIn: true
    }

    break;
  case LOGIN_USER_ROLLBACK:
    nextState = {
      ...state,
      error: action.payload.error
    }
    break;

  default:
    nextState = {...state};

}

  return nextState;
}
