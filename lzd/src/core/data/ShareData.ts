class ShareData {
	public static getShareCount(){
		return CacheData.getRAMData("shareCountSync");
	}
	public static updateShareCount(){
		var data = this.getShareCount();
		var timestamp = AccountData.serverTime() + egret.getTimer();
		var date = DateTool.makeTime(timestamp);
		if(!data || data.date != date){
			data = {count:1,date:date};
		}else{
			data.count++;
		}
		CacheData.saveRAMData("shareCountSync",data);
		return data;
	}
	public static putShareCount(data:any){
		CacheData.saveRAMData("shareCountSync",data);		
	}
}