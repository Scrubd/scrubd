import React from 'react';
import ReactDOM from 'react-dom';

class SingleComment extends React.Component {

  constructor(props) {
   super(props);
  }

  commentSubmit (event) {
    event.preventDefault();
    var comment = this.refs.comment.value;
    this.refs.comment.value = '';
    var currentVideo = document.getElementsByTagName('video');
    var timeStamp = currentVideo.media.currentTime;
    var videoSource = currentVideo.media.currentSrc;
    var data = {
      user: 'Marc',
      message: comment,
      video: videoSource,
      timeStamp: timeStamp
    };
    console.log(data);
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