import { combineReducers } from 'redux';
import comments from './commentsReducers';
import video from './videoReducers';
import user from './userReducers';

export default combineReducers({
  comments,
  video,
  user,
});
