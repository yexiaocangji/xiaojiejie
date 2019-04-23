class DataCenter {
	/** 数据打包并发送给服务器 */
	public static packData(){
		var udata = {};
		udata["role"] = RoleData.getRole();
		udata["players"] = PlayerData.getPlayers();
		udata["positions"] = PositionData.getPositions();
		udata["currentSpeedState"] = SpeedupData.getSpeedup();
		udata["speedupCount"] = SpeedupData.getSpeedupCount();
		udata["zhuanPanQuanCount"] = ZhuanPanData.getZhuanPanQuanCount();
		udata["currentZhuanCount"] = ZhuanPanData.getZhuanPan();
		udata["inviteTaskFinish"] = InviteData.getInviteTaskfinishId();
		udata["guideOption"] = GuideData.currentOpt();
		udata["randomBox"] = RandomBoxData.getRandomBox();
		udata["NotEnoughData"] = NotEnoughData.getNotEnoughData();
		udata["sevenDaySignData"] = SevenDaySignData.getSignData();

		GameApi.updateData(udata,()=>{ console.log("服务器数据发送成功！");})
	}
	/** 数据解包并缓存 */
	public static unpackData(udataStr:any){
		var udata = null;
		try{
			udata = JSON.parse(udataStr);
		}catch(e){
			console.log("udataStr:"+udataStr,e);
		}
		if(!udata)udata = {};
		if(udata.role)RoleData.putRole(udata.role);else{
			var role =new Role();
			RoleData.putRole(role);	
			//新玩家
			GuideData.putCurrentOpt(1);	
		}
		if(udata.players)PlayerData.putPlayers(udata.players);
		if(udata.positions)PositionData.putPositions(udata.positions);
		if(udata.currentSpeedState)SpeedupData.putSpeedup(udata.currentSpeedState);
		if(udata.speedupCount)SpeedupData.putSpeedupCount(udata.speedupCount);
		if(udata.zhuanPanQuanCount)ZhuanPanData.putZhuanPanQuanCount(udata.zhuanPanQuanCount);
		if(udata.currentZhuanCount)ZhuanPanData.putZhuanPan(udata.currentZhuanCount);
		InviteData.setInviteTaskfinishId(udata.inviteTaskFinish);
		if(udata.guideOption)GuideData.putCurrentOpt(udata.guideOption);else{
			GuideData.putCurrentOpt(1);
		}
		if(udata.randomBox)RandomBoxData.putRandomBox(udata.randomBox);
		if(udata.NotEnoughData)NotEnoughData.putNotEnoughData(udata.NotEnoughData);
		if(udata.sevenDaySignData)SevenDaySignData.putSignData(udata.sevenDaySignData);
	}
}