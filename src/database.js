//import * as firebase from 'firebase';

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

//Prompt Generation

function waitForIt(N) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), N);
  });
};

var itemsRef = getRef().child('Words');

function getRef() {
  return firebaseApp.database().ref();
}
async function selectWord(base, order, type) {
  try {
    const word = await genWord(type, order);
    return word;
  } catch (error) {
    console.log(error.message);
  }
}
function genPrompt(type) {

  return new Promise(
    (resolve, reject) => {
    var baseRef = firebaseApp.database().ref("Bases");
    var base = "";
    var order = "";
    baseRef.orderByChild("type").equalTo(type).once("value").then(function(snapshot) {
      var correctBaseType = [];
      snapshot.forEach(function(child) {
        correctBaseType.push({
          base: child.val().prompt,
          order: child.val().order
        });
      });

      var rand = Math.floor(Math.random()*correctBaseType.length);
      base = correctBaseType[rand].base;
      order = correctBaseType[rand].order;
      var word = "";
      for (var i = 0; i<order.length; i++) {
        word = ""
        if (order[i] == "*") {
          selectWord(base, order, "noun").then(word => {
            base = base.replace("*", word);
          });
        } else {
          selectWord(base, order, "verb").then(word => {
            base = base.replace("^", word);
          });
        }
      }
    });
    waitForIt(2000)
      .then(function () {
        resolve(base);
      });
    }
  );
}

function genWord(type, order) {
  return new Promise(
    (resolve, reject) => {
      var word = "";
      for (var i = 0; i < order.length; i++) {
        itemsRef.orderByChild("type").equalTo(type).once('value').then(function(child2) {
          var correctType = [];
          child2.forEach(function (rabbitHole) {
            correctType.push(rabbitHole.val().word);
          });
          var rand = Math.floor(Math.random()*correctType.length);
          word = correctType[rand];
        });
      }
      waitForIt(500)
        .then(function () {
          resolve(word);
        });
    }
  );

};

async function getPrompt(type) {
  try {
    const promptBoi = await genPrompt(type);
    return promptBoi;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getMeAPrompt: function(type) {

    return getPrompt(type);
  }
}

//Authentication

var currUser = firebase.auth().currentUser;

function getUser(){
  if (currUser != null) {
    var user= {
      name: currUser.displayName,
      email: currUser.email,
      uid: currUser.uid,
    }
    return ref.child("Users").child(user.uid);
  }
};

function addDrawing(drawing){
    var user = getUser();
    var curr = Object.keys(userData.History.draw).length;
    ref.child("Users").child(user.uid).set({
      new_exercise: drawing,
    });
}

function addWriting(writing){
      var user = getUser();
      var curr = Object.keys(userData.history.write).length;
      ref.child("users").child(user.uid).set({
          new_exercise: writing,
        });
}
