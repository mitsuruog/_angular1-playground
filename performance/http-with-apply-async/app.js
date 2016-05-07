angular.module('app1', ['app.common'])
  .config(function ($httpProvider) {
    $httpProvider.useApplyAsync(false);
  })
  .controller('AppController', function ($scope, Github) {
    $scope.name = 'app1';
    for(var i = 0; i < 3; i++) {
      Github.fetch().then(data => {
        $scope.user = data;
      });
    }
    $scope.$watch('user', () => console.log('user change on app1'));
  });

angular.module('app2', ['app.common'])
  .config(function ($httpProvider) {
    $httpProvider.useApplyAsync(true);
  })
  .controller('AppController', function ($scope, Github) {
    $scope.name = 'app2';
    for(var i = 0; i < 3; i++) {
      Github.fetch().then(data => {
        $scope.user = data;
      });
    }
    $scope.$watch('user', () => console.log('user change on app2'));
  });

angular.module('app.common', [])
  .factory('Github', function ($http) {
    return {
      fetch: () => {
        return $http.get('https://api.github.com/search/users?q=mitsuruog');
      }
    }
  });

angular.bootstrap(document.getElementById('app1'), ['app1']);
angular.bootstrap(document.getElementById('app2'), ['app2']);
