angular.module('app', [])
  .controller('AppController', function ($scope) {
    $scope.current = 0;

    $scope.generateData = () => {
      $scope.items = [];
      for(var i = 0; i < 10; i++) {
        $scope.current++;
        $scope.items.push({
          id: $scope.current,
          name: `Name ${$scope.current}`
        });
      }
    };

    // initialize
    $scope.generateData();

  });
