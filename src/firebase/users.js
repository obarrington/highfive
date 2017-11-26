import firebaseApp, { getRef } from './app';

export const createUser = (user) =>{
  return new Promise(function(resolve,reject) {
    reject({error: 'Not implemented yet'})
  });
}

//TODO, have an actual implementation of this
export const authenticateUser = (user) => {
  return new Promise(function(resolve, reject){
    if(user.username === 'testuser' && user.password === 'password'){
      resolve(user)
    }

    reject({ error: 'Username or password did not match'})
  }
)
}
