'use strict';

app.factory('httpRequestInterceptor', function(Auth) {
  return {
    request: function(config) {
      if(Auth.token) {
        config.headers = {'Authorization': 'Bearer ' + Auth.token}
      }
      return config;
    }
  };
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
