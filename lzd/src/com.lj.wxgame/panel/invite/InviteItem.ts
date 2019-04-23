class InviteItem extends eui.Component implements eui.UIComponent {
	public addImg: eui.Image;
	public icon: eui.Image;
	public friendName: eui.Label;
	public inviteBtn: MyButton;
	public process: number;
	public constructor(process: number) {
		super();
		this.process = process;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initUI();
		this.addImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
	}

	public onShare() {
		ShareConstant.shareToGroup(result => {
			ControllAlert.show("好友点击链接，即可领取奖励");
		}, this);
	}

	public initUI() {
		var inviteData: any[] = InviteData.getInviteList();
		if (this.friendName) this.friendName.text = "邀请第" + this.process + "位好友";
		if (!inviteData) inviteData = [];
		if (this.inviteBtn) {
			if (this.process <= inviteData.length) {
				this.inviteBtn.label = "领取"
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
			if (this.friendName) this.friendName.text = itemdata.nick;  //更新好友昵称
			RES.getResByUrl(avatar, (data: egret.Texture) => {
				if (data) this.icon.texture = data;
			}, this, "image");
		}

		if (this.inviteBtn) this.inviteBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onInviteBtn, this);
	}

	public onInviteBtn() {
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
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"lingzuan","lingzuan2",""));
	}

	public dispose() {
		if (this.addImg) this.addImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		if (this.inviteBtn) this.inviteBtn.dispose();
	}
}