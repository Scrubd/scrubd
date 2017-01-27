import store from '../store';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SUBMIT_VIDEO_FULFILLED': {
      newState.currentVideo = action.payload.url;
      console.log('video successfully submitted');
      break;
    }
    case 'SUBMIT_VIDEO_FAILED': {
      console.log('Comments fetch failed.');
      break;
    }
  // no default
  }

  return newState;
}
