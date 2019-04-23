class SpeedupData {
	public static getSpeedup() {
		return CacheData.getRAMData("currentSpeedState");
	}
	public static updateSpeedup(time: number, keeptime: number) {
		var data = this.getSpeedup();
		if (!data) {
			data = {};
		}
		{
			data.time = time;
			data.keeptime = keeptime;
			this.putSpeedup(data);
		}
	}

	/** 用于从服务器拉取数据 */
	public static putSpeedup(data: any) {
		CacheData.saveRAMData("currentSpeedState", data);
	}



	public static getSpeedupCount() {
		return CacheData.getRAMData("speedupCount");
	}

	public static updateSpeedupCount() {
		var data = this.getSpeedupCount();
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		if (!data) {
			data = new Speedup(currentDate, 1);
		} else {
			if (data.date == currentDate) {
				data.count += 1;
			} else {
				data = new Speedup(currentDate, 1);
			}
		}
		this.putSpeedupCount(data);
		return data;
	}

	/** 用于从服务器拉取数据 */
	public static putSpeedupCount(data: any) {
		CacheData.saveRAMData("speedupCount", data);
	}
}