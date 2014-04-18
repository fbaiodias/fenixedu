var request = require('request');
var qs = require('querystring');
var config = require('./../../config.json')

exports = module.exports;

exports.getAuthUrl = function getAuthUrl() {
  var queryParams = {
    client_id: config.client_id,
    redirect_uri: config.redirect_uri
  }
  return config.oauth_url+'userdialog?'+qs.stringify(queryParams);
};

exports.getAccessToken = function getAccessToken(code, callback) {
  var queryParams = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    redirect_uri: config.redirect_uri,
    code: code,
    grant_type: 'authorization_code'
  }

  var options = {
    url: config.oauth_url + 'access_token?'+qs.stringify(queryParams),
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
    client_id: config.client_id,
    client_secret: config.client_secret,
    refresh_token: refresh_token,
    grant_type: 'refresh_token'
  }

  var options = {
    url: config.oauth_url + 'refresh_token?'+qs.stringify(queryParams),
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