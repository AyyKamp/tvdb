Array.prototype.min = function() ***REMOVED***
  return Math.min.apply(null, this);
***REMOVED***;

Array.prototype.clean = function (deleteValue) ***REMOVED***
  for (let i = 0; i < this.length; i++) ***REMOVED***
    if (this[i] == deleteValue) ***REMOVED***
      this.splice(i, 1);
      i--;
    ***REMOVED***
  ***REMOVED***
  return this;
***REMOVED***;

let latestFunction = (dates,eps) => ***REMOVED***
  let minDates = [];
  let times = [];
  let now = new Date();
  
  dates.forEach((el, i) => ***REMOVED***
    if(el > now) ***REMOVED***
      times[i] = el
    ***REMOVED*** else ***REMOVED***
      times[i] = undefined
    ***REMOVED***
  ***REMOVED***);

  for (let i in dates) ***REMOVED***
    if (times[i]) ***REMOVED***
      console.log(times[i])
      
      minDates[i] = new Date(times[i]).getTime()
    ***REMOVED*** else ***REMOVED***
      minDates[i] = undefined;
    ***REMOVED***
  ***REMOVED***

  for(let el of minDates) ***REMOVED***
    if(el) ***REMOVED***
      el -= now.getTime()
    ***REMOVED*** else ***REMOVED***
      el = undefined
    ***REMOVED***
  ***REMOVED***

  let finalDate = minDates.slice(0).clean();
  return eps[minDates.indexOf(finalDate.min())];
***REMOVED***;

module.exports = ***REMOVED***
  latestFunction
***REMOVED***;
