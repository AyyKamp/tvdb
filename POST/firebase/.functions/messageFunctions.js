const admin = require('./../admin.js');
const request = require('request');
const CronJob = require('cron').CronJob;
const db = admin.firestore();

let sendMessage = function sendMessage(body) {
  let registrationToken = body.token;

  let payload = {
    data: {
      title: body.title,
      body: body.body
    }
  };

  let options = {
    priority: body.priority
  };

  admin
    .messaging()
    .sendToDevice(registrationToken, payload, options)
    .then(function(response) {
      console.log('Successfully sent message:', response.results[0]);
    })
    .catch(function(error) {
      console.log('Error sending message:', error);
    });
};

let sendNotifForSeries = async function sendNotifForSeries(series_id, uid, lang) {
  request(
    `http://tvdb-rest.herokuapp.com/getLatestEpisodeById?series_id=${series_id}&lang=${lang}`,
    function(latest_error, latest_response, latest_body) {
      if (latest_body === '404 -- Not Found' || latest_body === 'This series does not have have any new Episodes!') return false;
      console.log()
      try {
        JSON.parse(latest_body);
      } catch (e) {
        console.log(e);
        return false;
      }

      latest_body = JSON.parse(latest_body);
      let job = new CronJob(
        new Date(Date.now() + 1000),
        () => {
          request(
            `http://tvdb-rest.herokuapp.com/getSeriesById?series_id=${series_id}&lang=${lang}`,
            function(info_error, info_response, info_body) {
              info_body = JSON.parse(info_body);
              console.log(info_body)
              let userRef = db.collection('users');
              userRef
                .where('uid', '==', uid)
                .get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    let token = doc.data().token;
                    sendMessage({
                      title: `📺${info_body.seriesName}📺`,
                      body: `ℹ️'${latest_body.episodeName}' is now airing!`,
                      token: token,
                      priority: 'high'
                    });
                  });
                })
                .catch(error => {
                  console.log(error);
                });
            }
          );
        },

        () => {
          console.log('it ended');
        }, 
        true
      );
    }
  );
};

module.exports = { sendMessage, sendNotifForSeries };
