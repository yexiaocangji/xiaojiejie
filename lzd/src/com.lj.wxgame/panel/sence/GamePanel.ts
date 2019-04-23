/** 
 * 游戏主逻辑UI 
 * */
class GamePanel extends BasePanel {
	public backBtn: MyButton;
	public phbBtn: MyButton;
	public lingzuanBtn: MyButton;
	public creatBtn: MyButton;
	public shopBtn: MyButton;
	public howBtn: MyButton;
	public speedBtn: MyButton;
	public zhuanpanBtn: MyButton;
	public randomBoxBtn: MyButton;
	public checkInBtn: MyButton;
	//public boxBtn: MyButton;
	public timeLabel: eui.Label;
	public speed_hd: eui.Image;//加速按钮上红点
	public shop_hd: eui.Image;//商店按钮上红点

	public typeBtn1: ToggleBtn;
	public typeBtn2: ToggleBtn;
	public typeBtn3: ToggleBtn;

	public huishou: eui.Image;
	public xjjContainer: eui.Group;
	public top: eui.Group;
	public middleGroup: eui.Group;
	public bottom1: eui.Group;

	public totalGold: eui.Label;   //总金币数
	public totalDiamond: eui.Label;   //总钻石数
	public secGold: eui.Label;	  //每秒的金币产量		
	public creatBtn_gold: eui.Label;		//主界面购买金币花费
	public creatBtn_level: eui.Label;     //主界面可购买等级
	public buildGold: number;
	public buildCount: number = 1;
	public gold = new Decimal(100000);
	public secgold = new Decimal(0);
	public jewel = new Decimal(1000);
	public touchStatus: boolean = false; //当前触摸状态，按下时，值为true
	public speedUp = 1;
	private xjjCount: number = 12;
	public hesuanLevelId: string;
	public hesuanLevelGold;


	//public hitSpeedBtn: MyButton;
	public constructor() {
		super();
	}

	public initialize() {
		this.creatBtn_gold = (<eui.Label>this.creatBtn.getChildAt(2));
		this.creatBtn_level = (<eui.Label>this.creatBtn.getChildAt(3));
		//this.boxBtn.visible = false;
		this.initHeSuanGold();
		this.initXjj();
		this.initTypeBtn();
		this.start();
		this.initLixianPanel();
		this.stage.addEventListener(GameEvent.GAME_SHOPBUYXJJ_EVENT, this.onShopBuyXjj, this);
		this.stage.addEventListener(GameEvent.GAME_SPEEDUP_EVENT, this.onSpeedUp, this);
		if (this.backBtn) this.backBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBackBtn, this);
		if (this.phbBtn) this.phbBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onPhbBtn, this);
		if (this.shopBtn) this.shopBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShopBtn, this);
		if (this.howBtn) this.howBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHowBtn, this);
		if (this.lingzuanBtn) this.lingzuanBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onInviteBtn, this);
		if (this.creatBtn) this.creatBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCreatBtn, this);
		if (this.speedBtn) this.speedBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onSpeedBtn, this);
		//if (this.hitSpeedBtn) this.hitSpeedBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHitSpeedBtn, this);
		if (this.zhuanpanBtn) this.zhuanpanBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onZhuanpanBtn, this);
		if (this.zhuanpanBtn) {
			var zhuanImg: eui.Image = this.zhuanpanBtn.getChildAt(0) as eui.Image;
			if (zhuanImg) egret.Tween.get(zhuanImg, { loop: true }).wait(500).to({ rotation: 360 }, 650, egret.Ease.sineIn);
		}
		//签到   
		if (this.checkInBtn) {
			this.checkInBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCheckInBtn, this);
			//判断今日是否领取过签到奖励
			var data = SevenDaySignData.getSignData();
			//已经领取的次数
			var count: number = data ? data.count : 0;
			var lastGetTime = data ? data.timestamp : 0;
			var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
			if (count >= 7 && DateTool.makeTime(lastGetTime) != DateTool.makeTime(timestamp)) {
				//七天之后，重置签到
				SevenDaySignData.putSignData(null);
			}
		}
		if (this.randomBoxBtn) {
			egret.Tween.get(this.randomBoxBtn, { loop: true }).to({ rotation: 30 }, 200).to({ rotation: -30 }, 400).to({ rotation: 0 }, 200).wait(1500);
			this.randomBoxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRandomBoxBtn, this);
		}
		//if (this.boxBtn) this.boxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBoxBtn, this);
		if (this.xjjContainer) this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
		if (this.xjjContainer) this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
		if (this.xjjContainer) this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_END, this.onJJBtnEnd, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrameGold, this);

		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间
		this.currentTime = timestamp;

		//获取小程序启动信息，判断是否进入排行榜
		WechatManager.getInstance().doLunchOption();
		WechatManager.getInstance().doOnShow();
		//更新微信云托管数据
		var role: Role = RoleData.getRole();
		platform.setUserCloudStorage([{ 'key': 'gold', 'value': role ? StringUtil.decimalFormat(role.gold) + "" : "0" }]);
		this.refreshGuide();
		this.guideXjj();
		this.stage.maxTouches = 1;

	}

	private currentTime: number = 0;
	private lastTime: number = 0;
	private randomBoxPosid;  //宝箱位置
	private XjjModel_box;  //宝箱所在小姐姐位置
	private boxLastTime: number = 0;
	private boxCurrentTime: number = 0;
	private boxPosLastTime: number = 0;
	private onTick(timeStamp: number): boolean {
		/*var begin =egret.getTimer().valueOf();*/
		var boxArr = [];
		this.currentTime += (timeStamp - this.lastTime);
		this.lastTime = timeStamp;

		this.boxCurrentTime += (timeStamp - this.boxLastTime);
		this.boxLastTime = timeStamp;
		var positions_current = PositionData.getPositionsById(StaticConstant.CurrentType);
		var shouyiValue = GameConstant.getAllShouYiValue();
		this.secgold = shouyiValue;
		for (var posid in positions_current) {
			var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
			if (position.playerid == "") {
				boxArr.push(Number(posid));
				continue;
			}

			// var player = PlayerData.getPlayerById(position.playerid);
			var config = ConfigData.getPlayerById(position.playerid);
			var XjjModel = this.xjjContainer.getChildAt(Number(position.posid)) as XjjModel;
			if (XjjModel.type && (position.lastTime + (Number(config.shengchantime) / this.speedUp)) < this.currentTime) {
				//计算收益
				var role: Role = RoleData.getRole();
				role.gold = role.gold.add(config.addgoldvalue);
				RoleData.putRole(role);
				// this.gold = this.gold.add(config.addgoldvalue);
				//播放金币总数动画
				this.totalGoldAnim();
				//播放人物变大缩小动画
				XjjModel.animScale();
				//播放收益值动画
				XjjModel.animShouyi();
				//更新上次时间
				position.lastTime = this.currentTime;
				PositionData.updatePosition(position.posid, position, StaticConstant.CurrentType);
			}
			/*			if (config.lixianshouyi) {
							shouyiValue = shouyiValue.add(config.lixianshouyi);
							this.secgold = shouyiValue;
						}*/
		}
		//30s产生一个宝箱
		// if (boxArr.length >= 1 && !this.boxBtn.visible && (this.boxPosLastTime + 30000) < this.boxCurrentTime) {
		// 	var randomBoxIndex = RandomUitl.randomInt(0, boxArr.length - 1);
		// 	this.randomBoxPosid = boxArr[randomBoxIndex];
		// 	this.XjjModel_box = this.xjjContainer.getChildAt(this.randomBoxPosid) as XjjModel;
		// 	this.boxBtn.x = this.XjjModel_box.x + 45;
		// 	this.boxBtn.y = this.XjjModel_box.y + 95;
		// 	this.boxBtn.visible = true;

		// 	var position = PositionData.getPositionById(this.randomBoxPosid, StaticConstant.CurrentType);
		// 	position.isHasBox = true;
		// 	PositionData.updatePosition(this.randomBoxPosid, position, StaticConstant.CurrentType);
		// 	console.log("随机一个位置" + this.randomBoxPosid);
		// }

		/*	var end = egret.getTimer().valueOf();
			console.log("------------:"+(end-begin));*/
		return false;
	}

	public onBoxBtn() {
		var minLevel = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType).minBuyLevel;
		var minLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, minLevel);       //获取可购买最低等级小姐姐id
		var boxPoaition = PositionData.getPositionById(this.randomBoxPosid + "", StaticConstant.CurrentType);     //获取宝箱位置的小姐姐数据
		this.XjjModel_box = this.xjjContainer.getChildAt(this.randomBoxPosid) as XjjModel;
		boxPoaition.playerid = minLevelId;
		//boxPoaition.isHasBox = false;
		PositionData.updatePosition(this.randomBoxPosid + "", boxPoaition, StaticConstant.CurrentType);
		this.XjjModel_box.type = boxPoaition.playerid;
		this.XjjModel_box.visible = true;
		//this.boxBtn.visible = false;

		this.boxPosLastTime = this.boxCurrentTime;
	}

	// public onHitSpeedBtn() {
	// 	var positions_current = PositionData.getPositionsById(StaticConstant.CurrentType);
	// 	for (var posid in positions_current) {
	// 		var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
	// 		if (position.playerid == "") continue;
	// 		var config = ConfigData.getPlayerById(position.playerid);
	// 		var XjjModel = this.xjjContainer.getChildAt(Number(position.posid)) as XjjModel;
	// 		if (XjjModel.type) {
	// 			//计算收益
	// 			var role: Role = RoleData.getRole();
	// 			role.gold = role.gold.add(config.addgoldvalue);
	// 			RoleData.putRole(role);
	// 			//播放飘金币动画
	// 			XjjModel.animGold();
	// 		}
	// 	}
	// }

	public start() {
		egret.startTick(this.onTick, this);
	}

	public stop() {
		egret.stopTick(this.onTick, this);
	}

	public initLixianPanel() {
		var offlineTime = AccountData.getOffLine();//获取离线时间
		var shouyiValue = GameConstant.getAllShouYiValue();   //离线收益
		/*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
				for (var posid in positions) {
					var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
					if (position.playerid == "") continue;
					var config = ConfigData.getPlayerById(position.playerid);
					shouyiValue = shouyiValue.add(config.lixianshouyi);
				}*/
		var guide = GuideData.currentOpt();
		if (shouyiValue.comparedTo(0) == 1 && offlineTime >= 10 && guide >= 5) {//新手引导不跳离线奖励
			Alert.alert(new LixianPanel());
		}
	}
	public refreshGuide() {
		var guide = GuideData.currentOpt();
		if (guide == 1) {
			(GuideManager.getInstance() as GuideManager).show(this.creatBtn, this.creatBtn.parent, "点击招募你的第一个角色")
			DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "guide", "guidestart", ""))
		}
		if (guide == 3) {
			(GuideManager.getInstance() as GuideManager).show(this.creatBtn, this.creatBtn.parent, "点击这里可以继续招募小姐姐")
		}
		if (guide == 4) {
			(GuideManager.getInstance() as GuideManager).show(this.creatBtn, this.creatBtn.parent, "小姐姐越多赚钱越多")
		}
	}
	public guideXjj() {
		var guide = GuideData.currentOpt();
		if (guide == 2) {
			var XjjModel = this.xjjContainer.getChildAt(0) as XjjModel;//是哪个位置的图
			var rect = new egret.Rectangle(XjjModel.x, XjjModel.y, XjjModel.width * 2.4, XjjModel.height * 1.2);
			(GuideManager.getInstance() as GuideManager).show(XjjModel, XjjModel.parent, "拖动合成更漂亮的小姐姐", rect, 2);
			XjjModel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
		}
	}
	public onGuideXjjTouch(e: egret.TouchEvent) {
		//把坐标转换到xjjConstainer
		// var point = this.xjjContainer.globalToLocal(e.stageX,e.stageY);
		// this.onJJBtnBegin(new egret.TouchEvent("",true,true,point.x,point.y));
		this.onJJBtnBegin(e);
	}

	private randomBoxState: boolean = true;
	private boxTime: number = 61;
	private currentframe: number = 0;
	public onFrameGold() {
		this.currentframe++;
		if (this.currentframe >= 60) {
			this.currentframe = 0;
			//过了一秒
			if (this.boxTime > 0 && this.boxTime <= 60) this.boxTime--;
		}
		var role: Role = RoleData.getRole();
		this.totalGold.text = StringUtil.decimalFormat(role.gold);  //总金币数量显示
		this.totalDiamond.text = StringUtil.goldNumber2String(role.jewel);  //总钻石数量显示	
		this.secGold.text = StringUtil.decimalFormat(this.secgold) + "/秒";    //每秒离线收益

		//随机宝箱倒计时
		var data = RandomBoxData.getRandomBox();  //获取次数

		if (data && data.count >= 50) {
			this.randomBoxBtn.visible = false;
			this.timeLabel.visible = false;
		} else {
			this.randomBoxBtn.visible = true;
			this.timeLabel.visible = true;
			if (this.boxTime > 60) { this.boxTime = 60 }
			if (this.boxTime == 0) {
				this.timeLabel.text = "可领取";
			} else this.timeLabel.text = "00:00:" + (this.boxTime >= 10 ? "" + this.boxTime : ("0" + this.boxTime))
			if (this.boxTime > 0 && this.boxTime <= 60) {
				// this.randomBoxBtn.setEnable(false);
			} else {
				this.randomBoxBtn.setEnable(true);
			}

		}

	}

	public initHeSuanGold() {
		//获取当前最合算小姐姐购买的金币和等级
		var hesuanLevel = ShopConstant.buyWhichLevel();
		this.hesuanLevelId = RoleData.getIdByLevel(StaticConstant.CurrentType, hesuanLevel + "");
		var hesuanLevelPlayer = PlayerData.getPlayerById(this.hesuanLevelId);
		this.hesuanLevelGold = RoleData.getBuildGold(this.hesuanLevelId, hesuanLevelPlayer.buyCount_gold);
		this.creatBtn_gold.text = StringUtil.decimalFormat(this.hesuanLevelGold);        //显示造姐姐金币数量
		this.creatBtn_level.text = "LV." + hesuanLevel;        //显示造姐姐的等级
	}
	//显示小姐姐、小哥哥、小宠物
	public initXjj(): void {
		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
		for (var posid in positions) {
			var position = PositionData.getPositionById(posid, StaticConstant.CurrentType);
			var XjjModel = this.xjjContainer.getChildAt(Number(position.posid)) as XjjModel;//是哪个位置的图
			//if (XjjModel.type) continue;
			XjjModel.type = position.playerid;
			// if (position.isHasBox) {
			// 	this.boxBtn.x = XjjModel.x + 45;
			// 	this.boxBtn.y = XjjModel.y + 95;
			// 	this.boxBtn.visible = true;
			// 	this.randomBoxPosid = Number(position.posid);
			// }
			if (XjjModel.type == "") XjjModel.visible = false;
			else XjjModel.visible = true;
		}
	}

	public initTypeBtn() {
		for (var i = 1; i <= 3; i++) {
			var typeBtn = this["typeBtn" + i] as ToggleBtn;
			typeBtn.name = i.toString();
			typeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTypeBtn, this);
		}
		this.setIconStatus();
	}

	public onTypeBtn(e: egret.TouchEvent) {
		var target = <ToggleBtn>e.currentTarget;
		if (target.name) {
			this.setIconStatus(parseInt(target.name), true);
		}
	}

	public setIconStatus(j: number = 1, status: boolean = true) {
		var maxLevel = -1;
		var config = null;
		if (j == 2) {
			config = ShopConstant.getHighestLevelConfig(1);//获取小姐姐最高等级
			if (config) maxLevel = config.level;
			if (maxLevel == -1 || maxLevel < 35) {
				ControllAlert.show("小姐姐等级达到35级后开启"); return;
			} else {
				var positions_xgg = PositionData.getPositionsById(2);
				if (!positions_xgg) {
					for (var i = 0; i < 12; i++) {
						var position = new lzd.vo.Position();
						position.posid = i + "";
						PositionData.updatePosition(position.posid, position, 2);
					}
					var position1 = PositionData.getPositionById("0", 2);
					position1.playerid = "2001";
					PositionData.updatePosition("0", position1, 2);

					var player = new lzd.vo.Player();
					player.id = "2001"
					PlayerData.updatePlayer(player.id, player);
				}
			}
		}
		if (j == 3) {
			config = ShopConstant.getHighestLevelConfig(2);//获取小哥哥最高等级
			if (config) maxLevel = config.level;
			if (maxLevel == -1 || maxLevel < 35) {
				ControllAlert.show("小哥哥等级达到35级后开启"); return;
			} else {
				var positions_xcw = PositionData.getPositionsById(3);
				if (!positions_xcw) {
					for (var i = 0; i < 12; i++) {
						var position = new lzd.vo.Position();
						position.posid = i + "";
						PositionData.updatePosition(position.posid, position, 3);
					}
					var position1 = PositionData.getPositionById("0", 3);
					position1.playerid = "3001";
					PositionData.updatePosition("0", position1, 3);

					var player = new lzd.vo.Player();
					player.id = "3001"
					PlayerData.updatePlayer(player.id, player);
				}
			}
		}
		for (var i = 1; i <= 3; i++) {
			var typeBtn = this["typeBtn" + i] as ToggleBtn;
			if (j == i) {
				for (var k = 1; k <= 3; k++) {
					if (j == k) {
						this.updateTypeGroupData(j);
					} else {
					}
				}
				typeBtn.setStatus(status);
			} else {
				typeBtn.setStatus(!status);
			}
		}
	}

	public updateTypeGroupData(j: number = 1) {
		StaticConstant.CurrentType = j;
		this.initXjj();
		this.initHeSuanGold();
	}

	public onBackBtn(e: egret.TouchEvent) {
		BasePanel.currentPanel.gotoPanel(new StartPanel());
	}
	public onPhbBtn(e: egret.TouchEvent) {
		var rankPanel = new RankPanel();
		rankPanel.shareTicket = e.data ? e.data.shareTicket : null;
		Alert.alert(rankPanel);
	}

	//public createCount: number = 0;
	//点击creat创建小姐姐
	public onCreatBtn() {
		var isCreated: boolean = false;
		var len = this.xjjContainer.numChildren;
		var hesuanLevelPlayer = PlayerData.getPlayerById(this.hesuanLevelId);
		var role = RoleData.getRole();
		if (role.gold.minus(this.hesuanLevelGold) < new Decimal(0)) {
			// ControllAlert.show("金币不足了，看点广告吧"); 
			Alert.alert(new NotEnoughRewardPanel(2));//金币不足
			return;
		}
		for (var i = 0; i < len; i++) {
			var obj = this.xjjContainer.getChildAt(i);
			var position = PositionData.getPositionById(i + "", StaticConstant.CurrentType);
			if (obj instanceof XjjModel && obj.id == "" && !position.isHasBox) {
				role.gold = role.gold.minus(this.hesuanLevelGold);
				RoleData.putRole(role);
				hesuanLevelPlayer.buyCount_gold++;  //购买次数增加1
				PlayerData.updatePlayer(this.hesuanLevelId, hesuanLevelPlayer);
				this.creatXjj(i, obj, this.hesuanLevelId);
				isCreated = true;
				var guide = GuideData.currentOpt();
				if (guide == 1 || guide == 3 || guide == 4) {
					GuideData.updateCurrentOpt();
					(GuideManager.getInstance() as GuideManager).hide()
					this.refreshGuide();
					this.guideXjj();
				}
				return;
			}
		}
		if (!isCreated) {
			ControllAlert.show("没有更多位置了,右上角可回收！");
		}
	}

	public currentSelect: eui.Image;//选中人后创建一张图
	public currentImgX: number;//选中后图的X坐标
	public currentImgY: number;//选中后图的Y坐标
	public currentPos: number;//选中了哪个位置的图
	public currentImgId: string;//选中图片的id
	public currentObj: XjjModel;//选中的图的对象
	//开始点击小姐姐
	public onJJBtnBegin(evt: egret.TouchEvent) {
		if (evt.currentTarget instanceof XjjModel) {
			evt.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
			this.xjjContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
			(GuideManager.getInstance() as GuideManager).hide();
			this.xjjContainer.setChildIndex(evt.currentTarget, 0);
			//新手引导
			this.touchStatus = true;
			//console.log("点到了", evt.currentTarget.type)
			evt.currentTarget.setGray();
			if (!this.currentSelect) this.currentSelect = new eui.Image();
			this.currentSelect.source = evt.currentTarget.xjjImg.source;
			this.currentSelect.width = 140;
			this.currentSelect.height = 190;
			this.currentImgX = evt.currentTarget.x;
			this.currentImgY = evt.currentTarget.y;
			this.currentPos = 0;
			this.currentObj = evt.currentTarget;
			//console.log("currentPos:" + this.currentPos);
			var imgPos = this.xjjContainer.getChildIndex(this.currentSelect);
			this.currentImgId = evt.currentTarget.type;
			this.xjjContainer.addChild(this.currentSelect);
			this.currentSelect.visible = true;
			var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
			this.currentSelect.x = point.x;
			this.currentSelect.y = point.y;
			this.currentSelect.anchorOffsetX = evt.currentTarget.xjjImg.width / 2;
			this.currentSelect.anchorOffsetY = evt.currentTarget.xjjImg.height / 2;
		} else {
			this.xjjContainer.$children.forEach(obj => {
				if (obj instanceof XjjModel) {
					if (obj.hitTestPoint(evt.stageX, evt.stageY) && obj.visible) {
						this.touchStatus = true;
						//console.log("点到了", obj.type)
						obj.setGray();
						if (!this.currentSelect) this.currentSelect = new eui.Image();
						this.currentSelect.source = obj.xjjImg.source;
						this.currentSelect.width = 140;
						this.currentSelect.height = 190;
						this.currentImgX = obj.x;
						this.currentImgY = obj.y;
						this.currentPos = this.xjjContainer.getChildIndex(obj);
						this.currentObj = obj;
						//console.log("currentPos:" + this.currentPos);
						var imgPos = this.xjjContainer.getChildIndex(this.currentSelect);
						this.currentImgId = obj.type;
						this.xjjContainer.addChild(this.currentSelect);
						this.currentSelect.visible = true;
						var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
						this.currentSelect.x = point.x;
						this.currentSelect.y = point.y;
						this.currentSelect.anchorOffsetX = obj.xjjImg.width / 2;
						this.currentSelect.anchorOffsetY = obj.xjjImg.height / 2;
					}
				}
			})
		}
	}
	//移动过程
	private onMouseMove(evt: egret.TouchEvent) {
		if (this.touchStatus) {
			var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
			this.currentSelect.x = point.x;
			this.currentSelect.y = point.y;
		}
	}
	//移动结束事件
	public onJJBtnEnd(evt: egret.TouchEvent) {
		if (this.touchStatus) {
			var len = this.xjjContainer.numChildren;
			var ishitTest: boolean = false;
			for (var i = 0; i < len; i++) {
				var obj = this.xjjContainer.getChildAt(i);
				if (obj instanceof XjjModel) {
					var point = this.xjjContainer.globalToLocal(evt.stageX, evt.stageY);
					if (obj.hitTest(point)) {
						ishitTest = true;
						//碰到原位置小姐姐
						var endPos = i;
						//console.log("endPos:" + endPos);
						var endImgId = obj.type;
						//console.log("endImgId:" + endImgId + ";this.currentImgId:" + this.currentImgId);
						if (this.currentPos == endPos) {
							//console.log("碰到原位置小姐姐");
							egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 100, egret.Ease.backIn)
								.call((o: XjjModel) => {
									this.currentObj.clearGray();
									this.currentSelect.visible = false;
								}, this, [this.currentObj]);
						}//碰到别的位置
						else if (this.currentPos != endPos) {
							//console.log("碰到了不同位置");
							//如果碰到的地方是空的，那就代替空位置
							var boxPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); 	    //目标小姐姐的数据	
							if (boxPosition.isHasBox) {
								egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call((o: XjjModel) => {
									this.currentObj.clearGray();
									this.currentSelect.visible = false;
								}, this, [this.currentObj]);
								return;
							}
							if (!obj.visible && !boxPosition.isHasBox) {
								var guide = GuideData.currentOpt();
								if (guide == 2) return;
								//console.log("这地方是空的！");
								// 点击的妹子数据给到终点地方，  点的地方数据变初始并且隐藏
								var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType);     //获取选中图片的小姐姐数据
								var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); 	    //目标小姐姐的数据	
								endPosition.playerid = currentPosition.playerid;						 //将数据给到目标位置
								PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType);
								currentPosition.playerid = "";										//选中图片位置的数据重置
								PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);
								// obj.id = currentPosition.playerid ;
								// obj.$updateModelVeiw(); 
								obj.type = endPosition.playerid;
								this.currentObj.visible = false;
								this.currentObj.id = "";
								obj.visible = true;
								this.currentSelect.visible = false;
							} //如果两个图片一样———》合体
							else if (this.currentImgId == endImgId) {
								//console.log("合体");
								SoundManager.playSound("hecheng");
								var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType);     //获取选中图片的小姐姐数据
								if (currentPosition.playerid == "1038" || currentPosition.playerid == "2038" || currentPosition.playerid == "3033") {
									egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call((o: XjjModel) => {
										this.currentObj.clearGray();
										this.currentSelect.visible = false;
									}, this, [this.currentObj]);
									ControllAlert.show("已达最高等级，无法再次突破！");
									return;
								}
								currentPosition.playerid = "";										//选中图片位置的数据重置

								PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);

								var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType);     //获取目标位置的小姐姐数据
								endPosition.playerid = (Number(endPosition.playerid) + 1) + "";
								PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType);
								//如果合到新的 
								var player = PlayerData.getPlayerById(endPosition.playerid);
								var isJieSuo: boolean = false;
								if (!player) {
									isJieSuo = true;
									player = new lzd.vo.Player();
									player.id = endPosition.playerid;
									PlayerData.updatePlayer(player.id, player);
								}
								//动画
								this.hechengAnim(obj.leftImg, obj.rightImg, obj.xjjImg, obj.x, obj.y, obj, endPosition.playerid, isJieSuo);
							}//如果两个图片不一样———》交换位置，数据互换
							else if (this.currentImgId != endImgId) {
								//console.log("两个小姐姐不一样");
								this.currentObj.clearGray();
								this.currentSelect.visible = false;
								var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType);   //选中小姐姐的数据
								var endPosition = PositionData.getPositionById(endPos + "", StaticConstant.CurrentType); 		 //目标小姐姐的数据	
								var zhuanyi = currentPosition.playerid;
								currentPosition.playerid = endPosition.playerid;
								endPosition.playerid = zhuanyi;
								PositionData.updatePosition(endPos + "", endPosition, StaticConstant.CurrentType);         		//将选中数据给到目标位置
								PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);       //将碰到的小姐姐数据给到选中位置
								obj.type = endPosition.playerid;
								this.currentObj.type = currentPosition.playerid;
							}
						} break;
					} //处理回收、卖钱
					else if (this.huishou.hitTestPoint(evt.stageX, evt.stageY)) {
						ishitTest = true;
						this.currentSelect.scaleX = this.currentSelect.scaleY = 1.3;
						egret.Tween.get(this.currentSelect).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.backIn).call((o: XjjModel) => {
							var currentPosition = PositionData.getPositionById(this.currentPos + "", StaticConstant.CurrentType);
							var config = ConfigData.getPlayerById(currentPosition.playerid);
							var role = RoleData.getRole();
							currentPosition.playerid = "";
							PositionData.updatePosition(this.currentPos + "", currentPosition, StaticConstant.CurrentType);
							role.gold = role.gold.add(config.sellvalue);
							RoleData.putRole(role);
							this.totalGoldAnim();
							this.currentObj.clearGray();
							this.currentObj.id = "";
							this.currentSelect.visible = false;
							this.currentObj.visible = false;
							ControllAlert.show("回收" + StringUtil.decimalFormat(new Decimal(Number(config.sellvalue))));
						}, this, [this.currentObj]); break;
					}
				}
			}
			if (!ishitTest) {
				//没碰到人和回收的地方
				//console.log("回去一下");
				egret.Tween.get(this.currentSelect).to({ x: this.currentImgX + 72, y: this.currentImgY + 70, anchorOffsetX: 0, anchorOffsetY: 0 }, 200, egret.Ease.backIn).call((o: XjjModel) => {
					this.currentObj.clearGray();
					this.currentSelect.visible = false;
				}, this, [this.currentObj]);
			}
		}
		this.touchStatus = false;
	}


	// public creatImg: eui.Image;//新造一个小姐姐的图
	//主界面创建小姐姐
	public creatXjj(i: number, obj: XjjModel, hesuanLevelId: string) {
		this.initHeSuanGold();
		var emptyPoaition = PositionData.getPositionById(i + "", StaticConstant.CurrentType);     //获取空位置的小姐姐数据
		emptyPoaition.playerid = hesuanLevelId;
		PositionData.updatePosition(i + "", emptyPoaition, StaticConstant.CurrentType);
		/*		obj.id = emptyPoaition.playerid;
				obj.$updateModelVeiw();*/
		obj.type = emptyPoaition.playerid;
		//动画
		var creatImg = (lzd.display.CreatPool.getInstance() as lzd.display.CreatPool).createObject(lzd.display.CreatPool.IMAGE);
		creatImg.source = obj.xjjImg.source;
		creatImg.width = 140;
		creatImg.height = 190;
		creatImg.x = (this.middleGroup.width - creatImg.width) / 2;
		creatImg.y = this.middleGroup.height - creatImg.height;
		this.middleGroup.addChild(creatImg);
		creatImg.visible = true;
		egret.Tween.get(creatImg).to({ x: obj.x + 2, y: obj.y - 25 }, 400, egret.Ease.quartOut).call((o: XjjModel, c: eui.Image) => {
			o.visible = true;
			// c.visible = false;
			c.parent.removeChild(c);
			(lzd.display.CreatPool.getInstance() as lzd.display.CreatPool).dispose(lzd.display.CreatPool.IMAGE, c);
		}, this, [obj, creatImg]);
	}

	//从商店创建小姐姐
	public creatShopXjj(i: number, xjjID: number, obj: XjjModel) {
		var emptyPoaition = PositionData.getPositionById(i + "", StaticConstant.CurrentType);     //获取空位置的小姐姐数据
		emptyPoaition.playerid = xjjID + "";
		PositionData.updatePosition(i + "", emptyPoaition, StaticConstant.CurrentType);
		/*		obj.id = emptyPoaition.playerid + "";
				obj.$updateModelVeiw();*/
		obj.type = emptyPoaition.playerid + "";

		obj.visible = true;
	}

	//打开商店
	public onShopBtn() {
		Alert.alert(new ShopPanel(StaticConstant.CurrentType));
	}
	//商店买小姐姐
	public onShopBuyXjj(e: egret.Event) {
		var xjjID = e.data.id;
		var canUseJewel = e.data.canUseJewel;
		var len = this.xjjContainer.numChildren;
		var isCreated: boolean = false;
		var player = PlayerData.getPlayerById(xjjID + "");
		var buildGold = RoleData.getBuildGold(xjjID + "", player.buyCount_gold);
		var role = RoleData.getRole();
		for (var i = 0; i < len; i++) {
			var obj = this.xjjContainer.getChildAt(i);
			var position = PositionData.getPositionById(i + "", StaticConstant.CurrentType);
			if (obj instanceof XjjModel && obj.id == "" && !position.isHasBox) {
				if (canUseJewel) {
					var BuildJewel = RoleData.getBuildJewel(xjjID + "", player.buyCount_jewel)
					role.jewel = role.jewel - BuildJewel;
					RoleData.putRole(role);
					player.buyCount_jewel++;  //钻石购买次数增加1
					PlayerData.updatePlayer(xjjID + "", player);
				} else {
					role.gold = role.gold.minus(buildGold);
					RoleData.putRole(role);
					player.buyCount_gold++;  //金币购买次数增加1
					PlayerData.updatePlayer(xjjID + "", player);
				}
				this.creatShopXjj(i, xjjID, obj);
				isCreated = true;
				return;
			}
		}
		if (!isCreated) {
			ControllAlert.show("没有更多位置了！");
		}
	}

	//加速事件
	public onSpeedUp(e: egret.Event) {
		this.speedUp = e.data.speedUpNum;
		var speedUpTime = e.data.speedTime;
		this.speed_hd.visible = false;
		egret.setTimeout(() => {
			this.speedUp = 1;
			this.speed_hd.visible = true;
		}, this, speedUpTime);
	}

	//打开加速界面
	public onSpeedBtn() {
		Alert.alert(new SpeedupPanel());
	}

	//打开邀请界面
	public onInviteBtn() {
		if (AppConfig.invite_haoyou == true) {
			Alert.alert(new InvitePanel());
		} else {
			ControllAlert.show("敬请期待！");
		}
	}

	//打开转盘界面
	public onZhuanpanBtn() {
		Alert.alert(new ZhuanPan());
	}

	//打开签到界面
	public onCheckInBtn() {
		Alert.alert(new checkInPanel());
	}

	//打开宝箱界面
	public onRandomBoxBtn() {
		if (this.boxTime > 0 && this.boxTime <= 60) {
			ControllAlert.show("补给箱还未到达战场！");
			return;
		}
		Alert.alert(new RandomAwardPanel());
		RandomBoxData.updateRandomBoxCount();
		this.boxTime = 61;
	}

	//弹出怎么玩界面
	public onHowBtn() {
		Alert.alert(new HowToPlayPanel());
	}

	//合成动画
	public hechengAnim(leftImg: eui.Image, rightImg: eui.Image, changeImg: eui.Image, objX: number, objY: number, obj: XjjModel, playerid: string, isJieSuo: boolean) {
		this.currentSelect.visible = false;
		changeImg.visible = false;
		this.currentObj.clearGray();
		this.currentObj.visible = false;
		this.currentObj.id = "";
		leftImg.x = -64;
		rightImg.x = 96;
		leftImg.source = rightImg.source = changeImg.source;
		leftImg.visible = rightImg.visible = true;
		egret.Tween.get(leftImg).to({ x: 16, y: 0 }, 250, egret.Ease.backIn).call(() => {
			leftImg.visible = rightImg.visible = false;
			MovieClipManager.getInstance().initMovieClipFactory("hecheng_eff");
			var mc: egret.MovieClip = MovieClipManager.getInstance().getMovieClicp("hecheng");
			mc.scaleX = mc.scaleY = 1.1;
			mc.x = objX - 100;
			mc.y = objY - 100 + this.middleGroup.y;
			Alert.show(mc);
			var complete = (e: egret.MovieClipEvent) => {
				mc.removeEventListener(egret.MovieClipEvent.COMPLETE, complete, this);
				if (mc.parent) mc.parent.removeChild(mc);
			}
			mc.addEventListener(egret.MovieClipEvent.COMPLETE, complete, this);
			mc.play();
			obj.type = playerid;
			if (isJieSuo) Alert.alert(new UnlockPanel(playerid));
			if (playerid == "1003") DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level1_suc", ""));
			if (playerid == "1006") DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level2_suc", ""));
			if (playerid == "1010") DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level3_suc", ""));
			if (playerid == "1015") DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "highestLevel", "level4_suc", ""));
		});
		egret.Tween.get(rightImg).to({ x: 16, y: 0 }, 250, egret.Ease.backIn);
	}
	//总金币动画
	public totalGoldAnim() {
		egret.Tween.get(this.totalGold)
			.to({ scaleX: 1.2, scaleY: 1.2 }, 200, egret.Ease.quartOut)
			.to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.quartOut);
	}

	/*	private animate_FaShi:dragonBones.EgretArmatureDisplay;
		public animFaShi(){
				if(!this.animate_FaShi){
					this.animate_FaShi=(DragonBoneManager.getInstance() as DragonBoneManager).createAnimate("FaShi");
				}
				if(this.animate_FaShi){
					this.animate_FaShi.animation.play("idle_1",0);
					this.animate_FaShi.x=330;
					this.animate_FaShi.y=200;
					this.middleGroup.addChild(this.animate_FaShi);
				}
		}*/


	public dispose() {
		this.stop();
		this.stage.removeEventListener(GameEvent.GAME_SHOPBUYXJJ_EVENT, this.onShopBuyXjj, this);
		this.stage.removeEventListener(GameEvent.GAME_SPEEDUP_EVENT, this.onSpeedUp, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrameGold, this);
		if (this.xjjContainer) this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onJJBtnBegin, this);
		if (this.xjjContainer) this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
		if (this.xjjContainer) this.xjjContainer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onJJBtnEnd, this);
		if (this.phbBtn) this.phbBtn.dispose();
		if (this.shopBtn) this.shopBtn.dispose();
		if (this.howBtn) this.howBtn.dispose();
		if (this.lingzuanBtn) this.lingzuanBtn.dispose();
		if (this.creatBtn) this.creatBtn.dispose();
		if (this.speedBtn) this.speedBtn.dispose();
		if (this.zhuanpanBtn) this.zhuanpanBtn.dispose();
		if (this.randomBoxBtn) this.randomBoxBtn.dispose();
		if (this.backBtn) this.backBtn.dispose();
		if (this.checkInBtn) this.checkInBtn.dispose();
		//if (this.hitSpeedBtn) this.hitSpeedBtn.dispose();
		//if (this.boxBtn) this.boxBtn.dispose();
		super.dispose();
	}
}