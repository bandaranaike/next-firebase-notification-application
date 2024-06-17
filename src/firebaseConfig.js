// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDPUWipj4hP0wyjj32NT5E169EZGexJi88",
    authDomain: "simplenotificationapp-13e2a.firebaseapp.com",
    projectId: "simplenotificationapp-13e2a",
    storageBucket: "simplenotificationapp-13e2a.appspot.com",
    messagingSenderId: "1048350807000",
    appId: "1:1048350807000:web:687fbe37f685ef9e8c98ad",
    measurementId: "G-F9D2D56EQP"
};

const app = initializeApp(firebaseConfig);

export { app };