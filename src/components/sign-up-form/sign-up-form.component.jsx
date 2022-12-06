import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName })

      // Clear all fields on submit
      resetFormFields();

    } catch (err) {

      if(err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encountered an error', err.message)
      }

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='"sign-up-container'>
      <h2>Don't Have An Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text" 
          required 
          onChange={handleChange} name="displayName" 
          value={displayName}
        />

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
        
        <FormInput 
          label="Confirm Password"
          type="password" 
          required 
          onChange={handleChange} name="confirmPassword" 
          value={confirmPassword}
        />

        <button type="submit" >Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm