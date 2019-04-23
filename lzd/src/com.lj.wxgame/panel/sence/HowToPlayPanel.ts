class HowToPlayPanel extends BasePanel {
	public closeBtn: MyButton;	
	public constructor() {
		super();
	}

	public initialize() {
		if (this.closeBtn) this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
	}

	public onCloseBtn() {
		this.dispose();
	}

	public dispose() {
		super.dispose();
	}	
}