class WechatManager extends BaseSingle{
	public async login(){
		const loginData = await window.platform.login();
        if(loginData && loginData.code){
            console.log("LOGINCODE:"+loginData.code);
            AccountData.putWXcode(loginData.code);
        }
        //点进游戏
        // DaDianConstant.send({openid:"newRole",page:"login",event:"joinGame",extra:""});	
        
	}
	public async getUserInfo(callback:Function,thisObj:any){
		
		var user = AccountData.getwxUser();
		const setting = await platform.getSetting();
		
		var scoped = !setting?false:setting.authSetting["scope.userInfo"];
		if(scoped && user)return;//授权过不再获取并且服务器也没有用户信息

        const userInfoData = await window.platform.getUserInfo(scoped);
        // if ((userInfoData.errMsg == "getUserInfo:fail auth deny" || userInfoData.errMsg == "getUserInfo:fail auth denied")) {
        //     LoadingProUI.instance.labelText = "用户授权失败";
        //     // //用户拒绝
        //     const openSetting = await platform.openSetting();
        //     console.log('用户授权界面返回',userInfoData);
        //     //重启小程序
        //     platform.exitMiniProgram(null,null);
        //     return;
        // }
        var userInfo = null;
        if(userInfoData && userInfoData.userInfo){
            userInfo = userInfoData.userInfo;
			var role:Role = RoleData.getRole();
			if(!role)role = new Role();
			if(userInfo){
        		AccountData.putwxUser(userInfo);
				role.name = userInfo.nickName;
				role.sex = userInfo.gender;
				role.head = userInfo.avatarUrl;
				role.province = userInfo.province;
			}
		    RoleData.putRole(role);
            console.log("USERINFO:"+JSON.stringify(userInfo) );
        }
		if(callback)callback.apply(this);
		// var role = RoleData.getRole();
		// //更新Role
		// if(userInfo){
		// 	role.name = userInfo.nickName;
		// 	role.sex = userInfo.gender;
		// 	role.head = userInfo.avatarUrl;
		// 	role.province = userInfo.province;
		// }
		// RoleData.putRole(role);
		// DataCenter.packData();
	}
	public async getLaunchOptionsSync(){
		//获取小程序启动信息
		var launchOption = await platform.getLaunchOptionsSync();
		AccountData.putLaunchOption(launchOption);
		egret.log("LAUNCHOPTION:"+JSON.stringify(launchOption)+"\n");
	}

	public getOpenId():string{
		let openId:string = AccountData.getOpenId();
		let time = AccountData.getOpenIdTime();

		console.log(time);
		console.log(DateTool.makeTime());
		if(!time || time != DateTool.makeTime()){
		// if(!time || (time + 1000*60) < date.getTime()){
			AccountData.saveOpenIdTime(null);
			openId = null;
		}
		return openId;
	}

	public getInviteid():string{
		var launchOption = AccountData.getLaunchOption();
		if(launchOption && launchOption.query && launchOption.query.inviteid){        
			return launchOption.query.inviteid
		}
		return null;
	}
	public getInvitetype():string{
		var launchOption = AccountData.getLaunchOption();
		if(launchOption && launchOption.query && launchOption.query.invitetype){        
			return launchOption.query.invitetype
		}
		return null;
	}
	public getChannel():string{
		var launchOption = AccountData.getLaunchOption();		
		let channel = launchOption.query && launchOption.query.channel?launchOption.query.channel:null;
		let mp = launchOption.query && launchOption.query.mp?launchOption.query.mp:null;
		if(channel)AccountData.putChannel(channel);
		if(mp)AccountData.putMp(mp);
		return channel;
	}

	public doLunchOption(){
		var launchOption = AccountData.getLaunchOption();			
		if(launchOption){        
			var query = launchOption.query;
			if(query && query.checkRank && launchOption.shareTicket){
				var rankPanel = new RankPanel();
				rankPanel.shareTicket = launchOption.shareTicket;
				Alert.alert(rankPanel);
			}
			if(query && query.imageUrl){
				//分享图回流打点
				DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid,"share","share_info",query.title+":"+query.imageUrl+":"+this.getOpenId()));
			}
			if(query && query.mp){}
			//从收藏小程序进入
			// var addprogram = RoleData.getAddProgram();
			// if(!addprogram && (launchOption.scene == 1104 || launchOption.scene == 1103)){
			// 	var role = RoleData.getRole();
			// 	role.jewel += 888;
			// 	RoleData.putRole(role);
			// 	RoleData.putAddProgram();
			// 	egret.setTimeout(function() {
			// 		ControllAlert.show("添加小程序获得奖励888钻石",2000);
			// 	},this,500); 
			// 	DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"addprogram","addprogramsuc",""));												
			// }
			//公众号自定义菜单进入
			var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
			var focusDate = RoleData.getFocusGain();
			if(launchOption.scene == 1035 && ( !focusDate || focusDate != DateTool.makeTime(timestamp))){
				var role = RoleData.getRole();
				role.jewel += 666;
				RoleData.putRole(role);
				RoleData.putFocusGain(DateTool.makeTime(timestamp));				
				egret.setTimeout(function() {
					ControllAlert.show("每日公众号进入获得666钻石",2000);
				},this,500); 
				DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"focus","focusget",""));
			}
			AccountData.putLaunchOption(null);
		}
	}
	public doOnShow(){
		//非启动用
		platform.onShow(this._onShow);
	}
	public hideOnShow(){
		platform.offShow(this._onShow);
	}
	public _onShow(res){
		platform.replayAudio();
		//匹配中不处理启动信息
		var query = res.query;
		egret.log('BACK_WXGAME:'+JSON.stringify(res));
		if(query && query.checkRank && res.shareTicket){
			var rankPanel = new RankPanel();
			rankPanel.shareTicket = res.shareTicket;
			Alert.alert(rankPanel);
		}
		if(query && query.imageUrl){
			var invitetype = query.invitetype?query.invitetype:null;
			//分享图回流打点
			DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid,"share","share_info",query.title+":"+query.imageUrl+":"+this.getOpenId()+":"+invitetype));
		}
		//从收藏小程序进入
		var addprogram = RoleData.getAddProgram();
		if(!addprogram && (res.scene == 1104 || res.scene == 1103)){
			var role = RoleData.getRole();
			role.jewel += 888;
			RoleData.putRole(role);
			RoleData.putAddProgram();
			egret.setTimeout(function() {
				ControllAlert.show("添加小程序获得奖励888钻石",2000);
			},this,500);
			DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"addprogram","addprogramsuc",""));								
			/*if(BasePanel.currentPanel instanceof GamePanel){
				BasePanel.currentPanel.addprogramBtn.visible = false;
			}*/
		}
		//公众号自定义菜单进入
		// var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
		// var focusDate = RoleData.getFocusGain();
		// if(res.scene == 1035 && ( !focusDate || focusDate != DateTool.makeTime(timestamp))){
		// 	var role = RoleData.getRole();
		// 	role.jewel += 666;
		// 	RoleData.putRole(role);
		// 	RoleData.putFocusGain(DateTool.makeTime(timestamp));
		// 	egret.setTimeout(function() {
		// 		ControllAlert.show("每日公众号进入获得666钻石",2000);
		// 	},this,500); 
		// 	DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"focus","focusget",""));				
		// }
		//分享判断
		if(ShareConstant.shareId > 0){
			//普通分享
			let shareCallback = ShareConstant.callback;
			var nowTime = egret.getTimer().valueOf();
			if((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime ){
				if(Math.random() >= AppConfig.shareRandomValue){
					if(shareCallback)shareCallback(true);
				}else{
					ShareConstant.cheating++;
					ShareConstant.shareTime = egret.getTimer().valueOf();
					if(shareCallback)shareCallback(false);
				}
			}else{
				ShareConstant.shareTime = egret.getTimer().valueOf();
				if(shareCallback)shareCallback(false);
			}
		}else if(ShareConstant.shareId < 0){
			let shareCallback = ShareConstant.callback;			
			//需要判断群的分享
			if(query && query.shareValue && query.shareValue == ShareConstant.shareId && res.shareTicket){
				platform.getShareInfo({
					shareTicket: res.shareTicket,
					success: (data) => {
						var e = data.encryptedData;
						var i = data.iv;
						GameApi.shareCheck(e,i,0,(data)=>{
							if(data.ret == 0){								
								if(shareCallback)shareCallback(true);
							}else{
								platform.showModal("","请分享到其他群(30分钟内相同群无法获得奖励)","确定",false,()=>{
									if(shareCallback)shareCallback(false);
								});	
							}
						})
					}
				});
				ShareConstant.shareId = 0;
			}else if(query && query.shareValue && query.shareValue == ShareConstant.shareId ){
				platform.showModal("","请您分享到群","确定",false,()=>{
				});				
			}else{
				platform.showModal("","进群点击自己上次分享卡片即可获得","确定",false,()=>{
				});	
			}
		

		}
	}



	private openDataContext:any;
	/**
	 * 发送消息到开放域
	 * @param msg {isDisplay:"",rankType: "",shareTicket: "",stageWidth:"",stageHeight:"",selfOpenId:""}
	 * rankType 排行榜类型 1:好友排行 2:群排行 3:前后排行 4:下一位
	*/
	public sendOpenDataMassage(msg:any){
		if(!this.openDataContext){
			this.openDataContext = platform.getOpenDataContext();
		}
		this.openDataContext.postMessage(msg);
	}
}