var admin = require("firebase-admin");

var serviceAccount = require("./the-tv-series-app-firebase-adminsdk.json");

admin.initializeApp(***REMOVED***
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://the-tv-series-app.firebaseio.com"
***REMOVED***);

/*var registrationToken = "euaTN6kHWzs:APA91bGBRO2osv_jf4KhSF9bbN2_Me7LeS04wnMp2lSSwIYxSoVKpwzKd142UITBQQ1S18XwZC9qAcw0J74Ffd-35TwiM_KOUCPvQ3iVJpYyot8LOHH_SQpJ-lhsAbzrfQHoX9gqDsIg";

var payload = ***REMOVED***
  notification: ***REMOVED***
    title: "Fedor",
    body: "Accident 💩!!!!"
  ***REMOVED***
***REMOVED***;

var options = ***REMOVED***
  priority: "high",
  timeToLive: 60 * 60 *24
***REMOVED***;

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) ***REMOVED***
    console.log("Successfully sent message:", response.results[0]);
  ***REMOVED***)
  .catch(function(error) ***REMOVED***
    console.log("Error sending message:", error);
  ***REMOVED***);*/
module.exports = admin;