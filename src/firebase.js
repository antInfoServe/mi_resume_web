import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut, onAuthStateChanged} from 'firebase/auth'

import config from '../serviceAccountKey.json'

const app = initializeApp(config)
const auth = getAuth(app)

export {
    auth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    onAuthStateChanged
}