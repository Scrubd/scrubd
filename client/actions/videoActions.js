import axios from 'axios';

export function submitURL (data) {
  
  return dispatch => {
    axios.post('/api/videos', data)
    .then(response => {
      dispatch({ type: 'SUBMIT_VIDEO_FULFILLED', payload: response.data.data });
    })
    .catch(err => {
      dispatch({ type: 'SUBMIT_VIDEO_FAILED', payload: err });
    });
  };
}