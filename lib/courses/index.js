var r = require('./../../modules/r.js');

exports = module.exports;

exports.getCourse = function getCourse(id, cb){

  r.get({
    uri: 'courses/' + encodeURIComponent(id)
  }, gotCourse);

  function gotCourse(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCourseEvaluations = function getEvaluations(id, cb){

  r.get({
    uri: 'courses/' + encodeURIComponent(id) + "/evaluations"
  }, gotEvaluations);

  function gotEvaluations(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCourseGroups = function getGroups(id, cb){

  r.get({
    uri: 'courses/' + encodeURIComponent(id) + "/groups"
  }, gotGroups);

  function gotGroups(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCourseSchedule = function getSchedule(id, cb){

  r.get({
    uri: 'courses/' + encodeURIComponent(id) + "/schedule"
  }, gotSchedule);

  function gotSchedule(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCourseStudents = function getStudents(id, cb){

  r.get({
    uri: 'courses/' + encodeURIComponent(id) + "/students"
  }, gotStudents);

  function gotStudents(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
