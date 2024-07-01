import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7ZwEMleqOtyXEc1Oj8p19LkW-yaMom7w",
    authDomain: "blogapp-fe963.firebaseapp.com",
    projectId: "blogapp-fe963",
    storageBucket: "blogapp-fe963.appspot.com",
    messagingSenderId: "20736361666",
    appId: "1:20736361666:web:f0d577537fa6b9e2c3a75b",
    measurementId: "G-JRXFXB8ZBL"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
 
  const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export {firestore, firebaseAuth, app};