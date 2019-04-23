class XjjModel extends eui.Component implements eui.UIComponent {
	public container: eui.Group;
	public levelGroup: eui.Group;
	public level: eui.Label;
	public xjjImg: eui.Image;
	public leftImg: eui.Image;
	public rightImg: eui.Image;
	public addGold: eui.Label;
	public addGoldImg: eui.Label;
	public id: string;
	public goldImg: eui.Image;
	public addGoldGroup:eui.Group;
/*	public boxBtn:MyButton;*/
	public set type(id: string) {
		this.id = id;
		this.$updateModelVeiw();
	}
	public get type() {
		return this.id;
	}
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// if (this.boxBtn) this.boxBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBoxBtn, this);
	}

	public $updateModelVeiw() {
		this.goldImg.visible=false;
		this.leftImg.visible = this.rightImg.visible = false;
		this.addGoldGroup.alpha = 0;
		var config = ConfigData.getPlayerById(this.id);
		if(!config) return;
		if (this.xjjImg) this.xjjImg.source = config.icon_res;    //图片
		if (this.level) this.level.text = config.level;		//等级
		if (this.addGold) this.addGold.text = "+" + StringUtil.decimalFormat(new Decimal(Number(config.addgoldvalue)));		//增加金币
		this.clearGray();
		this.levelGroup.visible = true;
		this.xjjImg.visible = true;
	}
	public setGray() {
		ColorUtil.setGray(this.xjjImg);
	}
	public clearGray() {
		ColorUtil.clearGray(this.xjjImg);
	}
	public hitTest(point: egret.Point) {
		if (point.x > this.x -50 && point.x < (this.x + this.width+50) && point.y > this.y -50  && point.y < (this.y + this.height+50)) {
			return true;
		}
		return false;
	}
	public animScale() {
		//人物缩放动画
		if(this.xjjImg.filters)return;
		egret.Tween.get(this.xjjImg)
			.to({ scaleX: 1.05, scaleY: 1.05 }, 200,egret.Ease.quartOut)
			.to({ scaleX: 1, scaleY: 1 }, 200,egret.Ease.quartOut);
	}
	public animShouyi() {
		//收益动画
		SoundManager.playSound("goldpaopao");
		this.addGoldGroup.alpha =1;
		//this.addGold.alpha = 1;
		egret.Tween.get(this.addGoldGroup).to({ y: -10 }, 200,egret.Ease.quartOut).wait(300).to({ alpha: 0 }, 200).call(() => {
			this.addGoldGroup.y = 132;
			this.addGoldGroup.alpha = 0;
		});
	}
	private animate:dragonBones.EgretArmatureDisplay;
	public animGold(){
		//飘金币动画
		this.goldImg.x=this.x/2;
		this.goldImg.y=this.y;
		this.goldImg.visible=true;
		var backPoint = this.globalToLocal(16,68);
		egret.Tween.get(this.goldImg).to({ x:backPoint.x , y: backPoint.y }, 600,egret.Ease.quartOut).call(() => {
			this.goldImg.visible = false;
			if(!this.animate){
				this.animate=(DragonBoneManager.getInstance() as DragonBoneManager).createAnimate("jingbi");
				this.animate.addDBEventListener(dragonBones.AnimationEvent.COMPLETE,this.onComplete,this);
			}
			if(this.animate){
				this.animate.animation.play("animation",1);
				this.animate.x=30;
				this.animate.y=90;
				this.animate.visible = true;
				(BasePanel.currentPanel as GamePanel).addChild(this.animate);
			}

		});		
	}
	public onComplete(e){
		this.animate.visible = false;
	}

	public onBoxBtn(){

		console.log("点到箱子了"+this.id);
	}
	public dispose(){
		if(this.animate){
			this.animate.removeDBEventListener(dragonBones.AnimationEvent.COMPLETE,this.onComplete,this);
			this.animate.dispose();
		}
		
	}
}
window["XjjModel"] = XjjModel;