class BaseButtonProxy {
	public _button:MyButton;
	public _thisObj:egret.DisplayObjectContainer;
	public constructor(btn:MyButton,thisObj:egret.DisplayObjectContainer) {
		this._button = btn;
		this._thisObj = thisObj;
		this._button.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onClickBtn,this);
	}
	public async onClickBtn(e:egret.Event){
		await AssetsManager.getInstance().loadResource("gamegroup");
	}

	//血战分享到群
	public shareToGroup(callback:Function){
		let thisObj = this;
		if(AppConfig.isLocal){
			var random = Math.random();
			callback.apply(thisObj,[random > 0.5]);
		}else{
			ShareConstant.randomShareAppMessage((res)=>{
				callback.apply(thisObj,[res.encryptedData && res.iv]);				
			},()=>{
				callback.apply(thisObj,[false]);
			});
		}
	}
}