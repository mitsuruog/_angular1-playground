# Instanced factory

## 利用シーン

`Service`や`Factory`はSingletonだが、Singletonで困るケースで利用する。

## サンプル

```js
angular.module('app')
  .factory('TaxCalculatorFactory', function () {
    
    // コンストラクタ関数
    function TaxCalculator(tax) {
      this.tax = tax
    }

    TaxCalculator.prototype.calculate = function (price) {
      price = parseInt(price, 10);
      return angular.isNumber(price) ? Math.floor(price + (price * this.tax)) : 0;
    }
    
    // 公開用I/F
    return {
      getInstance: function (tax) {
        return new TaxCalculator(tax);
      }
    };

  });
```

呼び出し側

```js
angular.module('app')
  .controller('AppController', function (TaxCalculatorFactory) {
    console.log(TaxCalculatorFactory.getInstance(0.05).calculate(100)); // -> 105
    console.log(TaxCalculatorFactory.getInstance(0.08).calculate(100)); // -> 108
    console.log(TaxCalculatorFactory.getInstance(0.1).calculate(100));  // -> 110
  });
 ```