process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');

test('Getting Degrees', function(t){
  fenix.degrees.getDegrees('2013/2014', function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Should be an array');
    t.type(res[0].name, 'string', 'Should be a string');
    t.type(res[0].teachers, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Degree', function(t){
  var id = '2761663977513';
  fenix.degrees.getDegree(id, '2013/2014', function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.equal(res.id, id, 'Should have the same id');
    t.type(res.name, 'string', 'Should be a string');
    t.type(res.teachers, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Degree Courses', function(t){
  var id = '2761663977513';
  fenix.degrees.getDegreeCourses(id, '2013/2014', function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Should be an array');
    t.type(res[0].name, 'string', 'Should be a string');
    t.type(res[0].id, 'string', 'Should be a string');
    t.end();
  });
});
