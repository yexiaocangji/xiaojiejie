/**
 * 钻石、金币不足，30次每天
 */
class NotEnoughData {
	/** 用于从服务器拉取数据 */
	public static putNotEnoughData(data:NotEnough_vo){
		CacheData.saveRAMData("NotEnoughData",data);
	}
	public static getNotEnoughData():NotEnough_vo{
		return CacheData.getRAMData("NotEnoughData");
	}
	/** 转盘限制次数：30 */
	public static updateNotJewelCount(jewelCount:number = 0,jinbiCount:number = 0){
		var datas = this.getNotEnoughData();
		// if(!datas)datas = {};
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		var data:NotEnough_vo = datas;
		if(!data){
			datas = new NotEnough_vo(currentDate,AppConfig.jewel_limitCount - jewelCount,AppConfig.jinbi_limitCount -jinbiCount);//次数50次
		}else{
			if(data.date == currentDate){
				data.jewelCount -= jewelCount;
				data.jinbiCount -= jinbiCount;
			}else{
				data = new NotEnough_vo(currentDate,AppConfig.jewel_limitCount - jewelCount,AppConfig.jinbi_limitCount -jinbiCount);
			}
			datas = data;
		}
		this.putNotEnoughData(datas);
	}
	/** 转盘日期，次数30次 */
	public static getcurrentLimitData():NotEnough_vo{
		var data = this.getNotEnoughData();
		// if(!data) data = {};
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间	
		var currentDate = DateTool.makeTime(timestamp);
		var d:NotEnough_vo = data;
		if(d && d.date != currentDate){
			//删除过期的记录
			delete d.jewelCount;
			delete d.jinbiCount;
			this.putNotEnoughData(data);
			return null;
		}
		return d;
	}
}