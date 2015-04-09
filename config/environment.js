/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'web-stalker-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "* 'self' 'unsafe-inline'",
      'font-src': "* 'self'",
      'connect-src': "*",
      'img-src': "* 'self'",
      'style-src': "* 'self' 'unsafe-inline'",
      'media-src': "'self'",
      'frame-src': "'self' http://static.ak.facebook.com https://s-static.ak.facebook.com https://www.facebook.com",
      'report-uri': "*"
    }
  };

  if (environment === 'development') {
    
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
