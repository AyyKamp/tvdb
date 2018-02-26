require('dotenv').config()
const request = require("request");
const ***REMOVED*** execSync ***REMOVED*** = require("child_process");
var app = require("./app");
var port = process.env.PORT || 4000;
var shell = require('shelljs');

var server = app.listen(port, function() ***REMOVED***
    console.log(`its working btw ($***REMOVED***port***REMOVED***) `);
***REMOVED***);
let token = shell.exec('heroku auth:token').stdout || process.env.HEROKU_KEY;
console.log(process.env.HEROKU_KEY)
var headers = ***REMOVED***
    Accept: "application/vnd.heroku+json; version=3",
    Authorization: "Bearer " + token.replace(/(\r\n|\n|\r)/gm, "")
***REMOVED***;
var options = ***REMOVED***
    url: "https://api.heroku.com/apps/tvdb-rest/config-vars",
    headers: headers
***REMOVED***;
function callback(error, response, body) ***REMOVED***
    if (!error && response.statusCode == 200) ***REMOVED***
        process.env.TVDB_API_KEY = JSON.parse(body).TVDB_API_KEY;
        console.log(true)
    ***REMOVED*** else ***REMOVED***
        console.log(error, response.statusCode, body);
    ***REMOVED***
***REMOVED***
request(options, callback)