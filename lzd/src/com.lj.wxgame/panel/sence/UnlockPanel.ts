class UnlockPanel extends eui.Component implements eui.UIComponent {
	public xjjImg: eui.Image;
	public levelInfo: eui.Label;
	public closeBtn: MyButton;
	public closeBtn0: MyButton;
	public shareBtn: MyButton;
	public jiangliCount:eui.Label;
	public runBg:eui.Label;
	public id: string;
	public constructor(id: string) {
		super();
		this.id = id;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
		this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
		if(this.closeBtn0){
			this.closeBtn0.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
			this.closeBtn0.visible = false;
			egret.setTimeout(()=>{
				this.closeBtn0.visible = true;
				var config = ConfigData.getPlayerById(this.id);
				if(config && parseInt(config.level) < 4){
					this.closeBtn0.visible = false;
				}
			},this,2000);
		}
		if(this.runBg)egret.Tween.get(this.runBg,{loop:true}).to({rotation:360},2000);
	}

	public init() {
		var config = ConfigData.getPlayerById(this.id);
		if (this.xjjImg) this.xjjImg.source = config.icon_res;
		this.levelInfo.text = "LV." + config.level;
		this.jiangliCount.text = "+" + config.firstreward;
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"unlock","unlock1",""));
	}

	public onShareBtn() {
		var config = ConfigData.getPlayerById(this.id);
		if(config && parseInt(config.level) < 4){
			this.addJewel(parseInt(config.firstreward));
			ControllAlert.show(`领取成功${config.firstreward}个钻石`);
			this.onCloseBtn();
		}else{
			if(AppConfig.unlock_reward == "share"){
				ShareConstant.shareToGroup((result) => {
					if (result) {
						this.addJewel(parseInt(config.firstreward));
						ControllAlert.show(`领取成功${config.firstreward}个钻石`);
						// ControllAlert.show("分享成功");
						this.onCloseBtn();
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"unlock","unlock2",""));
					} else {
						ControllAlert.show("分享失败");
					}
				}, this);
			}else{
				//看广告
				AdConstant.lookRewardAd(result=>{
					if(result){
						this.addJewel(parseInt(config.firstreward));
						ControllAlert.show(`领取成功${config.firstreward}个钻石`);
						// ControllAlert.show("分享成功");
						this.onCloseBtn();
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"unlock","unlock3",""));
					}else{
						ControllAlert.show("中断广告,无奖励");
					}
				},this);
			}
		}
	}

	public addJewel(count:number){
		var role:Role = RoleData.getRole();
		role.jewel += count;
		RoleData.putRole(role);
	}

	public onCloseBtn() {
		var guide = GuideData.currentOpt();
		if(guide == 2){
			GuideData.updateCurrentOpt();
			if(BasePanel.currentPanel instanceof GamePanel){
				BasePanel.currentPanel.refreshGuide();
			}
		}
		Alert.closeAlert(this, 0);
	}

	public dispose() {
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.shareBtn) this.shareBtn.dispose();
	}
}