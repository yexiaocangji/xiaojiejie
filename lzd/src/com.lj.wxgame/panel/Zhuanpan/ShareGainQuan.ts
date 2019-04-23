class ShareGainQuan extends eui.Component implements eui.UIComponent {
	public infoText: eui.Label;
	public shareBtn: MyButton;
	public closeBtn: MyButton;

	public info:string;	
	public quanCount: number;
	public callbackObj:ZhuanPan = null;
	public constructor(info:string,quanCount: number,callbackObj:ZhuanPan) {
		super();
		this.info = info;		
		this.quanCount = quanCount;
		this.callbackObj = callbackObj;	
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initInfo();		
		if (this.shareBtn) this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this);
		if (this.closeBtn) this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		if(this.closeBtn){
			this.closeBtn.visible = false;
			egret.setTimeout(()=>{
				this.closeBtn.visible = true;
			},this,2000);
		}
		AdConstant.showBannerAd();
	}

	public initInfo(){
		if(this.info) this.infoText.text = this.info;
		this.onShareBtn(null);
	}	

	public onShareBtn(e: egret.TouchEvent) {
		if(AppConfig.addQuan_zhanpan == "share"){
			// 分享接口
			ShareConstant.shareToGroup((result) => {
				if (result) {
					var data = ZhuanPanData.getZhuanPanQuanCount();
					var count: number = data && data.count ? data.count + 2 : 2;
					ZhuanPanData.updateZhuanPanQuanCount(count);     //更新转盘券
					ControllAlert.show("转盘券+" + this.quanCount);
					if (this.callbackObj) {
						this.callbackObj.initUI();
					}
					this.onCloseBtn(null);
					DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"zhuanpan","zhuanpan3",""));
				} else {
					ControllAlert.show("分享失败");
				}
			}, this);
		}else{
			//看广告
			AdConstant.lookRewardAd(result=>{
				if(result){
					var data = ZhuanPanData.getZhuanPanQuanCount();
					var count: number = data && data.count ? data.count + 2 : 2;
					ZhuanPanData.updateZhuanPanQuanCount(count);     //更新转盘券
					ControllAlert.show("转盘券+" + this.quanCount);
					if (this.callbackObj) {
						this.callbackObj.initUI();
					}
					this.onCloseBtn(null);
					DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"zhuanpan","zhuanpan4",""));
				}else{
					ControllAlert.show("中断广告,无奖励");
				}
			},this);
		}
	}

	public onCloseBtn(e: egret.TouchEvent) {
		Alert.closeAlert(this,0);
	}

	public dispose() {
		platform.hideBannerAd();
		if (this.shareBtn) this.shareBtn.dispose();
		if (this.closeBtn) this.closeBtn.dispose();
	}

}