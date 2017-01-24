import { combineReducers } from 'redux';
import comments from './commentsReducers';
import videos from './videoReducers';

export default combineReducers({
  comments,
  videos,
});
