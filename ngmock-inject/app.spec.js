(function () {
  'use strict';

  var AppService;

  describe('Not use mock', function () {
    
    // 正規のモジュールをロードする
    beforeEach(module('app'));

    beforeEach(inject(function (_AppService_) {
      AppService = _AppService_;
    }));

    it('アイテム追加', function () {
      expect(AppService.current()).toBe(0);
      AppService.add(1);
      // モジュールがMockでないのでエラー
      // expect(AppService.add).toHaveBeenCalled(); // -> Error: Expected a spy, but got Function.
      // expect(AppService.add).toHaveBeenCalledWith(1); // -> Error: Expected a spy, but got Function.
      expect(AppService.current()).toBe(1);
    });

  });

  describe('Use mock', function () {
    
    // Mock版のモジュールをロードする
    beforeEach(module('app.mock'));

    beforeEach(inject(function (_AppService_) {
      AppService = _AppService_;
    }));

    it('アイテム追加', function () {
      // モジュールがMockなので、Mockで設定した値が返る
      expect(AppService.current()).toBe(10);
      AppService.add(1);
      expect(AppService.add).toHaveBeenCalled();
      expect(AppService.add).toHaveBeenCalledWith(1);
      expect(AppService.current()).toBe(10);
    });

  });


})();