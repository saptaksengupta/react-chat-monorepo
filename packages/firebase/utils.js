import firebaseConfig from './config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


let db = null;

export const initFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
}

export const signinAnonymus = () => {
    return firebase.auth().signInAnonymously();
}

export const authStateObserver = () => {
    return firebase.auth().onAuthStateChanged;
}

export const createUser = (userInfo, userKey) => {
    return db.collection('users').doc(userKey).set({
        name: userInfo.name,
        phone: userInfo.phone,
        id: userInfo.id,
        image_url: userInfo.imageUrl
    });
}