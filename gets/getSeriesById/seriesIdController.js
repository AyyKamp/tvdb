var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var middleware = function(req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***),middleware);

router.post('/', function (req, res) ***REMOVED***
    var editedBody = req.body;
    var lang = req.query.lang;
    let tvdb;
    if(!lang)***REMOVED*** tvdb = require(__dirname + '/../../tvdb-en');***REMOVED***
    else***REMOVED***tvdb = require(__dirname + '/../../tvdb' + "-" + lang)***REMOVED***

    if(Object.values(req.body) == "") ***REMOVED***
        var editedBody = Object.keys(req.body)
        editedBody = JSON.parse(editedBody[0])
    ***REMOVED*** 
    
    
    tvdb.getSeriesById(editedBody.series_id)
    .then(response => ***REMOVED***
            res.status(200).send(response);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error);
            res.status(500).send("An error occured. Blame Konrad");
        ***REMOVED***);
***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../../html/getSeriesById.html"));
***REMOVED***);
module.exports = router;
