import React from 'react';
import SingleComment from './SingleComment.jsx';

const VideoPlayer = () => (
  <div>
    <video id="sampleMovie" width="640" height="360" preload controls>
        <source src="###" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
    </video>
    <div id="SingleComment">
      <SingleComment />
    </div>
  </div>
  );

export default VideoPlayer;