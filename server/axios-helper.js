var axios = require('axios'); 

var submitComment = function(data){
  axios.post('/api/comments', data);
};

var getComments = function(url){
  console.log("get comments funcntion fired")
  axios.get('/api/comments', {
    params: {URL: url
    }
  })
  .then(function (response) {
    console.log(response);
  })
};

module.exports.submitComment = submitComment;
module.exports.getComments = getComments;