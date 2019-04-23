class Alert {
	private static _displays:egret.DisplayObject[];
	private static _root:egret.DisplayObjectContainer;
	private static background:egret.Shape;
	private static stageWidth:number;
	private static stageHeight:number;
	private static alertScale:number;
	// public static isBackClose:boolean = false;
	public static init(root:egret.DisplayObjectContainer,stageWidth:number = 640,stageHeight:number = 1136,alertScale:number = 1){
		this._root = root;
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;
		this.alertScale = alertScale;
		this.initBackGround();
	}
	private static initBackGround(){
		if(!this.background){
			this.background = new egret.Shape();
			this.background.alpha = 0.7;
			this.background.touchEnabled = true;
		}
		this.background.graphics.clear();
		this.background.graphics.beginFill(0x000000);
		this.background.graphics.drawRect(0, 0, this.stageWidth, this.stageHeight);
		this.background.graphics.endFill();
		this.background.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			// if(!this.isBackClose)return;
			if(this._displays.length < 1)return;
			var display = this._displays[this._displays.length - 1];
			if(display && display instanceof BaseAlertPanel){
				if(display.isBackClose)this.closeAlert();
			}
		},this);
	}
	public static get root(){
		return this._root;
	}
	public static show(display:egret.DisplayObject){
		if(!this._root){
			console.log("alert init error!");
			return;
		}
		this._root.addChild(display);
	}
	public static alertLandScape(display:egret.DisplayObject){
		this.alert(display);
		display.rotation = 90;
	}
	public static alert(display:egret.DisplayObject,action:boolean = false,setXY:number = 1){
		if(!this._root){
			console.log("alert init error!");
			return;
		}
		if(!this._displays)this._displays = [];
		if(this._displays.indexOf(display) != -1)return;
		display.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this._root.addChild(this.background);
		this._root.addChild(display);
		if (setXY) {
			display.anchorOffsetX = display.width / 2;
			display.anchorOffsetY = display.height / 2;
			display.x = this.stageWidth / 2;
			display.y = this.stageHeight / 2;
		}
		//控制出场动画
		if(action)this.openActionCreate(display)
	}
	private static openActionCreate(display:egret.DisplayObject){
		var type:number = 0;
		if(display && display instanceof BaseAlertPanel){
			type = display.openActionType;
		}
		switch(type){
			case 0:{
				display.scaleX = display.scaleY = 0.01;
				egret.Tween.get(display).to({scaleX:this.alertScale,scaleY:this.alertScale},900,egret.Ease.backOut);
			};break;
			case 1:{
				display.x = -this.stageWidth / 2;
				egret.Tween.get(display).to({x:this.stageWidth / 2},580,egret.Ease.cubicIn);
			};break;
		}
	}
	private static closeActionCreate(display:egret.DisplayObject){	
		var type:number = 0;
		if(display && display instanceof BaseAlertPanel){
			type = display.closeActionType;
		}
		switch(type){
			case 0:{
				egret.Tween.get(display).to({scaleX:0.01,scaleY:0.01},500,egret.Ease.cubicInOut).call((obj:egret.DisplayObject)=>{
					if(!obj)return;
					var disposeFun:Function = null;
					disposeFun = obj["dispose"];
					if(disposeFun instanceof Function){
						disposeFun.apply(obj,[]);
					}
					if(obj.parent)obj.parent.removeChild(obj);
				},this,[display]);
			};break;
			case 1:{
				egret.Tween.get(display).to({x:-this.stageWidth / 2},500,egret.Ease.cubicInOut).call((obj:egret.DisplayObject)=>{
					if(!obj)return;
					var disposeFun:Function = null;
					disposeFun = obj["dispose"];
					if(disposeFun instanceof Function){
						disposeFun.apply(obj,[]);
					}
					if(obj.parent)obj.parent.removeChild(obj);
				},this,[display]);
			};break;
		}
			
	}
	private static onAddToStage(e:egret.Event){
		var display:egret.DisplayObject = e.currentTarget;
		if(display instanceof BaseAlertPanel && display.isFill){
			display.width = this._root.width;
			display.height = this._root.height;
		}
		display.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		display.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
		this._displays.push(display);
	}
	private static onRemoveFromStage(e:egret.Event){
		var display:egret.DisplayObject = e.currentTarget;
		display.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
		this._displays.pop();
		if(this._displays.length == 0){
			this._root.removeChild(this.background);
		}else{
			display = this._displays[this._displays.length - 1];
			this._root.swapChildren(this.background,display);
		}
	}
	public static closeAlert(display:egret.DisplayObject = null,actionType:number = -1){
		if(this._displays.length < 1){
			return;
		}
		if(!display){
			display = this._displays[this._displays.length - 1];
		}
		if(actionType <= 0){
			//没有关闭动画
			var disposeFun:Function = null;
			disposeFun = display["dispose"];
			if(disposeFun instanceof Function){
				disposeFun.apply(display,[]);
			}
			if(display.parent)display.parent.removeChild(display);
		}else{
			this.closeActionCreate(display);
		}
	}
	public static closeAllAlert(){
		if(!this._displays)return;
		var len = this._displays.length;
		var obj:egret.DisplayObject = null;
		var disposeFun:Function = null;
		for(var i = len - 1;i > -1;i--){
			obj = this._displays[i];
			if(!obj)continue;
			disposeFun = obj["dispose"];
			if(disposeFun instanceof Function){
				disposeFun.apply(obj,[]);
			}
			if(obj.parent)obj.parent.removeChild(obj);
		}
	}
}