const express = require('express');
const router = express.Router();
const admin = require('./.functions/admin.js');
const db = admin.firestore();

router.post('/', function (req, res) ***REMOVED***
    let body = req.body;
    if (!body.wl || !body.uid) return res.status(400).send('cmon bruh');
    let uid = body.uid;
    let watchlist = JSON.parse(`***REMOVED***'wl':$***REMOVED***body.wl***REMOVED******REMOVED***`).wl
    console.log(watchlist)
    watchlist = Array.from(new Set(watchlist));
    console.log(watchlist)
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                doc.ref.update(***REMOVED***
                    watchlist: watchlist
                ***REMOVED***)
                return res.status(200).send('Watchlist updated!')
            ***REMOVED***);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error);
        ***REMOVED***)
***REMOVED***);
router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + '/../html/site.html'));
***REMOVED***);

module.exports = router;
