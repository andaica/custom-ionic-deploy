var IonicDeploy = {
  init: function(app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'initialize',
      [app_id]
    );
  },
  check: function(server_url, app_id, channel_tag, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'check',
      [app_id, channel_tag, server_url]
    );
  },
  download: function(app_id, success, failure) {
  	cordova.exec(
  		success,
  		failure,
  		'IonicDeploy',
  		'download',
  		[app_id]
  	);
  },
  extract: function(app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'extract',
      [app_id]
    );
  },
  redirect: function(app_id, success, failure) {
  	cordova.exec(
  		success,
  		failure,
  		'IonicDeploy',
  		'redirect',
  		[app_id]
  	);
  },
  info: function(app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'info',
      [app_id]
    );
  }
}

module.exports = IonicDeploy;
