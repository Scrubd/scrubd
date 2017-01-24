import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({comment}) => (
  <div>
    <span>{comment.User.name}@{comment.time_stamp}</span><br/>
    {comment.comment}
  </div>
  );


export default Comment;