var axios = require('axios');

var submitComment = function(data){
  axios.post('/api/comments', data);
};

var getComments = function(url, callback){
  axios.get('/api/comments', {
    params: {URL: url}
  })
  .then(function (response) {
    callback(response.data);
  })
};

module.exports.submitComment = submitComment;
module.exports.getComments = getComments;