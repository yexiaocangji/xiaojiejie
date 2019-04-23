class RoleHeadImage extends eui.Image{
	public role:any = null;
	private _isClick:boolean = true;
	public onClickCallBack:Function = null;
	public constructor(role:any) {
		super();
		this.role = role;
		this.texture = RES.getRes("ddz_fxtx_17");
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRmove,this);
	}
	public onAddToStage(e:egret.Event){
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);		
		this.refresh();
	}
	public onRmove(e:egret.Event){
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRmove,this);
	}
	public refresh(role:any = null){
		if(role)this.role = role;
		
		if(this.role){
			if(this.role.head != null){
				RES.getResByUrl(this.role.head,(data:egret.Texture)=>{
					if(data)this.texture = data;
				},this,"image");
			}
		}
	}
	public onClick(e:egret.TouchEvent){
		egret.log("显示个人信息");
		if(this.onClickCallBack){
			//可扩展的回调弹框
			this.onClickCallBack();
		}else{
			// Alert.alert(new UserInfos(this.role,this.texture));
		}
	}
	public set isClick(bool:boolean){
		this._isClick = bool;
		if(bool){
			if(!this.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
				this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			}
		}else{
			if(this.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			}
		}
	}
	public get isClick(){
		return this.isClick;
	}
}