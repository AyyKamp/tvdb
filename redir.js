const express = require('express');
const router = express.Router();

router.get('/', function (req, res) ***REMOVED***
    return res.redirect(301, 'http://www.tvseriesapp.tk/#/'); //Die Anfrage wird mit dem Status code 301 auf http://www.tvseriesapp.tk/#/ weitergeleitet
    
***REMOVED***);

module.exports = router;
