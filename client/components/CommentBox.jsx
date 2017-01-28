import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment.jsx';
import AllComments from './AllComments.jsx';

// const divStyle = {
//   overflow: scroll,
//   width: '200',
//   height: '200',
// }

const CommentBox = ({comments, name}) => (
  <div>
    <div className="container commentBox">
<<<<<<< HEAD
      <SingleComment /> 
      <AllComments comments={props.comments}/>
=======
      { name ? <SingleComment name={name} /> : null }
      <AllComments comments={comments} />
>>>>>>> eef837c0a2f4e3eee7e8432be693879bca9095e3
    </div>
  </div>
);

export default CommentBox;
