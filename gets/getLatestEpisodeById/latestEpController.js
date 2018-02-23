var arrayFunctions = require("./arrayFunctions.js")
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var middleware = function(req, res, next) ***REMOVED***
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
***REMOVED***;

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post("/", function(req, res) ***REMOVED***
  var editedBody = req.body;
  if (Object.values(req.body) == "") ***REMOVED***
    var editedBody = Object.keys(req.body);
    editedBody = JSON.parse(editedBody[0]);
  ***REMOVED***

  tvdb.getSeriesAllById(editedBody.series_id)
    .then(response => ***REMOVED***
      var lang = req.query.lang;
      let tvdb;
      if(!lang)***REMOVED*** tvdb = require(__dirname + '/../../tvdb-en');***REMOVED***
      else***REMOVED***tvdb = require(__dirname + '/../../tvdb' + "-" + lang)***REMOVED***
      var eps = response.episodes;
      //res.status(200).send(eps[eps.length - 1]);
      var now = new Date();
      var dates = [];
      for (var i = 0; i < eps.length; i++) ***REMOVED***
        dates[i] = new Date(`$***REMOVED***eps[i].firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`);
      ***REMOVED***
      var latestEpisode = arrayFunctions.latestFunction(dates, eps);
      latestEpisode.date = new Date(`$***REMOVED***latestEpisode.firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`)
      res.status(200).send(latestEpisode);

    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
    ***REMOVED***);

***REMOVED***);

router.get("/", function(req, res) ***REMOVED***
  res.status(200).sendFile(path.join(__dirname + "/../../html/getLatestEpisodeById.html"));
***REMOVED***);

module.exports = router;
