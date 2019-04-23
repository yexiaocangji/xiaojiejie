class ToggleBtn extends MyButton{
	public selectDisplay:eui.Image;
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
	}
	public setStatus(isselect:boolean = false){
		if(this.selectDisplay){
			this.selectDisplay.alpha = isselect?1:0;
		}
	}

}
//自定义组件嵌套使用要暴露到全局
window['ToggleBtn'] = ToggleBtn;