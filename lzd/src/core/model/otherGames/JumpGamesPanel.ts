class JumpGamesPanel extends eui.Component implements  eui.UIComponent {
	//跳转小游戏
	public bg_close:eui.Image;
	public jumpgames:eui.Group;
	public jumpGamesBtn:MyButton;
	public jumpContainer:eui.Group;

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
		this.width = this.parent.width;
		this.height = this.parent.height;
		if(this.bg_close) this.bg_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onJumpGamesBtn,this);
		if(this.jumpGamesBtn) this.jumpGamesBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onJumpGamesBtn,this);
		this.initUI();
		this.onJumpGamesBtn(null);
	}

	public clickstate:boolean = true;
	public async onJumpGamesBtn(e:egret.Event){
		this.clickstate = !this.clickstate;
		// this.jumpGamesBtn.label = this.clickstate ? "<<" : ">>";
		(this.jumpGamesBtn.getChildAt(0) as eui.Image).visible = !this.clickstate;
		(this.jumpGamesBtn.getChildAt(1) as eui.Image).visible = this.clickstate;
		var moveX:number = this.clickstate ? 0 : -350;
		egret.Tween.get(this.jumpgames).to({x:moveX},600,(moveX == 0 ? egret.Ease.backOut :null));
		// //箭头指向效果
		// var lab:eui.Label = this.jumpGamesBtn.getChildAt(1) as eui.Label;
		// var move:number = this.clickstate ? -10 : 10;
		// egret.Tween.get(lab,{loop:true}).to({horizontalCenter:move},800,egret.Ease.backIn).to({horizontalCenter:0},800,egret.Ease.backOut).wait(1000);
	}

	public initUI(){
		if(this.jumpgames){
			if(this.jumpContainer.numChildren == 0){
				// for(var i in MatchConstant.otherGamesConifg){
				// 	var data = MatchConstant.otherGamesConifg[parseInt(i)];
				// 	var item:OtherGameSkin = new OtherGameSkin(data,this);
				// 	this.jumpContainer.addChild(item);
				// 	item.x = (parseInt(i) % 3) * (80 + 31);
				// 	item.y = Math.floor(parseInt(i) / 3) * (110 + 15); 
				// }
			}
		}
	}

	public dispose(){
		if(this.bg_close) this.bg_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onJumpGamesBtn,this);
		if(this.jumpGamesBtn) this.jumpGamesBtn.dispose();
	}
	
}