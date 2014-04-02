var r = require('./../../modules/r.js');

exports = module.exports;

exports.getMenu = function getMenu(cb){

  r.get({
    uri: 'canteen'
  }, gotMenu);

  function gotMenu(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
