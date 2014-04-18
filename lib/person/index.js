var r = require('./../../modules/r.js');

exports = module.exports;

exports.getPerson = function getPerson(accessToken, cb){

  r.get({
    uri: 'person?access_token='+encodeURIComponent(accessToken)
  }, gotPerson);

  function gotPerson(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getClasses = function getClasses(format, accessToken, cb){
  
  var uri = 'person/calendar/classes?access_token='+encodeURIComponent(accessToken);
  if(day) {
    uri += '&format=' + encodeURIComponent(format);
  }
  
  r.get({
    uri: uri
  }, gotClasses);

  function gotClasses(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getEvaluationsCalendar = function getEvaluationsCalendar(format, accessToken, cb){
  
  var uri = 'person/calendar/evaluations?access_token='+encodeURIComponent(accessToken);
  if(day) {
    uri += '&format=' + encodeURIComponent(format);
  }
  
  r.get({
    uri: uri
  }, gotEvaluations);

  function gotEvaluations(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCourses = function getCourses(academicTerm, accessToken, cb){
  
  var uri = 'person/courses?access_token='+encodeURIComponent(accessToken);
  if(day) {
    uri += '&academicTerm=' + encodeURIComponent(academicTerm);
  }
  
  r.get({
    uri: uri
  }, gotCourses);

  function gotCourses(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getCurriculum = function getCurriculum(accessToken, cb){
  
  r.get({
    uri: 'person/curriculum?access_token='+encodeURIComponent(accessToken)
  }, gotCurriculum);

  function gotCurriculum(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getEvaluations = function getEvaluations(accessToken, cb){
  
  r.get({
    uri: 'person/evaluations?access_token='+encodeURIComponent(accessToken)
  }, gotEvaluations);

  function gotEvaluations(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getPayments = function getPayments(accessToken, cb){
  
  r.get({
    uri: 'person/payments?access_token='+encodeURIComponent(accessToken)
  }, gotPayments);

  function gotPayments(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
