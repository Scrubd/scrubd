import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout.jsx';
import SigninSignup from './SigninSignup.jsx';

export default function TopNavBar({ sessionActive }) {
  const consoling = () => {
    console.log('don\'t cry');
  };

  return (
    <nav>
      <form action="#" onSubmit={() => { consoling(); }}>
        <div>
          <label htmlFor="login-logout">Login / Logout</label>
          <input id="login-logout" placeholder="Username here..." />
        </div>
      </form>
    </nav>
  );
}

