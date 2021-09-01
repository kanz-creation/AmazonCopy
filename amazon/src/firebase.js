import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAR1SFTtIuyjPA8IObF_cCFmVRBb8NM7wI',
  authDomain: 'clone-7e76f.firebaseapp.com',
  projectId: 'clone-7e76f',
  storageBucket: 'clone-7e76f.appspot.com',
  messagingSenderId: '492025301978',
  appId: '1:492025301978:web:e1157ecafe592ca2c88ee3',
  measurementId: 'G-6ZVEMHNT0S',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
