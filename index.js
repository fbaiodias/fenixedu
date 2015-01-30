var config = require('config');

function initConfig(options){
	if(!options || options === {}){
		return;
	}
	config.url = options.url || config.url;
  config.oauth_url = options.oauth_url || config.oauth_url;
  config.client_id = options.client_id || config.client_id;
  config.client_secret = options.client_secret || config.client_secret;
  config.redirect_uri = options.redirect_uri || config.redirect_uri;
  return require('./lib');
}


module.exports = initConfig;
