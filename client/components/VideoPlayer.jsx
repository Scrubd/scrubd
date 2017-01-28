import React from 'react';
import Player from '@vimeo/player';
import Scroll from 'react-scroll';
import { findNearestTimeStamp } from '../componentHelpers';

const scroller = Scroll.scroller;

class VideoPlayer extends React.Component {

  componentDidMount() {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


    player.on('seeked', ((data) => {
      const anchor = findNearestTimeStamp(this.props.comments, data.seconds);
      // scroller.scrollTo(anchor.toString(), {
      //   duration: 300,
      //   smooth: true,
      // });
      // console.log(anchor)
      // var topPos = document.getElementById(anchor.toString()).offsetTop;
      // console.log("topPos: " + topPos);
      // console.log("container scrolltop: " + document.getElementById('commentsContainer').scrollTop);
      // document.getElementById('commentsContainer').scrollTop = topPos;
      // var commentsContainer = document.getElementById('commentsContainer')
      // commentsContainer.scrollTo(anchor);     
      var element = document.getElementById(anchor.toString())
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

