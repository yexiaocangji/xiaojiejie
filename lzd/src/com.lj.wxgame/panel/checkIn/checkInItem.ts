class checkInItem extends eui.Component implements  eui.UIComponent {
	private _index:number;
	public set index(index:number){
		this._index = index;
		this.updateUi();
	}

	public bg:eui.Image;
	public icon:eui.Image;
	public finish:eui.Group;
	public dateLabel:eui.Label;
	public rewardValueLabel:eui.Label;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	private updateUi(){
		var data = SevenDaySignData.getSignData();
		//上次领取的时间
		var lastGetTime:number = data?data.timestamp:0;
		//已经领取的次数
		var count:number = data?data.count:0;
		//当前时间
		var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();
		this.finish.visible = false;		
		if(this._index == count && DateTool.makeTime(timestamp) != DateTool.makeTime(lastGetTime)){
			//可领取
			if(this.dateLabel){
				this.dateLabel.text = "今 天";
				//this.dateLabel.textColor = 0xffffff;
			}
			//if(this.rewardValueLabel)this.rewardValueLabel.textColor = 0xC35A05;
		}else{
			if(this.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
			}
			if(this.dateLabel){
				this.dateLabel.text = `第${(this._index + 1)}天`;
			}
			if(this._index < count){
				//已领取
				this.finish.visible = true;
			}else{
				//时间未到
			}
		}

		if(this.rewardValueLabel){
				//this.rewardValueLabel.text = `${config.rewardValue}h金币收益`;
				this.rewardValueLabel.text = "X "+ (200 + this._index * 100);				
		}
		
	}
	private onTap(e){
		var role: Role = RoleData.getRole();
		role.jewel += (100 + this._index * 100) ;
		RoleData.putRole(role);
		ControllAlert.show("成功领取钻石"+ (100 + this._index * 100));
		var timestamp = AccountData.serverTime() + egret.getTimer().valueOf();		
		SevenDaySignData.updateSign(timestamp,this._index + 1)
		this.updateUi();
	}
	public dispose(){
		if(this.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		}
	}
}
window["checkInItem"] = checkInItem;