class BasePanel extends eui.Component implements  eui.UIComponent {
	public static currentPanel:BasePanel;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.initialize();
	}
	//EUI初始化完成调度
	public initialize(){

	}
	public onAddToStage(e:egret.Event){
		BasePanel.currentPanel = this;
		this.width = this.parent.width;
		this.height = this.parent.height;
	}
	public onRemoveFromStage(e:egret.Event){
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
	}
	public gotoPanel(panel:BasePanel){
		try{
			this.parent.addChild(panel);
		}catch(e){
			console.log("场景切换异常:",e);
			var scene = (LayerManager.getInstance() as LayerManager).senceLayer;
			console.log("senceLayer numChildren 1:",scene?scene.numChildren:null);		
			scene&&scene.addChild(panel);
		}
		this.dispose();
	}
	public dispose(){
		if(this.parent != null){
			this.parent.removeChild(this);
		}
	}
}