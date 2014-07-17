/* global describe, it*/
'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add', function(){
    it('should sum two numbers', function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });
  describe('.sub', function(){
    it('should subtract two numbers', function(){
      var diff = Calc.sub(5,3);
      expect(diff).to.equal(2);
    });
  });
  describe('.distance', function(){
    it('should find distance between 2 points in 2d', function(){
      var distance = Calc.distance({x:4,y:7},{x:8,y:10});
      expect(distance).to.equal(5);
      });
    });
  describe('.line', function(){
    it('should find the slope of a line', function(){
      var line = Calc.line({x:3,y:2},{x:7,y:4});
      expect(line).to.equal('y = 0.5x + 0.5');
    });
    it('should find the slope of a line with negative slope and y int', function(){
      var line = Calc.line({x:1,y:-2},{x:2,y:-3});
      expect(line).to.equal('y = -1.0x - 1.0');
    });
  });
   describe('.trip', function(){
    it('should give total distance to travel an array of points', function(){
      var trip = Calc.trip([{x:1,y:1},{x:5,y:-2},{x:10,y:-2}]);
      expect(trip).to.equal(10);
    });
   });
    describe('.mean', function(){
        it('should return the mean of the array', function(){
        var mean = Calc.mean([4, 5, 7, 8]);
        expect(mean).to.equal(6);
      });
      });
    describe('.stdev', function(){
      it('should return the standard deviation', function(){
        var stdev = Calc.stdev([2,4,4,4,5,5,7,9]);
        expect(stdev).to.equal(2);
    });
  });
});
