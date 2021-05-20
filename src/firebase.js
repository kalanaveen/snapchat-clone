import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAixB3_o9cU24m1ByUdPTvTDdRuqUgZJMU",
    authDomain: "snapchat-clone-e55d3.firebaseapp.com",
    projectId: "snapchat-clone-e55d3",
    storageBucket: "snapchat-clone-e55d3.appspot.com",
    messagingSenderId: "1073068804953",
    appId: "1:1073068804953:web:64c2be10ce7ad4ddeb1a48",
    measurementId: "G-YVG2B06FEK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage,provider};