import { connect } from 'react-redux';
import React from 'react';
import { submitURL, fetchVideos, fetchTime } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';
import { loadVideo } from '../componentHelpers';

const validUrl = require('valid-url');

class InputURL extends React.Component {

  videoSubmit() {

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
        })
        .then(() => {
          return loadVideo(url);
        })
        .then(() => {
          this.props.dispatch(fetchTime());
        });
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
