# Provider

## 利用シーン

提供する機能としては`Service`や`Factory`と変わらない。  
汎用的な振る舞いをするように作成しておき、`.config()`にて設定を注入して振る舞いを変えたいケースで使用する。

## サンプル

Provider
```js
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
```
利用側

```js
angular.module('app', ['app.util'])
  .config(function(MyWapperProvider) {
    // configuration設定を上書きする
    MyWapperProvider.setPrefix('[');
    MyWapperProvider.setSufix(']');
  })
  .run(function (MyWapper) {
    console.log(MyWapper.message); // -> [This is my provider]
  });
```