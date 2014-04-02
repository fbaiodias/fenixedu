var r = require('./../../modules/r.js');

exports = module.exports;

exports.getAbout = function getAbout(cb){

  r.get({
    uri: 'about'
  }, gotAbout);

  function gotAbout(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
