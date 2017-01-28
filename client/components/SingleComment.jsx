import React from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';
import { connect } from 'react-redux';
import { submitComment } from '../actions/commentsActions';

class SingleComment extends React.Component {

  commentSubmit() {
    event.preventDefault();
    const comment = this.refs.comment.value;
    this.refs.comment.value = '';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const videoSource = player.element.getAttribute('src');

    player.getCurrentTime()
      .then((seconds) => {
        return {
          name: this.props.name,
          comment,
          URL: videoSource,
          time_stamp: seconds,
        };
      })
      .then((data) => {
        this.props.dispatch(submitComment(data));
      });
  }

  render() {
    return (
      <div className="container">
        <input ref="comment" placeholder="Submit comment..." />
        <button onClick={this.commentSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default connect(null)(SingleComment);
