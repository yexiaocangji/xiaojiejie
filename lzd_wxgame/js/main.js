var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CacheData = (function () {
    function CacheData() {
    }
    CacheData.getRAMData = function (key) {
        return CacheData._ramDatas[key];
    };
    CacheData.saveRAMData = function (key, data) {
        CacheData._ramDatas[key] = data;
    };
    CacheData.removeRAMData = function (key) {
        delete CacheData._ramDatas[key];
    };
    CacheData.clearRAMData = function () {
        CacheData._ramDatas = {};
    };
    CacheData._ramDatas = {};
    return CacheData;
}());
__reflect(CacheData.prototype, "CacheData");
/**
 * 弹窗基类
*/
var BaseAlertPanel = (function (_super) {
    __extends(BaseAlertPanel, _super);
    function BaseAlertPanel() {
        var _this = _super.call(this) || this;
        //是否全屏
        _this.isFill = false;
        //点击空白关闭
        _this.isBackClose = false;
        //出场动画
        _this.openActionType = 0;
        //退场动画
        _this.closeActionType = 0;
        return _this;
    }
    BaseAlertPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    BaseAlertPanel.prototype.onClose = function () {
        Alert.closeAlert();
    };
    BaseAlertPanel.prototype.dispose = function () {
        if (this.closeBtn)
            this.closeBtn.dispose();
    };
    return BaseAlertPanel;
}(eui.Component));
__reflect(BaseAlertPanel.prototype, "BaseAlertPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoveFromStage, _this);
        return _this;
    }
    BasePanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BasePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initialize();
    };
    //EUI初始化完成调度
    BasePanel.prototype.initialize = function () {
    };
    BasePanel.prototype.onAddToStage = function (e) {
        BasePanel.currentPanel = this;
        this.width = this.parent.width;
        this.height = this.parent.height;
    };
    BasePanel.prototype.onRemoveFromStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    };
    BasePanel.prototype.gotoPanel = function (panel) {
        try {
            this.parent.addChild(panel);
        }
        catch (e) {
            console.log("场景切换异常:", e);
            var scene = LayerManager.getInstance().senceLayer;
            console.log("senceLayer numChildren 1:", scene ? scene.numChildren : null);
            scene && scene.addChild(panel);
        }
        this.dispose();
    };
    BasePanel.prototype.dispose = function () {
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    return BasePanel;
}(eui.Component));
__reflect(BasePanel.prototype, "BasePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var BaseSingle = (function () {
    function BaseSingle() {
    }
    /** 获取单例 */
    BaseSingle.getInstance = function () {
        var _class = this;
        if (_class.__instance == null)
            _class.__instance = new _class();
        return _class.__instance;
    };
    /** 摧毁单例 */
    BaseSingle.destoryInstance = function () {
        var _class = this;
        if (_class.__instance != null)
            delete _class.__instance;
    };
    return BaseSingle;
}());
__reflect(BaseSingle.prototype, "BaseSingle");
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton() {
        var _this = _super.call(this) || this;
        _this.isScale = true;
        _this.scaleValue = 1.1;
        _this.soundName = "click";
        /** 按钮不可点标记 */
        _this.btnmask = null;
        _this.thisObj = _this;
        return _this;
    }
    MyButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MyButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
    };
    MyButton.prototype.setCallBack = function (type, callBack, thisObj) {
        if (thisObj === void 0) { thisObj = null; }
        switch (type) {
            case egret.TouchEvent.TOUCH_TAP:
                this.tapCallBack = callBack;
                if (thisObj)
                    this.thisObj = thisObj;
                break;
            case egret.TouchEvent.TOUCH_END:
                this.endCallBack = callBack;
                if (thisObj)
                    this.thisObj = thisObj;
                break;
            case egret.TouchEvent.TOUCH_BEGIN:
                this.beginCallBack = callBack;
                if (thisObj)
                    this.thisObj = thisObj;
                break;
        }
    };
    MyButton.prototype.onTouchTap = function (e) {
        if (this.tapCallBack) {
            this.tapCallBack.apply(this.thisObj, [e]);
        }
    };
    MyButton.prototype.onTouchBegin = function (e) {
        if (this.beginCallBack) {
            this.beginCallBack.apply(this.thisObj, [e]);
        }
        if (this.isScale) {
            this.scaleX = this.scaleY = this.scaleValue;
            if (this.anchorOffsetX != this.width / 2) {
                this.anchorOffsetX = this.width / 2;
                this.x += this.width / 2;
            }
            if (this.anchorOffsetY != this.height / 2) {
                this.anchorOffsetY = this.height / 2;
                this.y += this.height / 2;
            }
        }
        if (this.soundName && this.soundName != "") {
            SoundManager.playSound(this.soundName);
        }
    };
    MyButton.prototype.onTouchEnd = function (e) {
        if (this.endCallBack) {
            this.endCallBack.apply(this.thisObj, [e]);
        }
        if (this.isScale) {
            this.scaleX = this.scaleY = 1;
        }
    };
    MyButton.prototype.onTouchCancel = function (e) {
        if (this.isScale) {
            this.scaleX = this.scaleY = 1;
        }
    };
    MyButton.prototype.setEnable = function (bool, str) {
        if (bool === void 0) { bool = true; }
        if (str === void 0) { str = ""; }
        this.touchEnabled = bool;
        if (!bool) {
            //this.alpha = 0.5;
            ColorUtil.setDark(this);
            // this.btnmask.alpha = 1;
        }
        else {
            //this.alpha = 1;
            ColorUtil.clearGray(this);
            // this.btnmask.alpha = 0;
        }
    };
    MyButton.prototype.dispose = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancle, this);
        this.tapCallBack = null;
        this.beginCallBack = null;
        this.endCallBack = null;
    };
    return MyButton;
}(eui.Button));
__reflect(MyButton.prototype, "MyButton");
window['MyButton'] = MyButton;
var chaow;
(function (chaow) {
    var Number = (function () {
        function Number() {
            this.unitStrs = ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff"];
            //单位
            this.unit = 0;
        }
        /** 加法运算 */
        Number.prototype.add = function (num) {
            if (this.unit != num.unit) {
                if (this.unit < num.unit) {
                    this.value /= Math.pow(1000, Math.abs(this.unit - num.unit) + 1);
                    this.unit = num.unit;
                }
                else {
                    num.value /= Math.pow(1000, Math.abs(this.unit - num.unit) + 1);
                    num.unit = this.unit;
                }
            }
            this.value += num.value;
            return this;
        };
        /** 减法运算 */
        Number.prototype.minus = function (num) {
            if (this.unit != num.unit) {
                if (this.unit < num.unit) {
                    this.value /= Math.pow(1000, Math.abs(this.unit - num.unit) + 1);
                    this.unit = num.unit;
                }
                else {
                    num.value /= Math.pow(1000, Math.abs(this.unit - num.unit) + 1);
                    num.unit = this.unit;
                }
            }
            this.value -= num.value;
            return this;
        };
        /** 乘法运算 */
        Number.prototype.multiplication = function (num) {
            this.value *= num;
            while (this.value < 1 && this.unit > 0) {
                this.value *= 1000;
                this.unit--;
            }
            while (this.value >= 1000) {
                this.value /= 1000;
                this.unit++;
            }
            return this;
        };
        /** 除法运算 */
        Number.prototype.division = function (num) {
            this.value /= num;
            while (this.value < 1 && this.unit > 0) {
                this.value *= 1000;
                this.unit--;
            }
            while (this.value >= 1000) {
                this.value /= 1000;
                this.unit++;
            }
            return this;
        };
        Number.prototype.toString = function () {
            var unitStr = "";
            try {
                unitStr = this.unitStrs[this.unit];
            }
            catch (e) {
                console.log(e);
                unitStr = "";
            }
            return this.value + unitStr;
        };
        Number.prototype.parse = function (num) {
            var str = num.toString();
            var index = Math.floor(str.length / 3);
            if (str.length % 3 == 0) {
                index--;
            }
            var nuit = this.unitStrs[index];
            if (nuit != "") {
                var pos = str.length - (index) * 3;
                var n = str.substr(0, pos);
                var m = str.substr(pos, 2);
                n += "." + m;
            }
            this.value = parseInt(n);
            this.unit = index;
        };
        return Number;
    }());
    chaow.Number = Number;
    __reflect(Number.prototype, "chaow.Number");
})(chaow || (chaow = {}));
var ShopConstant = (function () {
    function ShopConstant() {
    }
    //判断当前买哪个等级最合算
    ShopConstant.buyWhichLevel = function () {
        var config = this.getHighestLevelConfig(StaticConstant.CurrentType);
        var minBuyLevel = Number(config.minBuyLevel); //当前可购买的最小等级    
        var maxBuyLevel = Number(config.maxBuyLevel); //当前可购买的最大等级
        var heSuanLevel = maxBuyLevel; //最合算的等级
        if (maxBuyLevel == minBuyLevel)
            return heSuanLevel;
        else {
            var hesuanMoney = null;
            for (var i = 0; i <= maxBuyLevel - minBuyLevel; i++) {
                var currentLevel = maxBuyLevel - i;
                var currentLevelID = RoleData.getIdByLevel(StaticConstant.CurrentType, currentLevel + "");
                var currentPlayer = PlayerData.getPlayerById(currentLevelID);
                var currentLevelGold = RoleData.getBuildGold(currentLevelID, currentPlayer.buyCount_gold);
                var m = currentLevelGold.mul(Math.pow(2, i));
                if (!hesuanMoney)
                    hesuanMoney = m;
                else {
                    if (hesuanMoney.comparedTo(m) == 1) {
                        hesuanMoney = m;
                        heSuanLevel = currentLevel;
                    }
                }
            }
            return heSuanLevel;
        }
    };
    ShopConstant.getHighestLevelConfig = function (type) {
        var players = PlayerData.getPlayers();
        var playersNew = {};
        for (var k in players) {
            var itemdata = players[k];
            var id = itemdata.id;
            if (type == 1 && id && Number(id) >= 1001 && Number(id) <= 1050)
                playersNew[id] = (itemdata);
            if (type == 2 && id && Number(id) >= 2001 && Number(id) <= 2050)
                playersNew[id] = (itemdata);
            if (type == 3 && id && Number(id) >= 3001 && Number(id) <= 3050)
                playersNew[id] = (itemdata);
        }
        var max = -1;
        if (playersNew) {
            for (var k in playersNew) {
                var p = playersNew[k];
                max = Math.max(max, parseInt(p.id));
            }
        }
        var config = ConfigData.getPlayerById(max + "");
        return config;
    };
    return ShopConstant;
}());
__reflect(ShopConstant.prototype, "ShopConstant");
var StaticConstant = (function () {
    function StaticConstant() {
    }
    /** 1:小姐姐 2:小哥哥 1:小宠物 */
    StaticConstant.CurrentType = 1;
    return StaticConstant;
}());
__reflect(StaticConstant.prototype, "StaticConstant");
var checkInItem = (function (_super) {
    __extends(checkInItem, _super);
    function checkInItem() {
        return _super.call(this) || this;
    }
    Object.defineProperty(checkInItem.prototype, "index", {
        set: function (index) {
            this._index = index;
            this.updateUi();
        },
        enumerable: true,
        configurable: true
    });
    checkInItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    checkInItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    checkInItem.prototype.updateUi = function () {
        var data = SevenDaySignData.getSignData();
        //上次领取的时间
        var lastGetTime = data ? data.timestamp : 0;
        //已经领取的次数
        var count = data ? data.count : 0;
        //当前时间
        var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        this.finish.visible = false;
        if (this._index == count && DateTool.makeTime(timestamp) != DateTool.makeTime(lastGetTime)) {
            //可领取
            if (this.dateLabel) {
                this.dateLabel.text = "今 天";
                //this.dateLabel.textColor = 0xffffff;
            }
            //if(this.rewardValueLabel)this.rewardValueLabel.textColor = 0xC35A05;
        }
        else {
            if (this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
            }
            if (this.dateLabel) {
                this.dateLabel.text = "\u7B2C" + (this._index + 1) + "\u5929";
            }
            if (this._index < count) {
                //已领取
                this.finish.visible = true;
            }
            else {
                //时间未到
            }
        }
        if (this.rewardValueLabel) {
            //this.rewardValueLabel.text = `${config.rewardValue}h金币收益`;
            this.rewardValueLabel.text = "X " + (200 + this._index * 100);
        }
    };
    checkInItem.prototype.onTap = function (e) {
        var role = RoleData.getRole();
        role.jewel += (100 + this._index * 100);
        RoleData.putRole(role);
        ControllAlert.show("成功领取钻石" + (100 + this._index * 100));
        var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        SevenDaySignData.updateSign(timestamp, this._index + 1);
        this.updateUi();
    };
    checkInItem.prototype.dispose = function () {
        if (this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        }
    };
    return checkInItem;
}(eui.Component));
__reflect(checkInItem.prototype, "checkInItem", ["eui.UIComponent", "egret.DisplayObject"]);
window["checkInItem"] = checkInItem;
var checkInPanel = (function (_super) {
    __extends(checkInPanel, _super);
    function checkInPanel() {
        return _super.call(this) || this;
    }
    checkInPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    checkInPanel.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.refreshUI();
        if (this.doubleBtn)
            this.doubleBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDoubleTap, this);
        if (this.getBtn) {
            this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
            this.getBtn.visible = false;
            egret.setTimeout(function () {
                _this.getBtn.visible = true;
            }, this, 2000);
        }
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "checkin", "checkin1", ""));
        AdConstant.showBannerAd();
    };
    checkInPanel.prototype.refreshUI = function () {
        for (var i = 0; i < 7; i++) {
            var item = this.itemConstainer.getChildAt(i);
            if (item instanceof checkInItem) {
                item.index = i;
            }
        }
    };
    checkInPanel.prototype.onTap = function (e) {
        var data = SevenDaySignData.getSignData();
        var lastGetTime = data ? data.timestamp : 0;
        var count = data ? data.count : 0;
        var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        if (count >= 7 || DateTool.makeTime(lastGetTime) == DateTool.makeTime(timestamp)) {
            ControllAlert.show("已领取，明天再来");
            return;
        }
        this.lingqu(count, false);
    };
    checkInPanel.prototype.onDoubleTap = function (e) {
        var _this = this;
        var data = SevenDaySignData.getSignData();
        var lastGetTime = data ? data.timestamp : 0;
        var count = data ? data.count : 0;
        var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        if (count >= 7 || DateTool.makeTime(lastGetTime) == DateTool.makeTime(timestamp)) {
            ControllAlert.show("已领取，明天再来");
            return;
        }
        if (AppConfig.sevenSign_lingqu == "share") {
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    _this.lingqu(count, true);
                    DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "checkin", "checkin2", ""));
                }
            }, this);
        }
        else {
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    _this.lingqu(count, true);
                    DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "checkin", "checkin3", ""));
                }
            }, this);
        }
    };
    checkInPanel.prototype.lingqu = function (index, isDouble) {
        var role = RoleData.getRole();
        role.jewel += (200 + index * 100) * (isDouble ? 2 : 1);
        RoleData.putRole(role);
        ControllAlert.show("成功领取钻石" + (200 + index * 100) + (isDouble ? "x2" : ""));
        var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        SevenDaySignData.updateSign(timestamp, index + 1);
        var item = this.itemConstainer.getChildAt(index);
        if (item instanceof checkInItem) {
            item.index = index;
        }
        this.onClose();
    };
    checkInPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.doubleBtn)
            this.doubleBtn.dispose();
        if (this.getBtn)
            this.getBtn.dispose();
        _super.prototype.dispose.call(this);
    };
    return checkInPanel;
}(BaseAlertPanel));
__reflect(checkInPanel.prototype, "checkInPanel");
var lzd;
(function (lzd) {
    var display;
    (function (display_1) {
        var CreatPool = (function (_super) {
            __extends(CreatPool, _super);
            function CreatPool() {
                var _this = _super.call(this) || this;
                _this._mapPool = {};
                return _this;
            }
            CreatPool.prototype.createObject = function (type) {
                var pool = this._mapPool[type];
                if (!pool)
                    pool = [];
                if (pool.length > 0) {
                    return pool.shift();
                }
                this._mapPool[type] = pool;
                var display = new eui.Image();
                return display;
            };
            CreatPool.prototype.dispose = function (type, display) {
                var pool = this._mapPool[type];
                if (!pool)
                    pool = [];
                pool.push(display);
            };
            CreatPool.IMAGE = "IMAGE_POOL";
            return CreatPool;
        }(BaseSingle));
        display_1.CreatPool = CreatPool;
        __reflect(CreatPool.prototype, "lzd.display.CreatPool");
    })(display = lzd.display || (lzd.display = {}));
})(lzd || (lzd = {}));
var GuideData = (function () {
    function GuideData() {
    }
    GuideData.currentOpt = function () {
        // var opt = platform.getStorageSync("gameGuideOption");
        var opt = CacheData.getRAMData("gameGuideOption");
        return opt;
    };
    GuideData.putCurrentOpt = function (currentOpt) {
        // platform.setStorageSync("gameGuideOption",currentOpt);
        CacheData.saveRAMData("gameGuideOption", currentOpt);
    };
    GuideData.updateCurrentOpt = function () {
        var currentOpt = this.currentOpt();
        currentOpt++;
        if (currentOpt >= 5)
            currentOpt = 55;
        this.putCurrentOpt(currentOpt);
    };
    GuideData.putGuideTips = function (data) {
        CacheData.saveRAMData("guideTips", data);
    };
    GuideData.getGuideTips = function (option) {
        var data = CacheData.getRAMData("guideTips");
        var tips = "";
        if (!data || !data[option + ""]) {
            return tips;
        }
        return data[option + ""].tips;
    };
    return GuideData;
}());
__reflect(GuideData.prototype, "GuideData");
var GuideManager = (function (_super) {
    __extends(GuideManager, _super);
    function GuideManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideManager.prototype.show = function (obj, parent, tips, optRect, handActionType) {
        var _this = this;
        if (tips === void 0) { tips = null; }
        if (optRect === void 0) { optRect = null; }
        if (handActionType === void 0) { handActionType = 1; }
        // if(this._currentObj && this._currentObj.hashCode == obj.hashCode)return;
        if (!this._guidePanel) {
            this._guidePanel = new GuidePanel();
            LayerManager.getInstance().guideLayer.addChild(this._guidePanel);
        }
        this._currentObj = obj;
        this._currentParent = parent;
        this._currentPoint = new egret.Point(this._currentObj.x, this._currentObj.y);
        egret.setTimeout(function (e) {
            _this._guidePanel.visible = true;
            var point = _this._currentParent.localToGlobal(_this._currentObj.x, _this._currentObj.y);
            _this._currentObj.x = point.x;
            _this._currentObj.y = point.y;
            if (tips)
                _this.updatePos(tips, point);
            _this.createShou();
            _this._xiaoshou.x = point.x + _this._currentObj.width * 0.6 + _this._xiaoshou.width / 2 - _this._currentObj.anchorOffsetX;
            _this._xiaoshou.y = point.y + _this._currentObj.height * 0.5 + _this._xiaoshou.height / 2 - _this._currentObj.anchorOffsetY;
            _this.createShouAction(handActionType);
            // this._bitmap.rotation
            _this._guidePanel.addChildAt(_this._currentObj, 5);
            if (!optRect)
                optRect = new egret.Rectangle(point.x - _this._currentObj.anchorOffsetX - 10, point.y - _this._currentObj.anchorOffsetY - 10, _this._currentObj.width + 20, _this._currentObj.height + 20);
            else if (_this._currentObj) {
                optRect.x = point.x;
                optRect.y = point.y;
            }
            _this._guidePanel.setOptRect(optRect);
        }, this, 100);
    };
    GuideManager.prototype.createTips = function () {
        if (!this._tipsLabel) {
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes("xjj_backg_jinbi");
            bitmap.width = this._guidePanel.width * 0.8;
            bitmap.height = 120;
            bitmap.anchorOffsetX = bitmap.width / 2;
            bitmap.anchorOffsetY = 60;
            bitmap.scale9Grid = new egret.Rectangle(20, 20, 1, 1);
            this._bitmap = bitmap;
            this._tipsLabel = new egret.TextField();
            this._tipsLabel.width = this._guidePanel.width * 0.8 * 0.7;
            this._tipsLabel.height = 120;
            this._tipsLabel.anchorOffsetX = this._tipsLabel.width / 2;
            this._tipsLabel.anchorOffsetY = 60;
            this._tipsLabel.size = 30;
            // this._tipsLabel.bold = true;
            this._tipsLabel.textAlign = "center";
            this._tipsLabel.verticalAlign = "middle";
            this._tipsLabel.fontFamily = "Microsoft YaHei";
            this._tipsLabel.textColor = 0xffffff;
            this._tipsLabel.lineSpacing = 5;
            // this._tipsLabel.stroke = 2;
            // this._tipsLabel.strokeColor = 0x000000;
            if (this._guidePanel)
                this._guidePanel.addChild(this._bitmap);
            if (this._guidePanel)
                this._guidePanel.addChild(this._tipsLabel);
        }
        return this._tipsLabel;
    };
    GuideManager.prototype.createShouAction = function (handActionType) {
        if (this._xiaoshou) {
            this.handAction = egret.Tween.get(this._xiaoshou, { loop: true });
            if (handActionType == 1) {
                this.handAction.to({ rotation: -15, scaleY: 0.8, scaleX: 0.9 }, 500)
                    .to({ rotation: 0, scaleY: 1, scaleX: 1 }, 500)
                    .to({ rotation: -15, scaleY: 0.8, scaleX: 0.9 }, 500)
                    .to({ rotation: 0, scaleY: 1, scaleX: 1 }, 500).wait(1000);
            }
            else if (handActionType == 2) {
                this.handAction.to({ rotation: 0, x: this._xiaoshou.x + 150, scaleY: 1.2, scaleX: 1.2 }, 800)
                    .to({ rotation: -15, x: this._xiaoshou.x, scaleY: 1, scaleX: 1 }, 400).wait(1000);
            }
        }
    };
    GuideManager.prototype.createShou = function () {
        if (!this._xiaoshou) {
            var shou = new egret.Bitmap();
            shou.texture = RES.getRes("xjj_ic_shou");
            shou.anchorOffsetX = shou.width / 2;
            shou.anchorOffsetY = shou.height / 2;
            this._xiaoshou = shou;
            if (this._guidePanel)
                this._guidePanel.addChild(this._xiaoshou);
        }
        if (this.handAction)
            this.handAction.pause();
    };
    GuideManager.prototype.updatePos = function (tips, point) {
        var tipsLabel = this.createTips();
        tipsLabel.visible = true;
        var x = (point.x > this._guidePanel.width / 2) ? point.x : point.x + this._currentObj.width;
        var x = 320;
        var y = point.y - tipsLabel.height * 0.5;
        var y = point.y > this._guidePanel.height * 0.7 ? point.y - tipsLabel.height : point.y + tipsLabel.height * 0.5 + this._currentObj.height + 80;
        tipsLabel.x = x;
        tipsLabel.y = y;
        this._bitmap.x = x;
        this._bitmap.y = y;
        this._bitmap.visible = true;
        tipsLabel.text = tips;
    };
    GuideManager.prototype.hide = function () {
        if (this._guidePanel && this._guidePanel.parent) {
            this._guidePanel.visible = false;
            this._guidePanel.rectup.visible = false;
            this._guidePanel.rectdown.visible = false;
            this._guidePanel.rectleft.visible = false;
            this._guidePanel.rectright.visible = false;
            this._currentParent.addChild(this._currentObj);
            this._currentObj.x = this._currentPoint.x;
            this._currentObj.y = this._currentPoint.y;
        }
        if (this._tipsLabel)
            this._tipsLabel.visible = false;
        if (this._bitmap)
            this._bitmap.visible = false;
        if (this.handAction)
            this.handAction.pause();
    };
    return GuideManager;
}(BaseSingle));
__reflect(GuideManager.prototype, "GuideManager");
var GuidePanel = (function (_super) {
    __extends(GuidePanel, _super);
    function GuidePanel() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    GuidePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    GuidePanel.prototype.onClose = function () {
        console.log("关闭引导");
        // GuideData.putCurrentOpt(12);
        GuideData.putCurrentOpt(99);
        //引导结束
        DataCenter.packData();
        GuideManager.getInstance().hide();
    };
    GuidePanel.prototype.setOptRect = function (optRect) {
        if (!optRect)
            optRect = new egret.Rectangle(200, 200, 200, 100);
        this.rectup.x = 0;
        this.rectup.y = 0;
        this.rectup.width = this.width;
        this.rectup.height = optRect.y;
        this.rectup.visible = true;
        this.rectdown.x = 0;
        this.rectdown.y = optRect.y + optRect.height;
        this.rectdown.width = this.width;
        this.rectdown.height = this.height - this.rectdown.y;
        this.rectdown.visible = true;
        this.rectleft.x = 0;
        this.rectleft.y = optRect.y;
        this.rectleft.width = optRect.x;
        this.rectleft.height = optRect.height;
        this.rectleft.visible = true;
        this.rectright.x = optRect.x + optRect.width;
        this.rectright.y = optRect.y;
        this.rectright.width = this.width - this.rectright.x;
        this.rectright.height = optRect.height;
        this.rectright.visible = true;
    };
    GuidePanel.prototype.createView = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
        this.width = this.parent ? this.parent.width : 640;
        this.height = this.parent ? this.parent.height : 1136;
        // var w =this.parent?this.parent.width : 640;
        // var h = this.parent?this.parent.height : 1136;
        // this.anchorOffsetX = w * 1.5;
        // this.anchorOffsetY = h * 1.5;
        // var shape = new egret.Shape();
        // shape.graphics.beginFill(0x000000,0.5);
        // // shape.graphics.drawRect(0,0,w*3,h*3);
        // shape.graphics.drawRect(0,0,w,h);
        // shape.graphics.endFill();
        // this.addChild(shape);
        // var closeBtn = new egret.Bitmap();
        // closeBtn.texture = RES.getRes("wddx_bt_005");
        // closeBtn.scaleX = closeBtn.scaleY = 0.7;
        // closeBtn.scale9Grid = new egret.Rectangle(20,20,1,1);
        // closeBtn.touchEnabled = true;
        // closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        //     console.log("关闭引导");
        //     // GuideData.putCurrentOpt(12);
        //     GuideData.putCurrentOpt(99);
        // 	//引导结束
        // 	DataCenter.packData();
        // 	GuideManager.getInstance().hide();
        // },this);
        // this.addChild(closeBtn);
    };
    return GuidePanel;
}(eui.Component));
__reflect(GuidePanel.prototype, "GuidePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var InviteItem = (function (_super) {
    __extends(InviteItem, _super);
    function InviteItem(process) {
        var _this = _super.call(this) || this;
        _this.process = process;
        return _this;
    }
    InviteItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    InviteItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initUI();
        this.addImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
    };
    InviteItem.prototype.onShare = function () {
        ShareConstant.shareToGroup(function (result) {
            ControllAlert.show("好友点击链接，即可领取奖励");
        }, this);
    };
    InviteItem.prototype.initUI = function () {
        var _this = this;
        var inviteData = InviteData.getInviteList();
        if (this.friendName)
            this.friendName.text = "邀请第" + this.process + "位好友";
        if (!inviteData)
            inviteData = [];
        if (this.inviteBtn) {
            if (this.process <= inviteData.length) {
                this.inviteBtn.label = "领取";
                var finsh = InviteData.getInviteTaskfinishByType("1");
                var finshcount = finsh && finsh.count ? finsh.count : 0;
                if (finshcount >= this.process) {
                    this.inviteBtn.setEnable(false);
                    this.inviteBtn.label = "已领取";
                }
            }
        }
        //更新头像
        if (inviteData.length > this.process - 1) {
            var itemdata = inviteData[this.process - 1];
            var avatar = itemdata.avatar;
            if (this.friendName)
                this.friendName.text = itemdata.nick; //更新好友昵称
            RES.getResByUrl(avatar, function (data) {
                if (data)
                    _this.icon.texture = data;
            }, this, "image");
        }
        if (this.inviteBtn)
            this.inviteBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onInviteBtn, this);
    };
    InviteItem.prototype.onInviteBtn = function () {
        if (this.inviteBtn.label == "邀请") {
            this.onShare();
            return;
        }
        //增加200钻石
        var role = RoleData.getRole();
        role.jewel += 200;
        RoleData.putRole(role);
        ControllAlert.show("成功领取200钻石");
        InviteData.updateInviteTaskFinishId("1");
        this.initUI();
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "lingzuan", "lingzuan2", ""));
    };
    InviteItem.prototype.dispose = function () {
        if (this.addImg)
            this.addImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        if (this.inviteBtn)
            this.inviteBtn.dispose();
    };
    return InviteItem;
}(eui.Component));
__reflect(InviteItem.prototype, "InviteItem", ["eui.UIComponent", "egret.DisplayObject"]);
var InvitePanel = (function (_super) {
    __extends(InvitePanel, _super);
    function InvitePanel() {
        return _super.call(this) || this;
    }
    InvitePanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    InvitePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        AdConstant.showBannerAd();
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        var thisObj = this;
        GameApi.inviteList("3", function (data) {
            var inviteDataNew = [];
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    var itemdata = data[i];
                    var avatar = itemdata.avatar;
                    if (avatar && avatar != "")
                        inviteDataNew.push(itemdata);
                }
            }
            InviteData.putInviteList(inviteDataNew);
            thisObj.initUI();
        });
    };
    InvitePanel.prototype.initUI = function () {
        for (var i = 1; i <= 20; i++) {
            this.constainer.addChild(new InviteItem(i));
        }
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "lingzuan", "lingzuan1", ""));
    };
    InvitePanel.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, -1);
    };
    InvitePanel.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.closeBtn)
            this.closeBtn.dispose();
    };
    return InvitePanel;
}(eui.Component));
__reflect(InvitePanel.prototype, "InvitePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var RankPanel = (function (_super) {
    __extends(RankPanel, _super);
    function RankPanel() {
        var _this = _super.call(this) || this;
        _this.shareTicket = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
        // DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"share","sence1",""));
    }
    RankPanel.prototype.addToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        this.width = this.parent.width;
        this.height = this.parent.height;
    };
    RankPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        platform.hideBannerAd();
        this.initTypeBtn();
        if (this.rankCloseBtn)
            this.rankCloseBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        if (this.shareToGroupBtn)
            this.shareToGroupBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareToGroupClick, this);
    };
    RankPanel.prototype.initTypeBtn = function () {
        this.initCanvas();
        this.initRank();
    };
    RankPanel.prototype.setIconStatus = function (typeBtn, status) {
        if (status === void 0) { status = true; }
        var label = typeBtn.getChildAt(2);
        typeBtn.setStatus(status);
        label.textColor = status ? 0x45403C : 0xFFEEE3;
    };
    RankPanel.prototype.initRank = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rankType;
            return __generator(this, function (_a) {
                console.log("shareTicket:", this.shareTicket);
                rankType = this.shareTicket ? 2 : 1;
                this.rankTitle.text = rankType == 2 ? "群友排行榜" : "好友排行榜";
                this.sendToContext(true, rankType, this.shareTicket);
                return [2 /*return*/];
            });
        });
    };
    RankPanel.prototype.initCanvas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bitmapdata, texture;
            return __generator(this, function (_a) {
                if (!window["sharedCanvas"])
                    return [2 /*return*/];
                bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
                bitmapdata.$deleteSource = false;
                texture = new egret.Texture();
                texture._setBitmapData(bitmapdata);
                this.bitmap = new egret.Bitmap(texture);
                this.bitmap.width = this.stage.stageWidth;
                this.bitmap.height = this.stage.stageHeight;
                this.addChild(this.bitmap);
                egret.startTick(function (timeStarmp) {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
                return [2 /*return*/];
            });
        });
    };
    RankPanel.prototype.sendToContext = function (isDisplay, rankType, shareTicket) {
        return __awaiter(this, void 0, void 0, function () {
            var openDataContext, msg;
            return __generator(this, function (_a) {
                openDataContext = platform.getOpenDataContext();
                msg = { isDisplay: isDisplay, rankType: rankType, shareTicket: shareTicket, stageWidth: this.bitmap.width, stageHeight: this.bitmap.height, selfOpenId: AccountData.getOpenId() };
                openDataContext.postMessage(msg);
                return [2 /*return*/];
            });
        });
    };
    RankPanel.prototype.onShareToGroupClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var share;
            return __generator(this, function (_a) {
                share = ShareConstant.randomTitleAndUrl();
                // platform.shareAppMessage('深度排行榜,点击查看',share.imageUrl,"checkRank=1&",(res)=>{
                // 	ControllAlert.show("点击分享卡片查看排行");
                // },null);
                this.onClose();
                return [2 /*return*/];
            });
        });
    };
    RankPanel.prototype.onClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendToContext(false, 1, null)];
                    case 1:
                        _a.sent();
                        this.dispose();
                        return [2 /*return*/];
                }
            });
        });
    };
    RankPanel.prototype.dispose = function () {
        this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
        if (this.rankCloseBtn)
            this.rankCloseBtn.dispose();
        if (this.shareToGroupBtn)
            this.shareToGroupBtn.dispose();
        if (this.parent)
            this.parent.removeChild(this);
    };
    return RankPanel;
}(eui.Component));
__reflect(RankPanel.prototype, "RankPanel", ["eui.UIComponent", "egret.DisplayObject"]);
/**
 * 游戏主逻辑UI
 * */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    //public hitSpeedBtn: MyButton;
    function GamePanel() {
        var _this = _super.call(this) || this;
        _this.buildCount = 1;
        _this.gold = new Decimal(100000);
        _this.secgold = new Decimal(0);
        _this.jewel = new Decimal(1000);
        _this.touchStatus = false; //当前触摸状态，按下时，值为true
        _this.speedUp = 1;
        _this.xjjCount = 12;
        _this.currentTime = 0;
        _this.lastTime = 0;
        _this.boxLastTime = 0;
        _this.boxCurrentTime = 0;
        _this.boxPosLastTime = 0;
        _this.randomBoxState = true;
        _this.boxTime = 61;
        _this.currentframe = 0;
        return _this;
    }
    GamePanel.prototype.initialize = function () {
        this.creatBtn_gold = this.creatBtn.getChildAt(2);
        this.creatBtn_level = this.creatBtn.getChildAt(3);
        //this.boxBtn.visible = false;
        this.initHeSuanGold();
        this.initXjj();
        this.initTypeBtn();
        this.start();
        this.initLixianPanel();
        this.stage.addEventListener(GameEvent.GAME_SHOPBUYXJJ_EVENT, this.onShopBuyXjj, this);
        this.stage.addEventListener(GameEvent.GAME_SPEEDUP_EVENT, this.onSpeedUp, this);
        if (this.backBtn)
            this.backBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBackBtn, this);
        if (this.phbBtn)
            this.phbBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onPhbBtn, this);
        if (this.shopBtn)
            this.shopBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShopBtn, this);
        if (this.howBtn)
            this.howBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHowBtn, this);
        if (this.lingzuanBtn)
            this.lingzuanBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onInviteBtn, this);
        if (this.creatBtn)
            this.creatBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCreatBtn, this);
        if (this.speedBtn)
            this.speedBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onSpeedBtn, this);
        //if (this.hitSpeedBtn) this.hitSpeedBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHitSpeedBtn, this);
        if (this.zhuanpanBtn)
            this.zhuanpanBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onZhuanpanBtn, this);
        if (this.zhuanpanBtn) {
            var zhuanImg = this.zhuanpanBtn.getChildAt(0);
            if (zhuanImg)
                egret.Tween.get(zhuanImg, { loop: true }).wait(500).to({ rotation: 360 }, 650, egret.Ease.sineIn);
        }
        //签到   
        if (this.checkInBtn) {
            this.checkInBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCheckInBtn, this);
            //判断今日是否领取过签到奖励
            var data = SevenDaySignData.getSignData();
            //已经领取的次数
            var count = data ? data.count : 0;
            var lastGetTime = data ? data.timestamp : 0;
            var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
            if (count >= 7 && DateTool.makeTime(lastGetTime) != DateTool.makeTime(timestamp)) {
                //七天之后，重置签到
                SevenDaySignData.putSignData(null);
            }
        }
        if (this.randomBoxBtn) {
            egret.Tween.get(this.randomBoxBtn, { loop: true }).to({ rotation: 30 }, 200).to({ rotation: -30 }, 400).to({ rotation: 0 }, 200).wait(1500);
            this.randomBoxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRandomBoxBtn, this);
        }
        //if (this.boxBtn) this.boxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBoxBtn, this);
        if (this.xjjContainer)
            this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
        if (this.xjjContainer)
            this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
        if (this.xjjContainer)
            this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_END, this.onJJBtnEnd, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrameGold, this);
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        this.currentTime = timestamp;
        //获取小程序启动信息，判断是否进入排行榜
        WechatManager.getInstance().doLunchOption();
        WechatManager.getInstance().doOnShow();
        //更新微信云托管数据
        var role = RoleData.getRole();
        platform.setUserCloudStorage([{ 'key': 'gold', 'value': role ? StringUtil.decimalFormat(role.gold) + "" : "0" }]);
        this.refreshGuide();
        this.guideXjj();
        this.stage.maxTouches = 1;
    };
    GamePanel.prototype.onTick = function (timeStamp) {
        /*var begin =egret.getTimer().valueOf();*/
        var boxArr = [];
        this.currentTime += (timeStamp - this.lastTime);
        this.lastTime = timeStamp;
        this.boxCurrentTime += (timeStamp - this.boxLastTime);
        this.boxLastTime = timeStamp;
        var positions_current = PositionData.getPositionsById(StaticConstant.CurrentType);
        var shouyiValue = GameConstant.getAllShouYiValue();
        this.secgold = shouyiValue;
        for (var posid in positions_current) {
            var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
            if (position.playerid == "") {
                boxArr.push(Number(posid));
                continue;
            }
            // var player = PlayerData.getPlayerById(position.playerid);
            var config = ConfigData.getPlayerById(position.playerid);
            var XjjModel = this.xjjContainer.getChildAt(Number(position.posid));
            if (XjjModel.type && (position.lastTime + (Number(config.shengchantime) / this.speedUp)) < this.currentTime) {
                //计算收益
                var role = RoleData.getRole();
                role.gold = role.gold.add(config.addgoldvalue);
                RoleData.putRole(role);
                // this.gold = this.gold.add(config.addgoldvalue);
                //播放金币总数动画
                this.totalGoldAnim();
                //播放人物变大缩小动画
                XjjModel.animScale();
                //播放收益值动画
                XjjModel.animShouyi();
                //更新上次时间
                position.lastTime = this.currentTime;
                PositionData.updatePosition(position.posid, position, StaticConstant.CurrentType);
            }
            /*			if (config.lixianshouyi) {
                            shouyiValue = shouyiValue.add(config.lixianshouyi);
                            this.secgold = shouyiValue;
                        }*/
        }
        //30s产生一个宝箱
        // if (boxArr.length >= 1 && !this.boxBtn.visible && (this.boxPosLastTime + 30000) < this.boxCurrentTime) {
        // 	var randomBoxIndex = RandomUitl.randomInt(0, boxArr.length - 1);
        // 	this.randomBoxPosid = boxArr[randomBoxIndex];
        // 	this.XjjModel_box = this.xjjContainer.getChildAt(this.randomBoxPosid) as XjjModel;
        // 	this.boxBtn.x = this.XjjModel_box.x + 45;
        // 	this.boxBtn.y = this.XjjModel_box.y + 95;
        // 	this.boxBtn.visible = true;
        // 	var position = PositionData.getPositionById(this.randomBoxPosid, StaticConstant.CurrentType);
        // 	position.isHasBox = true;
        // 	PositionData.updatePosition(this.randomBoxPosid, position, StaticConstant.CurrentType);
        // 	console.log("随机一个位置" + this.randomBoxPosid);
        // }
        /*	var end = egret.getTimer().valueOf();
            console.log("------------:"+(end-begin));*/
        return false;
    };
    GamePanel.prototype.onBoxBtn = function () {
        var minLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).minBuyLevel;
        var minLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, minLevel); //获取可购买最低等级小姐姐id
        var boxPoaition = PositionData.getPositionById(this.randomBoxPosid + "", StaticConstant.CurrentType); //获取宝箱位置的小姐姐数据
        this.XjjModel_box = this.xjjContainer.getChildAt(this.randomBoxPosid);
        boxPoaition.playerid = minLevelId;
        //boxPoaition.isHasBox = false;
        PositionData.updatePosition(this.randomBoxPosid + "", boxPoaition, StaticConstant.CurrentType);
        this.XjjModel_box.type = boxPoaition.playerid;
        this.XjjModel_box.visible = true;
        //this.boxBtn.visible = false;
        this.boxPosLastTime = this.boxCurrentTime;
    };
    // public onHitSpeedBtn() {
    // 	var positions_current = PositionData.getPositionsById(StaticConstant.CurrentType);
    // 	for (var posid in positions_current) {
    // 		var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
    // 		if (position.playerid == "") continue;
    // 		var config = ConfigData.getPlayerById(position.playerid);
    // 		var XjjModel = this.xjjContainer.getChildAt(Number(position.posid)) as XjjModel;
    // 		if (XjjModel.type) {
    // 			//计算收益
    // 			var role: Role = RoleData.getRole();
    // 			role.gold = role.gold.add(config.addgoldvalue);
    // 			RoleData.putRole(role);
    // 			//播放飘金币动画
    // 			XjjModel.animGold();
    // 		}
    // 	}
    // }
    GamePanel.prototype.start = function () {
        egret.startTick(this.onTick, this);
    };
    GamePanel.prototype.stop = function () {
        egret.stopTick(this.onTick, this);
    };
    GamePanel.prototype.initLixianPanel = function () {
        var offlineTime = AccountData.getOffLine(); //获取离线时间
        var shouyiValue = GameConstant.getAllShouYiValue(); //离线收益
        /*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
                for (var posid in positions) {
                    var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
                    if (position.playerid == "") continue;
                    var config = ConfigData.getPlayerById(position.playerid);
                    shouyiValue = shouyiValue.add(config.lixianshouyi);
                }*/
        var guide = GuideData.currentOpt();
        if (shouyiValue.comparedTo(0) == 1 && offlineTime >= 10 && guide >= 5) {
            Alert.alert(new LixianPanel());
        }
    };
    GamePanel.prototype.refreshGuide = function () {
        var guide = GuideData.currentOpt();
        if (guide == 1) {
            GuideManager.getInstance().show(this.creatBtn, this.creatBtn.parent, "点击招募你的第一个角色");
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "guide", "guidestart", ""));
        }
        if (guide == 3) {
            GuideManager.getInstance().show(this.creatBtn, this.creatBtn.parent, "点击这里可以继续招募小姐姐");
        }
        if (guide == 4) {
            GuideManager.getInstance().show(this.creatBtn, this.creatBtn.parent, "小姐姐越多赚钱越多");
        }
    };
    GamePanel.prototype.guideXjj = function () {
        var guide = GuideData.currentOpt();
        if (guide == 2) {
            var XjjModel = this.xjjContainer.getChildAt(0); //是哪个位置的图
            var rect = new egret.Rectangle(XjjModel.x, XjjModel.y, XjjModel.width * 2.4, XjjModel.height * 1.2);
            GuideManager.getInstance().show(XjjModel, XjjModel.parent, "拖动合成更漂亮的小姐姐", rect, 2);
            XjjModel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
        }
    };
    GamePanel.prototype.onGuideXjjTouch = function (e) {
        //把坐标转换到xjjConstainer
        // var point = this.xjjContainer.globalToLocal(e.stageX,e.stageY);
        // this.onJJBtnBegin(new egret.TouchEvent("",true,true,point.x,point.y));
        this.onJJBtnBegin(e);
    };
    GamePanel.prototype.onFrameGold = function () {
        this.currentframe++;
        if (this.currentframe >= 60) {
            this.currentframe = 0;
            //过了一秒
            if (this.boxTime > 0 && this.boxTime <= 60)
                this.boxTime--;
        }
        var role = RoleData.getRole();
        this.totalGold.text = StringUtil.decimalFormat(role.gold); //总金币数量显示
        this.totalDiamond.text = StringUtil.goldNumber2String(role.jewel); //总钻石数量显示	
        this.secGold.text = StringUtil.decimalFormat(this.secgold) + "/秒"; //每秒离线收益
        //随机宝箱倒计时
        var data = RandomBoxData.getRandomBox(); //获取次数
        if (data && data.count >= 50) {
            this.randomBoxBtn.visible = false;
            this.timeLabel.visible = false;
        }
        else {
            this.randomBoxBtn.visible = true;
            this.timeLabel.visible = true;
            if (this.boxTime > 60) {
                this.boxTime = 60;
            }
            if (this.boxTime == 0) {
                this.timeLabel.text = "可领取";
            }
            else
                this.timeLabel.text = "00:00:" + (this.boxTime >= 10 ? "" + this.boxTime : ("0" + this.boxTime));
            if (this.boxTime > 0 && this.boxTime <= 60) {
                // this.randomBoxBtn.setEnable(false);
            }
            else {
                this.randomBoxBtn.setEnable(true);
            }
        }
    };
    GamePanel.prototype.initHeSuanGold = function () {
        //获取当前最合算小姐姐购买的金币和等级
        var hesuanLevel = ShopConstant.buyWhichLevel();
        this.hesuanLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, hesuanLevel + "");
        var hesuanLevelPlayer = PlayerData.getPlayerById(this.hesuanLevelId);
        this.hesuanLevelGold = RoleData.getBuildGold(this.hesuanLevelId, hesuanLevelPlayer.buyCount_gold);
        this.creatBtn_gold.text = StringUtil.decimalFormat(this.hesuanLevelGold); //显示造姐姐金币数量
        this.creatBtn_level.text = "LV." + hesuanLevel; //显示造姐姐的等级
    };
    //显示小姐姐、小哥哥、小宠物
    GamePanel.prototype.initXjj = function () {
        var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
        for (var posid in positions) {
            var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
            var XjjModel = this.xjjContainer.getChildAt(Number(position.posid)); //是哪个位置的图
            //if (XjjModel.type) continue;
            XjjModel.type = position.playerid;
            // if (position.isHasBox) {
            // 	this.boxBtn.x = XjjModel.x + 45;
            // 	this.boxBtn.y = XjjModel.y + 95;
            // 	this.boxBtn.visible = true;
            // 	this.randomBoxPosid = Number(position.posid);
            // }
            if (XjjModel.type == "")
                XjjModel.visible = false;
            else
                XjjModel.visible = true;
        }
    };
    GamePanel.prototype.initTypeBtn = function () {
        for (var i = 1; i <= 3; i++) {
            var typeBtn = this["typeBtn" + i];
            typeBtn.name = i.toString();
            typeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTypeBtn, this);
        }
        this.setIconStatus();
    };
    GamePanel.prototype.onTypeBtn = function (e) {
        var target = e.currentTarget;
        if (target.name) {
            this.setIconStatus(parseInt(target.name), true);
        }
    };
    GamePanel.prototype.setIconStatus = function (j, status) {
        if (j === void 0) { j = 1; }
        if (status === void 0) { status = true; }
        var maxLevel = -1;
        var config = null;
        if (j == 2) {
            config = ShopConstant.getHighestLevelConfig(1); //获取小姐姐最高等级
            if (config)
                maxLevel = config.level;
            if (maxLevel == -1 || maxLevel < 35) {
                ControllAlert.show("小姐姐等级达到35级后开启");
                return;
            }
            else {
                var positions_xgg = PositionData.getPositionsById(2);
                if (!positions_xgg) {
                    for (var i = 0; i < 12; i++) {
                        var position = new lzd.vo.Position();
                        position.posid = i + "";
                        PositionData.updatePosition(position.posid, position, 2);
                    }
                    var position1 = PositionData.getPositionById("0", 2);
                    position1.playerid = "2001";
                    PositionData.updatePosition("0", position1, 2);
                    var player = new lzd.vo.Player();
                    player.id = "2001";
                    PlayerData.updatePlayer(player.id, player);
                }
            }
        }
        if (j == 3) {
            config = ShopConstant.getHighestLevelConfig(2); //获取小哥哥最高等级
            if (config)
                maxLevel = config.level;
            if (maxLevel == -1 || maxLevel < 35) {
                ControllAlert.show("小哥哥等级达到35级后开启");
                return;
            }
            else {
                var positions_xcw = PositionData.getPositionsById(3);
                if (!positions_xcw) {
                    for (var i = 0; i < 12; i++) {
                        var position = new lzd.vo.Position();
                        position.posid = i + "";
                        PositionData.updatePosition(position.posid, position, 3);
                    }
                    var position1 = PositionData.getPositionById("0", 3);
                    position1.playerid = "3001";
                    PositionData.updatePosition("0", position1, 3);
                    var player = new lzd.vo.Player();
                    player.id = "3001";
                    PlayerData.updatePlayer(player.id, player);
                }
            }
        }
        for (var i = 1; i <= 3; i++) {
            var typeBtn = this["typeBtn" + i];
            if (j == i) {
                for (var k = 1; k <= 3; k++) {
                    if (j == k) {
                        this.updateTypeGroupData(j);
                    }
                    else {
                    }
                }
                typeBtn.setStatus(status);
            }
            else {
                typeBtn.setStatus(!status);
            }
        }
    };
    GamePanel.prototype.updateTypeGroupData = function (j) {
        if (j === void 0) { j = 1; }
        StaticConstant.CurrentType = j;
        this.initXjj();
        this.initHeSuanGold();
    };
    GamePanel.prototype.onBackBtn = function (e) {
        BasePanel.currentPanel.gotoPanel(new StartPanel());
    };
    GamePanel.prototype.onPhbBtn = function (e) {
        var rankPanel = new RankPanel();
        rankPanel.shareTicket = e.data ? e.data.shareTicket : null;
        Alert.alert(rankPanel);
    };
    //public createCount: number = 0;
    //点击creat创建小姐姐
    GamePanel.prototype.onCreatBtn = function () {
        var isCreated = false;
        var len = this.xjjContainer.numChildren;
        var hesuanLevelPlayer = PlayerData.getPlayerById(this.hesuanLevelId);
        var role = RoleData.getRole();
        if (role.gold.minus(this.hesuanLevelGold) < new Decimal(0)) {
            // ControllAlert.show("金币不足了，看点广告吧"); 
            Alert.alert(new NotEnoughRewardPanel(2)); //金币不足
            return;
        }
        for (var i = 0; i < len; i++) {
            var obj = this.xjjContainer.getChildAt(i);
            var position = PositionData.getPositionById(i + "", StaticConstant.CurrentType);
            if (obj instanceof XjjModel && obj.id == "" && !position.isHasBox) {
                role.gold = role.gold.minus(this.hesuanLevelGold);
                RoleData.putRole(role);
                hesuanLevelPlayer.buyCount_gold++; //购买次数增加1
                PlayerData.updatePlayer(this.hesuanLevelId, hesuanLevelPlayer);
                this.creatXjj(i, obj, this.hesuanLevelId);
                isCreated = true;
                var guide = GuideData.currentOpt();
                if (guide == 1 || guide == 3 || guide == 4) {
                    GuideData.updateCurrentOpt();
                    GuideManager.getInstance().hide();
                    this.refreshGuide();
                    this.guideXjj();
                }
                return;
            }
        }
        if (!isCreated) {
            ControllAlert.show("没有更多位置了,右上角可回收！");
        }
    };
    //开始点击小姐姐
    GamePanel.prototype.onJJBtnBegin = function (evt) {
        var _this = this;
        if (evt.currentTarget instanceof XjjModel) {
            evt.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
            this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
            GuideManager.getInstance().hide();
            this.xjjContainer.setChildIndex(evt.currentTarget, 0);
            //新手引导
            this.touchStatus = true;
            //console.log("点到了", evt.currentTarget.type)
            evt.currentTarget.setGray();
            if (!this.currentSelect)
                this.currentSelect = new eui.Image();
            this.currentSelect.source = evt.currentTarget.xjjImg.source;
            this.currentSelect.width = 140;
            this.currentSelect.height = 190;
            this.currentImgX = evt.currentTarget.x;
            this.currentImgY = evt.currentTarget.y;
            this.currentPos = 0;
            this.currentObj = evt.currentTarget;
            //console.log("currentPos:" + this.currentPos);
            var imgPos = this.xjjContainer.getChildIndex(this.currentSelect);
            this.currentImgId = evt.currentTarget.type;
            this.xjjContainer.addChild(this.currentSelect);
            this.currentSelect.visible = true;
            var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
            this.currentSelect.x = point.x;
            this.currentSelect.y = point.y;
            this.currentSelect.anchorOffsetX = evt.currentTarget.xjjImg.width / 2;
            this.currentSelect.anchorOffsetY = evt.currentTarget.xjjImg.height / 2;
        }
        else {
            this.xjjContainer.$children.forEach(function (obj) {
                if (obj instanceof XjjModel) {
                    if (obj.hitTestPoint(evt.stageX, evt.stageY) && obj.visible) {
                        _this.touchStatus = true;
                        //console.log("点到了", obj.type)
                        obj.setGray();
                        if (!_this.currentSelect)
                            _this.currentSelect = new eui.Image();
                        _this.currentSelect.source = obj.xjjImg.source;
                        _this.currentSelect.width = 140;
                        _this.currentSelect.height = 190;
                        _this.currentImgX = obj.x;
                        _this.currentImgY = obj.y;
                        _this.currentPos = _this.xjjContainer.getChildIndex(obj);
                        _this.currentObj = obj;
                        //console.log("currentPos:" + this.currentPos);
                        var imgPos = _this.xjjContainer.getChildIndex(_this.currentSelect);
                        _this.currentImgId = obj.type;
                        _this.xjjContainer.addChild(_this.currentSelect);
                        _this.currentSelect.visible = true;
                        var point = _this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
                        _this.currentSelect.x = point.x;
                        _this.currentSelect.y = point.y;
                        _this.currentSelect.anchorOffsetX = obj.xjjImg.width / 2;
                        _this.currentSelect.anchorOffsetY = obj.xjjImg.height / 2;
                    }
                }
            });
        }
    };
    //移动过程
    GamePanel.prototype.onMouseMove = function (evt) {
        if (this.touchStatus) {
            var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
            this.currentSelect.x = point.x;
            this.currentSelect.y = point.y;
        }
    };
    //移动结束事件
    GamePanel.prototype.onJJBtnEnd = function (evt) {
        var _this = this;
        if (this.touchStatus) {
            var len = this.xjjContainer.numChildren;
            var ishitTest = false;
            for (var i = 0; i < len; i++) {
                var obj = this.xjjContainer.getChildAt(i);
                if (obj instanceof XjjModel) {
                    var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
                    if (obj.hitTest(point)) {
                        ishitTest = true;
                        //碰到原位置小姐姐
                        var endPos = i;
                        //console.log("endPos:" + endPos);
                        var endImgId = obj.type;
                        //console.log("endImgId:" + endImgId + ";this.currentImgId:" + this.currentImgId);
                        if (this.currentPos == endPos) {
                            //console.log("碰到原位置小姐姐");
                            egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 100, egret.Ease.backIn)
                                .call(function (o) {
                                _this.currentObj.clearGray();
                                _this.currentSelect.visible = false;
                            }, this, [this.currentObj]);
                        } //碰到别的位置
                        else if (this.currentPos != endPos) {
                            //console.log("碰到了不同位置");
                            //如果碰到的地方是空的，那就代替空位置
                            var boxPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); //目标小姐姐的数据	
                            if (boxPosition.isHasBox) {
                                egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call(function (o) {
                                    _this.currentObj.clearGray();
                                    _this.currentSelect.visible = false;
                                }, this, [this.currentObj]);
                                return;
                            }
                            if (!obj.visible && !boxPosition.isHasBox) {
                                var guide = GuideData.currentOpt();
                                if (guide == 2)
                                    return;
                                //console.log("这地方是空的！");
                                // 点击的妹子数据给到终点地方，  点的地方数据变初始并且隐藏
                                var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType); //获取选中图片的小姐姐数据
                                var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); //目标小姐姐的数据	
                                endPosition.playerid = currentPosition.playerid; //将数据给到目标位置
                                PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType);
                                currentPosition.playerid = ""; //选中图片位置的数据重置
                                PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);
                                // obj.id = currentPosition.playerid ;
                                // obj.$updateModelVeiw(); 
                                obj.type = endPosition.playerid;
                                this.currentObj.visible = false;
                                this.currentObj.id = "";
                                obj.visible = true;
                                this.currentSelect.visible = false;
                            } //如果两个图片一样———》合体
                            else if (this.currentImgId == endImgId) {
                                //console.log("合体");
                                SoundManager.playSound("hecheng");
                                var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType); //获取选中图片的小姐姐数据
                                if (currentPosition.playerid == "1038" || currentPosition.playerid == "2038" || currentPosition.playerid == "3033") {
                                    egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call(function (o) {
                                        _this.currentObj.clearGray();
                                        _this.currentSelect.visible = false;
                                    }, this, [this.currentObj]);
                                    ControllAlert.show("已达最高等级，无法再次突破！");
                                    return;
                                }
                                currentPosition.playerid = ""; //选中图片位置的数据重置
                                PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);
                                var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); //获取目标位置的小姐姐数据
                                endPosition.playerid = (Number(endPosition.playerid) + 1) + "";
                                PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType);
                                //如果合到新的 
                                var player = PlayerData.getPlayerById(endPosition.playerid);
                                var isJieSuo = false;
                                if (!player) {
                                    isJieSuo = true;
                                    player = new lzd.vo.Player();
                                    player.id = endPosition.playerid;
                                    PlayerData.updatePlayer(player.id, player);
                                }
                                //动画
                                this.hechengAnim(obj.leftImg, obj.rightImg, obj.xjjImg, obj.x, obj.y, obj, endPosition.playerid, isJieSuo);
                            } //如果两个图片不一样———》交换位置，数据互换
                            else if (this.currentImgId != endImgId) {
                                //console.log("两个小姐姐不一样");
                                this.currentObj.clearGray();
                                this.currentSelect.visible = false;
                                var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType); //选中小姐姐的数据
                                var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); //目标小姐姐的数据	
                                var zhuanyi = currentPosition.playerid;
                                currentPosition.playerid = endPosition.playerid;
                                endPosition.playerid = zhuanyi;
                                PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType); //将选中数据给到目标位置
                                PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType); //将碰到的小姐姐数据给到选中位置
                                obj.type = endPosition.playerid;
                                this.currentObj.type = currentPosition.playerid;
                            }
                        }
                        break;
                    } //处理回收、卖钱
                    else if (this.huishou.hitTestPoint(evt.stageX, evt.stageY)) {
                        ishitTest = true;
                        this.currentSelect.scaleX = this.currentSelect.scaleY = 1.3;
                        egret.Tween.get(this.currentSelect).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.backIn).call(function (o) {
                            var currentPosition = PositionData.getPositionById(_this.currentPos + "", StaticConstant.CurrentType);
                            var config = ConfigData.getPlayerById(currentPosition.playerid);
                            var role = RoleData.getRole();
                            currentPosition.playerid = "";
                            PositionData.updatePosition(_this.currentPos + "", currentPosition, StaticConstant.CurrentType);
                            role.gold = role.gold.add(config.sellvalue);
                            RoleData.putRole(role);
                            _this.totalGoldAnim();
                            _this.currentObj.clearGray();
                            _this.currentObj.id = "";
                            _this.currentSelect.visible = false;
                            _this.currentObj.visible = false;
                            ControllAlert.show("回收" + StringUtil.decimalFormat(new Decimal(Number(config.sellvalue))));
                        }, this, [this.currentObj]);
                        break;
                    }
                }
            }
            if (!ishitTest) {
                //没碰到人和回收的地方
                //console.log("回去一下");
                egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call(function (o) {
                    _this.currentObj.clearGray();
                    _this.currentSelect.visible = false;
                }, this, [this.currentObj]);
            }
        }
        this.touchStatus = false;
    };
    // public creatImg: eui.Image;//新造一个小姐姐的图
    //主界面创建小姐姐
    GamePanel.prototype.creatXjj = function (i, obj, hesuanLevelId) {
        this.initHeSuanGold();
        var emptyPoaition = PositionData.getPositionById(i + "", StaticConstant.CurrentType); //获取空位置的小姐姐数据
        emptyPoaition.playerid = hesuanLevelId;
        PositionData.updatePosition(i + "", emptyPoaition, StaticConstant.CurrentType);
        /*		obj.id = emptyPoaition.playerid;
                obj.$updateModelVeiw();*/
        obj.type = emptyPoaition.playerid;
        //动画
        var creatImg = lzd.display.CreatPool.getInstance().createObject(lzd.display.CreatPool.IMAGE);
        creatImg.source = obj.xjjImg.source;
        creatImg.width = 140;
        creatImg.height = 190;
        creatImg.x = (this.middleGroup.width - creatImg.width) / 2;
        creatImg.y = this.middleGroup.height - creatImg.height;
        this.middleGroup.addChild(creatImg);
        creatImg.visible = true;
        egret.Tween.get(creatImg).to({ x: obj.x + 2, y: obj.y - 25 }, 400, egret.Ease.quartOut).call(function (o, c) {
            o.visible = true;
            // c.visible = false;
            c.parent.removeChild(c);
            lzd.display.CreatPool.getInstance().dispose(lzd.display.CreatPool.IMAGE, c);
        }, this, [obj, creatImg]);
    };
    //从商店创建小姐姐
    GamePanel.prototype.creatShopXjj = function (i, xjjID, obj) {
        var emptyPoaition = PositionData.getPositionById(i + "", StaticConstant.CurrentType); //获取空位置的小姐姐数据
        emptyPoaition.playerid = xjjID + "";
        PositionData.updatePosition(i + "", emptyPoaition, StaticConstant.CurrentType);
        /*		obj.id = emptyPoaition.playerid + "";
                obj.$updateModelVeiw();*/
        obj.type = emptyPoaition.playerid + "";
        obj.visible = true;
    };
    //打开商店
    GamePanel.prototype.onShopBtn = function () {
        Alert.alert(new ShopPanel(StaticConstant.CurrentType));
    };
    //商店买小姐姐
    GamePanel.prototype.onShopBuyXjj = function (e) {
        var xjjID = e.data.id;
        var canUseJewel = e.data.canUseJewel;
        var len = this.xjjContainer.numChildren;
        var isCreated = false;
        var player = PlayerData.getPlayerById(xjjID + "");
        var buildGold = RoleData.getBuildGold(xjjID + "", player.buyCount_gold);
        var role = RoleData.getRole();
        for (var i = 0; i < len; i++) {
            var obj = this.xjjContainer.getChildAt(i);
            var position = PositionData.getPositionById(i + "", StaticConstant.CurrentType);
            if (obj instanceof XjjModel && obj.id == "" && !position.isHasBox) {
                if (canUseJewel) {
                    var BuildJewel = RoleData.getBuildJewel(xjjID + "", player.buyCount_jewel);
                    role.jewel = role.jewel - BuildJewel;
                    RoleData.putRole(role);
                    player.buyCount_jewel++; //钻石购买次数增加1
                    PlayerData.updatePlayer(xjjID + "", player);
                }
                else {
                    role.gold = role.gold.minus(buildGold);
                    RoleData.putRole(role);
                    player.buyCount_gold++; //金币购买次数增加1
                    PlayerData.updatePlayer(xjjID + "", player);
                }
                this.creatShopXjj(i, xjjID, obj);
                isCreated = true;
                return;
            }
        }
        if (!isCreated) {
            ControllAlert.show("没有更多位置了！");
        }
    };
    //加速事件
    GamePanel.prototype.onSpeedUp = function (e) {
        var _this = this;
        this.speedUp = e.data.speedUpNum;
        var speedUpTime = e.data.speedTime;
        this.speed_hd.visible = false;
        egret.setTimeout(function () {
            _this.speedUp = 1;
            _this.speed_hd.visible = true;
        }, this, speedUpTime);
    };
    //打开加速界面
    GamePanel.prototype.onSpeedBtn = function () {
        Alert.alert(new SpeedupPanel());
    };
    //打开邀请界面
    GamePanel.prototype.onInviteBtn = function () {
        if (AppConfig.invite_haoyou == true) {
            Alert.alert(new InvitePanel());
        }
        else {
            ControllAlert.show("敬请期待！");
        }
    };
    //打开转盘界面
    GamePanel.prototype.onZhuanpanBtn = function () {
        Alert.alert(new ZhuanPan());
    };
    //打开签到界面
    GamePanel.prototype.onCheckInBtn = function () {
        Alert.alert(new checkInPanel());
    };
    //打开宝箱界面
    GamePanel.prototype.onRandomBoxBtn = function () {
        if (this.boxTime > 0 && this.boxTime <= 60) {
            ControllAlert.show("补给箱还未到达战场！");
            return;
        }
        Alert.alert(new RandomAwardPanel());
        RandomBoxData.updateRandomBoxCount();
        this.boxTime = 61;
    };
    //弹出怎么玩界面
    GamePanel.prototype.onHowBtn = function () {
        Alert.alert(new HowToPlayPanel());
    };
    //合成动画
    GamePanel.prototype.hechengAnim = function (leftImg, rightImg, changeImg, objX, objY, obj, playerid, isJieSuo) {
        var _this = this;
        this.currentSelect.visible = false;
        changeImg.visible = false;
        this.currentObj.clearGray();
        this.currentObj.visible = false;
        this.currentObj.id = "";
        leftImg.x = -64;
        rightImg.x = 96;
        leftImg.source = rightImg.source = changeImg.source;
        leftImg.visible = rightImg.visible = true;
        egret.Tween.get(leftImg).to({ x: 16, y: 0 }, 250, egret.Ease.backIn).call(function () {
            leftImg.visible = rightImg.visible = false;
            MovieClipManager.getInstance().initMovieClipFactory("hecheng_eff");
            var mc = MovieClipManager.getInstance().getMovieClicp("hecheng");
            mc.scaleX = mc.scaleY = 1.1;
            mc.x = objX - 100;
            mc.y = objY - 100 + _this.middleGroup.y;
            Alert.show(mc);
            var complete = function (e) {
                mc.removeEventListener(egret.MovieClipEvent.COMPLETE, complete, _this);
                if (mc.parent)
                    mc.parent.removeChild(mc);
            };
            mc.addEventListener(egret.MovieClipEvent.COMPLETE, complete, _this);
            mc.play();
            obj.type = playerid;
            if (isJieSuo)
                Alert.alert(new UnlockPanel(playerid));
            if (playerid == "1003")
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level1_suc", ""));
            if (playerid == "1006")
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level2_suc", ""));
            if (playerid == "1010")
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level3_suc", ""));
            if (playerid == "1015")
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level4_suc", ""));
        });
        egret.Tween.get(rightImg).to({ x: 16, y: 0 }, 250, egret.Ease.backIn);
    };
    //总金币动画
    GamePanel.prototype.totalGoldAnim = function () {
        egret.Tween.get(this.totalGold)
            .to({ scaleX: 1.2, scaleY: 1.2 }, 200, egret.Ease.quartOut)
            .to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.quartOut);
    };
    /*	private animate_FaShi:dragonBones.EgretArmatureDisplay;
        public animFaShi(){
                if(!this.animate_FaShi){
                    this.animate_FaShi=(DragonBoneManager.getInstance() as DragonBoneManager).createAnimate("FaShi");
                }
                if(this.animate_FaShi){
                    this.animate_FaShi.animation.play("idle_1",0);
                    this.animate_FaShi.x=330;
                    this.animate_FaShi.y=200;
                    this.middleGroup.addChild(this.animate_FaShi);
                }
        }*/
    GamePanel.prototype.dispose = function () {
        this.stop();
        this.stage.removeEventListener(GameEvent.GAME_SHOPBUYXJJ_EVENT, this.onShopBuyXjj, this);
        this.stage.removeEventListener(GameEvent.GAME_SPEEDUP_EVENT, this.onSpeedUp, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrameGold, this);
        if (this.xjjContainer)
            this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
        if (this.xjjContainer)
            this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
        if (this.xjjContainer)
            this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onJJBtnEnd, this);
        if (this.phbBtn)
            this.phbBtn.dispose();
        if (this.shopBtn)
            this.shopBtn.dispose();
        if (this.howBtn)
            this.howBtn.dispose();
        if (this.lingzuanBtn)
            this.lingzuanBtn.dispose();
        if (this.creatBtn)
            this.creatBtn.dispose();
        if (this.speedBtn)
            this.speedBtn.dispose();
        if (this.zhuanpanBtn)
            this.zhuanpanBtn.dispose();
        if (this.randomBoxBtn)
            this.randomBoxBtn.dispose();
        if (this.backBtn)
            this.backBtn.dispose();
        if (this.checkInBtn)
            this.checkInBtn.dispose();
        //if (this.hitSpeedBtn) this.hitSpeedBtn.dispose();
        //if (this.boxBtn) this.boxBtn.dispose();
        _super.prototype.dispose.call(this);
    };
    return GamePanel;
}(BasePanel));
__reflect(GamePanel.prototype, "GamePanel");
var HowToPlayPanel = (function (_super) {
    __extends(HowToPlayPanel, _super);
    function HowToPlayPanel() {
        return _super.call(this) || this;
    }
    HowToPlayPanel.prototype.initialize = function () {
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
    };
    HowToPlayPanel.prototype.onCloseBtn = function () {
        this.dispose();
    };
    HowToPlayPanel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return HowToPlayPanel;
}(BasePanel));
__reflect(HowToPlayPanel.prototype, "HowToPlayPanel");
var LixianPanel = (function (_super) {
    __extends(LixianPanel, _super);
    function LixianPanel() {
        return _super.call(this) || this;
    }
    LixianPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LixianPanel.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this);
        this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
        if (this.closeBtn) {
            this.closeBtn.visible = false;
            egret.setTimeout(function () {
                _this.closeBtn.visible = true;
            }, this, 2000);
        }
        if (this.runBg)
            egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 2000);
        AdConstant.showBannerAd();
    };
    LixianPanel.prototype.init = function () {
        var offlineTime = AccountData.getOffLine(); //获取离线时间
        var shouyiValue = GameConstant.getAllShouYiValue(); //离线收益 
        this.getLxTime = offlineTime <= 3600 * 2 ? offlineTime : 2 * 3600; //是否超过8小时
        //读取当前金币总收益数量
        /*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
                for (var posid in positions) {
                    var position = PositionData.getPositionById(posid,StaticConstant.CurrentType);
                    if (position.playerid == "") continue;
                    var config = ConfigData.getPlayerById(position.playerid);
                    shouyiValue = shouyiValue.add(config.lixianshouyi);
                }*/
        this.getGold = shouyiValue.mul(this.getLxTime);
        if (this.getGold)
            this.getGoldValue.text = "+" + StringUtil.decimalFormat(this.getGold);
    };
    LixianPanel.prototype.onShareBtn = function () {
        var _this = this;
        if (AppConfig.Lixian_share == "share") {
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    var role = RoleData.getRole();
                    role.gold = role.gold.add(_this.getGold.mul(2));
                    RoleData.putRole(role);
                    Alert.closeAlert(_this, -1);
                    ControllAlert.show("获得" + StringUtil.decimalFormat(_this.getGold) + "x2个金币！");
                    _this.onclosebtn();
                }
                else {
                    ControllAlert.show("分享失败");
                }
            }, this);
        }
        else {
            //看广告
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    var role = RoleData.getRole();
                    role.gold = role.gold.add(_this.getGold.mul(2));
                    RoleData.putRole(role);
                    Alert.closeAlert(_this, -1);
                    ControllAlert.show("获得" + StringUtil.decimalFormat(_this.getGold) + "x2个金币！");
                    _this.onclosebtn();
                }
                else {
                    ControllAlert.show("中断广告,无奖励");
                }
            }, this);
        }
    };
    LixianPanel.prototype.onGetBtn = function () {
        var role = RoleData.getRole();
        role.gold = role.gold.add(this.getGold);
        RoleData.putRole(role);
        ControllAlert.show("获得" + StringUtil.decimalFormat(this.getGold) + "个金币！");
        this.onclosebtn();
    };
    LixianPanel.prototype.onclosebtn = function () {
        Alert.closeAlert(this, -1);
    };
    LixianPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        AccountData.putOffLine(0);
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.shareBtn)
            this.shareBtn.dispose();
    };
    return LixianPanel;
}(eui.Component));
__reflect(LixianPanel.prototype, "LixianPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var NotEnoughRewardPanel = (function (_super) {
    __extends(NotEnoughRewardPanel, _super);
    function NotEnoughRewardPanel(type) {
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this._type = type;
        return _this;
    }
    NotEnoughRewardPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    NotEnoughRewardPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this._type == 1)
            this.init1();
        else if (this._type == 2)
            this.init2();
        if (this.okBtn)
            this.okBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onOkBtn, this);
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        if (this.runBg)
            egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 2000);
        AdConstant.showBannerAd();
    };
    NotEnoughRewardPanel.prototype.init1 = function () {
        this.title.text = "钻 石";
        this.jlResName.texture = RES.getRes("xjj_icon_zuanshi");
        //解锁2个角色身上的钻石和/2，一个角色有钻石不除，没有不奖励
        //暂时固定200
        this._jewelCount = 200;
        this.jlCount.text = "+" + this._jewelCount;
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure1", ""));
    };
    NotEnoughRewardPanel.prototype.init2 = function () {
        this.title.text = "金 币";
        this.jlResName.texture = RES.getRes("xjj_icon_jinbi");
        //金币不足，可解锁最低等级的金币
        var heSuanLevel = ShopConstant.buyWhichLevel();
        var id = RoleData.getIdByLevel(StaticConstant.CurrentType, heSuanLevel + "");
        if (id) {
            var player = PlayerData.getPlayerById(id + "");
            this._gold = RoleData.getBuildGold(id, player.buyCount_gold);
        }
        if (this._gold) {
            this.jlCount.text = StringUtil.decimalFormat(this._gold);
        }
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure2", ""));
    };
    NotEnoughRewardPanel.prototype.onOkBtn = function () {
        var _this = this;
        if (AppConfig.notEnough_reward == "share") {
            //分享领取
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    if (_this._type == 1) {
                        _this.limitCountByType(1);
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure2", ""));
                        // var role:Role = RoleData.getRole();
                        // if(this._jewelCount) role.jewel += this._jewelCount;
                        // RoleData.putRole(role);
                        // if(this._jewelCount) ControllAlert.show("成功领取"+this._jewelCount+"个钻石");
                    }
                    else if (_this._type == 2) {
                        _this.limitCountByType(2);
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure5", ""));
                        // var role: Role = RoleData.getRole();
                        // if (this._gold) role.gold = role.gold.add(this._gold);
                        // RoleData.putRole(role);
                        // if (this._gold) ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
                    }
                    _this.onCloseBtn();
                }
                else {
                    ControllAlert.show("分享失败");
                }
            }, this);
        }
        else {
            //看广告
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    if (_this._type == 1) {
                        _this.limitCountByType(1);
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure3", ""));
                        // var role: Role = RoleData.getRole();
                        // if (this._jewelCount) role.jewel += this._jewelCount;
                        // RoleData.putRole(role);
                        // if (this._jewelCount) ControllAlert.show("成功领取" + this._jewelCount + "个钻石");
                    }
                    else if (_this._type == 2) {
                        _this.limitCountByType(2);
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure6", ""));
                        // var role: Role = RoleData.getRole();
                        // if (this._gold) role.gold = role.gold.add(this._gold);
                        // RoleData.putRole(role);
                        // if (this._gold) ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
                    }
                    _this.onCloseBtn();
                }
                else {
                    ControllAlert.show("中断广告,无奖励");
                }
            }, this);
        }
    };
    NotEnoughRewardPanel.prototype.limitCountByType = function (type) {
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间	
        var currentDate = DateTool.makeTime(timestamp);
        var data = NotEnoughData.getcurrentLimitData();
        var jewelCount = (!data || data.date != currentDate) ? AppConfig.jewel_limitCount : data.jewelCount;
        var jinbiCount = (!data || data.date != currentDate) ? AppConfig.jinbi_limitCount : data.jinbiCount;
        if (type == 1) {
            if (jewelCount <= 0) {
                ControllAlert.show("钻石不足次数用完，明天再来");
                return;
            }
            NotEnoughData.updateNotJewelCount(1, 0);
            var role = RoleData.getRole();
            if (this._jewelCount)
                role.jewel += this._jewelCount;
            RoleData.putRole(role);
            if (this._jewelCount)
                ControllAlert.show("成功领取" + this._jewelCount + "个钻石");
        }
        else if (type == 2) {
            if (jinbiCount <= 0) {
                ControllAlert.show("金币次数次数用完，明天再来");
                return;
            }
            NotEnoughData.updateNotJewelCount(0, 1);
            var role = RoleData.getRole();
            if (this._gold)
                role.gold = role.gold.add(this._gold);
            RoleData.putRole(role);
            if (this._gold)
                ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
        }
    };
    NotEnoughRewardPanel.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0);
    };
    NotEnoughRewardPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.okBtn)
            this.okBtn.dispose();
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.parent)
            this.parent.removeChild(this);
    };
    return NotEnoughRewardPanel;
}(eui.Component));
__reflect(NotEnoughRewardPanel.prototype, "NotEnoughRewardPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var RandomAwardPanel = (function (_super) {
    __extends(RandomAwardPanel, _super);
    function RandomAwardPanel() {
        var _this = _super.call(this) || this;
        var float = RandomUitl.randomInt(1, 2);
        if (float == 1) {
            _this._type = float;
        }
        else if (float == 2) {
            _this._type = float;
        }
        return _this;
    }
    RandomAwardPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RandomAwardPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.lingquBtn)
            this.lingquBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingquBtn, this);
        if (this.lingqu4beiBtn)
            this.lingqu4beiBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingqu4beiBtn, this);
        this.init();
        AdConstant.showBannerAd();
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "randomBox", "randombox1", ""));
    };
    RandomAwardPanel.prototype.init = function () {
        if (this._type == 1) {
            //钻石
            this.gaintypeImg.texture = RES.getRes("xjj_icon_zuanshi");
            this.titleType.text = "钻        石";
            this.gainCount.text = "+100";
        }
        else if (this._type == 2) {
            //金币
            var maxLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
            var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, maxLevel + "");
            var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
            var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).div(2);
            this.gaintypeImg.texture = RES.getRes("xjj_icon_jinbi");
            this.titleType.text = "金        币";
            this.gainCount.text = StringUtil.decimalFormat(jiangliGold);
        }
    };
    RandomAwardPanel.prototype.onLingquBtn = function () {
        var role = RoleData.getRole();
        if (this._type == 1) {
            //钻石
            role.jewel = role.jewel + 100;
            ControllAlert.show("成功领取100钻石！");
        }
        else if (this._type == 2) {
            //金币
            var highLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
            var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, highLevel + "");
            var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
            var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).div(2);
            role.gold = role.gold.add(jiangliGold);
            ControllAlert.show("成功领取" + StringUtil.decimalFormat(jiangliGold) + "金币！");
        }
        RoleData.putRole(role);
        Alert.closeAlert(this, 0);
    };
    //4倍领取 广告或者分享
    RandomAwardPanel.prototype.onLingqu4beiBtn = function () {
        var _this = this;
        if (AppConfig.baoxiang_reward == "share") {
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    var role = RoleData.getRole();
                    if (_this._type == 1) {
                        //钻石
                        role.jewel = role.jewel + 400;
                        ControllAlert.show("成功领取400钻石！");
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "randomBox", "randombox2", ""));
                    }
                    else if (_this._type == 2) {
                        //金币
                        var highLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
                        var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, highLevel + "");
                        var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
                        var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).mul(2);
                        role.gold = role.gold.add(jiangliGold);
                        ControllAlert.show("成功领取" + StringUtil.decimalFormat(jiangliGold) + "金币！");
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "randomBox", "randombox2", ""));
                    }
                    RoleData.putRole(role);
                    Alert.closeAlert(_this, 0);
                }
                else {
                    ControllAlert.show("分享失败");
                }
            }, this);
        }
        else {
            //看广告
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    var role = RoleData.getRole();
                    if (_this._type == 1) {
                        //钻石
                        role.jewel = role.jewel + 400;
                        ControllAlert.show("成功领取400钻石！");
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "randomBox", "randombox3", ""));
                    }
                    else if (_this._type == 2) {
                        //金币
                        var highLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
                        var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, highLevel + "");
                        var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
                        var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).mul(2);
                        role.gold = role.gold.add(jiangliGold);
                        ControllAlert.show("成功领取" + StringUtil.decimalFormat(jiangliGold) + "金币！");
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "randomBox", "randombox3", ""));
                    }
                    RoleData.putRole(role);
                    Alert.closeAlert(_this, 0);
                }
                else {
                    ControllAlert.show("中断广告,无奖励");
                }
            }, this);
        }
    };
    RandomAwardPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.lingquBtn)
            this.lingquBtn.dispose();
        if (this.lingqu4beiBtn)
            this.lingqu4beiBtn.dispose();
    };
    return RandomAwardPanel;
}(eui.Component));
__reflect(RandomAwardPanel.prototype, "RandomAwardPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var ShopPanel = (function (_super) {
    __extends(ShopPanel, _super);
    function ShopPanel(Type) {
        var _this = _super.call(this) || this;
        _this.type = Type;
        return _this;
    }
    ShopPanel.prototype.initialize = function () {
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.onFrame();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        this.initXjjList();
        AdConstant.showBannerAd();
    };
    ShopPanel.prototype.initXjjList = function () {
        var maxLevel = -1;
        var config = null;
        if (this.type == 1) {
            //先加4个
            for (var i = 0; i < 4; i++) {
                var index;
                if (i >= 0 && i < 4) {
                    index = i + 1001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                this.xjjGroup.addChild(XjjItemSkin);
                XjjItemSkin.x = 0;
                XjjItemSkin.y = 163 * i;
            }
            //每隔50ms加一个
            for (var i = 4; i < 38; i++) {
                var index;
                if (i >= 4 && i < 38) {
                    index = i + 1001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
            }
            // config = ShopConstant.getHighestLevelConfig(1);//获取最高等级
            // if (config) maxLevel = config.maxBuyLevel;
            // if (maxLevel != -1 && maxLevel >= 5) {
            // 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
            // }
        }
        if (this.type == 2) {
            //先加4个
            for (var i = 0; i < 4; i++) {
                var index;
                if (i >= 0 && i < 4) {
                    index = i + 2001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                this.xjjGroup.addChild(XjjItemSkin);
                XjjItemSkin.x = 0;
                XjjItemSkin.y = 163 * i;
            }
            //每隔50ms加一个
            for (var i = 4; i < 38; i++) {
                var index;
                if (i >= 4 && i < 38) {
                    index = i + 2001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
            }
            // config = ShopConstant.getHighestLevelConfig(2);//获取最高等级
            // if (config) maxLevel = config.maxBuyLevel;
            // if (maxLevel != -1 && maxLevel >= 5) {
            // 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
            // }
        }
        if (this.type == 3) {
            //先加4个
            for (var i = 0; i < 4; i++) {
                var index;
                if (i >= 0 && i < 4) {
                    index = i + 3001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                this.xjjGroup.addChild(XjjItemSkin);
                XjjItemSkin.x = 0;
                XjjItemSkin.y = 163 * i;
            }
            //每隔50ms加一个
            for (var i = 4; i < 33; i++) {
                var index;
                if (i >= 4 && i < 33) {
                    index = i + 3001;
                }
                var XjjItemSkin = new ShopXjjItemSkin(index);
                egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
            }
            // config = ShopConstant.getHighestLevelConfig(3);//获取最高等级
            // if (config) maxLevel = config.maxBuyLevel;
            // if (maxLevel != -1 && maxLevel >= 5) {
            // 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
            // }
        }
    };
    ShopPanel.prototype.addItem = function (item, i) {
        var _this = this;
        return function () {
            _this.xjjGroup.addChild(item);
            item.x = 0;
            item.y = 163 * i;
            if (i == 37) {
                var maxLevel = -1;
                var config = null;
                config = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType); //获取最高等级
                if (config)
                    maxLevel = config.maxBuyLevel;
                if (maxLevel != -1 && maxLevel >= 5) {
                    egret.Tween.get(_this.scroll.viewport).to({ scrollV: _this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 500);
                }
            }
        };
    };
    ShopPanel.prototype.onFrame = function () {
        var role = RoleData.getRole();
        this.goldNum.text = StringUtil.decimalFormat(role.gold);
        this.diamondNum.text = StringUtil.goldNumber2String(role.jewel);
    };
    ShopPanel.prototype.onCloseBtn = function () {
        this.dispose();
    };
    ShopPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.xjjGroup) {
            this.xjjGroup.$children.forEach(function (element) {
                if (element instanceof ShopXjjItemSkin) {
                    element.dispose();
                }
            });
        }
        _super.prototype.dispose.call(this);
    };
    return ShopPanel;
}(BasePanel));
__reflect(ShopPanel.prototype, "ShopPanel");
var ShopXjjItemSkin = (function (_super) {
    __extends(ShopXjjItemSkin, _super);
    function ShopXjjItemSkin(id) {
        var _this = _super.call(this) || this;
        _this.canUseJewel = false;
        _this.id = id;
        return _this;
    }
    ShopXjjItemSkin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ShopXjjItemSkin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    ShopXjjItemSkin.prototype.init = function () {
        this.initUI();
        this.initBtnListen();
    };
    ShopXjjItemSkin.prototype.initUI = function () {
        ColorUtil.setHui(this.xjjImage_open);
        var config = ConfigData.getPlayerById(this.id + "");
        var highestConfig = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType); //获取最高等级那条配置
        if (this.xjjImage)
            this.xjjImage.source = config.icon_res;
        this.level.text = config.level;
        this.openLevel.text = config.goldbuyLimit;
        var config_open = ConfigData.getPlayerById((this.id + 4) + "");
        if (StaticConstant.CurrentType == 1 || StaticConstant.CurrentType == 2) {
            if (this.xjjImage_open && this.id >= 1000 && this.id <= 1034) {
                this.xjjImage_open.source = config_open.icon_res;
            }
            else {
                this.xjjImage_open.source = ConfigData.getPlayerById("1038").icon_res;
            }
        }
        if (StaticConstant.CurrentType == 2) {
            if (this.xjjImage_open && this.id >= 2000 && this.id <= 2034) {
                this.xjjImage_open.source = config_open.icon_res;
            }
            else {
                this.xjjImage_open.source = ConfigData.getPlayerById("2038").icon_res;
            }
        }
        if (StaticConstant.CurrentType == 3) {
            if (this.xjjImage_open && this.id >= 3000 && this.id <= 3029) {
                this.xjjImage_open.source = config_open.icon_res;
            }
            else {
                this.xjjImage_open.source = ConfigData.getPlayerById("3029").icon_res;
            }
        }
        //判断金币可购买条件
        var player = PlayerData.getPlayerById(this.id + "");
        if (!player) {
            ColorUtil.setBlack(this.xjjImage); //人变黑的
            this.buyBtn.visible = false;
        }
        else if (player && Number(highestConfig.level) >= Number(config.goldbuyLimit)) {
            this.openGroup.visible = false;
            this.buyBtn.visible = true;
            var buildGold = RoleData.getBuildGold(this.id + "", player.buyCount_gold);
            var lab_gold = this.buyBtn.getChildAt(1);
            if (lab_gold)
                lab_gold.text = StringUtil.decimalFormat(buildGold);
            var lab_image = this.buyBtn.getChildAt(2);
            if (lab_image)
                lab_image.source = "xjj_icon_jinbilv";
        }
        else if (player && Number(highestConfig.level) < Number(config.goldbuyLimit)) {
            this.openGroup.visible = true;
            this.buyBtn.visible = false;
        }
        //判断钻石可购买条件
        var arr = highestConfig.jewelbuyLimit.split('_');
        if (arr && ArrayUtil.contains(arr, config.level)) {
            this.canUseJewel = true;
            this.openGroup.visible = false;
            this.buyBtn.visible = true;
            var buildJewel = RoleData.getBuildJewel(this.id + "", player.buyCount_jewel);
            var lab_jewel = this.buyBtn.getChildAt(1);
            if (lab_jewel)
                lab_jewel.text = StringUtil.goldNumber2String(buildJewel);
            var lab_image = this.buyBtn.getChildAt(2);
            if (lab_image)
                lab_image.source = "xjj_icon_zuanshi";
        }
    };
    ShopXjjItemSkin.prototype.initBtnListen = function () {
        if (this.buyBtn)
            this.buyBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBuyBtn, this);
    };
    ShopXjjItemSkin.prototype.onBuyBtn = function (e) {
        var player = PlayerData.getPlayerById(this.id + "");
        var buildGold = RoleData.getBuildGold(this.id + "", player.buyCount_gold);
        var buildJewel = RoleData.getBuildJewel(this.id + "", player.buyCount_jewel);
        var lab_gold = this.buyBtn.getChildAt(1);
        var role = RoleData.getRole();
        if (!this.canUseJewel) {
            if (lab_gold)
                lab_gold.text = StringUtil.decimalFormat(buildGold);
            if (role.gold.minus(buildGold) < new Decimal(0)) {
                // ControllAlert.show("金币不足了，看点广告吧"); 
                Alert.alert(new NotEnoughRewardPanel(2)); //金币不足
                return;
            }
        }
        else {
            if (lab_gold)
                lab_gold.text = StringUtil.goldNumber2String(buildJewel);
            if (role.jewel - buildJewel < 0) {
                // ControllAlert.show("钻石不足了，看点广告吧"); 
                Alert.alert(new NotEnoughRewardPanel(1)); //钻石不足
                return;
            }
        }
        this.stage.dispatchEventWith(GameEvent.GAME_SHOPBUYXJJ_EVENT, true, { id: this.id, canUseJewel: this.canUseJewel });
        this.initUI();
    };
    ShopXjjItemSkin.prototype.dispose = function () {
        if (this.buyBtn)
            this.buyBtn.dispose();
    };
    return ShopXjjItemSkin;
}(eui.Component));
__reflect(ShopXjjItemSkin.prototype, "ShopXjjItemSkin", ["eui.UIComponent", "egret.DisplayObject"]);
var SpeedupPanel = (function (_super) {
    __extends(SpeedupPanel, _super);
    function SpeedupPanel() {
        var _this = _super.call(this) || this;
        _this.speedUpNum = 1; //增加的速度系数
        _this.speedTime = 0;
        _this.speedUpState = true;
        return _this;
    }
    SpeedupPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SpeedupPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.onFrame(null);
        AdConstant.showBannerAd();
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        if (this.costJewelBtn)
            this.costJewelBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCostJewelBtn, this);
        if (this.watchAdBtn)
            this.watchAdBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onWatchAdBtn, this);
        this.friend1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.friend2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.friend3Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        this.tipsLabel.textFlow = [
            { text: "邀请3名新人立即获得" },
            { text: "10小时收益", style: { "bold": true } }
        ];
        if (AppConfig.invite_xinren == true) {
            this.yaoqingGroup.visible = true;
            this.nodisplay.visible = false;
            var thisObj_1 = this;
            GameApi.inviteNewSgin("6", function (e) {
                // var data = e && e["6"]? e["6"]:[];
                var inviteDataNew = [];
                if (e) {
                    for (var i = 0; i < e.length; i++) {
                        var itemdata = e[i];
                        var avatar = itemdata.avatar;
                        if (avatar && avatar != "")
                            inviteDataNew.push(itemdata);
                    }
                }
                InviteData.putInviteSgin(inviteDataNew);
                thisObj_1.init();
            });
        }
        else {
            this.yaoqingGroup.visible = false;
            this.nodisplay.visible = true;
        }
    };
    SpeedupPanel.prototype.init = function () {
        var inviteData = InviteData.getInviteSgin();
        for (var i = 1; i <= 3; i++) {
            if (i <= inviteData.length) {
                //更新头像
                var itemdata = inviteData[i - 1];
                var avatar = itemdata.avatar;
                RES.getResByUrl(avatar, this.updateHead(i), this, "image");
            }
        } //可领取条件
        if (inviteData.length == 1)
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup3", ""));
        if (inviteData.length == 2)
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup4", ""));
        if (inviteData.length >= 3)
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup5", ""));
        if (inviteData.length >= 3) {
            this.yaoQingBtn.label = "领取";
            var finsh = InviteData.getInviteTaskfinishByType("2");
            var finshcount = finsh && finsh.count ? finsh.count : 0;
            if (finshcount >= 1) {
                this.yaoQingBtn.setEnable(false);
                this.yaoQingBtn.label = "已领取";
            }
        }
        if (this.yaoQingBtn)
            this.yaoQingBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onYaoQingBtn, this);
        var data = SpeedupData.getSpeedupCount();
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        if (!data) {
            data = new Speedup(currentDate, 1);
            SpeedupData.putSpeedupCount(data);
            this.costJewelBtn.label = "x" + 10 * data.count;
        }
        else {
            this.costJewelBtn.label = "x" + 10 * data.count;
        }
    };
    SpeedupPanel.prototype.updateHead = function (index) {
        var head = this["friend" + index];
        return function (data) {
            if (data) {
                if (head instanceof eui.Image)
                    head.texture = data;
            }
        };
    };
    SpeedupPanel.prototype.onYaoQingBtn = function () {
        if (this.yaoQingBtn.label == "邀请好友") {
            this.onShare();
            return;
        }
        //增加10小时离线收益
        //读取当前的金币收益数量
        var shouyiValue = GameConstant.getAllShouYiValue(); //离线总收益 
        var role = RoleData.getRole();
        /*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
                for (var posid in positions) {
                    var position = PositionData.getPositionById(posid,StaticConstant.CurrentType);
                    if (position.playerid == "") continue;
                    var config = ConfigData.getPlayerById(position.playerid);
                    shouyiValue = shouyiValue.add(config.lixianshouyi);
                }*/
        var getgold = shouyiValue.mul(36000);
        role.gold = role.gold.add(getgold);
        RoleData.putRole(role);
        ControllAlert.show("成功获得" + StringUtil.decimalFormat(getgold) + "个金币 ");
        InviteData.updateInviteTaskFinishId("2");
        this.init();
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup6", ""));
    };
    SpeedupPanel.prototype.onShare = function () {
        ShareConstant.shareToGroup(function (result) {
            ControllAlert.show("好友点击链接，即可领取奖励");
        }, this, false, " ", null, 6);
    };
    SpeedupPanel.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0);
    };
    SpeedupPanel.prototype.onFrame = function (e) {
        var timestamp = AccountData.serverTime() + egret.getTimer();
        var data = SpeedupData.getSpeedup();
        if (!data || timestamp > (data.time + data.keeptime * 1000)) {
            //过期
            this.countDown1.text = "持续:60s";
            this.countDown2.text = "持续：180s";
            this.speedUpState = true;
            this.costJewelBtn.setEnable(true);
            this.watchAdBtn.setEnable(true);
        }
        else {
            //效果持续中
            this.costJewelBtn.setEnable(false);
            this.watchAdBtn.setEnable(false);
            var time = data.keeptime * 1000 + Math.floor(data.time - timestamp);
            if (data.keeptime == 60) {
                this.countDown2.text = "持续：180s";
                this.countDown1.text = DateTool.formatTime(time);
                if (this.countDown1.text == "00:00:00" && this.speedUpState) {
                    this.speedUpState = false;
                    ControllAlert.show("加速效果消失！");
                }
            }
            else if (data.keeptime == 180) {
                this.countDown1.text = "持续:60s";
                this.countDown2.text = DateTool.formatTime(time);
                if (this.countDown2.text == "00:00:00" && this.speedUpState) {
                    this.speedUpState = false;
                    ControllAlert.show("加速效果消失！");
                }
            }
        }
    };
    //花钻石加速
    SpeedupPanel.prototype.onCostJewelBtn = function (e) {
        //花了10 钻石就加速
        var role = RoleData.getRole();
        var data = SpeedupData.getSpeedupCount(); //获取次数
        if (role.jewel >= 10 * data.count) {
            ControllAlert.show("开启60s加速！");
            SpeedupData.updateSpeedupCount();
            role.jewel = role.jewel - 10 * data.count;
            RoleData.putRole(role);
            this.keeptime = 60;
            var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
            SpeedupData.updateSpeedup(timestamp, this.keeptime);
            this.costJewelBtn.setEnable(false);
            this.watchAdBtn.setEnable(false);
            this.speedUpNum = 2;
            this.speedTime = 60000;
            this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: this.speedUpNum, speedTime: this.speedTime });
            this.init();
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup1", ""));
        }
        else {
            // ControllAlert.show("没钻石了！看广告吧");
            Alert.alert(new NotEnoughRewardPanel(1)); //钻石不足
        }
    };
    //看广告加速
    SpeedupPanel.prototype.onWatchAdBtn = function (e) {
        var _this = this;
        if (AppConfig.speedup_180seconds == "share") {
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    ControllAlert.show("开启180s加速！");
                    _this.keeptime = 180;
                    var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
                    SpeedupData.updateSpeedup(timestamp, _this.keeptime);
                    _this.costJewelBtn.setEnable(false);
                    _this.watchAdBtn.setEnable(false);
                    _this.speedUpNum = 2;
                    _this.speedTime = 180000;
                    _this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: _this.speedUpNum, speedTime: _this.speedTime });
                }
                else {
                    ControllAlert.show("分享失败");
                }
            }, this);
        }
        else {
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    ControllAlert.show("开启180s加速！");
                    _this.keeptime = 180;
                    var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
                    SpeedupData.updateSpeedup(timestamp, _this.keeptime);
                    _this.costJewelBtn.setEnable(false);
                    _this.watchAdBtn.setEnable(false);
                    _this.speedUpNum = 2;
                    _this.speedTime = 180000;
                    _this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: _this.speedUpNum, speedTime: _this.speedTime });
                    DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup2", ""));
                }
                else {
                    ControllAlert.show("中断广告,无法加速");
                }
            }, this);
        }
    };
    SpeedupPanel.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.costJewelBtn)
            this.costJewelBtn.dispose();
        if (this.watchAdBtn)
            this.watchAdBtn.dispose();
        if (this.yaoQingBtn)
            this.yaoQingBtn.dispose();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        this.friend1Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.friend2Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.friend3Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
    };
    return SpeedupPanel;
}(eui.Component));
__reflect(SpeedupPanel.prototype, "SpeedupPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        return _super.call(this) || this;
    }
    StartPanel.prototype.initialize = function () {
        if (this.startBtn) {
            this.startBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onStartGame, this);
            egret.Tween.get(this.startBtn, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 1200).to({ scaleX: 1, scaleY: 1 }, 1000);
        }
        if (this.rankBtn)
            this.rankBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRankBtn, this);
        if (this.kefuBtn)
            this.kefuBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onKefuBtn, this);
        platform.createFeedbackButton();
        this.getUserInfo();
        if (this.uidLabel)
            this.uidLabel.text = "id:" + AccountData.uid();
        this.initAniGameAd();
        this.initFavListGame();
    };
    StartPanel.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WechatManager.getInstance().getUserInfo(this.onStartGame)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPanel.prototype.onRankBtn = function (e) {
        var rankPanel = new RankPanel();
        rankPanel.shareTicket = e.data ? e.data.shareTicket : null;
        Alert.alert(rankPanel);
    };
    StartPanel.prototype.onKefuBtn = function (e) {
        platform.openCustomerServiceConversation({ success: function (e) { console.log('进入客服'); } });
    };
    StartPanel.prototype.onStartGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var players_xjj, positions_xjj, player, i, position, position1;
            return __generator(this, function (_a) {
                if (AccountData.getMp()) {
                    console.log("mp跳转", AppConfig.mp_path);
                    //mp投放双跳
                    platform.navigateToMiniProgram(AppConfig.mp_path.appid, AppConfig.mp_path.path, "");
                    AccountData.putMp(null);
                    this.getUserInfo();
                    return [2 /*return*/];
                }
                players_xjj = PlayerData.getPlayers();
                positions_xjj = PositionData.getPositionsById(1);
                if (!players_xjj || players_xjj == "" || Object.keys(players_xjj).length < 1) {
                    player = new lzd.vo.Player();
                    player.id = "1001";
                    PlayerData.updatePlayer(player.id, player);
                }
                if (!positions_xjj) {
                    for (i = 0; i < 12; i++) {
                        position = new lzd.vo.Position();
                        position.posid = i + "";
                        PositionData.updatePosition(position.posid, position, 1);
                    }
                    position1 = PositionData.getPositionById("0", 1);
                    position1.playerid = "1001";
                    PositionData.updatePosition("0", position1, 1);
                }
                BasePanel.currentPanel.gotoPanel(new GamePanel());
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "guide", "gamestart", ""));
                return [2 /*return*/];
            });
        });
    };
    StartPanel.prototype.initFavListGame = function () {
        var _this = this;
        if (!AppConfig.favlist_luck) {
            this.favlistConstainer.visible = false;
            return;
        }
        var channel = AccountData.getChannel();
        if (ArrayUtil.contains(AppConfig.channelList_luck, channel)) {
            this.favlistConstainer.visible = false;
            return;
        }
        if (AppConfig.sdk_favlist) {
            var drender = DDSDK.getRender();
            var fview = drender.getFavAD(3, 1);
            fview.pos(this.otherGameGroup.x, this.otherGameGroup.y);
            fview.scaleX = 0.8;
            fview.scaleY = 0.8;
            this.favlistConstainer.addChild(fview);
            return;
        }
        //猜你喜欢配置获取，获取成功后重新调用函数刷新界面(抽屉页相同)
        if (!OtherGameConstant.likesGameConfig) {
            ConfigManager.getInstance().loadConfig(AppConfig.likesConfigUrl, function (data) {
                OtherGameConstant.likesGameConfig = data;
                _this.initFavListGame();
            }, this);
            return;
        }
        var otherconfig = OtherGameConstant.likesGameConfig;
        this.favlistConstainer.$children.forEach(function (element) { element.visible = true; });
        if (this.otherGameGroup.numChildren == 0) {
            for (var k in otherconfig) {
                var conf = otherconfig[parseInt(k)];
                var othergameSkin = new OtherGameSkin(conf);
                this.otherGameGroup.addChild(othergameSkin);
            }
        }
        else {
            //刷新
            var otherconfig1 = OtherGameConstant.likesGameConfig;
            var index = 0;
            for (var k1 in otherconfig1) {
                if (index < this.otherGameGroup.numChildren) {
                    // (this.otherGameGroup.getChildAt(index) as OtherGameSkin).initUI();
                }
                else {
                    this.otherGameGroup.addChild(new OtherGameSkin(otherconfig1[k1]));
                }
                index++;
            }
        }
    };
    StartPanel.prototype.initAniGameAd = function () {
        if (AppConfig.suspension_luck) {
            var drender = DDSDK.getRender();
            var aniad = drender.getAniAD();
            if (aniad) {
                aniad.scaleX = aniad.scaleY = 0.7;
                //靠右向下对齐
                aniad.pos(this.width - aniad.width * 0.7, this.height - 1036);
                LayerManager.getInstance().alertLayer.addChild(aniad);
            }
        }
    };
    StartPanel.prototype.dispose = function () {
        platform.hideFeedbackButton();
        if (this.startBtn)
            this.startBtn.dispose();
        if (this.rankBtn)
            this.rankBtn.dispose();
        if (this.kefuBtn)
            this.kefuBtn.dispose();
        if (this.soundBtn)
            this.soundBtn.dispose();
        _super.prototype.dispose.call(this);
    };
    return StartPanel;
}(BasePanel));
__reflect(StartPanel.prototype, "StartPanel");
var UnlockPanel = (function (_super) {
    __extends(UnlockPanel, _super);
    function UnlockPanel(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    UnlockPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    UnlockPanel.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
        if (this.closeBtn0) {
            this.closeBtn0.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            this.closeBtn0.visible = false;
            egret.setTimeout(function () {
                _this.closeBtn0.visible = true;
                var config = ConfigData.getPlayerById(_this.id);
                if (config && parseInt(config.level) < 4) {
                    _this.closeBtn0.visible = false;
                }
            }, this, 2000);
        }
        if (this.runBg)
            egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 2000);
    };
    UnlockPanel.prototype.init = function () {
        var config = ConfigData.getPlayerById(this.id);
        if (this.xjjImg)
            this.xjjImg.source = config.icon_res;
        this.levelInfo.text = "LV." + config.level;
        this.jiangliCount.text = "+" + config.firstreward;
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "unlock", "unlock1", ""));
    };
    UnlockPanel.prototype.onShareBtn = function () {
        var _this = this;
        var config = ConfigData.getPlayerById(this.id);
        if (config && parseInt(config.level) < 4) {
            this.addJewel(parseInt(config.firstreward));
            ControllAlert.show("\u9886\u53D6\u6210\u529F" + config.firstreward + "\u4E2A\u94BB\u77F3");
            this.onCloseBtn();
        }
        else {
            if (AppConfig.unlock_reward == "share") {
                ShareConstant.shareToGroup(function (result) {
                    if (result) {
                        _this.addJewel(parseInt(config.firstreward));
                        ControllAlert.show("\u9886\u53D6\u6210\u529F" + config.firstreward + "\u4E2A\u94BB\u77F3");
                        // ControllAlert.show("分享成功");
                        _this.onCloseBtn();
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "unlock", "unlock2", ""));
                    }
                    else {
                        ControllAlert.show("分享失败");
                    }
                }, this);
            }
            else {
                //看广告
                AdConstant.lookRewardAd(function (result) {
                    if (result) {
                        _this.addJewel(parseInt(config.firstreward));
                        ControllAlert.show("\u9886\u53D6\u6210\u529F" + config.firstreward + "\u4E2A\u94BB\u77F3");
                        // ControllAlert.show("分享成功");
                        _this.onCloseBtn();
                        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "unlock", "unlock3", ""));
                    }
                    else {
                        ControllAlert.show("中断广告,无奖励");
                    }
                }, this);
            }
        }
    };
    UnlockPanel.prototype.addJewel = function (count) {
        var role = RoleData.getRole();
        role.jewel += count;
        RoleData.putRole(role);
    };
    UnlockPanel.prototype.onCloseBtn = function () {
        var guide = GuideData.currentOpt();
        if (guide == 2) {
            GuideData.updateCurrentOpt();
            if (BasePanel.currentPanel instanceof GamePanel) {
                BasePanel.currentPanel.refreshGuide();
            }
        }
        Alert.closeAlert(this, 0);
    };
    UnlockPanel.prototype.dispose = function () {
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.shareBtn)
            this.shareBtn.dispose();
    };
    return UnlockPanel;
}(eui.Component));
__reflect(UnlockPanel.prototype, "UnlockPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var XjjModel = (function (_super) {
    __extends(XjjModel, _super);
    function XjjModel() {
        return _super.call(this) || this;
    }
    Object.defineProperty(XjjModel.prototype, "type", {
        get: function () {
            return this.id;
        },
        /*	public boxBtn:MyButton;*/
        set: function (id) {
            this.id = id;
            this.$updateModelVeiw();
        },
        enumerable: true,
        configurable: true
    });
    XjjModel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    XjjModel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // if (this.boxBtn) this.boxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBoxBtn, this);
    };
    XjjModel.prototype.$updateModelVeiw = function () {
        this.goldImg.visible = false;
        this.leftImg.visible = this.rightImg.visible = false;
        this.addGoldGroup.alpha = 0;
        var config = ConfigData.getPlayerById(this.id);
        if (!config)
            return;
        if (this.xjjImg)
            this.xjjImg.source = config.icon_res; //图片
        if (this.level)
            this.level.text = config.level; //等级
        if (this.addGold)
            this.addGold.text = "+" + StringUtil.decimalFormat(new Decimal(Number(config.addgoldvalue))); //增加金币
        this.clearGray();
        this.levelGroup.visible = true;
        this.xjjImg.visible = true;
    };
    XjjModel.prototype.setGray = function () {
        ColorUtil.setGray(this.xjjImg);
    };
    XjjModel.prototype.clearGray = function () {
        ColorUtil.clearGray(this.xjjImg);
    };
    XjjModel.prototype.hitTest = function (point) {
        if (point.x > this.x - 50 && point.x < (this.x + this.width + 50) && point.y > this.y - 50 && point.y < (this.y + this.height + 50)) {
            return true;
        }
        return false;
    };
    XjjModel.prototype.animScale = function () {
        //人物缩放动画
        if (this.xjjImg.filters)
            return;
        egret.Tween.get(this.xjjImg)
            .to({ scaleX: 1.05, scaleY: 1.05 }, 200, egret.Ease.quartOut)
            .to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.quartOut);
    };
    XjjModel.prototype.animShouyi = function () {
        var _this = this;
        //收益动画
        SoundManager.playSound("goldpaopao");
        this.addGoldGroup.alpha = 1;
        //this.addGold.alpha = 1;
        egret.Tween.get(this.addGoldGroup).to({ y: -10 }, 200, egret.Ease.quartOut).wait(300).to({ alpha: 0 }, 200).call(function () {
            _this.addGoldGroup.y = 132;
            _this.addGoldGroup.alpha = 0;
        });
    };
    XjjModel.prototype.animGold = function () {
        var _this = this;
        //飘金币动画
        this.goldImg.x = this.x / 2;
        this.goldImg.y = this.y;
        this.goldImg.visible = true;
        var backPoint = this.globalToLocal(16, 68);
        egret.Tween.get(this.goldImg).to({ x: backPoint.x, y: backPoint.y }, 600, egret.Ease.quartOut).call(function () {
            _this.goldImg.visible = false;
            if (!_this.animate) {
                _this.animate = DragonBoneManager.getInstance().createAnimate("jingbi");
                _this.animate.addDBEventListener(dragonBones.AnimationEvent.COMPLETE, _this.onComplete, _this);
            }
            if (_this.animate) {
                _this.animate.animation.play("animation", 1);
                _this.animate.x = 30;
                _this.animate.y = 90;
                _this.animate.visible = true;
                BasePanel.currentPanel.addChild(_this.animate);
            }
        });
    };
    XjjModel.prototype.onComplete = function (e) {
        this.animate.visible = false;
    };
    XjjModel.prototype.onBoxBtn = function () {
        console.log("点到箱子了" + this.id);
    };
    XjjModel.prototype.dispose = function () {
        if (this.animate) {
            this.animate.removeDBEventListener(dragonBones.AnimationEvent.COMPLETE, this.onComplete, this);
            this.animate.dispose();
        }
    };
    return XjjModel;
}(eui.Component));
__reflect(XjjModel.prototype, "XjjModel", ["eui.UIComponent", "egret.DisplayObject"]);
window["XjjModel"] = XjjModel;
var ShareGainQuan = (function (_super) {
    __extends(ShareGainQuan, _super);
    function ShareGainQuan(info, quanCount, callbackObj) {
        var _this = _super.call(this) || this;
        _this.callbackObj = null;
        _this.info = info;
        _this.quanCount = quanCount;
        _this.callbackObj = callbackObj;
        return _this;
    }
    ShareGainQuan.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ShareGainQuan.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.initInfo();
        if (this.shareBtn)
            this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
        if (this.closeBtn)
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        if (this.closeBtn) {
            this.closeBtn.visible = false;
            egret.setTimeout(function () {
                _this.closeBtn.visible = true;
            }, this, 2000);
        }
        AdConstant.showBannerAd();
    };
    ShareGainQuan.prototype.initInfo = function () {
        if (this.info)
            this.infoText.text = this.info;
        this.onShareBtn(null);
    };
    ShareGainQuan.prototype.onShareBtn = function (e) {
        var _this = this;
        if (AppConfig.addQuan_zhanpan == "share") {
            // 分享接口
            ShareConstant.shareToGroup(function (result) {
                if (result) {
                    var data = ZhuanPanData.getZhuanPanQuanCount();
                    var count = data && data.count ? data.count + 2 : 2;
                    ZhuanPanData.updateZhuanPanQuanCount(count); //更新转盘券
                    ControllAlert.show("转盘券+" + _this.quanCount);
                    if (_this.callbackObj) {
                        _this.callbackObj.initUI();
                    }
                    _this.onCloseBtn(null);
                    DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "zhuanpan", "zhuanpan3", ""));
                }
                else {
                    ControllAlert.show("分享失败");
                }
            }, this);
        }
        else {
            //看广告
            AdConstant.lookRewardAd(function (result) {
                if (result) {
                    var data = ZhuanPanData.getZhuanPanQuanCount();
                    var count = data && data.count ? data.count + 2 : 2;
                    ZhuanPanData.updateZhuanPanQuanCount(count); //更新转盘券
                    ControllAlert.show("转盘券+" + _this.quanCount);
                    if (_this.callbackObj) {
                        _this.callbackObj.initUI();
                    }
                    _this.onCloseBtn(null);
                    DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "zhuanpan", "zhuanpan4", ""));
                }
                else {
                    ControllAlert.show("中断广告,无奖励");
                }
            }, this);
        }
    };
    ShareGainQuan.prototype.onCloseBtn = function (e) {
        Alert.closeAlert(this, 0);
    };
    ShareGainQuan.prototype.dispose = function () {
        platform.hideBannerAd();
        if (this.shareBtn)
            this.shareBtn.dispose();
        if (this.closeBtn)
            this.closeBtn.dispose();
    };
    return ShareGainQuan;
}(eui.Component));
__reflect(ShareGainQuan.prototype, "ShareGainQuan", ["eui.UIComponent", "egret.DisplayObject"]);
var ZhuanPan = (function (_super) {
    __extends(ZhuanPan, _super);
    function ZhuanPan() {
        var _this = _super.call(this) || this;
        _this.bornNum = 8; //转盘的区域总数
        //初始化转盘数据
        _this.deg = 0;
        _this.id = 0;
        return _this;
    }
    ZhuanPan.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ZhuanPan.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initUI();
        this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.kaishiBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.OnKaishiBtn, this);
        this.addBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onAddBtn, this);
    };
    ZhuanPan.prototype.initUI = function () {
        var data = ZhuanPanData.getZhuanPanQuanCount();
        if (!data) {
            ZhuanPanData.updateZhuanPanQuanCount(5);
            data = ZhuanPanData.getZhuanPanQuanCount();
        }
        var count = data.count ? data.count : 0;
        this.count.text = count + "";
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "zhuanpan", "zhuanpan1", ""));
    };
    ZhuanPan.prototype.onAddBtn = function (e) {
        var data = ZhuanPanData.getZhuanPanQuanCount();
        if (data && data.count >= 20) {
            ControllAlert.show("转盘券数量已满！");
            return;
        }
        var count = 2;
        Alert.alert(new ShareGainQuan("分享到群可获得2张转盘券", count, this), false);
    };
    ZhuanPan.prototype.OnKaishiBtn = function () {
        //消耗转盘券-1，转
        var zhuanPanData = ZhuanPanData.getZhuanPanQuanCount();
        if (zhuanPanData.count < 1) {
            ControllAlert.show("您的券不足1张！");
            var count = 2;
            Alert.alert(new ShareGainQuan("分享到群可获得2张转盘券", count, this), false);
            return;
        }
        /** 转盘30次开始 */
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间	
        var currentDate = DateTool.makeTime(timestamp);
        var data = ZhuanPanData.getZhuanPanCount();
        var count = (!data || data.date != currentDate) ? 30 : data.count;
        //转盘使用次数，每天30次
        if (count <= 0) {
            ControllAlert.show("转盘次数用完，明天再来");
            return;
        }
        ZhuanPanData.updateZhuanCount();
        /** 转盘30次结束 */
        //随机转的概率得到id
        var float = RandomUitl.randomFloat(0, 10);
        //读取当前的金币收益数量
        var shouyiValue = GameConstant.getAllShouYiValue();
        /*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
                for (var posid in positions) {
                    var position = PositionData.getPositionById(posid,StaticConstant.CurrentType);
                    if (position.playerid == "") continue;
                    var config = ConfigData.getPlayerById(position.playerid);
                    shouyiValue = shouyiValue.add(config.lixianshouyi);
                }*/
        if (float >= 0 && float < 1) {
            //钻石100
            this.id = 0;
            this.jiangliType = 1;
            this.jiangliCount = 100;
        }
        else if (float >= 1 && float < 2.5) {
            //金币4.3*秒产
            this.id = 1;
            this.jiangliType = 2;
            this.jiangliCount = shouyiValue.mul(4.3);
        }
        else if (float >= 2.5 && float < 4) {
            //钻石200
            this.id = 2;
            this.jiangliType = 1;
            this.jiangliCount = 200;
        }
        else if (float >= 4 && float < 6) {
            //金币8.6*秒产
            this.id = 3;
            this.jiangliType = 2;
            this.jiangliCount = shouyiValue.mul(8.6);
        }
        else if (float >= 6 && float < 6.5) {
            //钻石400
            this.id = 4;
            this.jiangliType = 1;
            this.jiangliCount = 400;
        }
        else if (float >= 6.5 && float < 8) {
            //金币12.9*秒产
            this.id = 5;
            this.jiangliType = 2;
            this.jiangliCount = shouyiValue.mul(12.9);
        }
        else if (float >= 8 && float < 8.5) {
            //钻石800
            this.id = 6;
            this.jiangliType = 1;
            this.jiangliCount = 800;
        }
        else if (float >= 8.5 && float <= 10) {
            //金币16.3*秒产
            this.id = 7;
            this.jiangliType = 2;
            this.jiangliCount = shouyiValue.mul(16.3);
        }
        //旋转角度
        this.deg = 5 * 360 - this.id * 360 / this.bornNum - (180 / this.bornNum) + (RandomUitl.randomInt(360 / this.bornNum * 0.1, 360 / this.bornNum * 0.9));
        this.initTurnplateGroup();
    };
    ZhuanPan.prototype.initTurnplateGroup = function () {
        var _this = this;
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "zhuanpan", "zhuanpan2", ""));
        var data = ZhuanPanData.getZhuanPanQuanCount();
        var count = (data && data.count) ? data.count - 1 : 0;
        ZhuanPanData.updateZhuanPanQuanCount(count);
        this.initUI();
        this.kaishiBtn.setEnable(false);
        egret.Tween.get(this.turnplateGroup).to({ rotation: this.deg }, 4000, egret.Ease.circInOut)
            .wait(1500)
            .call(function () {
            _this.kaishiBtn.setEnable(true);
            //去计算奖励
            Alert.alert(new ZhuanPanResult(_this.jiangliType, _this.id, _this.jiangliCount), true);
        }, this, []);
    };
    ZhuanPan.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0);
    };
    ZhuanPan.prototype.dispose = function () {
        if (this.closeBtn)
            this.closeBtn.dispose();
        if (this.kaishiBtn)
            this.kaishiBtn.dispose();
        if (this.addBtn)
            this.addBtn.dispose();
        if (this.parent)
            this.parent.removeChild(this);
    };
    return ZhuanPan;
}(eui.Component));
__reflect(ZhuanPan.prototype, "ZhuanPan", ["eui.UIComponent", "egret.DisplayObject"]);
var ZhuanPanResult = (function (_super) {
    __extends(ZhuanPanResult, _super);
    function ZhuanPanResult(jiangliType, id, jiangliCount) {
        var _this = _super.call(this) || this;
        _this._type = jiangliType;
        _this._id = id;
        _this._jiangliCount = jiangliCount;
        return _this;
    }
    ZhuanPanResult.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ZhuanPanResult.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.lingquBtn)
            this.lingquBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingquBtn, this);
        this.init();
        if (this.runBg)
            egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 2000);
    };
    ZhuanPanResult.prototype.init = function () {
        var role = RoleData.getRole();
        if (this._type == 1) {
            //钻石
            this.gaintypeImg.texture = RES.getRes("xjj_icon_zuanshi");
            this.gainCount.text = "+" + this._jiangliCount;
            role.jewel = role.jewel + this._jiangliCount;
        }
        else if (this._type == 2) {
            //金币
            this.gaintypeImg.texture = RES.getRes("xjj_icon_jinbi");
            this.gainCount.text = "+" + StringUtil.decimalFormat(new Decimal(Number(this._jiangliCount)));
            role.gold = role.gold.add(this._jiangliCount);
        }
        RoleData.putRole(role);
    };
    ZhuanPanResult.prototype.onLingquBtn = function () {
        Alert.closeAlert(this, 0);
    };
    ZhuanPanResult.prototype.dispose = function () {
        if (this.lingquBtn)
            this.lingquBtn.dispose();
    };
    return ZhuanPanResult;
}(eui.Component));
__reflect(ZhuanPanResult.prototype, "ZhuanPanResult", ["eui.UIComponent", "egret.DisplayObject"]);
var GameApi = (function () {
    function GameApi() {
    }
    GameApi.login = function (code, openid, channel, inviteid, invitetype, callback) {
        var _this = this;
        if (invitetype === void 0) { invitetype = 0; }
        var pars = {};
        if (code)
            pars["code"] = code;
        if (openid)
            pars["openid"] = openid;
        if (inviteid)
            pars["inviteid"] = inviteid;
        if (invitetype)
            pars["invitetype"] = invitetype;
        if (channel)
            pars["channel"] = channel;
        HttpClient.sendWxrequest(pars, AppConfig.login_url, function (data) {
            if (data.ret == -3) {
                if (callback)
                    callback(data);
                return;
            }
            if (data.ret != 0) {
                //登陆异常稍后重试
                platform.showModal('登陆失败', "\u767B\u9646\u5F02\u5E38" + data.ret + "\u7A0D\u540E\u91CD\u8BD5,\u8BF7\u68C0\u67E5\u7F51\u7EDC\u72B6\u51B5", '重启', false, function () {
                    platform.exitMiniProgram(null, null);
                });
                return;
            }
            _this.initData(data);
            if (callback)
                callback(data);
        }, function (e) {
            GameApi.login(code, openid, channel, inviteid, invitetype, callback);
        }, "POST");
    };
    GameApi.initData = function (data) {
        if (data.time) {
            //减去启动时间(登陆服务器之前是事务处理时间)
            var time = data.time - egret.getTimer();
            AccountData.putServerTime(time);
        }
        if (data.data) {
            if (data.data.openid) {
                AccountData.saveOpenId(data.data.openid);
            }
            if (data.data.id) {
                AccountData.setUid(data.data.id);
            }
            AccountData.putOffLine(data.offline);
            if (typeof data.data.udata == "string") {
                DataCenter.unpackData(data.data.udata);
            }
            else {
                DataCenter.unpackData("");
            }
        }
    };
    GameApi.updateData = function (udata, callback) {
        var openid = AccountData.getOpenId();
        var pars = { "openid": openid, "udata": JSON.stringify(udata) };
        HttpClient.sendWxrequest(pars, AppConfig.update_url, callback, function (e) {
            GameApi.updateData(udata, callback);
        }, "POST");
    };
    GameApi.shareCheck = function (encryptedData, iv, gettype, callback) {
        var openid = AccountData.getOpenId();
        var pars = { "openid": openid, "encryptedData": encryptedData, "iv": iv, "gettype": gettype };
        HttpClient.sendWxrequest(pars, AppConfig.share_url, callback, function (e) {
            GameApi.shareCheck(encryptedData, iv, gettype, callback);
        }, "GET");
    };
    //上线
    GameApi.inviteList = function (invitetype, callback) {
        // var inviteList = InviteData.getInviteList();
        // if(inviteList){
        // 	if(callback)callback(inviteList);
        // 	return;
        // }
        var openid = AccountData.getOpenId();
        var pars = { "openid": openid, "invitetype": invitetype, "sharepoint": 1 };
        HttpClient.sendWxrequest(pars, AppConfig.inviteList_url, callback, function (e) {
            GameApi.inviteList(invitetype, callback);
        }, "GET");
    };
    //新人
    GameApi.inviteNewSgin = function (invitetype, callback) {
        // var inviteList = InviteData.getInviteSgin();
        // if(inviteList){
        // 	if(callback)callback(inviteList);
        // 	return;
        // }
        var openid = AccountData.getOpenId();
        var pars = { "openid": openid, "invitetype": invitetype, "sharepoint": 1 };
        HttpClient.sendWxrequest(pars, AppConfig.inviteList_url, callback, function (e) {
            GameApi.inviteList(invitetype, callback);
        }, "GET");
    };
    //拉新领取
    GameApi.inviteNewLingqu = function (openid, inviteopenid, invitetype, isupdatemoney, callback) {
        if (isupdatemoney === void 0) { isupdatemoney = 0; }
        var inviteList = InviteData.getInviteSgin();
        if (inviteList) {
            if (callback)
                callback(inviteList);
            return;
        }
        var openid = AccountData.getOpenId();
        var pars = { "openid": openid, "invitetype": invitetype, "isupdatemoney": 0 };
        HttpClient.sendWxrequest(pars, AppConfig.inviteLingqu_url, callback, function (e) {
            GameApi.inviteList(invitetype, callback);
        }, "GET");
    };
    return GameApi;
}());
__reflect(GameApi.prototype, "GameApi");
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.login_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/login.action";
    AppConfig.update_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/update.action";
    AppConfig.share_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/share.action";
    AppConfig.inviteList_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/getinvitelist.action"; //每日上线
    AppConfig.invite_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/getinvitelistall.action"; //新人
    AppConfig.inviteLingqu_url = "https://wxgame.chiji-h5.com/wxgs_hcjj/invite.action"; //领取		
    /** 游戏配置路径 */
    //(线上是config1)
    AppConfig.appConfigUrl = "https://jsonconfig.chiji-h5.com/json/hcjj/appConfig2.json";
    AppConfig.shareConfigUrl = "https://jsonconfig.chiji-h5.com/json/hcjj/share.json";
    AppConfig.likesConfigUrl = "https://jsonconfig.chiji-h5.com/json/wddx/favlist.json";
    AppConfig.otherGameConfigUrl = "https://jsonconfig.chiji-h5.com/json/wddx/gamelist.json";
    // public static appConfigUrl:string = "https://jsonconfig.chiji-h5.com/ddz/ddzAppConfig_test.json";
    /** 外部资源下载根路径 */
    AppConfig.server_root_path = "https://www.chiji-h5.com/ddhz/pdk_res/";
    /** 外部资源保存根路径 */
    AppConfig.native_file_path = "";
    AppConfig.res_version = "";
    AppConfig.app_version = "v1.0.0";
    AppConfig.max_share_reward_count = 10;
    AppConfig.isLocal = false;
    AppConfig.appid = "wxfbca77fbae5ff115";
    /** 普通分享次数 */
    AppConfig.shareCount = 199;
    /** 分享等待毫秒 不足算分享不成功 */
    AppConfig.shareWaittime = 2500;
    /** 分享概率 不足算分享不成功 */
    AppConfig.shareRandomValue = 0.15;
    /** 钻石不足，限制次数 */
    AppConfig.jewel_limitCount = 50;
    /** 金币不足，限制次数 */
    AppConfig.jinbi_limitCount = 50;
    /** 邀请好友开关 */
    AppConfig.invite_haoyou = false;
    /** 邀请新人加速开关 */
    AppConfig.invite_xinren = false;
    /** 钻石、金币不足奖励 */
    AppConfig.notEnough_reward = "ad";
    /** 增加转盘券 */
    AppConfig.addQuan_zhanpan = "ad";
    /** 离线分享奖励 */
    AppConfig.Lixian_share = "ad";
    /** 解锁角色奖励 */
    AppConfig.unlock_reward = "ad";
    /** 宝箱奖励 */
    AppConfig.baoxiang_reward = "ad";
    /** 加速180s */
    AppConfig.speedup_180seconds = "ad";
    /** 7天签到 */
    AppConfig.sevenSign_lingqu = "ad";
    /** 猜你喜欢开关 */
    AppConfig.favlist_luck = true;
    //是否使用sdk猜你喜欢
    AppConfig.sdk_favlist = false;
    /** 抽屉页开关 */
    AppConfig.gamelist_luck = true;
    //是否使用sdk抽屉页
    AppConfig.sdk_gamelist = false;
    /** 悬浮页开关 */
    AppConfig.suspension_luck = true;
    //是否使用sdk悬浮页
    AppConfig.sdk_suspension = false;
    AppConfig.mp_path = { appid: "", path: "" };
    /** channel过滤列表 */
    AppConfig.channelList_luck = [];
    return AppConfig;
}());
__reflect(AppConfig.prototype, "AppConfig");
var AdConstant = (function () {
    function AdConstant() {
    }
    /** 看广告 */
    AdConstant.lookRewardAd = function (callback, thisObj) {
        var len = AdConstant.rewardedVideoAdUnitId.length;
        if (len > 0) {
            var adUnitId = AdConstant.rewardedVideoAdUnitId[RandomUitl.randomInt(0, len - 1)];
            platform.showRewardedVideoAd(adUnitId, function (e) {
                callback.apply(thisObj, [e.isEnded]);
            }, function (error) {
                console.log('广告error:', error);
                ShareConstant.shareToGroup(callback, thisObj);
            });
        }
        else {
            callback.apply(thisObj, [true]);
        }
    };
    /** 看banner广告 */
    AdConstant.showBannerAd = function () {
        var len = AdConstant.bannerAdUnitId.length;
        if (len > 0) {
            var adUnitId = AdConstant.bannerAdUnitId[RandomUitl.randomInt(0, len - 1)];
            platform.showBannerAd(adUnitId);
        }
    };
    AdConstant.bannerAdUnitId = [];
    AdConstant.rewardedVideoAdUnitId = [];
    return AdConstant;
}());
__reflect(AdConstant.prototype, "AdConstant");
var DaDianConstant = (function () {
    function DaDianConstant() {
    }
    DaDianConstant.send = function (params) {
        if (!this.is_dadian)
            return;
        if (this.sdk_dadian) {
            DDSDK.logTag(params.page, params.event, params.extra);
            return;
        }
        HttpClient.send(this.urlRoot, params, function (e) {
            console.log('statwx suc:', e);
        }, function (e) {
            console.log('statwx failed:', e);
        });
    };
    DaDianConstant.getDadianData = function (openid, page, event, extra) {
        return { appid: this.appid, openid: openid, page: page, event: event, extra: extra, channel: AccountData.getChannel() };
    };
    DaDianConstant.is_dadian = true;
    DaDianConstant.sdk_dadian = false;
    DaDianConstant.appid = "hcjj";
    DaDianConstant.urlRoot = "https://stat.chiji-h5.com/statwx_company.php";
    return DaDianConstant;
}());
__reflect(DaDianConstant.prototype, "DaDianConstant");
var ShareConstant = (function () {
    function ShareConstant() {
    }
    ShareConstant.setCurrentShareGroup = function (group) {
        this.currentGroup = group;
    };
    ShareConstant.getQuery = function (pars) {
        if (!pars)
            return '';
        var query = '';
        for (var key in pars) {
            var value = pars[key];
            query += key + "=" + value + "&";
        }
        return query;
    };
    ShareConstant.queryAddShareInfo = function (title, url, query) {
        if (!query)
            query = { title: title, imageUrl: url, sendOpenid: AccountData.getOpenId() };
        else {
            query['title'] = title;
            query['imageUrl'] = url;
            query["sendOpenid"] = AccountData.getOpenId();
        }
        //分享图打点
        DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid, "share", "share_send_info", query.title + ":" + query.imageUrl));
        return query;
    };
    ShareConstant.shareById = function (id, sucCallback, titleDIY, urlDIY, query) {
        if (titleDIY === void 0) { titleDIY = ""; }
        if (urlDIY === void 0) { urlDIY = ""; }
        if (query === void 0) { query = null; }
        this.shareTime = egret.getTimer().valueOf();
        var title = "";
        var url = "";
        if (this.shareJson) {
            for (var index in this.shareJson) {
                var data = this.shareJson[index];
                if (data.id == id) {
                    title = data.title;
                    url = data.url;
                }
            }
        }
        if (!ObjectUtil.isFalse(titleDIY))
            title = titleDIY;
        if (!ObjectUtil.isFalse(urlDIY))
            url = urlDIY;
        query = this.queryAddShareInfo(title, url, query);
        platform.shareAppMessage(title, url, this.getQuery(query), null, null, null);
        // platform.onShow((res)=>{
        // 	platform.replayAudio();			
        // 	var nowTime = egret.getTimer().valueOf();
        // 	if((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime ){
        // 		if(Math.random() >= AppConfig.shareRandomValue){
        // 			egret.setTimeout(()=>{
        // 				platform.offShow(null);			
        // 				if(sucCallback)sucCallback();
        // 			},this,200);
        // 		}else{
        // 			//概率只骗一次
        // 			platform.offShow(null);			
        // 			platform.onShow(this.onRandomFailOnShow(sucCallback));	
        // 			egret.setTimeout(()=>{
        // 				this.shareTime = egret.getTimer().valueOf();
        // 				platform.showModal("","请每次分享到不同群.","确定",false,()=>{
        // 					platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
        // 				});
        // 				// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
        // 				// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
        // 				// }));
        // 			},this,500);
        // 		}
        // 	}else{
        // 		this.shareTime = egret.getTimer().valueOf();
        // 		platform.showModal("","请每次分享到不同群!","确定",false,()=>{
        // 			platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
        // 		});
        // 		// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
        // 		// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
        // 		// }));
        // 	}
        // 	(WechatManager.getInstance() as WechatManager).doOnShow();			
        // });
    };
    /**
     * 分享策略1
     * @param query {inviteid:"",invitetype:1}
     */
    ShareConstant.randomShareAppMessage = function (sucCallback, query) {
        var _this = this;
        if (query === void 0) { query = null; }
        this.shareTime = egret.getTimer().valueOf();
        var title = "";
        var url = "";
        var randomShare = [];
        if (this.shareJson) {
            for (var index in this.shareJson) {
                var data = this.shareJson[index];
                if (data.group == this.currentGroup) {
                    randomShare.push(data);
                }
            }
        }
        if (randomShare.length > 0) {
            var random = RandomUitl.randomInt(0, randomShare.length - 1);
            var data = randomShare[random];
            if (data) {
                title = data.title;
                url = data.url;
            }
        }
        query = this.queryAddShareInfo(title, url, query);
        //重置分享组
        this.currentGroup = 1;
        this.callback = function (b) {
            egret.setTimeout(function () {
                if (ShareConstant.shareCancel) {
                    platform.showModal("", "您取消分享,是否继续分享?", "确定", true, function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            ShareConstant.shareId = RandomUitl.randomInt(10000, 20000);
                            query['shareValue'] = ShareConstant.shareId;
                            platform.shareAppMessage(title, url, _this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
                        }
                        else if (res.cancel) {
                            console.log('用户点击取消');
                            ControllAlert.show("您取消了分享");
                        }
                    });
                }
                else {
                    if (ShareConstant.cheating > 1) {
                        if (sucCallback)
                            sucCallback(true);
                    }
                    else {
                        if (b) {
                            if (sucCallback)
                                sucCallback(true);
                        }
                        else {
                            platform.showModal("", "分享失败,是否继续分享?", "确定", true, function (res) {
                                if (res.confirm) {
                                    console.log('用户点击确定');
                                    ShareConstant.shareId = RandomUitl.randomInt(10000, 20000);
                                    query['shareValue'] = ShareConstant.shareId;
                                    platform.shareAppMessage(title, url, _this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
                                }
                                else if (res.cancel) {
                                    if (sucCallback)
                                        sucCallback(false);
                                    console.log('用户点击取消');
                                    ControllAlert.show("您取消了分享");
                                }
                            });
                        }
                    }
                }
                ShareConstant.shareCancel = false;
            }, _this, 100);
        };
        ShareConstant.shareId = RandomUitl.randomInt(10000, 20000);
        query['shareValue'] = ShareConstant.shareId;
        platform.shareAppMessage(title, url, this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
        // let offShow:Function = ()=>{
        // 	platform.onShow((res)=>{
        // 		platform.replayAudio();			
        // 		var nowTime = egret.getTimer().valueOf();
        // 		if((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime ){
        // 			if(Math.random() >= AppConfig.shareRandomValue){
        // 				egret.setTimeout(()=>{
        // 					platform.offShow(null);			
        // 					if(sucCallback)sucCallback();
        // 				},this,200);
        // 			}else{
        // 				//概率只骗一次
        // 				platform.offShow(null);			
        // 				platform.onShow(this.onRandomFailOnShow(sucCallback));	
        // 				egret.setTimeout(()=>{
        // 					this.shareTime = egret.getTimer().valueOf();
        // 					platform.showModal("","请每次分享到不同群","确定",false,()=>{
        // 						platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
        // 					});
        // 					// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
        // 					// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
        // 					// }));
        // 				},this,500);
        // 			}
        // 		}else{
        // 			this.shareTime = egret.getTimer().valueOf();
        // 			platform.showModal("","请每次分享到不同群","确定",false,()=>{
        // 				platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
        // 			});
        // 			// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
        // 			// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
        // 			// }));
        // 		}
        // 		(WechatManager.getInstance() as WechatManager).doOnShow();			
        // 	});
        // };
        // platform.offShow(offShow);	
    };
    ShareConstant.onRandomFailOnShow = function (sucCallback) {
        return function () {
            if (sucCallback)
                sucCallback();
            platform.offShow(null);
            WechatManager.getInstance().doOnShow();
        };
    };
    /**
     * 分享策略2
     * @param query {inviteid:"",invitetype:1}
     */
    ShareConstant.randomShareAppMessage2 = function (sucCallback, query, tipsText) {
        var _this = this;
        if (query === void 0) { query = null; }
        if (tipsText === void 0) { tipsText = ""; }
        this.shareTime = egret.getTimer().valueOf();
        var title = "";
        var url = "";
        var randomShare = [];
        if (this.shareJson) {
            for (var index in this.shareJson) {
                var data = this.shareJson[index];
                if (data.group == this.currentGroup) {
                    randomShare.push(data);
                }
            }
        }
        if (randomShare.length > 0) {
            var random = RandomUitl.randomInt(0, randomShare.length - 1);
            var data = randomShare[random];
            if (data) {
                title = data.title;
                url = data.url;
            }
        }
        query = this.queryAddShareInfo(title, url, query);
        //重置分享组
        this.currentGroup = 1;
        this.callback = function (b) {
            egret.setTimeout(function () {
                if (ShareConstant.shareCancel) {
                    platform.showModal("", "您取消分享,是否继续分享?", "确定", true, function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            ShareConstant.shareId = RandomUitl.randomInt(10000, 20000) * -1;
                            query['shareValue'] = ShareConstant.shareId;
                            platform.shareAppMessage(title, url, _this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
                        }
                        else if (res.cancel) {
                            console.log('用户点击取消');
                            ControllAlert.show("您取消了分享");
                        }
                    });
                }
                else {
                    if (b) {
                        if (sucCallback)
                            sucCallback(true);
                    }
                    else {
                        platform.showModal("", "分享失败,是否继续分享?", "确定", true, function (res) {
                            if (res.confirm) {
                                console.log('用户点击确定');
                                ShareConstant.shareId = RandomUitl.randomInt(10000, 20000) * -1;
                                query['shareValue'] = ShareConstant.shareId;
                                platform.shareAppMessage(title, url, _this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
                            }
                            else if (res.cancel) {
                                console.log('用户点击取消');
                                ControllAlert.show("您取消了分享");
                            }
                        });
                    }
                }
                ShareConstant.shareCancel = false;
            }, _this, 100);
        };
        ShareConstant.shareId = RandomUitl.randomInt(10000, 20000) * -1;
        query['shareValue'] = ShareConstant.shareId;
        platform.shareAppMessage(title, url, this.getQuery(query), null, null, function (e) { ShareConstant.shareCancel = true; });
        // platform.offShow(null);		
        // platform.onShow((res)=>{
        // 	platform.replayAudio();			
        // 	var query = res.query;
        // 	console.log('ShARE_BACK_WXGAME:'+JSON.stringify(res));
        // 	console.log(query.shareValue == this.shareId);
        // 	if(query && query.shareValue && query.shareValue == this.shareId && res.shareTicket){
        // 		platform.getShareInfo({
        // 			shareTicket: res.shareTicket,
        // 			success: (data) => {
        // 				var e = data.encryptedData;
        // 				var i = data.iv;
        // 				TaskApi.shareGroup(e,i,(data)=>{
        // 					if(data.ret == 0){								
        // 						egret.setTimeout(()=>{
        // 							if(sucCallback)sucCallback();
        // 						},this,200);
        // 					}else{
        // 						platform.showModal("","请分享到其他群(30分钟内相同群无法获得奖励)","确定",false,()=>{});
        // 						// Alert.alert(new ShareNotice("分享失败","请分享到其他群\n(30分钟内相同群无法获得奖励)"));	
        // 					}
        // 				})
        // 			}
        // 		});
        // 		ShareConstant.shareId = 0;
        // 		platform.offShow(null);
        // 		(WechatManager.getInstance() as WechatManager).doOnShow();
        // 	}else if(query && query.shareValue && query.shareValue == this.shareId ){
        // 		Alert.closeAlert();
        // 		platform.showModal("","请每次分享到不同群","确定",false,()=>{});				
        // 		// egret.setTimeout(()=>{
        // 		// 	Alert.alert(new ShareNotice("分享失败","请每次分享到不同群"));		
        // 		// },this,200);
        // 	}else{
        // 		//通知分享完成
        // 		if(complete){
        // 			platform.showModal("",tipsText,"确定",false,()=>{});				
        // 			// egret.setTimeout(()=>{
        // 			// 	Alert.alert(new ShareNotice("分享成功",tipsText));	
        // 			// },this,200);
        // 			// var nowTime = egret.getTimer().valueOf();
        // 			// if((nowTime - ShareConstant.shareTime) >= 2000 ){
        // 			// 	if(Math.random() < 0.85){
        // 			// 		complete.apply(this);					
        // 			// 	}else{
        // 			// 		egret.setTimeout(()=>{
        // 			// 			Alert.alert(new ShareNotice("分享失败","请分享到不同群再试"));	
        // 			// 		},this,500);
        // 			// 	}
        // 			// }else{
        // 			// 	Alert.alert(new ShareNotice("分享失败","需要分享到微信群才能获得"));	
        // 			// }
        // 		}else{
        // 			if(tipsText == "")tipsText = "进群点击自己的链接即可获得"
        // 			platform.showModal("",tipsText,"确定",false,()=>{});									
        // 			// Alert.alert(new ShareNotice("分享到群",tipsText));
        // 		}
        // 	}
        // });
    };
    ShareConstant.onlyShare = function (currentGroup) {
        this.currentGroup = currentGroup;
        var title = "";
        var url = "";
        var randomShare = [];
        if (this.shareJson) {
            for (var index in this.shareJson) {
                var data = this.shareJson[index];
                if (data.group == this.currentGroup) {
                    randomShare.push(data);
                }
            }
        }
        if (randomShare.length > 0) {
            var random = RandomUitl.randomInt(0, randomShare.length - 1);
            var data = randomShare[random];
            if (data) {
                title = data.title;
                url = data.url;
            }
        }
        var query = {};
        query["inviteid"] = AccountData.uid();
        query['invitetype'] = 3;
        query = this.queryAddShareInfo(title, url, query);
        platform.shareAppMessage(title, url, this.getQuery(query), null, null, null);
        //重置分享组
        this.currentGroup = 1;
    };
    ShareConstant.randomTitleAndUrl = function () {
        var title = "";
        var url = "";
        var randomShare = [];
        if (this.shareJson) {
            for (var index in this.shareJson) {
                var data = this.shareJson[index];
                if (data.group == 1) {
                    randomShare.push(data);
                }
            }
        }
        if (randomShare.length > 0) {
            var random = RandomUitl.randomInt(0, randomShare.length - 1);
            var data = randomShare[random];
            if (data) {
                title = data.title;
                url = data.url;
            }
        }
        var query = {};
        query['title'] = title;
        query['imageUrl'] = url;
        query["sendOpenid"] = AccountData.getOpenId();
        return { title: title, imageUrl: url, query: query };
    };
    //分享到群
    ShareConstant.shareToGroup = function (callback, thisObj, checkGroup, tipsText, complete, invitetype) {
        if (checkGroup === void 0) { checkGroup = false; }
        if (tipsText === void 0) { tipsText = ""; }
        if (complete === void 0) { complete = null; }
        if (invitetype === void 0) { invitetype = 3; }
        var sharedata = ShareData.updateShareCount();
        var count = sharedata ? sharedata.count : 0;
        // let data = AdData.getAdCount();
        // let timestamp = AccountData.serverTime() + egret.getTimer();
        // if((!data || timestamp - data.gettime > 1000 * 60 * 2 || AppConfig.adCount >= data.count) && AppConfig.model == 1 && this.currentGroup == 1){//特殊邀请分享口子，不做此判断(拉新人)
        // 	AdConstant.lookRewardAd(result=>{
        // 		AdData.updateAdCount();
        // 		if(callback)callback.apply(thisObj,[result]);
        // 	},this);
        // 	return;
        // }
        //邀请上线
        var query = {};
        query["inviteid"] = RoleData.getRole().uid;
        query['invitetype'] = invitetype;
        if (!checkGroup) {
            ShareConstant.randomShareAppMessage(function (res) {
                //重置内部回调
                ShareConstant.callback = null;
                ShareConstant.cheating = 0;
                if (callback)
                    callback.apply(thisObj, [res]);
            }, query);
        }
        else {
            ShareConstant.randomShareAppMessage2(function (res) {
                //重置内部回调
                ShareConstant.callback = null;
                ShareConstant.cheating = 0;
                if (callback)
                    callback.apply(thisObj, [res]);
            }, query, tipsText);
        }
    };
    //分享配置
    ShareConstant.shareJson = [];
    //分享时间(计算分享到onShow所用时间)
    ShareConstant.shareTime = 0;
    //分享组(分享图组)
    ShareConstant.currentGroup = 1;
    //分享是否被取消
    ShareConstant.shareCancel = false;
    //每次分享唯一id(只保留最后一次分享)
    ShareConstant.shareId = 0;
    //骗分享次数
    ShareConstant.cheating = 0;
    return ShareConstant;
}());
__reflect(ShareConstant.prototype, "ShareConstant");
window["ShareConstant"] = ShareConstant;
/**
 * 状态信息
 */
var StateConstant = (function () {
    function StateConstant() {
    }
    StateConstant.getShow = function (state) {
        if (this.stateKeyValue[state] != null) {
            return this.stateKeyValue[state];
        }
        return '';
    };
    StateConstant.STATE_SUCCESS = 0;
    StateConstant.stateKeyValue = {
        "-1": "参数不足",
        "-2": "非法接口",
        "-3": "非法API",
        "-4": "参数非法或重复操作",
        "-5": "未登录",
        "-6": "已经在房间中",
        "-7": "开房次数不足",
        "-8": "房间号错误",
        "-9": "房间已满",
        "-10": "已经准备过",
        "-11": "不是当前操作者",
        "-12": "手牌不足",
        "-13": "出牌小了",
        "-14": "一轮结束",
        "-15": "用户不存在",
        "-16": "任务不存在",
        "-17": "奖励已领取",
        "-18": "奖励条件不满足",
        "-19": "匹配中",
        "-20": "余额不足",
        "-21": "充值订单失败",
        "-22": "订单不存在",
        "-23": "红包已被领取"
    };
    return StateConstant;
}());
__reflect(StateConstant.prototype, "StateConstant");
var AccountData = (function () {
    function AccountData() {
    }
    /** 缓存openId */
    AccountData.saveOpenId = function (openId) {
        platform.setStorageSync("playerOpenId", openId);
        this.saveOpenIdTime(new Date().getTime());
    };
    AccountData.getOpenId = function () {
        return platform.getStorageSync("playerOpenId");
    };
    AccountData.delOpenId = function () {
        platform.removeStorageSync("playerOpenId");
    };
    AccountData.saveOpenIdTime = function (timestream) {
        platform.setStorageSync("playerOpenIdOutTime", timestream);
    };
    AccountData.getOpenIdTime = function () {
        return platform.getStorageSync("playerOpenIdOutTime");
    };
    /** 缓存微信用户信息 */
    AccountData.putwxUser = function (wxuser) {
        platform.setStorageSync("wxuser", wxuser);
    };
    AccountData.getwxUser = function () {
        return platform.getStorageSync("wxuser");
    };
    AccountData.putWXcode = function (code) {
        CacheData.saveRAMData("loginCode", code);
    };
    AccountData.getWXcode = function () {
        return CacheData.getRAMData("loginCode");
    };
    AccountData.putLaunchOption = function (opt) {
        CacheData.saveRAMData('launchOption', opt);
    };
    AccountData.getLaunchOption = function () {
        return CacheData.getRAMData("launchOption");
    };
    AccountData.putChannel = function (channel) {
        platform.setStorageSync("channel_Cache", channel);
    };
    AccountData.getChannel = function () {
        return platform.getStorageSync("channel_Cache");
    };
    AccountData.putMp = function (mp) {
        platform.setStorageSync("mp_Cache", mp);
    };
    AccountData.getMp = function () {
        return platform.getStorageSync("mp_Cache");
    };
    /** 登陆时间 */
    AccountData.serverTime = function () {
        return CacheData.getRAMData("serverTime");
    };
    AccountData.putServerTime = function (time) {
        CacheData.saveRAMData('serverTime', time);
    };
    AccountData.uid = function () {
        return CacheData.getRAMData("uid");
    };
    AccountData.setUid = function (uid) {
        CacheData.saveRAMData('uid', uid);
    };
    /**
     * 离线时间
     * (用于计算离线收益:单位/秒)
     * */
    AccountData.getOffLine = function () {
        return CacheData.getRAMData("offLineTime");
    };
    AccountData.putOffLine = function (time) {
        CacheData.saveRAMData("offLineTime", time);
    };
    return AccountData;
}());
__reflect(AccountData.prototype, "AccountData");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var ConfigData = (function () {
    function ConfigData() {
    }
    /** 小姐姐配置 */
    ConfigData.getPlayer = function () {
        var config = RES.getRes("config_json");
        return config;
    };
    ConfigData.getPlayerById = function (id) {
        var config = this.getPlayer();
        var index = Number(id);
        if (index >= 1000 && index <= 1050) {
            index = index - 1001;
            return config[index];
        }
        else if (index >= 2000 && index <= 2050) {
            index = index - 2001 + 38;
            return config[index];
        }
        else if (index >= 3000 && index <= 3050) {
            index = index - 3001 + 38 * 2;
            return config[index];
        }
    };
    return ConfigData;
}());
__reflect(ConfigData.prototype, "ConfigData");
var DataCenter = (function () {
    function DataCenter() {
    }
    /** 数据打包并发送给服务器 */
    DataCenter.packData = function () {
        var udata = {};
        udata["role"] = RoleData.getRole();
        udata["players"] = PlayerData.getPlayers();
        udata["positions"] = PositionData.getPositions();
        udata["currentSpeedState"] = SpeedupData.getSpeedup();
        udata["speedupCount"] = SpeedupData.getSpeedupCount();
        udata["zhuanPanQuanCount"] = ZhuanPanData.getZhuanPanQuanCount();
        udata["currentZhuanCount"] = ZhuanPanData.getZhuanPan();
        udata["inviteTaskFinish"] = InviteData.getInviteTaskfinishId();
        udata["guideOption"] = GuideData.currentOpt();
        udata["randomBox"] = RandomBoxData.getRandomBox();
        udata["NotEnoughData"] = NotEnoughData.getNotEnoughData();
        udata["sevenDaySignData"] = SevenDaySignData.getSignData();
        GameApi.updateData(udata, function () { console.log("服务器数据发送成功！"); });
    };
    /** 数据解包并缓存 */
    DataCenter.unpackData = function (udataStr) {
        var udata = null;
        try {
            udata = JSON.parse(udataStr);
        }
        catch (e) {
            console.log("udataStr:" + udataStr, e);
        }
        if (!udata)
            udata = {};
        if (udata.role)
            RoleData.putRole(udata.role);
        else {
            var role = new Role();
            RoleData.putRole(role);
            //新玩家
            GuideData.putCurrentOpt(1);
        }
        if (udata.players)
            PlayerData.putPlayers(udata.players);
        if (udata.positions)
            PositionData.putPositions(udata.positions);
        if (udata.currentSpeedState)
            SpeedupData.putSpeedup(udata.currentSpeedState);
        if (udata.speedupCount)
            SpeedupData.putSpeedupCount(udata.speedupCount);
        if (udata.zhuanPanQuanCount)
            ZhuanPanData.putZhuanPanQuanCount(udata.zhuanPanQuanCount);
        if (udata.currentZhuanCount)
            ZhuanPanData.putZhuanPan(udata.currentZhuanCount);
        InviteData.setInviteTaskfinishId(udata.inviteTaskFinish);
        if (udata.guideOption)
            GuideData.putCurrentOpt(udata.guideOption);
        else {
            GuideData.putCurrentOpt(1);
        }
        if (udata.randomBox)
            RandomBoxData.putRandomBox(udata.randomBox);
        if (udata.NotEnoughData)
            NotEnoughData.putNotEnoughData(udata.NotEnoughData);
        if (udata.sevenDaySignData)
            SevenDaySignData.putSignData(udata.sevenDaySignData);
    };
    return DataCenter;
}());
__reflect(DataCenter.prototype, "DataCenter");
/** 邀请好友信息 */
var InviteData = (function (_super) {
    __extends(InviteData, _super);
    function InviteData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 拉好友注册 */
    InviteData.getInviteSgin = function () {
        return this.getRAMData("InviteSginData");
    };
    InviteData.putInviteSgin = function (data) {
        this.saveRAMData("InviteSginData", data);
    };
    /** 拉好友上线 */
    InviteData.getInviteList = function () {
        return this.getRAMData("InviteListData");
    };
    InviteData.putInviteList = function (list) {
        this.saveRAMData("InviteListData", list);
    };
    /** 邀请有礼领取情况 type:1 邀请上线  2邀请新人  */
    InviteData.getInviteTaskfinishId = function () {
        return this.getRAMData("InviteTaskfinishId");
    };
    InviteData.getInviteTaskfinishByType = function (type) {
        var finishs = this.getInviteTaskfinishId();
        var data = finishs ? finishs[type] : null;
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        if (data && data.date != currentDate)
            data = null;
        return data;
    };
    /** 更新领取 */
    InviteData.updateInviteTaskFinishId = function (type) {
        var finishs = this.getInviteTaskfinishId();
        var data = finishs ? finishs[type] : null;
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        if (!data) {
            data = { date: currentDate, count: 1, type: type };
        }
        else {
            if (data.date != currentDate) {
                data = { date: currentDate, count: 1, type: type };
            }
            else {
                data.count++;
            }
        }
        if (!finishs)
            finishs = {};
        finishs[type] = data;
        this.saveRAMData("InviteTaskfinishId", finishs);
    };
    /** 检测领取 */
    /*	public static checkisFinish(lingquCount:number){
            var data = this.getInviteTaskfinishId();
            if(!data)return false;
            var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
            var currentDate = DateTool.makeTime(timestamp);
            if(data.date != currentDate){
                this.saveRAMData("InviteTaskfinishId",null);
                return false;
            }
            var count = data.count;
            return count-lingquCount;
            //return ArrayUtil.contains(ids,id);
        }*/
    /** 登陆保存 */
    InviteData.setInviteTaskfinishId = function (data) {
        // var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
        // var currentDate = DateTool.makeTime(timestamp);
        // if(data && data.date != currentDate)data = null;
        this.saveRAMData("InviteTaskfinishId", data);
    };
    return InviteData;
}(CacheData));
__reflect(InviteData.prototype, "InviteData");
/**
 * 钻石、金币不足，30次每天
 */
var NotEnoughData = (function () {
    function NotEnoughData() {
    }
    /** 用于从服务器拉取数据 */
    NotEnoughData.putNotEnoughData = function (data) {
        CacheData.saveRAMData("NotEnoughData", data);
    };
    NotEnoughData.getNotEnoughData = function () {
        return CacheData.getRAMData("NotEnoughData");
    };
    /** 转盘限制次数：30 */
    NotEnoughData.updateNotJewelCount = function (jewelCount, jinbiCount) {
        if (jewelCount === void 0) { jewelCount = 0; }
        if (jinbiCount === void 0) { jinbiCount = 0; }
        var datas = this.getNotEnoughData();
        // if(!datas)datas = {};
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        var data = datas;
        if (!data) {
            datas = new NotEnough_vo(currentDate, AppConfig.jewel_limitCount - jewelCount, AppConfig.jinbi_limitCount - jinbiCount); //次数50次
        }
        else {
            if (data.date == currentDate) {
                data.jewelCount -= jewelCount;
                data.jinbiCount -= jinbiCount;
            }
            else {
                data = new NotEnough_vo(currentDate, AppConfig.jewel_limitCount - jewelCount, AppConfig.jinbi_limitCount - jinbiCount);
            }
            datas = data;
        }
        this.putNotEnoughData(datas);
    };
    /** 转盘日期，次数30次 */
    NotEnoughData.getcurrentLimitData = function () {
        var data = this.getNotEnoughData();
        // if(!data) data = {};
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间	
        var currentDate = DateTool.makeTime(timestamp);
        var d = data;
        if (d && d.date != currentDate) {
            //删除过期的记录
            delete d.jewelCount;
            delete d.jinbiCount;
            this.putNotEnoughData(data);
            return null;
        }
        return d;
    };
    return NotEnoughData;
}());
__reflect(NotEnoughData.prototype, "NotEnoughData");
/** 人物信息 */
var PlayerData = (function () {
    function PlayerData() {
    }
    PlayerData.getPlayers = function () {
        return CacheData.getRAMData("players");
    };
    PlayerData.updatePlayer = function (id, player) {
        var players = this.getPlayers();
        if (!players)
            players = {};
        players[id] = player;
        CacheData.saveRAMData("players", players);
    };
    PlayerData.getPlayerById = function (id) {
        var players = this.getPlayers();
        return players && players[id] ? players[id] : null;
    };
    PlayerData.putPlayers = function (players) {
        CacheData.saveRAMData("players", players);
    };
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
/** 位置信息 */
var PositionData = (function () {
    function PositionData() {
    }
    PositionData.getPositions = function () {
        return CacheData.getRAMData("positions");
    };
    PositionData.getPositionsById = function (type) {
        var positions = CacheData.getRAMData("positions");
        return positions && positions[type] ? positions[type] : null;
        // return CacheData.getRAMData("positions")
        // return platform.getStorageSync("positions");
    };
    PositionData.updatePosition = function (posid, position, type) {
        var positionCache = CacheData.getRAMData("positions");
        if (!positionCache)
            positionCache = {};
        var positions = positionCache && positionCache[type] ? positionCache[type] : null;
        if (!positions)
            positions = {};
        positions[posid] = position;
        positionCache[type] = positions;
        // platform.setStorageSync("positions",positions);
        CacheData.saveRAMData("positions", positionCache);
    };
    PositionData.getPositionById = function (posid, type) {
        var positions = this.getPositionsById(type);
        return positions && positions[posid] ? positions[posid] : null;
    };
    PositionData.putPositions = function (positions) {
        var posData = null;
        if (positions) {
            for (var k in positions) {
                var pos = positions[k];
                if (pos.posid) {
                    if (pos.isHasBox == undefined) {
                        pos['isHasBox'] = false;
                    }
                    console.log(pos);
                    posData = { "1": positions };
                    break;
                }
            }
            if (!posData) {
                for (var k_1 in positions) {
                    var postions1 = positions[k_1];
                    if (postions1) {
                        for (var k1 in postions1) {
                            var pos_1 = postions1[k1];
                            if (pos_1.isHasBox == undefined) {
                                pos_1['isHasBox'] = false;
                            }
                        }
                    }
                }
            }
        }
        // platform.setStorageSync("positions",positions);		
        CacheData.saveRAMData("positions", posData ? posData : positions);
    };
    return PositionData;
}());
__reflect(PositionData.prototype, "PositionData");
var RandomBoxData = (function () {
    function RandomBoxData() {
    }
    RandomBoxData.getRandomBox = function () {
        return CacheData.getRAMData("randomBox");
    };
    RandomBoxData.updateRandomBoxCount = function () {
        var data = this.getRandomBox();
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        if (!data) {
            data = new RandomBox(currentDate, 1);
        }
        else {
            if (data.date == currentDate) {
                data.count += 1;
            }
            else {
                data = new RandomBox(currentDate, 1);
            }
        }
        this.putRandomBox(data);
        return data;
    };
    /** 用于从服务器拉取数据 */
    RandomBoxData.putRandomBox = function (data) {
        CacheData.saveRAMData("randomBox", data);
    };
    return RandomBoxData;
}());
__reflect(RandomBoxData.prototype, "RandomBoxData");
var RoleData = (function () {
    function RoleData() {
    }
    RoleData.getRole = function () {
        var role = CacheData.getRAMData("role");
        if (role)
            role.gold = new Decimal(role.gold);
        return role;
    };
    RoleData.putRole = function (role) {
        CacheData.saveRAMData("role", role);
    };
    //创建金币
    RoleData.getBuildGold = function (id, count) {
        var config = ConfigData.getPlayerById(id);
        if (count == null)
            count = 1;
        var initialGold = new Decimal(config.initgoldbuy); //初始购买金币数
        var buildGold = initialGold.mul(Math.pow(Number(config.goldbuyxishu), count - 1));
        return new Decimal(buildGold);
    };
    //创建钻石
    RoleData.getBuildJewel = function (id, count) {
        var config = ConfigData.getPlayerById(id);
        if (count == null)
            count = 1;
        var initialJewel = Number(config.initjewelbuy);
        var buildJewel = initialJewel + Number(config.jewelbuyxishu) * (count - 1);
        return Math.round(buildJewel);
    };
    /** 是否领取过添加到小程序奖励 */
    RoleData.getAddProgram = function () {
        return CacheData.getRAMData("addProgramCache");
    };
    RoleData.putAddProgram = function () {
        CacheData.saveRAMData("addProgramCache", 1);
    };
    /** 关注公众号每日领奖
     */
    RoleData.getFocusGain = function () {
        return CacheData.getRAMData("focusGainCache");
    };
    /** 记录领取日期
     */
    RoleData.putFocusGain = function (date) {
        CacheData.saveRAMData("focusGainCache", date);
    };
    //通过类型和等级获取是哪个人物的id  1小姐姐 2小哥哥 3小宠物
    RoleData.getIdByLevel = function (type, level) {
        if (type == 1) {
            var id = (1000 + Number(level)) + "";
            return id;
        }
        else if (type == 2) {
            var id = (2000 + Number(level)) + "";
            return id;
        }
        else if (type == 3)
            var id = (3000 + Number(level)) + "";
        return id;
    };
    return RoleData;
}());
__reflect(RoleData.prototype, "RoleData");
var SevenDaySignData = (function () {
    function SevenDaySignData() {
    }
    /**
     * 连续签到领取记录
     * @param timestamp 上次领取时间戳
     * @param count 领过次数
     */
    SevenDaySignData.updateSign = function (timestamp, count) {
        var data = { timestamp: timestamp, count: count };
        CacheData.saveRAMData("SevenDaySignCache", data);
    };
    SevenDaySignData.getSignData = function () {
        return CacheData.getRAMData("SevenDaySignCache");
    };
    SevenDaySignData.putSignData = function (data) {
        CacheData.saveRAMData("SevenDaySignCache", data);
    };
    return SevenDaySignData;
}());
__reflect(SevenDaySignData.prototype, "SevenDaySignData");
var ShareData = (function () {
    function ShareData() {
    }
    ShareData.getShareCount = function () {
        return CacheData.getRAMData("shareCountSync");
    };
    ShareData.updateShareCount = function () {
        var data = this.getShareCount();
        var timestamp = AccountData.serverTime() + egret.getTimer();
        var date = DateTool.makeTime(timestamp);
        if (!data || data.date != date) {
            data = { count: 1, date: date };
        }
        else {
            data.count++;
        }
        CacheData.saveRAMData("shareCountSync", data);
        return data;
    };
    ShareData.putShareCount = function (data) {
        CacheData.saveRAMData("shareCountSync", data);
    };
    return ShareData;
}());
__reflect(ShareData.prototype, "ShareData");
var SoundData = (function (_super) {
    __extends(SoundData, _super);
    function SoundData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoundData.getSoundValue = function () {
        var sVal = platform.getStorageSync("gameSoundValue");
        if (sVal == null) {
            this.putSoundValue(10);
            return 10;
        }
        return parseInt(sVal);
    };
    SoundData.putSoundValue = function (value) {
        platform.setStorageSync("gameSoundValue", value);
    };
    SoundData.getBgSoundValue = function () {
        var sVal = platform.getStorageSync("gameBgSoundValue");
        if (sVal == null) {
            this.putBgSoundValue(4);
            return 4;
        }
        return parseInt(sVal);
    };
    SoundData.putBgSoundValue = function (value) {
        platform.setStorageSync("gameBgSoundValue", value);
    };
    return SoundData;
}(CacheData));
__reflect(SoundData.prototype, "SoundData");
var SpeedupData = (function () {
    function SpeedupData() {
    }
    SpeedupData.getSpeedup = function () {
        return CacheData.getRAMData("currentSpeedState");
    };
    SpeedupData.updateSpeedup = function (time, keeptime) {
        var data = this.getSpeedup();
        if (!data) {
            data = {};
        }
        {
            data.time = time;
            data.keeptime = keeptime;
            this.putSpeedup(data);
        }
    };
    /** 用于从服务器拉取数据 */
    SpeedupData.putSpeedup = function (data) {
        CacheData.saveRAMData("currentSpeedState", data);
    };
    SpeedupData.getSpeedupCount = function () {
        return CacheData.getRAMData("speedupCount");
    };
    SpeedupData.updateSpeedupCount = function () {
        var data = this.getSpeedupCount();
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        if (!data) {
            data = new Speedup(currentDate, 1);
        }
        else {
            if (data.date == currentDate) {
                data.count += 1;
            }
            else {
                data = new Speedup(currentDate, 1);
            }
        }
        this.putSpeedupCount(data);
        return data;
    };
    /** 用于从服务器拉取数据 */
    SpeedupData.putSpeedupCount = function (data) {
        CacheData.saveRAMData("speedupCount", data);
    };
    return SpeedupData;
}());
__reflect(SpeedupData.prototype, "SpeedupData");
var ZhuanPanData = (function () {
    function ZhuanPanData() {
    }
    /** 用于从服务器拉取数据 */
    ZhuanPanData.putZhuanPan = function (data) {
        CacheData.saveRAMData("currentZhuanCount", data);
    };
    ZhuanPanData.getZhuanPan = function () {
        return CacheData.getRAMData("currentZhuanCount");
    };
    /** 转盘限制次数：30 */
    ZhuanPanData.updateZhuanCount = function (count) {
        if (count === void 0) { count = 1; }
        var datas = this.getZhuanPan();
        if (!datas)
            datas = {};
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间
        var currentDate = DateTool.makeTime(timestamp);
        var data = datas;
        if (!data) {
            datas = new ZhuanPan_vo(currentDate, 30 - count); //次数30次
        }
        else {
            if (data.date == currentDate) {
                data.count -= count;
            }
            else {
                data = new ZhuanPan_vo(currentDate, 30 - count);
            }
            datas = data;
        }
        this.putZhuanPan(datas);
    };
    /** 转盘日期，次数30次 */
    ZhuanPanData.getZhuanPanCount = function () {
        var data = this.getZhuanPan();
        if (!data)
            data = {};
        var timestamp = AccountData.serverTime() + egret.getTimer(); //服务器登陆时间+白鹭启动时间=当前时间	
        var currentDate = DateTool.makeTime(timestamp);
        var d = data;
        if (d && d.date != currentDate) {
            //删除过期的记录
            // delete data;
            this.putZhuanPan(data);
            return null;
        }
        return d;
    };
    /** 转盘券数量 */
    ZhuanPanData.getZhuanPanQuanCount = function () {
        return CacheData.getRAMData("zhuanPanQuanCount");
    };
    ZhuanPanData.updateZhuanPanQuanCount = function (count) {
        var data = this.getZhuanPanQuanCount();
        if (!data) {
            data = {};
        }
        {
            data.count = count;
            if (data.count >= 20)
                data.count = 20;
            this.putZhuanPanQuanCount(data);
        }
    };
    /** 用于从服务器拉取数据 */
    ZhuanPanData.putZhuanPanQuanCount = function (data) {
        CacheData.saveRAMData("zhuanPanQuanCount", data);
    };
    return ZhuanPanData;
}());
__reflect(ZhuanPanData.prototype, "ZhuanPanData");
var GameEvent = (function () {
    function GameEvent() {
    }
    GameEvent.GAME_SHOPBUYXJJ_EVENT = "GAME_SHOPBUYXJJ_EVENT"; //商店买哪个小姐姐的id值
    GameEvent.GAME_SPEEDUP_EVENT = "GAME_SPEEDUP_EVENT"; //加速值
    return GameEvent;
}());
__reflect(GameEvent.prototype, "GameEvent");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        egret.ImageLoader.crossOrigin = "anonymous";
        this.runGame().catch(function (e) { console.log(e); });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //检查更新        
                    return [4 /*yield*/, platform.checkForUpdate()];
                    case 1:
                        //检查更新        
                        _a.sent();
                        //加载内部资源
                        return [4 /*yield*/, AssetsManager.getInstance().loadInnerResource("resource", "lzd")];
                    case 2:
                        //加载内部资源
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 3:
                        _a.sent();
                        this.addChild(LoadingUI.instance);
                        //登陆微信
                        return [4 /*yield*/, WechatManager.getInstance().login()];
                    case 4:
                        //登陆微信
                        _a.sent();
                        //请求游戏配置
                        ConfigManager.getInstance().initAppConfig(this.onAppConfigLoadComplete, this);
                        LoadingUI.instance.setSliderValue(30);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 加载EUI配置 */
    Main.prototype.loadTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var theme = new eui.Theme("resource/default.thm.json", _this.stage);
                        theme.addEventListener(eui.UIEvent.COMPLETE, function () { resolve(); }, _this);
                        LoadingUI.instance.setSliderValue(50);
                    })];
            });
        });
    };
    /** 加载配置完成 */
    Main.prototype.onAppConfigLoadComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                ConfigManager.getInstance().initShareConfig(function () {
                    _this.LoginServer();
                }, this);
                LoadingUI.instance.setSliderValue(100);
                return [2 /*return*/];
            });
        });
    };
    /** 登陆 */
    Main.prototype.LoginServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var thisObj, invitetid, invitetype, channel, openId, userInfo, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addChild(LoadingUI.instance);
                        thisObj = this;
                        //获取启动信息
                        return [4 /*yield*/, WechatManager.getInstance().getLaunchOptionsSync()];
                    case 1:
                        //获取启动信息
                        _a.sent();
                        invitetid = WechatManager.getInstance().getInviteid();
                        invitetype = WechatManager.getInstance().getInvitetype();
                        channel = WechatManager.getInstance().getChannel();
                        openId = WechatManager.getInstance().getOpenId();
                        userInfo = AccountData.getwxUser();
                        if (!openId) return [3 /*break*/, 2];
                        GameApi.login(null, openId, channel, invitetid, invitetype, function (data) {
                            if (data.ret == -3) {
                                //后台用户数据删除，或者openid对应用户不存在
                                AccountData.delOpenId();
                                thisObj.LoginServer();
                                return;
                            }
                            thisObj.initSDK();
                        });
                        return [3 /*break*/, 4];
                    case 2: 
                    //登陆微信
                    return [4 /*yield*/, WechatManager.getInstance().login()];
                    case 3:
                        //登陆微信
                        _a.sent();
                        code = AccountData.getWXcode();
                        GameApi.login(code, null, channel, invitetid, invitetype, function (data) {
                            thisObj.initSDK();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.initSDK = function () {
        return __awaiter(this, void 0, void 0, function () {
            var thisObj_2;
            return __generator(this, function (_a) {
                if (AppConfig.sdk_favlist || AppConfig.sdk_gamelist || AppConfig.sdk_suspension) {
                    thisObj_2 = this;
                    //初始化DDSDK
                    DDSDK.init(AppConfig.appid, AccountData.getOpenId(), DaDianConstant.appid);
                    DDSDK.setResLoadCallback(function () {
                        thisObj_2.startGame();
                    });
                    platform.onShow(function (res) {
                        console.log("onShow ask DDSDK");
                        var render = DDSDK.getRender();
                        if (render)
                            render.wxShow(res);
                    });
                }
                else {
                    this.startGame();
                }
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LayerManager.getInstance().init(this);
                        Alert.init(LayerManager.getInstance().alertLayer, this.width, this.height);
                        TipsPanel.instance.init();
                        //声音设置
                        return [4 /*yield*/, platform.setInnerAudioOption(true, true)];
                    case 1:
                        //声音设置
                        _a.sent();
                        //设置分享
                        return [4 /*yield*/, platform.onShareAppMessage(ShareConstant.randomTitleAndUrl())];
                    case 2:
                        //设置分享
                        _a.sent();
                        return [4 /*yield*/, platform.updateShareMenu(true, null)];
                    case 3:
                        _a.sent();
                        thisObj = this;
                        platform.loadSubpackage(function (res) {
                            LoadingUI.instance.onDownProgress(res);
                        }, function (complete) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    //加载分包资源
                                    return [4 /*yield*/, AssetsManager.getInstance().loadInnerResource("stage/resource", "subbag")];
                                    case 1:
                                        //加载分包资源
                                        _a.sent();
                                        thisObj.removeChild(LoadingUI.instance);
                                        LayerManager.getInstance().senceLayer.addChild(new StartPanel());
                                        HeartBeat.startHeart();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        platform.onHide(function () {
                            DataCenter.packData();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var ConfigManager = (function (_super) {
    __extends(ConfigManager, _super);
    function ConfigManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfigManager.prototype.initAppConfig = function (onComplete, thisObj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //判断平台
                if (egret.Capabilities.os == "iOS" || egret.Capabilities.os == "Android") {
                    AppConfig.native_file_path = platform.getnativeFilePath() + "/";
                }
                HttpClient.sendWxrequest({ time: egret.getTimer() }, AppConfig.appConfigUrl, function (appconfig) {
                    if (appconfig) {
                        for (var key in appconfig) {
                            if (AppConfig[key] != undefined) {
                                AppConfig[key] = appconfig[key];
                            }
                        }
                    }
                    // SoundManager.soundPathRoot = AppConfig.native_file_path + `resource_${AppConfig.res_version}/sound/`;
                    DaDianConstant.is_dadian = appconfig.is_dadian;
                    // DaDianConstant.sdk_dadian = appconfig.sdk_dadian;
                    AdConstant.bannerAdUnitId = appconfig.bannerAdUnitId;
                    AdConstant.rewardedVideoAdUnitId = appconfig.rewardedVideoAdUnitId;
                    if (onComplete)
                        onComplete.apply(thisObj);
                }, function (error) {
                    ConfigManager.getInstance().initAppConfig(onComplete, thisObj);
                });
                return [2 /*return*/];
            });
        });
    };
    ConfigManager.prototype.initShareConfig = function (onComplete, thisObj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                HttpClient.sendWxrequest({ time: egret.getTimer() }, AppConfig.shareConfigUrl, function (shareConfig) {
                    ShareConstant.shareJson = shareConfig;
                    if (onComplete)
                        onComplete.apply(thisObj);
                }, function (error) {
                    ConfigManager.getInstance().initShareConfig(onComplete, thisObj);
                });
                return [2 /*return*/];
            });
        });
    };
    /** 读取一些实时配置 */
    ConfigManager.prototype.loadConfig = function (url, onComplete, thisObj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                HttpClient.sendWxrequest({ time: egret.getTimer() }, url, function (config) {
                    if (onComplete)
                        onComplete.apply(thisObj, [config]);
                }, function (error) {
                    ConfigManager.getInstance().loadConfig(url, onComplete, thisObj);
                });
                return [2 /*return*/];
            });
        });
    };
    return ConfigManager;
}(BaseSingle));
__reflect(ConfigManager.prototype, "ConfigManager");
var DragonBoneManager = (function (_super) {
    __extends(DragonBoneManager, _super);
    function DragonBoneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.factoryPool = [];
        return _this;
    }
    DragonBoneManager.prototype.createAnimate = function (name) {
        if (this.factoryPool.indexOf(name) != -1) {
            // let egretFactory: dragonBones.EgretFactory = this.factoryPool[name] as dragonBones.EgretFactory;
            // let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay(name);
            var armatureDisplay_1 = dragonBones.EgretFactory.factory.buildArmatureDisplay(name);
            return armatureDisplay_1;
        }
        var dragonbonesData = RES.getRes(name + "_ske_json");
        var textureData = RES.getRes(name + "_tex_json");
        var texture = RES.getRes(name + "_tex_png");
        if (!dragonbonesData || !textureData || !texture)
            return null;
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData, texture);
        // this.factoryPool[name] = egretFactory;
        this.factoryPool.push(name);
        var armatureDisplay = egretFactory.buildArmatureDisplay(name);
        return armatureDisplay;
    };
    return DragonBoneManager;
}(BaseSingle));
__reflect(DragonBoneManager.prototype, "DragonBoneManager");
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerManager.prototype.init = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._root)
                    return [2 /*return*/];
                this._root = root;
                this._senceLayer = new egret.DisplayObjectContainer();
                this._senceLayer.width = this._root.width;
                this._senceLayer.height = this._root.height;
                this._alertLayer = new egret.DisplayObjectContainer();
                this._alertLayer.width = this._root.width;
                this._alertLayer.height = this._root.height;
                this._guideLayer = new egret.DisplayObjectContainer();
                this._guideLayer.width = this._root.width;
                this._guideLayer.height = this._root.height;
                this._guideLayer.touchEnabled = false;
                this._tipsLayer = new egret.DisplayObjectContainer();
                this._tipsLayer.width = this._root.width;
                this._tipsLayer.height = this._root.height;
                this._tipsLayer.touchEnabled = false;
                this._tipsLayer.touchChildren = false;
                this._root.addChild(this._senceLayer);
                this._root.addChild(this._alertLayer);
                this._root.addChild(this._guideLayer);
                this._root.addChild(this._tipsLayer);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LayerManager.prototype, "senceLayer", {
        get: function () {
            return this._senceLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "alertLayer", {
        get: function () {
            return this._alertLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "guideLayer", {
        get: function () {
            return this._guideLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "tipsLayer", {
        get: function () {
            return this._tipsLayer;
        },
        enumerable: true,
        configurable: true
    });
    return LayerManager;
}(BaseSingle));
__reflect(LayerManager.prototype, "LayerManager");
var MovieClipManager = (function (_super) {
    __extends(MovieClipManager, _super);
    function MovieClipManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovieClipManager.prototype.getMovieClicp = function (name) {
        if (!this._mcDataFactory) {
            this.initMovieClipFactory("eff"); //默认初始化
        }
        if (!this._mcDataFactory) {
            egret.log("MovieClipManager not initMovieClipFactory");
            return null;
        }
        if (this._mcDir && this._mcDir[name]) {
            return new egret.MovieClip(this._mcDir[name].movieClipData);
        }
        var mc = new egret.MovieClip(this._mcDataFactory.generateMovieClipData(name));
        if (!mc) {
            egret.log("MovieClipManager create failed:" + name);
            return null;
        }
        if (!this._mcDir) {
            this._mcDir = { name: mc };
            return new egret.MovieClip(mc.movieClipData);
        }
        this._mcDir[name] = mc;
        return new egret.MovieClip(mc.movieClipData);
    };
    MovieClipManager.prototype.initMovieClipFactory = function (fileName) {
        var effJson = RES.getRes(fileName + "_json");
        var effTextrue = RES.getRes(fileName + "_png");
        if (!effJson || !effTextrue) {
            egret.log("initMovieClipFactory failed:" + fileName);
            return;
        }
        var mcDataFactory = new egret.MovieClipDataFactory(effJson, effTextrue);
        if (!mcDataFactory) {
            egret.log("initMovieClipFactory failed:" + fileName);
            return;
        }
        this._mcDataFactory = mcDataFactory;
    };
    MovieClipManager.prototype.destory = function () {
        this._mcDataFactory = null;
        this._mcDir = null;
    };
    return MovieClipManager;
}(BaseSingle));
__reflect(MovieClipManager.prototype, "MovieClipManager");
var AssetsManager = (function (_super) {
    __extends(AssetsManager, _super);
    function AssetsManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 加载内部资源 */
    AssetsManager.prototype.loadInnerResource = function (root, groupName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadConfig(root + "/default.res.json", root + "/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadResource(groupName)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载资源组
     */
    AssetsManager.prototype.loadResource = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, RES.loadGroup(groupName, 0, null)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AssetsManager;
}(BaseSingle));
__reflect(AssetsManager.prototype, "AssetsManager");
var SoundManager = (function () {
    function SoundManager() {
    }
    SoundManager.playSound = function (name, secondName, loops) {
        if (secondName === void 0) { secondName = null; }
        if (loops === void 0) { loops = 1; }
        var url = this.soundPathRoot + name + ".mp3";
        platform.playAudio(url, loops == 0, false);
    };
    SoundManager.playBgSound = function (name) {
        var url = this.soundPathRoot + name + ".mp3";
        platform.playAudio(url, true, true);
    };
    SoundManager.stopBgSound = function (name) {
        var url = this.soundPathRoot + name + ".mp3";
        platform.stopAudio(url);
    };
    SoundManager.stopSound = function (name) {
        var url = this.soundPathRoot + name + ".mp3";
        platform.stopAudio(url);
    };
    SoundManager.setBgSoundValue = function () {
    };
    SoundManager.clearSound = function () {
    };
    //静态类
    SoundManager.soundPathRoot = "resource/sound/";
    SoundManager.bgSoundName = null;
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
var WechatManager = (function (_super) {
    __extends(WechatManager, _super);
    function WechatManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WechatManager.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.platform.login()];
                    case 1:
                        loginData = _a.sent();
                        if (loginData && loginData.code) {
                            console.log("LOGINCODE:" + loginData.code);
                            AccountData.putWXcode(loginData.code);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WechatManager.prototype.getUserInfo = function (callback, thisObj) {
        return __awaiter(this, void 0, void 0, function () {
            var user, setting, scoped, userInfoData, userInfo, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = AccountData.getwxUser();
                        return [4 /*yield*/, platform.getSetting()];
                    case 1:
                        setting = _a.sent();
                        scoped = !setting ? false : setting.authSetting["scope.userInfo"];
                        if (scoped && user)
                            return [2 /*return*/]; //授权过不再获取并且服务器也没有用户信息
                        return [4 /*yield*/, window.platform.getUserInfo(scoped)];
                    case 2:
                        userInfoData = _a.sent();
                        userInfo = null;
                        if (userInfoData && userInfoData.userInfo) {
                            userInfo = userInfoData.userInfo;
                            role = RoleData.getRole();
                            if (!role)
                                role = new Role();
                            if (userInfo) {
                                AccountData.putwxUser(userInfo);
                                role.name = userInfo.nickName;
                                role.sex = userInfo.gender;
                                role.head = userInfo.avatarUrl;
                                role.province = userInfo.province;
                            }
                            RoleData.putRole(role);
                            console.log("USERINFO:" + JSON.stringify(userInfo));
                        }
                        if (callback)
                            callback.apply(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    WechatManager.prototype.getLaunchOptionsSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var launchOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getLaunchOptionsSync()];
                    case 1:
                        launchOption = _a.sent();
                        AccountData.putLaunchOption(launchOption);
                        egret.log("LAUNCHOPTION:" + JSON.stringify(launchOption) + "\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    WechatManager.prototype.getOpenId = function () {
        var openId = AccountData.getOpenId();
        var time = AccountData.getOpenIdTime();
        console.log(time);
        console.log(DateTool.makeTime());
        if (!time || time != DateTool.makeTime()) {
            // if(!time || (time + 1000*60) < date.getTime()){
            AccountData.saveOpenIdTime(null);
            openId = null;
        }
        return openId;
    };
    WechatManager.prototype.getInviteid = function () {
        var launchOption = AccountData.getLaunchOption();
        if (launchOption && launchOption.query && launchOption.query.inviteid) {
            return launchOption.query.inviteid;
        }
        return null;
    };
    WechatManager.prototype.getInvitetype = function () {
        var launchOption = AccountData.getLaunchOption();
        if (launchOption && launchOption.query && launchOption.query.invitetype) {
            return launchOption.query.invitetype;
        }
        return null;
    };
    WechatManager.prototype.getChannel = function () {
        var launchOption = AccountData.getLaunchOption();
        var channel = launchOption.query && launchOption.query.channel ? launchOption.query.channel : null;
        var mp = launchOption.query && launchOption.query.mp ? launchOption.query.mp : null;
        if (channel)
            AccountData.putChannel(channel);
        if (mp)
            AccountData.putMp(mp);
        return channel;
    };
    WechatManager.prototype.doLunchOption = function () {
        var launchOption = AccountData.getLaunchOption();
        if (launchOption) {
            var query = launchOption.query;
            if (query && query.checkRank && launchOption.shareTicket) {
                var rankPanel = new RankPanel();
                rankPanel.shareTicket = launchOption.shareTicket;
                Alert.alert(rankPanel);
            }
            if (query && query.imageUrl) {
                //分享图回流打点
                DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid, "share", "share_info", query.title + ":" + query.imageUrl + ":" + this.getOpenId()));
            }
            if (query && query.mp) { }
            //从收藏小程序进入
            // var addprogram = RoleData.getAddProgram();
            // if(!addprogram && (launchOption.scene == 1104 || launchOption.scene == 1103)){
            // 	var role = RoleData.getRole();
            // 	role.jewel += 888;
            // 	RoleData.putRole(role);
            // 	RoleData.putAddProgram();
            // 	egret.setTimeout(function() {
            // 		ControllAlert.show("添加小程序获得奖励888钻石",2000);
            // 	},this,500); 
            // 	DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"addprogram","addprogramsuc",""));												
            // }
            //公众号自定义菜单进入
            var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
            var focusDate = RoleData.getFocusGain();
            if (launchOption.scene == 1035 && (!focusDate || focusDate != DateTool.makeTime(timestamp))) {
                var role = RoleData.getRole();
                role.jewel += 666;
                RoleData.putRole(role);
                RoleData.putFocusGain(DateTool.makeTime(timestamp));
                egret.setTimeout(function () {
                    ControllAlert.show("每日公众号进入获得666钻石", 2000);
                }, this, 500);
                DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "focus", "focusget", ""));
            }
            AccountData.putLaunchOption(null);
        }
    };
    WechatManager.prototype.doOnShow = function () {
        //非启动用
        platform.onShow(this._onShow);
    };
    WechatManager.prototype.hideOnShow = function () {
        platform.offShow(this._onShow);
    };
    WechatManager.prototype._onShow = function (res) {
        platform.replayAudio();
        //匹配中不处理启动信息
        var query = res.query;
        egret.log('BACK_WXGAME:' + JSON.stringify(res));
        if (query && query.checkRank && res.shareTicket) {
            var rankPanel = new RankPanel();
            rankPanel.shareTicket = res.shareTicket;
            Alert.alert(rankPanel);
        }
        if (query && query.imageUrl) {
            var invitetype = query.invitetype ? query.invitetype : null;
            //分享图回流打点
            DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid, "share", "share_info", query.title + ":" + query.imageUrl + ":" + this.getOpenId() + ":" + invitetype));
        }
        //从收藏小程序进入
        var addprogram = RoleData.getAddProgram();
        if (!addprogram && (res.scene == 1104 || res.scene == 1103)) {
            var role = RoleData.getRole();
            role.jewel += 888;
            RoleData.putRole(role);
            RoleData.putAddProgram();
            egret.setTimeout(function () {
                ControllAlert.show("添加小程序获得奖励888钻石", 2000);
            }, this, 500);
            DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "addprogram", "addprogramsuc", ""));
            /*if(BasePanel.currentPanel instanceof GamePanel){
                BasePanel.currentPanel.addprogramBtn.visible = false;
            }*/
        }
        //公众号自定义菜单进入
        // var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
        // var focusDate = RoleData.getFocusGain();
        // if(res.scene == 1035 && ( !focusDate || focusDate != DateTool.makeTime(timestamp))){
        // 	var role = RoleData.getRole();
        // 	role.jewel += 666;
        // 	RoleData.putRole(role);
        // 	RoleData.putFocusGain(DateTool.makeTime(timestamp));
        // 	egret.setTimeout(function() {
        // 		ControllAlert.show("每日公众号进入获得666钻石",2000);
        // 	},this,500); 
        // 	DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"focus","focusget",""));				
        // }
        //分享判断
        if (ShareConstant.shareId > 0) {
            //普通分享
            var shareCallback = ShareConstant.callback;
            var nowTime = egret.getTimer().valueOf();
            if ((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime) {
                if (Math.random() >= AppConfig.shareRandomValue) {
                    if (shareCallback)
                        shareCallback(true);
                }
                else {
                    ShareConstant.cheating++;
                    ShareConstant.shareTime = egret.getTimer().valueOf();
                    if (shareCallback)
                        shareCallback(false);
                }
            }
            else {
                ShareConstant.shareTime = egret.getTimer().valueOf();
                if (shareCallback)
                    shareCallback(false);
            }
        }
        else if (ShareConstant.shareId < 0) {
            var shareCallback_1 = ShareConstant.callback;
            //需要判断群的分享
            if (query && query.shareValue && query.shareValue == ShareConstant.shareId && res.shareTicket) {
                platform.getShareInfo({
                    shareTicket: res.shareTicket,
                    success: function (data) {
                        var e = data.encryptedData;
                        var i = data.iv;
                        GameApi.shareCheck(e, i, 0, function (data) {
                            if (data.ret == 0) {
                                if (shareCallback_1)
                                    shareCallback_1(true);
                            }
                            else {
                                platform.showModal("", "请分享到其他群(30分钟内相同群无法获得奖励)", "确定", false, function () {
                                    if (shareCallback_1)
                                        shareCallback_1(false);
                                });
                            }
                        });
                    }
                });
                ShareConstant.shareId = 0;
            }
            else if (query && query.shareValue && query.shareValue == ShareConstant.shareId) {
                platform.showModal("", "请您分享到群", "确定", false, function () {
                });
            }
            else {
                platform.showModal("", "进群点击自己上次分享卡片即可获得", "确定", false, function () {
                });
            }
        }
    };
    /**
     * 发送消息到开放域
     * @param msg {isDisplay:"",rankType: "",shareTicket: "",stageWidth:"",stageHeight:"",selfOpenId:""}
     * rankType 排行榜类型 1:好友排行 2:群排行 3:前后排行 4:下一位
    */
    WechatManager.prototype.sendOpenDataMassage = function (msg) {
        if (!this.openDataContext) {
            this.openDataContext = platform.getOpenDataContext();
        }
        this.openDataContext.postMessage(msg);
    };
    return WechatManager;
}(BaseSingle));
__reflect(WechatManager.prototype, "WechatManager");
var Alert = (function () {
    function Alert() {
    }
    // public static isBackClose:boolean = false;
    Alert.init = function (root, stageWidth, stageHeight, alertScale) {
        if (stageWidth === void 0) { stageWidth = 640; }
        if (stageHeight === void 0) { stageHeight = 1136; }
        if (alertScale === void 0) { alertScale = 1; }
        this._root = root;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.alertScale = alertScale;
        this.initBackGround();
    };
    Alert.initBackGround = function () {
        var _this = this;
        if (!this.background) {
            this.background = new egret.Shape();
            this.background.alpha = 0.7;
            this.background.touchEnabled = true;
        }
        this.background.graphics.clear();
        this.background.graphics.beginFill(0x000000);
        this.background.graphics.drawRect(0, 0, this.stageWidth, this.stageHeight);
        this.background.graphics.endFill();
        this.background.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // if(!this.isBackClose)return;
            if (_this._displays.length < 1)
                return;
            var display = _this._displays[_this._displays.length - 1];
            if (display && display instanceof BaseAlertPanel) {
                if (display.isBackClose)
                    _this.closeAlert();
            }
        }, this);
    };
    Object.defineProperty(Alert, "root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    Alert.show = function (display) {
        if (!this._root) {
            console.log("alert init error!");
            return;
        }
        this._root.addChild(display);
    };
    Alert.alertLandScape = function (display) {
        this.alert(display);
        display.rotation = 90;
    };
    Alert.alert = function (display, action, setXY) {
        if (action === void 0) { action = false; }
        if (setXY === void 0) { setXY = 1; }
        if (!this._root) {
            console.log("alert init error!");
            return;
        }
        if (!this._displays)
            this._displays = [];
        if (this._displays.indexOf(display) != -1)
            return;
        display.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this._root.addChild(this.background);
        this._root.addChild(display);
        if (setXY) {
            display.anchorOffsetX = display.width / 2;
            display.anchorOffsetY = display.height / 2;
            display.x = this.stageWidth / 2;
            display.y = this.stageHeight / 2;
        }
        //控制出场动画
        if (action)
            this.openActionCreate(display);
    };
    Alert.openActionCreate = function (display) {
        var type = 0;
        if (display && display instanceof BaseAlertPanel) {
            type = display.openActionType;
        }
        switch (type) {
            case 0:
                {
                    display.scaleX = display.scaleY = 0.01;
                    egret.Tween.get(display).to({ scaleX: this.alertScale, scaleY: this.alertScale }, 900, egret.Ease.backOut);
                }
                ;
                break;
            case 1:
                {
                    display.x = -this.stageWidth / 2;
                    egret.Tween.get(display).to({ x: this.stageWidth / 2 }, 580, egret.Ease.cubicIn);
                }
                ;
                break;
        }
    };
    Alert.closeActionCreate = function (display) {
        var type = 0;
        if (display && display instanceof BaseAlertPanel) {
            type = display.closeActionType;
        }
        switch (type) {
            case 0:
                {
                    egret.Tween.get(display).to({ scaleX: 0.01, scaleY: 0.01 }, 500, egret.Ease.cubicInOut).call(function (obj) {
                        if (!obj)
                            return;
                        var disposeFun = null;
                        disposeFun = obj["dispose"];
                        if (disposeFun instanceof Function) {
                            disposeFun.apply(obj, []);
                        }
                        if (obj.parent)
                            obj.parent.removeChild(obj);
                    }, this, [display]);
                }
                ;
                break;
            case 1:
                {
                    egret.Tween.get(display).to({ x: -this.stageWidth / 2 }, 500, egret.Ease.cubicInOut).call(function (obj) {
                        if (!obj)
                            return;
                        var disposeFun = null;
                        disposeFun = obj["dispose"];
                        if (disposeFun instanceof Function) {
                            disposeFun.apply(obj, []);
                        }
                        if (obj.parent)
                            obj.parent.removeChild(obj);
                    }, this, [display]);
                }
                ;
                break;
        }
    };
    Alert.onAddToStage = function (e) {
        var display = e.currentTarget;
        if (display instanceof BaseAlertPanel && display.isFill) {
            display.width = this._root.width;
            display.height = this._root.height;
        }
        display.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        display.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        this._displays.push(display);
    };
    Alert.onRemoveFromStage = function (e) {
        var display = e.currentTarget;
        display.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        this._displays.pop();
        if (this._displays.length == 0) {
            this._root.removeChild(this.background);
        }
        else {
            display = this._displays[this._displays.length - 1];
            this._root.swapChildren(this.background, display);
        }
    };
    Alert.closeAlert = function (display, actionType) {
        if (display === void 0) { display = null; }
        if (actionType === void 0) { actionType = -1; }
        if (this._displays.length < 1) {
            return;
        }
        if (!display) {
            display = this._displays[this._displays.length - 1];
        }
        if (actionType <= 0) {
            //没有关闭动画
            var disposeFun = null;
            disposeFun = display["dispose"];
            if (disposeFun instanceof Function) {
                disposeFun.apply(display, []);
            }
            if (display.parent)
                display.parent.removeChild(display);
        }
        else {
            this.closeActionCreate(display);
        }
    };
    Alert.closeAllAlert = function () {
        if (!this._displays)
            return;
        var len = this._displays.length;
        var obj = null;
        var disposeFun = null;
        for (var i = len - 1; i > -1; i--) {
            obj = this._displays[i];
            if (!obj)
                continue;
            disposeFun = obj["dispose"];
            if (disposeFun instanceof Function) {
                disposeFun.apply(obj, []);
            }
            if (obj.parent)
                obj.parent.removeChild(obj);
        }
    };
    return Alert;
}());
__reflect(Alert.prototype, "Alert");
var AlertBgModel = (function (_super) {
    __extends(AlertBgModel, _super);
    function AlertBgModel() {
        var _this = _super.call(this) || this;
        _this.titleText = '标题';
        return _this;
    }
    AlertBgModel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AlertBgModel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.titleTips)
            this.titleTips.text = this.titleText ? this.titleText : '';
        if (this.closeBtn) {
            this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        }
    };
    AlertBgModel.prototype.dispose = function () {
        Alert.closeAlert(null, 0);
    };
    return AlertBgModel;
}(eui.Component));
__reflect(AlertBgModel.prototype, "AlertBgModel", ["eui.UIComponent", "egret.DisplayObject"]);
window['AlertBgModel'] = AlertBgModel;
var ControllAlert = (function () {
    function ControllAlert() {
    }
    ControllAlert.show = function (showTips, waitdelay, color) {
        if (showTips === void 0) { showTips = null; }
        if (waitdelay === void 0) { waitdelay = 0; }
        if (color === void 0) { color = 0xffffff; }
        var tips = "";
        if (showTips != null) {
            tips = showTips;
        }
        TipsPanel.instance.show(tips, waitdelay, color);
    };
    return ControllAlert;
}());
__reflect(ControllAlert.prototype, "ControllAlert");
var NetWorkError = (function () {
    function NetWorkError() {
    }
    NetWorkError.showConnectFail = function () {
        var tips = "网络连接失败,请检查网络状况。";
        // var error:TiShiPanel = new TiShiPanel(tips,this.onOkCallBack);
        // Alert.alert(error);
    };
    NetWorkError.onOkCallBack = function () {
        platform.exitMiniProgram(null, null);
    };
    return NetWorkError;
}());
__reflect(NetWorkError.prototype, "NetWorkError");
var NetWorkLoading = (function () {
    function NetWorkLoading() {
    }
    NetWorkLoading.show = function () {
        if (!this.instance) {
            this.instance = new eui.Panel();
            this.instance.touchEnabled = true;
            this.instance.skinName = "NetWorkLoadingSkin";
            this.instance.width = Alert.root.width;
            this.instance.height = Alert.root.height;
            Alert.show(this.instance);
        }
        else {
            Alert.root.setChildIndex(this.instance, Alert.root.numChildren - 1);
            this.instance.visible = true;
        }
    };
    NetWorkLoading.hide = function () {
        if (this.instance) {
            Alert.root.setChildIndex(this.instance, Alert.root.numChildren - 1);
            this.instance.visible = false;
        }
    };
    return NetWorkLoading;
}());
__reflect(NetWorkLoading.prototype, "NetWorkLoading");
var WXPlatform = (function () {
    function WXPlatform() {
    }
    WXPlatform.prototype.setDebug = function (bool) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** ==========用户信息相关========= */
    WXPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.getUserInfo = function (scoped) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.createFeedbackButton = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.hideFeedbackButton = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.openSetting = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.getSetting = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.authorize = function (scope) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.openLocation = function (param) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** ======生命周期相关=========*/
    WXPlatform.prototype.getLaunchOptionsSync = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, {}];
        }); });
    };
    WXPlatform.prototype.exitMiniProgram = function (suc, fail) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.onHide = function (callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.offHide = function (callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.onShow = function (callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.offShow = function (callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.toTempFilePathSync = function (obj) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.saveImageToPhotosAlbum = function (filepath) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    ;
    /** 检查更新 */
    WXPlatform.prototype.checkForUpdate = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.showModal = function (title, content, confirmText, showCancel, success) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** ======转发相关=========*/
    WXPlatform.prototype.onShareAppMessage = function (shareOption) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.offShareAppMessage = function (callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.shareAppMessage = function (title, imageUrl, query, success, fail) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.getShareInfo = function (object) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.updateShareMenu = function (withShareTicket, callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** Storage相关 */
    WXPlatform.prototype.getStorageSync = function (key) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, null];
        }); });
    };
    WXPlatform.prototype.setStorageSync = function (key, data) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.removeStorageSync = function (key) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** audio system */
    WXPlatform.prototype.playAudio = function (url, loop, isBgm) {
        if (isBgm === void 0) { isBgm = false; }
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.stopAudio = function (url) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.setAudioVolume = function (volume) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.replayAudio = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.setInnerAudioOption = function (mixWithOther, obeyMuteSwitch) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    ;
    /** file system */
    WXPlatform.prototype.hasDirectory = function (dirName, callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.getnativeFilePath = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    //删除文件unlink
    WXPlatform.prototype.unlink = function (url, callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.rmdir = function (dirName, callback) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    //下载文件
    WXPlatform.prototype.download = function (url, resName, sucCallBack, onProgress) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** openData */
    WXPlatform.prototype.getOpenDataContext = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.setUserCloudStorage = function (kvData) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** 客服 */
    WXPlatform.prototype.openCustomerServiceConversation = function (object) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** bannerAd */
    WXPlatform.prototype.showBannerAd = function (adUnitId) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.hideBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.showRewardedVideoAd = function (adUnitId, closeCallBack, error) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** 图片预览 */
    WXPlatform.prototype.previewImage = function (urls) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** 小程序跳转 */
    WXPlatform.prototype.navigateToMiniProgram = function (appId, path, extraData) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** httpRequest */
    WXPlatform.prototype.request = function (url, data, method, dataType, callback, error) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /** socket */
    WXPlatform.prototype.connectSocket = function (object) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    }; //url,header,protocols,success,fail,complete
    WXPlatform.prototype.closeSocket = function (object) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    }; //code,reason,func,func,func
    WXPlatform.prototype.onSocketOpen = function (func) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.onSocketClose = function (func) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.onSocketMessage = function (func) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.onSocketError = function (func) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    WXPlatform.prototype.sendSocketMessage = function (object) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    }; //data,func,func,func
    /** 分包加载 */
    WXPlatform.prototype.loadSubpackage = function (onProgress, onComplete) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return WXPlatform;
}());
__reflect(WXPlatform.prototype, "WXPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new WXPlatform();
}
var BaseButtonProxy = (function () {
    function BaseButtonProxy(btn, thisObj) {
        this._button = btn;
        this._thisObj = thisObj;
        this._button.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
    }
    BaseButtonProxy.prototype.onClickBtn = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AssetsManager.getInstance().loadResource("gamegroup")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //血战分享到群
    BaseButtonProxy.prototype.shareToGroup = function (callback) {
        var thisObj = this;
        if (AppConfig.isLocal) {
            var random = Math.random();
            callback.apply(thisObj, [random > 0.5]);
        }
        else {
            ShareConstant.randomShareAppMessage(function (res) {
                callback.apply(thisObj, [res.encryptedData && res.iv]);
            }, function () {
                callback.apply(thisObj, [false]);
            });
        }
    };
    return BaseButtonProxy;
}());
__reflect(BaseButtonProxy.prototype, "BaseButtonProxy");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var GameConstant = (function () {
    function GameConstant() {
    }
    //获取某个类型（1小姐姐、2小哥哥、3小宠物）的离线收益值
    GameConstant.getShouYiValueByType = function (type) {
        var shouyiValue = new Decimal(0);
        var positions = PositionData.getPositionsById(type);
        if (positions) {
            for (var posid in positions) {
                var position = PositionData.getPositionById(posid, type);
                if (position.playerid == "")
                    continue;
                var config = ConfigData.getPlayerById(position.playerid);
                if (config.lixianshouyi) {
                    shouyiValue = shouyiValue.add(config.lixianshouyi);
                }
            }
        }
        return shouyiValue;
    };
    //获取3个类型离线收益总值
    GameConstant.getAllShouYiValue = function () {
        var shouyiValue_xjj = this.getShouYiValueByType(1);
        var shouyiValue_xgg = this.getShouYiValueByType(2);
        var shouyiValue_xcw = this.getShouYiValueByType(3);
        var shouyiTotalValue = shouyiValue_xjj.add(shouyiValue_xgg).add(shouyiValue_xcw);
        return shouyiTotalValue;
    };
    return GameConstant;
}());
__reflect(GameConstant.prototype, "GameConstant");
var OtherGameConstant = (function () {
    function OtherGameConstant() {
    }
    /** 猜你喜欢游戏配置 */
    OtherGameConstant.likesGameConfig = null;
    /** 抽屉页游戏配置 */
    OtherGameConstant.otherGameConfig = null;
    return OtherGameConstant;
}());
__reflect(OtherGameConstant.prototype, "OtherGameConstant");
var PaoPaoTextField = (function (_super) {
    __extends(PaoPaoTextField, _super);
    function PaoPaoTextField() {
        var _this = _super.call(this) || this;
        //重力
        _this.g = 0.6;
        //初速度
        _this.speedX = 0;
        _this.speedY = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        return _this;
    }
    PaoPaoTextField.prototype.onAdd = function (e) {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        //初始化初速度
        this.speedX = RandomUitl.randomFloat(-3, 3);
        this.speedY = RandomUitl.randomFloat(-5, -10);
    };
    PaoPaoTextField.prototype.remove = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        if (this.parent)
            this.parent.removeChild(this);
        return this;
    };
    PaoPaoTextField.prototype.onFrame = function (e) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.g;
    };
    PaoPaoTextField.prototype.dispose = function () {
        if (this.parent)
            this.parent.removeChild(this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
    };
    return PaoPaoTextField;
}(egret.TextField));
__reflect(PaoPaoTextField.prototype, "PaoPaoTextField");
var ResourceBtn = (function (_super) {
    __extends(ResourceBtn, _super);
    function ResourceBtn() {
        return _super.call(this) || this;
    }
    ResourceBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return ResourceBtn;
}(MyButton));
__reflect(ResourceBtn.prototype, "ResourceBtn");
window["ResourceBtn"] = ResourceBtn;
var RoleHeadImage = (function (_super) {
    __extends(RoleHeadImage, _super);
    function RoleHeadImage(role) {
        var _this = _super.call(this) || this;
        _this.role = null;
        _this._isClick = true;
        _this.onClickCallBack = null;
        _this.role = role;
        _this.texture = RES.getRes("ddz_fxtx_17");
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRmove, _this);
        return _this;
    }
    RoleHeadImage.prototype.onAddToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.refresh();
    };
    RoleHeadImage.prototype.onRmove = function (e) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRmove, this);
    };
    RoleHeadImage.prototype.refresh = function (role) {
        var _this = this;
        if (role === void 0) { role = null; }
        if (role)
            this.role = role;
        if (this.role) {
            if (this.role.head != null) {
                RES.getResByUrl(this.role.head, function (data) {
                    if (data)
                        _this.texture = data;
                }, this, "image");
            }
        }
    };
    RoleHeadImage.prototype.onClick = function (e) {
        egret.log("显示个人信息");
        if (this.onClickCallBack) {
            //可扩展的回调弹框
            this.onClickCallBack();
        }
        else {
            // Alert.alert(new UserInfos(this.role,this.texture));
        }
    };
    Object.defineProperty(RoleHeadImage.prototype, "isClick", {
        get: function () {
            return this.isClick;
        },
        set: function (bool) {
            this._isClick = bool;
            if (bool) {
                if (!this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                }
            }
            else {
                if (this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return RoleHeadImage;
}(eui.Image));
__reflect(RoleHeadImage.prototype, "RoleHeadImage");
var SoundLuckBtn = (function (_super) {
    __extends(SoundLuckBtn, _super);
    function SoundLuckBtn() {
        return _super.call(this) || this;
    }
    SoundLuckBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.initUI();
    };
    SoundLuckBtn.prototype.initUI = function () {
        var volume = SoundData.getSoundValue();
        if (volume == undefined || volume == null || (volume + "") == "") {
            volume = 1;
            SoundData.putSoundValue(volume);
        }
        this.unluck.visible = volume == 0;
        platform.setAudioVolume(volume);
    };
    SoundLuckBtn.prototype.onTouch = function () {
        var volume = SoundData.getSoundValue();
        volume = volume == 1 ? 0 : 1;
        SoundData.putSoundValue(volume);
        this.initUI();
    };
    return SoundLuckBtn;
}(MyButton));
__reflect(SoundLuckBtn.prototype, "SoundLuckBtn");
window["SoundLuckBtn"] = SoundLuckBtn;
var TipsItem = (function (_super) {
    __extends(TipsItem, _super);
    function TipsItem(text) {
        var _this = _super.call(this) || this;
        _this.tipsText = text;
        return _this;
    }
    TipsItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TipsItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.tipsLabel.text = this.tipsText;
    };
    TipsItem.prototype.refresh = function (text) {
        if (text != null)
            this.tipsText = text;
        else
            this.tipsText = "";
        this.tipsLabel.text = this.tipsText;
        this.height = this.tipsLabel.textHeight + 10;
    };
    return TipsItem;
}(eui.Component));
__reflect(TipsItem.prototype, "TipsItem", ["eui.UIComponent", "egret.DisplayObject"]);
var TipsPanel = (function (_super) {
    __extends(TipsPanel, _super);
    function TipsPanel() {
        var _this = _super.call(this) || this;
        _this.displayPool = [];
        _this.tipsPool = [];
        _this.tipsTimePool = [];
        _this.tipsColorPool = [];
        return _this;
    }
    Object.defineProperty(TipsPanel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new TipsPanel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TipsPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TipsPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // Logger.log("TIPS就绪");
    };
    TipsPanel.prototype.destory = function (item) {
        if (item.parent) {
            item.parent.removeChild(item);
            item.tween = null;
            this.displayPool.push(item);
        }
    };
    TipsPanel.prototype.updatePos = function () {
        var itemHeight = 74;
        var len = this.numChildren;
        var startY = (this.height - len * itemHeight) / 2;
        for (var i = 0; i < len; i++) {
            var item = this.getChildAt(i);
            item.x = this.width / 2;
            item.y = startY + i * itemHeight;
        }
    };
    TipsPanel.prototype.init = function () {
        LayerManager.getInstance().tipsLayer.addChild(this);
    };
    TipsPanel.prototype.show = function (text, time, color) {
        this.tipsPool.push(text);
        this.tipsTimePool.push(time);
        this.tipsColorPool.push(color);
        this.showItem();
    };
    TipsPanel.prototype.showItem = function () {
        var item;
        if (this.displayPool.length > 0) {
            item = this.displayPool.shift();
            item.refresh(this.tipsPool.shift());
        }
        else {
            item = new TipsItem(this.tipsPool.shift());
            item.width = this.width;
            item.anchorOffsetX = item.width / 2;
        }
        item.alpha = 1;
        item.x = this.width / 2;
        item.y = this.height / 2;
        this.addChild(item);
        if (!item.tween) {
            var time = this.tipsTimePool.shift();
            var color = this.tipsColorPool.shift();
            item.tipsLabel.textColor = color;
            item.alpha = 0;
            item.tween = egret.Tween.get(item).wait(50)
                .to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 200)
                .to({ scaleX: 1, scaleY: 1 }, 200).wait(time)
                .to({ y: item.y - 200 }, 1000)
                .to({ y: item.y - 300, alpha: 0 }, 500)
                .call(this.destory, this, [item]);
        }
    };
    return TipsPanel;
}(eui.Component));
__reflect(TipsPanel.prototype, "TipsPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var ToggleBtn = (function (_super) {
    __extends(ToggleBtn, _super);
    function ToggleBtn() {
        return _super.call(this) || this;
    }
    ToggleBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ToggleBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ToggleBtn.prototype.setStatus = function (isselect) {
        if (isselect === void 0) { isselect = false; }
        if (this.selectDisplay) {
            this.selectDisplay.alpha = isselect ? 1 : 0;
        }
    };
    return ToggleBtn;
}(MyButton));
__reflect(ToggleBtn.prototype, "ToggleBtn");
//自定义组件嵌套使用要暴露到全局
window['ToggleBtn'] = ToggleBtn;
var JumpGamesPanel = (function (_super) {
    __extends(JumpGamesPanel, _super);
    function JumpGamesPanel() {
        var _this = _super.call(this) || this;
        _this.clickstate = true;
        return _this;
    }
    JumpGamesPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    JumpGamesPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.width = this.parent.width;
        this.height = this.parent.height;
        if (this.bg_close)
            this.bg_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this);
        if (this.jumpGamesBtn)
            this.jumpGamesBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this);
        this.initUI();
        this.onJumpGamesBtn(null);
    };
    JumpGamesPanel.prototype.onJumpGamesBtn = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var moveX;
            return __generator(this, function (_a) {
                this.clickstate = !this.clickstate;
                // this.jumpGamesBtn.label = this.clickstate ? "<<" : ">>";
                this.jumpGamesBtn.getChildAt(0).visible = !this.clickstate;
                this.jumpGamesBtn.getChildAt(1).visible = this.clickstate;
                moveX = this.clickstate ? 0 : -350;
                egret.Tween.get(this.jumpgames).to({ x: moveX }, 600, (moveX == 0 ? egret.Ease.backOut : null));
                return [2 /*return*/];
            });
        });
    };
    JumpGamesPanel.prototype.initUI = function () {
        if (this.jumpgames) {
            if (this.jumpContainer.numChildren == 0) {
                // for(var i in MatchConstant.otherGamesConifg){
                // 	var data = MatchConstant.otherGamesConifg[parseInt(i)];
                // 	var item:OtherGameSkin = new OtherGameSkin(data,this);
                // 	this.jumpContainer.addChild(item);
                // 	item.x = (parseInt(i) % 3) * (80 + 31);
                // 	item.y = Math.floor(parseInt(i) / 3) * (110 + 15); 
                // }
            }
        }
    };
    JumpGamesPanel.prototype.dispose = function () {
        if (this.bg_close)
            this.bg_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this);
        if (this.jumpGamesBtn)
            this.jumpGamesBtn.dispose();
    };
    return JumpGamesPanel;
}(eui.Component));
__reflect(JumpGamesPanel.prototype, "JumpGamesPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var OtherGame = (function () {
    function OtherGame() {
        this.extraData = {};
    }
    return OtherGame;
}());
__reflect(OtherGame.prototype, "OtherGame");
var OtherGameSkin = (function (_super) {
    __extends(OtherGameSkin, _super);
    function OtherGameSkin(data, obj) {
        if (obj === void 0) { obj = null; }
        var _this = _super.call(this) || this;
        _this.configData = data;
        _this.callbackObj = obj;
        return _this;
    }
    OtherGameSkin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    OtherGameSkin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.configData) {
            this.initUI();
            if (this.jumpBtn)
                this.jumpBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGame, this);
        }
    };
    OtherGameSkin.prototype.initUI = function () {
        var skinImg = this.jumpBtn.getChildAt(0);
        var nameLabel = this.jumpBtn.getChildAt(1);
        var hotImg = this.jumpBtn.getChildAt(2);
        if (this.configData.hot == true)
            hotImg.texture = RES.getRes("icon_dian");
        if (this.configData.skin) {
            RES.getResByUrl(this.configData.skin, function (data) {
                skinImg.texture = data;
            }, this, "image");
        }
        if (this.configData.name)
            nameLabel.text = this.configData.name;
    };
    OtherGameSkin.prototype.onGame = function (e) {
        platform.navigateToMiniProgram(this.configData.appid, this.configData.path, this.configData.extraData);
        if (this.callbackObj)
            this.callbackObj.onJumpGamesBtn(null);
    };
    return OtherGameSkin;
}(eui.Component));
__reflect(OtherGameSkin.prototype, "OtherGameSkin", ["eui.UIComponent", "egret.DisplayObject"]);
var LoadingProUI = (function (_super) {
    __extends(LoadingProUI, _super);
    function LoadingProUI() {
        var _this = _super.call(this) || this;
        _this._labelText = "玩命加载中";
        return _this;
    }
    Object.defineProperty(LoadingProUI, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new LoadingProUI();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingProUI.prototype, "labelText", {
        set: function (str) {
            this._labelText = str;
        },
        enumerable: true,
        configurable: true
    });
    LoadingProUI.prototype.show = function (parent) {
        if (parent) {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.AddToStage, this);
            parent.addChild(this);
            if (this._tweenAction)
                this._tweenAction.play();
        }
        return this;
    };
    LoadingProUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.progressTips.text = this._labelText;
        // this.running();		
    };
    LoadingProUI.prototype.running = function () {
        if (this.runBg) {
            this.runBg.visible = false;
            this.runBg.anchorOffsetX = this.runBg.width / 2;
            this.runBg.anchorOffsetY = this.runBg.height / 2;
            this._tweenAction = egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 1000);
        }
    };
    LoadingProUI.prototype.AddToStage = function (e) {
        this.width = this.parent.width;
        this.height = this.parent.height;
    };
    LoadingProUI.prototype.onProgress = function (current, total) {
        this.runBg.visible = true;
        var progress = Math.floor(current / total * 100);
        this.progressTips.text = this._labelText + (progress + "%");
    };
    LoadingProUI.prototype.onDownProgress = function (progress) {
        // var writeLen:number = progress.totalBytesWritten;
        // writeLen = Math.floor(writeLen / 1024);
        // var totalLen:number = progress.totalBytesExpectedToWrite;
        // totalLen = Math.floor(totalLen / 1024);
        // this._labelText = `下载进度(${writeLen}/${totalLen})KB`;
        // this._labelText = `下载游戏资源`;		
        this.runBg.visible = true;
        var percent = progress.progress;
        this.progressTips.text = this._labelText + (percent + "%");
    };
    LoadingProUI.prototype.finish = function () {
        this.runBg.visible = false;
        this._tweenAction.pause();
        this.progressTips.text = "资源加载完成";
    };
    LoadingProUI.prototype.dispose = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.AddToStage, this);
        if (this._tweenAction)
            this._tweenAction.pause();
        this.parent.removeChild(this);
    };
    return LoadingProUI;
}(eui.Component));
__reflect(LoadingProUI.prototype, "LoadingProUI", ["eui.UIComponent", "egret.DisplayObject", "RES.PromiseTaskReporter"]);
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        // this.skinName = "LoadingUI";
        // this.createView();
        _this.touchEnabled = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    Object.defineProperty(LoadingUI, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new LoadingUI();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    LoadingUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.slider.maximum = 100;
        this.slider.minimum = 0;
        this.slider.value = 0;
    };
    LoadingUI.prototype.createView = function () {
        this.width = this.parent.width;
        this.height = this.parent.height;
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
        var w = this.parent.width; //?this.parent.width : 640;
        var h = this.parent.height; //?this.parent.height : 1136;
        // var shape = new egret.Shape();
        // shape.graphics.beginFill(0x000000,0.3);
        // shape.graphics.drawRect(0,0,w,h);
        // shape.graphics.endFill();
        // this.addChild(shape);
        // this.textField = new egret.TextField();
        // this.addChild(this.textField);
        // this.textField.anchorOffsetX = 300;
        // this.textField.width = 600;
        // this.textField.height = 100;
        // this.textField.x = w / 2;
        // this.textField.y = h * 0.7;
        // this.textField.bold = true;
        // this.textField.size = 30;
        // this.textField.fontFamily = "Microsoft YaHei";
        // this.textField.textAlign = "center";
        // this.textField.textColor = 0x0D83C6;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var progress = Math.floor(current / total * 100);
        if (this.textField)
            this.textField.text = "\u6E38\u620F\u8D44\u6E90\u52A0\u8F7D(" + progress + "%)";
    };
    LoadingUI.prototype.onDownProgress = function (progress) {
        // var percent = progress.progress;
        // if(percent < 1){
        //     percent = Math.round(percent*100);
        // }else{
        //     percent = Math.round(percent);
        // }
        // if(this.textField)this.textField.text = `游戏资源加载(${percent}%)`;
        var percent = progress.progress;
        if (percent < 1) {
            percent = Math.round(percent * 100);
        }
        else {
            percent = Math.round(percent);
        }
        if (this.slider)
            this.slider.value = percent;
        if (this.slider && percent - this.slider.value > 10) {
            egret.Tween.get(this.slider).to({ value: percent }, 200);
        }
        else if (this.slider)
            this.slider.value = percent;
    };
    LoadingUI.prototype.setSliderValue = function (value) {
        if (this.slider && value > 0) {
            egret.Tween.get(this.slider).to({ value: value }, 200);
        }
        else if (this.slider)
            this.slider.value = value;
    };
    return LoadingUI;
}(eui.Component));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var LoginPanel = (function (_super) {
    __extends(LoginPanel, _super);
    function LoginPanel() {
        var _this = _super.call(this) || this;
        _this.horizontalCenter = 0;
        _this.verticalCenter = 0;
        return _this;
    }
    LoginPanel.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var childnum, promise, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        childnum = this.numChildren;
                        if (childnum < 0) {
                            return [2 /*return*/];
                        }
                        if (this.loginButton) {
                            this.loginButton.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
                        }
                        if (!this.accountInput) return [3 /*break*/, 2];
                        this.accountInput.type = egret.TextFieldType.INPUT;
                        return [4 /*yield*/, platform.getStorageSync("account")];
                    case 1:
                        promise = _a.sent();
                        account = promise.data;
                        egret.log("platform.getStorage:" + JSON.stringify(account));
                        if (account && account != "") {
                            this.accountInput.text = account;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoginPanel.prototype.onLogin = function (e) {
        var account = this.accountInput.text;
        if (account == null || account == "") {
            console.log("账号不能为空");
            return;
        }
        this.startGame();
    };
    LoginPanel.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginPanel.prototype.dispose = function () {
        this.loginButton.dispose();
        this.parent.removeChild(this);
    };
    return LoginPanel;
}(BasePanel));
__reflect(LoginPanel.prototype, "LoginPanel");
var BaseApi = (function () {
    function BaseApi() {
    }
    /** 初始化接口 */
    BaseApi.init = function (host, port) {
        BaseApi._host = host;
        BaseApi._port = port;
        this.initSocket();
        // BaseApiCmdIint.init();
    };
    BaseApi.initSocket = function () {
        BaseApi._socketClient = new SocketClient(this._host, this._port);
        SocketClient.onConnectCallBack = BaseApi.onConnect;
        SocketClient.onDataCallBack = BaseApi.onData;
        SocketClient.onCloseCallBack = BaseApi.onClose;
        SocketClient.onIOErrorCallBack = BaseApi.onIOError;
        BaseApi._sendQeune = [];
        BaseApi._callbackQeune = [];
        BaseApi._currentSendObject = null;
    };
    BaseApi.connectSocket = function () {
        BaseApi._socketClient.connect();
    };
    BaseApi.closeSocket = function () {
        BaseApi._socketClient.close();
    };
    /** 处理交互状态 */
    BaseApi.onConnect = function () {
        //重连接回来继续处理通讯逻辑
        console.log("connect");
        if (BaseApi._currentSendObject == null && BaseApi._sendQeune.length > 0) {
            BaseApi._currentSendObject = BaseApi._sendQeune.shift();
        }
        if (BaseApi._currentSendObject != null) {
            BaseApi.sendObject(BaseApi._currentSendObject);
        }
    };
    BaseApi.onData = function (dataStr) {
        var data = JSON.parse(dataStr);
        console.log("reponseData:" + JSON.stringify(data));
        this._isError = false;
        if (data.cmd) {
            BaseApi.dispatchCmd(data.cmd, data);
        }
        if (BaseApi._callbackQeune.length > 0) {
            NetWorkLoading.hide();
            if (BaseApi._sendQeune.length == 0) {
                BaseApi._currentSendObject = null;
            }
            var callBack = BaseApi._callbackQeune.shift();
            callBack(data);
        }
        //处理队列
        if (BaseApi._sendQeune.length > 0) {
            BaseApi._currentSendObject = BaseApi._sendQeune.shift();
            BaseApi.sendObject(BaseApi._currentSendObject);
        }
    };
    BaseApi.onClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("connectClose");
                        return [4 /*yield*/, BaseApi._socketClient.close(999)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseApi.onIOError = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("onIOError");
                        return [4 /*yield*/, BaseApi._socketClient.close(998)];
                    case 1:
                        _a.sent();
                        platform.exitMiniProgram(null, null);
                        // NetWorkError.showConnectFail();
                        BaseApi._isError = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 请求逻辑 */
    BaseApi.requestLogic = function (pars, callBack, errorCallBack) {
        //包上会话id
        // pars["session"] = AccountData.getSeesionId();
        BaseApi.request(null, pars, callBack, errorCallBack);
    };
    /** 封装基础请求接口 */
    BaseApi.request = function (path, pars, callBack, errorCallBack) {
        if (BaseApi._isError) {
            egret.log("request failed: onIOError \n");
            return;
        }
        NetWorkLoading.show();
        var dataObject = pars;
        if (BaseApi._currentSendObject == null) {
            BaseApi._currentSendObject = dataObject;
            BaseApi.sendObject(BaseApi._currentSendObject);
        }
        else {
            BaseApi._sendQeune.push(dataObject);
        }
        BaseApi._callbackQeune.push(function (data) {
            if (data.state != 0) {
                if (errorCallBack != null) {
                    errorCallBack(data);
                }
            }
            else {
                if (callBack != null)
                    callBack(data);
            }
        });
    };
    BaseApi.sendObject = function (data) {
        if (!BaseApi._socketClient.isConnect) {
            BaseApi._socketClient.connect();
            return;
        }
        console.log("req data:" + JSON.stringify(data));
        var sendObj = data;
        BaseApi._socketClient.sendData(sendObj);
    };
    /***
     * 清除所有命令
     */
    BaseApi.clearCmd = function () {
        BaseApi._commands = {};
        BaseApi._commandsThisObjects = {};
    };
    ;
    /**
     * 注册命令
     */
    BaseApi.registerCmd = function (cmd, callBack, thisObj, isHead) {
        if (isHead === void 0) { isHead = false; }
        if (isHead === void 0) {
            isHead = false;
        }
        var cmds = BaseApi._commands[cmd];
        if (cmds == null) {
            cmds = [];
        }
        if (isHead) {
            cmds.unshift([callBack, thisObj]);
        }
        else {
            cmds.push([callBack, thisObj]);
        }
        BaseApi._commands[cmd] = cmds;
    };
    ;
    /**
     * 移除命令
     */
    BaseApi.removeCmd = function (cmd, callBack, thisObj) {
        var cmds = BaseApi._commands[cmd];
        if (cmds == null) {
            cmds = [];
        }
        var index = -1;
        var len = cmds.length;
        for (var i = 0; i < len; i++) {
            if (cmds[i][0] == callBack && cmds[i][1] == thisObj)
                index = i;
        }
        if (index != -1) {
            cmds.splice(index, 1);
        }
        BaseApi._commands[cmd] = cmds;
    };
    ;
    /**
     * 派发命令消息
     */
    BaseApi.dispatchCmd = function (cmd, data) {
        var cmds = BaseApi._commands[cmd];
        if (cmds == null) {
            cmds = [];
        }
        var len = cmds.length;
        var thisObj;
        var fun;
        for (var i = 0; i < len; i++) {
            thisObj = cmds[i][1];
            fun = cmds[i][0];
            fun.apply(thisObj, [data]);
        }
    };
    ;
    BaseApi.dispose = function () {
        BaseApi._socketClient.dispose();
        BaseApi._socketClient = null;
        BaseApi._sendQeune = [];
        BaseApi._callbackQeune = [];
        BaseApi._currentSendObject = null;
        // BaseApiCmdIint.init();
    };
    BaseApi._commands = {};
    BaseApi._commandsThisObjects = {};
    BaseApi._isError = false;
    return BaseApi;
}());
__reflect(BaseApi.prototype, "BaseApi");
var BaseApiCmdIint = (function () {
    function BaseApiCmdIint() {
    }
    BaseApiCmdIint.init = function () {
        // BaseApi.registerCmd("joinroom",RoomApi.onJoinRoom,RoomApi);
    };
    return BaseApiCmdIint;
}());
__reflect(BaseApiCmdIint.prototype, "BaseApiCmdIint");
/**
 *
 * 网络通信心跳包
 */
var HeartBeat = (function () {
    function HeartBeat() {
    }
    HeartBeat.startHeart = function () {
        if (this.timer == null) {
            this.timer = new egret.Timer(this.intervaltime, 0);
        }
        if (!this.timer.hasEventListener(egret.TimerEvent.TIMER)) {
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerFun, this);
        }
        this.timer.delay = this.intervaltime;
        this.timer.reset();
        this.timer.start();
    };
    HeartBeat.onTimerFun = function (e) {
        // MatchApi.syncPassCount(data=>{
        // 	MatchData.putPassCount(data);
        // 	BloodMatchData.putPassCount(data);			
        // 	egret.log("heartbeat");			
        // });
        // egret.setTimeout(()=>{
        // 	BloodMatchApi.syncPassCount((data)=>{
        // 		BloodMatchData.putPassCount(data);
        // 		egret.log("heartbeat blood");	
        // 	});
        // },this,2000);
        // RoleApi.syncCard((data)=>{
        // 	egret.log("heartbeat");
        // });
        DataCenter.packData();
    };
    HeartBeat.stopHeart = function () {
        if (this.timer != null) {
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerFun, this);
        }
    };
    HeartBeat.intervaltime = 60000;
    return HeartBeat;
}());
__reflect(HeartBeat.prototype, "HeartBeat");
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.send = function (url, params, completeCallback, timeoutCallback, method) {
        if (completeCallback === void 0) { completeCallback = null; }
        if (timeoutCallback === void 0) { timeoutCallback = null; }
        if (method === void 0) { method = "get"; }
        return __awaiter(this, void 0, void 0, function () {
            var request, parStr, callback, timeout;
            return __generator(this, function (_a) {
                request = new egret.HttpRequest();
                parStr = HttpClient.getRequestPars(params);
                console.log("Http request url:" + url + "?" + parStr);
                callback = function (e) {
                    request.removeEventListener(egret.Event.COMPLETE, callback, request);
                    request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
                    if (completeCallback != null) {
                        completeCallback(request.response);
                    }
                };
                timeout = function (e) {
                    request.removeEventListener(egret.Event.COMPLETE, callback, request);
                    request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
                    if (timeoutCallback != null) {
                        timeoutCallback(e);
                    }
                };
                request.addEventListener(egret.Event.COMPLETE, callback, request);
                request.addEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
                request.responseType = egret.HttpResponseType.TEXT;
                if (method == "get") {
                    request.open(url + "?" + parStr, egret.HttpMethod.GET);
                    request.send();
                }
                else if (method == "post") {
                    request.open(url, egret.HttpMethod.POST);
                    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    request.setRequestHeader("Content-Type", "multipart/form-data "); //application/json
                    egret.log("parStr:" + parStr);
                    request.send(parStr);
                }
                return [2 /*return*/];
            });
        });
    };
    HttpClient.getRequestPars = function (params) {
        var pars = "";
        for (var k in params) {
            pars += k + "=" + params[k] + "&";
        }
        return pars.substr(0, pars.length - 1);
    };
    HttpClient.sendWxrequest = function (params, url, callback, error, method) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (error === void 0) { error = null; }
        if (method === void 0) { method = "GET"; }
        egret.log("HTTP request:" + url + " " + JSON.stringify(params));
        platform.request(url, params, method, "json", function (reponseData) {
            if (_this.timeout[url]) {
                delete _this.timeout[url];
                console.log('请求成功,删除超时数据');
            }
            egret.log("HTTP reponseData:", reponseData);
            if (reponseData && reponseData.data) {
                var data = reponseData.data;
                if (callback) {
                    callback(data);
                }
            }
        }, function (e) {
            console.log("HTTP failed:", e);
            var timeoutCount = _this.timeout[url];
            if (!timeoutCount) {
                timeoutCount = 1;
            }
            else {
                timeoutCount++;
            }
            if (timeoutCount < 6) {
                _this.timeout[url] = timeoutCount;
                var data_1 = e.data;
                var errorCallBack_1 = error;
                platform.showModal('连接失败', "\u7F51\u7EDC\u8D85\u65F6" + timeoutCount + "\u6B21,\u70B9\u51FB\u91CD\u8BD5", '重试', false, function () {
                    if (errorCallBack_1)
                        errorCallBack_1.apply(_this, [data_1]);
                });
            }
            else {
                //提示玩家检测网络
                delete _this.timeout[url];
                console.log('超时5次,删除超时数据');
                platform.showModal('连接失败', "\u7F51\u7EDC\u8D85\u65F6" + timeoutCount + "\u6B21,\u8BF7\u68C0\u67E5\u7F51\u7EDC\u72B6\u51B5", '重启', false, function () {
                    platform.exitMiniProgram(null, null);
                });
            }
        });
    };
    HttpClient.timeout = {};
    return HttpClient;
}());
__reflect(HttpClient.prototype, "HttpClient");
var SocketClient = (function () {
    function SocketClient(host, port) {
        this.isConnect = false;
        this.isConnect = false;
        this.host = host;
        this.port = port;
    }
    SocketClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.connectSocket({ url: 'wss://' + this.host, header: {}, protocols: [], success: function () {
                                console.log("SOCKET初始化成功:" + 'wss://' + _this.host);
                            }, fail: function () {
                                console.log("SOCKET初始化失败");
                            }, complete: function () {
                                console.log("SOCKET初始化完成");
                            } })];
                    case 1:
                        _a.sent();
                        //创建监听
                        return [4 /*yield*/, platform.onSocketClose(this.onSocketClose)];
                    case 2:
                        //创建监听
                        _a.sent();
                        return [4 /*yield*/, platform.onSocketError(this.onSocketIOError)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.onSocketOpen(this.onSocketConnect)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, platform.onSocketMessage(this.onData)];
                    case 5:
                        _a.sent();
                        this.isConnect = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    SocketClient.prototype.close = function (code) {
        if (code === void 0) { code = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isConnect = false;
                        return [4 /*yield*/, platform.closeSocket({ code: code, reason: "normal",
                                success: function () {
                                    console.log("链接关闭成功");
                                }, fail: function () {
                                    console.log("链接关闭失败");
                                }, complete: function () {
                                    console.log("链接关闭完成");
                                } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SocketClient.prototype.sendData = function (data) {
        platform.sendSocketMessage({ data: JSON.stringify(data),
            success: function () {
                console.log("消息发送成功");
            }, fail: function () {
                console.log("消息发送失败");
            }, complete: function () {
                console.log("消息发送完成");
            } });
    };
    SocketClient.prototype.onData = function (data) {
        if (SocketClient.onDataCallBack != null) {
            SocketClient.onDataCallBack(data);
        }
    };
    SocketClient.prototype.onSocketConnect = function () {
        if (SocketClient.onConnectCallBack != null) {
            SocketClient.onConnectCallBack();
        }
    };
    SocketClient.prototype.onSocketClose = function () {
        if (SocketClient.onCloseCallBack != null) {
            SocketClient.onCloseCallBack();
        }
    };
    SocketClient.prototype.onSocketIOError = function () {
        if (SocketClient.onIOErrorCallBack != null) {
            SocketClient.onIOErrorCallBack();
        }
    };
    SocketClient.prototype.dispose = function () {
        SocketClient.onConnectCallBack = null;
        SocketClient.onCloseCallBack = null;
        SocketClient.onIOErrorCallBack = null;
        SocketClient.onDataCallBack = null;
        this.close();
    };
    return SocketClient;
}());
__reflect(SocketClient.prototype, "SocketClient");
var ArrayUtil = (function () {
    function ArrayUtil() {
    }
    ArrayUtil.contains = function (array, value) {
        for (var k in array) {
            var val = array[k];
            if (val.toString() == value.toString()) {
                return true;
            }
        }
        return false;
    };
    ArrayUtil.max = function (array) {
        if (!array || array.length == 0)
            return null;
        var max = array[0];
        for (var k in array) {
            max = Math.max(max, array[k]);
        }
        return max;
    };
    ArrayUtil.min = function (array) {
        if (!array || array.length == 0)
            return null;
        var max = array[0];
        for (var k in array) {
            max = Math.min(max, array[k]);
        }
        return max;
    };
    return ArrayUtil;
}());
__reflect(ArrayUtil.prototype, "ArrayUtil");
var ColorUtil = (function () {
    function ColorUtil() {
    }
    ColorUtil.setGray = function (display) {
        var colorMatrix = [0.308, 0.609, 0.082, 0, 5,
            0.308, 0.609, 0.082, 0, 5,
            0.308, 0.609, 0.082, 0, 5,
            0, 0, 0, 1, 0];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        display.filters = [colorFilter];
    };
    ColorUtil.setDark = function (display) {
        var colorMatrix = [0.3, 0, 0, 0, 30.8,
            0, 0.3, 0, 0, 30.8,
            0, 0, 0.3, 0, 30.8,
            0, 0, 0, 1, 0];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        display.filters = [colorFilter];
    };
    ColorUtil.setBlack = function (display) {
        var colorMatrix = [0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 0];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        display.filters = [colorFilter];
    };
    ColorUtil.setHui = function (display) {
        var colorMatrix = [0, 0, 0, 0.4, 0,
            0, 0, 0, 0.4, 0,
            0, 0, 0, 0.4, 0,
            0, 0, 0, 1, 0];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        display.filters = [colorFilter];
    };
    ColorUtil.clearGray = function (display) {
        display.filters = null;
    };
    return ColorUtil;
}());
__reflect(ColorUtil.prototype, "ColorUtil");
var DateTool = (function () {
    function DateTool() {
    }
    /** 到下一个hour小时的毫秒数 */
    DateTool.toNextHoursTime = function (hour) {
        if (hour === void 0) { hour = 1; }
        //容错处理
        hour = Math.min(hour, 23);
        hour = Math.max(hour, 0);
        //当前时间
        var nowdate = new Date();
        var year = nowdate.getFullYear();
        var mon = nowdate.getMonth();
        var day = nowdate.getDate();
        var hh = nowdate.getHours();
        var min = nowdate.getMinutes();
        var ss = nowdate.getSeconds();
        var ms = nowdate.getMilliseconds();
        //到达时间
        var newYear = year;
        var newMon = mon;
        var newDay = day;
        if (hour <= hh || hour == 0) {
            newDay++;
            if (newDay > this.getCurrentMonthDays()) {
                newDay = 1;
                newMon++;
                if (newMon > 11) {
                    newMon = 0;
                    newYear++;
                }
            }
        }
        var newDate = new Date(newYear, newMon, newDay, hour);
        var nowtime = nowdate.getTime();
        var newtime = newDate.getTime();
        return Math.abs(newtime - nowtime);
    };
    /**
     * 倒几分钟
     */
    DateTool.formatMinuteTime = function (time) {
        var total_secends = Math.floor(time);
        var h = Math.floor(total_secends / 3600);
        var m = Math.floor(total_secends % 3600 / 60);
        var s = Math.floor(total_secends % 3600 % 60);
        var str_h = h < 10 ? ("0" + h) : ("" + h);
        var str_m = m < 10 ? ("0" + m) : ("" + m);
        var str_s = s < 10 ? ("0" + s) : ("" + s);
        return str_h + ":" + str_m + ":" + str_s;
    };
    /** 将毫秒转化为时分秒 */
    DateTool.formatTime = function (time) {
        var total_secends = Math.floor(time / 1000);
        var h = Math.floor(total_secends / 3600);
        var m = Math.floor(total_secends % 3600 / 60);
        var s = Math.floor(total_secends % 3600 % 60 % 1000);
        var str_h = h < 10 ? ("0" + h) : ("" + h);
        var str_m = m < 10 ? ("0" + m) : ("" + m);
        var str_s = s < 10 ? ("0" + s) : ("" + s);
        return str_h + ":" + str_m + ":" + str_s;
    };
    /** 获取当月天数 */
    DateTool.getCurrentMonthDays = function () {
        var nowdate = new Date();
        var year = nowdate.getFullYear();
        var mon = nowdate.getMonth();
        var monthStartDate = new Date(year, mon, 1);
        var monthEndDate = new Date(year, mon + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    };
    /** 将时间戳转换成日期 */
    DateTool.timestampToTime = function (timestamp) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
    };
    /**
     *
     * @param timestamp 毫秒时间戳
    */
    DateTool.makeTime = function (timestamp) {
        if (timestamp === void 0) { timestamp = -1; }
        var date = null;
        if (timestamp == -1) {
            date = new Date();
        }
        else {
            date = new Date(timestamp);
        }
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate();
        return Y + M + D;
    };
    /** 将日期转换成时间戳 */
    DateTool.dateTotimeStamp = function (date) {
        if (date === void 0) { date = "1979-1-1 00:00:00"; }
        var timestamp = new Date(date).getTime();
        return timestamp;
    };
    /** 获取当前时间戳 */
    DateTool.currentTime = function () {
        var timestamp = new Date().getTime();
        return timestamp;
    };
    /** 获取当前某点的时间戳 */
    DateTool.currentDayHourTimeStamp = function (hours, min, sec, minSec) {
        if (hours === void 0) { hours = 0; }
        if (min === void 0) { min = 0; }
        if (sec === void 0) { sec = 0; }
        if (minSec === void 0) { minSec = 0; }
        var now = new Date();
        now.setHours(hours, min, sec, minSec);
        return now.getTime();
    };
    return DateTool;
}());
__reflect(DateTool.prototype, "DateTool");
var ObjectUtil = (function () {
    function ObjectUtil() {
    }
    ObjectUtil.isFalse = function (object) {
        if (object == undefined || object == null || object == 0)
            return false;
    };
    return ObjectUtil;
}());
__reflect(ObjectUtil.prototype, "ObjectUtil");
var RandomUitl = (function () {
    function RandomUitl() {
    }
    RandomUitl.randomInt = function (min, max) {
        if (min > max) {
            var t = min;
            min = max;
            max = t;
        }
        return min + Math.round((max - min) * Math.random());
    };
    RandomUitl.randomFloat = function (min, max) {
        if (min > max) {
            var t = min;
            min = max;
            max = t;
        }
        return min + Math.round(((max - min) * Math.random()) * 100) / 100;
    };
    RandomUitl.randomDouble = function (min, max) {
        if (min > max) {
            var t = min;
            min = max;
            max = t;
        }
        return min + ((max - min) * Math.random());
    };
    return RandomUitl;
}());
__reflect(RandomUitl.prototype, "RandomUitl");
var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.getChar = function (str, len) {
        var ba = new egret.ByteArray;
        ba.writeUTFBytes(str);
        if (ba.length <= len)
            return str;
        ba.position = 0;
        return ba.readUTFBytes(len) + "··";
    };
    /**
     * 生成随机数
     * */
    StringUtil.getRandom = function (max, min) {
        var a = max - min;
        var random = Math.floor(min + Math.random() * a);
        return random;
    };
    /**
     * 统一数字显示
     */
    StringUtil.number2String = function (num) {
        var str = num.toString();
        var index = Math.floor(str.length / 3);
        if (str.length % 3 == 0) {
            index--;
        }
        var nuit = this.units[index];
        var pos = str.length - (index) * 3;
        var n = str.substr(0, pos);
        if (nuit != "") {
            var m = str.substr(pos, 2);
            n += "." + m;
        }
        return n + nuit;
        // if(num > 100000000){
        // 	num /= 100000000;
        // 	return num.toFixed(accuracy) + "E";
        // }else if(num >= 10000){
        // 	num /= 10000;
        // 	return num.toFixed(accuracy) + "W";
        // }else if(num >= 1000){
        // 	num /= 10000;
        // 	return num.toFixed(accuracy) + "K";
        // }else{
        // 	return num.toFixed(accuracy);
        // }
    };
    /**
     * 金币数量显示
     */
    StringUtil.goldNumber2String = function (num) {
        if (num > 100000000) {
            num /= 100000000;
            return num.toFixed(0) + "E";
        }
        else if (num >= 10000) {
            num /= 10000;
            return num.toFixed(2) + "W";
        }
        else {
            return Math.floor(num).toString();
        }
    };
    StringUtil.numberFormat = function (a) {
        var decimal = new Decimal(a);
        var str = decimal.toFixed();
        var index = Math.floor(str.length / 3);
        if (str.length % 3 == 0) {
            index--;
        }
        var nuit = this.units[index];
        if (nuit != "") {
            var pos = str.length - (index) * 3;
            var n = str.substr(0, pos);
            var m = str.substr(pos, 2);
            n += "." + m;
        }
        return n + nuit;
    };
    StringUtil.decimalFormat = function (decimal) {
        if (!decimal)
            return "";
        var str = decimal.toFixed();
        var strVector = str.split(".");
        if (strVector && strVector.length > 1) {
            str = strVector[0];
        }
        // console.log("decimal.toFixed():",str);
        var index = Math.floor(str.length / 3);
        if (str.length % 3 == 0) {
            index--;
        }
        var nuit = this.units[index];
        if (nuit != "") {
            var pos = str.length - (index) * 3;
            var n = str.substr(0, pos);
            var m = str.substr(pos, 2);
            n += "." + m;
        }
        else {
            return str;
        }
        return n + nuit;
    };
    //字符串截取工具
    StringUtil.units = ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz", "AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"];
    return StringUtil;
}());
__reflect(StringUtil.prototype, "StringUtil");
/** 邀请有礼配置结构 */
var CfgInvite = (function () {
    function CfgInvite() {
    }
    return CfgInvite;
}());
__reflect(CfgInvite.prototype, "CfgInvite");
/**
 * 小姐姐配置信息 (界面显示)
 * 定义出来方便扩展字段
*/
var lzd;
(function (lzd) {
    var vo;
    (function (vo) {
        var CfgPlayer = (function () {
            function CfgPlayer() {
            }
            return CfgPlayer;
        }());
        vo.CfgPlayer = CfgPlayer;
        __reflect(CfgPlayer.prototype, "lzd.vo.CfgPlayer");
    })(vo = lzd.vo || (lzd.vo = {}));
})(lzd || (lzd = {}));
/** 邀请有礼完成任务结构 */
var InviteFinish = (function () {
    function InviteFinish() {
    }
    return InviteFinish;
}());
__reflect(InviteFinish.prototype, "InviteFinish");
var NotEnough_vo = (function () {
    function NotEnough_vo(date, jewelCount, jinbiCount) {
        this.date = date;
        this.jewelCount = jewelCount;
        this.jinbiCount = jinbiCount;
    }
    return NotEnough_vo;
}());
__reflect(NotEnough_vo.prototype, "NotEnough_vo");
/**
 * 小姐姐数据
 * 用于表示:小姐姐等级,位置
 * 定义出来方便扩展字段
 */
var lzd;
(function (lzd) {
    var vo;
    (function (vo) {
        var Player = (function () {
            function Player() {
                /** 金币购买次数 */
                this.buyCount_gold = 1;
                /** 钻石购买次数 */
                this.buyCount_jewel = 1;
            }
            return Player;
        }());
        vo.Player = Player;
        __reflect(Player.prototype, "lzd.vo.Player");
    })(vo = lzd.vo || (lzd.vo = {}));
})(lzd || (lzd = {}));
var lzd;
(function (lzd) {
    var vo;
    (function (vo) {
        var Position = (function () {
            function Position() {
                /** 小姐姐，小哥哥，宠物id */
                this.playerid = "";
                /** 上一次收益时间点 */
                this.lastTime = 0;
                /** 这个位置是否有箱子 */
                this.isHasBox = false;
            }
            return Position;
        }());
        vo.Position = Position;
        __reflect(Position.prototype, "lzd.vo.Position");
    })(vo = lzd.vo || (lzd.vo = {}));
})(lzd || (lzd = {}));
/**
 * 随机宝箱数据结构
 */
var RandomBox = (function () {
    function RandomBox(date, count) {
        this.date = date;
        this.count = count;
    }
    return RandomBox;
}());
__reflect(RandomBox.prototype, "RandomBox");
/**
 * 角色属性
 */
var Role = (function () {
    function Role() {
        /** 角色uid */
        this.uid = 1;
        /** 角色名 */
        this.name = "";
        /** 头像地址 */
        this.head = "";
        /** 性别 */
        this.sex = 0;
        /** 地址 */
        this.province = "";
        /** 金币 */
        this.gold = new Decimal(2200);
        /** 钻石 */
        this.jewel = 0;
    }
    return Role;
}());
__reflect(Role.prototype, "Role");
/**
 * 加速次数数据结构
 */
var Speedup = (function () {
    function Speedup(date, count) {
        this.date = date;
        this.count = count;
    }
    return Speedup;
}());
__reflect(Speedup.prototype, "Speedup");
/**
 * 转盘数据结构
 * 每天转盘上线30次
 */
var ZhuanPan_vo = (function () {
    function ZhuanPan_vo(date, count) {
        this.date = date;
        this.count = count;
    }
    return ZhuanPan_vo;
}());
__reflect(ZhuanPan_vo.prototype, "ZhuanPan_vo");
;window.Main = Main;