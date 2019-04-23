class ConfigData {
	/** 小姐姐配置 */
	public static getPlayer() {
		var config = RES.getRes("config_json");
		return config;
	}
	public static getPlayerById(id: string): lzd.vo.CfgPlayer {
		var config = this.getPlayer();
		var index: number = Number(id);
		if (index >= 1000 && index <= 1050) {
			index=index-1001;
			return config[index];
		}
		else if (index >= 2000 && index <= 2050) {
			index=index-2001+38;
			return config[index];
		}
		else if (index >= 3000 && index <= 3050) {
			index=index-3001+38*2;
			return config[index];
		}
	}


	

}