const express = require('express');
const router = express.Router();
//JSON Parser. Parst automatisch das body Attribut der Anfrage
router.get('/', function (req, res) ***REMOVED*** // Hier wird definiert das dieser Endpunkt GET benutzen soll. Dann wird eine Methode angegeben , die jedes Mal ausgeführt werden soll, wenn der Enpunkt  kontaktiert wird. Dabei stehen die Parameter res und req jeweils für rquest (zu dt. Anfrage) und res (zu dt. Antwort)
	let queryString = req.query;
	let lang = req.query.lang || 'en'; //Variable lang ist entweder der Inhalt des Query Strings oder standardmäßig 'en' 
	let tvdb = require(`$***REMOVED***__dirname***REMOVED***/../tvdb_$***REMOVED***lang***REMOVED***.js`); //entsprechend der Variable lang wird das tvdb.js Modul importiert.
	tvdb //Nun wird mithilfe des API wrappers (importiert aus tvdb.js eine Anfrage an die API geschickt
		.getSeriesByName(queryString.series_name)
		.then(response => ***REMOVED***
			return res.status(200).send(response); //Status der Anfrage wird auf 200 (HTTP Status code für OK) gesetzt. Außerdem wird die Antwort der Anfrage an die API gesendet.
		***REMOVED***)
		.catch(error => ***REMOVED*** //Ein potentieller Fehler wird gefangen (korrekte Fachsparche hierzu auf Deutsch zu finden erwies sich als unmöglich.)
			console.log(error) //Der Fehler wird in die Konsole geloggt.
			let status = error.response.status; //Variable status entspricht dem Statuscode des Fehlers
			return res.status(status).send(`$***REMOVED***status***REMOVED*** -- $***REMOVED***error.response.statusText***REMOVED***`); //
		***REMOVED***);
***REMOVED***);

module.exports = router;
