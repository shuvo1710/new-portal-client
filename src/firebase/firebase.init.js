// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRtdkAIYgkWn7Wu0jj5AIXGrtiQAAlJE",
  authDomain: "new-portal-client.firebaseapp.com",
  projectId: "new-portal-client",
  storageBucket: "new-portal-client.appspot.com",
  messagingSenderId: "1030620796032",
  appId: "1:1030620796032:web:9303b77a80fad9957ec265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;