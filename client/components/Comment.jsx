import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({comment}) => (
  <div>
    <span>{comment.name}@{comment.time_stamp}</span><br/>
    {comment.message}
  </div>
  );


export default Comment;