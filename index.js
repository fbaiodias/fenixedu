var config = require('config');

function initConfig(options){
	if(!options || options === {}){
		return;
	}
	config.url = options.url || config.url;
  config.oauthUrl = options.oauthUrl || config.oauthUrl;
  config.clientId = options.clientId || config.clientId;
  config.clientSecret = options.clientSecret || config.clientSecret;
  config.redirectUri = options.redirectUri || config.redirectUri;
  return require('./lib');
}


module.exports = initConfig;
