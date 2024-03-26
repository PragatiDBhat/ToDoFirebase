// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9jOhywx0Dtnn2WmR00LYbUam-7twg7Y4",
  authDomain: "todoapp-7146f.firebaseapp.com",
  projectId: "todoapp-7146f",
  storageBucket: "todoapp-7146f.appspot.com",
  messagingSenderId: "12940898110",
  appId: "1:12940898110:web:b519ea46af14e5c39a866f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export{db};