import * as firebase from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"

//import * as admin from 'firebase-admin';
//let serviceAccount = require("../sec/serviceAccountKey.json");

firebase.initializeApp({
    //credential: admin.credential.cert(serviceAccount),
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();
enableIndexedDbPersistence(db);

export const signInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
        .then((res) => {
            console.log(res.user);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("sign out");
        document.location.reload();
    }).catch((error) => {
        // An error happened.
        console.log(error.message);
    });
}