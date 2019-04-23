class AlertBgModel extends eui.Component implements  eui.UIComponent {
	public titleText:string = '标题';
	public titleTips:eui.Label;
	public closeBtn:MyButton;
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
		if(this.titleTips)this.titleTips.text = this.titleText?this.titleText:'';
		if(this.closeBtn){
			this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
		}
	}
	protected dispose(){
		Alert.closeAlert(null,0);
	}
	
}
window['AlertBgModel'] = AlertBgModel;