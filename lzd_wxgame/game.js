require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

egret.runEgret({
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
    frameRate: 60,
    //showFPS: true,
  fpsStyles: "x:0,y:50,size:24,textColor:0xff0000,bgAlpha:0.9",
    //----auto option end----
    renderMode: 'webgl',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
});

// require("egret.min.js")
