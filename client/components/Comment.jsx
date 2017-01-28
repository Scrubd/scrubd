import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { emojify } from 'react-emojione';

const Comment = ({ comment }) =>
  <div>
    <div id={comment.time_stamp.toString()} />
    <span>{comment.User.name}@{comment.time_stamp}</span><br />
    <span>{emojify(`${comment.comment}`, { output: 'unicode' })}</span>
  </div>
  ;

export default Comment;


  // <div class="link"
  //     ng-repeat="link in data.links | filter:search | orderBy:'created_at'">
  //   <img src="assets/redirect_icon.png">
  //   <div class="info">
  //     <div class="visits">
  //       <span class="count">{{ link.visits }}</span>Visits
  //     </div>
  //     <div class="title">{{ link.title }}</div>
  //     <div class="original">{{ link.url }}</div>
  //     <a href="{{ link.baseUrl }}/{{ link.code }}">{{ link.baseUrl }}/{{ link.code }}</a>
  //   </div>
  // </div>
