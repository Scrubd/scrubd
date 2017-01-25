import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = applyMiddleware(logger(), thunk);
const defaultState = {
  video: {
    currentVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  comments: {
    comments: [],
  },
};
export default createStore(reducer, defaultState, middleware);
