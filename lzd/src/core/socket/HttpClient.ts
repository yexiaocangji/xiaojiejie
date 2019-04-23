class HttpClient {
	public static async send(url:string,params:any,completeCallback:Function = null,timeoutCallback:Function = null,method = "get"){
		var request = new egret.HttpRequest();
		var parStr = HttpClient.getRequestPars(params);
        console.log("Http request url:"+url + "?" + parStr);
		var callback = function (e) {
            request.removeEventListener(egret.Event.COMPLETE, callback, request);
            request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
            if (completeCallback != null) {
                completeCallback(request.response);
            }
        };
        var timeout = function (e) {
            request.removeEventListener(egret.Event.COMPLETE, callback, request);
            request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
            if (timeoutCallback != null) {
                timeoutCallback(e);
            }
        };
        request.addEventListener(egret.Event.COMPLETE, callback, request);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
        request.responseType = egret.HttpResponseType.TEXT;
        if (method == "get") {
            request.open(url + "?" + parStr, egret.HttpMethod.GET);
            request.send();
        }
        else if (method == "post") {
            request.open(url, egret.HttpMethod.POST);
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Content-Type", "multipart/form-data ");//application/json
                egret.log("parStr:"+parStr);
            request.send(parStr);
        }
	}
	public static getRequestPars(params:any){
		var pars = "";
		for(var k in params){
			pars += k+"="+params[k]+"&";
		}
		return pars.substr(0,pars.length - 1);
	}


    private static timeout:any = {};
    public static sendWxrequest(params:any,url:string,callback:Function = null,error:Function = null,method:string = "GET"){
        egret.log("HTTP request:"+url+" "+JSON.stringify(params));
        platform.request(url,params,method,"json",(reponseData)=>{
            if(this.timeout[url]){
                delete this.timeout[url];
                console.log('请求成功,删除超时数据');
            }
            egret.log("HTTP reponseData:",reponseData);
			if(reponseData && reponseData.data){
				var data = reponseData.data;
                if(callback){
                    callback(data);
                }
			}
		},(e)=>{
            console.log("HTTP failed:",e);
            var timeoutCount = this.timeout[url];
            if(!timeoutCount){
                timeoutCount = 1;
            }else{
                timeoutCount ++;
            }
            if(timeoutCount < 6){
                this.timeout[url] = timeoutCount;
                let data = e.data;
                let errorCallBack = error;
                platform.showModal('连接失败',`网络超时${timeoutCount}次,点击重试`,'重试',false,()=>{
                    if(errorCallBack)errorCallBack.apply(this,[data]);
                });
            }else{
                //提示玩家检测网络
                delete this.timeout[url];
                console.log('超时5次,删除超时数据');
                platform.showModal('连接失败',`网络超时${timeoutCount}次,请检查网络状况`,'重启',false,()=>{
                    platform.exitMiniProgram(null,null);
                });
            }
		});
    }
}