var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var middleware = function(req, res, next) ***REMOVED***
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
***REMOVED***

router.use(bodyParser.urlencoded(***REMOVED*** extended: true ***REMOVED***),middleware);
var user = require('./user');
const TVDB = require('node-tvdb');
const tvdb = new TVDB('C9081E62D92175EA');

// ADD THIS PART
// CREATES A NEW uSER
router.post('/', function (req, res) ***REMOVED***
    var editedBody = req.body;
    if(Object.values(req.body) == "") ***REMOVED***
        var editedBody = Object.keys(req.body)
        editedBody = JSON.parse(editedBody[0])
    ***REMOVED***    
    
    
    tvdb.getSeriesByName(editedBody.series_name)
    .then(response => ***REMOVED***
            res.status(200).send(response);
        ***REMOVED***)
        .catch(error => ***REMOVED***
            console.log(error)
        ***REMOVED***);

    /*user.create(***REMOVED***
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        ***REMOVED***, 
        function (err, user) ***REMOVED***
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        ***REMOVED***);*/
***REMOVED***);
// RETURNS ALL THE uSERS IN THE DATABASE
router.get('/', function (req, res) ***REMOVED***
    user.find(***REMOVED******REMOVED***, function (err, users) ***REMOVED***
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    ***REMOVED***);
***REMOVED***);
module.exports = router;
