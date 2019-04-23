class LayerManager extends BaseSingle{
	private _root:egret.DisplayObjectContainer;

	private _senceLayer:egret.DisplayObjectContainer;
	private _alertLayer:egret.DisplayObjectContainer;	
	private _guideLayer:egret.DisplayObjectContainer;
	private _tipsLayer:egret.DisplayObjectContainer;
	public async init(root:egret.DisplayObjectContainer){
		if(this._root)return;
		this._root = root;
		this._senceLayer = new egret.DisplayObjectContainer();
		this._senceLayer.width = this._root.width;
		this._senceLayer.height = this._root.height;
		this._alertLayer = new egret.DisplayObjectContainer();
		this._alertLayer.width = this._root.width;
		this._alertLayer.height = this._root.height;
		this._guideLayer = new egret.DisplayObjectContainer();
		this._guideLayer.width = this._root.width;
		this._guideLayer.height = this._root.height;
		this._guideLayer.touchEnabled = false;
		this._tipsLayer = new egret.DisplayObjectContainer();
		this._tipsLayer.width = this._root.width;
		this._tipsLayer.height = this._root.height;
		this._tipsLayer.touchEnabled = false;
		this._tipsLayer.touchChildren = false;
		
		this._root.addChild(this._senceLayer);
		this._root.addChild(this._alertLayer);
		this._root.addChild(this._guideLayer);
		this._root.addChild(this._tipsLayer);
	}
	public get senceLayer():egret.DisplayObjectContainer{
		return this._senceLayer;
	}
	public get alertLayer():egret.DisplayObjectContainer{
		return this._alertLayer;
	}
	public get guideLayer():egret.DisplayObjectContainer{
		return this._guideLayer;
	}
	public get tipsLayer():egret.DisplayObjectContainer{
		return this._tipsLayer;
	}
}