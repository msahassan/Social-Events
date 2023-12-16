
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADNklaL2mjaZwoov9FbWeAHziuYkdhhL4",
  authDomain: "social-events-9d196.firebaseapp.com",
  projectId: "social-events-9d196",
  storageBucket: "social-events-9d196.appspot.com",
  messagingSenderId: "223890007975",
  appId: "1:223890007975:web:663a874122d70197a63882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
export default auth;