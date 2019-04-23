class checkInPanel extends BaseAlertPanel {
	public itemConstainer: eui.Group;
	public doubleBtn: MyButton;
	public getBtn: MyButton;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.refreshUI();
		if (this.doubleBtn) this.doubleBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDoubleTap, this);
		if (this.getBtn) {
			this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
			this.getBtn.visible = false;
			egret.setTimeout(() => {
				this.getBtn.visible = true;
			}, this, 2000);
		}
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"checkin","checkin1",""));
		AdConstant.showBannerAd();
	}
	public refreshUI() {
		for (var i: number = 0; i < 7; i++) {
			var item = this.itemConstainer.getChildAt(i);
			if (item instanceof checkInItem) {
				item.index = i;
			}
		}
	}
	public onTap(e) {
		var data = SevenDaySignData.getSignData();
		var lastGetTime = data ? data.timestamp : 0;
		var count = data ? data.count : 0;
		var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
		if (count >= 7 || DateTool.makeTime(lastGetTime) == DateTool.makeTime(timestamp)) {
			ControllAlert.show("已领取，明天再来");
			return;
		}
		this.lingqu(count, false);

	}
	public onDoubleTap(e) {
		var data = SevenDaySignData.getSignData();
		var lastGetTime = data ? data.timestamp : 0;
		var count = data ? data.count : 0;
		var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
		if (count >= 7 || DateTool.makeTime(lastGetTime) == DateTool.makeTime(timestamp)) {
			ControllAlert.show("已领取，明天再来");
			return;
		}
		if (AppConfig.sevenSign_lingqu == "share") {
			ShareConstant.shareToGroup(result => {
				if (result) {
					this.lingqu(count, true);
					DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"checkin","checkin2",""));
				}
			}, this);
		} else {
			AdConstant.lookRewardAd(result => {
				if (result) {
					this.lingqu(count, true);
					DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"checkin","checkin3",""));
				}
			}, this);
		}

	}
	private lingqu(index: number, isDouble: boolean) {
		var role: Role = RoleData.getRole();
		role.jewel += (200 + index * 100) * (isDouble ? 2 : 1);
		RoleData.putRole(role);
		ControllAlert.show("成功领取钻石"+ (200 + index * 100) + (isDouble ? "x2" : ""));
		var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
		SevenDaySignData.updateSign(timestamp, index + 1)
		var item = this.itemConstainer.getChildAt(index);
		if (item instanceof checkInItem) {
			item.index = index;
		}
		this.onClose();
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.doubleBtn) this.doubleBtn.dispose();
		if (this.getBtn) this.getBtn.dispose();
		super.dispose();
	}
}