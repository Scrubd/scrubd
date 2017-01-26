import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const validUrl = require('valid-url');
// import { fetchComments } from '../actions/commentsActions';
// import VideoPlayer from './VideoPlayer.jsx';
// import CommentBox from './CommentBox.jsx';

class InputURL extends React.Component {

  submitURL () {
    event.preventDefault();
    let url = this.refs.url.value;
    this.refs.url.value = '';
     if (validUrl.isUri(url) && url.includes('vimeo')) {
        let final = url.substr(url.lastIndexOf('/') + 1);
        url = `https://player.vimeo.com/video/${final}`;
        console.log(url);
     } else {
        alert('PLEASE ENTER A VALID VIMEO URL');
    }

  }

  render () {
    return (
      <div className="container">
        <input ref="url" placeholder="Add a video..." />
        <button onClick={this.submitURL.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default connect(null)(InputURL);