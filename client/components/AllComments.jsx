import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

const AllComments = (props) => (
    <div>
      {props.comments.map( comment => {
        return <Comment comment={comment}/>
      })}
    </div>
  );

export default AllComments;

