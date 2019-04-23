class GuideData {
	public static currentOpt() {
		// var opt = platform.getStorageSync("gameGuideOption");
		var opt = CacheData.getRAMData("gameGuideOption");
		return opt;
	}
	public static putCurrentOpt(currentOpt:number){
		// platform.setStorageSync("gameGuideOption",currentOpt);
		CacheData.saveRAMData("gameGuideOption",currentOpt);
	}
	public static updateCurrentOpt(){
		var currentOpt:number = this.currentOpt();
		currentOpt++;
		if(currentOpt >= 5)currentOpt = 55;
		this.putCurrentOpt(currentOpt);
	}

	public static putGuideTips(data:any){
		CacheData.saveRAMData("guideTips",data);
	}
	public static getGuideTips(option:number){
		var data = CacheData.getRAMData("guideTips");
		var tips = "";
		if(!data || !data[option+""]){
			return tips;
		}
		return data[option+""].tips;
	}
}