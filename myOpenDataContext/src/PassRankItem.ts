class PassRankItem extends egret.DisplayObjectContainer{
	public itemData:any;
	public headMask:egret.Shape;
	public constructor(data:any,index:number,bgType = 1) {
		super();
		this.height = 92;
		this.width = 540;
		let bitmap = new egret.Bitmap(Main.textrueMap["itemBg"] as egret.Texture);
		let bitmap2 = new egret.Bitmap(Main.textrueMap["myitemBg"] as egret.Texture);
		bitmap.width = 540;
		bitmap.height = 92;
		bitmap.scale9Grid = new egret.Rectangle(15,15,0,0);		
		this.addChild(bitmap);
		if(bgType == 0){
			bitmap.texture = bitmap2.texture;
		}
/*		if(index < 3){
			var res = ['xjj_img_paih1.png','xjj_img_paih2.png','xjj_img_paih3.png'];
			let rankBitmap = new egret.Bitmap();
			rankBitmap.x = 87;
			rankBitmap.y = -50;
			rankBitmap.width = 75;
			rankBitmap.height = 112;
			this.addChild(rankBitmap);
			let imageLoader = new egret.ImageLoader();
			imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
				let imageLoader = <egret.ImageLoader>event.currentTarget;
				if(imageLoader.data){
					let texture = new egret.Texture();
					texture._setBitmapData(imageLoader.data);
					rankBitmap.texture = texture;
				}
			}, this);
			imageLoader.load("resource/rank/"+res[index]);
		}*/
		//名次
		let rankbg = new egret.Bitmap(Main.textrueMap["rankdi"] as egret.Texture); 
		rankbg.x = 36;
		rankbg.y = 21;
		this.addChild(rankbg);
		let ranknum = new egret.TextField();
		ranknum.width = 50;
		ranknum.textAlign = egret.HorizontalAlign.CENTER;
		ranknum.x = 30;
		ranknum.y = 28;
		ranknum.text = '' + (index + 1);
		ranknum.textColor = 0xffffff;
		ranknum.size = 24;
		this.addChild(ranknum);

/*		this.headMask = new egret.Shape();
		this.headMask.graphics.beginFill(0x5683b6,1);
		this.headMask.graphics.drawCircle(140,40,28);
		this.headMask.graphics.endFill();
		this.addChild(this.headMask);*/

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
					headBitmap.width = 72;
					headBitmap.height = 72;
					headBitmap.anchorOffsetX = 36;
					headBitmap.anchorOffsetY = 36;
					headBitmap.x = 120;
					headBitmap.y = 42;					
					this.addChild(headBitmap);
					//headBitmap.mask = this.headMask;
				}
			}, this);
			imageLoader.load(data.avatarUrl);

		}
		//昵称
		let nicktxt = new egret.TextField();
		nicktxt.x = 170;
		nicktxt.y = 30;
		nicktxt.text = this.getChar(this.itemData.nickname,12);
		nicktxt.textColor = 0x833f1d;
		nicktxt.size = 24;
		this.addChild(nicktxt);

		//金币数量
		let goldbg = new egret.Bitmap(Main.textrueMap["jinbidi"] as egret.Texture); 
		goldbg.scale9Grid = new egret.Rectangle(41,20,0,0);	
		goldbg.width = 146;
		goldbg.x = 330;
		goldbg.y = 22;
		this.addChild(goldbg);
		let numtxt = new egret.TextField();
		numtxt.x = 360;
		numtxt.y = 30;
		numtxt.textColor = 0xffffff;
		numtxt.text = '' + this.itemData.KVDataList[0]['value'];
		numtxt.size = 24;
		this.addChild(numtxt);
	}





	public getChar(str: string,len: number): string {  

		var ba: egret.ByteArray = new egret.ByteArray;  

		ba.writeUTFBytes(str);  

		if(ba.length <= len) return str;  

		ba.position = 0;  

		return ba.readUTFBytes(len) + "··";  
	}
}