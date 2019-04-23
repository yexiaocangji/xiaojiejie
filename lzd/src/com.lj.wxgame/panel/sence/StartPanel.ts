class StartPanel extends BasePanel {
	public startBtn: MyButton;
	public rankBtn:MyButton;
	public helpBtn:MyButton;	
	public soundBtn:MyButton;	
	public kefuBtn:MyButton;
	public uidLabel:eui.Label;
	public otherGameGroup:eui.Group;
	public favlistConstainer:eui.Group;		
	public constructor() {
		super();
	}

	public initialize() {
		if (this.startBtn) {
			this.startBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onStartGame, this);
			egret.Tween.get(this.startBtn,{loop:true}).to({scaleX:1.2,scaleY:1.2},1200).to({scaleX:1,scaleY:1},1000);
		}
		if(this.rankBtn)this.rankBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onRankBtn,this);
		if(this.kefuBtn)this.kefuBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onKefuBtn,this);
		platform.createFeedbackButton();
		this.getUserInfo();
		if(this.uidLabel)this.uidLabel.text = "id:" + AccountData.uid();
		this.initAniGameAd();
		this.initFavListGame();		
	}

	public async getUserInfo() {
		await WechatManager.getInstance().getUserInfo(this.onStartGame);
	}
	public onRankBtn(e:egret.TouchEvent){
		var rankPanel = new RankPanel();
		rankPanel.shareTicket = e.data ? e.data.shareTicket:null;
		Alert.alert(rankPanel);
	}
	public onKefuBtn(e:egret.TouchEvent){
		platform.openCustomerServiceConversation({success:(e)=>{console.log('进入客服');}});
	}
	public async onStartGame() {
		if(AccountData.getMp()){
			console.log("mp跳转",AppConfig.mp_path);
			//mp投放双跳
			platform.navigateToMiniProgram(AppConfig.mp_path.appid,AppConfig.mp_path.path,"");
			AccountData.putMp(null);
			this.getUserInfo();
			return;
		}

		var players_xjj = PlayerData.getPlayers();
		var positions_xjj = PositionData.getPositionsById(1);
		if (!players_xjj || players_xjj == "" || Object.keys(players_xjj).length < 1) {
			var player = new lzd.vo.Player();
			player.id = "1001"
			PlayerData.updatePlayer(player.id, player);
		}
		if (!positions_xjj) {
			for (var i = 0; i < 12; i++) {
				var position = new lzd.vo.Position();
				position.posid = i + "";
				PositionData.updatePosition(position.posid, position,1);
			}
			var position1 = PositionData.getPositionById("0",1);
			position1.playerid = "1001";
			PositionData.updatePosition("0", position1,1);
		}
		BasePanel.currentPanel.gotoPanel(new GamePanel());
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"guide","gamestart",""));	

	}


	public initFavListGame(){
		if(!AppConfig.favlist_luck){
			this.favlistConstainer.visible = false;
			return;		      
		}
		var channel = AccountData.getChannel();
		if(ArrayUtil.contains(AppConfig.channelList_luck,channel)){
			this.favlistConstainer.visible = false;
			return;
		}
		if(AppConfig.sdk_favlist){
			var drender = DDSDK.getRender();
			var fview = drender.getFavAD(3,1);
			fview.pos(this.otherGameGroup.x,this.otherGameGroup.y);
			fview.scaleX = 0.8;
			fview.scaleY = 0.8;
			this.favlistConstainer.addChild(fview);
			return;
		}
		//猜你喜欢配置获取，获取成功后重新调用函数刷新界面(抽屉页相同)
		if(!OtherGameConstant.likesGameConfig){
			(ConfigManager.getInstance() as ConfigManager).loadConfig(AppConfig.likesConfigUrl,(data)=>{
				OtherGameConstant.likesGameConfig = data;
				this.initFavListGame();
			},this);
			return;
		}
		var otherconfig = OtherGameConstant.likesGameConfig;
		this.favlistConstainer.$children.forEach(element=>{element.visible = true;})
		if(this.otherGameGroup.numChildren == 0){
			for(var k in otherconfig){
				var conf:any = otherconfig[parseInt(k)];
				var othergameSkin:OtherGameSkin = new OtherGameSkin(conf);
				this.otherGameGroup.addChild(othergameSkin);
			}
		}else{
			//刷新
			var otherconfig1 = OtherGameConstant.likesGameConfig;
			var index:number = 0;
			for(var k1 in otherconfig1){
				if(index < this.otherGameGroup.numChildren){
					// (this.otherGameGroup.getChildAt(index) as OtherGameSkin).initUI();
				}else{
					this.otherGameGroup.addChild(new OtherGameSkin(otherconfig1[k1]));
				}
				index++;
			}
		}
	}

	public initAniGameAd(){
		if(AppConfig.suspension_luck){
			var drender = DDSDK.getRender();
			var aniad = drender.getAniAD();
			if(aniad){
				aniad.scaleX = aniad.scaleY = 0.7;
				//靠右向下对齐
				aniad.pos(this.width - aniad.width * 0.7,this.height - 1036);
				LayerManager.getInstance().alertLayer.addChild(aniad);
			}
		}
	}	

	public dispose(){
		platform.hideFeedbackButton();
		if(this.startBtn)this.startBtn.dispose();
		if(this.rankBtn)this.rankBtn.dispose();
		if(this.kefuBtn)this.kefuBtn.dispose();
		if(this.soundBtn)this.soundBtn.dispose();
		super.dispose();
	}
}