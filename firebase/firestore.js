const admin = require("./admin.js");
const db = admin.firestore();

db.collection("users").doc('fedor').set(***REMOVED***
    token:"xddddddd",
    id:34,
    xd:"lmaoooooo"
***REMOVED***).then(() =>***REMOVED***
    console.log("haha lmao")
***REMOVED***).catch(error=>***REMOVED***
    console.log("Konrad wtf: " + error)
***REMOVED***)

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var admin = require(path.join(__dirname + "/../admin.js"));

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

    var data = ***REMOVED***
        id = editedBody.id,
        token = editedBody.token,

    ***REMOVED***;

    db.collection("users").doc('fedor').set(data).then(() =>***REMOVED***
        console.log(data.id + "added. Token: " + data.token)
    ***REMOVED***).catch(error=>***REMOVED***
        console.log("Konrad wtf: " + error)
    ***REMOVED***)
    

***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;