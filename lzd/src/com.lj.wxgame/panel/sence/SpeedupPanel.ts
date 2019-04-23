class SpeedupPanel extends eui.Component implements eui.UIComponent {
	public closeBtn: MyButton;
	public costJewelBtn: MyButton;   //钻石花费按钮
	public watchAdBtn: MyButton;	 //看广告按钮
	public speedUpNum = 1;			 //增加的速度系数
	public speedTime = 0;
	public countDown1: eui.Label;	//花钻石倒计时
	public countDown2: eui.Label;	//看广告倒计时
	public keeptime: number;

	public yaoqingGroup: eui.Group;
	public nodisplay: eui.Group;
	public yaoQingBtn: MyButton;
	public friend1Group: eui.Group;
	public friend2Group: eui.Group;
	public friend3Group: eui.Group;
	public friend1: eui.Image;
	public friend2: eui.Image;
	public friend3: eui.Image;
	public tipsLabel: eui.Label; 
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.onFrame(null);
		AdConstant.showBannerAd();
		if (this.closeBtn) this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		if (this.costJewelBtn) this.costJewelBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCostJewelBtn, this);
		if (this.watchAdBtn) this.watchAdBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onWatchAdBtn, this);
		this.friend1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		this.friend2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		this.friend3Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		this.tipsLabel.textFlow = <Array<egret.ITextElement>>[
			{text: "邀请3名新人立即获得"}
			, {text: "10小时收益", style: {"bold":true}}
		];
		if (AppConfig.invite_xinren == true) {
			this.yaoqingGroup.visible = true;
			this.nodisplay.visible = false;
			let thisObj = this;
			GameApi.inviteNewSgin("6", (e: any) => {
				// var data = e && e["6"]? e["6"]:[];
				var inviteDataNew = [];
				if (e) {
					for (var i = 0; i < e.length; i++) {
						var itemdata = e[i];
						var avatar = itemdata.avatar;
						if (avatar && avatar != "") inviteDataNew.push(itemdata);
					}
				}
				InviteData.putInviteSgin(inviteDataNew);
				thisObj.init();
			});
		} else {
			this.yaoqingGroup.visible = false;
			this.nodisplay.visible = true;
		}
	}

	public init() {
		var inviteData: any[] = InviteData.getInviteSgin();
		for (var i = 1; i <= 3; i++) {
			if (i <= inviteData.length) {
				//更新头像
				var itemdata = inviteData[i - 1];
				var avatar = itemdata.avatar;
				RES.getResByUrl(avatar, this.updateHead(i), this, "image");
			}
		}   //可领取条件
		if (inviteData.length == 1) DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup3", ""));
		if (inviteData.length == 2) DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup4", ""));
		if (inviteData.length >= 3) DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup5", ""));

		if (inviteData.length >= 3) {
			this.yaoQingBtn.label = "领取"
			var finsh = InviteData.getInviteTaskfinishByType("2");
			var finshcount = finsh && finsh.count ? finsh.count : 0;
			if (finshcount >= 1) {
				this.yaoQingBtn.setEnable(false);
				this.yaoQingBtn.label = "已领取";
			}
		}
		if (this.yaoQingBtn) this.yaoQingBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onYaoQingBtn, this);
		var data = SpeedupData.getSpeedupCount();
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		if(!data) {
			data = new Speedup(currentDate, 1);
			SpeedupData.putSpeedupCount(data);
			this.costJewelBtn.label="x"+10*data.count;
		}else{
			this.costJewelBtn.label="x"+10*data.count;
		}
		
	}
	public updateHead(index: number) {
		var head = (this["friend" + index] as eui.Image);
		return (data: egret.Texture) => {
			if (data) {
				if (head instanceof eui.Image) head.texture = data;
			}
		}
	}
	public onYaoQingBtn() {
		if (this.yaoQingBtn.label == "邀请好友") {
			this.onShare();
			return;
		}
		//增加10小时离线收益
		//读取当前的金币收益数量
		var shouyiValue = GameConstant.getAllShouYiValue();   //离线总收益 
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
	}

	public onShare() {
		ShareConstant.shareToGroup(result => {
			ControllAlert.show("好友点击链接，即可领取奖励");
		}, this, false," ",null,6);
	}

	public onCloseBtn() {
		Alert.closeAlert(this, 0);
	}

	private speedUpState: boolean = true;
	public onFrame(e: egret.Event) {
		var timestamp = AccountData.serverTime() + egret.getTimer();
		var data = SpeedupData.getSpeedup();
		if (!data || timestamp > (data.time + data.keeptime * 1000)) {
			//过期
			this.countDown1.text = "持续:60s";
			this.countDown2.text = "持续：180s";
			this.speedUpState = true;
			this.costJewelBtn.setEnable(true);
			this.watchAdBtn.setEnable(true);
		} else {
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
			} else if (data.keeptime == 180) {
				this.countDown1.text = "持续:60s";
				this.countDown2.text = DateTool.formatTime(time);
				if (this.countDown2.text == "00:00:00" && this.speedUpState) {
					this.speedUpState = false;
					ControllAlert.show("加速效果消失！");
				}
			}
		}
	}

	//花钻石加速
	public onCostJewelBtn(e: egret.TouchEvent) {
		//花了10 钻石就加速
		var role = RoleData.getRole();
		var data = SpeedupData.getSpeedupCount();  //获取次数
		if (role.jewel >= 10*data.count) {
			ControllAlert.show("开启60s加速！");
			SpeedupData.updateSpeedupCount();
			role.jewel = role.jewel - 10*data.count;
			RoleData.putRole(role);
			this.keeptime = 60;
			var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
			SpeedupData.updateSpeedup(timestamp, this.keeptime);
			this.costJewelBtn.setEnable(false);
			this.watchAdBtn.setEnable(false);
			this.speedUpNum = 2;
			this.speedTime = 60000;
			this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: this.speedUpNum, speedTime: this.speedTime });
			this.init();
			DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup1", ""));
		} else {
			// ControllAlert.show("没钻石了！看广告吧");
			Alert.alert(new NotEnoughRewardPanel(1));//钻石不足
		}
	}
	//看广告加速
	public onWatchAdBtn(e: egret.TouchEvent) {
		if (AppConfig.speedup_180seconds == "share") {
			ShareConstant.shareToGroup((result) => {
				if (result) {
					ControllAlert.show("开启180s加速！");
					this.keeptime = 180;
					var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
					SpeedupData.updateSpeedup(timestamp, this.keeptime);
					this.costJewelBtn.setEnable(false);
					this.watchAdBtn.setEnable(false);
					this.speedUpNum = 2;
					this.speedTime = 180000;
					this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: this.speedUpNum, speedTime: this.speedTime });
				} else {
					ControllAlert.show("分享失败");
				}
			}, this);
		} else {
			AdConstant.lookRewardAd(result => {
				if (result) {
					ControllAlert.show("开启180s加速！");
					this.keeptime = 180;
					var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
					SpeedupData.updateSpeedup(timestamp, this.keeptime);
					this.costJewelBtn.setEnable(false);
					this.watchAdBtn.setEnable(false);
					this.speedUpNum = 2;
					this.speedTime = 180000;
					this.stage.dispatchEventWith(GameEvent.GAME_SPEEDUP_EVENT, true, { speedUpNum: this.speedUpNum, speedTime: this.speedTime });
					DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "speedup", "speedup2", ""));
				} else {
					ControllAlert.show("中断广告,无法加速");
				}
			}, this);
		}
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.costJewelBtn) this.costJewelBtn.dispose();
		if (this.watchAdBtn) this.watchAdBtn.dispose();
		if (this.yaoQingBtn) this.yaoQingBtn.dispose();
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		this.friend1Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		this.friend2Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		this.friend3Group.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
	}

}