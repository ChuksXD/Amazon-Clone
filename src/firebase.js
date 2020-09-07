import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5eLDcqr8y6p5Dh1j6WccsEBdqF_4hzuc",
    authDomain: "chuks--clone.firebaseapp.com",
    databaseURL: "https://chuks--clone.firebaseio.com",
    projectId: "chuks--clone",
    storageBucket: "chuks--clone.appspot.com",
    messagingSenderId: "135552959540",
    appId: "1:135552959540:web:1b232085f5744a0663b661",
    measurementId: "G-QTF5FS84S0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};