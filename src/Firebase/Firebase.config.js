// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOiMClX2XE-z-vGArFygpeez7NXnSXC80",
    authDomain: "bistro-boss-20057.firebaseapp.com",
    projectId: "bistro-boss-20057",
    storageBucket: "bistro-boss-20057.firebasestorage.app",
    messagingSenderId: "995478482045",
    appId: "1:995478482045:web:7b463e90626c5ba1659514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth }