'use strict';
(function() {

  function AppController($http) {
    $http.get('https://api.github.com/ssearch/repositories?q=angular', {
      transformRequest: function(data, headersGetter) {
        console.log('$http transformRequest handler');
        console.log(data, headersGetter);
      },
      transformResponse: function(data, headersGetter, status) {
        console.log('$http transformResponse handler');
//        console.log(data, headersGetter, status);
        return JSON.parse(data);
      }
    })
      .then(function(response) {
        console.log('$http success handler');
        console.log(response);
      }, function(err) {
        console.log('$http fail handler');
        console.log(err);
      });
  }

  angular.module('app').controller('AppController', AppController);

})();
