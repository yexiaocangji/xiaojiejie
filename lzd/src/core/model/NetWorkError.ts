class NetWorkError {
	public static showConnectFail(){
		var tips:string = "网络连接失败,请检查网络状况。";
		// var error:TiShiPanel = new TiShiPanel(tips,this.onOkCallBack);
		// Alert.alert(error);
	}
	public static onOkCallBack(){
		platform.exitMiniProgram(null,null);
	}

}