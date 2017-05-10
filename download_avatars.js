var GITHUB_USER = "itsalysialynn";
var GITHUB_TOKEN = "9d868a8f440729a0ab948fbfbadb9694358decae";

var request = require('request');
var fs = require("fs");

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'itsalysialynn'
    }
  };

  request(options, cb);
}

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));

}

getRepoContributors(process.argv[2], process.argv[3], function(err, result, body) {

  if (err || result.statusCode !== 200) {
    console.log('Error retrieving avatars:', err);
    console.log('HTTP status code:', result.statusCode);
    console.log('Error message:', result.statusMessage);
  } else {
    let parsedResults = JSON.parse(body);

    for (var i = 0 ; i < parsedResults.length; i++) {
      let entry = parsedResults[i];
      let avatarUrl = entry['avatar_url'];
      downloadingImageByURL(avatarUrl, `avatars/${entry.login}.jpg`);
    }
  }
});





