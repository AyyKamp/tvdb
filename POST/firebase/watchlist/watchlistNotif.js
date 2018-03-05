const express = require('express');
const router = express.Router();
const messageFunctions = require('./../.functions/messageFunctions.js');

router.post('/', async function(req, res) ***REMOVED***
  messageFunctions.sendNotifForSeries(req.body.series_id, req.body.uid);
  return res.status(200).send('A notification will be sent!');
***REMOVED***);

module.exports = router;
