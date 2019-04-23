class LoadingProUI extends eui.Component implements  eui.UIComponent,RES.PromiseTaskReporter {
	private static _instance:LoadingProUI;
	public static get instance():LoadingProUI{
		if(!this._instance)this._instance = new LoadingProUI();
		return this._instance;
	}
	
	private _labelText:string = "玩命加载中"
	public set labelText(str:string){
		this._labelText = str;
	}
	private progressTips:eui.Label;
	private runBg:eui.Image;//加载图循环转动
	private _tweenAction:egret.Tween;
	public constructor() {
		super();
	}
	public show(parent:egret.DisplayObjectContainer):LoadingProUI{
		if(parent){
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStage,this);
			parent.addChild(this);
			if(this._tweenAction)this._tweenAction.play();
		}
		return this;
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		// this.progressTips.text = this._labelText;
		// this.running();		
	}
	
	private running(){
		if(this.runBg){
			this.runBg.visible = false;
			this.runBg.anchorOffsetX = this.runBg.width / 2;
			this.runBg.anchorOffsetY = this.runBg.height / 2;
			this._tweenAction = egret.Tween.get(this.runBg,{loop:true}).to({rotation:360},1000);
		}
	}
	public AddToStage(e:egret.Event){
		this.width = this.parent.width;
		this.height = this.parent.height;
	}

	public onProgress(current: number, total: number): void {
		this.runBg.visible = true;
		var progress = Math.floor(current/total*100);
        this.progressTips.text = this._labelText+`${progress}%`;
    }
	public onDownProgress(progress:any){
		// var writeLen:number = progress.totalBytesWritten;
		// writeLen = Math.floor(writeLen / 1024);
		// var totalLen:number = progress.totalBytesExpectedToWrite;
		// totalLen = Math.floor(totalLen / 1024);
		// this._labelText = `下载进度(${writeLen}/${totalLen})KB`;
		// this._labelText = `下载游戏资源`;		
		this.runBg.visible = true;		
		var percent = progress.progress;
		this.progressTips.text = this._labelText+`${percent}%`
	}
	public finish(){
		this.runBg.visible = false;
		this._tweenAction.pause();
		this.progressTips.text = "资源加载完成";
	}
	public dispose(){
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStage,this);
		if(this._tweenAction)this._tweenAction.pause();
		this.parent.removeChild(this);
	}
}