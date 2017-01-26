import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
// import ReactEmoji from 'react-emoji';
import {emojify} from 'react-emojione';


const Element = Scroll.Element;

const Comment = ({ comment }) => (
  <div>
    <Element name={comment.time_stamp.toString()} />
    <span>{comment.User.name}@{comment.time_stamp}</span><br />
    <span>{emojify(`${comment.comment}`, {output: 'unicode'})}</span>
    <div>
        {emojify('Easy! :wink: 😸 :D  ^__^', {output: 'unicode'})}
    </div>
  </div>
  );


export default Comment;
