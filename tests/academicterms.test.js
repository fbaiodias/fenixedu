process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');


test('Academic Terms', function(t){

  fenix.academicterms.getTerms(function(err, result){

    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Object', 'Result should be an Object');
    t.type(res['2013/2014'], 'Array', 'Result year should be an Array');
    t.end();

  });
});
