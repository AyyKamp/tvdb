const admin = require('firebase-admin');

const serviceAccount = require('./.assets/adminsdk.json');

admin.initializeApp(***REMOVED***
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://the-tv-series-app.firebaseio.com'
***REMOVED***);

module.exports = admin;
