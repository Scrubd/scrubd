import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = applyMiddleware(logger(), thunk);

export default createStore(reducer, middleware);
