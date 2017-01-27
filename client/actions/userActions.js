import axios from 'axios';

export function signupOrSignin(name) {
  return (dispatch) => {
    axios.post('/api/users', name)
      .then((response) => {
        const token = response.data;
        window.localStorage.setItem('scrubd', token);
        const payload = JSON.parse(response.config.data).name;
        dispatch({ type: `SIGN${response.status === 201 ? 'UP' : 'IN'}_FULFILLED`, payload });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNIN_OR_SIGNUP_FAILED', payload: err.response });
      });
  };
}

export const signout = { type: 'SIGNOUT' };

export function checkAuth() {
  return (dispatch) => {
    axios.get('/api/users', {
      headers: {
        'x-access-token': window.localStorage.getItem('scrubd'),
        'Allow-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        dispatch({ type: 'CHECK_AUTH_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'CHECK_AUTH_FAILED', payload: err.response });
      });
  };
}

