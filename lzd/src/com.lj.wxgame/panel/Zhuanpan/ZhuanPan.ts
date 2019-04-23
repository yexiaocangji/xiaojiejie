class ZhuanPan extends eui.Component implements eui.UIComponent {
	public turnplateGroup: eui.Group;    //转盘group
	public count: eui.Label;		//		券次数
	public addBtn: MyButton;		//     加券按钮
	public closeBtn: MyButton;
	public kaishiBtn: MyButton;

	public bornNum: number = 8;		//转盘的区域总数
	public deg: number;
	public id: number;
	public jiangliType: number;    //奖励的类型
	public jiangliCount: any;      //奖励的数量
	public constructor() {
		super();
		//初始化转盘数据
		this.deg = 0;
		this.id = 0;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initUI();
		this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		this.kaishiBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.OnKaishiBtn, this);
		this.addBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onAddBtn, this);


	}

	public initUI() {
		var data = ZhuanPanData.getZhuanPanQuanCount();
		if (!data) {
			ZhuanPanData.updateZhuanPanQuanCount(5);
			data = ZhuanPanData.getZhuanPanQuanCount();
		}
		var count: number = data.count ? data.count : 0;
		this.count.text = count + "";
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"zhuanpan","zhuanpan1",""));
	}

	public onAddBtn(e: egret.TouchEvent) {
		var data = ZhuanPanData.getZhuanPanQuanCount();
		if(data && data.count >= 20){
			ControllAlert.show("转盘券数量已满！");
			return;
		}
		var count: number = 2;
		Alert.alert(new ShareGainQuan("分享到群可获得2张转盘券", count, this),false);
	}

	public OnKaishiBtn() {
		//消耗转盘券-1，转
		var zhuanPanData = ZhuanPanData.getZhuanPanQuanCount();
		if (zhuanPanData.count < 1) {
			ControllAlert.show("您的券不足1张！");
			var count: number = 2;
			Alert.alert(new ShareGainQuan("分享到群可获得2张转盘券", count, this),false);
			return;
		}
		/** 转盘30次开始 */
		var timestamp = AccountData.serverTime() + egret.getTimer();//服务器登陆时间+白鹭启动时间=当前时间	
		var currentDate = DateTool.makeTime(timestamp);
		var data = ZhuanPanData.getZhuanPanCount();
		var count = (!data || data.date != currentDate)?30:data.count;
		//转盘使用次数，每天30次
		if(count <= 0){
			ControllAlert.show("转盘次数用完，明天再来");
			return;
		}
		ZhuanPanData.updateZhuanCount();
		/** 转盘30次结束 */

		//随机转的概率得到id
		var float = RandomUitl.randomFloat(0, 10);
		//读取当前的金币收益数量
		var shouyiValue = GameConstant.getAllShouYiValue();
/*		var positions = PositionData.getPositionsById(StaticConstant.CurrentType);
		for (var posid in positions) {
			var position = PositionData.getPositionById(posid,StaticConstant.CurrentType);
			if (position.playerid == "") continue;
			var config = ConfigData.getPlayerById(position.playerid);
			shouyiValue = shouyiValue.add(config.lixianshouyi);
		}*/
		if (float >= 0 && float < 1) {
			//钻石100
			this.id = 0;
			this.jiangliType = 1;
			this.jiangliCount = 100;
		} else if (float >= 1 && float < 2.5) {
			//金币4.3*秒产
			this.id = 1;
			this.jiangliType = 2;
			this.jiangliCount = shouyiValue.mul(4.3);
		} else if (float >= 2.5 && float < 4) {
			//钻石200
			this.id = 2;
			this.jiangliType = 1;
			this.jiangliCount = 200;
		} else if (float >= 4 && float < 6) {
			//金币8.6*秒产
			this.id = 3;
			this.jiangliType = 2;
			this.jiangliCount = shouyiValue.mul(8.6);
		} else if (float >= 6 && float < 6.5) {
			//钻石400
			this.id = 4;
			this.jiangliType = 1;
			this.jiangliCount = 400;
		} else if (float >= 6.5 && float < 8) {
			//金币12.9*秒产
			this.id = 5;
			this.jiangliType = 2;
			this.jiangliCount = shouyiValue.mul(12.9);
		} else if (float >= 8 && float < 8.5) {
			//钻石800
			this.id = 6;
			this.jiangliType = 1;
			this.jiangliCount = 800;
		} else if (float >= 8.5 && float <= 10) {
			//金币16.3*秒产
			this.id = 7;
			this.jiangliType = 2;
			this.jiangliCount = shouyiValue.mul(16.3);
		}
		//旋转角度
		this.deg = 5 * 360 - this.id * 360 / this.bornNum - (180 / this.bornNum) + (RandomUitl.randomInt(360 / this.bornNum * 0.1, 360 / this.bornNum * 0.9));
		this.initTurnplateGroup();
	}

	public initTurnplateGroup() {
		DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(),"zhuanpan","zhuanpan2",""));
		var data = ZhuanPanData.getZhuanPanQuanCount();
		var count: number = (data && data.count) ? data.count - 1 : 0;
		ZhuanPanData.updateZhuanPanQuanCount(count);
		this.initUI();
		this.kaishiBtn.setEnable(false);
		egret.Tween.get(this.turnplateGroup).to({ rotation: this.deg }, 4000, egret.Ease.circInOut)
			.wait(1500)
			.call(() => {
				this.kaishiBtn.setEnable(true);
				//去计算奖励
				Alert.alert(new ZhuanPanResult(this.jiangliType, this.id, this.jiangliCount), true);
			}, this, []);
	}

	public onCloseBtn() {
		Alert.closeAlert(this, 0);
	}

	public dispose() {
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.kaishiBtn) this.kaishiBtn.dispose();
		if (this.addBtn) this.addBtn.dispose();
		if (this.parent) this.parent.removeChild(this);
	}

}