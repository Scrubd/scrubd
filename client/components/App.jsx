import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer.jsx';
import CommentBox from './CommentBox.jsx';
import AxiosHelper from '../../server/axios-helper.js';
import SimpleBarChart from './SimpleBarChart.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      comments: []
    }
  }

  componentDidMount() {
    AxiosHelper.getComments(this.state.video, comments => {
      this.setState({
        comments: comments
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <div className='row'>
          <div className='col-lg-6 col-lg-offset-2' id='VideoPlayer'>
            <VideoPlayer currentVideo={this.state.video}/>
          </div>
          <div className='col-lg-6 col-lg-offset-2' id='VideoPlayer'>
            <CommentBox comments={this.state.comments} />
          </div>
          <div>
            <SimpleBarChart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;