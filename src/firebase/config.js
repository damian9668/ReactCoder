// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr5GA6_xN136n4hxSlnlkSXuqg6Uma-BY",
    authDomain: "quick-ic.firebaseapp.com",
    projectId: "quick-ic",
    storageBucket: "quick-ic.appspot.com",
    messagingSenderId: "260601110536",
    appId: "1:260601110536:web:3541ebeab3fe549c25b1bd",
    measurementId: "G-SD9LHT6W14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoreApp(){
    return app
}