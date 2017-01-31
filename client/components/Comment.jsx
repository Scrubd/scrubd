import React from 'react';
import Scroll from 'react-scroll';
import { emojify } from 'react-emojione';

const Comment = ({ comment }) =>
  <div className="oneComment">
    <ul>
      <li className="userName">{comment.User.name} @ { `${Math.floor(comment.time_stamp / 60)}:${Math.round(comment.time_stamp % 60)}`}</li>
      <li className="message">{emojify(`${comment.comment}`, { output: 'unicode' })}</li>
      <li id={comment.time_stamp.toString()} />
    </ul>
  </div>
  ;
export default Comment;
