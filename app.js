const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

let cors_content = function(req, res, next) {
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

// Hier wird definiert welche Middleware der Server verwendet. Bei Middleware handelt es sich in diesem Fall um Software, welche die eingehende Anfragen und die ausgehende Antwort manipuliert.
// Die bodyParser Middleware parst das body Attribut der Anfrage als JSON
// Die cors und cors_content Middleware sorgt dafür, dass die Antwort sogenannte CORS Header beinhaltet.

app.use(cors(),bodyParser.urlencoded({ extended: true }),bodyParser.json(), cors_content)

//Hier werden die Moudle aus den einzelnen Dateien importiert

let seriesNameController = require('./GET/getSeriesByName.js');
let seriesIdController = require('./GET/getSeriesById.js');
let episodesController = require('./GET/getEpisodesBySeriesId.js');
let latestep = require('./GET/getLatestEpisodeById.js');
let getWatchlist = require('./POST/firebase/watchlist/getWatchlist.js');
let addWatchlistItem = require('./POST/firebase/watchlist/addWatchlistItem.js');
let removeWatchlistItem = require('./POST/firebase/watchlist/removeWatchlistItem.js');
let watchlistNotif = require('./POST/firebase/watchlist/watchlistNotif.js');
let fcm = require('./POST/firebase/fcm.js');
let postToken = require('./POST/firebase/postToken.js');
let redir = require('./redir.js')

// Nun werden den einzelnen Endpunkten Module zugewiesen

app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getEpisodesBySeriesId', episodesController);
app.use('/getLatestEpisodeById', latestep);
app.use('/getWatchlist', getWatchlist);
app.use('/addWatchlistItem', addWatchlistItem);
app.use('/removeWatchlistItem', removeWatchlistItem);
app.use('/watchlistNotif', watchlistNotif);
app.use('/fcm', fcm);
app.use('/fcmcstm', fcm);
app.use('/postToken', postToken);
app.use('/', redir);

module.exports = app;
