var latestEpFunction = require(`./.functions/latestEpFunction.js`);
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

router.get("/", function(req, res) ***REMOVED***
    var lang = req.query.lang || "en";
    var tvdb = require(`$***REMOVED***__dirname***REMOVED***/../tvdb_$***REMOVED***lang***REMOVED***.js`);
    var editedBody = req.query;

    tvdb
        .getSeriesAllById(editedBody.series_id)
        .then(response => ***REMOVED***
            var eps = response.episodes;
            //res.status(200).send(eps[eps.length - 1]);
            var now = new Date();
            var dates = [];
            for (var i = 0; i < eps.length; i++) ***REMOVED***
                dates[i] = new Date(
                    `$***REMOVED***eps[i].firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`
                );
            ***REMOVED***
            var latestEpisode = latestEpFunction.latestFunction(dates, eps);
            if (latestEpisode) ***REMOVED***
                latestEpisode.date = new Date(
                    `$***REMOVED***latestEpisode.firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`
                );
                return res.status(200).send(latestEpisode);
            ***REMOVED*** else ***REMOVED***
							return res.status(200).send("This series does not have have any new Episodes!")
            ***REMOVED***
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error);
            let status = error.response.status;
            res
                .status(status)
                .send(`$***REMOVED***status***REMOVED*** -- $***REMOVED***error.response.statusText***REMOVED***`);
        ***REMOVED***);
***REMOVED***);

module.exports = router;
