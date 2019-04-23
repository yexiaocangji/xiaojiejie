class TipsItem extends eui.Component implements  eui.UIComponent {
	public tipsLabel:eui.Label;
	private tipsText:string;
	public tween:egret.Tween;
	public constructor(text:string) {
		super();
		this.tipsText = text;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.tipsLabel.text = this.tipsText;
	}
	public refresh(text:string){
		if(text != null) this.tipsText = text;
		else this.tipsText = "";
		this.tipsLabel.text = this.tipsText;
		this.height = this.tipsLabel.textHeight + 10;
	}
	
}