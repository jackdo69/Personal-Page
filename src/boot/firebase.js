import * as firebase from "firebase/app";

import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCqeymWMIZl8acPX7IiwC9ACj4Aa4IhSyo",
  authDomain: "personal-web-page-ab7bb.firebaseapp.com",
  databaseURL: "https://personal-web-page-ab7bb.firebaseio.com",
  projectId: "personal-web-page-ab7bb",
  storageBucket: "personal-web-page-ab7bb.appspot.com",
  messagingSenderId: "488557233840",
  appId: "1:488557233840:web:fc5aef4b61961f91121d75"
}

let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseDb = firebaseApp.database()

export { firebaseDb }
