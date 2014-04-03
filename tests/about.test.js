process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');


test('About', function(t){

  fenix.about.getAbout(function(err, result){

    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Object', 'Result should be an Object');
    t.end();

  });
});
