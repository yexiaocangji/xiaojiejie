class SelfPassRankItem extends egret.DisplayObjectContainer{
	public itemData:any;
	public headMask:egret.Shape;
	public constructor(data:any,index:number) {
		super();
		let bitmap = new egret.Bitmap(Main.textrueMap["itemBg"] as egret.Texture);
		bitmap.width = 532;
		this.addChild(bitmap);
		bitmap.alpha = 0;
		if(index < 3){
			var res = [Main.textrueMap["one"],Main.textrueMap["two"],Main.textrueMap["three"]];
			let rankBitmap = new egret.Bitmap(res[index] as egret.Texture);
			rankBitmap.x = 90;
			rankBitmap.y = 10;
			rankBitmap.rotation = -40;
			rankBitmap.scaleX = 0.6;
			rankBitmap.scaleY = 0.6;
			this.addChild(rankBitmap);
		}

		let ranknum = new egret.TextField();
		ranknum.width = 50;
		ranknum.textAlign = egret.HorizontalAlign.CENTER;
		ranknum.x = 30;
		ranknum.y = 25;
		ranknum.text = '' + (index + 1);
		this.addChild(ranknum);

		this.headMask = new egret.Shape();
		this.headMask.graphics.beginFill(0x00BFFF,1);
		this.headMask.graphics.drawCircle(140,40,28);
		this.headMask.graphics.endFill();
		this.addChild(this.headMask);

		this.refreshUI(data);
	}
	public refreshUI(data:any){
		this.itemData = data;
		
		// let head:egret.Bitmap = new egret.Bitmap();
		//获取头像资源
		if(data.avatarUrl && data.avatarUrl != ""){
			let imageLoader = new egret.ImageLoader();
			imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
				let imageLoader = <egret.ImageLoader>event.currentTarget;
				if(imageLoader.data){
					let texture = new egret.Texture();
					texture._setBitmapData(imageLoader.data);
					let headBitmap = new egret.Bitmap(texture);
					headBitmap.width = 60;
					headBitmap.height = 60;
					headBitmap.anchorOffsetX = 30;
					headBitmap.anchorOffsetY = 30;
					headBitmap.x = 140;
					headBitmap.y = 40;					
					this.addChild(headBitmap);
					headBitmap.mask = this.headMask;
				}
			}, this);
			imageLoader.load(data.avatarUrl);

		}

		let nicktxt = new egret.TextField();
		nicktxt.x = 190;
		nicktxt.y = 30;
		nicktxt.text = '' + this.itemData.nickname;
		nicktxt.textColor = 0x92ddeb;
		this.addChild(nicktxt);

		let numtxt = new egret.TextField();
		numtxt.x = 430;
		numtxt.y = 30;
		numtxt.textColor = 0x92ddeb;
		numtxt.text = '' + this.itemData.KVDataList[0]['value'];
		this.addChild(numtxt);
	}
}