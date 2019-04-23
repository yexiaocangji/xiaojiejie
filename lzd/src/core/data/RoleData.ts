class RoleData {
	public static getRole(): Role {
		var role: Role = CacheData.getRAMData("role");
		if (role) role.gold = new Decimal(role.gold);
		return role;
	}
	public static putRole(role: Role) {
		CacheData.saveRAMData("role", role);
	}

	//创建金币
	public static getBuildGold(id: string, count: number): Decimal {
		var config = ConfigData.getPlayerById(id);
		if (count == null) count = 1;
		var initialGold = new Decimal(config.initgoldbuy);  //初始购买金币数
		var buildGold = initialGold.mul(Math.pow(Number(config.goldbuyxishu), count - 1));
		return new Decimal(buildGold);
	}
	//创建钻石
	public static getBuildJewel(id: string, count: number): number {
		var config = ConfigData.getPlayerById(id);
		if (count == null) count = 1;
		var initialJewel: number = Number(config.initjewelbuy);
		var buildJewel: number = initialJewel + Number(config.jewelbuyxishu) * (count - 1);
		return Math.round(buildJewel);
	}
	/** 是否领取过添加到小程序奖励 */
	public static getAddProgram() {
		return CacheData.getRAMData("addProgramCache");
	}
	public static putAddProgram() {
		CacheData.saveRAMData("addProgramCache", 1);
	}
	/** 关注公众号每日领奖
	 */
	public static getFocusGain(){
		return CacheData.getRAMData("focusGainCache");
	}
	/** 记录领取日期
	 */
	public static putFocusGain(date:string){
		CacheData.saveRAMData("focusGainCache",date);
	}

	//通过类型和等级获取是哪个人物的id  1小姐姐 2小哥哥 3小宠物
	public static getIdByLevel(type: number, level: string): string {
		if (type == 1) {
			var id = (1000 + Number(level)) + "";
			return id;
		} else if (type == 2) {
			var id = (2000 + Number(level)) + "";
			return id;
		} else if (type == 3)
			var id = (3000 + Number(level)) + "";
		return id;
	}

}