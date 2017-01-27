import jwt from 'jwt-simple';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case 'SIGNUP_FULFILLED':
  case 'SIGNIN_FULFILLED':
    newState.sessionActive = true;
    newState.name = action.payload;
    break;
  case 'SIGNIN_OR_SIGNUP_FAILED':
    console.log(action.payload.response);
    break;
  case 'CHECK_AUTH_FULFILLED':
    newState.sessionActive = true;
    newState.name = action.payload.name;
    break;
  case 'CHECK_AUTH_FAILED':
  case 'LOGOUT':
    newState.sessionActive = false;
    newState.name = null;
    break;
  // no default
  }
  return newState;
}
