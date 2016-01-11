(function () {
  'use strict';

  function AppService() {
    var count = 0;
    return {
      add: function (val) {
        count = count + val;
      },
      current: function () {
        return count;
      }
    }
  };

  angular.module('app', [])
    .factory('AppService', AppService);

})();