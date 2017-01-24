import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer.jsx';
import CommentBox from './CommentBox.jsx';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      comments: [
        {name: "Marc", message: "This is a test comment", time_stamp: '1:15'},
        {name: "Joseph", message: "This is another test comment", time_stamp: '1:16'},
        {name: "Barton", message: "This the third test comment", time_stamp: '1:18'},
      ]
      // comments: null
    }

    // componentDidMount () {
    //   // this.setState({
    //   //   comments:
    //   // })
    // }

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
        </div>
      </div>
    );
  }
}

export default App;