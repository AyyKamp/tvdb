const express = require("express");
const router = express.Router();
const admin = require("./../admin.js");
const db = admin.firestore();
const request = require("request");

router.post("/", function(req, res) {
  let body = req.body;
  if (!body.uid) return res.status(400).send("Please define a UID");
  let uid = body.uid;
  let item = body.wl_item;
  let lang = body.lang;
  var userRef = db.collection("users");
  userRef
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let wlRef = doc.data().watchlist;
        let watchlist;
        if (!doc.data().watchlist) {
          watchlist = [];
        } else {
          watchlist = wlRef;
        }
        let ids = [];
        watchlist.forEach((el, i) => {
          ids[i] = el.id;
        });
        ids[ids.length] = item;
        newIds = Array.from(new Set(ids));

        if (newIds.length != ids.length) {
          doc.ref.update({
            watchlist: watchlist
          });
          return res.status(200).send("Item not added (duplicate)!");
        } else {
          watchlist[watchlist.length] = {
            id: item,
            lang: lang
          };
          doc.ref.update({
            watchlist: watchlist
          });
          request(
            {
              url: "http://tvdb-rest.herokuapp.com/watchlistNotif",
              method: "POST",
              json: {
                uid: uid,
                series_id: item,
                lang:lang
              }
            },
            function(error, response, body) {
              return res.status(200).send("Item added!");
            }
          );

          
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
