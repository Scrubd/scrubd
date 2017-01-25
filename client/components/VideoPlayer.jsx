import React from 'react';

const VideoPlayer = (props) => (
  <div>

    <iframe src={props.currentVideo} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
  </div>
);


export default VideoPlayer;

