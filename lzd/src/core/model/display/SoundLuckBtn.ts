class SoundLuckBtn extends MyButton {
	public unluck:eui.Image;	
	public constructor() {
		super();
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
		this.initUI();
	}
	public initUI(){
		var volume = SoundData.getSoundValue();
		if(volume == undefined || volume == null || (volume + "") == "") {
			volume = 1;
			SoundData.putSoundValue(volume);
		}
		this.unluck.visible = volume == 0;
		platform.setAudioVolume(volume);
	}
	public onTouch(){
		var volume = SoundData.getSoundValue();
		volume = volume == 1?0:1;
		SoundData.putSoundValue(volume);
		this.initUI();
	}
	
}
window["SoundLuckBtn"] = SoundLuckBtn;