
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKzmvzBi526B0ivDsI_bXrGSeVQu0KK8",
  authDomain: "react-dashboard-assignment3.firebaseapp.com",
  projectId: "react-dashboard-assignment3",
  storageBucket: "react-dashboard-assignment3.appspot.com",
  messagingSenderId: "322115366886",
  appId: "1:322115366886:web:b4281b1e05d569cd3c3027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };