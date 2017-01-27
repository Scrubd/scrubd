import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

const AllComments = (props) => (
    <div class="scroll">
      {props.comments.map( (comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
    </div>
  );

export default AllComments;

