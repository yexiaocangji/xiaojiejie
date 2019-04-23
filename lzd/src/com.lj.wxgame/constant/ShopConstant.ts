class ShopConstant {
	//判断当前买哪个等级最合算
	public static buyWhichLevel() {
		var config: lzd.vo.CfgPlayer = this.getHighestLevelConfig(StaticConstant.CurrentType);
		var minBuyLevel = Number(config.minBuyLevel);    //当前可购买的最小等级    
		var maxBuyLevel = Number(config.maxBuyLevel);	 //当前可购买的最大等级
		var heSuanLevel = maxBuyLevel;					//最合算的等级
		if (maxBuyLevel == minBuyLevel) return heSuanLevel;
		else {
			var hesuanMoney: Decimal = null;
			for (var i = 0; i <= maxBuyLevel - minBuyLevel; i++) {
				var currentLevel = maxBuyLevel - i;
				var currentLevelID = RoleData.getIdByLevel(StaticConstant.CurrentType, currentLevel + "");
				var currentPlayer = PlayerData.getPlayerById(currentLevelID);
				var currentLevelGold = RoleData.getBuildGold(currentLevelID, currentPlayer.buyCount_gold);
				var m = currentLevelGold.mul(Math.pow(2, i));
				if (!hesuanMoney) hesuanMoney = m;
				else {
					if (hesuanMoney.comparedTo(m) == 1) {
						hesuanMoney = m;
						heSuanLevel = currentLevel;
					}
				}

			}
			return heSuanLevel;
		}
	}

	public static getHighestLevelConfig(type: number): lzd.vo.CfgPlayer {
		var players = PlayerData.getPlayers();
		var playersNew = {};
		for (var k in players) {
			var itemdata = players[k];
			var id = itemdata.id;
			if (type == 1 && id && Number(id) >= 1001 && Number(id) <= 1050) playersNew[id] = (itemdata);
			if (type == 2 && id && Number(id) >= 2001 && Number(id) <= 2050) playersNew[id] = (itemdata);
			if (type == 3 && id && Number(id) >= 3001 && Number(id) <= 3050) playersNew[id] = (itemdata);
		}
		var max = -1;
		if (playersNew) {
			for (var k in playersNew) {
				var p = playersNew[k] as lzd.vo.Player;
				max = Math.max(max, parseInt(p.id));
			}
		}
		var config = ConfigData.getPlayerById(max + "");
		return config;
	}
}