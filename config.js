import firebase from 'firebase';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAqF33Y0BIowsc8BPGBtu5Au7Vxt0sTpBM",
  authDomain: "team-voting-2d0b1.firebaseapp.com",
  projectId: "team-voting-2d0b1",
  storageBucket: "team-voting-2d0b1.appspot.com",
  messagingSenderId: "15475721635",
  appId: "1:15475721635:web:8d23190d3d1ced949d8616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();