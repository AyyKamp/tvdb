var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var admin = require(path.join(__dirname + "/admin.js"));
const db = admin.firestore();


var middleware = function (req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post('/', function (req, res) ***REMOVED***
    console.log(req.body)
    var editedBody = req.body;
    if (Object.values(req.body) == "") ***REMOVED***
        var editedBody = Object.keys(req.body)
        editedBody = JSON.parse(editedBody[0])
    ***REMOVED***

    var registrationToken = editedBody.token;

    var data = ***REMOVED***
        "id": editedBody.id,
        "token": editedBody.token
    ***REMOVED***;

    console.log(Object.keys(req.body))
    var data3 = "***REMOVED***\"wl\":" + editedBody.watchlist + "***REMOVED***";
    console.log(data3)
    var data2 = ***REMOVED***
        "watchlist": JSON.parse(data3).wl
    ***REMOVED***;

    db.collection("users").doc('fedor').set(data).then(() =>***REMOVED***
        console.log(data.id + " added. Token: " + data.token)
        db.collection("users").doc('fedor').collection("watchlists").doc("watchlist:" + data.token).set(data2).then(() =>***REMOVED***
            console.log("awwyiss");
        ***REMOVED***).catch(err=>***REMOVED***
            console.log("kaonrad wtf: " + err);
        ***REMOVED***);
    ***REMOVED***).catch(error=>***REMOVED***
        console.log("Konrad wtf: " + error);
    ***REMOVED***)
    

***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;