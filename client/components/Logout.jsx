import React from 'react';
import ReactDOM from 'react-dom';
import { signout } from '../actions/userActions';

export default function Logout({ dispatch }) {
  return (
    <div>
      <a href="" onClick={(e) => { e.preventDefault(); dispatch(signout); }}>Logout</a>
    </div>
  );
}
