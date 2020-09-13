import { initFirebase, signinAnonymus, authStateObserver } from '@react-chat-monorepo/firebase';

export const initDatabase = async () => {
    await initFirebase();
}

export const doSignin = async () => {
    await signinAnonymus().catch(err => {
        console.log('Error in signin');
    }).then(resp => {
        console.log(resp);
    });
}

export {authStateObserver};