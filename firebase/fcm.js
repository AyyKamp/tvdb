var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var admin = require('./admin.js');
const sendMessage = require('./sendMessage.js')

var middleware = function (req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post('/', function (req, res) ***REMOVED***
    sendMessage(req.body)
    return res.status(200).send("Message Sent!");
    console.log(req.body);
    res.status(200).send("Message Sent!");
***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;