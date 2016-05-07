angular.module('app', [])
  .controller('AppController', function ($scope, $filter) {
    var current = 0;
    var collection = [];
    for (var i = 0; i < 10; i++) {
      current++;
      collection.push({
        id: current,
        name: `Name ${current}`
      });
    }

    // initialize
    $scope.items1 = collection;
    $scope.items2 = collection;

    $scope.filter = () => {
      $scope.items2 = $filter('odd')($scope.items2, 'controller');
    };

  })
  .filter('odd', function () {
    return function (collection, prop) {
      console.log(`evaluated on ${prop}`);
      return collection.filter(item => {
        return item.id % 2;
      })
    };
  });
