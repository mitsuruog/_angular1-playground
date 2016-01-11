# ngMock inject

## サンプル

```js
var AppService;

beforeEach(module('app'));

beforeEach(inject(function (_AppService_) {
  AppService = _AppService_;
}));

// specを書く
```

## テストの構成

service系のモジュールはmockを作る。(ControllerのspecなどでどうせMockが必要となる。)  
同じフォルダに`spec`と`mock`を置くのが見通しが良くていい。

```
AppService
  app.service.js
  app.service.mock.js
  app.service.spec.js  
```
 
## Tips

### `_InjectName_`のアンダースコアは何？

AngularJS: API: angular.mock.inject   
https://docs.angularjs.org/api/ngMock/function/angular.mock.inject#resolving-references-underscore-wrapping-

同じ名前のモジュールをinjectするためのシンタックスシュガーのこと。  
specを書く場合に、Mockなどで同じ名前のモジュールを利用するケースがあり利用する。