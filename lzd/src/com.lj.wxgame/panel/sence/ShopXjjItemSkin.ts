class ShopXjjItemSkin extends eui.Component implements eui.UIComponent {
	public level: eui.Label;
	public xjjImage: eui.Image;
	public buyBtn: MyButton;
	public openGroup: eui.Group;
	public xjjImage_open: eui.Image;
	public openLevel: eui.Label;
	public id: number;
	public canUseJewel: boolean = false;
	public constructor(id: number) {
		super();
		this.id = id;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	public init() {
		this.initUI();
		this.initBtnListen();
	}

	public initUI() {
		ColorUtil.setHui(this.xjjImage_open);
		var config = ConfigData.getPlayerById(this.id + "");
		var highestConfig = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType);//获取最高等级那条配置
		if (this.xjjImage) this.xjjImage.source = config.icon_res;
		this.level.text = config.level;
		this.openLevel.text = config.goldbuyLimit;
		var config_open = ConfigData.getPlayerById((this.id + 4) + "");
		if (StaticConstant.CurrentType == 1 || StaticConstant.CurrentType == 2) {
			if (this.xjjImage_open && this.id >= 1000 && this.id <= 1034) {
				this.xjjImage_open.source = config_open.icon_res;
			} else {
				this.xjjImage_open.source = ConfigData.getPlayerById("1038").icon_res;
			}
		}
		if (StaticConstant.CurrentType == 2) {
			if (this.xjjImage_open && this.id >= 2000 && this.id <= 2034) {
				this.xjjImage_open.source = config_open.icon_res;
			} else {
				this.xjjImage_open.source = ConfigData.getPlayerById("2038").icon_res;
			}
		}
		if (StaticConstant.CurrentType == 3) {
			if (this.xjjImage_open && this.id >= 3000 && this.id <= 3029) {
				this.xjjImage_open.source = config_open.icon_res;
			} else {
				this.xjjImage_open.source = ConfigData.getPlayerById("3029").icon_res;
			}
		}
		//判断金币可购买条件
		var player = PlayerData.getPlayerById(this.id + "");
		if (!player) {
			ColorUtil.setBlack(this.xjjImage);//人变黑的
			this.buyBtn.visible = false;
		} else if (player && Number(highestConfig.level) >= Number(config.goldbuyLimit)) {
			this.openGroup.visible = false;
			this.buyBtn.visible = true;
			var buildGold = RoleData.getBuildGold(this.id + "", player.buyCount_gold);
			var lab_gold = (<eui.Label>this.buyBtn.getChildAt(1));
			if (lab_gold) lab_gold.text = StringUtil.decimalFormat(buildGold);
			var lab_image = (<eui.Image>this.buyBtn.getChildAt(2));
			if (lab_image) lab_image.source = "xjj_icon_jinbilv";
		} else if (player && Number(highestConfig.level) < Number(config.goldbuyLimit)) {
			this.openGroup.visible = true;
			this.buyBtn.visible = false;
		}

		//判断钻石可购买条件
		var arr = highestConfig.jewelbuyLimit.split('_');
		if (arr && ArrayUtil.contains(arr, config.level)) {
			this.canUseJewel = true;
			this.openGroup.visible = false;
			this.buyBtn.visible = true;
			var buildJewel = RoleData.getBuildJewel(this.id + "", player.buyCount_jewel);
			var lab_jewel = (<eui.Label>this.buyBtn.getChildAt(1));
			if (lab_jewel) lab_jewel.text = StringUtil.goldNumber2String(buildJewel);
			var lab_image = (<eui.Image>this.buyBtn.getChildAt(2));
			if (lab_image) lab_image.source = "xjj_icon_zuanshi";
		}
	}


	public initBtnListen() {
		if (this.buyBtn) this.buyBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBuyBtn, this);
	}

	public onBuyBtn(e: egret.TouchEvent) {
		var player = PlayerData.getPlayerById(this.id + "");
		var buildGold = RoleData.getBuildGold(this.id + "", player.buyCount_gold);
		var buildJewel = RoleData.getBuildJewel(this.id + "", player.buyCount_jewel);
		var lab_gold = (<eui.Label>this.buyBtn.getChildAt(1));
		var role = RoleData.getRole();
		if (!this.canUseJewel) {
			if (lab_gold) lab_gold.text = StringUtil.decimalFormat(buildGold);
			if (role.gold.minus(buildGold) < new Decimal(0)) {
				// ControllAlert.show("金币不足了，看点广告吧"); 
				Alert.alert(new NotEnoughRewardPanel(2));//金币不足
				return;
			}
		} else {
			if (lab_gold) lab_gold.text = StringUtil.goldNumber2String(buildJewel);
			if (role.jewel - buildJewel < 0) {
				// ControllAlert.show("钻石不足了，看点广告吧"); 
				Alert.alert(new NotEnoughRewardPanel(1));//钻石不足
				return;
			}
		}
		this.stage.dispatchEventWith(GameEvent.GAME_SHOPBUYXJJ_EVENT, true, { id: this.id, canUseJewel: this.canUseJewel });
		this.initUI();
	}

	public dispose() {
		if (this.buyBtn) this.buyBtn.dispose();
	}
}