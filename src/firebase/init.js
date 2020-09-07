import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWOAyxezZgFdqM9cUiAyIHCbWBr5TQnNc",
  authDomain: "geo-vue-project-9ef18.firebaseapp.com",
  databaseURL: "https://geo-vue-project-9ef18.firebaseio.com",
  projectId: "geo-vue-project-9ef18",
  storageBucket: "geo-vue-project-9ef18.appspot.com",
  messagingSenderId: "261752956114",
  appId: "1:261752956114:web:9c6cd647565b6fda4f390b",
  measurementId: "G-2HWZPD51SY"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore()
  firebase.analytics();