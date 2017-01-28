import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment.jsx';
import AllComments from './AllComments.jsx';


const CommentBox = props => (
  <div>
    <div className="container commentBox">
      <SingleComment />
      <AllComments comments={props.comments} />
    </div>
  </div>
);

export default CommentBox;
