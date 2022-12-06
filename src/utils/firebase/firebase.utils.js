import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// Database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  
  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  // if user data exists
  return userDocRef;
}


