import { connect } from 'react-redux';
import React from 'react';
import Logout from './Logout.jsx';
import SigninSignup from './SigninSignup.jsx';
import InputURL from './InputURL.jsx';

const TopNavBar = ({ sessionActive, name, dispatch }) => (
  <div className="top">
    { sessionActive ? (<Logout className="pull-right logout" dispatch={dispatch} />) : (<SigninSignup dispatch={dispatch} />) }
    { name ? <InputURL name={name} /> : null }
  </div>
);

export default connect((state => ({
  sessionActive: state.user.sessionActive,
  name: state.user.name,
})))(TopNavBar);
