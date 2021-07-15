import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBNZUoprxx6JCHPMbjSlicQ7-RRU9IqfWc',
  authDomain: 'topbook-a1b96.firebaseapp.com',
  databaseURL:
    'https://topbook-a1b96-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'topbook-a1b96',
  storageBucket: 'topbook-a1b96.appspot.com',
  messagingSenderId: '766015274239',
  appId: '1:766015274239:web:cc76a388757644a0a9e0ca',
})

export const auth = app.auth()

export const db = app.firestore()
export default app
