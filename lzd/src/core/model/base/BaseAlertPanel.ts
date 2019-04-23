/**  
 * 弹窗基类
*/
class BaseAlertPanel  extends eui.Component implements eui.UIComponent{
	public closeBtn:MyButton;
	//是否全屏
	public isFill:boolean = false;
	//点击空白关闭
	public isBackClose:boolean = false;
	//出场动画
	public openActionType:number = 0;
	//退场动画
	public closeActionType:number = 0;
	public constructor() {
		super();
	}

	protected childrenCreated():void
	{
		super.childrenCreated();

		if(this.closeBtn)this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onClose,this);

	}
	public onClose(){
		Alert.closeAlert();
	}
	public dispose(){
		if(this.closeBtn)this.closeBtn.dispose();
	}
}