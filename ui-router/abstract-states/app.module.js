angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '',
        template: 'index'
      })
      .state('contacts', {
        url: '/contacts',
        abstract: true,
        templateUrl: 'partials/contacts.html',
        controller: function($scope) {
          $scope.contacts = [{
            id: 0,
            name: "Alice"
          }, {
            id: 1,
            name: "Bob"
          }];
        }
      })
      .state('contacts.list', {
        // loaded into ui-view of parent's template
        url: '/',
        templateUrl: 'partials/contacts.list.html'
      })
      .state('contacts.detail', {
        // loaded into ui-view of parent's template
        url: '/:id',
        templateUrl: 'partials/contacts.detail.html',
        controller: function($scope, $stateParams) {
          $scope.person = $scope.contacts[$stateParams.id];
        }
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
    $rootScope.$on('$viewContentLoading', function(event, viewConfig) {
      console.log(`${event.name}:`, viewConfig);
    });

    // fired once the view is loaded, after the DOM is rendered
    $rootScope.$on('$viewContentLoaded', function(event) {
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
