import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import {emojify} from 'react-emojione';


const Element = Scroll.Element;

const Comment = ({ comment }) => (
  <div>
    <Element name={comment.time_stamp.toString()} />
    <span>{comment.User.name}@{comment.time_stamp}</span><br />
    <span>{emojify(`${comment.comment}`, {output: 'unicode'})}</span>
  </div>
  );


export default Comment;
