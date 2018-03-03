var express = require("express");
var router = express.Router();

var middleware = function (req, res, next) ***REMOVED***
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
***REMOVED***;

router.get("/", function (req, res) ***REMOVED***
    console.log("aha")
    return res.redirect(301, 'http://wwww.tvseriesapp.tk/#/');
    
***REMOVED***);

module.exports = router;