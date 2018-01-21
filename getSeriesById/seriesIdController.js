var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let tvdb = require(__dirname + '/../tvdb');

var html;

var middleware = function(req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***),middleware);

router.post('/', function (req, res) ***REMOVED***
    var editedBody = req.body;
    if(Object.values(req.body) == "") ***REMOVED***
        var editedBody = Object.keys(req.body)
        editedBody = JSON.parse(editedBody[0])
    ***REMOVED*** 
    
    
    tvdb.getSeriesById(editedBody.series_id)
    .then(response => ***REMOVED***
            res.status(200).send(response);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error)
        ***REMOVED***);
***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile("./site.html", ***REMOVED***root: __dirname ***REMOVED***);
***REMOVED***);
module.exports = router;
