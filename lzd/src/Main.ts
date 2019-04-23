
class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        egret.ImageLoader.crossOrigin = "anonymous";
        
        this.runGame().catch(e => {console.log(e);})
    }
    private async runGame() {
        //检查更新        
        await platform.checkForUpdate();        
        //加载内部资源
        await AssetsManager.getInstance().loadInnerResource("resource","lzd");
        await this.loadTheme();
        this.addChild(LoadingUI.instance);
        //登陆微信
        await WechatManager.getInstance().login();
        //请求游戏配置
        ConfigManager.getInstance().initAppConfig(this.onAppConfigLoadComplete,this);

        LoadingUI.instance.setSliderValue(30); 
    }
    /** 加载EUI配置 */
    private async loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {resolve();}, this);
            LoadingUI.instance.setSliderValue(50); 
        })
    }
    /** 加载配置完成 */
    private async onAppConfigLoadComplete(){
        (ConfigManager.getInstance() as ConfigManager).initShareConfig(()=>{
            this.LoginServer();
        },this);
        LoadingUI.instance.setSliderValue(100); 
    }
    
    /** 登陆 */
    private async LoginServer() {
        this.addChild(LoadingUI.instance);
        // .login();
        //登陆服务器
        let thisObj = this;
        //获取启动信息
        await (WechatManager.getInstance() as WechatManager).getLaunchOptionsSync();
        var invitetid = WechatManager.getInstance().getInviteid();
        var invitetype = WechatManager.getInstance().getInvitetype();
        let channel = (WechatManager.getInstance() as WechatManager).getChannel();
        let openId = (WechatManager.getInstance() as WechatManager).getOpenId();
        
        const userInfo = AccountData.getwxUser();   
        if(openId){
            GameApi.login(null,openId,channel,invitetid,invitetype,(data:any)=>{
                if(data.ret == -3){
                    //后台用户数据删除，或者openid对应用户不存在
                    AccountData.delOpenId();
                    thisObj.LoginServer();
                    return;
                }
                thisObj.initSDK();
            });
        }else{
            //登陆微信
            await (WechatManager.getInstance() as WechatManager).login();
            const code = AccountData.getWXcode();
            GameApi.login(code,null,channel,invitetid,invitetype,(data:any)=>{
                thisObj.initSDK();
            });
        }
    }

    public async initSDK(){
        if(AppConfig.sdk_favlist || AppConfig.sdk_gamelist || AppConfig.sdk_suspension){
            let thisObj = this;
            //初始化DDSDK
            DDSDK.init(AppConfig.appid,AccountData.getOpenId(),DaDianConstant.appid);
            DDSDK.setResLoadCallback(()=>{
                thisObj.startGame();
            });
            platform.onShow(res=>{
                console.log("onShow ask DDSDK");
                var render = DDSDK.getRender();
                if(render)render.wxShow(res);
            });
        }else{
            this.startGame();
        }
    }

    public async startGame(){     
        LayerManager.getInstance().init(this);
        Alert.init(LayerManager.getInstance().alertLayer,this.width,this.height);
        TipsPanel.instance.init();

        //声音设置
        await platform.setInnerAudioOption(true,true);
        //设置分享
        await platform.onShareAppMessage(ShareConstant.randomTitleAndUrl());
        await platform.updateShareMenu (true,null);
        
		const thisObj = this;
		platform.loadSubpackage(res => {
			LoadingUI.instance.onDownProgress(res);
		},async complete=>{
            //加载分包资源
            await AssetsManager.getInstance().loadInnerResource("stage/resource","subbag");
			thisObj.removeChild(LoadingUI.instance);
            LayerManager.getInstance().senceLayer.addChild(new StartPanel());
            HeartBeat.startHeart();
		});
        platform.onHide(()=>{
            DataCenter.packData();
        });
	}
}