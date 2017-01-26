import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout.jsx';
import SigninSignup from './SigninSignup.jsx';

const TopNavBar = ({ sessionActive, dispatch }) => (
  <nav>
    { sessionActive ? (<Logout dispatch={dispatch} />) : (<SigninSignup dispatch={dispatch} />) }
  </nav>
);

export default connect((state => ({
  user: state.user,
})))(TopNavBar);
