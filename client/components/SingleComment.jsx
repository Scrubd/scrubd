import React from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';
import { emojify } from 'react-emojione';
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

  thumbsUpSubmit () {
    event.preventDefault();
    var iframe = document.querySelector('iframe');
    var player = new Player(iframe);
    var videoSource = player.element.getAttribute('src');
    var timeStamp;
    var data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: 'JOSEPH',
          comment: ":thumbsup:",
          URL: videoSource,
          time_stamp: seconds
        };
        this.props.dispatch(submitComment(data));
      }).bind(this));
  }

  thumbsDownSubmit () {
    event.preventDefault();
    var iframe = document.querySelector('iframe');
    var player = new Player(iframe);
    var videoSource = player.element.getAttribute('src');
    var timeStamp;
    var data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: 'JOSEPH', // TODO: make this dynamic + various refactorizations / cleanup
          comment: ":thumbsdown:",
          URL: videoSource,
          time_stamp: seconds
        };
        this.props.dispatch(submitComment(data));
      }).bind(this));
  }

  render() {
    return (
      <div className="container">
        <input ref="comment" placeholder="Submit comment..." />
        <button onClick={this.commentSubmit.bind(this)}>Submit</button>
        <span onClick={this.thumbsUpSubmit.bind(this)}> {emojify(':thumbsup:', { output: 'unicode' })} </span>
        <span onClick={this.thumbsDownSubmit.bind(this)}> {emojify(':thumbsdown:', { output: 'unicode' })} </span>
      </div>
    );
  }
}

export default connect(null)(SingleComment);
