const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCaRBOA7Ox_l2EaEZvew57qD7deHlQSb1I",
    authDomain: "highfive-b8a39.firebaseapp.com",
    databaseURL: "https://highfive-b8a39.firebaseio.com",
    projectId: "highfive-b8a39",
    storageBucket: "highfive-b8a39.appspot.com",
    messagingSenderId: "156039215369"
};
//export default firebase;

const firebaseApp = firebase.initializeApp(config);
var currUser = firebase.auth().currentUser;

getUser(){
if (currUser != null) {
  var user= {
    name = currUser.displayName,
    email = currUser.email,
    uid = currUser.uid,
  }
  return ref.child("Users").child(user.uid);
}

addDrawing(drawing){
    var user = getUser();
    var curr = Object.keys(userData.History.draw).length;
    ref.child("Users").child(user.uid).set({
      new_exercise: drawing,
    });
addWriting(writing){
      var user = getUser();
      var curr = Object.keys(userData.history.write).length;
      ref.child("users").child(user.uid).set({
          new_exercise: writing,
        });
}
