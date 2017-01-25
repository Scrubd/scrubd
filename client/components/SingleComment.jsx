import React from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';
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

    var iframe = document.querySelector('iframe');
    var player = new Player(iframe);
    var videoSource = player.element.getAttribute('src');
    var timeStamp;
    var data;

    player.getCurrentTime()
      .then(function(seconds){
        data = {
          name: 'JOSEPH',
          comment: comment,
          URL: videoSource,
          time_stamp: seconds
        };
        axiosHelper.submitComment(data);
      })
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
