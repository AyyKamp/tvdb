const express = require('express');
const router = express.Router();

router.get('/', function(req, res) ***REMOVED***
  let queryString = req.query;
  let lang = req.query.lang || 'en';
  let tvdb = require(`$***REMOVED***__dirname***REMOVED***/../tvdb_$***REMOVED***lang***REMOVED***.js`);

  tvdb
    .getSeriesById(queryString.series_id)
    .then(response => ***REMOVED***
      return res.status(200).send(response);
    ***REMOVED***)
    .catch(error => ***REMOVED***
      console.log(error);
      let status = error.response.status;
      return res
        .status(status)
        .send(`$***REMOVED***status***REMOVED*** -- $***REMOVED***error.response.statusText***REMOVED***`);
    ***REMOVED***);
***REMOVED***);

module.exports = router;
