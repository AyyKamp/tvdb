var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema(***REMOVED***  
  name: String,
  email: String,
  password: String
***REMOVED***);
mongoose.model('user', UserSchema);
module.exports = mongoose.model('user');