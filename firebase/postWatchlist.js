var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var admin = require(path.join(__dirname + "/admin.js"));
const db = admin.firestore();

var middleware = function (req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
***REMOVED***;

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post("/", function (req, res) ***REMOVED***
    let body = req.body;
    console.log((body))
    if (!body.wl || !body.uid) return res.status(400).send("cmon bruh");
    let watchlist = body.wl;
    let uid = body.uid;
    console.log(JSON.parse(`***REMOVED***"wl":$***REMOVED***watchlist***REMOVED******REMOVED***`).wl)
    var userRef = db.collection("users");
    userRef.where("uid", "==", uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                doc.ref.update(***REMOVED***
                    watchlist: JSON.parse(`***REMOVED***"wl":$***REMOVED***watchlist***REMOVED******REMOVED***`).wl
                ***REMOVED***)
                res.status(200).send("Watchlist updated!")
            ***REMOVED***);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error);
        ***REMOVED***)
***REMOVED***);
router.get("/", function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;
