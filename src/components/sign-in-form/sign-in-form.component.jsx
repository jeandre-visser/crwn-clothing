import { useState } from 'react';
import { 
  signInWithGooglePopup , createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { FcGoogle } from 'react-icons/fc';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields();
    } catch (err) {

      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(err.message)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-in-container">
      <h2>Already Have An Account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          type="email" 
          required onChange={handleChange} name="email"  
          value={email}
        />
        
        <FormInput
          label="Password"
          type="password" 
          required 
          onChange={handleChange} name="password" 
          value={password}
        />
        <div className="buttons-container">
          <Button 
            type="submit"
          >
            Sign In
          </Button>
          <Button 
            type="button"
            onClick={signInWithGoogle}
            buttonType="google"
          >
          Sign In With <FcGoogle size={20} />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm