import ActualDrawingScreen from './ActualDrawingScreen';
import RNFetchBlob from 'react-native-fetch-blob';
const firebase = require('firebase');

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
  var results = this.results;

//ref to jpg
var mountainsRef = storageRef.child('mountains.jpg');
var mountainImagesRef = storageRef.child('images/mountains.jpg');

function upload(){
    
    RNFetchBlob.fs.createFile('./newFile', this.results, 'base64');
    
    
    
    storageRef.put('./newFile', 'base64').then(function(snapshot){
        console.log('Upload a base64 string to firebase');
    })
};

module.exports = {
    uploadToFirebase: function(){
        return upload();
    }
}

