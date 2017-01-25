var dbData = [{"comment":"asdf","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"skdr","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"zskjfs","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"rksdrf","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"sekfns","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"drjdrf","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"drgnsdr","time_stamp":13.6,"User":{"name":"JOSEPH"}},{"comment":"helll yea","time_stamp":17.565,"User":{"name":"JOSEPH"}},{"comment":"ASDFASDF","time_stamp":19.882,"User":{"name":"JOSEPH"}},{"comment":"HEYA","time_stamp":26.58,"User":{"name":"JOSEPH"}},{"comment":"asdf","time_stamp":26.58,"User":{"name":"JOSEPH"}},{"comment":"This video is 2 funni lel","time_stamp":32,"User":{"name":"JOSEPH"}},{"comment":"hi low","time_stamp":38.324,"User":{"name":"JOSEPH"}}]

var numInc = 10;
var videoLength = 50;
var barData = [];
// var barDatum = {timeName: "", timeUpper: null, timeLower: null, count: 0}

class BarDatum {
  constructor (timeName, timeLower, timeUpper) {
    this.timeName = timeName; //not as important
    this.timeLower = timeLower;
    this.timeUpper = timeUpper;
    this.count = 0;
  }
}

//create array of time increments
for (var i = 0; i < numInc; i++){
  var barDatumCopy = new BarDatum(i*(videoLength/numInc)+(videoLength/numInc), (i*(videoLength/numInc)), i*(videoLength/numInc)+(videoLength/numInc));
  barData.push(barDatumCopy);
}

// loop through array of dbData
for (var i = 0; i < dbData.length; i++){
  
}