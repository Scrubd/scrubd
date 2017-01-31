import { connect } from 'react-redux';
import React from 'react';
import { submitURL, fetchVideos } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';
import { loadVideo, makePlayer } from '../componentHelpers';

const validUrl = require('valid-url');

class InputURL extends React.Component {

  videoSubmit() {
    event.preventDefault();
    const player = makePlayer();
    // player.getVideoTitle().then((title) => {
      
    // });
    let url = this.refs.url.value;
    this.refs.url.value = '';
    if (validUrl.isUri(url) && url.includes('vimeo')) {
      const final = url.substr(url.lastIndexOf('/') + 1);
      url = `https://player.vimeo.com/video/${final}`;
      const data = { url, name: this.props.name, increment: true };
      this.props.dispatch(submitURL(data))
        .then((video) => {
          window.localStorage.setItem('currentVideo', JSON.stringify(data));
          this.props.dispatch(fetchComments(data.url));
          this.props.dispatch(fetchVideos());
        });
      loadVideo(url);
    } else {
      alert('PLEASE ENTER A VALID VIMEO URL'); // TODO: display an error message for the end user on the page itself.
    }
  }

  render() {
    return (
      <div className="container">
        <input ref="url" placeholder="Add a video..." />
        <button className="btn btn-xs" onClick={this.videoSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default connect(null)(InputURL);
