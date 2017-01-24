export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case 'FETCH_COMMENTS_FULFILLED': {
    newState.comments = action.payload;
    break;
  }
  case 'FETCH_COMMENTS_FAILED': {
    console.log('Comments fetch failed.');
    break;
  }
  // no default
  }
  return newState;
}
