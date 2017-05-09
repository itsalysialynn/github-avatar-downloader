var GITHUB_USER = "itsalysialynn";
var GITHUB_TOKEN = "9d868a8f440729a0ab948fbfbadb9694358decae";

var request = require('request');
var fs = require("fs");

function getRepoContributors(repoOwner, repoName, cb) {
var options = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'itsalysialynn'
  }
};
 request(options, cb);



 
}

getRepoContributors(process.argv[2], process.argv[3], function(err, response, body) {
  var parsedResults = JSON.parse(body);
  for (var i = 0; i < parsedResults.length; i++) {
  	var avatarUrl =  parsedResults[i]["avatar_url"];
  	downloadImageByURL(avatarUrl, `avatars/${i}.jpg`)

  }
 
});

function downloadImageByURL(url, filePath) {
	request(url).pipe(fs.createWriteStream(filePath));

}



