var r = require('./../../modules/r.js');

exports = module.exports;

exports.getTerms = function getTerms(cb){

  r.get({
    uri: 'academicterms'
  }, gotTerms);

  function gotTerms(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
