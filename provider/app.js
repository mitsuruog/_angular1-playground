angular.module('app.util', [])
  .provider('MyWapper', function () {

    // configuration用の設定
    this.prefix = '<';
    this.sufix = '>';

    // configuration用のSetter
    this.setPrefix = function (value) {
      this.prefix = value;
    }

    this.setSufix = function (value) {
      this.sufix = value;
    }
    
    // 提供するService
    this.$get = function () {
      var service = {};
      service.message = `${this.prefix}This is my provider${this.sufix}`;
      return service;
    };

  });

angular.module('app', ['app.util'])
  .config(function(MyWapperProvider) {
    MyWapperProvider.setPrefix('[');
    MyWapperProvider.setSufix(']');
  })
  .run(function (MyWapper) {
    console.log(MyWapper.message); // -> [This is my provider]
  })
  .controller('AppController', function () { });
