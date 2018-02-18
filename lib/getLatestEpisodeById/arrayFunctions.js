Array.prototype.min = function () ***REMOVED***
  return Math.min.apply(null, this);
***REMOVED***;

Array.prototype.clean = function (deleteValue) ***REMOVED***
  for (var i = 0; i < this.length; i++) ***REMOVED***
    if (this[i] == deleteValue) ***REMOVED***
      this.splice(i, 1);
      i--;
    ***REMOVED***
  ***REMOVED***
  return this;
***REMOVED***;

var latestFunction = function (dates, eps) ***REMOVED***
  var minDates = [];
  var coo = [];
  var now = new Date();

  for (var i = 0; i < dates.length; i++) ***REMOVED***
    if (dates[i] > now) ***REMOVED***
      coo[i] = dates[i];
    ***REMOVED*** else ***REMOVED***
      coo[i] = undefined;
    ***REMOVED***
  ***REMOVED***
  for (var j = 0; j < dates.length; j++) ***REMOVED***
    if (coo[j]) ***REMOVED***
      minDates[j] = coo[j].getTime();
    ***REMOVED*** else ***REMOVED***
      minDates[j] = undefined;
    ***REMOVED***
  ***REMOVED***
  for (var k = 0; k < minDates.length; k++) ***REMOVED***
    if (minDates[k]) ***REMOVED***
      minDates[k] = minDates[k] - now.getTime();
    ***REMOVED*** else ***REMOVED***
      minDates[k] = undefined;
    ***REMOVED***
  ***REMOVED***
  var minDates1 = minDates.slice(0).clean();
  return eps[minDates.indexOf(minDates1.min())];
***REMOVED***;

var arrayMinFunction = Array.prototype.min;
var arrayCleanFunction = Array.prototype.clean;

module.exports = ***REMOVED***
  arrayMinFunction,
  arrayCleanFunction,
  latestFunction
***REMOVED***;