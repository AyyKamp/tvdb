const express = require('express');
const router = express.Router();
const admin = require('./.functions/admin.js');
const messageFunctions = require('./.functions/messageFunctions.js');

router.post('/', function (req, res) ***REMOVED***
    messageFunctions.sendMessage(req.body)
    return res.status(200).send('Message Sent!');
***REMOVED***);

router.get('/', function (req, res) ***REMOVED***
    res.status(200).sendFile(path.join(__dirname + '/../html/site.html'));
***REMOVED***);

module.exports = router;