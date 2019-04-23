class NetWorkLoading {
	public static show(){
		if(!this.instance){
			this.instance = new eui.Panel();
			this.instance.touchEnabled = true;
			this.instance.skinName = "NetWorkLoadingSkin";
			this.instance.width = Alert.root.width;
			this.instance.height = Alert.root.height;
			Alert.show(this.instance);
		}else{
			Alert.root.setChildIndex(this.instance,Alert.root.numChildren - 1);
			this.instance.visible = true;
		}
	}
	public static hide(){
		if(this.instance){
			Alert.root.setChildIndex(this.instance,Alert.root.numChildren - 1);
			this.instance.visible = false;
		}
	}
	private static instance:eui.Panel;
}