class SoundManager {
	//静态类
	public static soundPathRoot:string = "resource/sound/";
	
	public static playSound(name:string,secondName:string = null,loops:number = 1){
		var url:string = this.soundPathRoot + name+".mp3";
		platform.playAudio(url,loops == 0,false);
	}
	public static bgSoundName:string = null;
	public static playBgSound(name:string){
		var url:string = this.soundPathRoot + name+".mp3";
		platform.playAudio(url,true,true);
	}
	public static stopBgSound(name:string){
		var url:string = this.soundPathRoot + name+".mp3";
		platform.stopAudio(url);
	}
	public static stopSound(name:string){
		var url:string = this.soundPathRoot + name+".mp3";
		platform.stopAudio(url);
	}
	public static setBgSoundValue(){
	}
	public static clearSound(){
	}
}