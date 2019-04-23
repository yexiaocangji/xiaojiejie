var egret = window.egret;window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"OtherGameSkin":"resource/eui_skins/otherGames/OtherGameSkin.exml","RankPanel":"resource/eui_skins/rank/RankPanel.exml","TipsPanel":"resource/eui_skins/public/TipsPanel.exml","TipsItem":"resource/eui_skins/public/TipsItem.exml","SoundLuckBtn":"resource/eui_skins/SoundLuckBtn.exml","GamePanel":"resource/eui_skins/uiSkin/GamePanel.exml","GuidePanel":"resource/eui_skins/guide/GuidePanel.exml","StartPanel":"resource/eui_skins/uiSkin/StartPanel.exml","ShopPanel":"resource/eui_skins/uiSkin/ShopPanel.exml","ShopXjjItemSkin":"resource/eui_skins/uiSkin/ShopXjjItemSkin.exml","HowToPlayPanel":"resource/eui_skins/uiSkin/HowToPlayPanel.exml","XjjModel":"resource/eui_skins/uiSkin/XjjModel.exml","checkInPanel":"resource/eui_skins/uiSkin/checkInPanel.exml","SpeedupPanel":"resource/eui_skins/uiSkin/SpeedupPanel.exml","ZhuanPan":"resource/eui_skins/uiSkin/ZhuanPan.exml","ShareGainQuan":"resource/eui_skins/uiSkin/ShareGainQuan.exml","ZhuanPanResult":"resource/eui_skins/uiSkin/ZhuanPanResult.exml","UnlockPanel":"resource/eui_skins/uiSkin/UnlockPanel.exml","LixianPanel":"resource/eui_skins/uiSkin/LixianPanel.exml","InvitePanel":"resource/eui_skins/invite/InvitePanel.exml","InviteItem":"resource/eui_skins/invite/InviteItem.exml","NotEnoughRewardPanel":"resource/eui_skins/uiSkin/NotEnoughRewardPanel.exml","RandomAwardPanel":"resource/eui_skins/uiSkin/RandomAwardPanel.exml","LoadingUI":"resource/eui_skins/LoadingUI.exml","checkInItem":"resource/eui_skins/uiSkin/checkInItem.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["image","labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.image_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("image","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(44,31,5,3);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 33;
		t.left = 62;
		t.right = 60;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 14;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "WX_ddz_cj_05";
		t.verticalCenter = -10.5;
		t.width = 126;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/guide/GuidePanel.exml'] = window.GuidePanelSkin = (function (_super) {
	__extends(GuidePanelSkin, _super);
	var GuidePanelSkin$Skin1 = 	(function (_super) {
		__extends(GuidePanelSkin$Skin1, _super);
		function GuidePanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GuidePanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,20,1,1);
			t.source = "xjj_backg_jinbi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuidePanelSkin$Skin1;
	})(eui.Skin);

	function GuidePanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","rectup","rectdown","rectleft","rectright","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.rectup_i(),this.rectdown_i(),this.rectleft_i(),this.rectright_i(),this.closeBtn_i()];
	}
	var _proto = GuidePanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(11,12,6,4);
		t.source = "xjj_backg_jinbi";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectup_i = function () {
		var t = new eui.Rect();
		this.rectup = t;
		t.fillAlpha = 0.4;
		t.height = 100;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectdown_i = function () {
		var t = new eui.Rect();
		this.rectdown = t;
		t.fillAlpha = 0.4;
		t.height = 100;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectleft_i = function () {
		var t = new eui.Rect();
		this.rectleft = t;
		t.fillAlpha = 0.4;
		t.height = 100;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectright_i = function () {
		var t = new eui.Rect();
		this.rectright = t;
		t.fillAlpha = 0.4;
		t.height = 100;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 906;
		t.height = 50;
		t.horizontalCenter = 223;
		t.label = "退出引导";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.skinName = GuidePanelSkin$Skin1;
		return t;
	};
	return GuidePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InviteItem.exml'] = window.InviteItemSkin = (function (_super) {
	__extends(InviteItemSkin, _super);
	var InviteItemSkin$Skin2 = 	(function (_super) {
		__extends(InviteItemSkin$Skin2, _super);
		function InviteItemSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteItemSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(35,0,2,71);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.text = "";
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return InviteItemSkin$Skin2;
	})(eui.Skin);

	function InviteItemSkin() {
		_super.call(this);
		this.skinParts = ["addImg","icon","friendName","inviteBtn"];
		
		this.height = 125;
		this.width = 518;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InviteItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 125;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.addImg_i(),this._Label1_i(),this.icon_i(),this.friendName_i(),this._Label2_i(),this._Label3_i(),this._Image3_i(),this.inviteBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 125;
		t.scale9Grid = new egret.Rectangle(20,19,0,0);
		t.source = "xjj_backg_tcsd";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(20,19,0,0);
		t.source = "xjj_frame_yqtx";
		t.width = 90;
		t.x = 22.66;
		t.y = 18.68;
		return t;
	};
	_proto.addImg_i = function () {
		var t = new eui.Image();
		this.addImg = t;
		t.source = "xjj_icon_yqren";
		t.x = 38.64;
		t.y = 35.34;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.strokeColor = 0xffffff;
		t.text = "点击邀请";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 75.99;
		t.x = 29.83;
		t.y = 81.98;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(20,19,0,0);
		t.source = "";
		t.width = 85;
		t.x = 25.34;
		t.y = 21.36;
		return t;
	};
	_proto.friendName_i = function () {
		var t = new eui.Label();
		this.friendName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "邀请第1位好友";
		t.textColor = 0x833f1d;
		t.x = 124.66;
		t.y = 31.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "奖励：";
		t.textColor = 0x833F1D;
		t.width = 62.66;
		t.x = 126.66;
		t.y = 72.98;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "200";
		t.textColor = 0x833F1D;
		t.width = 49.86;
		t.x = 233.26;
		t.y = 72.98;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.66;
		t.source = "xjj_icon_zuanshi";
		t.width = 32;
		t.x = 187.11;
		t.y = 71.1;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new MyButton();
		this.inviteBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.label = "邀请";
		t.right = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 6.5;
		t.width = 134;
		t.x = 364;
		t.y = 36;
		t.skinName = InviteItemSkin$Skin2;
		return t;
	};
	return InviteItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InvitePanel.exml'] = window.InvitePanelSkin = (function (_super) {
	__extends(InvitePanelSkin, _super);
	var InvitePanelSkin$Skin3 = 	(function (_super) {
		__extends(InvitePanelSkin$Skin3, _super);
		function InvitePanelSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InvitePanelSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InvitePanelSkin$Skin3;
	})(eui.Skin);

	function InvitePanelSkin() {
		_super.call(this);
		this.skinParts = ["constainer","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InvitePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Scroller1_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 851.9;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 0;
		t.width = 581.89;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,6,38,38);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_tcbtbj";
		t.verticalCenter = -387.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3;
		t.scale9Grid = new egret.Rectangle(6,6,29,23);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_tcbt_6";
		t.verticalCenter = -391.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "1、邀请新用户，奖励翻倍";
		t.textColor = 0x833f1d;
		t.visible = false;
		t.x = 67;
		t.y = 856.77;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "Tips:邀请好友登录游戏就算成功";
		t.textColor = 0x833F1D;
		t.x = 67;
		t.y = 889.77;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 590;
		t.horizontalCenter = 0;
		t.width = 534;
		t.y = 246.14;
		t.viewport = this.constainer_i();
		return t;
	};
	_proto.constainer_i = function () {
		var t = new eui.Group();
		this.constainer = t;
		t.anchorOffsetX = 0;
		t.width = 515.33;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingTop = 4;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -408;
		t.x = 562;
		t.y = 124;
		t.skinName = InvitePanelSkin$Skin3;
		return t;
	};
	return InvitePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/loadingSlider.exml'] = window.loadingSliderSkin = (function (_super) {
	__extends(loadingSliderSkin, _super);
	function loadingSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 20;
		this.width = 325;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = loadingSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(16,10,0,0);
		t.source = "jindutiao";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Group();
		this.track = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = -0.5;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.left = 0;
		t.source = "jindutiao1";
		t.verticalCenter = 0;
		t.width = 302;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.percentHeight = 70;
		t.width = 1;
		t.x = 8.6;
		t.y = 3;
		return t;
	};
	return loadingSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingUI.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["slider"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.slider_i(),this._Label1_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "beijint_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 459;
		t.horizontalCenter = 18;
		t.source = "xjj_dl1_png";
		t.verticalCenter = -283.5;
		t.width = 586;
		return t;
	};
	_proto.slider_i = function () {
		var t = new eui.HSlider();
		this.slider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 385;
		t.height = 20;
		t.horizontalCenter = 0;
		t.skinName = "loadingSliderSkin";
		t.width = 325;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 344;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "加载游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/otherGames/JumpGamesPanel.exml'] = window.JumpGamesPanelSkin = (function (_super) {
	__extends(JumpGamesPanelSkin, _super);
	var JumpGamesPanelSkin$Skin4 = 	(function (_super) {
		__extends(JumpGamesPanelSkin$Skin4, _super);
		function JumpGamesPanelSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JumpGamesPanelSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chou_chu";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chou_jin";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JumpGamesPanelSkin$Skin4;
	})(eui.Skin);

	function JumpGamesPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg_close","jumpGamesBtn","jumpContainer","jumpgames"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_close_i(),this.jumpgames_i()];
	}
	var _proto = JumpGamesPanelSkin.prototype;

	_proto.bg_close_i = function () {
		var t = new eui.Image();
		this.bg_close = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.jumpgames_i = function () {
		var t = new eui.Group();
		this.jumpgames = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 618;
		t.top = 283;
		t.width = 348;
		t.x = -348;
		t.elementsContent = [this._Image1_i(),this.jumpGamesBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(22,21,0,0);
		t.source = "chou_bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jumpGamesBtn_i = function () {
		var t = new MyButton();
		this.jumpGamesBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.label = "";
		t.width = 76;
		t.x = 346.01;
		t.y = 35.21;
		t.skinName = JumpGamesPanelSkin$Skin4;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 564;
		t.horizontalCenter = 0;
		t.width = 310;
		t.y = 30;
		t.viewport = this.jumpContainer_i();
		return t;
	};
	_proto.jumpContainer_i = function () {
		var t = new eui.Group();
		this.jumpContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return JumpGamesPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/otherGames/OtherGameSkin.exml'] = window.OtherGameSkinSkin = (function (_super) {
	__extends(OtherGameSkinSkin, _super);
	var OtherGameSkinSkin$Skin5 = 	(function (_super) {
		__extends(OtherGameSkinSkin$Skin5, _super);
		function OtherGameSkinSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["icon","labelDisplay"];
			
			this.elementsContent = [this.icon_i(),this.labelDisplay_i(),this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OtherGameSkinSkin$Skin5.prototype;

		_proto.icon_i = function () {
			var t = new eui.Image();
			this.icon = t;
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 58;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 15;
			t.horizontalCenter = 33;
			t.source = "";
			t.verticalCenter = -33;
			t.width = 15;
			return t;
		};
		return OtherGameSkinSkin$Skin5;
	})(eui.Skin);

	function OtherGameSkinSkin() {
		_super.call(this);
		this.skinParts = ["jumpBtn"];
		
		this.height = 110;
		this.width = 80;
		this.elementsContent = [this.jumpBtn_i()];
	}
	var _proto = OtherGameSkinSkin.prototype;

	_proto.jumpBtn_i = function () {
		var t = new MyButton();
		this.jumpBtn = t;
		t.height = 75;
		t.horizontalCenter = 0.5;
		t.icon = "";
		t.label = "";
		t.top = 4;
		t.width = 75;
		t.skinName = OtherGameSkinSkin$Skin5;
		return t;
	};
	return OtherGameSkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TipsItem.exml'] = window.TipsItemSkin = (function (_super) {
	__extends(TipsItemSkin, _super);
	function TipsItemSkin() {
		_super.call(this);
		this.skinParts = ["tipsLabel"];
		
		this.height = 74;
		this.width = 528;
		this.elementsContent = [this._Image1_i(),this.tipsLabel_i()];
	}
	var _proto = TipsItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "xjj_backg_jinbi";
		t.verticalCenter = 0;
		t.width = 528;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "label";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 522;
		return t;
	};
	return TipsItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TipsPanel.exml'] = window.TipsPanelSkin = (function (_super) {
	__extends(TipsPanelSkin, _super);
	function TipsPanelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = TipsPanelSkin.prototype;

	return TipsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankPanel.exml'] = window.RankPanelSkin = (function (_super) {
	__extends(RankPanelSkin, _super);
	var RankPanelSkin$Skin6 = 	(function (_super) {
		__extends(RankPanelSkin$Skin6, _super);
		function RankPanelSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankPanelSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanelSkin$Skin6;
	})(eui.Skin);

	var RankPanelSkin$Skin7 = 	(function (_super) {
		__extends(RankPanelSkin$Skin7, _super);
		function RankPanelSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankPanelSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanelSkin$Skin7;
	})(eui.Skin);

	function RankPanelSkin() {
		_super.call(this);
		this.skinParts = ["rankTitle","rankCloseBtn","shareToGroupBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this.rankCloseBtn_i(),this.shareToGroupBtn_i()];
	}
	var _proto = RankPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.rankTitle_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 880.78;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 26.5;
		t.width = 606.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,6,38,38);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_tcbtbj";
		t.verticalCenter = -375.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -4;
		t.scale9Grid = new egret.Rectangle(6,6,29,23);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_tcbt_5";
		t.verticalCenter = -381.5;
		return t;
	};
	_proto.rankTitle_i = function () {
		var t = new eui.Label();
		this.rankTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 71;
		t.horizontalCenter = 7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 39;
		t.text = "排行榜";
		t.textAlign = "center";
		t.textColor = 0xc1f5ff;
		t.verticalAlign = "middle";
		t.verticalCenter = -394.5;
		t.visible = false;
		t.width = 346;
		t.x = 154;
		return t;
	};
	_proto.rankCloseBtn_i = function () {
		var t = new MyButton();
		this.rankCloseBtn = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -399;
		t.skinName = RankPanelSkin$Skin6;
		return t;
	};
	_proto.shareToGroupBtn_i = function () {
		var t = new MyButton();
		this.shareToGroupBtn = t;
		t.height = 34;
		t.horizontalCenter = 0;
		t.label = "分享到群,查看群排行榜";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 508;
		t.visible = false;
		t.width = 104;
		t.skinName = RankPanelSkin$Skin7;
		return t;
	};
	return RankPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SoundLuckBtn.exml'] = window.SoundLuckBtnSkin = (function (_super) {
	__extends(SoundLuckBtnSkin, _super);
	function SoundLuckBtnSkin() {
		_super.call(this);
		this.skinParts = ["unluck"];
		
		this.height = 106;
		this.width = 103;
		this.elementsContent = [this._Image1_i(),this.unluck_i()];
	}
	var _proto = SoundLuckBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "xjj_dl5";
		t.percentWidth = 100;
		return t;
	};
	_proto.unluck_i = function () {
		var t = new eui.Image();
		this.unluck = t;
		t.percentHeight = 100;
		t.source = "xjj_dl5";
		t.percentWidth = 100;
		return t;
	};
	return SoundLuckBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/checkInItem.exml'] = window.checkInItemSkin = (function (_super) {
	__extends(checkInItemSkin, _super);
	function checkInItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","guang","bg1","icon","dateLabel","rewardValueLabel","finish"];
		
		this.height = 162;
		this.width = 162;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = checkInItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.bg_i(),this.guang_i(),this.bg1_i(),this.icon_i(),this.dateLabel_i(),this.rewardValueLabel_i(),this.finish_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(17,17,8,5);
		t.source = "xjj_frame_qiand";
		t.percentWidth = 100;
		return t;
	};
	_proto.guang_i = function () {
		var t = new eui.Image();
		this.guang = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,17,8,5);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "xjj_xguo_guang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.height = 42;
		t.scale9Grid = new egret.Rectangle(14,17,0,4);
		t.source = "xjj_frame_qiandt";
		t.percentWidth = 100;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,17,0,4);
		t.source = "xjj_icon_zuanshi";
		t.y = 67.32;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "第 一 天";
		t.textColor = 0x633612;
		t.y = 13.62;
		return t;
	};
	_proto.rewardValueLabel_i = function () {
		var t = new eui.Label();
		this.rewardValueLabel = t;
		t.bold = true;
		t.bottom = 13;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x833f1d;
		t.text = "X 200";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.percentWidth = 100;
		return t;
	};
	_proto.finish_i = function () {
		var t = new eui.Group();
		this.finish = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,14,2,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_frame_qiandldi";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_yiling";
		t.verticalCenter = 0;
		return t;
	};
	return checkInItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/checkInPanel.exml'] = window.checkInPanelSkin = (function (_super) {
	__extends(checkInPanelSkin, _super);
	var checkInPanelSkin$Skin8 = 	(function (_super) {
		__extends(checkInPanelSkin$Skin8, _super);
		function checkInPanelSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = checkInPanelSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return checkInPanelSkin$Skin8;
	})(eui.Skin);

	var checkInPanelSkin$Skin9 = 	(function (_super) {
		__extends(checkInPanelSkin$Skin9, _super);
		function checkInPanelSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = checkInPanelSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return checkInPanelSkin$Skin9;
	})(eui.Skin);

	var checkInPanelSkin$Skin10 = 	(function (_super) {
		__extends(checkInPanelSkin$Skin10, _super);
		function checkInPanelSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = checkInPanelSkin$Skin10.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return checkInPanelSkin$Skin10;
	})(eui.Skin);

	function checkInPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","doubleBtn","getBtn","itemConstainer"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = checkInPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this.doubleBtn_i(),this.getBtn_i(),this.itemConstainer_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 776.13;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = -65;
		t.width = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.y = 111.04;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3;
		t.source = "xjj_tcbt_2";
		t.y = 124.11;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 96;
		t.skinName = checkInPanelSkin$Skin8;
		return t;
	};
	_proto.doubleBtn_i = function () {
		var t = new MyButton();
		this.doubleBtn = t;
		t.height = 82;
		t.label = "双倍领取";
		t.right = 223;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 773;
		t.width = 194;
		t.skinName = checkInPanelSkin$Skin9;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 51;
		t.horizontalCenter = 0;
		t.label = "直接领取";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 86;
		t.skinName = checkInPanelSkin$Skin10;
		return t;
	};
	_proto.itemConstainer_i = function () {
		var t = new eui.Group();
		this.itemConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 572;
		t.horizontalCenter = -0.5;
		t.verticalCenter = -90;
		t.width = 549.34;
		t.elementsContent = [this._checkInItem1_i(),this._checkInItem2_i(),this._checkInItem3_i(),this._checkInItem4_i(),this._checkInItem5_i(),this._checkInItem6_i(),this._checkInItem7_i()];
		return t;
	};
	_proto._checkInItem1_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 14;
		t.y = 32;
		return t;
	};
	_proto._checkInItem2_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 195.34;
		t.y = 32;
		return t;
	};
	_proto._checkInItem3_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 374.66;
		t.y = 32;
		return t;
	};
	_proto._checkInItem4_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 12;
		t.y = 215;
		return t;
	};
	_proto._checkInItem5_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 194.66;
		t.y = 215;
		return t;
	};
	_proto._checkInItem6_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 162;
		t.x = 375.35;
		t.y = 215;
		return t;
	};
	_proto._checkInItem7_i = function () {
		var t = new checkInItem();
		t.height = 162;
		t.width = 299;
		t.x = 125.36;
		t.y = 396;
		return t;
	};
	return checkInPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/GamePanel.exml'] = window.GamePanelSkin = (function (_super) {
	__extends(GamePanelSkin, _super);
	var GamePanelSkin$Skin11 = 	(function (_super) {
		__extends(GamePanelSkin$Skin11, _super);
		function GamePanelSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_jia";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin11;
	})(eui.Skin);

	var GamePanelSkin$Skin12 = 	(function (_super) {
		__extends(GamePanelSkin$Skin12, _super);
		function GamePanelSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_8";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin12;
	})(eui.Skin);

	var GamePanelSkin$Skin13 = 	(function (_super) {
		__extends(GamePanelSkin$Skin13, _super);
		function GamePanelSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin13;
	})(eui.Skin);

	var GamePanelSkin$Skin14 = 	(function (_super) {
		__extends(GamePanelSkin$Skin14, _super);
		function GamePanelSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_9";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin14;
	})(eui.Skin);

	var GamePanelSkin$Skin15 = 	(function (_super) {
		__extends(GamePanelSkin$Skin15, _super);
		function GamePanelSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin15;
	})(eui.Skin);

	var GamePanelSkin$Skin16 = 	(function (_super) {
		__extends(GamePanelSkin$Skin16, _super);
		function GamePanelSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 44;
			t.anchorOffsetY = 44;
			t.horizontalCenter = 0;
			t.source = "xjj_icon_10";
			t.y = 44;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "xjj_icon_11";
			t.verticalCenter = 39.5;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = -36;
			t.verticalCenter = 48;
			return t;
		};
		return GamePanelSkin$Skin16;
	})(eui.Skin);

	var GamePanelSkin$Skin17 = 	(function (_super) {
		__extends(GamePanelSkin$Skin17, _super);
		function GamePanelSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin17;
	})(eui.Skin);

	var GamePanelSkin$Skin18 = 	(function (_super) {
		__extends(GamePanelSkin$Skin18, _super);
		function GamePanelSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin18;
	})(eui.Skin);

	var GamePanelSkin$Skin19 = 	(function (_super) {
		__extends(GamePanelSkin$Skin19, _super);
		function GamePanelSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin19;
	})(eui.Skin);

	var GamePanelSkin$Skin20 = 	(function (_super) {
		__extends(GamePanelSkin$Skin20, _super);
		function GamePanelSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_buttom_2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin20;
	})(eui.Skin);

	var GamePanelSkin$Skin21 = 	(function (_super) {
		__extends(GamePanelSkin$Skin21, _super);
		function GamePanelSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_buttom_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin21;
	})(eui.Skin);

	var GamePanelSkin$Skin22 = 	(function (_super) {
		__extends(GamePanelSkin$Skin22, _super);
		function GamePanelSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay","Level"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i(),this.Level_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_buttom_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = -2.5;
			t.scaleX = 0.4;
			t.scaleY = 0.4;
			t.source = "";
			t.visible = false;
			t.y = -26;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.anchorOffsetX = 0;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 47;
			t.size = 32;
			t.text = "";
			t.textAlign = "left";
			t.textColor = 0x0c441e;
			t.verticalCenter = 10;
			t.width = 156;
			return t;
		};
		_proto.Level_i = function () {
			var t = new eui.Label();
			this.Level = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.size = 28;
			t.text = "";
			t.textColor = 0x42330b;
			t.y = 18.96;
			return t;
		};
		return GamePanelSkin$Skin22;
	})(eui.Skin);

	var GamePanelSkin$Skin23 = 	(function (_super) {
		__extends(GamePanelSkin$Skin23, _super);
		function GamePanelSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_buttom_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.anchorOffsetX = 0;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 32;
			t.text = "加速";
			t.textAlign = "left";
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			t.width = 73;
			return t;
		};
		return GamePanelSkin$Skin23;
	})(eui.Skin);

	var GamePanelSkin$Skin24 = 	(function (_super) {
		__extends(GamePanelSkin$Skin24, _super);
		function GamePanelSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["selectDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqhb";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqha";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.source = "xjj_icon_qhxjj";
			t.x = 16.64;
			t.y = 12.46;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 25.5;
			t.size = 26;
			t.text = "小姐姐";
			t.textColor = 0x724514;
			t.verticalCenter = 6.5;
			return t;
		};
		return GamePanelSkin$Skin24;
	})(eui.Skin);

	var GamePanelSkin$Skin25 = 	(function (_super) {
		__extends(GamePanelSkin$Skin25, _super);
		function GamePanelSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["selectDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqhb";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqha";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.source = "xjj_icon_qhxgg";
			t.x = 16.64;
			t.y = 12.46;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 25.5;
			t.size = 26;
			t.text = "小姐姐";
			t.textColor = 0x724514;
			t.verticalCenter = 6.5;
			return t;
		};
		return GamePanelSkin$Skin25;
	})(eui.Skin);

	var GamePanelSkin$Skin26 = 	(function (_super) {
		__extends(GamePanelSkin$Skin26, _super);
		function GamePanelSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["selectDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqhb";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.anchorOffsetX = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(36,0,0,69);
			t.source = "xjj_buttom_jsqha";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.source = "xjj_icon_qhxcw";
			t.x = 16.64;
			t.y = 12.46;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 25.5;
			t.size = 26;
			t.text = "小姐姐";
			t.textColor = 0x724514;
			t.verticalCenter = 6.5;
			return t;
		};
		return GamePanelSkin$Skin26;
	})(eui.Skin);

	var GamePanelSkin$Skin27 = 	(function (_super) {
		__extends(GamePanelSkin$Skin27, _super);
		function GamePanelSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "box_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin27;
	})(eui.Skin);

	function GamePanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","totalGold","secGold","goldGroup","totalDiamond","diamondBtn","diamondGroup","backBtn","phbBtn","checkInBtn","lingzuanBtn","zhuanpanBtn","howBtn","tousuBtn","randomBoxBtn","timeLabel","huishou","top","bottom_bg","speedBtn","shopBtn","creatBtn","hitSpeedBtn","speed_hd","shop_hd","bottom1","middle_bg","dizuoGroup","typeBtn1","typeBtn2","typeBtn3","Xjj0","Xjj1","Xjj2","Xjj3","Xjj4","Xjj5","Xjj6","Xjj7","Xjj8","Xjj9","Xjj10","Xjj11","boxBtn","xjjContainer","middleGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.top_i(),this.bottom1_i(),this.middleGroup_i()];
	}
	var _proto = GamePanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "xjj_backg_da_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Group();
		this.top = t;
		t.percentHeight = 100;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this.goldGroup_i(),this.diamondGroup_i(),this.backBtn_i(),this.phbBtn_i(),this.checkInBtn_i(),this.lingzuanBtn_i(),this.zhuanpanBtn_i(),this.howBtn_i(),this.tousuBtn_i(),this.randomBoxBtn_i(),this.timeLabel_i(),this.huishou_i()];
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 6;
		t.top = 58;
		t.width = 182;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.totalGold_i(),this.secGold_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.67;
		t.scale9Grid = new egret.Rectangle(14,12,0,0);
		t.source = "xjj_backg_jinbi";
		t.width = 175.34;
		t.x = 5.65;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "xjj_icon_jinbi";
		t.width = 40;
		t.x = 9.64;
		t.y = 10.06;
		return t;
	};
	_proto.totalGold_i = function () {
		var t = new eui.Label();
		this.totalGold = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "";
		t.width = 118;
		t.x = 57.33;
		t.y = 6.31;
		return t;
	};
	_proto.secGold_i = function () {
		var t = new eui.Label();
		this.secGold = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textAlign = "right";
		t.width = 124.67;
		t.x = 55.34;
		t.y = 36.31;
		return t;
	};
	_proto.diamondGroup_i = function () {
		var t = new eui.Group();
		this.diamondGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.left = 183;
		t.top = 52;
		t.width = 198;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.totalDiamond_i(),this.diamondBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.67;
		t.scale9Grid = new egret.Rectangle(14,12,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_backg_jinbi";
		t.width = 128.67;
		t.x = 33.99000000000001;
		t.y = 16.66;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(14,12,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_icon_zuanshi";
		t.x = 6.639999999999986;
		t.y = 12.65;
		return t;
	};
	_proto.totalDiamond_i = function () {
		var t = new eui.Label();
		this.totalDiamond = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.width = 90.01;
		t.x = 62.650000000000006;
		t.y = 21.309999999999995;
		return t;
	};
	_proto.diamondBtn_i = function () {
		var t = new MyButton();
		this.diamondBtn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 37;
		t.x = 160;
		t.y = 13.99;
		t.skinName = GamePanelSkin$Skin11;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new MyButton();
		this.backBtn = t;
		t.label = "";
		t.left = 1;
		t.top = 124;
		t.skinName = GamePanelSkin$Skin12;
		return t;
	};
	_proto.phbBtn_i = function () {
		var t = new MyButton();
		this.phbBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 30.96;
		t.y = 124.35;
		t.skinName = GamePanelSkin$Skin13;
		return t;
	};
	_proto.checkInBtn_i = function () {
		var t = new MyButton();
		this.checkInBtn = t;
		t.horizontalCenter = -119;
		t.label = "";
		t.top = 124;
		t.skinName = GamePanelSkin$Skin14;
		return t;
	};
	_proto.lingzuanBtn_i = function () {
		var t = new MyButton();
		this.lingzuanBtn = t;
		t.horizontalCenter = 9;
		t.label = "";
		t.top = 124;
		t.skinName = GamePanelSkin$Skin15;
		return t;
	};
	_proto.zhuanpanBtn_i = function () {
		var t = new MyButton();
		this.zhuanpanBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 798;
		t.height = 110;
		t.horizontalCenter = 10;
		t.label = "";
		t.width = 96;
		t.skinName = GamePanelSkin$Skin16;
		return t;
	};
	_proto.howBtn_i = function () {
		var t = new MyButton();
		this.howBtn = t;
		t.horizontalCenter = 137;
		t.label = "";
		t.top = 124;
		t.skinName = GamePanelSkin$Skin17;
		return t;
	};
	_proto.tousuBtn_i = function () {
		var t = new MyButton();
		this.tousuBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 513.66;
		t.y = 124.35;
		t.skinName = GamePanelSkin$Skin18;
		return t;
	};
	_proto.randomBoxBtn_i = function () {
		var t = new MyButton();
		this.randomBoxBtn = t;
		t.anchorOffsetX = 39.5;
		t.anchorOffsetY = 44.5;
		t.bottom = 818;
		t.horizontalCenter = -153.5;
		t.label = "";
		t.skinName = GamePanelSkin$Skin19;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.bold = true;
		t.bottom = 792;
		t.horizontalCenter = -151;
		t.italic = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		return t;
	};
	_proto.huishou_i = function () {
		var t = new eui.Image();
		this.huishou = t;
		t.bottom = 797;
		t.horizontalCenter = 254;
		t.source = "xjj_icon_huishou";
		return t;
	};
	_proto.bottom1_i = function () {
		var t = new eui.Group();
		this.bottom1 = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 124;
		t.left = 0;
		t.right = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.bottom_bg_i(),this.speedBtn_i(),this.shopBtn_i(),this.creatBtn_i(),this.hitSpeedBtn_i(),this.speed_hd_i(),this.shop_hd_i()];
		return t;
	};
	_proto.bottom_bg_i = function () {
		var t = new eui.Image();
		this.bottom_bg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(323,14,60,88);
		t.source = "xjj_backg_dibu_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.speedBtn_i = function () {
		var t = new MyButton();
		this.speedBtn = t;
		t.bottom = 2;
		t.label = "";
		t.left = 10;
		t.skinName = GamePanelSkin$Skin20;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new MyButton();
		this.shopBtn = t;
		t.bottom = 2;
		t.label = "";
		t.right = 8;
		t.skinName = GamePanelSkin$Skin21;
		return t;
	};
	_proto.creatBtn_i = function () {
		var t = new MyButton();
		this.creatBtn = t;
		t.bottom = 2;
		t.horizontalCenter = -1;
		t.label = "";
		t.skinName = GamePanelSkin$Skin22;
		return t;
	};
	_proto.hitSpeedBtn_i = function () {
		var t = new MyButton();
		this.hitSpeedBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 64;
		t.height = 75;
		t.horizontalCenter = 90;
		t.label = "加速";
		t.visible = false;
		t.width = 146;
		t.skinName = GamePanelSkin$Skin23;
		return t;
	};
	_proto.speed_hd_i = function () {
		var t = new eui.Image();
		this.speed_hd = t;
		t.bottom = 67;
		t.height = 20;
		t.left = 133;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_icon_hdian";
		t.width = 20;
		return t;
	};
	_proto.shop_hd_i = function () {
		var t = new eui.Image();
		this.shop_hd = t;
		t.bottom = 67;
		t.height = 20;
		t.right = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_icon_hdian";
		t.width = 20;
		return t;
	};
	_proto.middleGroup_i = function () {
		var t = new eui.Group();
		this.middleGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 142;
		t.height = 650;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.middle_bg_i(),this._Image5_i(),this.dizuoGroup_i(),this.typeBtn1_i(),this.typeBtn2_i(),this.typeBtn3_i(),this.xjjContainer_i()];
		return t;
	};
	_proto.middle_bg_i = function () {
		var t = new eui.Image();
		this.middle_bg = t;
		t.height = 652;
		t.scale9Grid = new egret.Rectangle(57,55,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_backg_jsdi";
		t.width = 640;
		t.x = -0.51;
		t.y = 1.910000000000025;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(57,55,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_backg_jsdijs_png";
		t.x = 256.5;
		t.y = 187.74;
		return t;
	};
	_proto.dizuoGroup_i = function () {
		var t = new eui.Group();
		this.dizuoGroup = t;
		t.anchorOffsetY = 0;
		t.height = 538;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -51;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 4;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 47.65;
		t.y = 140.24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 208.15000000000003;
		t.y = 140.24;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 364.15;
		t.y = 140.24;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 510.68000000000006;
		t.y = 140.24;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 47.65;
		t.y = 316.39;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 208.15000000000003;
		t.y = 316.39;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 364.15;
		t.y = 316.39;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 510.68000000000006;
		t.y = 316.39;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 47.65;
		t.y = 499.2500000000001;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 208.15000000000003;
		t.y = 499.2500000000001;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 364.15;
		t.y = 499.2500000000001;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_img_juesedi";
		t.x = 510.68000000000006;
		t.y = 499.2500000000001;
		return t;
	};
	_proto.typeBtn1_i = function () {
		var t = new ToggleBtn();
		this.typeBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.04;
		t.label = "小姐姐";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 171.71;
		t.x = 32.49;
		t.y = 542.7;
		t.skinName = GamePanelSkin$Skin24;
		return t;
	};
	_proto.typeBtn2_i = function () {
		var t = new ToggleBtn();
		this.typeBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.04;
		t.label = "小哥哥";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 171.71;
		t.x = 233.43;
		t.y = 542.7;
		t.skinName = GamePanelSkin$Skin25;
		return t;
	};
	_proto.typeBtn3_i = function () {
		var t = new ToggleBtn();
		this.typeBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.04;
		t.label = "小宠物";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 171.71;
		t.x = 435.83;
		t.y = 541.18;
		t.skinName = GamePanelSkin$Skin26;
		return t;
	};
	_proto.xjjContainer_i = function () {
		var t = new eui.Group();
		this.xjjContainer = t;
		t.anchorOffsetY = 0;
		t.height = 542.42;
		t.horizontalCenter = 0;
		t.verticalCenter = -54;
		t.width = 640;
		t.elementsContent = [this.Xjj0_i(),this.Xjj1_i(),this.Xjj2_i(),this.Xjj3_i(),this.Xjj4_i(),this.Xjj5_i(),this.Xjj6_i(),this.Xjj7_i(),this.Xjj8_i(),this.Xjj9_i(),this.Xjj10_i(),this.Xjj11_i(),this.boxBtn_i()];
		return t;
	};
	_proto.Xjj0_i = function () {
		var t = new XjjModel();
		this.Xjj0 = t;
		t.x = 23.7;
		t.y = -0.69;
		return t;
	};
	_proto.Xjj1_i = function () {
		var t = new XjjModel();
		this.Xjj1 = t;
		t.x = 182.83;
		t.y = -0.69;
		return t;
	};
	_proto.Xjj2_i = function () {
		var t = new XjjModel();
		this.Xjj2 = t;
		t.x = 338.29;
		t.y = -0.69;
		return t;
	};
	_proto.Xjj3_i = function () {
		var t = new XjjModel();
		this.Xjj3 = t;
		t.x = 486.14;
		t.y = -0.69;
		return t;
	};
	_proto.Xjj4_i = function () {
		var t = new XjjModel();
		this.Xjj4 = t;
		t.x = 23.7;
		t.y = 171.68;
		return t;
	};
	_proto.Xjj5_i = function () {
		var t = new XjjModel();
		this.Xjj5 = t;
		t.x = 182.83;
		t.y = 171.68;
		return t;
	};
	_proto.Xjj6_i = function () {
		var t = new XjjModel();
		this.Xjj6 = t;
		t.x = 338.29;
		t.y = 171.68;
		return t;
	};
	_proto.Xjj7_i = function () {
		var t = new XjjModel();
		this.Xjj7 = t;
		t.x = 486.14;
		t.y = 171.68;
		return t;
	};
	_proto.Xjj8_i = function () {
		var t = new XjjModel();
		this.Xjj8 = t;
		t.x = 23.7;
		t.y = 357.21;
		return t;
	};
	_proto.Xjj9_i = function () {
		var t = new XjjModel();
		this.Xjj9 = t;
		t.x = 182.83;
		t.y = 357.21;
		return t;
	};
	_proto.Xjj10_i = function () {
		var t = new XjjModel();
		this.Xjj10 = t;
		t.x = 338.29;
		t.y = 357.21;
		return t;
	};
	_proto.Xjj11_i = function () {
		var t = new XjjModel();
		this.Xjj11 = t;
		t.x = 486.14;
		t.y = 357.21;
		return t;
	};
	_proto.boxBtn_i = function () {
		var t = new MyButton();
		this.boxBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 100;
		t.x = 40;
		t.y = 65;
		t.skinName = GamePanelSkin$Skin27;
		return t;
	};
	return GamePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/HowToPlayPanel.exml'] = window.HowToPlayPanelSkin = (function (_super) {
	__extends(HowToPlayPanelSkin, _super);
	var HowToPlayPanelSkin$Skin28 = 	(function (_super) {
		__extends(HowToPlayPanelSkin$Skin28, _super);
		function HowToPlayPanelSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HowToPlayPanelSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HowToPlayPanelSkin$Skin28;
	})(eui.Skin);

	function HowToPlayPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HowToPlayPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 880.78;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 26.5;
		t.width = 606.67;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = -4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 134;
		t.skinName = HowToPlayPanelSkin$Skin28;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_wanfa2_png";
		t.y = 287.48;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_wanfa1_png";
		t.y = 570.85;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "如何购买角色";
		t.textColor = 0xce0e0e;
		t.x = 60.56;
		t.y = 190.56;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "可在界面下方或者商店中购买";
		t.textColor = 0x833f1d;
		t.x = 61.45;
		t.y = 242.99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 64;
		t.lineSpacing = 8;
		t.size = 24;
		t.text = "两个同等级的角色拖拽到一起，即可合成更高级的角色";
		t.textColor = 0x833F1D;
		t.width = 526.67;
		t.x = 54.11;
		t.y = 496.99;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 66.67;
		t.lineSpacing = 8;
		t.size = 24;
		t.text = "每隔一段时间就会自动加金币，角色等级越高金币得钱越快";
		t.textColor = 0x833F1D;
		t.width = 494.67;
		t.x = 54.8;
		t.y = 789.64;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "1、点击加速获得更多金币";
		t.textColor = 0x833F1D;
		t.x = 55.45;
		t.y = 926.33;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "2、一段时间后就登录一次，可获得更多离线收益";
		t.textColor = 0x833F1D;
		t.x = 53.44;
		t.y = 956.33;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "如何合成";
		t.textColor = 0xce0e0e;
		t.x = 54.48;
		t.y = 442.99;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "如何赚金币";
		t.textColor = 0xce0e0e;
		t.x = 54.79;
		t.y = 739.32;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "如何获得更多收益";
		t.textColor = 0xce0e0e;
		t.x = 54.18;
		t.y = 872.07;
		return t;
	};
	return HowToPlayPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/LixianPanel.exml'] = window.LixianPanelSkin = (function (_super) {
	__extends(LixianPanelSkin, _super);
	var LixianPanelSkin$Skin29 = 	(function (_super) {
		__extends(LixianPanelSkin$Skin29, _super);
		function LixianPanelSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LixianPanelSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return LixianPanelSkin$Skin29;
	})(eui.Skin);

	var LixianPanelSkin$Skin30 = 	(function (_super) {
		__extends(LixianPanelSkin$Skin30, _super);
		function LixianPanelSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LixianPanelSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -2;
			t.size = 34;
			t.text = "";
			t.textColor = 0x0c441e;
			t.verticalCenter = -3.5;
			return t;
		};
		return LixianPanelSkin$Skin30;
	})(eui.Skin);

	function LixianPanelSkin() {
		_super.call(this);
		this.skinParts = ["runBg","getGoldValue","closeBtn","shareBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LixianPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.runBg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.getGoldValue_i(),this.closeBtn_i(),this.shareBtn_i(),this._Label1_i()];
		return t;
	};
	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.horizontalCenter = 2;
		t.source = "xjj_xguo_guang2_png";
		t.verticalCenter = -42.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtlan";
		t.verticalCenter = -282.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "xjj_tcbt_8";
		t.verticalCenter = -296;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -97;
		t.source = "xjj_icon_jinbi";
		t.verticalCenter = -42;
		return t;
	};
	_proto.getGoldValue_i = function () {
		var t = new eui.Label();
		this.getGoldValue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48;
		t.horizontalCenter = 115;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.width = 268;
		t.y = 501.58;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.horizontalCenter = 0;
		t.label = "直接领取";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 823;
		t.width = 197.33;
		t.y = 134;
		t.skinName = LixianPanelSkin$Skin29;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 0;
		t.height = 82;
		t.label = "双倍领取";
		t.right = 214;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 724;
		t.width = 212.66;
		t.x = 223;
		t.y = 841;
		t.skinName = LixianPanelSkin$Skin30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "离线最大收益2小时";
		t.y = 340;
		return t;
	};
	return LixianPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/NotEnoughRewardPanel.exml'] = window.NotEnoughRewardPanelSkin = (function (_super) {
	__extends(NotEnoughRewardPanelSkin, _super);
	var NotEnoughRewardPanelSkin$Skin31 = 	(function (_super) {
		__extends(NotEnoughRewardPanelSkin$Skin31, _super);
		function NotEnoughRewardPanelSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NotEnoughRewardPanelSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 35;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return NotEnoughRewardPanelSkin$Skin31;
	})(eui.Skin);

	var NotEnoughRewardPanelSkin$Skin32 = 	(function (_super) {
		__extends(NotEnoughRewardPanelSkin$Skin32, _super);
		function NotEnoughRewardPanelSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NotEnoughRewardPanelSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NotEnoughRewardPanelSkin$Skin32;
	})(eui.Skin);

	function NotEnoughRewardPanelSkin() {
		_super.call(this);
		this.skinParts = ["runBg","jlResName","title","jlCount","okBtn","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = NotEnoughRewardPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 522;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.runBg_i(),this.jlResName_i(),this.title_i(),this.jlCount_i(),this.okBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 0;
		t.width = 500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.top = 0;
		return t;
	};
	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.horizontalCenter = 0.5;
		t.source = "xjj_xguo_guang_png";
		t.verticalCenter = -51.5;
		return t;
	};
	_proto.jlResName_i = function () {
		var t = new eui.Image();
		this.jlResName = t;
		t.horizontalCenter = -3;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "xjj_icon_zuanshi";
		t.verticalCenter = -51.5;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 35;
		t.text = "钻  石";
		t.textAlign = "center";
		t.width = 192.67;
		t.x = 153.67;
		t.y = 9;
		return t;
	};
	_proto.jlCount_i = function () {
		var t = new eui.Label();
		this.jlCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "+400";
		t.textAlign = "center";
		t.textColor = 0x833f1d;
		t.verticalCenter = 76;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new MyButton();
		this.okBtn = t;
		t.bottom = 54;
		t.height = 82;
		t.horizontalCenter = 0;
		t.label = "领 取";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.skinName = NotEnoughRewardPanelSkin$Skin31;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = -20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -28;
		t.skinName = NotEnoughRewardPanelSkin$Skin32;
		return t;
	};
	return NotEnoughRewardPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/RandomAwardPanel.exml'] = window.RandomAwardPanelSkin = (function (_super) {
	__extends(RandomAwardPanelSkin, _super);
	var RandomAwardPanelSkin$Skin33 = 	(function (_super) {
		__extends(RandomAwardPanelSkin$Skin33, _super);
		function RandomAwardPanelSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RandomAwardPanelSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return RandomAwardPanelSkin$Skin33;
	})(eui.Skin);

	var RandomAwardPanelSkin$Skin34 = 	(function (_super) {
		__extends(RandomAwardPanelSkin$Skin34, _super);
		function RandomAwardPanelSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RandomAwardPanelSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return RandomAwardPanelSkin$Skin34;
	})(eui.Skin);

	function RandomAwardPanelSkin() {
		_super.call(this);
		this.skinParts = ["titleType","gaintypeImg","gainCount","lingquBtn","lingqu4beiBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RandomAwardPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.titleType_i(),this._Image4_i(),this.gaintypeImg_i(),this.gainCount_i(),this.lingquBtn_i(),this.lingqu4beiBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 0;
		t.width = 500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.y = 307;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -2;
		t.source = "xjj_tcbt_3";
		t.visible = false;
		t.y = 315.51;
		return t;
	};
	_proto.titleType_i = function () {
		var t = new eui.Label();
		this.titleType = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 38;
		t.stroke = 2;
		t.strokeColor = 0x752308;
		t.text = "金        币";
		t.y = 315.38;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -1.5;
		t.source = "xjj_xguo_guang_png";
		t.y = 385.2;
		return t;
	};
	_proto.gaintypeImg_i = function () {
		var t = new eui.Image();
		this.gaintypeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "xjj_icon_jinbi";
		t.y = 462.44;
		return t;
	};
	_proto.gainCount_i = function () {
		var t = new eui.Label();
		this.gainCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 62;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new MyButton();
		this.lingquBtn = t;
		t.height = 82;
		t.horizontalCenter = -112;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 694;
		t.width = 194;
		t.y = 841;
		t.skinName = RandomAwardPanelSkin$Skin33;
		return t;
	};
	_proto.lingqu4beiBtn_i = function () {
		var t = new MyButton();
		this.lingqu4beiBtn = t;
		t.height = 82;
		t.horizontalCenter = 120;
		t.label = "4倍领取";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 690;
		t.width = 194;
		t.y = 841;
		t.skinName = RandomAwardPanelSkin$Skin34;
		return t;
	};
	return RandomAwardPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ShareGainQuan.exml'] = window.ShareGainQuanSkin = (function (_super) {
	__extends(ShareGainQuanSkin, _super);
	var ShareGainQuanSkin$Skin35 = 	(function (_super) {
		__extends(ShareGainQuanSkin$Skin35, _super);
		function ShareGainQuanSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareGainQuanSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return ShareGainQuanSkin$Skin35;
	})(eui.Skin);

	var ShareGainQuanSkin$Skin36 = 	(function (_super) {
		__extends(ShareGainQuanSkin$Skin36, _super);
		function ShareGainQuanSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareGainQuanSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return ShareGainQuanSkin$Skin36;
	})(eui.Skin);

	function ShareGainQuanSkin() {
		_super.call(this);
		this.skinParts = ["infoText","shareBtn","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShareGainQuanSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 522;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.infoText_i(),this.shareBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 0;
		t.width = 500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_tcbt_10";
		t.top = 8;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "xjj_zhuan_quan";
		t.verticalCenter = -66.5;
		return t;
	};
	_proto.infoText_i = function () {
		var t = new eui.Label();
		this.infoText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.text = "分享到群可获取2张转盘券";
		t.textAlign = "center";
		t.verticalCenter = 56;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.bottom = 54;
		t.height = 82;
		t.horizontalCenter = 0;
		t.label = "领取转盘券";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.skinName = ShareGainQuanSkin$Skin35;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = -30;
		t.horizontalCenter = 0.5;
		t.label = "算了，谢谢!";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 176.67;
		t.skinName = ShareGainQuanSkin$Skin36;
		return t;
	};
	return ShareGainQuanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ShopPanel.exml'] = window.ShopPanelSkin = (function (_super) {
	__extends(ShopPanelSkin, _super);
	var ShopPanelSkin$Skin37 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin37, _super);
		function ShopPanelSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPanelSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopPanelSkin$Skin37;
	})(eui.Skin);

	function ShopPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","goldNum","goldGroup","diamondNum","diamondGroup","xjjGroup","scroll"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this.goldGroup_i(),this.diamondGroup_i(),this.scroll_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 822.12;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = -20;
		t.width = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.y = 130.85;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3.5;
		t.source = "xjj_tcbt_1";
		t.y = 141.49;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 106;
		t.skinName = ShopPanelSkin$Skin37;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.12;
		t.width = 189.39;
		t.x = 47.27;
		t.y = 208;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.goldNum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scale9Grid = new egret.Rectangle(15,12,0,0);
		t.source = "xjj_backg_tcjb";
		t.width = 156;
		t.x = 24;
		t.y = 11.34;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "xjj_icon_jinbi";
		t.width = 40;
		t.x = 4.31;
		t.y = 8.67;
		return t;
	};
	_proto.goldNum_i = function () {
		var t = new eui.Label();
		this.goldNum = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "22001";
		t.textAlign = "center";
		t.width = 136;
		t.x = 40;
		t.y = 14.97;
		return t;
	};
	_proto.diamondGroup_i = function () {
		var t = new eui.Group();
		this.diamondGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.12;
		t.width = 189.39;
		t.x = 240.27;
		t.y = 208;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.diamondNum_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scale9Grid = new egret.Rectangle(15,12,0,0);
		t.source = "xjj_backg_tcjb";
		t.width = 156;
		t.x = 24;
		t.y = 11.34;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_zuanshi";
		t.x = 4.31;
		t.y = 8.67;
		return t;
	};
	_proto.diamondNum_i = function () {
		var t = new eui.Label();
		this.diamondNum = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "3500";
		t.textAlign = "center";
		t.width = 126;
		t.x = 48;
		t.y = 14.97;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 621.21;
		t.horizontalCenter = -0.5;
		t.width = 553.03;
		t.y = 276.15;
		t.viewport = this.xjjGroup_i();
		return t;
	};
	_proto.xjjGroup_i = function () {
		var t = new eui.Group();
		this.xjjGroup = t;
		return t;
	};
	return ShopPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ShopXjjItemSkin.exml'] = window.ShopXjjItemSkinSkin = (function (_super) {
	__extends(ShopXjjItemSkinSkin, _super);
	var ShopXjjItemSkinSkin$Skin38 = 	(function (_super) {
		__extends(ShopXjjItemSkinSkin$Skin38, _super);
		function ShopXjjItemSkinSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["buyBg","labelDisplay"];
			
			this.elementsContent = [this.buyBg_i(),this.labelDisplay_i(),this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopXjjItemSkinSkin$Skin38.prototype;

		_proto.buyBg_i = function () {
			var t = new eui.Image();
			this.buyBg = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(40,11,0,67);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 18.5;
			t.size = 30;
			t.textColor = 0x0c441e;
			t.verticalCenter = -2;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 34;
			t.source = "xjj_icon_jinbilv";
			t.width = 34;
			t.x = 16.67;
			t.y = 27.33;
			return t;
		};
		return ShopXjjItemSkinSkin$Skin38;
	})(eui.Skin);

	function ShopXjjItemSkinSkin() {
		_super.call(this);
		this.skinParts = ["level","xjjImage","buyBtn","xjjImage_open","openLevel","openGroup"];
		
		this.height = 161;
		this.width = 548;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopXjjItemSkinSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 161;
		t.width = 547.67;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.level_i(),this._Image3_i(),this.xjjImage_i(),this.buyBtn_i(),this.openGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(28,29,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_backg_tcsd";
		t.width = 540;
		t.x = 3.69;
		t.y = 6.48;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_jsdj";
		t.x = 44;
		t.y = 58.32;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.width = 27;
		t.x = 48.68;
		t.y = 67.7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.71;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "xjj_img_juesedi";
		t.width = 94.43;
		t.x = 125.36;
		t.y = 112.34;
		return t;
	};
	_proto.xjjImage_i = function () {
		var t = new eui.Image();
		this.xjjImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.width = 140;
		t.x = 112.02;
		t.y = -7.38;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new MyButton();
		this.buyBtn = t;
		t.height = 89;
		t.label = "";
		t.right = 33.66999999999996;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 31;
		t.width = 200;
		t.skinName = ShopXjjItemSkinSkin$Skin38;
		return t;
	};
	_proto.openGroup_i = function () {
		var t = new eui.Group();
		this.openGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.width = 144;
		t.x = 345;
		t.y = 17;
		t.elementsContent = [this.xjjImage_open_i(),this.openLevel_i()];
		return t;
	};
	_proto.xjjImage_open_i = function () {
		var t = new eui.Image();
		this.xjjImage_open = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.width = 140;
		t.x = 30.35;
		t.y = -15.03;
		return t;
	};
	_proto.openLevel_i = function () {
		var t = new eui.Label();
		this.openLevel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "center";
		t.width = 40;
		t.x = 59.68;
		t.y = 52.7;
		return t;
	};
	return ShopXjjItemSkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/SpeedupPanel.exml'] = window.SpeedupPanelSkin = (function (_super) {
	__extends(SpeedupPanelSkin, _super);
	var SpeedupPanelSkin$Skin39 = 	(function (_super) {
		__extends(SpeedupPanelSkin$Skin39, _super);
		function SpeedupPanelSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedupPanelSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SpeedupPanelSkin$Skin39;
	})(eui.Skin);

	var SpeedupPanelSkin$Skin40 = 	(function (_super) {
		__extends(SpeedupPanelSkin$Skin40, _super);
		function SpeedupPanelSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedupPanelSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,31,1,0);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 36;
			t.source = "xjj_icon_zuanshi";
			t.width = 42;
			t.x = 32.4;
			t.y = 15.6;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 22.5;
			t.size = 26;
			t.text = "X 10";
			t.textColor = 0x0c441e;
			t.verticalCenter = -3.5;
			return t;
		};
		return SpeedupPanelSkin$Skin40;
	})(eui.Skin);

	var SpeedupPanelSkin$Skin41 = 	(function (_super) {
		__extends(SpeedupPanelSkin$Skin41, _super);
		function SpeedupPanelSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedupPanelSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,31,1,0);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "xjj_icon_bofang";
			t.x = 19.68;
			t.y = 15.66;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 21.5;
			t.size = 26;
			t.text = "观看视频";
			t.textColor = 0x0c441e;
			t.verticalCenter = -2.5;
			return t;
		};
		return SpeedupPanelSkin$Skin41;
	})(eui.Skin);

	var SpeedupPanelSkin$Skin42 = 	(function (_super) {
		__extends(SpeedupPanelSkin$Skin42, _super);
		function SpeedupPanelSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedupPanelSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(31,32,3,4);
			t.source = "xjj_buttom_6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 3.5;
			t.size = 28;
			t.stroke = 2;
			t.strokeColor = 0x973a07;
			t.text = "邀请好友";
			t.textColor = 0xffffff;
			t.verticalCenter = -3;
			return t;
		};
		return SpeedupPanelSkin$Skin42;
	})(eui.Skin);

	function SpeedupPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","countDown1","costJewelBtn","costJewelGroup","countDown2","watchAdBtn","watchAdGroup","yaoQingBtn","countDown3","tipsLabel","friend1","name1","friend1Group","friend2","name2","friend2Group","friend3","name3","friend3Group","yaoqingGroup","nodisplay"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SpeedupPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this.costJewelGroup_i(),this.watchAdGroup_i(),this.yaoqingGroup_i(),this.nodisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 584.79;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 39.5;
		t.width = 582.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.y = 315;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3.5;
		t.source = "xjj_tcbt_4";
		t.y = 325.39;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 294;
		t.skinName = SpeedupPanelSkin$Skin39;
		return t;
	};
	_proto.costJewelGroup_i = function () {
		var t = new eui.Group();
		this.costJewelGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.width = 251.69;
		t.x = 59;
		t.y = 422;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.countDown1_i(),this.costJewelBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,18,0,0);
		t.source = "xjj_backg_tcsd";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "100%加速60秒";
		t.textColor = 0x833f1d;
		t.x = 35.65;
		t.y = 11.34;
		return t;
	};
	_proto.countDown1_i = function () {
		var t = new eui.Label();
		this.countDown1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "持续：60s";
		t.textColor = 0x398000;
		t.y = 47.34;
		return t;
	};
	_proto.costJewelBtn_i = function () {
		var t = new MyButton();
		this.costJewelBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "x10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 83;
		t.width = 193.4;
		t.x = 30.5;
		t.y = -128;
		t.skinName = SpeedupPanelSkin$Skin40;
		return t;
	};
	_proto.watchAdGroup_i = function () {
		var t = new eui.Group();
		this.watchAdGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.width = 251.69;
		t.x = 332;
		t.y = 422;
		t.elementsContent = [this._Image5_i(),this._Label2_i(),this.countDown2_i(),this.watchAdBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,18,0,0);
		t.source = "xjj_backg_tcsd";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "100%加速180秒";
		t.textColor = 0x833F1D;
		t.x = 27.65;
		t.y = 12.34;
		return t;
	};
	_proto.countDown2_i = function () {
		var t = new eui.Label();
		this.countDown2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "持续：180s";
		t.textColor = 0x398000;
		t.y = 47.34;
		return t;
	};
	_proto.watchAdBtn_i = function () {
		var t = new MyButton();
		this.watchAdBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "观看视频";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 83;
		t.width = 193.4;
		t.x = 26.5;
		t.y = -128;
		t.skinName = SpeedupPanelSkin$Skin41;
		return t;
	};
	_proto.yaoqingGroup_i = function () {
		var t = new eui.Group();
		this.yaoqingGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.width = 519.87;
		t.x = 62.2;
		t.y = 616.85;
		t.elementsContent = [this._Image6_i(),this.yaoQingBtn_i(),this.countDown3_i(),this._Label3_i(),this.tipsLabel_i(),this.friend1Group_i(),this.friend2Group_i(),this.friend3Group_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,18,0,0);
		t.source = "xjj_backg_tcsd";
		t.percentWidth = 100;
		return t;
	};
	_proto.yaoQingBtn_i = function () {
		var t = new MyButton();
		this.yaoQingBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "邀请好友";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 339.17;
		t.y = 68;
		t.skinName = SpeedupPanelSkin$Skin42;
		return t;
	};
	_proto.countDown3_i = function () {
		var t = new eui.Label();
		this.countDown3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "今日已领取";
		t.textAlign = "center";
		t.textColor = 0x398000;
		t.visible = false;
		t.width = 141.34;
		t.x = 348.65;
		t.y = 149.34;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ";
		t.textColor = 0x833F1D;
		t.width = 512;
		t.y = 176.35;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "邀请3名新人立即获得10小时收益";
		t.textColor = 0x833F1D;
		t.y = 200.98;
		return t;
	};
	_proto.friend1Group_i = function () {
		var t = new eui.Group();
		this.friend1Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.5;
		t.width = 83;
		t.x = 27;
		t.y = 58.5;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.friend1_i(),this.name1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "xjj_frame_jstxk";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_yqren";
		t.x = 14;
		t.y = 11;
		return t;
	};
	_proto.friend1_i = function () {
		var t = new eui.Image();
		this.friend1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.name1_i = function () {
		var t = new eui.Label();
		this.name1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "第一位";
		t.textAlign = "center";
		t.textColor = 0x833f1d;
		t.width = 82.5;
		t.x = 0;
		t.y = 89.5;
		return t;
	};
	_proto.friend2Group_i = function () {
		var t = new eui.Group();
		this.friend2Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.5;
		t.width = 83;
		t.x = 123.5;
		t.y = 58.5;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.friend2_i(),this.name2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "xjj_frame_jstxk";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_yqren";
		t.x = 14;
		t.y = 11;
		return t;
	};
	_proto.friend2_i = function () {
		var t = new eui.Image();
		this.friend2 = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.name2_i = function () {
		var t = new eui.Label();
		this.name2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "第二位";
		t.textAlign = "center";
		t.textColor = 0x833F1D;
		t.width = 82.5;
		t.x = 0;
		t.y = 89.5;
		return t;
	};
	_proto.friend3Group_i = function () {
		var t = new eui.Group();
		this.friend3Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.5;
		t.width = 83;
		t.x = 217.5;
		t.y = 58.5;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.friend3_i(),this.name3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "xjj_frame_jstxk";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_yqren";
		t.x = 14;
		t.y = 11;
		return t;
	};
	_proto.friend3_i = function () {
		var t = new eui.Image();
		this.friend3 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.name3_i = function () {
		var t = new eui.Label();
		this.name3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "第三位";
		t.textAlign = "center";
		t.textColor = 0x833F1D;
		t.width = 82.5;
		t.x = 0;
		t.y = 89.5;
		return t;
	};
	_proto.nodisplay_i = function () {
		var t = new eui.Group();
		this.nodisplay = t;
		t.height = 244;
		t.visible = false;
		t.width = 519.87;
		t.x = 62.2;
		t.y = 616.85;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(22,10,0,0);
		t.source = "xjj_backg_tcsd";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "xjj_1";
		t.x = -13.8;
		t.y = 18.2;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "xjj_1";
		t.verticalCenter = 0;
		t.x = 133.36;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "xjj_2";
		t.x = 362.84;
		t.y = 15.74;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "合成\n===>";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.width = 129;
		t.x = 258.72;
		t.y = 104;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "+";
		t.textColor = 0x333333;
		t.x = 120;
		t.y = 110;
		return t;
	};
	return SpeedupPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/StartPanel.exml'] = window.StartPanelSkin = (function (_super) {
	__extends(StartPanelSkin, _super);
	var StartPanelSkin$Skin43 = 	(function (_super) {
		__extends(StartPanelSkin$Skin43, _super);
		function StartPanelSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_dl";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin43;
	})(eui.Skin);

	var StartPanelSkin$Skin44 = 	(function (_super) {
		__extends(StartPanelSkin$Skin44, _super);
		function StartPanelSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_dl3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin44;
	})(eui.Skin);

	var StartPanelSkin$Skin45 = 	(function (_super) {
		__extends(StartPanelSkin$Skin45, _super);
		function StartPanelSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_dl4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin45;
	})(eui.Skin);

	function StartPanelSkin() {
		_super.call(this);
		this.skinParts = ["startBtn","kefuBtn","rankBtn","soundBtn","uidLabel","otherGameGroup","favlistConstainer"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = StartPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.startBtn_i(),this.kefuBtn_i(),this.rankBtn_i(),this.soundBtn_i(),this._Image2_i(),this.uidLabel_i(),this.favlistConstainer_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "beijint_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new MyButton();
		this.startBtn = t;
		t.height = 132;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.verticalCenter = 72;
		t.width = 329;
		t.skinName = StartPanelSkin$Skin43;
		return t;
	};
	_proto.kefuBtn_i = function () {
		var t = new MyButton();
		this.kefuBtn = t;
		t.height = 106;
		t.horizontalCenter = -73.5;
		t.label = "";
		t.verticalCenter = 242;
		t.width = 103;
		t.skinName = StartPanelSkin$Skin44;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new MyButton();
		this.rankBtn = t;
		t.height = 106;
		t.horizontalCenter = 83.5;
		t.label = "";
		t.verticalCenter = 242;
		t.width = 103;
		t.skinName = StartPanelSkin$Skin45;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new MyButton();
		this.soundBtn = t;
		t.height = 106;
		t.label = "";
		t.skinName = "SoundLuckBtnSkin";
		t.visible = false;
		t.width = 103;
		t.x = 428.88;
		t.y = 756.76;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 459;
		t.horizontalCenter = 18;
		t.source = "xjj_dl1_png";
		t.verticalCenter = -283.5;
		t.width = 586;
		return t;
	};
	_proto.uidLabel_i = function () {
		var t = new eui.Label();
		this.uidLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 132.5;
		t.text = "id:";
		t.textColor = 0x0852af;
		t.verticalCenter = -95;
		return t;
	};
	_proto.favlistConstainer_i = function () {
		var t = new eui.Group();
		this.favlistConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 98;
		t.height = 153;
		t.horizontalCenter = -3;
		t.width = 378;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 151;
		t.scale9Grid = new egret.Rectangle(15,17,2,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.visible = false;
		t.width = 378;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "猜你喜欢";
		t.textColor = 0xffffff;
		t.visible = false;
		t.width = 36;
		t.x = 14.960000000000008;
		t.y = 26.33000000000004;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.visible = false;
		t.width = 313;
		t.x = 55;
		t.y = 24;
		t.viewport = this.otherGameGroup_i();
		return t;
	};
	_proto.otherGameGroup_i = function () {
		var t = new eui.Group();
		this.otherGameGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 1.52;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	return StartPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/UnlockPanel.exml'] = window.UnlockPanelSkin = (function (_super) {
	__extends(UnlockPanelSkin, _super);
	var UnlockPanelSkin$Skin46 = 	(function (_super) {
		__extends(UnlockPanelSkin$Skin46, _super);
		function UnlockPanelSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UnlockPanelSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UnlockPanelSkin$Skin46;
	})(eui.Skin);

	var UnlockPanelSkin$Skin47 = 	(function (_super) {
		__extends(UnlockPanelSkin$Skin47, _super);
		function UnlockPanelSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UnlockPanelSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return UnlockPanelSkin$Skin47;
	})(eui.Skin);

	var UnlockPanelSkin$Skin48 = 	(function (_super) {
		__extends(UnlockPanelSkin$Skin48, _super);
		function UnlockPanelSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UnlockPanelSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -2;
			t.size = 34;
			t.text = "";
			t.textColor = 0x0c441e;
			t.verticalCenter = -3.5;
			return t;
		};
		return UnlockPanelSkin$Skin48;
	})(eui.Skin);

	function UnlockPanelSkin() {
		_super.call(this);
		this.skinParts = ["runBg","xjjImg","levelInfo","jiangliCount","closeBtn","closeBtn0","shareBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = UnlockPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.runBg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.xjjImg_i(),this.levelInfo_i(),this.jiangliCount_i(),this.closeBtn_i(),this.closeBtn0_i(),this.shareBtn_i()];
		return t;
	};
	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.horizontalCenter = 0;
		t.source = "xjj_xguo_guang2_png";
		t.verticalCenter = -18.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtlan";
		t.verticalCenter = -263.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_tcbt_9";
		t.verticalCenter = -275;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -60;
		t.source = "xjj_icon_zuanshi";
		t.y = 732;
		return t;
	};
	_proto.xjjImg_i = function () {
		var t = new eui.Image();
		this.xjjImg = t;
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -43;
		t.width = 222;
		return t;
	};
	_proto.levelInfo_i = function () {
		var t = new eui.Label();
		this.levelInfo = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 32;
		t.text = "LV:0";
		t.y = 353.29;
		return t;
	};
	_proto.jiangliCount_i = function () {
		var t = new eui.Label();
		this.jiangliCount = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "+500";
		t.textAlign = "left";
		t.x = 289;
		t.y = 737;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 267;
		t.x = 576;
		t.y = 134;
		t.skinName = UnlockPanelSkin$Skin46;
		return t;
	};
	_proto.closeBtn0_i = function () {
		var t = new MyButton();
		this.closeBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.horizontalCenter = 0;
		t.label = "算了，我不要";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 889;
		t.width = 197.33;
		t.y = 134;
		t.skinName = UnlockPanelSkin$Skin47;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.height = 82;
		t.label = "领取";
		t.right = 223;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 797;
		t.width = 194;
		t.x = 223;
		t.y = 841;
		t.skinName = UnlockPanelSkin$Skin48;
		return t;
	};
	return UnlockPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/XjjModel.exml'] = window.XjjModelSkin = (function (_super) {
	__extends(XjjModelSkin, _super);
	function XjjModelSkin() {
		_super.call(this);
		this.skinParts = ["xjjImg","level","levelGroup","leftImg","rightImg","goldImg","addGoldImg","addGold","addGoldGroup","container"];
		
		this.height = 162;
		this.width = 122.66;
		this.elementsContent = [this.container_i()];
	}
	var _proto = XjjModelSkin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 0;
		t.height = 162;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 121.34;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.xjjImg_i(),this.levelGroup_i(),this.leftImg_i(),this.rightImg_i(),this.goldImg_i(),this.addGoldGroup_i()];
		return t;
	};
	_proto.xjjImg_i = function () {
		var t = new eui.Image();
		this.xjjImg = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 95;
		t.height = 190;
		t.source = "";
		t.visible = false;
		t.width = 140;
		t.x = 72;
		t.y = 70;
		return t;
	};
	_proto.levelGroup_i = function () {
		var t = new eui.Group();
		this.levelGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 43.67;
		t.x = -1.94;
		t.y = 108.36000000000001;
		t.elementsContent = [this._Image1_i(),this.level_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_jsdj";
		t.x = 3.33;
		t.y = 4.67;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.width = 26;
		t.x = 8;
		t.y = 12.35;
		return t;
	};
	_proto.leftImg_i = function () {
		var t = new eui.Image();
		this.leftImg = t;
		t.height = 172;
		t.source = "";
		t.visible = false;
		t.width = 130;
		t.x = -64;
		t.y = -10;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.height = 172;
		t.source = "";
		t.visible = false;
		t.width = 130;
		t.x = 96;
		t.y = -10;
		return t;
	};
	_proto.goldImg_i = function () {
		var t = new eui.Image();
		this.goldImg = t;
		t.height = 40;
		t.source = "xjj_icon_jinbi";
		t.visible = false;
		t.width = 40;
		t.x = 29.01;
		t.y = 0.36;
		return t;
	};
	_proto.addGoldGroup_i = function () {
		var t = new eui.Group();
		this.addGoldGroup = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.width = 130;
		t.x = 16;
		t.y = 132;
		t.elementsContent = [this.addGoldImg_i(),this.addGold_i()];
		return t;
	};
	_proto.addGoldImg_i = function () {
		var t = new eui.Image();
		this.addGoldImg = t;
		t.alpha = 1;
		t.height = 28;
		t.scale9Grid = new egret.Rectangle(13,10,4,4);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xjj_backg_jinbi";
		t.width = 130;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.addGold_i = function () {
		var t = new eui.Label();
		this.addGold = t;
		t.alpha = 1;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.width = 130;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return XjjModelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ZhuanPan.exml'] = window.ZhuanPanSkin = (function (_super) {
	__extends(ZhuanPanSkin, _super);
	var ZhuanPanSkin$Skin49 = 	(function (_super) {
		__extends(ZhuanPanSkin$Skin49, _super);
		function ZhuanPanSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZhuanPanSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_jia";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhuanPanSkin$Skin49;
	})(eui.Skin);

	var ZhuanPanSkin$Skin50 = 	(function (_super) {
		__extends(ZhuanPanSkin$Skin50, _super);
		function ZhuanPanSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZhuanPanSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhuanPanSkin$Skin50;
	})(eui.Skin);

	var ZhuanPanSkin$Skin51 = 	(function (_super) {
		__extends(ZhuanPanSkin$Skin51, _super);
		function ZhuanPanSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZhuanPanSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xjj_zhuan_kaishi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhuanPanSkin$Skin51;
	})(eui.Skin);

	function ZhuanPanSkin() {
		_super.call(this);
		this.skinParts = ["turnplateGroup","pointerGroup","count","addBtn","quanGroup","closeBtn","kaishiBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.turnplateGroup_i(),this.pointerGroup_i(),this.quanGroup_i(),this.closeBtn_i(),this.kaishiBtn_i()];
	}
	var _proto = ZhuanPanSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_zhuan_backg_png";
		t.verticalCenter = -109.5;
		return t;
	};
	_proto.turnplateGroup_i = function () {
		var t = new eui.Group();
		this.turnplateGroup = t;
		t.anchorOffsetX = 270;
		t.anchorOffsetY = 270;
		t.height = 540;
		t.horizontalCenter = 0;
		t.verticalCenter = -79;
		t.width = 540;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 258;
		t.anchorOffsetY = 258;
		t.horizontalCenter = 0;
		t.source = "xjj_zhuan_pan_png";
		t.verticalCenter = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.width = 108;
		t.x = 216;
		t.y = 5;
		t.elementsContent = [this._Label1_i(),this._Image3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "钻石x100";
		t.textColor = 0xffffff;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_zuanshi";
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 47.26;
		t.width = 108;
		t.x = 424;
		t.y = 51;
		t.elementsContent = [this._Label2_i(),this._Image4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "少量铜钱";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "xjj_icon_jinbi";
		t.width = 52;
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 89.83;
		t.width = 108;
		t.x = 534;
		t.y = 220;
		t.elementsContent = [this._Label3_i(),this._Image5_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "钻石x200";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_zuanshi";
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 130.82;
		t.width = 108;
		t.x = 497;
		t.y = 414;
		t.elementsContent = [this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "中量铜钱";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "xjj_icon_jinbi";
		t.width = 52;
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 179.6;
		t.width = 108;
		t.x = 332;
		t.y = 534;
		t.elementsContent = [this._Label5_i(),this._Image7_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "钻石x400";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_zuanshi";
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 221.22;
		t.width = 108;
		t.x = 128;
		t.y = 494;
		t.elementsContent = [this._Label6_i(),this._Image8_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "大量铜钱";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "xjj_icon_jinbi";
		t.width = 52;
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 269.78;
		t.width = 108;
		t.x = 7;
		t.y = 325;
		t.elementsContent = [this._Label7_i(),this._Image9_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "钻石x800";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xjj_icon_zuanshi";
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127;
		t.rotation = 310.66;
		t.width = 108;
		t.x = 49;
		t.y = 127;
		t.elementsContent = [this._Label8_i(),this._Image10_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "海量铜钱";
		t.textColor = 0xFFFFFF;
		t.x = 5;
		t.y = 13;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "xjj_icon_jinbi";
		t.width = 52;
		t.x = 28;
		t.y = 71;
		return t;
	};
	_proto.pointerGroup_i = function () {
		var t = new eui.Group();
		this.pointerGroup = t;
		t.height = 200;
		t.horizontalCenter = 2;
		t.verticalCenter = -88;
		t.width = 200;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "xjj_zhuan_zhizhen";
		t.x = 7.33;
		t.y = -17.32;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "xjj_zhuan_xingy";
		t.x = 51.33;
		t.y = 85.68;
		return t;
	};
	_proto.quanGroup_i = function () {
		var t = new eui.Group();
		this.quanGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.33;
		t.horizontalCenter = -11.5;
		t.verticalCenter = 249.5;
		t.width = 270.67;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this.count_i(),this.addBtn_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(8,8,3,3);
		t.source = "xjj_zhuan_quanbj";
		t.width = 170;
		t.x = 47.99;
		t.y = 17.69;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "xjj_zhuan_quan";
		t.x = 27.32;
		t.y = 16.37;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfee7be;
		t.width = 80;
		t.x = 109;
		t.y = 24;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new MyButton();
		this.addBtn = t;
		t.label = "";
		t.right = 33.670000000000016;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 18;
		t.x = 371;
		t.y = -590;
		t.skinName = ZhuanPanSkin$Skin49;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 187;
		t.skinName = ZhuanPanSkin$Skin50;
		return t;
	};
	_proto.kaishiBtn_i = function () {
		var t = new MyButton();
		this.kaishiBtn = t;
		t.label = "";
		t.right = 212;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 874;
		t.skinName = ZhuanPanSkin$Skin51;
		return t;
	};
	return ZhuanPanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ZhuanPanResult.exml'] = window.ZhuanPanResultSkin = (function (_super) {
	__extends(ZhuanPanResultSkin, _super);
	var ZhuanPanResultSkin$Skin52 = 	(function (_super) {
		__extends(ZhuanPanResultSkin$Skin52, _super);
		function ZhuanPanResultSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZhuanPanResultSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(37,33,0,3);
			t.source = "xjj_buttom_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0x0c441e;
			t.verticalCenter = 0;
			return t;
		};
		return ZhuanPanResultSkin$Skin52;
	})(eui.Skin);

	function ZhuanPanResultSkin() {
		_super.call(this);
		this.skinParts = ["runBg","gaintypeImg","gainCount","lingquBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ZhuanPanResultSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.runBg_i(),this.gaintypeImg_i(),this.gainCount_i(),this.lingquBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,47,0,1);
		t.source = "xjj_backg_tcdi";
		t.verticalCenter = 0;
		t.width = 500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xjj_img_tcbtbj";
		t.y = 307;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -2;
		t.source = "xjj_tcbt_3";
		t.y = 315.51;
		return t;
	};
	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.horizontalCenter = -1.5;
		t.source = "xjj_xguo_guang_png";
		t.verticalCenter = -65.5;
		return t;
	};
	_proto.gaintypeImg_i = function () {
		var t = new eui.Image();
		this.gaintypeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "xjj_icon_jinbi";
		t.y = 462.44;
		return t;
	};
	_proto.gainCount_i = function () {
		var t = new eui.Label();
		this.gainCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 62;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new MyButton();
		this.lingquBtn = t;
		t.height = 82;
		t.label = "确定";
		t.right = 223;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 696;
		t.width = 194;
		t.x = 223;
		t.y = 841;
		t.skinName = ZhuanPanResultSkin$Skin52;
		return t;
	};
	return ZhuanPanResultSkin;
})(eui.Skin);