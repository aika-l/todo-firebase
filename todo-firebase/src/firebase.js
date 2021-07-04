
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDp1W0hxXn11VC-igjFBpSNFCU_5tX6Q-g",
        authDomain: "todo-app-8b1d3.firebaseapp.com",
        projectId: "todo-app-8b1d3",
        storageBucket: "todo-app-8b1d3.appspot.com",
        messagingSenderId: "935094302015",
        appId: "1:935094302015:web:2576adc511eb39b3088f8a",
        measurementId: "G-688YLCW0RM"
});

const db = firebaseApp.firestore();

export  default db