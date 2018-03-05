var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var admin = require("./.functions/admin.js");
const db = admin.firestore();

var middleware = function(req, res, next) ***REMOVED***
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
***REMOVED***;

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***), middleware);

router.post("/", function(req, res) ***REMOVED***
  let body = req.body;
  if (!body.uid) return res.status(400).send("cmon bruh");
  let uid = body.uid;
  let item = body.wl_item;
  var userRef = db.collection("users");
  userRef
    .where("uid", "==", uid)
    .get()
    .then(snapshot => ***REMOVED***
      snapshot.forEach(doc => ***REMOVED***
        let wlRef = doc.data().watchlist;
        let watchlist;
        if (!doc.data().watchlist) ***REMOVED***
          watchlist = [];
        ***REMOVED*** else ***REMOVED***
          watchlist = wlRef;
        ***REMOVED***
        watchlist[watchlist.length] = item;
        watchlist = Array.from(new Set(watchlist));
        doc.ref.update(***REMOVED***
          watchlist: watchlist
        ***REMOVED***);
        res.status(200).send("Item added!");
      ***REMOVED***);
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
    ***REMOVED***);
***REMOVED***);

router.get("/", function(req, res) ***REMOVED***
  res.status(200).sendFile(path.join(__dirname + "/../html/site.html"));
***REMOVED***);

module.exports = router;
