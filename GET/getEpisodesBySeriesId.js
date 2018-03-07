const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
	let queryString = req.query;
	let lang = req.query.lang || 'en';
	let tvdb = require(`${__dirname}/../tvdb_${lang}.js`);

	tvdb
		.getSeriesAllById(queryString.series_id)
		.then(response => {
			return res.status(200).send(response.episodes);
		})
		.catch(error => {
			console.log(error);
			let status = error.response.status
			return res.status(status).send(`${status} -- ${error.response.statusText}`);
		});
});

module.exports = router;
