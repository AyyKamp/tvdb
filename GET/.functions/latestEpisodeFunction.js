Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Array.prototype.clean = function (deleteValue) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

let latestEpisodeFunction = (eps, dates) => {
  let minDates = [];
  let times = [];
  let now = new Date();
  
  dates.forEach((el, i) => {
    if(el > now) {
      times[i] = el
    } else {
      times[i] = undefined
    }
  });

  for (let i in dates) {
    if (times[i]) {
      console.log(times[i])
      
      minDates[i] = new Date(times[i]).getTime()
    } else {
      minDates[i] = undefined;
    }
  }

  for(let el of minDates) {
    if(el) {
      el -= now.getTime()
    } else {
      el = undefined
    }
  }

  let finalDate = minDates.slice(0).clean();
  return eps[minDates.indexOf(finalDate.min())];
};

module.exports = {
  latestEpisodeFunction
};
