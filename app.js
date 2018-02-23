let express = require('express');
let app = express();

var seriesNameController = require('./getSeriesByName/nameController.js');
var seriesIdController = require("./getSeriesById/seriesIdController.js");
var allController = require("./getSeriesAllById/allController.js");
var latestep = require('./getLatestEpisodeById/latestEpController.js');
var custom = require('./firebase/fcm/custom.js');
var firestore = require('./firebase/firestore.js');

app.use('/getSeriesByName', seriesNameController);
app.use('/getSeriesById', seriesIdController);
app.use('/getSeriesAllById', allController);
app.use('/getLatestEpisodeById', latestep);
app.use("/fcm",custom);
app.use("/fcmcstm",custom);
app.use('/firestore', firestore);

module.exports = app;