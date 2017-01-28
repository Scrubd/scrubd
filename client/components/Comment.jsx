import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

const Comment = ({ comment }) =>
  <div>
    <Element name={comment.time_stamp.toString()} />
    <span>{comment.User.name}@{comment.time_stamp}</span><br />
    {comment.comment}
  </div>
  ;

export default Comment;
