// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUjv2o1w2C_S8T0TDBoTZHb8jdGaWZF8",
  authDomain: "realtor-clone-react-eb75c.firebaseapp.com",
  projectId: "realtor-clone-react-eb75c",
  storageBucket: "realtor-clone-react-eb75c.appspot.com",
  messagingSenderId: "466341955882",
  appId: "1:466341955882:web:ede9823e6587228f2b3653"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()