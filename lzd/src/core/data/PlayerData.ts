/** 人物信息 */
class PlayerData {
	public static getPlayers() {
		return CacheData.getRAMData("players");
	}
	public static updatePlayer(id:string,player:lzd.vo.Player){
		var players = this.getPlayers();
		if(!players)players = {};
		players[id] = player;
		CacheData.saveRAMData("players",players);
	}
	public static getPlayerById(id:string):lzd.vo.Player{
		var players = this.getPlayers();
		return players && players[id] ? players[id]:null; 
	}
	public static putPlayers(players:lzd.vo.Player){
		CacheData.saveRAMData("players",players);		
	}
}