
class LoadingUI extends eui.Component implements RES.PromiseTaskReporter {
    private static _instance:LoadingUI;
	public static get instance():LoadingUI{
		if(!this._instance)this._instance = new LoadingUI();
		return this._instance;
	}
    
    public slider:eui.HSlider;
    public constructor() {
        super();
        // this.skinName = "LoadingUI";
        // this.createView();
        this.touchEnabled = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
    }
    protected childrenCreated(): void {
        super.childrenCreated();
        this.slider.maximum = 100;
        this.slider.minimum = 0;
        this.slider.value = 0;

    }
    private textField: egret.TextField;

    public createView(): void {
        this.width = this.parent.width;
        this.height = this.parent.height;
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
        var w =this.parent.width//?this.parent.width : 640;
        var h = this.parent.height//?this.parent.height : 1136;
        // var shape = new egret.Shape();
        // shape.graphics.beginFill(0x000000,0.3);
        // shape.graphics.drawRect(0,0,w,h);
        // shape.graphics.endFill();
        // this.addChild(shape);
        // this.textField = new egret.TextField();
        // this.addChild(this.textField);
        // this.textField.anchorOffsetX = 300;
        // this.textField.width = 600;
        // this.textField.height = 100;
        // this.textField.x = w / 2;
        // this.textField.y = h * 0.7;
        // this.textField.bold = true;
        // this.textField.size = 30;
        // this.textField.fontFamily = "Microsoft YaHei";
        // this.textField.textAlign = "center";
        // this.textField.textColor = 0x0D83C6;
    }

    public onProgress(current: number, total: number): void {
        var progress = Math.floor(current/total*100);
        if(this.textField)this.textField.text = `游戏资源加载(${progress}%)`;
    }
    public onDownProgress(progress:any){		
		// var percent = progress.progress;
        // if(percent < 1){
        //     percent = Math.round(percent*100);
        // }else{
        //     percent = Math.round(percent);
        // }
		// if(this.textField)this.textField.text = `游戏资源加载(${percent}%)`;

        		var percent = progress.progress;
        if(percent < 1){
            percent = Math.round(percent*100);
        }else{
            percent = Math.round(percent);
        }
        if(this.slider)this.slider.value = percent;
        if(this.slider && percent - this.slider.value > 10){
            egret.Tween.get(this.slider).to({value:percent},200);
        }else if(this.slider)this.slider.value = percent;
	}

    public setSliderValue(value:number){
        if(this.slider && value > 0){
            egret.Tween.get(this.slider).to({value:value},200);
        }else if(this.slider)this.slider.value = value;
    }
}
