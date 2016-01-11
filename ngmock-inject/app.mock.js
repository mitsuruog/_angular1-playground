(function () {
  'use strict';

  function AppService() {
    return {
      add: jasmine.createSpy(),
      current: jasmine.createSpy().and.returnValue(10)
    }
  };

  angular.module('app.mock', [])
    .factory('AppService', AppService);

})();