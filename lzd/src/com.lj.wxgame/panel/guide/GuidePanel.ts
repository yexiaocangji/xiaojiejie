class GuidePanel extends eui.Component implements  eui.UIComponent{
    public closeBtn:MyButton;
    public rectup:eui.Rect;
    public rectdown:eui.Rect;
    public rectleft:eui.Rect;
    public rectright:eui.Rect;
    public bg:eui.Image;
	public constructor() {
		super();
        this.touchEnabled = true;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
	}
    protected childrenCreated():void
	{
		super.childrenCreated();
        if(this.closeBtn)this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP,this.onClose,this);  
	}
    public onClose(){
        console.log("关闭引导");
        // GuideData.putCurrentOpt(12);
        GuideData.putCurrentOpt(99);
        //引导结束
        DataCenter.packData();
        GuideManager.getInstance().hide();
    }
    public setOptRect(optRect:egret.Rectangle){
        if(!optRect)optRect = new egret.Rectangle(200,200,200,100);
        this.rectup.x=0;
        this.rectup.y=0;
        this.rectup.width = this.width;
        this.rectup.height = optRect.y;
        this.rectup.visible = true;
        this.rectdown.x = 0;
        this.rectdown.y = optRect.y + optRect.height;
        this.rectdown.width = this.width;
        this.rectdown.height = this.height - this.rectdown.y;
        this.rectdown.visible = true;

        this.rectleft.x = 0;
        this.rectleft.y = optRect.y;
        this.rectleft.width = optRect.x;
        this.rectleft.height = optRect.height;
        this.rectleft.visible = true;
        
        this.rectright.x = optRect.x + optRect.width;
        this.rectright.y = optRect.y;
        this.rectright.width = this.width - this.rectright.x;
        this.rectright.height = optRect.height;
        this.rectright.visible = true;
        
    }
    public createView(): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
        this.width = this.parent?this.parent.width : 640;
        this.height = this.parent?this.parent.height : 1136;
        // var w =this.parent?this.parent.width : 640;
        // var h = this.parent?this.parent.height : 1136;
        // this.anchorOffsetX = w * 1.5;
        // this.anchorOffsetY = h * 1.5;
        // var shape = new egret.Shape();
        // shape.graphics.beginFill(0x000000,0.5);
        // // shape.graphics.drawRect(0,0,w*3,h*3);
        // shape.graphics.drawRect(0,0,w,h);
        // shape.graphics.endFill();
        // this.addChild(shape);
        // var closeBtn = new egret.Bitmap();
        // closeBtn.texture = RES.getRes("wddx_bt_005");
        // closeBtn.scaleX = closeBtn.scaleY = 0.7;
        // closeBtn.scale9Grid = new egret.Rectangle(20,20,1,1);
        // closeBtn.touchEnabled = true;
        // closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        //     console.log("关闭引导");
        //     // GuideData.putCurrentOpt(12);
        //     GuideData.putCurrentOpt(99);
        // 	//引导结束
        // 	DataCenter.packData();
        // 	GuideManager.getInstance().hide();
        // },this);
        // this.addChild(closeBtn);
    }
}