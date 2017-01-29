import React from 'react';
import { connect } from 'react-redux';
import Player from '@vimeo/player';
import { findNearestTimeStamp } from '../componentHelpers';


class VideoPlayer extends React.Component {

  componentDidMount() {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


    player.on('seeked', ((data) => {
      const anchor = findNearestTimeStamp(this.props.comments, data.seconds);
      var element = document.getElementById(anchor.toString())
      console.log(element);
      element.scrollIntoView();

    }).bind(this));

  }

  render() {


    return (
      <div>
        <iframe src={this.props.currentVideo} width="640" height="360" frameBorder="0" allowFullScreen />
      </div>
    );
  }
}


export default VideoPlayer;

