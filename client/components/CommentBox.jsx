import React from 'react';
import SingleComment from './SingleComment.jsx';
import AllComments from './AllComments.jsx';

const CommentBox = ({ comments, name }) => (
  <div>
    <div>
      { name ? <SingleComment /> : null }
      <AllComments comments={comments} />
    </div>
  </div>
);

export default CommentBox;
