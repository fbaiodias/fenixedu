var r = require('./../../modules/r.js');

exports = module.exports;

exports.getSpaces = function getSpaces(cb){

  r.get({
    uri: 'spaces'
  }, gotSpaces);

  function gotSpaces(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getSpace = function getSpace(id, day, cb){

  var uri = 'spaces/' + encodeURIComponent(id);
  if(day) {
    uri += '?day=' + encodeURIComponent(day);
  }

  r.get({
    uri: uri
  }, gotSpace);

  function gotSpace(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getSpaceBlueprint = function getBlueprint(id, file, imageFormat, cb){

  var uri = 'spaces/' + encodeURIComponent(id) + '/blueprint';
  if(imageFormat) {
    uri += '?format=' + encodeURIComponent(imageFormat);
  }

  r.getImg({
    uri: uri,
    file: file
  }, gotBlueprint);

  function gotBlueprint(err, reply, res){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
