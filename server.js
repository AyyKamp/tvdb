require('dotenv').config(); // Mithilfe des imoprtierten Moduls "dotenv" werden alle Variblen aus der .env Datei als Umgebungsvariablen zur Verfügung gestellt. Diese kann man mithilfe von process.env abrufen.
const request = require('request');
const { execSync } = require('child_process');
const app = require('./app');
let port = process.env.PORT || 4000; // Die Variable port wird entweder auf den Wert der Umgebungsvariable PORT oder, falls diese nicht definiert ist, auf 4000 gesetzt.

var server = app.listen(port, function() {
  console.log(`its working btw (${port}) `); // Der aktuelle Port wird in die Konsole geloggt.
});
let headers = { //
  Accept: 'application/vnd.heroku+json; version=3', // Accept header für die folgende HTTP Anfrage werden festgelegt.
  Authorization: 'Bearer ' + process.env.HEROKU_KEY // Das Attribut Authorization wird auf den String "Bearer " plus den Wert der Umgebungsvariable HEROKU_KEY gesetzt.
};
let options = {
  url: 'https://api.heroku.com/apps/tvdb-rest/config-vars', 
  headers: headers
};
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    process.env.TVDB_API_KEY = JSON.parse(body).TVDB_API_KEY;
  } else {
    console.log(error, response.statusCode, body);
  }
}
request(options, callback); // Die Methode rrquest wird nun mit dem Objekt options und der Methode callback als Parameter aufgerufen.

setInterval(function() {
  request(
    {
      url: 'https://tvdb-rest.herokuapp.com/'
    },
    () => {
      console.log(Date.now());
    }
  );
}, 300000); 
// Der Server pingt sich selbst alle 5 Minuten, damit er nicht in einen Standby Modus verfällt. 
// Dies ist eine Limitierung des kostenlosen Angebots von Heroku.
