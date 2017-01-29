import { emojify } from 'react-emojione';
import React from 'react';
import Player from '@vimeo/player';
import { connect } from 'react-redux';
import { submitComment } from '../actions/commentsActions';

class SingleComment extends React.Component {

  commentSubmit() {
    event.preventDefault();
    if (this.refs.comment.value === '') {
      alert('yo give us a comment');
      return;
    }
    const comment = this.refs.comment.value;
    this.refs.comment.value = '';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.getCurrentTime()
      .then(seconds => ({
        name: this.props.name,
        comment,
        URL: this.props.video,
        time_stamp: seconds,
      }))
      .then((data) => {
        this.props.dispatch(submitComment(data));
      });
  }

  thumbsUpSubmit() {
    event.preventDefault();
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    let data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: this.props.name,
          comment: ':thumbsup:',
          URL: this.props.name,
          time_stamp: seconds,
        };
        this.props.dispatch(submitComment(data));
      }));
  }

  thumbsDownSubmit() {
    event.preventDefault();
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    let data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: this.props.name,
          comment: ':thumbsdown:',
          URL: this.props.video,
          time_stamp: seconds,
        };
        this.props.dispatch(submitComment(data));
      }));
  }


  render() {
    return (
      <div className="container">
        <form action="#">
          <input ref="comment" placeholder="Submit comment..." maxLength="255" />
          <button className="btn btn-xs" onClick={this.commentSubmit.bind(this)}>Submit</button>
          <span onClick={this.thumbsUpSubmit.bind(this)}> {emojify(':thumbsup:', { output: 'unicode' })} </span>
          <span onClick={this.thumbsDownSubmit.bind(this)}> {emojify(':thumbsdown:', { output: 'unicode' })} </span>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  video: state.video.currentVideo,
  name: state.user.name,
}))(SingleComment);
