class ControllAlert {
	
	public static show(showTips:string = null,waitdelay:number = 0,color:number = 0xffffff){
		var tips:string = "";
		if(showTips != null){
			tips = showTips;
		}
		TipsPanel.instance.show(tips,waitdelay,color);
	}
}