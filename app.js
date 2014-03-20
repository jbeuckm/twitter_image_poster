var Twitter = require('node-twitter');
var config = require('./config.json');

var twitterRestClient = new Twitter.RestClient(
  config.consumer_key,
  config.consumer_secret,
  config.access_token,
  config.access_secret
);

function post(status, image) {

  twitterRestClient.statusesUpdateWithMedia(
    {
      'status': status,
      'media[]': image
    },
    function (error, result) {
      if (error) {
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
      }

      if (result) {
        console.log(result);
        console.log(twitterRestClient);
      }
    });


}

setInterval(function () {
  post("Posting a tweet w/ attached media.", "./image/png");
}, 30000);
