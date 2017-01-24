import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.append(div);
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
