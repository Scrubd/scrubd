import React from 'react';
import ReactDOM from 'react-dom';

export default function TopNavBar() {
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

