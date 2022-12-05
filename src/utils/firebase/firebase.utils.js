import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCy0ZmZQyPERWOny_bhiHgr-8gDxxCOeHg",
  authDomain: "crwn-clothing-db-95bba.firebaseapp.com",
  projectId: "crwn-clothing-db-95bba",
  storageBucket: "crwn-clothing-db-95bba.appspot.com",
  messagingSenderId: "500777622020",
  appId: "1:500777622020:web:1e0967406eaa41d4b2b351"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

