class Main extends egret.DisplayObjectContainer {
    public static units: string[] = ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz", "AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"];

    private rankType: number;
    private selfUserInfo: any;
    private rankData: any[];
    private rankItemList: any[] = [];
    private gameData = [];
    private readonly scrollView = new egret.ScrollView();
    public static textrueMap: any = {};
    private stageWidth: number;
    private stageHeight: number;
    private initGameData() {
        this.gameData = [];
        var item = { openid: '', avatarUrl: '', nickname: '虚位以待', KVDataList: [{ key: "gold", value: '0' }] };
        for (var i = 0; i < 30; i++) {
            this.gameData.push(item);
        }
    }
    constructor() {
        super();
        this.initGameData();
        this.initRes();
    }
    public async initRes() {
        //获取排行榜所需资源
        if (Object.keys(Main.textrueMap).length < 1) {
            // await LoaderImageUtil.instance.loaderImage("resource/rank/phb_lanbj.png","scorllBg");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_backg_tcsd.png", "itemBg");   
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_frame_paihwd.png", "myitemBg");
            // await LoaderImageUtil.instance.loaderImage("resource/rank/phb_topbj.png","topBg");
            //await LoaderImageUtil.instance.loaderImage("resource/rank/phb_tou.png","touBg");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_img_paih1.png", "one");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_img_paih2.png", "two");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_img_paih3.png", "three");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_frame_djdi.png", "jinbidi");
            await LoaderImageUtil.instance.loaderImage("resource/rank/xjj_icon_jsdj.png", "rankdi");
        }


        wx.onMessage(data => {
            this.stageWidth = data.stageWidth;
            this.stageHeight = data.stageHeight;
            if (this.selfUserInfo) {
                this.requestStorage(data);
            } else {
                wx.getUserInfo({
                    openIdList: ['selfOpenId'], lang: 'zh_CN', success: (res) => {
                        this.selfUserInfo = res.data && res.data.length == 1 ? res.data[0] : null;
                        this.requestStorage(data);
                    }, fail: () => { console.log('获取个人信息错误'); }, complete: () => { }
                });
            }
        });
    }
    private requestStorage(data: any) {
        if (data.isDisplay) {
            //获取小游戏开放数据接口 --- 开始
            var Object = {}
            this.rankType = data.rankType;
            if (data.rankType == 1) {
                //好友
                wx.getFriendCloudStorage({
                    keyList: ['gold'],
                    success: res => {
                        if (res.data) {
                            this.rankData = res.data;
                            this.updataGameData();
                        }
                        this.runGame();
                    },
                    fail: err => {
                        console.log(err);
                    },
                    complete: () => {

                    }
                });
                //创建按钮

            } else if (data.rankType == 2) {
                //群
                wx.getGroupCloudStorage({
                    shareTicket: data.shareTicket,
                    keyList: ['gold'],
                    success: res => {
                        if (res.data) {
                            this.rankData = res.data;
                            this.updataGameData();
                        }
                        this.runGame();
                    },
                    fail: err => {
                        console.log(err);
                    },
                    complete: () => {

                    }
                });
            }
        } else {
            this.cancelGame();
        }
    }
    //组装排行数据
    private updataGameData() {
        //排序
        this.rankData.sort((a, b) => {
            var reg_zimu = /[a-z,A-Z]{1,2}/g;
            var reg_shuzi=/\d+/g;
            var aString = a.KVDataList[0].value;
            var bString = b.KVDataList[0].value;
            var aString_shuzi :number= parseInt(aString.match(reg_shuzi)[0]);
            var bString_shuzi :number= parseInt(bString.match(reg_shuzi)[0]);
            var aString_zimu :string= aString.match(reg_zimu)[0];
            if (aString_zimu==null) aString_zimu="";
            var bString_zimu :string= bString.match(reg_zimu)[0];
            if (bString_zimu==null) bString_zimu="";
            var aString_zimu_xiabiao :number =  this.searchXiaBiao(Main.units, aString_zimu);  
            var bString_zimu_xiabiao :number =  this.searchXiaBiao(Main.units, bString_zimu);  
            //字母和数字都相同
            if (aString_zimu==bString_zimu &&aString_shuzi==bString_shuzi){
                return 0;
            }//字母相同比数字
            else if(aString_zimu==bString_zimu){
                if(aString_shuzi>bString_shuzi) return -1;
                else return 1;
            }//字母不同比下标
            else if(aString_zimu!=bString_zimu){
                if(aString_zimu_xiabiao>bString_zimu_xiabiao) return -1;
                else return 1;
            }
        });
        //柠出自己

        this.gameData.forEach((value, index) => {
            if (this.rankData && index < this.rankData.length) {
                this.gameData[index] = this.rankData[index];
            }
        });

    }
    private runGame() {
        var bgWidth = 545;
        var bgHeigth = 626;
        var startX = (this.stageWidth - bgWidth) >> 1;
        var selfstartY = ((this.stageHeight - bgHeigth) >> 1) ;

        const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = startX;
        this.scrollView.y = selfstartY;
        this.scrollView.width = bgWidth;
        this.scrollView.height = 626;

        this.addChild(this.scrollView);
        var selfData = null;
        var selfIndex = -1;
        var bgType = 1;
        var startY = 15;
        this.gameData.forEach(
            (value, index) => {
                if (value.avatarUrl == this.selfUserInfo.avatarUrl) {
                    let item = new PassRankItem(value, index, 0);
                    item.x = startX;
                    item.y = selfstartY + this.scrollView.height + 18;
                    this.addChild(item);
                    selfIndex = index;
                }
                 {
                    let item = new PassRankItem(value, index, 1);
                    item.y = startY + (index) * 100;//只是计算位置
                    listContainer.addChild(item);
                    bgType++;
                }
            }, this);

        if (selfIndex == -1) {
            //说明自己没有在15名内
            this.rankData.forEach(
                (value, index) => {
                    if (value.avatarUrl == this.selfUserInfo.avatarUrl) {
                        let item = new PassRankItem(value, index, 0);
                        item.x = startX;
                        item.y = startY - item.height;
                        this.addChild(item);
                    }
                }, this);
        }
    }

    public searchXiaBiao(arr, dst) {
        var i = arr.length - 1;
        while (i >= 0) {
            if (arr[i] === dst) {
                return i;
            }
            i--;
        }
        return -1;
    }

    private cancelGame(): void {
        for (let i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        this.initGameData();
        console.log('停止开放数据域');
    }
}
