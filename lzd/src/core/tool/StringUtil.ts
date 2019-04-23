class StringUtil {
	//字符串截取工具
	public static units:string[] = ["","K","M","B","T","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"];

	public static getChar(str: string,len: number): string {  

		var ba: egret.ByteArray = new egret.ByteArray;  

		ba.writeUTFBytes(str);  

		if(ba.length <= len) return str;  

		ba.position = 0;  

		return ba.readUTFBytes(len) + "··";  
	}

	/**
	 * 生成随机数
	 * */ 
	 public static getRandom(max:number,min:number){
		var a:number = max - min;
		var random:number = Math.floor(min + Math.random() * a);
		return random;
		
	}
	/** 
	 * 统一数字显示
	 */
	public static number2String(num:number){
		var str = num.toString();
		var index = Math.floor(str.length / 3);
		if(str.length % 3 == 0){
			index -- ;
		}
		var nuit = this.units[index];
		var pos = str.length - (index) * 3;
		var n = str.substr(0,pos);
		if(nuit != ""){
			var m = str.substr(pos,2);
			n +=`.${m}`;
		}
		return n + nuit;
		// if(num > 100000000){
		// 	num /= 100000000;
		// 	return num.toFixed(accuracy) + "E";
		// }else if(num >= 10000){
		// 	num /= 10000;
		// 	return num.toFixed(accuracy) + "W";
		// }else if(num >= 1000){
		// 	num /= 10000;
		// 	return num.toFixed(accuracy) + "K";
		// }else{
		// 	return num.toFixed(accuracy);
		// }
	}

	/** 
	 * 金币数量显示
	 */
	public static goldNumber2String(num:number){
		if(num > 100000000){
			num /= 100000000;
			return num.toFixed(0) + "E";
		}else if(num >= 10000){
			num /= 10000;
			return num.toFixed(2) + "W";
		}else{
			return Math.floor(num).toString(); 
		}
	}
	public static numberFormat(a:any){
		var decimal = new Decimal(a);
		var str = decimal.toFixed();

		var index = Math.floor(str.length / 3);
		if(str.length % 3 == 0){
			index -- ;
		}
		var nuit = this.units[index];
		if(nuit != ""){
			var pos = str.length - (index) * 3;
			var n = str.substr(0,pos);
			var m = str.substr(pos,2);
			n +=`.${m}`;
		}
		return n + nuit;
	}
	public static decimalFormat(decimal:Decimal){
		if(!decimal)return "";
		var str:string = decimal.toFixed();
		var strVector = str.split(".");
		if(strVector && strVector.length > 1){
			str = strVector[0];	
		}
		// console.log("decimal.toFixed():",str);
		var index = Math.floor(str.length / 3);
		if(str.length % 3 == 0){
			index -- ;
		}
		var nuit = this.units[index];
		if(nuit != ""){
			var pos = str.length - (index) * 3;
			var n = str.substr(0,pos);
			var m = str.substr(pos,2);
			n +=`.${m}`;
		}else{
			return str;
		}
		return n + nuit;
	}
}