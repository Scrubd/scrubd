import React from 'react';
import SingleComment from './SingleComment.jsx';

const VideoPlayer = () => (
  <div>
    <video name="media" width="640" height="360" preload controls>
      <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" />
    </video>
    <div id="SingleComment">
      <SingleComment />
    </div>
  </div>
  );

export default VideoPlayer;
