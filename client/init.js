import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

let div = document.createElement("div");
div.setAttribute("id", "app");
document.body.append(div);
ReactDOM.render(<App />, document.getElementById('app'));