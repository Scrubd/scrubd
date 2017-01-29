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

        // const iframe = document.querySelector('iframe');
        // const player = new Player(iframe);
        // const stuff = video.url.split('/');
        // const lol = stuff[stuff.length - 1];
        // player.loadVideo(lol).then((id) => {
        //   console.log(id);
        // });