// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChs91g0n7q7fjSPTT-qyDXKflymkwBjZI",
  authDomain: "artland-photography.firebaseapp.com",
  projectId: "artland-photography",
  storageBucket: "artland-photography.appspot.com",
  messagingSenderId: "471639260389",
  appId: "1:471639260389:web:983ed346a985a17e74680c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;