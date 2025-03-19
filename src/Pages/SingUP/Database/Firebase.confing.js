// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfMpahWPSia4cBEHU6eRgyiSumlvHY2TQ",
  authDomain: "mern2403-6f1ec.firebaseapp.com",
  projectId: "mern2403-6f1ec",
  storageBucket: "mern2403-6f1ec.firebasestorage.app",
  messagingSenderId: "902344467424",
  appId: "1:902344467424:web:a5bb7f2b3a1d77c92b8185",
  measurementId: "G-3GG85B11D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;