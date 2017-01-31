import { connect } from 'react-redux';
import React from 'react';
import { submitURL, fetchVideos, fetchTime } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';
import { loadVideo, makePlayer } from '../componentHelpers';

const validUrl = require('valid-url');

class InputURL extends React.Component {

  videoSubmit() {
    event.preventDefault();
    const player = makePlayer();
    let url = this.refs.url.value;
    this.refs.url.value = '';
    if (validUrl.isUri(url) && url.includes('vimeo')) {
      const final = url.substr(url.lastIndexOf('/') + 1);
      url = `https://player.vimeo.com/video/${final}`;
      const data = { url, title: null, duration: null, name: this.props.name, increment: true };
      loadVideo(url)
      .then(() => player.getVideoTitle())
      .then((title) => {
        data.title = title;
        return this.props.dispatch(fetchTime());
      })
      .then((duration) => {
        data.duration = duration;
        window.localStorage.setItem('currentVideo', JSON.stringify(data));
        return this.props.dispatch(submitURL(data));
      })
      .then(() => this.props.dispatch(fetchComments(data.url)))
      .then(() => this.props.dispatch(fetchVideos()))
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert('PLEASE ENTER A VALID VIMEO URL'); // TODO: display an error message for the end user on the page itself.
    }
  }

  render() {
    return (
      <div className="addURL">
        <input className="top" ref="url" placeholder="Add a Vimeo url..." />
        <button className="btn btn-xs top" onClick={this.videoSubmit.bind(this)}> <span className="glyphicon glyphicon-plus" />
        </button>
      </div>
    );
  }
}

export default connect(null)(InputURL);
