import React from 'react';
import ReactDOM from 'react-dom';

class SingleComment extends React.Component {

  constructor(props) {
   super(props);
  }

  commentSubmit (event) {
    var comment = this.refs.comment.value;
    var video = document.getElementsByTagName('video');
    var timeStamp = video.media.currentTime;
    console.log('message:', comment, 'Current Time', timeStamp);
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