var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***));
var user = require('./user');
module.exports = router;
