import React from 'react';
import ReactDOM from 'react-dom';
// var axios = require('axios'); 
var axiosHelper = require('../../server/axios-helper.js')

class SingleComment extends React.Component {

  constructor(props) {
   super(props);
  }

  commentSubmit () {
    event.preventDefault();
    var comment = this.refs.comment.value;
    this.refs.comment.value = '';
    var currentVideo = document.getElementsByTagName('video');
    var timeStamp = currentVideo.media.currentTime;
    var videoSource = currentVideo.media.currentSrc;
    var data = {
      name: 'JOSEPH',
      comment: comment,
      URL: videoSource,
      time_stamp: timeStamp
    };
    axiosHelper.submitComment(data);
    axiosHelper.getComments(videoSource);
    // console.log(data);
  }

  render() {
    return (
    <div className='container'>
      <input ref="comment" placeholder="Submit comment..."/>
      <button onClick={this.commentSubmit.bind(this)}>Submit</button>
    </div>
    );
  }
}

export default SingleComment;