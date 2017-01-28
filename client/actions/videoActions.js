import axios from 'axios';

export function submitURL(data) {
  return (dispatch) => {
    return axios.post('/api/videos', data)
      .then((response) => {
        dispatch({ type: 'SUBMIT_VIDEO_FULFILLED', payload: response.data });
        return response.data;
      })
      .catch((err) => {
        dispatch({ type: 'SUBMIT_VIDEO_FAILED', payload: err });
      });
  };
}

export function fetchVideos() {
  return (dispatch) => {
    return axios.get('/api/videos')
      .then((response) => {
        dispatch({ type: 'FETCH_VIDEOS_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_VIDEOS_FAILED', payload: err });
      });
  };
}

export function clickVideo(video) {
  return (dispatch) => {
    dispatch({ type: 'CLICK_VIDEO', payload: video });
    return video;
  };
}
