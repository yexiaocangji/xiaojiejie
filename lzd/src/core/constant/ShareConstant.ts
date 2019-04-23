class ShareConstant {
	//分享配置
	public static shareJson:any[] = [];
	//分享时间(计算分享到onShow所用时间)
	public static shareTime:number = 0;
	//分享组(分享图组)
	private static currentGroup:number = 1;
	//分享是否被取消
	public static shareCancel:boolean = false;
	//每次分享唯一id(只保留最后一次分享)
	public static shareId:number = 0;
	//分享onShow回调
	public static callback:Function;
	//骗分享次数
	public static cheating:number = 0;
	public static setCurrentShareGroup(group:number){
		this.currentGroup = group;
	}

	public static getQuery(pars:any){
		if(!pars)return '';
		var query = '';
		for(var key in pars){
			var value = pars[key];
			query += `${key}=${value}&`;
		}
		return query;
	}
	public static queryAddShareInfo(title:string,url:string,query:any){
		if(!query)query = {title:title,imageUrl:url,sendOpenid:AccountData.getOpenId()};
		else { 
			query['title'] = title;
			query['imageUrl'] = url;
			query["sendOpenid"] = AccountData.getOpenId();
		}
		//分享图打点
		DaDianConstant.send(DaDianConstant.getDadianData(query.sendOpenid,"share","share_send_info",query.title+":"+query.imageUrl));
		return query;
	}
	public static shareById(id:string,sucCallback:Function,titleDIY:string = "",urlDIY:string = "",query:any = null){
		this.shareTime = egret.getTimer().valueOf();
		var title = "";
		var url = "";
		if(this.shareJson){
			for(var index in this.shareJson){
				var data = this.shareJson[index];
				if(data.id == id){
					title = data.title;
					url = data.url;
				}
			}
		}
		if(!ObjectUtil.isFalse(titleDIY))title = titleDIY;
		if(!ObjectUtil.isFalse(urlDIY))url = urlDIY;
		
		query = this.queryAddShareInfo(title,url,query);

		platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);

		// platform.onShow((res)=>{
		// 	platform.replayAudio();			
		// 	var nowTime = egret.getTimer().valueOf();
		// 	if((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime ){
		// 		if(Math.random() >= AppConfig.shareRandomValue){
		// 			egret.setTimeout(()=>{
		// 				platform.offShow(null);			
		// 				if(sucCallback)sucCallback();
		// 			},this,200);
		// 		}else{
		// 			//概率只骗一次
		// 			platform.offShow(null);			
		// 			platform.onShow(this.onRandomFailOnShow(sucCallback));	
		// 			egret.setTimeout(()=>{
		// 				this.shareTime = egret.getTimer().valueOf();
		// 				platform.showModal("","请每次分享到不同群.","确定",false,()=>{
		// 					platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
		// 				});
		// 				// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
		// 				// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
		// 				// }));
		// 			},this,500);
		// 		}
		// 	}else{
		// 		this.shareTime = egret.getTimer().valueOf();
		// 		platform.showModal("","请每次分享到不同群!","确定",false,()=>{
		// 			platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
		// 		});
		// 		// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
		// 		// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
		// 		// }));
		// 	}
		// 	(WechatManager.getInstance() as WechatManager).doOnShow();			
		// });
	}
	
	/** 
	 * 分享策略1
	 * @param query {inviteid:"",invitetype:1}
	 */
	public static randomShareAppMessage(sucCallback:Function,query:any = null){
		this.shareTime = egret.getTimer().valueOf();		
		var title = "";
		var url = "";
		var randomShare = [];
		if(this.shareJson){
			for(var index in this.shareJson){
				var data = this.shareJson[index];
				if(data.group == this.currentGroup){
					randomShare.push(data);
				}
			}
		}
		if(randomShare.length > 0){
			var random = RandomUitl.randomInt(0,randomShare.length - 1);
			var data = randomShare[random];
			if(data){
				title = data.title;
				url = data.url;
			}
		}
		
		query = this.queryAddShareInfo(title,url,query);		
		//重置分享组
		this.currentGroup = 1;
		this.callback = (b)=>{
			egret.setTimeout(()=>{
				if(ShareConstant.shareCancel){
					platform.showModal("","您取消分享,是否继续分享?","确定",true,(res)=>{
						if (res.confirm) {
							console.log('用户点击确定');
							ShareConstant.shareId = RandomUitl.randomInt(10000,20000);
							query['shareValue'] = ShareConstant.shareId;
							platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});
						} else if (res.cancel) {
							console.log('用户点击取消');
							ControllAlert.show("您取消了分享");
						}
					});
				}else{
					if(ShareConstant.cheating > 1){
						if(sucCallback)sucCallback(true);
					}else{
						if(b){
							if(sucCallback)sucCallback(true);					
						}else{
							platform.showModal("","分享失败,是否继续分享?","确定",true,(res)=>{
								if (res.confirm) {
									console.log('用户点击确定');
									ShareConstant.shareId = RandomUitl.randomInt(10000,20000);
									query['shareValue'] = ShareConstant.shareId;
									platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});
								} else if (res.cancel) {
									if(sucCallback)sucCallback(false);	
									console.log('用户点击取消');
									ControllAlert.show("您取消了分享");
								}
							});
						}
					}
				}
				ShareConstant.shareCancel = false;
			},this,100);
		}
		ShareConstant.shareId = RandomUitl.randomInt(10000,20000);
		query['shareValue'] = ShareConstant.shareId;
		platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});
		
		// let offShow:Function = ()=>{
		// 	platform.onShow((res)=>{
		// 		platform.replayAudio();			
		// 		var nowTime = egret.getTimer().valueOf();
		// 		if((nowTime - ShareConstant.shareTime) >= AppConfig.shareWaittime ){
		// 			if(Math.random() >= AppConfig.shareRandomValue){
		// 				egret.setTimeout(()=>{
		// 					platform.offShow(null);			
		// 					if(sucCallback)sucCallback();
		// 				},this,200);
		// 			}else{
		// 				//概率只骗一次
		// 				platform.offShow(null);			
		// 				platform.onShow(this.onRandomFailOnShow(sucCallback));	
		// 				egret.setTimeout(()=>{
		// 					this.shareTime = egret.getTimer().valueOf();
		// 					platform.showModal("","请每次分享到不同群","确定",false,()=>{
		// 						platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
		// 					});
		// 					// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
		// 					// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
		// 					// }));
		// 				},this,500);
		// 			}
		// 		}else{
		// 			this.shareTime = egret.getTimer().valueOf();
		// 			platform.showModal("","请每次分享到不同群","确定",false,()=>{
		// 				platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
		// 			});
		// 			// Alert.alert(new ShareNotice("分享失败","请每次分享到不同群",true).setCallBack(()=>{
		// 			// 	platform.shareAppMessage(title,url,this.getQuery(query),null,null);
		// 			// }));
		// 		}
		// 		(WechatManager.getInstance() as WechatManager).doOnShow();			
		// 	});

		// };
		// platform.offShow(offShow);	
		
	}
	private static onRandomFailOnShow(sucCallback){
		return ()=>{
			if(sucCallback)sucCallback();
			platform.offShow(null);			
			(WechatManager.getInstance() as WechatManager).doOnShow();					
		}
	}
	/** 
	 * 分享策略2
	 * @param query {inviteid:"",invitetype:1}
	 */
	public static randomShareAppMessage2(sucCallback:Function,query:any = null,tipsText:string = ""){
		this.shareTime = egret.getTimer().valueOf();		
		
		var title = "";
		var url = "";
		var randomShare = [];
		if(this.shareJson){
			for(var index in this.shareJson){
				var data = this.shareJson[index];
				if(data.group == this.currentGroup){
					randomShare.push(data);
				}
			}
		}
		if(randomShare.length > 0){
			var random = RandomUitl.randomInt(0,randomShare.length - 1);
			var data = randomShare[random];
			if(data){
				title = data.title;
				url = data.url;
			}
		}
		
		query = this.queryAddShareInfo(title,url,query);
		
		//重置分享组
		this.currentGroup = 1;
		this.callback = (b)=>{
			egret.setTimeout(()=>{
				if(ShareConstant.shareCancel){
					platform.showModal("","您取消分享,是否继续分享?","确定",true,(res)=>{
						if (res.confirm) {
							console.log('用户点击确定');
							ShareConstant.shareId = RandomUitl.randomInt(10000,20000) * -1;
							query['shareValue'] = ShareConstant.shareId;
							platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});
						} else if (res.cancel) {
							console.log('用户点击取消');
							ControllAlert.show("您取消了分享");
						}
					});
				}else{
					if(b){
						if(sucCallback)sucCallback(true);					
					}else{
						platform.showModal("","分享失败,是否继续分享?","确定",true,(res)=>{
							if (res.confirm) {
								console.log('用户点击确定');
								ShareConstant.shareId = RandomUitl.randomInt(10000,20000) * -1;
								query['shareValue'] = ShareConstant.shareId;
								platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});
							} else if (res.cancel) {
								console.log('用户点击取消');
								ControllAlert.show("您取消了分享");
							}
						});
					}
				}
				ShareConstant.shareCancel = false;
			},this,100);
		}
		ShareConstant.shareId = RandomUitl.randomInt(10000,20000) * -1;
		query['shareValue'] = ShareConstant.shareId;
		platform.shareAppMessage(title,url,this.getQuery(query),null,null,e=>{ShareConstant.shareCancel = true;});

		// platform.offShow(null);		
		// platform.onShow((res)=>{
		// 	platform.replayAudio();			
		// 	var query = res.query;
		// 	console.log('ShARE_BACK_WXGAME:'+JSON.stringify(res));
		// 	console.log(query.shareValue == this.shareId);
			
		// 	if(query && query.shareValue && query.shareValue == this.shareId && res.shareTicket){
		// 		platform.getShareInfo({
		// 			shareTicket: res.shareTicket,
		// 			success: (data) => {
		// 				var e = data.encryptedData;
		// 				var i = data.iv;
		// 				TaskApi.shareGroup(e,i,(data)=>{
		// 					if(data.ret == 0){								
		// 						egret.setTimeout(()=>{
		// 							if(sucCallback)sucCallback();
		// 						},this,200);
		// 					}else{
		// 						platform.showModal("","请分享到其他群(30分钟内相同群无法获得奖励)","确定",false,()=>{});
		// 						// Alert.alert(new ShareNotice("分享失败","请分享到其他群\n(30分钟内相同群无法获得奖励)"));	
		// 					}
		// 				})
		// 			}
		// 		});
		// 		ShareConstant.shareId = 0;
		// 		platform.offShow(null);
		// 		(WechatManager.getInstance() as WechatManager).doOnShow();
		// 	}else if(query && query.shareValue && query.shareValue == this.shareId ){
		// 		Alert.closeAlert();
		// 		platform.showModal("","请每次分享到不同群","确定",false,()=>{});				
		// 		// egret.setTimeout(()=>{
		// 		// 	Alert.alert(new ShareNotice("分享失败","请每次分享到不同群"));		
		// 		// },this,200);
		// 	}else{
				
		// 		//通知分享完成
		// 		if(complete){
		// 			platform.showModal("",tipsText,"确定",false,()=>{});				
		// 			// egret.setTimeout(()=>{
		// 			// 	Alert.alert(new ShareNotice("分享成功",tipsText));	
		// 			// },this,200);
		// 			// var nowTime = egret.getTimer().valueOf();
		// 			// if((nowTime - ShareConstant.shareTime) >= 2000 ){
		// 			// 	if(Math.random() < 0.85){
		// 			// 		complete.apply(this);					
		// 			// 	}else{
		// 			// 		egret.setTimeout(()=>{
		// 			// 			Alert.alert(new ShareNotice("分享失败","请分享到不同群再试"));	
		// 			// 		},this,500);
		// 			// 	}
		// 			// }else{
		// 			// 	Alert.alert(new ShareNotice("分享失败","需要分享到微信群才能获得"));	
						
		// 			// }
		// 		}else{
		// 			if(tipsText == "")tipsText = "进群点击自己的链接即可获得"
		// 			platform.showModal("",tipsText,"确定",false,()=>{});									
		// 			// Alert.alert(new ShareNotice("分享到群",tipsText));
		// 		}
		// 	}
		// });

	}
	public static onlyShare(currentGroup:number){
		this.currentGroup = currentGroup;
		var title = "";
		var url = "";
		var randomShare = [];
		if(this.shareJson){
			for(var index in this.shareJson){
				var data = this.shareJson[index];
				if(data.group == this.currentGroup){
					randomShare.push(data);
				}
			}
		}
		if(randomShare.length > 0){
			var random = RandomUitl.randomInt(0,randomShare.length - 1);
			var data = randomShare[random];
			if(data){
				title = data.title;
				url = data.url;
			}
		}
		var query = {};
		query["inviteid"] = AccountData.uid();
		query['invitetype'] = 3;
		query = this.queryAddShareInfo(title,url,query);		

		platform.shareAppMessage(title,url,this.getQuery(query),null,null,null);
		//重置分享组
		this.currentGroup = 1;
	}
	public static randomTitleAndUrl(){
		var title = "";
		var url = "";
		var randomShare = [];
		if(this.shareJson){
			for(var index in this.shareJson){
				var data = this.shareJson[index];
				if(data.group == 1){
					randomShare.push(data);
				}
			}
		}
		if(randomShare.length > 0){
			var random = RandomUitl.randomInt(0,randomShare.length - 1);
			var data = randomShare[random];
			if(data){
				title = data.title;
				url = data.url;
			}
		}
		var query = {};
		query['title'] = title;
		query['imageUrl'] = url;
		query["sendOpenid"] = AccountData.getOpenId();
		return {title:title,imageUrl:url,query:query};
	}


	//分享到群
	public static shareToGroup(callback: Function,thisObj:any,checkGroup:boolean = false,tipsText:string = "",complete:Function = null,invitetype:Number = 3) {
		var sharedata = ShareData.updateShareCount();
		var count = sharedata ?sharedata.count:0;
		// let data = AdData.getAdCount();
		// let timestamp = AccountData.serverTime() + egret.getTimer();
		// if((!data || timestamp - data.gettime > 1000 * 60 * 2 || AppConfig.adCount >= data.count) && AppConfig.model == 1 && this.currentGroup == 1){//特殊邀请分享口子，不做此判断(拉新人)
		// 	AdConstant.lookRewardAd(result=>{
		// 		AdData.updateAdCount();
		// 		if(callback)callback.apply(thisObj,[result]);
		// 	},this);
		// 	return;
		// }
		//邀请上线
		var query = {};
		query["inviteid"] = RoleData.getRole().uid;
		query['invitetype'] = invitetype;
		if(!checkGroup){//AppConfig.shareCount >= count && 
			ShareConstant.randomShareAppMessage((res) => {
				//重置内部回调
				ShareConstant.callback = null;
				ShareConstant.cheating = 0;
				if(callback)callback.apply(thisObj, [res]);
			},query);
		}else{
			ShareConstant.randomShareAppMessage2((res) => {
				//重置内部回调
				ShareConstant.callback = null;
				ShareConstant.cheating = 0;				
				if(callback)callback.apply(thisObj, [res]);
			},query,tipsText);
		}
		
	}
}
window["ShareConstant"] = ShareConstant;