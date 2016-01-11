angular.module('app', [])
  .factory('TaxCalculator', function ($rootScope, $window) {

    var service = {};
    
    // [MEMO] IEだと動作しないのでpolyfillが必要
    // https://github.com/jonathantneal/EventListener
    // カスタムイベント登録
    var event = new CustomEvent('calculate', { value: 0 });

    service.calculate = function (price, scope) {
      price = parseInt(price, 10);
      event.value = angular.isNumber(price) ? Math.floor(price + (price * 0.08)) : 0;
      // カスタムイベントを発火する
      //$window.dispatchEvent(event);
      scope.$emit('calculate', event.value);
      return event.value;
    };

    service.on = function (callback) {
      $window.addEventListener('calculate', function (e) {
        callback(e);
        // [MEMO] 場合によっては$applyする必要がある
        // $rootScope.$apply(function () {
        //   callback(e);
        // });
      }, false);
    };

    return service;

  })
  .controller('AppController', function ($window, $scope, TaxCalculator) {

    // イベントハンドラの登録
    TaxCalculator.on(function (e) {
      console.log('TaxCalculator.on:', e.value);
    });
    // [MEMO] もちろん$windowでハンドラ作成してもOK。。。こっちの方がイベント指定できていいかな
    $window.addEventListener('calculate', function (e) {
      console.log('$window.addEventListener', e.value);
    });
    $scope.$on('calculate', function (e, value) {
      console.log('$scope.$on', value);
    });
    TaxCalculator.calculate(100, $scope);

  });
