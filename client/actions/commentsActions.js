import axios from 'axios';

export function fetchComments(url) {
  return (dispatch) => {
    axios.get('/api/comments', {
      params: { URL: url },
    })
    .then((response) => {
      dispatch({ type: 'FETCH_COMMENTS_FULFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_COMMENTS_FAILED', payload: err });
    });
  };
}

export function submitComment(data) {
  return (dispatch) => {
    axios.post('/api/comments', data)
    .then((response) => {
      dispatch({ type: 'SUBMIT_COMMENT_FULFILLED', payload: JSON.parse(response.config.data) });
    })
    .catch((err) => {
      dispatch({ type: 'SUBMIT_COMMENT_FAILED', payload: err });
    });
  };
}
