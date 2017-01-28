import { checkAuth } from '../actions/userActions';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentsActions';
import CommentBox from './CommentBox.jsx';
import DynamicBarChart from './DynamicBarChart.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import TopNavBar from './TopNavBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import css from '../styles/main.css';
import InputURL from './InputURL.jsx';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchComments(this.props.video));
    this.props.dispatch(checkAuth());
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
            <DynamicBarChart comments={this.props.comments} />
          </div>
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <CommentBox comments={this.props.comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  video: state.video.currentVideo,
  comments: state.comments.comments,
  name: state.user.name,
}))(App);
