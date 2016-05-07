angular.module('app', [])
  .controller('AppController', function ($scope) {
    $scope.$watch('name', (newValue, oldValue) => {
      console.log(`Change name.`);
    });
  });
