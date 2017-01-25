import React from 'react';
import Player from '@vimeo/player';

class VideoPlayer extends React.Component {

  componentDidMount() {
    const findNearestTimeStamp = (comments, timeStamp) => {
      const middleIndex = Math.floor(comments.length / 2);
      const middle = comments[middleIndex];
      const next = comments[middleIndex + 1] || middle;
      const previous = comments[middleIndex - 1] || middle;
      if (timeStamp === middle.time_stamp) {
        return timeStamp;
      } else if (timeStamp < comments[0].time_stamp) {
        return comments[0].time_stamp;
      } else if (timeStamp > comments[comments.length - 1].time_stamp) {
        return comments[comments.length - 1].time_stamp;
      } else if (timeStamp >= middle.time_stamp && timeStamp < next.time_stamp) {
        return middle.time_stamp;
      } else if (timeStamp >= previous.time_stamp && timeStamp < middle.time_stamp) {
        return previous.time_stamp;
      } else if (timeStamp < middle.time_stamp) {
        return findNearestTimeStamp(comments.slice(0, middleIndex), timeStamp);
      } else if (timeStamp > middle.time_stamp) {
        return findNearestTimeStamp(comments.slice(middleIndex), timeStamp);
      }
    };
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const that = this;
    player.on('seeked', ((data) => {
      const lol = findNearestTimeStamp(this.props.comments, data.seconds);
      debugger;
      // findNearestTimeStamp(this.props.comments);
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

