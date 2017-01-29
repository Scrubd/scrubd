import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { emojify } from 'react-emojione';

const Comment = ({ comment }) =>
  <div className="oneComment">
    <ul>
      <li className="userName">{comment.User.name} at {comment.time_stamp} seconds</li>
      <li className="message">{emojify(`${comment.comment}`, { output: 'unicode' })}</li>
      <li id={comment.time_stamp.toString()} />
    </ul>
  </div>
  ;
export default Comment;
