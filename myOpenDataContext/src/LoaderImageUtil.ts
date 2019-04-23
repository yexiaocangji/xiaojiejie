class LoaderImageUtil {
	private static _instance:LoaderImageUtil;
	public static get instance():LoaderImageUtil{
		if(!this._instance)this._instance = new LoaderImageUtil();
		return this._instance;
	}
	public async loaderImage(url:string,key:string ){
		 let imageLoader = new egret.ImageLoader();
		imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
			let imageLoader = <egret.ImageLoader>event.currentTarget;
			var t = new egret.Texture();
			t._setBitmapData(imageLoader.data);
			Main.textrueMap[key] = t;
		}, this);
		imageLoader.load(url);
	}
}