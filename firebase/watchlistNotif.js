var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var CronJob = require("cron").CronJob;
const messageFunctions = require("./sendMessage.js");

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
    messageFunctions.sendNotifForSeries(req.body.series_id, req.body.uid);
    res.status(200).send("A notification will be sent!");
***REMOVED***);

module.exports = router;
