class GameApi {
	public static login(code:string,openid:string,channel:string,inviteid:string,invitetype:number = 0,callback:Function){
		var pars = {};
		if(code)pars["code"] = code;
		if(openid)pars["openid"] = openid;
		if(inviteid)pars["inviteid"] = inviteid;
		if(invitetype)pars["invitetype"] = invitetype;
		if(channel)pars["channel"] = channel;
		HttpClient.sendWxrequest(pars,AppConfig.login_url,(data:any)=>{
			if(data.ret == -3){
				if(callback)callback(data);
				return;			
			}
			if(data.ret != 0){
				//登陆异常稍后重试
				platform.showModal('登陆失败',`登陆异常${data.ret}稍后重试,请检查网络状况`,'重启',false,()=>{
					platform.exitMiniProgram(null,null);
				});
				return;
			}
			this.initData(data);
			if(callback)callback(data);
		},e=>{
			GameApi.login(code,openid,channel,inviteid,invitetype,callback);
		},"POST");
	}
	public static initData(data:any){
		if(data.time){
			//减去启动时间(登陆服务器之前是事务处理时间)
			var time = data.time - egret.getTimer();
			AccountData.putServerTime(time);
		}
		if(data.data){
			if(data.data.openid){
				AccountData.saveOpenId(data.data.openid);
			}
			if(data.data.id){
				AccountData.setUid(data.data.id);
			}
			AccountData.putOffLine(data.offline);
			if(typeof data.data.udata == "string"){
				DataCenter.unpackData(data.data.udata);
			}else{
				DataCenter.unpackData("");
			}
		}
	}

	public static updateData(udata:any,callback:Function){
		var openid = AccountData.getOpenId();
		var pars = {"openid":openid,"udata":JSON.stringify(udata)};
		HttpClient.sendWxrequest(pars,AppConfig.update_url,callback,e=>{
			GameApi.updateData(udata,callback);
		},"POST");
	}

	public static shareCheck(encryptedData:string,iv:string,gettype:number,callback:Function){
		var openid = AccountData.getOpenId();
		var pars = {"openid":openid,"encryptedData":encryptedData,"iv":iv,"gettype":gettype};
		HttpClient.sendWxrequest(pars,AppConfig.share_url,callback,e=>{
			GameApi.shareCheck(encryptedData,iv,gettype,callback);
		},"GET");
	}
	//上线
	public static inviteList(invitetype:string,callback:Function){
		// var inviteList = InviteData.getInviteList();
		// if(inviteList){
		// 	if(callback)callback(inviteList);
		// 	return;
		// }
		var openid = AccountData.getOpenId();
		var pars = {"openid":openid,"invitetype":invitetype,"sharepoint":1};
		HttpClient.sendWxrequest(pars,AppConfig.inviteList_url,callback,e=>{
			GameApi.inviteList(invitetype,callback);
		},"GET");
	}
	//新人
	public static inviteNewSgin(invitetype:string,callback:Function){
		// var inviteList = InviteData.getInviteSgin();
		// if(inviteList){
		// 	if(callback)callback(inviteList);
		// 	return;
		// }
		var openid = AccountData.getOpenId();
		var pars = {"openid":openid,"invitetype":invitetype,"sharepoint":1};
		HttpClient.sendWxrequest(pars,AppConfig.inviteList_url,callback,e=>{
			GameApi.inviteList(invitetype,callback);
		},"GET");
	}
	//拉新领取
	public static inviteNewLingqu(openid:string,inviteopenid:string,invitetype:string,isupdatemoney=0,callback:Function){

		var inviteList = InviteData.getInviteSgin();
		if(inviteList){
			if(callback)callback(inviteList);
			return;
		}
		var openid = AccountData.getOpenId();
		var pars = {"openid":openid,"invitetype":invitetype,"isupdatemoney":0};
		HttpClient.sendWxrequest(pars,AppConfig.inviteLingqu_url,callback,e=>{
			GameApi.inviteList(invitetype,callback);
		},"GET");
	}

}