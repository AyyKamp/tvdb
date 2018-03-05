const admin = require("./admin.js");
const request = require("request");
const CronJob = require("cron").CronJob;
const db = admin.firestore();

var sendMessage = function sendMessage(body) ***REMOVED***
  var registrationToken = body.token;

  var payload = ***REMOVED***
    data: ***REMOVED***
      title: body.title,
      body: body.body
    ***REMOVED***
  ***REMOVED***;

  var options = ***REMOVED***
    priority: body.priority
  ***REMOVED***;

  admin
    .messaging()
    .sendToDevice(registrationToken, payload, options)
    .then(function(response) ***REMOVED***
      console.log("Successfully sent message:", response.results[0]);
      resolve();
    ***REMOVED***)
    .catch(function(error) ***REMOVED***
      console.log("Error sending message:", error);
      throw `Error sending message: $***REMOVED***error***REMOVED***`;
    ***REMOVED***);
***REMOVED***;

var sendNotifForSeries = async function sendNotifForSeries(series_id, uid) ***REMOVED***
  request(
    `http://tvdb-rest.herokuapp.com/getLatestEpisodeById?series_id=$***REMOVED***series_id***REMOVED***`,
    function(latest_error, latest_response, latest_body) ***REMOVED***
      try ***REMOVED***
        JSON.parse(latest_body);
      ***REMOVED*** catch (e) ***REMOVED***
        console.log(e);
        return false;
      ***REMOVED***

      if (latest_body === "404 -- Not Found") return false;
      latest_body = JSON.parse(latest_body);
      var job = new CronJob(
        new Date(Date.now() + 1000), //time of start
        () => ***REMOVED***
          request(
            `http://tvdb-rest.herokuapp.com/getSeriesById?series_id=$***REMOVED***series_id***REMOVED***`,
            function(info_error, info_response, info_body) ***REMOVED***
              info_body = JSON.parse(info_body);
              var userRef = db.collection("users");
              userRef
                .where("uid", "==", uid)
                .get()
                .then(snapshot => ***REMOVED***
                  snapshot.forEach(doc => ***REMOVED***
                    var token = doc.data().token;
                    sendMessage(***REMOVED***
                      title: `📺$***REMOVED***info_body.seriesName***REMOVED***📺`,
                      body: `ℹ️"$***REMOVED***latest_body.episodeName***REMOVED***" is now airing!`,
                      token: token,
                      priority: "high"
                    ***REMOVED***);
                    return true;
                  ***REMOVED***);
                ***REMOVED***)
                .catch(error => ***REMOVED***
                  console.log(error);
                ***REMOVED***);
            ***REMOVED***
          );
        ***REMOVED***, //do when its starts

        () => ***REMOVED***
          console.log("it ended");
        ***REMOVED***, //do when it ends
        true //Start the job right now
      );
    ***REMOVED***
  );
***REMOVED***;

module.exports = ***REMOVED*** sendMessage, sendNotifForSeries ***REMOVED***;
