
export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_DURATION_FULFILLED': {
      newState.duration = action.payload;
      break;
    }
    case 'FETCH_DURATION_FAILED': {
      console.log('Fetch time duration failed.');
      break;
    }
  }
}