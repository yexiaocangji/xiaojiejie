class ResourceBtn extends MyButton{
	public constructor() {
		super();
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
	}
}
window["ResourceBtn"] = ResourceBtn;