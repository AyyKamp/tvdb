const express = require('express');
const router = express.Router();
const admin = require('./../admin.js');
const db = admin.firestore();

function rmv(arr, item) ***REMOVED***
  x = arr.indexOf(item);
  arr.splice(x, x + 1);
  return arr;
***REMOVED***

router.post('/', function(req, res) ***REMOVED***
  let body = req.body;
  if (!body.uid) return res.status(400).send('cmon bruh');
  let uid = body.uid;
  let item = body.wl_item;
  let userRef = db.collection('users');
  userRef
    .where('uid', '==', uid)
    .get()
    .then(snapshot => ***REMOVED***
      snapshot.forEach(doc => ***REMOVED***
        let wlRef = doc.data().watchlist;
        let watchlist;
        if (!wlRef) ***REMOVED***
          return res.status(200).send('No watchlist!');
        ***REMOVED*** else if (!wlRef.length) ***REMOVED***
          return res.status(200).send('Watchlist empty!');
        ***REMOVED*** else ***REMOVED***
          watchlist = wlRef;
          let ids = [];
          watchlist.forEach((el, i) =>***REMOVED***
            ids[i] = el.id
          ***REMOVED***)
          let index = ids.indexOf(item);
          if(index === -1) return res.status(200).send('Item not in the Watchlist!');
          watchlist.splice(index, index + 1);
        ***REMOVED***
        doc.ref.update(***REMOVED***
          watchlist: watchlist
        ***REMOVED***);
        return res.status(200).send('Item removed!');
      ***REMOVED***);
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
    ***REMOVED***);
***REMOVED***);

module.exports = router;
