const express = require('express');
const router = express.Router();
const admin = require('./../admin.js');
const db = admin.firestore();

function rmv(arr, item) {
  x = arr.indexOf(item);
  arr.splice(x, x + 1);
  return arr;
}

router.delete('/', function(req, res) {
  let body = req.query;
  if (!body.uid) return res.status(400).send('cmon bruh');
  let uid = body.uid;
  let item = body.wl_item;
  let userRef = db.collection('users');
  userRef
    .where('uid', '==', uid)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let wlRef = doc.data().watchlist;
        let watchlist;
        if (!wlRef) {
          return res.status(200).send('No watchlist!');
        } else if (!wlRef.length) {
          return res.status(200).send('Watchlist empty!');
        } else {
          watchlist = wlRef;
          let ids = [];
          watchlist.forEach((el, i) =>{
            ids[i] = el.id
          })
          let index = ids.indexOf(item);
          if(index === -1) return res.status(200).send('Item not in the Watchlist!');
          watchlist.splice(index, index + 1);
        }
        doc.ref.update({
          watchlist: watchlist
        });
        return res.status(200).send('Item removed!');
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
