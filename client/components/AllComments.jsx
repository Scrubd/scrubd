import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

const AllComments = props => (
  <div className="commentsContainer">
    {props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
  </div>
);

export default AllComments;

