class MovieClipManager  extends BaseSingle{
	private _mcDataFactory:egret.MovieClipDataFactory;
	private _mcDir:any;//已有的动画缓存起来
	public getMovieClicp(name:string):egret.MovieClip{
		if(!this._mcDataFactory){
			this.initMovieClipFactory("eff");//默认初始化
		}
		if(!this._mcDataFactory){
			egret.log("MovieClipManager not initMovieClipFactory");
			return null;
		}
		if(this._mcDir && this._mcDir[name]){
			return new egret.MovieClip((<egret.MovieClip>this._mcDir[name]).movieClipData);
		}
		var mc = new egret.MovieClip(this._mcDataFactory.generateMovieClipData(name));
		if(!mc){
			egret.log("MovieClipManager create failed:"+name);
			return null;
		}
		if(!this._mcDir){
			this._mcDir = {name:mc};
			return new egret.MovieClip(mc.movieClipData);
		}
		this._mcDir[name] = mc;
		return new egret.MovieClip(mc.movieClipData);
	}
	public initMovieClipFactory(fileName:string){
		var effJson:any = RES.getRes(fileName+"_json");
        var effTextrue:egret.Texture = RES.getRes(fileName+"_png");
		if(!effJson || !effTextrue){
			egret.log("initMovieClipFactory failed:"+fileName);
			return;
		}
		var mcDataFactory = new egret.MovieClipDataFactory(effJson,effTextrue);
		if(!mcDataFactory){
			egret.log("initMovieClipFactory failed:"+fileName);
			return;
		}
		this._mcDataFactory = mcDataFactory;
	}
	public destory(){
		this._mcDataFactory = null;
		this._mcDir = null;
	}
}