const admin = require('./../admin.js');
const request = require('request');
const CronJob = require('cron').CronJob;
const db = admin.firestore();

let sendMessage = function sendMessage(body) ***REMOVED***
  let registrationToken = body.token;

  let payload = ***REMOVED***
    data: ***REMOVED***
      title: body.title,
      body: body.body
    ***REMOVED***
  ***REMOVED***;

  let options = ***REMOVED***
    priority: body.priority
  ***REMOVED***;

  admin
    .messaging()
    .sendToDevice(registrationToken, payload, options)
    .then(function(response) ***REMOVED***
      console.log('Successfully sent message:', response.results[0]);
    ***REMOVED***)
    .catch(function(error) ***REMOVED***
      console.log('Error sending message:', error);
    ***REMOVED***);
***REMOVED***;

let sendNotifForSeries = async function sendNotifForSeries(series_id, uid) ***REMOVED***
  request(
    `http://tvdb-rest.herokuapp.com/getLatestEpisodeById?series_id=$***REMOVED***series_id***REMOVED***`,
    function(latest_error, latest_response, latest_body) ***REMOVED***
      if (latest_body === '404 -- Not Found' || latest_body === 'This series does not have have any new Episodes!') return false;
      
      try ***REMOVED***
        JSON.parse(latest_body);
      ***REMOVED*** catch (e) ***REMOVED***
        console.log(e);
        return false;
      ***REMOVED***

      latest_body = JSON.parse(latest_body);
      let job = new CronJob(
        new Date(Date.now() + 1000),
        () => ***REMOVED***
          request(
            `http://tvdb-rest.herokuapp.com/getSeriesById?series_id=$***REMOVED***series_id***REMOVED***`,
            function(info_error, info_response, info_body) ***REMOVED***
              info_body = JSON.parse(info_body);
              let userRef = db.collection('users');
              userRef
                .where('uid', '==', uid)
                .get()
                .then(snapshot => ***REMOVED***
                  snapshot.forEach(doc => ***REMOVED***
                    let token = doc.data().token;
                    sendMessage(***REMOVED***
                      title: `📺$***REMOVED***info_body.seriesName***REMOVED***📺`,
                      body: `ℹ️'$***REMOVED***latest_body.episodeName***REMOVED***' is now airing!`,
                      token: token,
                      priority: 'high'
                    ***REMOVED***);
                    return true;
                  ***REMOVED***);
                ***REMOVED***)
                .catch(error => ***REMOVED***
                  console.log(error);
                ***REMOVED***);
            ***REMOVED***
          );
        ***REMOVED***,

        () => ***REMOVED***
          console.log('it ended');
        ***REMOVED***, 
        true
      );
    ***REMOVED***
  );
***REMOVED***;

module.exports = ***REMOVED*** sendMessage, sendNotifForSeries ***REMOVED***;
