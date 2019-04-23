class GuideManager extends BaseSingle{
	private _guidePanel:GuidePanel;
	private _bitmap:egret.Bitmap;
	private _xiaoshou:egret.Bitmap;
	private _tipsLabel:egret.TextField;

	private _currentObj:egret.DisplayObject;
	private _currentPoint:egret.Point;
	private _currentParent:egret.DisplayObjectContainer;
	public show(obj:egret.DisplayObject,parent:egret.DisplayObjectContainer,tips:string = null,optRect:egret.Rectangle = null,handActionType:number = 1){
		// if(this._currentObj && this._currentObj.hashCode == obj.hashCode)return;
		if(!this._guidePanel){
			this._guidePanel = new GuidePanel();
			LayerManager.getInstance().guideLayer.addChild(this._guidePanel);
		}
		this._currentObj = obj;
		this._currentParent = parent;
		this._currentPoint = new egret.Point(this._currentObj.x,this._currentObj.y);
		egret.setTimeout(e=>{
			this._guidePanel.visible = true;
			var point = this._currentParent.localToGlobal(this._currentObj.x,this._currentObj.y);
			this._currentObj.x = point.x;
			this._currentObj.y = point.y;
			if(tips)this.updatePos(tips,point);
			this.createShou();
			this._xiaoshou.x = point.x + this._currentObj.width * 0.6 + this._xiaoshou.width / 2  - this._currentObj.anchorOffsetX;
			this._xiaoshou.y = point.y + this._currentObj.height * 0.5 + this._xiaoshou.height / 2  - this._currentObj.anchorOffsetY;
			this.createShouAction(handActionType);
			// this._bitmap.rotation
			this._guidePanel.addChildAt(this._currentObj,5);
			if(!optRect)optRect = new egret.Rectangle(point.x - this._currentObj.anchorOffsetX - 10,point.y - this._currentObj.anchorOffsetY - 10,this._currentObj.width + 20,this._currentObj.height + 20);
			else if(this._currentObj){
				optRect.x = point.x;
				optRect.y = point.y;
			}							
			this._guidePanel.setOptRect(optRect);
		},this,100);
	}
	public createTips(){
		if(!this._tipsLabel){
			var bitmap = new egret.Bitmap();
			bitmap.texture = RES.getRes("xjj_backg_jinbi");
			bitmap.width = this._guidePanel.width * 0.8;
			bitmap.height = 120;
			bitmap.anchorOffsetX = bitmap.width / 2;
			bitmap.anchorOffsetY = 60;
			bitmap.scale9Grid = new egret.Rectangle(20,20,1,1);
			this._bitmap = bitmap;
			this._tipsLabel = new egret.TextField();
			this._tipsLabel.width = this._guidePanel.width * 0.8 * 0.7;
			this._tipsLabel.height = 120;
			this._tipsLabel.anchorOffsetX = this._tipsLabel.width / 2;
			this._tipsLabel.anchorOffsetY = 60;
			this._tipsLabel.size = 30;
			// this._tipsLabel.bold = true;
			this._tipsLabel.textAlign = "center";
			this._tipsLabel.verticalAlign = "middle";
			this._tipsLabel.fontFamily = "Microsoft YaHei";
			this._tipsLabel.textColor = 0xffffff;
			this._tipsLabel.lineSpacing = 5;
			// this._tipsLabel.stroke = 2;
			// this._tipsLabel.strokeColor = 0x000000;
			if(this._guidePanel)this._guidePanel.addChild(this._bitmap);
			if(this._guidePanel)this._guidePanel.addChild(this._tipsLabel);
		}
		return this._tipsLabel;
	}
	private handAction:egret.Tween;
	private createShouAction(handActionType:number){
		if(this._xiaoshou){
			this.handAction = egret.Tween.get(this._xiaoshou,{loop:true});
			if(handActionType == 1){			
				this.handAction.to({rotation:-15,scaleY:0.8,scaleX:0.9},500)
												.to({rotation:0,scaleY:1,scaleX:1},500)
												.to({rotation:-15,scaleY:0.8,scaleX:0.9},500)
												.to({rotation:0,scaleY:1,scaleX:1},500).wait(1000);
			}else if(handActionType == 2){
				this.handAction.to({rotation:0,x:this._xiaoshou.x + 150,scaleY:1.2,scaleX:1.2},800)
												.to({rotation:-15,x:this._xiaoshou.x,scaleY:1,scaleX:1},400).wait(1000);
			}
		}
	}
	private createShou(){
		if(!this._xiaoshou){
			var shou = new egret.Bitmap();
			shou.texture = RES.getRes("xjj_ic_shou");
			shou.anchorOffsetX = shou.width / 2;
			shou.anchorOffsetY = shou.height / 2;
			this._xiaoshou = shou;
			if(this._guidePanel)this._guidePanel.addChild(this._xiaoshou);
		}
		if(this.handAction)this.handAction.pause();
	}
	private updatePos(tips:string,point:egret.Point){
		var tipsLabel = this.createTips();
		tipsLabel.visible = true;
		var x = (point.x > this._guidePanel.width / 2)?point.x:point.x + this._currentObj.width;
		var x = 320;
		var y = point.y - tipsLabel.height * 0.5;

		var y = point.y > this._guidePanel.height * 0.7 ? point.y - tipsLabel.height: point.y + tipsLabel.height  * 0.5 + this._currentObj.height + 80;
		tipsLabel.x= x;
		tipsLabel.y = y;
		this._bitmap.x = x;
		this._bitmap.y = y;
		this._bitmap.visible = true;
		tipsLabel.text = tips;
	}
	public hide(){
		if(this._guidePanel && this._guidePanel.parent){
			this._guidePanel.visible = false;
			this._guidePanel.rectup.visible = false;
			this._guidePanel.rectdown.visible = false;
			this._guidePanel.rectleft.visible = false;
			this._guidePanel.rectright.visible = false;
			this._currentParent.addChild(this._currentObj);
			this._currentObj.x = this._currentPoint.x;
			this._currentObj.y = this._currentPoint.y;
		}
		if(this._tipsLabel)this._tipsLabel.visible = false;
		if(this._bitmap)this._bitmap.visible = false;
		if(this.handAction)this.handAction.pause();		
	}
}