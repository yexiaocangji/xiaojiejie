class RandomBoxData {
	public static getRandomBox() {
		return CacheData.getRAMData("randomBox");
	}
	public static updateRandomBoxCount() {
		var data = this.getRandomBox();
			var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
			var currentDate = DateTool.makeTime(timestamp);
			if (!data) {
				data = new RandomBox(currentDate, 1);
			} else {
				if (data.date == currentDate) {
					data.count += 1;
				} else {
					data = new RandomBox(currentDate, 1);
				}
			}
		 this.putRandomBox(data);
		 return data;
	}

	/** 用于从服务器拉取数据 */
	public static putRandomBox(data: any) {
		CacheData.saveRAMData("randomBox", data);
	}
}