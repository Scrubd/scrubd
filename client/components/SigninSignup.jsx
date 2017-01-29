import React from 'react';
import { signupOrSignin } from '../actions/userActions';

export default function SigninSignup({ dispatch }) {
  let textInput = null;

  const submitHandler = (e) => {
    dispatch(signupOrSignin({ name: textInput.value }));
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div>
        <label htmlFor="signin-signup">Signin / Signup</label>
        <input id="signin-signup" placeholder="Username here..." ref={(ref) => { textInput = ref; }} />
      </div>
    </form>
  );
}
