'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema(***REMOVED***
  name: ***REMOVED***
    type: String,
    required: 'Kindly enter the name of the task'
  ***REMOVED***,
  Created_date: ***REMOVED***
    type: Date,
    default: Date.now
  ***REMOVED***,
  status: ***REMOVED***
    type: [***REMOVED***
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    ***REMOVED***],
    default: ['pending']
  ***REMOVED***
***REMOVED***);

module.exports = mongoose.model('Tasks', TaskSchema);
