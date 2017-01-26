import React from 'react';
import ReactDOM from 'react-dom';

export default function Logout({ dispatch }) {
  return (
    <div>
      <label htmlFor="logout">Logout</label>
      <input type="button" id="logout" placeholder="Username here..." />
    </div>
  );
}
