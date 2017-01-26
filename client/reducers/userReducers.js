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
  // no default
  }
  return newState;
}
