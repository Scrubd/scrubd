import Player from '@vimeo/player';

export function fetchTime() {
  return (dispatch) => {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    return player.getDuration()
    // return axios.post('/api/videos', data)
      .then((response) => {
        dispatch({ type: 'FETCH_DURATION_FULFILLED', payload: response.data });
        return response.data;
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_DURATION_FAILED', payload: err });
      });
  };
}