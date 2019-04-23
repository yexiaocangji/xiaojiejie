class OtherGameSkin extends eui.Component implements  eui.UIComponent {
	public jumpBtn:MyButton;
	public configData:OtherGame;
	public callbackObj:JumpGamesPanel;
	public constructor(data:OtherGame,obj:JumpGamesPanel = null) {
		super();
		this.configData = data;
		this.callbackObj = obj;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		if(this.configData){
			this.initUI();
			if(this.jumpBtn) this.jumpBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onGame,this);
		}
	}

	public initUI(){
		var skinImg:eui.Image = this.jumpBtn.getChildAt(0) as eui.Image;
		var nameLabel:eui.Label = this.jumpBtn.getChildAt(1) as eui.Label;
		var hotImg:eui.Image = this.jumpBtn.getChildAt(2) as eui.Image;
		if(this.configData.hot == true) hotImg.texture = RES.getRes("icon_dian");
		if(this.configData.skin){
			RES.getResByUrl(this.configData.skin,(data:egret.Texture)=>{
				skinImg.texture = data;
			},this,"image");
		}
		if(this.configData.name) nameLabel.text = this.configData.name;
	}

	public onGame(e:egret.Event){
		platform.navigateToMiniProgram(this.configData.appid,this.configData.path,this.configData.extraData);
		if(this.callbackObj) this.callbackObj.onJumpGamesBtn(null);
	}

    
}