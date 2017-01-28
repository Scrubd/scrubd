import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { submitURL } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';

const validUrl = require('valid-url');

class InputURL extends React.Component {

  videoSubmit() {
    event.preventDefault();
    let url = this.refs.url.value;
    this.refs.url.value = '';
    if (validUrl.isUri(url) && url.includes('vimeo')) {
      const final = url.substr(url.lastIndexOf('/') + 1);
      url = `https://player.vimeo.com/video/${final}`;
      const data = { url };
      this.props.dispatch(submitURL(data));
      this.props.dispatch(fetchComments(data.url));
    } else {
      alert('PLEASE ENTER A VALID VIMEO URL');
    }
  }

  render() {
    return (
      <div className="container">
        <input ref="url" placeholder="Add a video..." />
        <button onClick={this.videoSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default connect(null)(InputURL);
