class AppConfig {
	public static login_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/login.action";
	public static update_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/update.action";
	public static share_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/share.action";
	public static inviteList_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/getinvitelist.action";//每日上线
	public static invite_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/getinvitelistall.action";//新人
	public static inviteLingqu_url:string = "https://wxgame.chiji-h5.com/wxgs_hcjj/invite.action";//领取		
	/** 游戏配置路径 */
	//(线上是config1)
    public static appConfigUrl:string = "https://jsonconfig.chiji-h5.com/json/hcjj/appConfig2.json";
	public static shareConfigUrl:string = "https://jsonconfig.chiji-h5.com/json/hcjj/share.json";
	public static likesConfigUrl:string = "https://jsonconfig.chiji-h5.com/json/wddx/favlist.json";
	public static otherGameConfigUrl:string = "https://jsonconfig.chiji-h5.com/json/wddx/gamelist.json";
	// public static appConfigUrl:string = "https://jsonconfig.chiji-h5.com/ddz/ddzAppConfig_test.json";
	/** 外部资源下载根路径 */
	public static server_root_path:string = "https://www.chiji-h5.com/ddhz/pdk_res/";
	/** 外部资源保存根路径 */
	public static native_file_path:string = "";
	public static res_version:string = "";
	public static app_version:string = "v1.0.0";
	public static max_share_reward_count:number = 10;
	public static isLocal:boolean = false;

	public static appid:string = "wxfbca77fbae5ff115";	
	/** 普通分享次数 */
	public static shareCount:number = 199;	
	/** 分享等待毫秒 不足算分享不成功 */
	public static shareWaittime:number = 2500;
	/** 分享概率 不足算分享不成功 */
	public static shareRandomValue:number = 0.15;		
	/** 钻石不足，限制次数 */
	public static jewel_limitCount:number = 50;
	/** 金币不足，限制次数 */
	public static jinbi_limitCount:number = 50;
	/** 邀请好友开关 */
	public static invite_haoyou:boolean = false;
	/** 邀请新人加速开关 */
	public static invite_xinren:boolean = false;
	/** 钻石、金币不足奖励 */
	public static notEnough_reward:string = "ad";
	/** 增加转盘券 */
	public static addQuan_zhanpan:string = "ad";
	/** 离线分享奖励 */
	public static Lixian_share:string = "ad";
	/** 解锁角色奖励 */
	public static unlock_reward:string = "ad";
	/** 宝箱奖励 */
	public static baoxiang_reward:string = "ad";
	/** 加速180s */
	public static speedup_180seconds:string = "ad";
	/** 7天签到 */
	public static sevenSign_lingqu:string = "ad";
	/** 猜你喜欢开关 */
	public static favlist_luck:boolean = true;
	//是否使用sdk猜你喜欢
	public static sdk_favlist:boolean = false;
	/** 抽屉页开关 */
	public static gamelist_luck:boolean = true;
	//是否使用sdk抽屉页
	public static sdk_gamelist:boolean = false;
	/** 悬浮页开关 */
	public static suspension_luck:boolean = true;
	//是否使用sdk悬浮页
	public static sdk_suspension:boolean = false;
	public static mp_path:any = {appid:"",path:""};
	/** channel过滤列表 */
	public static channelList_luck:string[] = [];
}