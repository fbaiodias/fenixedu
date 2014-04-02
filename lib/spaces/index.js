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

exports.getSpace = function getSpace(id, cb){

  r.get({
    uri: 'spaces/' + encodeURIComponent(id)
  }, gotSpace);

  function gotSpace(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getSpaceBlueprint = function getBlueprint(id, file, cb, imageFormat){

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

    //var fs = require('fs');

    //return cb(null, reply.pipe(
      //fs.createWriteStream('what.png')).on('close', console.log('das')));
  }
};
