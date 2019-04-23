class NotEnoughRewardPanel extends eui.Component implements eui.UIComponent {
	public runBg: eui.Image;
	public jlResName: eui.Image;
	public title: eui.Label;
	public jlCount: eui.Label;
	public okBtn: MyButton;
	public closeBtn: MyButton;

	public _type: number;//1:钻石 2金币
	public _jewelCount: any;
	public _gold: any;
	public constructor(type: number = 1) {
		super();
		this._type = type;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this._type == 1) this.init1();
		else if (this._type == 2) this.init2();
		if (this.okBtn) this.okBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onOkBtn, this);
		if (this.closeBtn) this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		if (this.runBg) egret.Tween.get(this.runBg, { loop: true }).to({ rotation: 360 }, 2000);
		AdConstant.showBannerAd();
	}

	public init1() {
		this.title.text = "钻 石";
		this.jlResName.texture = RES.getRes("xjj_icon_zuanshi");
		//解锁2个角色身上的钻石和/2，一个角色有钻石不除，没有不奖励
		//暂时固定200
		this._jewelCount = 200;
		this.jlCount.text = `+${this._jewelCount}`;
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure1",""));
	}

	public init2() {
		this.title.text = "金 币";
		this.jlResName.texture = RES.getRes("xjj_icon_jinbi");
		//金币不足，可解锁最低等级的金币
		var heSuanLevel = ShopConstant.buyWhichLevel();
		var id: string = RoleData.getIdByLevel(StaticConstant.CurrentType, heSuanLevel+"");
		if (id) {
			var player = PlayerData.getPlayerById(id + "");
			this._gold = RoleData.getBuildGold(id, player.buyCount_gold);
		}
		if (this._gold) {
			this.jlCount.text = StringUtil.decimalFormat(this._gold);
		}
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure2",""));
	}

	public onOkBtn() {
		if (AppConfig.notEnough_reward == "share") {
			//分享领取
			ShareConstant.shareToGroup((result) => {
				if (result) {
					if (this._type == 1) {
						this.limitCountByType(1);
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure2",""));
						// var role:Role = RoleData.getRole();
						// if(this._jewelCount) role.jewel += this._jewelCount;
						// RoleData.putRole(role);
						// if(this._jewelCount) ControllAlert.show("成功领取"+this._jewelCount+"个钻石");
					}
					else if (this._type == 2) {
						this.limitCountByType(2);
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure5",""));
						// var role: Role = RoleData.getRole();
						// if (this._gold) role.gold = role.gold.add(this._gold);
						// RoleData.putRole(role);
						// if (this._gold) ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
					}
					this.onCloseBtn();
				} else {
					ControllAlert.show("分享失败");
				}
			}, this);
		} else {
			//看广告
			AdConstant.lookRewardAd(result => {
				if (result) {
					if (this._type == 1) {
						this.limitCountByType(1);
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure3",""));
						// var role: Role = RoleData.getRole();
						// if (this._jewelCount) role.jewel += this._jewelCount;
						// RoleData.putRole(role);
						// if (this._jewelCount) ControllAlert.show("成功领取" + this._jewelCount + "个钻石");
					}
					else if (this._type == 2) {
						this.limitCountByType(2);
						DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"exposure","exposure6",""));
						// var role: Role = RoleData.getRole();
						// if (this._gold) role.gold = role.gold.add(this._gold);
						// RoleData.putRole(role);
						// if (this._gold) ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
					}
					this.onCloseBtn();
				} else {
					ControllAlert.show("中断广告,无奖励");
				}
			}, this);
		}
	}

	public limitCountByType(type: number) {
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间	
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
			var role: Role = RoleData.getRole();
			if (this._jewelCount) role.jewel += this._jewelCount;
			RoleData.putRole(role);
			if (this._jewelCount) ControllAlert.show("成功领取" + this._jewelCount + "个钻石");
		}
		else if (type == 2) {
			if (jinbiCount <= 0) {
				ControllAlert.show("金币次数次数用完，明天再来");
				return;
			}
			NotEnoughData.updateNotJewelCount(0, 1);
			var role: Role = RoleData.getRole();
			if (this._gold) role.gold = role.gold.add(this._gold);
			RoleData.putRole(role);
			if (this._gold) ControllAlert.show("成功领取" + StringUtil.decimalFormat(this._gold) + "金币");
		}
	}

	public onCloseBtn() {
		Alert.closeAlert(this, 0);
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.okBtn) this.okBtn.dispose();
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.parent) this.parent.removeChild(this);
	}

}