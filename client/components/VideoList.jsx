import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

const VideoList = ({ videos }) => (
  <div>
    {videos.map((video, index) => <VideoListEntry key={index} video={video} />)}
  </div>
);

export default VideoList;
