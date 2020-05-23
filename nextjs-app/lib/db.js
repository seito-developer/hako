// import firebase from 'firebase/app'
// import 'firebase/firestore'
// // Add the Firebase services that you want to use
// // import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByb1UkJCo_ORHNeyfZXPvv_Vz_P0-4ZAU",
  authDomain: "hako-735fa.firebaseapp.com",
  databaseURL: "https://hako-735fa.firebaseio.com",
  projectId: "hako-735fa",
  storageBucket: "hako-735fa.appspot.com",
  messagingSenderId: "229604952104",
  appId: "1:229604952104:web:1b0aad7bb12a8a2c6acd1d",
  measurementId: "G-MM74S5W53D"
};

// // firebase.initializeApp(firebaseConfig);
// // firebase.analytics();


// let db;
// try {
//   const config = {
//         apiKey: process.env.FIREBASE_API_KEY,
//         authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//         databaseURL: process.env.FIREBASE_DATABASE_URL,
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//         messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//         appId: process.env.FIREBASE_APP_ID,
//         measurementId: process.env.FIREBASE_MESSAGING_SENDER_ID
//     };
//     firebase.initializeApp(config);
//     // Firestoreインスタンスを作成
//     db = firebase.firestore();
//   } catch (error) {
//     console.log(error);
//   }

//   module.exports = {
//     // 本来、initializeAppによる初期化は一度きりのため、
//     // 初期化の結果のみを切り出してexportする
//     db
//   };





// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// // const firebaseConfig = {
// //     apiKey: process.env.FIREBASE_API_KEY,
// //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// //     databaseURL: process.env.FIREBASE_DATABASE_URL,
// //     projectId: process.env.FIREBASE_PROJECT_ID,
// //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// //     appId: process.env.FIREBASE_APP_ID,
// //     measurementId: process.env.FIREBASE_MESSAGING_SENDER_ID
// // };

// // firebase.initializeApp(firebaseConfig);
// console.log(firebaseConfig);
// const db = firebase.firestore();

module.exports = firebaseConfig
