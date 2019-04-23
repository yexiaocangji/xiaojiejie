class SoundData extends CacheData{
	public static getSoundValue():number{
		var sVal = platform.getStorageSync("gameSoundValue");
		if(sVal == null)
		{
			this.putSoundValue(10);
			return 10;
		}
		return parseInt( sVal);
	}
	public static putSoundValue(value:number){		
		platform.setStorageSync("gameSoundValue",value);
	}
	public static getBgSoundValue():number{
		var sVal = platform.getStorageSync("gameBgSoundValue");
		if(sVal == null)
		{
			this.putBgSoundValue(4);
			return 4;
		}
		return parseInt( sVal);
	}
	public static putBgSoundValue(value:number){			
		platform.setStorageSync("gameBgSoundValue",value);
	}
}