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
    const videoSource = player.element.getAttribute('src');

    player.getCurrentTime()
      .then(seconds => ({
        name: this.props.name,
        comment,
        URL: videoSource,
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
    const videoSource = player.element.getAttribute('src');
    let data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: 'JOSEPH',
          comment: ':thumbsup:',
          URL: videoSource,
          time_stamp: seconds,
        };
        this.props.dispatch(submitComment(data));
      }));
  }

  thumbsDownSubmit() {
    event.preventDefault();
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const videoSource = player.element.getAttribute('src');
    let data;

    player.getCurrentTime()
      .then(((seconds) => {
        data = {
          name: 'JOSEPH', // TODO: make this dynamic + various refactorizations / cleanup
          comment: ':thumbsdown:',
          URL: videoSource,
          time_stamp: seconds,
        };
        this.props.dispatch(submitComment(data));
      }));
  }


  render() {
    return (
      <div>
        <form action="#">
          <input ref="comment" placeholder="Submit comment..." maxLength="255" />
          <button className="btn btn-xs commentButton" onClick={this.commentSubmit.bind(this)}>Submit</button>
          <span onClick={this.thumbsUpSubmit.bind(this)}> {emojify(':thumbsup:', { output: 'unicode' })} </span>
          <span onClick={this.thumbsDownSubmit.bind(this)}> {emojify(':thumbsdown:', { output: 'unicode' })} </span>
        </form>
      </div>
    );
  }
}

export default connect(null)(SingleComment);
