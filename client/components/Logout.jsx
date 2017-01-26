import React from 'react';
import ReactDOM from 'react-dom';

export default function Logout({ sessionActive }) {

  return (
    <form action="#" onSubmit={() => {}}>
      <div>
        <label htmlFor="logout">Logout</label>
        <input id="logout" placeholder="Username here..." />
      </div>
    </form>
  );
}
