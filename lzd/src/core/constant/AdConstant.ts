class AdConstant {
	public static bannerAdUnitId:string[] =[]; 
	public static rewardedVideoAdUnitId:string[] =[];

	/** 看广告 */
	public static lookRewardAd(callback: Function,thisObj:any) {
		var len = AdConstant.rewardedVideoAdUnitId.length;
		if (len > 0) {
			var adUnitId = AdConstant.rewardedVideoAdUnitId[RandomUitl.randomInt(0, len - 1)]
			platform.showRewardedVideoAd(adUnitId, (e) => {
				callback.apply(thisObj, [e.isEnded]);
			},error=>{
				console.log('广告error:',error);
				ShareConstant.shareToGroup(callback,thisObj);
			});
		} else {
			callback.apply(thisObj, [true]);
		}
	}
	/** 看banner广告 */
	public static showBannerAd(){
		var len = AdConstant.bannerAdUnitId.length;
		if( len > 0){
			var adUnitId = AdConstant.bannerAdUnitId[RandomUitl.randomInt(0,len - 1)]
			platform.showBannerAd(adUnitId);
		}
	}
}