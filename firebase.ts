import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA9JsHJOKCmeF-zh0kFooBaxichG28gBCM",
    authDomain: "dropbox-a5273.firebaseapp.com",
    projectId: "dropbox-a5273",
    storageBucket: "dropbox-a5273.appspot.com",
    messagingSenderId: "488635843994",
    appId: "1:488635843994:web:32d7420a5a708486f72623"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };