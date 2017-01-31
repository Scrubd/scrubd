import Player from '@vimeo/player';

export function findNearestTimeStamp(comments, timeStamp) {
  const middleIndex = Math.floor(comments.length / 2);
  const middle = comments[middleIndex];
  const next = comments[middleIndex + 1] || middle;
  const previous = comments[middleIndex - 1] || middle;
  if (timeStamp === middle.time_stamp) {
    return timeStamp;
  } else if (timeStamp < comments[0].time_stamp) {
    return comments[0].time_stamp;
  } else if (timeStamp > comments[comments.length - 1].time_stamp) {
    return comments[comments.length - 1].time_stamp;
  } else if (timeStamp >= middle.time_stamp && timeStamp < next.time_stamp) {
    return middle.time_stamp;
  } else if (timeStamp >= previous.time_stamp && timeStamp < middle.time_stamp) {
    return previous.time_stamp;
  } else if (timeStamp < middle.time_stamp) {
    return findNearestTimeStamp(comments.slice(0, middleIndex), timeStamp);
  } else if (timeStamp > middle.time_stamp) {
    return findNearestTimeStamp(comments.slice(middleIndex), timeStamp);
  }
  return 1;
}

export function makePlayer() {
  const iframe = document.querySelector('iframe');
  return new Player(iframe);
}

export function loadVideo(url) {
  const player = makePlayer();
  const splitUrl = url.split('/');
  const id = splitUrl[splitUrl.length - 1];
  return player.loadVideo(id).then(ID => ID).catch(err => err);
}
