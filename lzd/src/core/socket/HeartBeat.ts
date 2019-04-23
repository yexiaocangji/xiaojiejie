/** 
 * 
 * 网络通信心跳包
 */
class HeartBeat {
	public static intervaltime:number = 60000;
	private static timer:egret.Timer;
	public static startHeart(){
		if(this.timer == null){
			this.timer = new egret.Timer(this.intervaltime,0);
		}
		if(!this.timer.hasEventListener(egret.TimerEvent.TIMER)){
			this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimerFun,this);
		}
		this.timer.delay = this.intervaltime;
		this.timer.reset();
		this.timer.start();
	}
	private static onTimerFun(e:egret.TimerEvent){
		// MatchApi.syncPassCount(data=>{
		// 	MatchData.putPassCount(data);
		// 	BloodMatchData.putPassCount(data);			
		// 	egret.log("heartbeat");			
		// });
		// egret.setTimeout(()=>{
		// 	BloodMatchApi.syncPassCount((data)=>{
		// 		BloodMatchData.putPassCount(data);
		// 		egret.log("heartbeat blood");	
		// 	});
		// },this,2000);
		// RoleApi.syncCard((data)=>{
		// 	egret.log("heartbeat");
		// });
		DataCenter.packData();
	}
	public static stopHeart(){
		if(this.timer != null){
			this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimerFun,this);
		}
	}
}