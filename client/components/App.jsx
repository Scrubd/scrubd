import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchComments } from '../actions/commentsActions';
import VideoPlayer from './VideoPlayer.jsx';
import CommentBox from './CommentBox.jsx';
import DynamicBarChart from './DynamicBarChart.jsx';
import InputURL from './InputURL.jsx';

class App extends React.Component {

  componentWillMount () {
    this.props.dispatch(fetchComments(this.props.video));
  }

  render () {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <InputURL />
        <div className="row">
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <VideoPlayer currentVideo={this.props.video} comments={this.props.comments} />
          </div>
          <div>
            <DynamicBarChart comments={this.props.comments}/>
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
  comments: state.comments.comments
}))(App);