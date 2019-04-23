class AccountData {
	
	/** 缓存openId */
	public static saveOpenId(openId:string){
		platform.setStorageSync("playerOpenId",openId);
		this.saveOpenIdTime(new Date().getTime())
	}
	public static getOpenId():string{
		return platform.getStorageSync("playerOpenId");
	}
	public static delOpenId(){
		platform.removeStorageSync("playerOpenId");
	}
	public static saveOpenIdTime(timestream:number){
		platform.setStorageSync("playerOpenIdOutTime",timestream);
	}
	public static getOpenIdTime():string{
		return platform.getStorageSync("playerOpenIdOutTime");
	}

	/** 缓存微信用户信息 */
	public static putwxUser(wxuser:any){
		platform.setStorageSync("wxuser",wxuser);
	}
	public static getwxUser(){
		return platform.getStorageSync("wxuser");
	}
	public static putWXcode(code:string){
		CacheData.saveRAMData("loginCode",code);
	}
	public static getWXcode():any{
		return CacheData.getRAMData("loginCode");
	}
	public static putLaunchOption(opt:any){
		CacheData.saveRAMData('launchOption',opt);
	}
	public static getLaunchOption(){
		return CacheData.getRAMData("launchOption");
	}
	public static putChannel(channel:string){
		platform.setStorageSync("channel_Cache",channel);
	}
	public static getChannel(){
		return platform.getStorageSync("channel_Cache");
	}	
	public static putMp(mp:string){
		platform.setStorageSync("mp_Cache",mp);
	}
	public static getMp(){
		return platform.getStorageSync("mp_Cache");
	}	

	/** 登陆时间 */
	public static serverTime(){
		return CacheData.getRAMData("serverTime");
	}
	public static putServerTime(time:number){
		CacheData.saveRAMData('serverTime',time);
	}
	public static uid(){
		return CacheData.getRAMData("uid");		
	}
	public static setUid(uid:number){
		CacheData.saveRAMData('uid',uid);		
	}
	/** 
	 * 离线时间
	 * (用于计算离线收益:单位/秒) 
	 * */
	public static getOffLine(){
		return CacheData.getRAMData("offLineTime");
	}
	public static putOffLine(time:number){
		CacheData.saveRAMData("offLineTime",time);
	}
}