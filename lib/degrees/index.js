var r = require('./../../modules/r.js');

exports = module.exports;


exports.getDegrees = function getDegrees(academicTerm, cb){

  var uri = 'degrees';
  if(academicTerm) {
    uri += '?academicTerm=' + encodeURIComponent(academicTerm);
  }

  r.get({
    uri: uri
  }, gotDegrees);

  function gotDegrees(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getDegree = function getDegrees(id, cb){

  r.get({
    uri: 'degrees/' + encodeURIComponent(id)
  }, gotDegree);

  function gotDegree(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getDegreeCourses = function getCourses(id, academicTerm, cb){

  var uri = 'degrees/'+encodeURIComponent(id) + '/courses';
  if(academicTerm) {
    uri += '?academicTerm=' + encodeURIComponent(academicTerm);
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
