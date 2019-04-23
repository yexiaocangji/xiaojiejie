module lzd.display {
  export class CreatPool extends BaseSingle{

	 static IMAGE:string = "IMAGE_POOL"
	public constructor() {
		super();
	}

	public _mapPool:any = {};
	public createObject(type:string){
		var pool:any[] = this._mapPool[type];
		if(!pool) pool = [];
		if(pool.length>0){
			return pool.shift();
		}
		this._mapPool[type] = pool;
		var display = new eui.Image();
		return display;
	}
	public dispose(type:string,display:eui.Image){
		var pool:any[] = this._mapPool[type];
		if(!pool) pool = [];
		pool.push(display);
	}

}
}