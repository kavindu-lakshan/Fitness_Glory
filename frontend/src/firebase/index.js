import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDghCmod53Of_p1ICubfjfGSdLUuc5WOjA",
    authDomain: "fitness-glory.firebaseapp.com",
    projectId: "fitness-glory",
    storageBucket: "fitness-glory.appspot.com",
    messagingSenderId: "706691003778",
    appId: "1:706691003778:web:733c02522ca7d7ee4d0b9b",
    measurementId: "G-TJPJLSVLSH"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };