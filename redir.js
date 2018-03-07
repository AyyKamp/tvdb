const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.redirect(301, 'http://www.tvseriesapp.tk/#/'); //Die Anfrage wird mit dem Status code 301 auf http://www.tvseriesapp.tk/#/ weitergeleitet
    
});

module.exports = router;
