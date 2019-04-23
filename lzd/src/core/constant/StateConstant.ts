/**
 * 状态信息
 */
class StateConstant {
	public static STATE_SUCCESS = 0;
	public static stateKeyValue:any = {
		"-1":"参数不足",
		"-2":"非法接口",
		"-3":"非法API",
		"-4":"参数非法或重复操作",
		"-5":"未登录",
		"-6":"已经在房间中",
		"-7":"开房次数不足",
		"-8":"房间号错误",
		"-9":"房间已满",
		"-10":"已经准备过",
		"-11":"不是当前操作者",
		"-12":"手牌不足",
		"-13":"出牌小了",
		"-14":"一轮结束",
		"-15":"用户不存在",
		"-16":"任务不存在",
		"-17":"奖励已领取",
		"-18":"奖励条件不满足",
		"-19":"匹配中",
		"-20":"余额不足",
		"-21":"充值订单失败",
		"-22":"订单不存在",
		"-23":"红包已被领取"
	};
	
	public static getShow(state:number){
		if(this.stateKeyValue[state] != null){
			return this.stateKeyValue[state];
		}
		return '';
	}
}