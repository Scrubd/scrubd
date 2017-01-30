import React from 'react';
import { connect } from 'react-redux';
import { clickVideo } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';
import { loadVideo } from '../componentHelpers';

const VideoListEntry = ({ video, dispatch }) => (
  <div className="videoEntry">
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        dispatch(clickVideo(video));
        dispatch(fetchComments(video.url));
        loadVideo(video.url);
        window.localStorage.setItem('currentVideo', JSON.stringify(video));
      }}
    >{video.url}</a>
  </div>
);

export default connect(null)(VideoListEntry);
