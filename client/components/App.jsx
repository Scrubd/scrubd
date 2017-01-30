import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/userActions';
import { fetchComments } from '../actions/commentsActions';
import { fetchVideos, clickVideo, fetchTime } from '../actions/videoActions';
import { loadVideo } from '../componentHelpers';
import CommentBox from './CommentBox.jsx';
import DynamicBarChart from './DynamicBarChart.jsx';
import TopNavBar from './TopNavBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import InputURL from './InputURL.jsx';
import VideoList from './VideoList.jsx';

import css from '../styles/main.css';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(checkAuth());
    this.props.dispatch(fetchVideos());
    const currentVideo = JSON.parse(window.localStorage.getItem('currentVideo'));
    if (currentVideo) {
      loadVideo(currentVideo.url)
        .then(() =>this.props.dispatch(fetchTime()));
      this.props.dispatch(clickVideo(currentVideo));

    } else {
      window.localStorage.setItem('currentVideo', JSON.stringify({ url: this.props.video }));
      loadVideo(currentVideo.url)
        .then(() =>this.props.dispatch(fetchTime()));
      this.props.dispatch(clickVideo(currentVideo));      
    }
    this.props.dispatch(fetchComments(currentVideo ? currentVideo.url : this.props.video));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar">
          <TopNavBar />
          { this.props.name ? <InputURL name={this.props.name} /> : null }
        </div>

        <div className="row firstRow">
          <div className="col-lg-6 col-lg-offset-1 videoPLayer">
            <VideoPlayer currentVideo={this.props.video} comments={this.props.comments} />
          </div>
          <div className="col-lg-4 col-lg-offset-1">
            <div className="videoList">
              <VideoList videos={this.props.videos} />
            </div>
          </div>
        </div>

        <div className="row secondRow">
          <div className="col-lg-6 col-lg-offset-1 barChart">
            <DynamicBarChart duration={this.props.duration} comments={this.props.comments} />
          </div>
        </div>

        <div className="row thirdRow">
          <div className="col-lg-7 col-lg-offset-1 comments">
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
  duration: state.video.duration,
}))(App);
