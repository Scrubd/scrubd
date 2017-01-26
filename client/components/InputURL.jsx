import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchComments } from '../actions/commentsActions';
// import VideoPlayer from './VideoPlayer.jsx';
// import CommentBox from './CommentBox.jsx';

class InputURL extends React.Component {

  render() {
    return (
      <div className="container">
        <input ref="comment" placeholder="Submit comment..." />
        <button>Submit</button>
      </div>
    );
  }
}

export default connect(null)(InputURL);
