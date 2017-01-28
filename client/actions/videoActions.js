import axios from 'axios';
import { fetchComments } from '../actions/commentsActions';

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

export function getVideos() {
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
