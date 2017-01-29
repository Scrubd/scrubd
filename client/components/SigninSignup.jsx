import React from 'react';
import ReactDOM from 'react-dom';
import { signupOrSignin } from '../actions/userActions';

export default function SigninSignup({ dispatch }) {
  let textInput = null;

  const submitHandler = (e) => {
    dispatch(signupOrSignin({ name: textInput.value }));
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div>
        <label className="pull-right" htmlFor="signin-signup">Signin / Signup</label>
        <input className="pull-right" id="signin-signup" placeholder="Username here..." ref={(ref) => { textInput = ref; }} />
      </div>
    </form>
  );
}
