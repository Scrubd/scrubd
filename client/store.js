import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = applyMiddleware(logger(), thunk);
const defaultState = {
  video: {
    currentVideo: 'https://player.vimeo.com/video/192352553',
    duration: null,
    videos: [],
  },
  comments: {
    comments: [],
  },
  user: {
    sessionActive: null,
    name: null,
  },
};
export default createStore(reducer, defaultState, middleware);

