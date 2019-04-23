class RankPanel extends eui.Component implements  eui.UIComponent {
	public rankTitle:eui.Label;
	public rankCloseBtn:MyButton;
	public shareToGroupBtn:MyButton;
	public shareTicket:string = null;

	private bitmap:egret.Bitmap;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		// DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"share","sence1",""));
	}
	private addToStage(){
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.width = this.parent.width;
		this.height = this.parent.height;
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		platform.hideBannerAd();
		this.initTypeBtn();
		if(this.rankCloseBtn)this.rankCloseBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
		if(this.shareToGroupBtn)this.shareToGroupBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onShareToGroupClick,this);
	}

	public initTypeBtn(){
			this.initCanvas();	
			this.initRank();
	}

	public setIconStatus(typeBtn:ToggleBtn,status:boolean = true){
		var label:eui.Label = typeBtn.getChildAt(2) as eui.Label;
		typeBtn.setStatus(status);
		label.textColor =  status ? 0x45403C : 0xFFEEE3;	
	}

	public async initRank(){
		console.log("shareTicket:",this.shareTicket);
		let rankType = this.shareTicket ? 2:1;
		this.rankTitle.text = rankType == 2?"群友排行榜":"好友排行榜";
		this.sendToContext(true,rankType,this.shareTicket);
	}
	public async initCanvas(){
		if(!window["sharedCanvas"])return;
		const bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
		bitmapdata.$deleteSource = false;
		const texture = new egret.Texture();
		texture._setBitmapData(bitmapdata);
		this.bitmap = new egret.Bitmap(texture);
		this.bitmap.width = this.stage.stageWidth;
		this.bitmap.height = this.stage.stageHeight;
		this.addChild(this.bitmap);

		egret.startTick((timeStarmp: number) => {
			egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
			bitmapdata.webGLTexture = null;
			return false;
		}, this);
	}
	public async sendToContext(isDisplay:boolean,rankType,shareTicket){
		let openDataContext = platform.getOpenDataContext();
		var msg = {isDisplay: isDisplay,rankType: rankType,shareTicket: shareTicket,stageWidth:this.bitmap.width,stageHeight:this.bitmap.height,selfOpenId:AccountData.getOpenId()};
		openDataContext.postMessage(msg);	
	}
	public async onShareToGroupClick(){
		// DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"share","sence1_click",""));		
		var share = ShareConstant.randomTitleAndUrl();
		// platform.shareAppMessage('深度排行榜,点击查看',share.imageUrl,"checkRank=1&",(res)=>{
		// 	ControllAlert.show("点击分享卡片查看排行");
		// },null);
		this.onClose();
	}
	public async onClose(){
		await this.sendToContext(false,1,null);
		this.dispose();
	}
	

	public dispose(){
		this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
		if(this.rankCloseBtn)this.rankCloseBtn.dispose();
		if(this.shareToGroupBtn)this.shareToGroupBtn.dispose();
		if(this.parent)this.parent.removeChild(this);
	}
}