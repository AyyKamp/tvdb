const express = require('express');
const router = express.Router();
const request = require('request');
const admin = require('./../admin.js');
const db = admin.firestore();

router.post('/', function (req, res) {
    let body = req.body;
    if (!body.uid) return res.status(400).send('cmon bruh');
    let uid = body.uid;
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let arr = [];
                console.log(doc.data().watchlist)
                for(let i of doc.data().watchlist) {
                    request({url:`http://tvdb-rest.herokuapp.com/getSeriesById?series_id=${i.id}&lang=${i.lang}`}, (err, res, body) => {
                        if (!err && res.statusCode == 200) {
                            arr[arr.length] = JSON.parse(body)
                        }
                    })
                    console.log(arr)
                }
                setTimeout(() => {return res.status(200).send(arr)}, 1000)
            });
        })
        .catch(error => {
            console.log(error);
        })
});

module.exports = router;
