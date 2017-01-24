import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = applyMiddleware(logger(), thunk);
const defaultStore = {
  video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  comments: [],
};
export default createStore(reducer, defaultStore, middleware);
