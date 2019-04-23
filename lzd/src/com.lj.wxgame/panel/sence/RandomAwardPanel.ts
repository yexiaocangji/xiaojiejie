class RandomAwardPanel extends eui.Component implements eui.UIComponent {
	public gaintypeImg: eui.Image;
	public titleType: eui.Label;
	public gainCount: eui.Label;
	public lingquBtn: MyButton;
	public lingqu4beiBtn: MyButton;
	public _type: number;	//奖励类型：铜钱还是钻石	
	public constructor() {
		super();
		var float = RandomUitl.randomInt(1, 2);
		if (float == 1) {
			this._type = float;
		} else if (float == 2) {
			this._type = float;
		}
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.lingquBtn) this.lingquBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingquBtn, this);
		if (this.lingqu4beiBtn) this.lingqu4beiBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingqu4beiBtn, this);
		this.init();
		AdConstant.showBannerAd();
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"randomBox","randombox1",""));
	}

	public init() {
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
	}


	public onLingquBtn() {
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
			ControllAlert.show("成功领取"+StringUtil.decimalFormat(jiangliGold)+"金币！");
		}
		RoleData.putRole(role);
		Alert.closeAlert(this, 0);
	}
	//4倍领取 广告或者分享
	public onLingqu4beiBtn() {
		if(AppConfig.baoxiang_reward == "share"){
			ShareConstant.shareToGroup((result) => {
				if (result) {
					var role = RoleData.getRole();
					if (this._type == 1) {
						//钻石
						role.jewel = role.jewel + 400;
						ControllAlert.show("成功领取400钻石！");
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"randomBox","randombox2",""));
					}
					else if (this._type == 2) {
						//金币
						var highLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
						var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, highLevel + "");
						var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
						var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).mul(2);
						role.gold = role.gold.add(jiangliGold);
						ControllAlert.show("成功领取"+StringUtil.decimalFormat(jiangliGold)+"金币！");
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"randomBox","randombox2",""));
					}
					RoleData.putRole(role);
					Alert.closeAlert(this, 0);
				} else {
					ControllAlert.show("分享失败");
				}
			}, this);
		}else{
			//看广告
			AdConstant.lookRewardAd(result=>{
				if(result){
					var role = RoleData.getRole();
					if (this._type == 1) {
						//钻石
						role.jewel = role.jewel + 400;
						ControllAlert.show("成功领取400钻石！");
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"randomBox","randombox3",""));
					}
					else if (this._type == 2) {
						//金币
						var highLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).maxBuyLevel;
						var highLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, highLevel + "");
						var highLevelPlayer = PlayerData.getPlayerById(highLevelId);
						var jiangliGold = RoleData.getBuildGold(highLevelId, highLevelPlayer.buyCount_gold).mul(2);
						role.gold = role.gold.add(jiangliGold);
						ControllAlert.show("成功领取"+StringUtil.decimalFormat(jiangliGold)+"金币！");
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"randomBox","randombox3",""));
					}
					RoleData.putRole(role);
					Alert.closeAlert(this, 0);
				}else{
					ControllAlert.show("中断广告,无奖励");
				}
			},this);
		}
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.lingquBtn) this.lingquBtn.dispose();
		if (this.lingqu4beiBtn) this.lingqu4beiBtn.dispose();
	}
}