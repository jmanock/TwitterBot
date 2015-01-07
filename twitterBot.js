var Twit = require('twit');

var J = new Twit ({
  consumer_key: // Add your own
  consumer_secret: // Add your own
  access_token: // Add your own
  access_token_secret: // Add your own
});

function retweetRecent(){
  J.get('search/tweets', {
    // Add anything you want to retweet here
    q:"#javascript OR #webDev",
    result_type:"recent"
  },
  function (err, data, response){
    if(!err){
      var retweetId = data.statuses[0].id_str;
      J.post('statuses/retweet/' + retweetId, { }, function(err, response){
        if(response){
          console.log('Retweeted Tweet ID: ' + retweetId);
        }
        if(err){
          console.log('Retweet Error: ', err);
        }
      });
    }else{
      console.log('Search Error: ', err);
    }
  });
}

// Call the retweetRecent Function
retweetRecent();
// Set the time to 5 minutes for a new ReTweet
setInterval(retweetRecent, 300000);
