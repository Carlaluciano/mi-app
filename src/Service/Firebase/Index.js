
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA84A2OEPZ7Qm2W_QItEnm3xqN4zEG_E08",
  authDomain: "backend-miapp.firebaseapp.com",
  projectId: "backend-miapp",
  storageBucket: "backend-miapp.appspot.com",
  messagingSenderId: "930538617179",
  appId: "1:930538617179:web:6a38643373af568ef2827e"
};


const app = initializeApp(firebaseConfig);


export const baseDatos = getFirestore(app);