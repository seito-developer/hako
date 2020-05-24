import firebase from "firebase";
import "firebase/firestore";

export function loadFirebase(){
  const config = {
    apiKey: "AIzaSyByb1UkJCo_ORHNeyfZXPvv_Vz_P0-4ZAU",
    authDomain: "hako-735fa.firebaseapp.com",
    databaseURL: "https://hako-735fa.firebaseio.com",
    projectId: "hako-735fa",
    storageBucket: "hako-735fa.appspot.com",
    messagingSenderId: "229604952104",
    appId: "1:229604952104:web:1b0aad7bb12a8a2c6acd1d",
    measurementId: "G-MM74S5W53D"
  }
  if(!firebase.apps.length){
    firebase.initializeApp(config)
  }
  return firebase
}