import axios from 'axios';

export function signupOrSignin(name) {
  return (dispatch) => {
    axios.post('/api/users', name)
      .then((response) => {
        const payload = JSON.parse(response.config.data);
        payload.message = response.data;
        if (response.status === 201) {
          dispatch({ type: 'SIGNUP_FULFILLED', payload });
        } else {
          dispatch({ type: 'SIGNIN_FULFILLED', payload });
        }
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
