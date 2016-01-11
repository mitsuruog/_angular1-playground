

## 呼び出し順序

### 正常系

1. request
1. $http transformRequest handler
1. $http transformResponse handler
1. response
1. $http success handler'

### 異常系

404

1. request
1. $http transformRequest handler
1. $http transformResponse handler
1. responseError
1. $http fail handler'

## 考察

`transformRequest`と`transformResponse`はあくまで送受信するデータを微加工するためのもの。
