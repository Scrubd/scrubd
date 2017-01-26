import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = applyMiddleware(logger(), thunk);
const defaultState = {
  video: {
    currentVideo: 'https://player.vimeo.com/video/76979871',
  },
  comments: {
    comments: [],
  },
};
export default createStore(reducer, defaultState, middleware);
