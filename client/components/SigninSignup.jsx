import React from 'react';
import ReactDOM from 'react-dom';
import { signupOrSignin } from '../actions/userActions';

export default function SigninSignup({ dispatch }) {
  const submitHandler = (e) => {
    dispatch(signupOrSignin({ name: e.currentTarget.firstChild.lastChild.value }));
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div>
        <label htmlFor="signin-signup">Signin / Signup</label>
        <input id="signin-signup" placeholder="Username here..." />
      </div>
    </form>
  );
}
