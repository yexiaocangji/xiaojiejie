class GameConstant {
	//获取某个类型（1小姐姐、2小哥哥、3小宠物）的离线收益值
	public static getShouYiValueByType(type: number) {
		var shouyiValue = new Decimal(0);
		var positions = PositionData.getPositionsById(type);
		if (positions) {
			for (var posid in positions) {
				var position = PositionData.getPositionById(posid, type);
				if (position.playerid == "") continue;
				var config = ConfigData.getPlayerById(position.playerid);
				if (config.lixianshouyi) {
					shouyiValue = shouyiValue.add(config.lixianshouyi);
				}
			}
		}
		return shouyiValue;
	}
	//获取3个类型离线收益总值
	public static getAllShouYiValue() {
		var shouyiValue_xjj: Decimal = this.getShouYiValueByType(1);
		var shouyiValue_xgg: Decimal = this.getShouYiValueByType(2);
		var shouyiValue_xcw: Decimal = this.getShouYiValueByType(3);
		var shouyiTotalValue = shouyiValue_xjj.add(shouyiValue_xgg).add(shouyiValue_xcw);
		return shouyiTotalValue;
	}
}