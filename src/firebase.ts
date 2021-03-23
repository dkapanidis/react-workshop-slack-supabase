import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDStRHNMqt0X9-hrHDgHJ5AYuAvLa9C_zg",
  authDomain: "slack-clone-24759.firebaseapp.com",
  projectId: "slack-clone-24759",
  storageBucket: "slack-clone-24759.appspot.com",
  messagingSenderId: "1002441432232",
  appId: "1:1002441432232:web:f5e8351e8371ea3cecb69d",
  measurementId: "G-6STLLC8JX2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;