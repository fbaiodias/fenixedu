process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');
var fs = require('fs');

test('Getting Spaces', function(t){
  fenix.spaces.getSpaces(function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Should be an array');
    t.type(res[0].name, 'string', 'Should be a string');
    t.type(res[0].id, 'string', 'Should be a string');
    t.end();
  });
});

test('Getting Space', function(t){
  var id = '2448131363667';
  fenix.spaces.getSpace(id, '21/02/2014', function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.equal(res.id, id, 'Should have the same id');
    t.type(res.name, 'string', 'Should be a string');
    t.type(res.events, 'Array', 'Should be an array');
    t.end();
  });
});

test('Getting Space Blueprint', function(t){
  var id = '2465311230082';
  fenix.spaces.getSpaceBlueprint(id, '/tmp/file.jpg', 'jpeg', function(err, res){
    t.type(res, 'Object', 'Should be an object');
    t.equal(
      res.headers['content-type'],
      'image/jpeg',
      'Content type should be image/jpeg');
    var d = fs.openSync(opts.file, 'r');
    t.notOk(err, 'Should be false. As in the file exists');
    t.end();
  });
});
