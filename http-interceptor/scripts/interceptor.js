'use strict';
(function() {

  function MyInterceptor($q) {
    return {
      'request': function(config) {
        console.log('request');
        console.log(config);
        return config;
      },
      'requestError': function(rejection) {
        console.log('requestError');
        return $q.reject(rejection);
      },
      'response': function(response) {
        console.log('response');
        console.log(response);
        return response;
      },
      'responseError': function(rejection) {
        console.log('responseError');
        return $q.reject(rejection);
      }
    }

  }

  angular.module('app').factory('MyInterceptor', MyInterceptor);

})();
