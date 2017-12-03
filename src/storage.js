import ActualDrawingScreen from './ActualDrawingScreen';
const firebase = require("firebase");
const RNFileSys = require('react-native-fs');

const config = {
    apiKey: "AIzaSyCaRBOA7Ox_l2EaEZvew57qD7deHlQSb1I",
    authDomain: "highfive-b8a39.firebaseapp.com",
    databaseURL: "https://highfive-b8a39.firebaseio.com",
    projectId: "highfive-b8a39",
    storageBucket: "highfive-b8a39.appspot.com",
    messagingSenderId: "156039215369"
};
  //const firebaseApp = firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var auth = firebase.auth();
  var currentUser = auth.currentUser;

//const Base64 = require('./Base64');
//import Base64 from './Base64';
//var base64Img = require('base64-img');

function savePngToFirebase(file){
    console.log({file});
    
    //imagePng = decodeFromBase64(imagePng);
    
    // [START oncomplete]
    //Did not like .put as our input is png not a Blob or File
      /*storageRef.child('images/' + imagePng.name).put(imagePng, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');*/
    storageRef.child('images/' + file.name).put(file).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    
        //console.log(snapshot.metadata);
        //var url = snapshot.downloadURL;
        //console.log('File available at', url);
        // [START_EXCLUDE]
        //document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
    return "Save success";
      // [END oncomplete]
}

module.exports = {
    uploadToFirebase: function(file){
        return savePngToFirebase(file);
    }
}

/*






<script src="/__/firebase/3.9.0/firebase-app.js"></script>
  <script src="/__/firebase/3.9.0/firebase-auth.js"></script>
  <script src="/__/firebase/3.9.0/firebase-storage.js"></script>
  <script src="/__/firebase/init.js"></script>
  
  

  
    var storageRef = firebase.storage().ref();
    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
      var metadata = {
        'contentType': file.type
      };
      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.downloadURL;
        console.log('File available at', url);
        // [START_EXCLUDE]
        document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    }
    window.onload = function() {
      document.getElementById('file').addEventListener('change', handleFileSelect, false);
      document.getElementById('file').disabled = true;
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Anonymous user signed-in.', user);
          document.getElementById('file').disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
          // Sign the user in anonymously since accessing Storage requires the user to be authorized.
          auth.signInAnonymously();
        }
      });
    };*/