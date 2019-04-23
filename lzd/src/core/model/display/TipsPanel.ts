class TipsPanel extends eui.Component implements  eui.UIComponent {
	private static _instance:TipsPanel;
	public static get instance():TipsPanel{
		if(!this._instance)this._instance = new TipsPanel();
		return this._instance;
	}
	private displayPool:TipsItem[] = [];
	private tipsPool:string[] = [];
	private tipsTimePool:number[] = [];
	private tipsColorPool:number[] = [];
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		// Logger.log("TIPS就绪");
	}
	
	public destory(item:TipsItem){
		if(item.parent){
			item.parent.removeChild(item);
			item.tween = null;
			this.displayPool.push(item);
		}
	}
	private updatePos(){
		var itemHeight = 74;
		var len = this.numChildren;
		var startY = (this.height - len * itemHeight) / 2;
		for(var i:number = 0;i<len;i++){
			var item = this.getChildAt(i);
			item.x = this.width / 2;
			item.y = startY + i * itemHeight;
		}
	}
	public init(){
		LayerManager.getInstance().tipsLayer.addChild(this);
	}
	
	public show(text:string,time:number,color:number){
		this.tipsPool.push(text)
		this.tipsTimePool.push(time)
		this.tipsColorPool.push(color)
		this.showItem();
	}
	private showItem(){
		var item:TipsItem;
		if(this.displayPool.length > 0){
			item = this.displayPool.shift();
			item.refresh(this.tipsPool.shift());
		}else{
			item = new TipsItem(this.tipsPool.shift());
			item.width = this.width;
			item.anchorOffsetX = item.width / 2;
		}
		
		item.alpha = 1;
		item.x = this.width / 2;
		item.y = this.height / 2;
		this.addChild(item);
		if(!item.tween){
			var time = this.tipsTimePool.shift();
			var color = this.tipsColorPool.shift();
			item.tipsLabel.textColor = color;
			item.alpha = 0;
			item.tween = egret.Tween.get(item).wait(50)
			.to({scaleX:1.5,scaleY:1.5,alpha:1},200)
			.to({scaleX:1,scaleY:1},200).wait(time)
			.to({y:item.y - 200},1000)
			.to({y:item.y - 300,alpha:0},500)
			.call(this.destory,this,[item]);
		}
	}
}