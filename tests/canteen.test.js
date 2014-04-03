process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var fenix = require('./../index.js');


test('Canteen', function(t){

  fenix.canteen.getMenu(function(err, result){

    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Object', 'Result should be an Object');
    t.type(res['en-GB'], 'Array', 'Result en-GB should be an Array');
    t.type(res['en-GB'][0].meal, 'Array', 'Result meal should be an Array');
    t.end();

  });
});
