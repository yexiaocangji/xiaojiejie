/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {
    setDebug(bool);
    login(): Promise<any>;
    getUserInfo(left, top, scoped): Promise<any>;
    createFeedbackButton():Promise<any>;
    hideFeedbackButton():Promise<any>;
    getSetting():Promise<any>;
    openSetting():Promise<any>;
    authorize(scope):Promise<any>;
    getLocation():Promise<any>;
    openLocation(param);
    exitMiniProgram(suc,fail);
    getLaunchOptionsSync():any;
    onHide(callback);
    offHide(callback);
    onShow(callback); 
    offShow(callback);
    checkForUpdate();
    showModal(title, content, confirmText, showCancel, success);
    toTempFilePathSync(obj):any;
    saveImageToPhotosAlbum(filepath);
    onShareAppMessage(shareOption);

    offShareAppMessage(callback);

    shareAppMessage(title,imageUrl,query,success,fail,cancel);
    getShareInfo(object);
    updateShareMenu(withShareTicket,callback);

    getStorageSync(key):any;

    setStorageSync(key,data);

    removeStorageSync(key);

    playAudio(url,loop,isBgm);

    stopAudio(url);

    setAudioVolume(volume);

    replayAudio();
    
    setInnerAudioOption(mixWithOther, obeyMuteSwitch);

    hasDirectory(dirName,callback):any;

    getnativeFilePath();

    rmdir(dirName,callback);
    
    download(url,resName,sucCallBack,onProgress);

    getOpenDataContext():any;

    setUserCloudStorage(kvData);

    openCustomerServiceConversation(object);
    
    showBannerAd(adUnitId:string);

    hideBannerAd();
    
    showRewardedVideoAd(adUnitId,closeCallBack,error);

    previewImage(urls);

    navigateToMiniProgram(appId,path,extraData);

    request(url:string,data:string,method:string,dataType:string,callback,error);
    connectSocket(object);//url,header,protocols,success,fail,complete
    closeSocket(object);//code,reason,func,func,func
    onSocketOpen(func);
    onSocketClose(func);
    onSocketMessage(func);
    onSocketError(func);
    sendSocketMessage(object);//data,func,func,func
    loadSubpackage(onProgress,onComplete);
}

class WXPlatform implements Platform {
    async setDebug(bool:boolean){}
    /** ==========用户信息相关========= */
    async login() {return null;}
    async getUserInfo( scoped) {  return null; }
    async createFeedbackButton(){return null;}
    async hideFeedbackButton(){return null;}
    async openSetting(){return null;}
    async getSetting(){return null;}
    async authorize(scope){return null}
    async getLocation(){return null;}
    async openLocation(param){}
    /** ======生命周期相关=========*/
    async getLaunchOptionsSync(){return {};}
    async exitMiniProgram(suc,fail){}
    async onHide(callback:Function){}
    async offHide(callback:Function){}
    async onShow(callback:Function){}
    async offShow(callback:Function){}
    async toTempFilePathSync(obj){return null;}
    async saveImageToPhotosAlbum(filepath){};
    /** 检查更新 */
    async checkForUpdate(){}
    async showModal(title, content, confirmText, showCancel, success){}
    /** ======转发相关=========*/
    async onShareAppMessage(shareOption:any){}
    async offShareAppMessage(callback:Function){}
    async shareAppMessage(title:string,imageUrl:string,query:string,success:Function,fail:Function){}
    async getShareInfo(object:any){}
    async updateShareMenu(withShareTicket:boolean,callback:Function){}
    /** Storage相关 */
    async getStorageSync(key:string){return null;}
    async setStorageSync(key:string,data:any){}
    async removeStorageSync(key:string){}
    /** audio system */
    async playAudio(url:string,loop:boolean,isBgm:boolean = false){}

    async stopAudio(url:string){}
    async setAudioVolume(volume:number){}
    async replayAudio(){}
    async setInnerAudioOption(mixWithOther, obeyMuteSwitch){};
    /** file system */
    async hasDirectory(dirName:string,callback:Function){}
    async getnativeFilePath(){}
    //删除文件unlink
    async unlink(url:string,callback:Function){}
    async rmdir(dirName:string,callback:Function){}
    //下载文件
    async download(url:string,resName:string,sucCallBack:Function,onProgress:Function){}
    /** openData */
    async getOpenDataContext(){}
    async setUserCloudStorage(kvData:any[]){}
    /** 客服 */
    async openCustomerServiceConversation(object:any){}
    /** bannerAd */
    async showBannerAd(adUnitId:string){}
    async hideBannerAd(){}
    async showRewardedVideoAd(adUnitId:string,closeCallBack:Function,error:Function){}
    /** 图片预览 */
    async previewImage(urls:string[]){}
    /** 小程序跳转 */
    async navigateToMiniProgram(appId:string,path:string,extraData:any){}
    /** httpRequest */
    async request(url:string,data:string,method:string,dataType:string,callback,error){}
    /** socket */
    async connectSocket(object){}//url,header,protocols,success,fail,complete
    async closeSocket(object){}//code,reason,func,func,func
    async onSocketOpen(func){}
    async onSocketClose(func){}
    async onSocketMessage(func){}
    async onSocketError(func){}
    async sendSocketMessage(object){}//data,func,func,func
    /** 分包加载 */
    async loadSubpackage(onProgress:Function,onComplete:Function){}
}


if (!window.platform) {
    window.platform = new WXPlatform();
}


declare let platform: Platform;

declare interface Window {

    platform: WXPlatform
}





