class ShopPanel extends BasePanel {
	public closeBtn: MyButton;
	public xjjGroup: eui.Group;
	public goldNum: eui.Label;
	public diamondNum: eui.Label;
	public type: number;
	public scroll: eui.Scroller;
	public constructor(Type: number) {
		super();
		this.type = Type;
	}

	public initialize() {
		if (this.closeBtn) this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
		this.onFrame();
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		this.initXjjList();
		AdConstant.showBannerAd();
	}

	public initXjjList() {
		var maxLevel = -1;
		var config = null;
		if (this.type == 1) {
			//先加4个
			for (var i = 0; i < 4; i++) {
				var index: number;
				if (i >= 0 && i < 4) {
					index = i + 1001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				this.xjjGroup.addChild(XjjItemSkin);
				XjjItemSkin.x = 0;
				XjjItemSkin.y = 163 * i;
			}
			//每隔50ms加一个
			for (var i = 4; i < 38; i++) {
				var index: number;
				if (i >= 4 && i < 38) {
					index = i + 1001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
			}
			// config = ShopConstant.getHighestLevelConfig(1);//获取最高等级
			// if (config) maxLevel = config.maxBuyLevel;
			// if (maxLevel != -1 && maxLevel >= 5) {
			// 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
			// }
		}
		if (this.type == 2) {
			//先加4个
			for (var i = 0; i < 4; i++) {
				var index: number;
				if (i >= 0 && i < 4) {
					index = i + 2001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				this.xjjGroup.addChild(XjjItemSkin);
				XjjItemSkin.x = 0;
				XjjItemSkin.y = 163 * i;
			}
			//每隔50ms加一个
			for (var i = 4; i < 38; i++) {
				var index: number;
				if (i >= 4 && i < 38) {
					index = i + 2001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
			}
			// config = ShopConstant.getHighestLevelConfig(2);//获取最高等级
			// if (config) maxLevel = config.maxBuyLevel;
			// if (maxLevel != -1 && maxLevel >= 5) {
			// 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
			// }
		}
		if (this.type == 3) {
			//先加4个
			for (var i = 0; i < 4; i++) {
				var index: number;
				if (i >= 0 && i < 4) {
					index = i + 3001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				this.xjjGroup.addChild(XjjItemSkin);
				XjjItemSkin.x = 0;
				XjjItemSkin.y = 163 * i;
			}
			//每隔50ms加一个
			for (var i = 4; i < 33; i++) {
				var index: number;
				if (i >= 4 && i < 33) {
					index = i + 3001;
				}
				var XjjItemSkin: ShopXjjItemSkin = new ShopXjjItemSkin(index);
				egret.setTimeout(this.addItem(XjjItemSkin, i), this, 50);
			}
			// config = ShopConstant.getHighestLevelConfig(3);//获取最高等级
			// if (config) maxLevel = config.maxBuyLevel;
			// if (maxLevel != -1 && maxLevel >= 5) {
			// 	egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 600);
			// }
		}
	}

	public addItem(item: ShopXjjItemSkin, i: number) {
		return () => {
			this.xjjGroup.addChild(item);
			item.x = 0;
			item.y = 163 * i;
			if(i==37){
			var maxLevel = -1;
			var config = null;
			config = ShopConstant.getHighestLevelConfig(StaticConstant.CurrentType);//获取最高等级
			if (config) maxLevel = config.maxBuyLevel;
			if (maxLevel != -1 && maxLevel >= 5) {
				egret.Tween.get(this.scroll.viewport).to({ scrollV: this.scroll.viewport.scrollV + 163 * (maxLevel - 2) }, 500);
			}
			}
		};
	}

	public onFrame() {
		var role = RoleData.getRole();
		this.goldNum.text = StringUtil.decimalFormat(role.gold);
		this.diamondNum.text = StringUtil.goldNumber2String(role.jewel);
	}

	public onCloseBtn() {
		this.dispose();
	}

	public dispose() {
		platform.hideBannerAd();
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		if (this.closeBtn) this.closeBtn.dispose();
		if (this.xjjGroup) {
			this.xjjGroup.$children.forEach(element => {
				if (element instanceof ShopXjjItemSkin) {
					element.dispose();
				}
			})
		}
		super.dispose();
	}
}