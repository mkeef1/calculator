'use strict';

function Calc(){}

Calc.add = function(a,b){
  return a + b;
};

Calc.sub = function(a,b){
  return a - b;
};

Calc.distance = function(a,b){
  var xDiff = (a.x - b.x);
  var yDiff = (a.y - b.y);  
  var result =   Math.sqrt(Math.pow(xDiff,2) + (Math.pow(yDiff,2)));
  return result;
};

Calc.line = function(a,b){
  var xDiff = (a.x - b.x);
  var yDiff = (a.y - b.y);  
  var slope = (yDiff/xDiff);
  var yInt = (a.y - (a.x * slope));
  if(yInt >= 0){
  return ('y = ' + slope.toFixed(1) + 'x + ' + Math.abs(yInt).toFixed(1));
}else{
  return ('y = ' + slope.toFixed(1) + 'x - ' + Math.abs(yInt).toFixed(1));
  }
};

Calc.trip = function(a){
  var tripTotal = 0;
  for (var i = 0; (i + 1) < a.length; i++){
    var step = Calc.distance(a[i],a[i+1]);
    tripTotal += step;
  } 
  return tripTotal;
};

Calc.mean = function(a){
  var total = 0;
  for ( var i = 0; i < a.length; i++){
    total += a[i];
  }
  return total/a.length;
};

Calc.stdev = function(a){
  var meanDiffs = [];
  for ( var i = 0; i < a.length; i++){
    meanDiffs.push( Math.pow((a[i] - Calc.mean(a)),2));
  }
  var stdev = Math.sqrt(Calc.mean(meanDiffs));
  return stdev;
};

module.exports = Calc;
