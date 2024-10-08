import {auth, GoogleProvider} from "../config/firebase.js";
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";

export const Auth = async () => {
    // const SignInWithGoogle = async () => {
        try{
            var result = await signInWithPopup(auth, GoogleProvider);
        }catch(err){
            console.error(err);
        }
    // }
};