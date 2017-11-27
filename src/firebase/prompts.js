import firebaseApp from './app';
//import * as firebase from 'firebase';

//export default firebase;

//TODO: Work on loading screen stuff

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
  //console.log("I made in the selectWord function");
  try {
    const word = await genWord(type, order);
    //console.log("The word I got was:");
    //console.log(word);
    return word;
  } catch (error) {
    console.log(error.message);
  }
}
function genPrompt(type) {
  //console.log("I made in the genPrompt function");
  return new Promise(
    (resolve, reject) => {
    //console.log("I'm in the promise");
    var baseRef = firebaseApp.database().ref("Bases");
    var base = "";
    var order = "";
    baseRef.orderByChild("type").equalTo(type).once("value").then(function(snapshot) {
      var correctBaseType = [];
      //console.log("I'm in the orderByChild");
      snapshot.forEach(function(child) {
        correctBaseType.push({
          base: child.val().prompt,
          order: child.val().order
        });
      });
      //console.log(base);
      //console.log(order);
      var rand = Math.floor(Math.random()*correctBaseType.length);
      base = correctBaseType[rand].base;
      order = correctBaseType[rand].order;
      var word = "";
      for (var i = 0; i<order.length; i++) {
        word = ""
        //console.log(order[i])
        if (order[i] == "*") {
          selectWord(base, order, "noun").then(word => {
            base = base.replace("*", word);
            //console.log(base);
          });
        } else {
          selectWord(base, order, "verb").then(word => {
            base = base.replace("^", word);
            //console.log(base);
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
      //itemsRef.once("value").then(function(snap) {
      for (var i = 0; i < order.length; i++) {
        //console.log(type)
        itemsRef.orderByChild("type").equalTo(type).once('value').then(function(child2) {
          var correctType = [];
          child2.forEach(function (rabbitHole) {
            //console.log(rabbitHole.val().word);
            correctType.push(rabbitHole.val().word);
          });
          var rand = Math.floor(Math.random()*correctType.length);
          word = correctType[rand];
        });
      }
      waitForIt(500)
        .then(function () {
          //console.log("Leaving genWord");
          resolve(word);
        });
    }
  );

};

async function getPrompt(type) {
  try {
    //console.log("I made in the getPrompt function");
    const promptBoi = await genPrompt(type);
    //console.log("I'm a g o o d b o y e and I waited for the await to finish");
    return promptBoi;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getMeAPrompt: function(type) {
  //  console.log("I made in the export function");
    // var prompt = "";
    // getPrompt('draw').then(p => {
    //   prompt = p;
    //   console.log("Prompt generator gives me:")
    //   console.log(prompt);
    // });
    return getPrompt(type);
  }
}
