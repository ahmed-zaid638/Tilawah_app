import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBkkykV2i0LQd5EO2iZWgR3WyssEwUA7VI",
  authDomain: "tailawa.firebaseapp.com",
  projectId: "tailawa",
  storageBucket: "tailawa.appspot.com",
  messagingSenderId: "655722051179",
  appId: "1:655722051179:web:12495dfe25411eed7fa32e",
  measurementId: "G-VFCX6HNVY3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export  {auth ,db};
