class PaoPaoTextField extends egret.TextField{
	//重力
	private g:number = 0.6;
	//初速度
	private speedX:number = 0;
	private speedY:number = 0;
	
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
	}
	public onAdd(e){
		this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);
		//初始化初速度
		this.speedX = RandomUitl.randomFloat(-3,3);
		this.speedY = RandomUitl.randomFloat(-5,-10);
	}
	public remove(){
		this.removeEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);		
		if(this.parent)this.parent.removeChild(this);		
		return this;
	}
	public onFrame(e){
		this.x += this.speedX;
		this.y += this.speedY;
		this.speedY += this.g;
	}
	public dispose(){
		if(this.parent)this.parent.removeChild(this);
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);		
	}
}