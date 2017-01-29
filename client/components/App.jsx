import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/userActions';
import { fetchComments } from '../actions/commentsActions';
import { fetchVideos } from '../actions/videoActions';
import CommentBox from './CommentBox.jsx';
import DynamicBarChart from './DynamicBarChart.jsx';
import TopNavBar from './TopNavBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import InputURL from './InputURL.jsx';
import VideoList from './VideoList.jsx';

import css from '../styles/main.css';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchComments(this.props.video));
    this.props.dispatch(checkAuth());
    this.props.dispatch(fetchVideos());
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <TopNavBar />
        { this.props.name ? <InputURL name={this.props.name} /> : null }
        <div className="row">
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <VideoPlayer currentVideo={this.props.video} comments={this.props.comments} />
          </div>
          <div>
            <VideoList videos={this.props.videos} />
          </div>
          <div>
            <DynamicBarChart comments={this.props.comments} />
          </div>
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <CommentBox comments={this.props.comments} name={this.props.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  video: state.video.currentVideo,
  videos: state.video.videos,
  comments: state.comments.comments,
  name: state.user.name,
}))(App);
