let express = require('express');
let app = express();

var seriesNameController = require('./GET/getSeriesByName.js');
var seriesIdController = require("./GET/getSeriesById.js");
var episodesController = require("./GET/getEpisodesBySeriesId.js");
var latestep = require('./GET/getLatestEpisodeById.js');
var postWatchlist = require('./POST/firebase/postWatchlist.js');
var watchlistNotif = require('./POST/firebase/watchlistNotif.js');
var fcm = require('./POST/firebase/fcm.js');
var postToken = require('./POST/firebase/postToken.js');
var redir = require('./html/redir.js')

//var firestore = require("./fcm/firestore.js");
app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getEpisodesBySeriesId', episodesController);
app.use('/getLatestEpisodeById', latestep);
app.use('/postWatchlist', postWatchlist);
app.use('/watchlistNotif', watchlistNotif);
app.use("/fcm", fcm);
app.use("/fcmcstm", fcm);
app.use("/postToken", postToken);
app.use('/', redir);
//app.use('/firestore', firestore);

module.exports = app;
