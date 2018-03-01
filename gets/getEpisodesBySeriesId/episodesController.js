var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var middleware = function (req, res, next) ***REMOVED***
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
***REMOVED***;

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.get("/", function (req, res) ***REMOVED***
	var editedBody = req.query;
	var lang = req.query.lang || "en";
	var tvdb = require(`$***REMOVED***__dirname***REMOVED***/../../tvdb_$***REMOVED***lang***REMOVED***.js`);

	tvdb
		.getSeriesAllById(editedBody.series_id)
		.then(response => ***REMOVED***
			res.status(200).send(response.episodes);
		***REMOVED***)
		.catch(error => ***REMOVED***
			console.log(error);
			let status = error.response.status
			res.status(status).send(`$***REMOVED***status***REMOVED*** -- $***REMOVED***error.response.statusText***REMOVED***`);
		***REMOVED***);
***REMOVED***);

module.exports = router;
