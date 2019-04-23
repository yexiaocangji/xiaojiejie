/** 邀请好友信息 */
class InviteData extends CacheData{
	/** 拉好友注册 */
	public static getInviteSgin(){
		return this.getRAMData("InviteSginData");
	}
	public static putInviteSgin(data:any){
		this.saveRAMData("InviteSginData",data);
	}
	/** 拉好友上线 */
	public static getInviteList(){
		return this.getRAMData("InviteListData");
	}
	public static putInviteList(list:any){
		this.saveRAMData("InviteListData",list);
	}

	/** 邀请有礼领取情况 type:1 邀请上线  2邀请新人  */  
	public static getInviteTaskfinishId():any{
		return this.getRAMData("InviteTaskfinishId");
	}
	public static getInviteTaskfinishByType(type:string):InviteFinish{
		var finishs = this.getInviteTaskfinishId();
		var data = finishs ? finishs[type]:null;
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		if(data && data.date != currentDate)data = null;
		return data;
	}
	/** 更新领取 */
	public static updateInviteTaskFinishId(type:string){
		var finishs = this.getInviteTaskfinishId();
		var data = finishs ? finishs[type]:null;
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		if(!data){
			data = {date:currentDate,count:1,type:type};
		}else{
			if(data.date != currentDate){
				data = {date:currentDate,count:1,type:type};	
			}else{
				data.count++;
			}
		}
		if(!finishs)finishs={};
		finishs[type] = data;
		this.saveRAMData("InviteTaskfinishId",finishs);
	}
	/** 检测领取 */
/*	public static checkisFinish(lingquCount:number){
		var data = this.getInviteTaskfinishId();
		if(!data)return false;
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		if(data.date != currentDate){
			this.saveRAMData("InviteTaskfinishId",null);
			return false;
		}
		var count = data.count;
		return count-lingquCount;
		//return ArrayUtil.contains(ids,id);
	}*/
	/** 登陆保存 */
	public static setInviteTaskfinishId(data:any){
		// var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		// var currentDate = DateTool.makeTime(timestamp);
		// if(data && data.date != currentDate)data = null;
		this.saveRAMData("InviteTaskfinishId",data);		
	}
	/** 
	 * 五分钟伤害翻倍状态
	 * @param times 倍数
	 */
/*	public static updateMinutes5State(times:number){
		var data = this.getInviteTaskfinishId();
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		var currentDate = DateTool.makeTime(timestamp);
		//初始化
		if(!data)data = {date:currentDate,ids:[],minutes5:null};
		if(data.date != currentDate){
			data = {date:currentDate,ids:[],minutes5:null};	
		}
		//更新
		if(!data.minutes5){
			//没有效果
			data.minutes5 = {time:(timestamp + 60 * 2 * 1000),times:times};
		}else{
			//判断效果是否失效
			if(data.minutes5.time <= timestamp){
				data.minutes5 = {time:(timestamp + 60 * 2 * 1000),times:times};
			}
		}
		this.saveRAMData("InviteTaskfinishId",data);				
	}
	public static isMinutes5(){
		var data = this.getInviteTaskfinishId();
		var timestamp = AccountData.serverTime() + egret.getTimer();
		if(!data || !data.minutes5 || timestamp > data.minutes5.time){
			return false;
		}else{
			return true;
		}
	}*/

}