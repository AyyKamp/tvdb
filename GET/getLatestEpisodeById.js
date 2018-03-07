const express = require('express');
const router = express.Router();

const latestEpFunction = require(`./.functions/latestEpisodeFunction.js`);

router.get('/', function(req, res) {
  let lang = req.query.lang || 'en';
  let tvdb = require(`${__dirname}/../tvdb_${lang}.js`);
  let editedBody = req.query;

  tvdb
    .getSeriesAllById(editedBody.series_id)
    .then(response => {
      let eps = response.episodes;
      let now = new Date();
      let dates = [];
      for (let i = 0; i < eps.length; i++) {
        dates[i] = new Date(`${eps[i].firstAired} ${response.airsTime}`);
      }
      let latestEpisode = latestEpFunction.latestEpisodeFunction(eps, dates);
      if (latestEpisode) {
        latestEpisode.date = new Date(
          `${latestEpisode.firstAired} ${response.airsTime}`
        );
        return res.status(200).send(latestEpisode);
      } else {
        return res
          .status(200)
          .send('This series does not have have any new Episodes!');
      }
    })
    .catch(error => {
      console.log(error);
      let status = error.response.status;
      res.status(status).send(`${status} -- ${error.response.statusText}`);
    });
});

module.exports = router;
