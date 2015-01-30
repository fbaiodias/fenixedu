var request = require('request');
var qs = require('querystring');
var config = require('./../../config.js')

console.log(config);

exports = module.exports;

exports.getAuthUrl = function getAuthUrl() {
  var queryParams = {
    client_id: config.clientId,
    redirect_uri: config.redirectUri
  }
  return config.oauthUrl+'userdialog?'+qs.stringify(queryParams);
};

exports.getAccessToken = function getAccessToken(code, callback) {
  var queryParams = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: config.redirectUri,
    code: code,
    grant_type: 'authorization_code'
  }

  var options = {
    url: config.oauthUrl + 'access_token?'+qs.stringify(queryParams),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };

  request.post(options, postedRequest);

  function postedRequest(error, response, body) {
    if (error) { return callback(error, null); }
    var response = JSON.parse(body);
    if (response.error) { return callback(body, null); }

    return callback(null, response);
  }
};

exports.refreshAccessToken = function refreshAccessToken(refresh_token, callback) {
  var queryParams = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: refresh_token,
    grant_type: 'refresh_token'
  }

  var options = {
    url: config.oauthUrl + 'refresh_token?'+qs.stringify(queryParams),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };

  request.post(options, postedRequest);

  function postedRequest(error, response, body) {
    if (error) { return callback(error, null); }
    var response = JSON.parse(body);
    if (response.error) { return callback(body, null); }

    return callback(null, response);
  }
};