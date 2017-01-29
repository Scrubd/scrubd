import axios from 'axios';
import Player from '@vimeo/player';
import { makePlayer } from '../componentHelpers';

export function submitURL(data) {
  return dispatch => axios.post('/api/videos', data)
      .then((response) => {
        dispatch({ type: 'SUBMIT_VIDEO_FULFILLED', payload: response.data });
        return response.data;
      })
      .catch((err) => {
        dispatch({ type: 'SUBMIT_VIDEO_FAILED', payload: err });
      });
}

export function fetchVideos() {
  return dispatch => axios.get('/api/videos')
      .then((response) => {
        dispatch({ type: 'FETCH_VIDEOS_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_VIDEOS_FAILED', payload: err });
      });
}

export function clickVideo(video) {
  return (dispatch) => {
    dispatch({ type: 'CLICK_VIDEO', payload: video });
    return video;
  };
}

export function fetchTime() {
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  console.log(player);
  return (dispatch) => {
    return player.getDuration()
      .then((response) => {
        dispatch({ type: 'FETCH_DURATION_FULFILLED', payload: response });
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}