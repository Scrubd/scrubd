import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

const divStyle = {
  overflow: 'scroll',
  width: '200px',
  height: '200px',
}

const AllComments = (props) => (
    <div style={divStyle}>
      {props.comments.map( (comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
    </div>
  );

export default AllComments;

