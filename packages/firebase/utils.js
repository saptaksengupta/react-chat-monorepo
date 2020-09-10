import firebaseConfig from './config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export const initFirebase = () => {
    firebase.initializeApp(firebaseConfig);
}

export const signinAnonymus = () => {
    return firebase.auth().signInAnonymously();
}

export const authStateObserver = () => {
    return firebase.auth().onAuthStateChanged;
}