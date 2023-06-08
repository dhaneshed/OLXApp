import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9UO3TlbVWsOS4z9smnPJHo3n_qGBBdK8",
  authDomain: "olx-clone-e2b85.firebaseapp.com",
  projectId: "olx-clone-e2b85",
  storageBucket: "olx-clone-e2b85.appspot.com",
  messagingSenderId: "983837591487",
  appId: "1:983837591487:web:0fc8b5618c63e8ddea830a",
  measurementId: "G-XTNT9LT65C"
};

export default firebase.initializeApp(firebaseConfig)