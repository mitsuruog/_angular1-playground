angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/state1');

    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl: 'partials/state1.html',
        onEnter: function() { console.log('state1.onEnter():'); },
        onExit: function() { console.log('state1.onExit():'); },
      })
      .state('state1.list', {
        url: '/list',
        templateUrl: 'partials/state1.list.html',
        controller: function($scope) {
          $scope.items = ['A', 'List', 'Of', 'Items'];
        },
        onEnter: function() { console.log('state1.list.onEnter():'); },
        onExit: function() { console.log('state1.list.onExit():'); },
      })
      .state('state2', {
        url: '/state2',
        templateUrl: 'partials/state2.html',
        onEnter: function() { console.log('state2.onEnter():'); },
        onExit: function() { console.log('state2.onExit():'); },
      })
      .state('state2.list', {
        url: '/list',
        templateUrl: 'partials/state2.list.html',
        controller: function($scope) {
          $scope.things = ['A', 'Set', 'Of', 'Things'];
        },
        onEnter: function() { console.log('state2.list.onEnter():'); },
        onExit: function() { console.log('state2.list.onExit():'); },
      });

  })
  .run(function($rootScope) {

    // fired when the transition begins.
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      // これでstateChangeを防ぐことができる
      // event.preventDefault();

      console.log(`${event.name}: ${fromState.name}(${fromState.url}) -> ${toState.name}(${toState.url})`);

    });

    // fired once the state transition is complete.
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log(`${event.name}: ${fromState.name}(${fromState.url}) -> ${toState.name}(${toState.url})`);
    });
    // fired once the view begins loading, before the DOM is rendered.
    $rootScope.$on('$viewContentLoading', function(event, viewConfig){
      console.log(`${event.name}:`, viewConfig);
    });

    // fired once the view is loaded, after the DOM is rendered
    $rootScope.$on('$viewContentLoaded', function(event){
      console.log(`${event.name}: $scopeが使えるよー`);
    });

    // fired when the not fount state name
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      console.log(`${event.name}: ${unfoundState.to} ${unfoundState.toParams} ${unfoundState.options}`);
    });

    // fired when an error occurs during transition.
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(`${event.name}: ${toState.name}(${toState.url}): ${error}`);
    });

  });
