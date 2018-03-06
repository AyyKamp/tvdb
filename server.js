require('dotenv').config(); // Mithilfe des imoprtierten Moduls "dotenv" werden alle Variblen aus der .env Datei als Umgebungsvariablen zur Verfügung gestellt. Diese kann man mithilfe von process.env abrufen.
const request = require('request');
const ***REMOVED*** execSync ***REMOVED*** = require('child_process');
const app = require('./app');
let port = process.env.PORT || 4000; // Die Variable port wird entweder auf den Wert der Umgebungsvariable PORT oder, falls diese nicht definiert ist, auf 4000 gesetzt.

var server = app.listen(port, function() ***REMOVED***
  console.log(`its working btw ($***REMOVED***port***REMOVED***) `); // Der aktuelle Port wird in die Konsole geloggt.
***REMOVED***);
let headers = ***REMOVED*** //
  Accept: 'application/vnd.heroku+json; version=3', // Accept header für die folgende HTTP Anfrage werden festgelegt.
  Authorization: 'Bearer ' + process.env.HEROKU_KEY // Das Attribut Authorization wird auf den String "Bearer " plus den Wert der Umgebungsvariable HEROKU_KEY gesetzt.
***REMOVED***;
let options = ***REMOVED***
  url: 'https://api.heroku.com/apps/tvdb-rest/config-vars', 
  headers: headers
***REMOVED***;
function callback(error, response, body) ***REMOVED***
  if (!error && response.statusCode == 200) ***REMOVED***
    process.env.TVDB_API_KEY = JSON.parse(body).TVDB_API_KEY;
  ***REMOVED*** else ***REMOVED***
    console.log(error, response.statusCode, body);
  ***REMOVED***
***REMOVED***
request(options, callback);

setInterval(function() ***REMOVED***
  request(
    ***REMOVED***
      url: 'https://tvdb-rest.herokuapp.com/'
    ***REMOVED***,
    () => ***REMOVED***
      console.log(Date.now());
    ***REMOVED***
  );
***REMOVED***, 300000); 
// Der Server pingt sich selbst alle 5 Minuten, damit er nicht in einen Standby Modus verfällt. 
// Dies ist eine Limitierung des kostenlosen Angebots von Heroku.
