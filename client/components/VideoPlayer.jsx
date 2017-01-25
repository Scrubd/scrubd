import React from 'react';

class VideoPlayer extends React.Component {

  componentDidMount() {
    const findNearestTimeStamp = (comments, timeStamp) => {
      // Look for middle of array
        // if timeStamp >= current comment < next comment
          // return current comment's time stamp
        // if timeStamp >= previous comment and < current comment
          // return previous comment's time stamp
        // if timeStamp < current comment's' time stamp
          // recurse with (comments/2 1st half, timeStamp)
        // if timeStamp > current comment's' time stamp
          // recurse with (comments/2 2st half, timeStamp)
    };
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

