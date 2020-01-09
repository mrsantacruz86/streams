import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjqeJ7DjM_dXIWv0ApHJ8AqmUDvIBw8PA",
  authDomain: "streamy-243706.firebaseapp.com",
  databaseURL: "https://streamy-243706.firebaseio.com",
  projectId: "streamy-243706",
  storageBucket: "streamy-243706.appspot.com",
  messagingSenderId: "214694072532",
  appId: "1:214694072532:web:e9dda00a7ba129016deb41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
