let express = require('express');
let app = express();

var seriesNameController = require('./gets/getSeriesByName/nameController.js');
var seriesIdController = require("./gets/getSeriesById/seriesIdController.js");
var episodesController = require("./gets/getEpisodesBySeriesId/episodesController.js");
var latestep = require('./gets/getLatestEpisodeById/latestEpController.js');
var fcm = require('./fcm/fcm.js');
var postWatchlist = require('./fcm/postWatchlist.js');
//var firestore = require("./fcm/firestore.js");

app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getEpisodesBySeriesId', episodesController);
app.use('/getLatestEpisodeById', latestep);
app.use("/fcm",fcm);
app.use("/fcmcstm",fcm);
app.use('/postWatchlist', postWatchlist);
//app.use('/firestore', firestore);

module.exports = app;
