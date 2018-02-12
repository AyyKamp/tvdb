/*Array.prototype.max = function() ***REMOVED***
  return Math.max.apply(null, this);
***REMOVED***;

Array.prototype.min = function() ***REMOVED***
  return Math.min.apply(null, this);
***REMOVED***;

Date.prototype.get365 = function() ***REMOVED***
  /*var month;
  switch (this.getMonth()) ***REMOVED***
    case 0:
      month = 1;
      break;
    case 1:
      month = 32;
      break;
    case 2:
      month = 60;
      break;
    case 3:
      month = 91;
      break;
    case 4:
      month = 121;
      break;
    case 5:
      month = 152;
      break;
    case 6:
      month = 182;
      break;
    case 7:
      month = 213;
      break;
    case 8:
      month = 243;
      break;
    case 9:
      month = 274;
      break;
    case 10:
      month = 304;
      break;
    case 11:
      month = 334;
      break;
    default:
      month = null;
  ***REMOVED***
  return month + this.getDate() - 1;
***REMOVED***;

Array.prototype.clean = function(deleteValue) ***REMOVED***
  for (var i = 0; i < this.length; i++) ***REMOVED***
    if (this[i] == deleteValue) ***REMOVED***
      this.splice(i, 1);
      i--;
    ***REMOVED***
  ***REMOVED***
  return this;
***REMOVED***;*/

var arrayFunctions = require("./arrayFunctions.js")
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

let tvdb = require(__dirname + "/../tvdb");

var html;

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

  tvdb
    .getSeriesAllById(editedBody.series_id)
    .then(response => ***REMOVED***
      var eps = response.episodes;
      //res.status(200).send(eps[eps.length - 1]);
      var now = new Date();
      var dates = [];
      for (var i = 0; i < eps.length; i++) ***REMOVED***
        dates[i] = new Date(`$***REMOVED***eps[i].firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`);
      ***REMOVED***
      console.log(arrayFunctions)
      res.status(200).send(arrayFunctions.latestFunction(dates, eps));

    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
    ***REMOVED***);
***REMOVED***);

router.get("/", function(req, res) ***REMOVED***
  res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;
