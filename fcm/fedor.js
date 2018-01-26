var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var admin = require('./admin.js')

let tvdb = require(__dirname + '/../tvdb');

var html;

var middleware = function (req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post('/', function (req, res) ***REMOVED***
    var editedBody = req.body;
    if (Object.values(req.body) == "") ***REMOVED***
        var editedBody = Object.keys(req.body)
        editedBody = JSON.parse(editedBody[0])
    ***REMOVED***

    var registrationToken = editedBody.token;
    var payload = ***REMOVED***
        notification: ***REMOVED***
            title: editedBody.title,
            body: editedBody.body
        ***REMOVED***
    ***REMOVED***;

    var options = ***REMOVED***
        priority: editedBody.priority,
        timeToLive: JSON.parse(editedBody.timetolive)
    ***REMOVED***;

    admin.messaging().sendToDevice(registrationToken, payload, options)
        .then(function (response) ***REMOVED***
            //console.log("Successfully sent message:", response.results[0]);
            res.status(200).send("Message Sent!");
        ***REMOVED***)
        .catch(function (error) ***REMOVED***
            //console.log("Error sending message:", error);
            res.status(500).send("An error occured. Blame Konrad <br>" + error);
        ***REMOVED***);

    console.log(editedBody);
    

***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;
