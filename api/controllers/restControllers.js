var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***));
var User = require('./User');
module.exports = router;
