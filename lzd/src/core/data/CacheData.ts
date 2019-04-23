class CacheData {
	private static _ramDatas = {};
	public static getRAMData(key:string){
		return CacheData._ramDatas[key];
	}
	public static saveRAMData(key:string,data:any){
		CacheData._ramDatas[key] = data;
	}
	public static removeRAMData(key:string){
		delete CacheData._ramDatas[key];
	}
	public static clearRAMData(){
		CacheData._ramDatas = {};
	}
}