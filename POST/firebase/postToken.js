const express = require('express');
const router = express.Router();
const admin = require('./admin.js');
const db = admin.firestore();

router.post('/', function (req, res) {
    let body = req.body;
    if (!body.token || !body.uid) return res.status(400).send('Please specify the correct arguments!');
    let token = body.token;
    let uid = body.uid;
    let userRef = db.collection('users');
    userRef.where('uid', '==', uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data().token)
                if(doc.data().token == token){ return res.status(200).send('Token not updated as there are no changes!')}
                doc.ref.update({
                    token: token
                })
                return res.status(200).send('Token updated')
            });
        })
        .catch(error => {
            console.log(error);
        })
});

module.exports = router;
