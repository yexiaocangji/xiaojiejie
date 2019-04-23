class LoginPanel extends BasePanel {
	public loginButton:MyButton;
	public accountInput:eui.Label;
	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 0;
	}

	public async initialize()
	{
		var childnum = this.numChildren;
		if(childnum < 0){
			return ;
		}
		if(this.loginButton){
			this.loginButton.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onLogin,this);
		}
		if(this.accountInput){
			this.accountInput.type = egret.TextFieldType.INPUT;
			var promise = await platform.getStorageSync("account");
			var account = promise.data;
			egret.log("platform.getStorage:"+JSON.stringify(account));
			if(account && account != ""){
				this.accountInput.text = account;
			}
		}
	}
	public onLogin(e:egret.TouchEvent){
		var account = this.accountInput.text;
		if (account == null || account == "") {
			console.log("账号不能为空");
			return;
		}
		this.startGame();
	}
	public async startGame(){
	}
	public dispose(){
		this.loginButton.dispose();
		this.parent.removeChild(this);
	}
	
}