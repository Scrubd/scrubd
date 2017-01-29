import store from '../store';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SUBMIT_VIDEO_FULFILLED': {
      newState.currentVideo = action.payload.url;
      break;
    }
    case 'SUBMIT_VIDEO_FAILED': {
      console.log('Submit video failed.');
      break;
    }
    case 'FETCH_VIDEOS_FULFILLED': {
      newState.videos = action.payload;
      break;
    }
    case 'FETCH_VIDEOS_FAILED': {
      console.log('Could not fetch videos');
      break;
    }
    case 'CLICK_VIDEO': {
      newState.currentVideo = action.payload.url;
      break;
    }
    case 'FETCH_DURATION_FULFILLED': {
      newState.duration = action.payload;
      break;
    }
  // no default
  }

  return newState;
}
