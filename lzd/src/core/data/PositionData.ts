/** 位置信息 */
class PositionData {
	public static getPositions() {
		return CacheData.getRAMData("positions")
	}

	public static getPositionsById(type:number) {
		var positions = CacheData.getRAMData("positions");
		return positions&&positions[type]?positions[type]:null;
		// return CacheData.getRAMData("positions")
		// return platform.getStorageSync("positions");
	}
	public static updatePosition(posid:string,position:lzd.vo.Position,type:number){
		var positionCache = CacheData.getRAMData("positions");
		if(!positionCache)positionCache = {};
		var positions = positionCache&&positionCache[type]?positionCache[type]:null;
		if(!positions) positions = {};
		positions[posid] = position;
		positionCache[type] = positions;
		// platform.setStorageSync("positions",positions);

		CacheData.saveRAMData("positions",positionCache);
	}
	public static getPositionById(posid:string,type:number):lzd.vo.Position{
		var positions = this.getPositionsById(type);
		return positions && positions[posid] ? positions[posid]:null; 
	}
	public static putPositions(positions:any){//{"1":lzd.vo.Position}
		var posData = null;
		if(positions){
			for(var k in positions){
				var pos = positions[k] as lzd.vo.Position;
				if(pos.posid){
					if(pos.isHasBox == undefined){
						pos['isHasBox'] = false;
					}
					console.log(pos);
					posData = {"1":positions};
					break;
				}
			}
			if(!posData){
				for(let k in positions){
					let postions1 = positions[k];
					if(postions1){
						for(let k1 in postions1){
							let pos = postions1[k1];
							if(pos.isHasBox == undefined){
								pos['isHasBox'] = false;
							}
						}
					}
				}
			}
		}
		// platform.setStorageSync("positions",positions);		
		CacheData.saveRAMData("positions",posData?posData:positions);
		
	}
}