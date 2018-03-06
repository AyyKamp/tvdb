const express = require('express');
const router = express.Router();
const admin = require('./admin.js');
const db = admin.firestore();

router.post('/', function (req, res) ***REMOVED***
    let body = req.body;
    if (!body.token || !body.uid) return res.status(400).send('Please specify the correct arguments!');
    let token = body.token;
    let uid = body.uid;
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                console.log(doc.data().token)
                if(doc.data().token == token)***REMOVED*** return res.status(200).send('Token not updated as there are no changes!')***REMOVED***
                doc.ref.update(***REMOVED***
                    token: token
                ***REMOVED***)
                return res.status(200).send('Token updated')
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
