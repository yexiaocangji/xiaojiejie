class LixianPanel extends eui.Component implements eui.UIComponent {
	public getGoldValue: eui.Label;
	public closeBtn: MyButton;
	public shareBtn: MyButton;
	public getGold: Decimal;
	public getLxTime: number;
	public runBg:eui.Image;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
		this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this);
		this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
		if(this.closeBtn){
			this.closeBtn.visible = false;
			egret.setTimeout(()=>{
				this.closeBtn.visible = true;
			},this,2000);
		}
		if(this.runBg)egret.Tween.get(this.runBg,{loop:true}).to({rotation:360},2000);
		AdConstant.showBannerAd();
	}

	public init() {
		var offlineTime = AccountData.getOffLine();//获取离线时间
		var shouyiValue = GameConstant.getAllShouYiValue();   //离线收益 
		this.getLxTime = offlineTime <= 3600 * 2 ? offlineTime : 2 * 3600;   //是否超过8小时
		//读取当前金币总收益数量
/*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
		for (var posid in positions) {
			var position = PositionData.getPositionById(posid,StaticConstant.CurrentType);
			if (position.playerid == "") continue;
			var config = ConfigData.getPlayerById(position.playerid);
			shouyiValue = shouyiValue.add(config.lixianshouyi);
		}*/
		this.getGold = shouyiValue.mul(this.getLxTime);
		if (this.getGold) this.getGoldValue.text = "+" + StringUtil.decimalFormat(this.getGold);
	}

	public onShareBtn() {
		if(AppConfig.Lixian_share == "share"){
			ShareConstant.shareToGroup((result) => {
				if (result) {
					var role = RoleData.getRole();
					role.gold = role.gold.add(this.getGold.mul(2));
					RoleData.putRole(role);
					Alert.closeAlert(this, -1);
					ControllAlert.show("获得" + StringUtil.decimalFormat(this.getGold) + "x2个金币！")
					this.onclosebtn();
				} else {
					ControllAlert.show("分享失败");
				}
			}, this);
		}else{
			//看广告
			AdConstant.lookRewardAd(result=>{
				if(result){
					var role = RoleData.getRole();
					role.gold = role.gold.add(this.getGold.mul(2));
					RoleData.putRole(role);
					Alert.closeAlert(this, -1);
					ControllAlert.show("获得" + StringUtil.decimalFormat(this.getGold) + "x2个金币！")
					this.onclosebtn();
				}else{
					ControllAlert.show("中断广告,无奖励");
				}
			},this);
		}

	}

	public onGetBtn() {
		var role = RoleData.getRole();
		role.gold = role.gold.add(this.getGold);
		RoleData.putRole(role);
		ControllAlert.show("获得" + StringUtil.decimalFormat(this.getGold) + "个金币！")
		this.onclosebtn();
	}

	public onclosebtn(){
		Alert.closeAlert(this, -1);
	}

	public dispose() {
		platform.hideBannerAd();
		AccountData.putOffLine(0);
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.shareBtn) this.shareBtn.dispose();
	}
}