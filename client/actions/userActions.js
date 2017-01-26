import axios from 'axios';
import jwt from 'jwt-simple';

export function signupOrSignin(name) {
  return (dispatch) => {
    axios.post('/api/users', name)
      .then((response) => {
        const token = response.data.token;
        window.localStorage.setItem('scrubd', token);
        const payload = JSON.parse(response.config.data).name;
        dispatch({ type: `SIGN${response.status === 201 ? 'UP' : 'IN'}_FULFILLED`, payload });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNIN_OR_SIGNUP_FAILED', payload: err.response });
      });
  };
}

export function logOut() {
  return (dispatch) => {
    axios.delete('/api/users')
      .then((response) => {
        debugger;
        // dispatch({ type: 'SIGNIN_OR_SIGNUP', payload: response.data });
      })
      .catch((err) => {
        debugger;
        // dispatch({ type: 'FETCH_COMMENTS_FAILED', payload: err });
      });
  };
}
