admin = require(./admin.js)

var express = require('express');
var router = express.Router();
var path = require('path');
var admin = require('./admin.js')

function handlePOST(req, res) ***REMOVED***
    var body = req.body;
    
    var registrationToken = body.token;
    var payload = ***REMOVED***
        data: ***REMOVED***
            title: body.title,
            body: body.body
        ***REMOVED***
    ***REMOVED***;

    var options = ***REMOVED***
        priority: body.priority
    ***REMOVED***;

    admin.messaging().sendToDevice(registrationToken, payload, options)
        .then(function (response) ***REMOVED***
            console.log("Successfully sent message:", response.results[0]);
            res.status(200).send("Message Sent!");
        ***REMOVED***)
        .catch(function (error) ***REMOVED***
            console.log("Error sending message:", error);
            res.status(500).send("An error occured. Blame Konrad <br>" + error);
        ***REMOVED***);

    console.log(body);
    

***REMOVED***);

function handleGET(req, res) ***REMOVED***
	res.status(200).sendFile(https://raw.githubusercontent.com/AyyKamp/tvdb-rest/master/html/getSeriesByName.html?token=Aes_O5jpwDjn9cXkYnsBbWIFkVJx8u59ks5an7OVwA%3D%3D#);
***REMOVED***

function handlePUT (req, res) ***REMOVED***
  // Do something with the PUT request
  res.status(403).send('Forbidden!');
***REMOVED***

exports.helloHttp = (req, res) => ***REMOVED***
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  switch (req.method) ***REMOVED***
    case 'GET':
      handleGET(req, res);
      break;
    case 'PUT':
      handlePUT(req, res);
      break;
    default:
      res.status(500).send(***REMOVED*** error: 'Something blew up!' ***REMOVED***);
      break;
  ***REMOVED***
***REMOVED***;

