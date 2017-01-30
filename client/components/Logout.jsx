import React from 'react';
import { signout } from '../actions/userActions';

export default function Logout({ dispatch }) {
  return (
    <div>
      <button className="btn btn-xs pull-right logout" onClick={(e) => { e.preventDefault(); dispatch(signout); }}>Logout</button>
    </div>
  );
}
