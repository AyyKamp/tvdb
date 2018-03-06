const express = require('express');
const router = express.Router();
const request = require('request');
const admin = require('./../admin.js');
const db = admin.firestore();

router.post('/', function (req, res) ***REMOVED***
    let body = req.body;
    if (!body.uid) return res.status(400).send('cmon bruh');
    let uid = body.uid;
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => ***REMOVED***
            snapshot.forEach(doc => ***REMOVED***
                let arr = [];
                console.log(doc.data().watchlist)
                for(let i of doc.data().watchlist) ***REMOVED***
                    request(***REMOVED***url:`http://tvdb-rest.herokuapp.com/getSeriesById?series_id=$***REMOVED***i.id***REMOVED***&lang=$***REMOVED***i.lang***REMOVED***`***REMOVED***, (err, res, body) => ***REMOVED***
                        if (!err && res.statusCode == 200) ***REMOVED***
                            arr[arr.length] = JSON.parse(body)
                        ***REMOVED***
                    ***REMOVED***)
                    console.log(arr)
                ***REMOVED***
                setTimeout(() => ***REMOVED***return res.status(200).send(arr)***REMOVED***, 1500)
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
