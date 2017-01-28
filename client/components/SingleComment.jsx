import React from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';
import { connect } from 'react-redux';
import { submitComment } from '../actions/commentsActions';

class SingleComment extends React.Component {

  commentSubmit() {
    event.preventDefault();
    let comment = this.refs.comment.value;
    this.refs.comment.value = '';
    let iframe = document.querySelector('iframe');
    let player = new Player(iframe);
    let videoSource = player.element.getAttribute('src');
    let timeStamp;
    let data;

    player.getCurrentTime()
      .then((seconds) => {
        data = {
          name: 'JOSEPH',
          comment,
          URL: videoSource,
          time_stamp: seconds,
        };
        this.props.dispatch(submitComment(data));
      });
  }


  render() {
    return (
      <div className="container">
      <input ref="comment" placeholder="Submit comment..."  />
      <button onClick={this.commentSubmit.bind(this)}>Submit</button>
    </div>
    );
  }
}

export default connect(null)(SingleComment);
