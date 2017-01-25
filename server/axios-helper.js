var axios = require('axios');

module.exports = {
  submitComment: function (data) {
    axios.post('/api/comments', data);
  },

  getComments: function (url) {
    console.log('get comments funcntion fired');
    axios.get('/api/comments', {
      params: {URL: url
      }
    })
    .then(function (response) {
      console.log(response);
    });
  }
};
