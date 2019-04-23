class InvitePanel extends eui.Component implements  eui.UIComponent {
	public closeBtn:MyButton;
	public constainer:eui.Group;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		AdConstant.showBannerAd();
		if(this.closeBtn)this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onCloseBtn,this);
		let thisObj = this;
		GameApi.inviteList("3",data=>{
			var inviteDataNew = [];
			if (data) {
				for (var i = 0; i < data.length; i++) {
					var itemdata = data[i];
					var avatar = itemdata.avatar;
					if (avatar && avatar != "") inviteDataNew.push(itemdata); 
				}
			}
			InviteData.putInviteList(inviteDataNew);
			thisObj.initUI();
		});

	}

	public initUI(){
		for(var i = 1;i <= 20; i++){
			this.constainer.addChild(new InviteItem(i));
		}
	DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"lingzuan","lingzuan1",""));
	}	
	
	public onCloseBtn() {
		Alert.closeAlert(this, -1);
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.closeBtn) this.closeBtn.dispose();
	}
}