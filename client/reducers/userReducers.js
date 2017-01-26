export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case 'SIGNUP_FULFILLED':
  case 'SIGNIN_FULFILLED':
    state.sessionActive = true;
    state.name = action.payload.name;
    break;
  case 'SIGNIN_OR_SIGNUP_FAILED':
    console.log(action.payload.response);
  // no default
  }
  return newState;
}
