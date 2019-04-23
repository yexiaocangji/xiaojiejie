var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.scrollView = new egret.ScrollView();
        /**
         * 便于演示数据，这里使用家数据
         * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
         */
        _this.gameData = [
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] },
            { openid: '', avatarUrl: '', nickname: 'xxx', KVDataList: [{ key: "pass", value: '虚位以待' }] }
        ];
        wx.onMessage(function (data) {
            console.log(data);
            _this.userPath = data.userPath;
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
                var Object = {};
                _this.rankType = data.rankType;
                if (data.rankType == 1) {
                    //好友
                    wx.getFriendCloudStorage({
                        keyList: ['pass'],
                        success: function (res) {
                            // console.log(res);
                            if (res.data) {
                                _this.gameData.forEach(function (value, index) {
                                    if (res.data && index < res.data.length) {
                                        _this.gameData[index].KVDataList = res.data[index]['KVDataList'];
                                    }
                                });
                                // this.gameData = res.data;
                            }
                            // console.log(this.gameData);
                            _this.runGame();
                        },
                        fail: function (err) {
                            console.log(err);
                        },
                        complete: function () {
                        }
                    });
                    //创建按钮
                }
                else if (data.rankType == 2) {
                    //群
                    wx.getGroupCloudStorage({
                        shareTicket: data.shareTicket,
                        keyList: ['pass'],
                        success: function (res) {
                            // console.log(res);
                            if (res.data) {
                                _this.gameData.forEach(function (value, index) {
                                    if (res.data && index < res.data.length) {
                                        _this.gameData[index].KVDataList = res.data[index]['KVDataList'];
                                    }
                                });
                                // this.gameData = res.data;
                            }
                            _this.runGame();
                        },
                        fail: function (err) {
                            console.log(err);
                        },
                        complete: function () {
                        }
                    });
                }
            }
            else {
                _this.cancelGame();
            }
        });
        //获取小游戏开放数据接口 --- 结束        
        //获取排行榜所需资源
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.bgtexture = new egret.Texture();
            _this.bgtexture._setBitmapData(imageLoader.data);
            _this.panel_01 = new egret.Texture();
            _this.panel_01._setBitmapData(imageLoader.data);
        }, _this);
        imageLoader.load("resource/loading/PT_003.jpg");
        //测试点击
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            console.log('子域输出点击');
        }, _this);
        return _this;
    }
    Main.prototype.runGame = function () {
        var _this = this;
        var bitmap = new egret.Bitmap(this.panel_01);
        bitmap.x = (640 - 480) >> 1;
        bitmap.y = (1136 - 800) >> 1;
        bitmap.width = 480;
        bitmap.height = 800;
        this.addChild(bitmap);
        if (this.rankType == 1) {
            var label = new egret.TextField();
            label.width = 200;
            label.height = 30;
            label.x = (640 - 200) >> 1;
            label.y = bitmap.y + 20;
            label.text = '分享查看群排行 >';
            this.addChild(label);
            label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelClick, this);
        }
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = bitmap.x;
        this.scrollView.y = bitmap.y;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = bitmap.height;
        this.addChild(this.scrollView);
        this.gameData.forEach(function (value, index) {
            var item = new egret.DisplayObjectContainer();
            item.y = index * 130;
            listContainer.addChild(item);
            var bitmap = new egret.Bitmap(_this.bgtexture);
            bitmap.width = 480;
            item.addChild(bitmap);
            var nicktxt = new egret.TextField();
            nicktxt.y = 10;
            nicktxt.text = '名字:' + value.nickname;
            item.addChild(nicktxt);
            var numtxt = new egret.TextField();
            numtxt.x = 260;
            numtxt.y = 10;
            numtxt.text = '次数:' + value.KVDataList[0]['value'];
            item.addChild(numtxt);
        }, this);
    };
    Main.prototype.cancelGame = function () {
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(i);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    };
    Main.prototype.onLabelClick = function (e) {
        wx.shareAppMessage({ title: '看看群里谁通关最多！', imageUrl: "", query: "checkRank=1&", success: function (res) {
                egret.log('分享到群查看排行数据:' + JSON.stringify(res));
            }, fail: function () { }, complete: function () { } });
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
// // 微信关系数据的获取
// // 上传方法类似、开发者自行填写
// declare namespace wx {
//     /**
//      * 监听消息
//      */
//     const onMessage: (callback: (data: { [key: string]: any }) => void) => void;
//     /**
//      * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 	接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getFriendCloudStorage: (Object: {
//         keyList?: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err: any) => void,
//         complete?: () => void,
//     }) => void;
//     /**
//      * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
//      * @param shareTicket 群分享对应的 shareTicket
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getGroupCloudStorage: (Object: {
//         shareTicket: string,
//         keyList: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err?: any) => void,
//         complete?: () => void,
//     }) => void;
//     /**
//      * 用户数据
//      */
//     type UserGameData = {
//         /** 用户的微信头像 url */
//         avatarUrl: string,
//         /** 用户的微信昵称 */
//         nickname: string,
//         /** 用户的 openid */
//         openid: string,
//         /**用户自定义数据 */
//         KVList: KVData[]
//     }
//     type KVData = {
//         key: string,
//         value: string
//     }
// } 
