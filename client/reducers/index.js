import { combineReducers } from 'redux';
import comments from './commentsReducers';
import video from './videoReducers';

export default combineReducers({
  comments,
  video,
});
