var GITHUB_USER = "itsalysialynn";
var GITHUB_TOKEN = "9d868a8f440729a0ab948fbfbadb9694358decae";

var request = require('request');


function getRepoContributors(repoOwner, repoName, cb) {
var options = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'itsalysialynn'
  }
};
 //console.log("testing", options);
 request(options, cb);



 
}

getRepoContributors(process.argv[2], process.argv[3], function(err, response, body) {
  var parsedResults = JSON.parse(body);
  for (var i = 0; i < parsedResults.length; i++) {
  	console.log("avatar_url" body[avatar_url]);
  }
  //console.log("Errors:", err);
  //console.log("Result:", parsedResults);
});



