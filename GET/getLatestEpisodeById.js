const express = require('express');
const router = express.Router();

const latestEpFunction = require(`./.functions/latestEpisodeFunction.js`);

router.get('/', function(req, res) ***REMOVED***
  let lang = req.query.lang || 'en';
  let tvdb = require(`$***REMOVED***__dirname***REMOVED***/../tvdb_$***REMOVED***lang***REMOVED***.js`);
  let editedBody = req.query;

  tvdb
    .getSeriesAllById(editedBody.series_id)
    .then(response => ***REMOVED***
      let eps = response.episodes;
      let now = new Date();
      let dates = [];
      for (let i = 0; i < eps.length; i++) ***REMOVED***
        dates[i] = new Date(`$***REMOVED***eps[i].firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`);
      ***REMOVED***
      let latestEpisode = latestEpFunction.latestEpisodeFunction(eps, dates);
      if (latestEpisode) ***REMOVED***
        latestEpisode.date = new Date(
          `$***REMOVED***latestEpisode.firstAired***REMOVED*** $***REMOVED***response.airsTime***REMOVED***`
        );
        return res.status(200).send(latestEpisode);
      ***REMOVED*** else ***REMOVED***
        return res
          .status(200)
          .send('This series does not have have any new Episodes!');
      ***REMOVED***
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
      let status = error.response.status;
      res.status(status).send(`$***REMOVED***status***REMOVED*** -- $***REMOVED***error.response.statusText***REMOVED***`);
    ***REMOVED***);
***REMOVED***);

module.exports = router;
