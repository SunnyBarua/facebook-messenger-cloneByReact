import firebase from "firebase"

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCb3r60jjXZeUnrMOkvG0_8tBfSf_XRzqg",
    authDomain: "facebook-messenger-clone-f5028.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-f5028.firebaseio.com",
    projectId: "facebook-messenger-clone-f5028",
    storageBucket: "facebook-messenger-clone-f5028.appspot.com",
    messagingSenderId: "903303263020",
    appId: "1:903303263020:web:cd223f27192b88cef9b289",
    measurementId: "G-CFNM4HS9J2"
  });

  const db=firebaseApp.firestore();

  export default db;