var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var admin = require("./admin.js");
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
    if (!body.token || !body.uid) return res.status(400).send("Please specify the correct arguments!");
    let token = body.token;
    let uid = body.uid;
    var userRef = db.collection("users");
    userRef.where("uid", "==", uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                console.log(doc.data().token)
                if(doc.data().token == token)***REMOVED*** return res.status(200).send("Token not updated as there are no changes!")***REMOVED***
                doc.ref.update(***REMOVED***
                    token: token
                ***REMOVED***)
                res.status(200).send("Token updated")
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
