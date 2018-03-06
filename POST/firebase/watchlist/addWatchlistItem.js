const express = require("express");
const router = express.Router();
const admin = require("./../admin.js");
const db = admin.firestore();
const request = require("request");

router.post("/", function(req, res) ***REMOVED***
  let body = req.body;
  if (!body.uid) return res.status(400).send("Please define a UID");
  let uid = body.uid;
  let item = body.wl_item;
  let lang = body.lang;
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
        let ids = [];
        watchlist.forEach((el, i) => ***REMOVED***
          ids[i] = el.id;
        ***REMOVED***);
        ids[ids.length] = item;
        newIds = Array.from(new Set(ids));

        if (newIds.length != ids.length) ***REMOVED***
          doc.ref.update(***REMOVED***
            watchlist: watchlist
          ***REMOVED***);
          return res.status(200).send("Item not added (duplicate)!");
        ***REMOVED*** else ***REMOVED***
          watchlist[watchlist.length] = ***REMOVED***
            id: item,
            lang: lang
          ***REMOVED***;
          doc.ref.update(***REMOVED***
            watchlist: watchlist
          ***REMOVED***);
          request(
            ***REMOVED***
              url: "http://tvdb-rest.herokuapp.com/watchlistNotif",
              method: "POST",
              json: ***REMOVED***
                uid: uid,
                series_id: item,
                lang:lang
              ***REMOVED***
            ***REMOVED***,
            function(error, response, body) ***REMOVED***
              return res.status(200).send("Item added!");
            ***REMOVED***
          );

          
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
    ***REMOVED***);
***REMOVED***);

module.exports = router;
