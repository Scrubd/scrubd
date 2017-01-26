import store from '../store';

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
  case 'SUBMIT_COMMENT_FULFILLED': {
    const { comment, name, time_stamp } = action.payload;
    newState.comments = newState.comments.slice();
    newState.comments.push({
      User: { name },
      comment,
      time_stamp,
    });
    console.log('Comment successfully registered.');
    break;
  }
  case 'SUBMIT_COMMENT_FAILED': {
    console.log('Comment failed to register.');
    break;
  }
  // no default
  }
  return newState;
}
