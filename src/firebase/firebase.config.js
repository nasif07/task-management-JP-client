// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHYMDZe2ZKzkhZoREc-MdYPTtjcSFWbc8",
  authDomain: "task-management-jp.firebaseapp.com",
  projectId: "task-management-jp",
  storageBucket: "task-management-jp.appspot.com",
  messagingSenderId: "904314910921",
  appId: "1:904314910921:web:a5e1d3309b1e844aa13518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
