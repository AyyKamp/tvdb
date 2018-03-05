var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var CronJob = require("cron").CronJob;
const messageFunctions = require("./.functions/messageFunctions.js");

async function main(series_id, uid) ***REMOVED***
  await messageFunctions
    .sendNotifForSeries(series_id, uid)
    .then(then => ***REMOVED***
        return true
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
      return false;
    ***REMOVED***);
***REMOVED***

var middleware = function(req, res, next) ***REMOVED***
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
***REMOVED***;

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post("/", async function(req, res) ***REMOVED***
  if (main(req.body.series_id, req.body.uid)) ***REMOVED***
    res.status(200).send("A notification will be sent!");
  ***REMOVED*** else ***REMOVED***
    res.status(400).send(false);
  ***REMOVED***
***REMOVED***);

module.exports = router;
