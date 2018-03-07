const admin = require('firebase-admin');

const serviceAccount = require('./.assets/adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://the-tv-series-app.firebaseio.com'
});

module.exports = admin;
