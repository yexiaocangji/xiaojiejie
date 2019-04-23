class ZhuanPanData {
	/** 用于从服务器拉取数据 */
	public static putZhuanPan(data:any){
		CacheData.saveRAMData("currentZhuanCount",data);
	}
	public static getZhuanPan(){
		return CacheData.getRAMData("currentZhuanCount");
	}
	/** 转盘限制次数：30 */
	public static updateZhuanCount(count:number = 1){
		var datas = this.getZhuanPan();
		if(!datas)datas = {};
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		var data:ZhuanPan_vo = datas;
		if(!data){
			datas = new ZhuanPan_vo(currentDate,30 - count);//次数30次
		}else{
			if(data.date == currentDate){
				data.count -= count;
			}else{
				data = new ZhuanPan_vo(currentDate,30 - count);
			}
			datas = data;
		}
		this.putZhuanPan(datas);
	}
	/** 转盘日期，次数30次 */
	public static getZhuanPanCount():ZhuanPan_vo{
		var data = this.getZhuanPan();
		if(!data) data = {};
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间	
		var currentDate = DateTool.makeTime(timestamp);
		var d:ZhuanPan_vo = data;
		if(d && d.date != currentDate){
			//删除过期的记录
			// delete data;
			this.putZhuanPan(data);
			return null;
		}
		return d;
	}
	/** 转盘券数量 */
	public static getZhuanPanQuanCount() {
		return CacheData.getRAMData("zhuanPanQuanCount");
	}
	public static updateZhuanPanQuanCount(count: number) {
		var data = this.getZhuanPanQuanCount();
		if (!data) {
			data = {};
		}
		{
			data.count = count;
			if(data.count >= 20) data.count = 20;
			this.putZhuanPanQuanCount(data);
		}
	}

	/** 用于从服务器拉取数据 */
	public static putZhuanPanQuanCount(data: any) {
		CacheData.saveRAMData("zhuanPanQuanCount", data);
	}
}