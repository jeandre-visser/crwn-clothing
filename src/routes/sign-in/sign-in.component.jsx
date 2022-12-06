import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.utils';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {
  // Run this function one time, once the SignIn component mounts
  useEffect(async () => {
    const response = getRedirectResult(auth);
    console.log(response)
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
    </div>
  )
}

export default SignIn