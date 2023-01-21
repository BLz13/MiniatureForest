

// Import the functions you need from the SDKs you need

import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClkyUp8L4nHDs6YoaIPlqjkJKCS2D5zAU",
  authDomain: "minatureforest.firebaseapp.com",
  projectId: "minatureforest",
  storageBucket: "minatureforest.appspot.com",
  messagingSenderId: "602028799748",
  appId: "1:602028799748:web:501159b965483a8c758251"
};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig);

const fireDatabase = getFirestore(fireBase);

export {fireDatabase};