import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAtozkvCQxmYx3tUgZCFV7dPHpNyjoYdTE",
    authDomain: "plantlet-ea46e.firebaseapp.com",
    projectId: "plantlet-ea46e",
    storageBucket: "plantlet-ea46e.appspot.com",
    messagingSenderId: "366213459965",
    appId: "1:366213459965:web:f61ee38b31d0645cbdb394",
    measurementId: "G-4928LM8WZ0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// export const signInWithGoogle = ()  => signInWithPopup(auth , provider);


export const signInWithGoogle = ()  =>{
    signInWithPopup(auth , provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name" , name)
        localStorage.setItem("email" , email)
        localStorage.setItem("profilePic" , profilePic)


    }).catch((err) => {
        console.log(err.message)
    });
};


export const db = getDatabase(app);
