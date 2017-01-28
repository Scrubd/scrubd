const expect = require('chai').expect;
const axios = require('axios');

describe('Scrubd', function() {
  describe('Server', function() {
    const name = { name: 'Rick Astley' };
    const video = { url: 'https://player.vimeo.com/video/76979871' };
    const comment = {
      name: 'Rick Astley',
      comment: 'This is not... the best comment in the world...',
      URL: 'https://player.vimeo.com/video/76979871',
      time_stamp: 20,
    };

    it('should successfully return a GET request', function(done) {
      axios.get('http://127.0.0.1:3000/')
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((err) => {
          done('Your test failed:', err);
        });
    });

    it('should successfully save a new user', function(done) {
      axios.post('http://127.0.0.1:3000/api/users', name)
        .then((response) => {
          expect(JSON.parse(response.config.data).name).to.equal(name.name);
          done();
        })
        .catch((err) => {
          done('Your test failed:', err);
        });
    });

    it('should successfully save a new video', function(done) {
      axios.post('http://127.0.0.1:3000/api/videos', video)
        .then((response) => {
          expect(JSON.parse(response.config.data).URL).to.equal(video);
          done();
        })
        .catch((err) => {
          done('Your test failed:', err);
        });
    });

    it('should successfully save a new message', function(done) {
      axios.post('http://127.0.0.1:3000/api/users', comment)
        .then((response) => {
          expect(JSON.parse(response.config.data)).to.eql(comment);
          done();
        })
        .catch((err) => {
          done('Your test failed:', err);
        });
    });
  });
});
