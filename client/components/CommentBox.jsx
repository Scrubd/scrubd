import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment.jsx';
import AllComments from './AllComments.jsx';

const CommentBox = ({ comments, name }) => (
  <div>
    <div>
      { name ? <SingleComment name={name} /> : null }
      <AllComments comments={comments} />
    </div>
  </div>
);

export default CommentBox;
