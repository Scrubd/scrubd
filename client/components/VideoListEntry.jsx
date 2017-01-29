import React from 'react';
import { connect } from 'react-redux';
import { clickVideo } from '../actions/videoActions';
import { fetchComments } from '../actions/commentsActions';
import { loadVideo } from '../componentHelpers';

const VideoListEntry = ({ video, dispatch }) => (
  <div>
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        dispatch(clickVideo(video));
        dispatch(fetchComments(video.url));
        loadVideo(video.url);
      }}
    >{video.url}</a>
  </div>
);

export default connect(null)(VideoListEntry);
