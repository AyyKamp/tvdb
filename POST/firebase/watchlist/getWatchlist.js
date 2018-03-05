const express = require('express');
const router = express.Router();
const admin = require('./../.functions/admin.js');
const db = admin.firestore();

router.post('/', function (req, res) ***REMOVED***
    let body = req.body;
    if (!body.uid) return res.status(400).send('cmon bruh');
    let uid = body.uid;
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                return res.status(200).send(doc.data().watchlist)
            ***REMOVED***);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error);
        ***REMOVED***)
***REMOVED***);
router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile('./../html/site.html');
***REMOVED***);

module.exports = router;
