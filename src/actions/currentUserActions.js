import { authenticateUser } from '../firebase/users'
export const LOGIN_AS_GUEST = 'LOGIN_AS_GUEST'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_COMMIT = 'LOGIN_USER_COMMIT'
export const LOGIN_USER_ROLLBACK = 'LOGIN_USER_ROLLBACK'
export const NEW_USER = 'NEW_USER'

export function loginAsGuest() {
  return { type: LOGIN_AS_GUEST }
}

export function loginUser(user) {
  // object returned is action param in highfiveStore
  return {
    type: LOGIN_USER,
    params: user,
    meta:{
      offline: {
        // this effect is effect in highfiveStore
        effect: { firebaseFn: authenticateUser },
        commit: {type: 'LOGIN_USER_COMMIT'},
        rollback: {type: 'LOGIN_USER_ROLLBACK'}
      }
    }
  }
}

export function accountCreation() {
  return {type: NEW_USER }
}
