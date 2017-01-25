import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({ comment }) => (
  <div>
    <span id={comment.time_stamp}>{comment.User.name}@{comment.time_stamp}</span><br />
    {comment.comment}
  </div>
  );


export default Comment;
