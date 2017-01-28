import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

const divStyle = {
  overflow: 'scroll',
  width: '300px',
  height: '100px',
};

const AllComments = props => (
  <div id="commentsContainer" style={divStyle}>
    {props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
  </div>
);

export default AllComments;

