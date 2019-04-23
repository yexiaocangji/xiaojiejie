class ZhuanPanResult extends eui.Component implements eui.UIComponent {
	public runBg:eui.Image;
	public gaintypeImg: eui.Image;
	public gainCount: eui.Label;
	public lingquBtn: MyButton;
	public _type: number;	//奖励类型：铜钱还是钻石	
	public _id: number;     //转盘转到的id
	public _jiangliCount: any;
	public constructor(jiangliType: number, id: number, jiangliCount: any) {
		super();
		this._type = jiangliType;
		this._id = id;
		this._jiangliCount = jiangliCount;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.lingquBtn) this.lingquBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLingquBtn, this);
		this.init();
		if(this.runBg)egret.Tween.get(this.runBg,{loop:true}).to({rotation:360},2000);
	}

	public init() {
		var role = RoleData.getRole();
		if (this._type == 1) {
			//钻石
			this.gaintypeImg.texture = RES.getRes("xjj_icon_zuanshi");
			this.gainCount.text = "+" + this._jiangliCount;
			role.jewel = role.jewel + this._jiangliCount;
		}
		else if (this._type == 2) {
			//金币
			this.gaintypeImg.texture = RES.getRes("xjj_icon_jinbi");
			this.gainCount.text = "+" + StringUtil.decimalFormat(new Decimal(Number(this._jiangliCount)));
			role.gold = role.gold.add(this._jiangliCount);
		}
		RoleData.putRole(role);
	}

	public onLingquBtn() {
		Alert.closeAlert(this, 0);
	}

	public dispose() {
		if (this.lingquBtn) this.lingquBtn.dispose();
	}
}