let express = require('express');
let app = express();

var seriesNameController = require('./gets/getSeriesByName/nameController.js');
var seriesIdController = require("./gets/getSeriesById/seriesIdController.js");
var episodesController = require("./gets/getEpisodesBySeriesId/episodesController.js");
var latestep = require('./gets/getLatestEpisodeById/latestEpController.js');
var custom = require('./fcm/custom.js');

app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getEpisodesBySeriesId', episodesController);
app.use('/getLatestEpisodeById', latestep);
app.use("/fcm",custom);
app.use("/fcmcstm",custom);

module.exports = app;