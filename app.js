let express = require('express');
let app = express();

var seriesNameController = require('./gets/getSeriesByName/nameController.js');
var seriesIdController = require("./gets/getSeriesById/seriesIdController.js");
var episodesController = require("./gets/getEpisodesBySeriesId/episodesController.js");
var latestep = require('./gets/getLatestEpisodeById/latestEpController.js');
var postWatchlist = require('./firebase/postWatchlist.js');
var watchlistNotif = require('./firebase/watchlistNotif.js');
var fcm = require('./firebase/fcm.js');
var postToken = require('./firebase/postToken.js');
var redir = require('./html/redir.js')

//var firestore = require("./fcm/firestore.js");
app.use('/',redir)
app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getEpisodesBySeriesId', episodesController);
app.use('/getLatestEpisodeById', latestep);
app.use('/postWatchlist', postWatchlist);
app.use('/watchlistNotif', watchlistNotif);
app.use("/fcm",fcm);
app.use("/fcmcstm",fcm);
app.use("/postToken",postToken);
//app.use('/firestore', firestore);

module.exports = app;
