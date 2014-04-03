process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');

test('Getting Course', function(t){
  var id = 1610612925989;
  fenix.courses.getCourse(id, function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res.name, 'string', 'Should be a string');
    t.type(res.numberOfAttendingStudents, 'number', 'Should be a number');
    t.type(res.teachers, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Course Evaluations', function(t){
  var id = 1610612926005;
  fenix.courses.getCourseEvaluations(id, function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Should be an array');
    t.type(res[0].name, 'string', 'Should be a string');
    t.type(res[0].rooms, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Course Groups', function(t){
  var id = 1610612926005;
  fenix.courses.getCourseGroups(id, function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Should be an array');
    t.type(res[0].name, 'string', 'Should be a string');
    t.type(res[0].associatedCourses, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Course Schedule', function(t){
  var id = 1610612926005;
  fenix.courses.getCourseSchedule(id, function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Object', 'Should be an object');
    t.type(res.shifts, 'Array', 'Should be an array');
    t.end();
  });
});
