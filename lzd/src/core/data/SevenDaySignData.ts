class SevenDaySignData {
	/** 
	 * 连续签到领取记录
	 * @param timestamp 上次领取时间戳
	 * @param count 领过次数
	 */
	public static updateSign(timestamp:number,count:number){
		var data = {timestamp:timestamp,count:count};
		CacheData.saveRAMData("SevenDaySignCache",data);
	}
	public static getSignData(){
		return CacheData.getRAMData("SevenDaySignCache");
	}
	public static putSignData(data:any){
		CacheData.saveRAMData("SevenDaySignCache",data);		
	}
}