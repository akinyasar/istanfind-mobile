import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCo1buPc7CR8VydNjNjmQSGlV6dOBhQL2Y",
    authDomain: "istanfind.firebaseapp.com",
    projectId: "istanfind",
    storageBucket: "istanfind.appspot.com",
    messagingSenderId: "663023972695",
    appId: "1:663023972695:web:cabef19c10277703aa8e12"
};

const firebaseApplication = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApplication);
const firebaseStorage = getStorage(firebaseApplication);
const auth = getAuth(firebaseApplication);

export { firestoreDb, firebaseStorage, auth } 
