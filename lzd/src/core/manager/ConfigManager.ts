class ConfigManager extends BaseSingle {
	
	public async initAppConfig(onComplete:Function,thisObj:any){
		//判断平台
        if (egret.Capabilities.os == "iOS" || egret.Capabilities.os == "Android") {
            AppConfig.native_file_path = platform.getnativeFilePath() + "/";
		}
        HttpClient.sendWxrequest({time:egret.getTimer()},AppConfig.appConfigUrl,(appconfig)=>{
            if(appconfig){
                for(var key in appconfig){
                    if(AppConfig[key] != undefined){
                        AppConfig[key] = appconfig[key];
                    }
                }
            }
            // SoundManager.soundPathRoot = AppConfig.native_file_path + `resource_${AppConfig.res_version}/sound/`;
            DaDianConstant.is_dadian = appconfig.is_dadian;
            // DaDianConstant.sdk_dadian = appconfig.sdk_dadian;

            AdConstant.bannerAdUnitId = appconfig.bannerAdUnitId;
            AdConstant.rewardedVideoAdUnitId = appconfig.rewardedVideoAdUnitId;

            if(onComplete)onComplete.apply(thisObj);
        },(error)=>{
            ConfigManager.getInstance().initAppConfig(onComplete,thisObj);
        })
	}

    public async initShareConfig(onComplete:Function,thisObj:any){
        HttpClient.sendWxrequest({time:egret.getTimer()},AppConfig.shareConfigUrl,(shareConfig)=>{
            ShareConstant.shareJson = shareConfig;
            if(onComplete)onComplete.apply(thisObj);
        },(error)=>{
            ConfigManager.getInstance().initShareConfig(onComplete,thisObj);          
        })
    }
    /** 读取一些实时配置 */
    public async loadConfig(url:string,onComplete:Function,thisObj:any){
        HttpClient.sendWxrequest({time:egret.getTimer()},url,(config)=>{
            if(onComplete)onComplete.apply(thisObj,[config]);
        },(error)=>{
            ConfigManager.getInstance().loadConfig(url,onComplete,thisObj);  
        })
    }
}