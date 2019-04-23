class MyButton extends eui.Button{
	public tapCallBack:Function;
	public beginCallBack:Function;
	public endCallBack:Function;
	//回调调用对象
	public thisObj:any;

	public isScale = true;
	public scaleValue:number = 1.1;
	public soundName:string = "click";
	public constructor() {
		super();
		this.thisObj = this;
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchCancel,this);
		
	}
	public setCallBack(type:string,callBack:Function,thisObj:any = null){
		switch(type){
			case egret.TouchEvent.TOUCH_TAP:this.tapCallBack = callBack;if(thisObj)this.thisObj = thisObj;break;
			case egret.TouchEvent.TOUCH_END:this.endCallBack = callBack;if(thisObj)this.thisObj = thisObj;break;
			case egret.TouchEvent.TOUCH_BEGIN:this.beginCallBack = callBack;if(thisObj)this.thisObj = thisObj;break;
		}
	}
	private onTouchTap(e:egret.TouchEvent){
		if(this.tapCallBack){
			this.tapCallBack.apply(this.thisObj,[e]);
		}
		
	}
	protected onTouchBegin(e:egret.TouchEvent){
		if(this.beginCallBack){
			this.beginCallBack.apply(this.thisObj,[e]);
		}
		if(this.isScale){
			this.scaleX = this.scaleY = this.scaleValue;
			if(this.anchorOffsetX != this.width / 2){
				this.anchorOffsetX = this.width / 2
				this.x += this.width / 2;
			}
			if(this.anchorOffsetY != this.height / 2){
				this.anchorOffsetY = this.height / 2
				this.y += this.height / 2;					
			}
		}
		if(this.soundName && this.soundName != ""){
			SoundManager.playSound(this.soundName);
		}
	}
	private onTouchEnd(e:egret.TouchEvent){
		if(this.endCallBack){
			this.endCallBack.apply(this.thisObj,[e]);
		}
		if(this.isScale){
			this.scaleX = this.scaleY = 1;
		}
	}
	private onTouchCancel(e:egret.TouchEvent){
		if(this.isScale){
			this.scaleX = this.scaleY = 1;
		}
	}
	/** 按钮不可点标记 */
	private btnmask:eui.Image = null;
	public setEnable(bool:boolean = true,str:string = ""){
		this.touchEnabled = bool;
		if(!bool){
			//this.alpha = 0.5;
			ColorUtil.setDark(this);
			// this.btnmask.alpha = 1;
		}else{
			//this.alpha = 1;
			ColorUtil.clearGray(this);
			// this.btnmask.alpha = 0;
		} 
	}
	public dispose(){
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchCancle,this);
		
		this.tapCallBack = null;
		this.beginCallBack = null;
		this.endCallBack = null;
	}
}
window['MyButton'] = MyButton;