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
    //console.log(req.body)
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

    //console.log(Object.keys(req.body))
    var data3 = "***REMOVED***\"wl\":" + editedBody.watchlist + "***REMOVED***";
    console.log(data3)
    var data2 = ***REMOVED***
        "watchlist": JSON.parse(data3).wl,
        "uid": editedBody.uid||"Nothing speicified",
        "token": editedBody.token||"Nothing speicified",
        "email": editedBody.email||"Nothing speicified",
        "displayname":editedBody.displayname||"Nothing speicified",
        "phonenumber":editedBody.phonenumber||"Nothing speicified",
        "providerid":editedBody.providerid||"Nothing speicified"
    ***REMOVED***;
    console.log(data2)
    /*
    var userRef = db.collection("users");

    var query = userRef.where('uid', '==', data2).get()
    .then(snapshot => ***REMOVED***
        snapshot.forEach(doc => ***REMOVED***
            console.log(doc.exists());
        ***REMOVED***);
    ***REMOVED***)
    .catch(err => ***REMOVED***
        console.log('Error getting documents', err);
    ***REMOVED***);*/

    
    db.collection("users").doc().set(data2).then(() =>***REMOVED***
        console.log("it work")
    ***REMOVED***).catch(error=>***REMOVED***
        console.log("Konrad wtf: " + error);
    ***REMOVED***)
    res.status(200).send("User added!");

***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;