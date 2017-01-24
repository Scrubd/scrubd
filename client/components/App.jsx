import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer.jsx';






class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <div className='row'>
          <div className='col-lg-6 col-lg-offset-2' id='VideoPlayer'>
            <VideoPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;