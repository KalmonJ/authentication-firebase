// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD40u8C9wQYE359RPzQSdPYN5lgGAZBxDM",
  authDomain: "auth-app-a9594.firebaseapp.com",
  projectId: "auth-app-a9594",
  storageBucket: "auth-app-a9594.appspot.com",
  messagingSenderId: "1089044748085",
  appId: "1:1089044748085:web:1e0316095a54e13f355e7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
