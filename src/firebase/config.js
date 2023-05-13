import firebase from "firebase/app";
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzFBkLVucL45rN5qEz2CsZznbvI7shKKg",
  authDomain: "react-app-zapas.firebaseapp.com",
  projectId: "react-app-zapas",
  storageBucket: "react-app-zapas.appspot.com",
  messagingSenderId: "964160318067",
  appId: "1:964160318067:web:e7d715e32f81fb209b1806"
};

// Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);


 export const getFirestore = () => {
    return firebase.firestore(app)
 }
