import { connect } from 'react-redux';
import React from 'react';
import Logout from './Logout.jsx';
import SigninSignup from './SigninSignup.jsx';

const TopNavBar = ({ sessionActive, dispatch }) => (
  <nav>
    <h3>Scrubd</h3>
    { sessionActive ? (<Logout className="pull-right logout" dispatch={dispatch} />) : (<SigninSignup dispatch={dispatch} />) }
  </nav>
);

export default connect((state => ({
  sessionActive: state.user.sessionActive,
})))(TopNavBar);
