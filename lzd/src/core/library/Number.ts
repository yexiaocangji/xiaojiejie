module chaow {
	export class Number {
		private unitStrs:string[] = ["","K","M","B","T","aa","bb","cc","dd","ee","ff"];
		//数值
		public value:number;
		//单位
		public unit:number = 0;
		public constructor() {
		}
		/** 加法运算 */
		public add(num:chaow.Number){
			if(this.unit != num.unit){
				if(this.unit < num.unit){
					this.value /= Math.pow(1000,Math.abs(this.unit - num.unit) + 1);
					this.unit = num.unit;
				}else{
					num.value /= Math.pow(1000,Math.abs(this.unit - num.unit) + 1);
					num.unit = this.unit;
				}
			}
			this.value += num.value;
			return this;
		}
		/** 减法运算 */
		public minus(num:chaow.Number){
			if(this.unit != num.unit){
				if(this.unit < num.unit){
					this.value /= Math.pow(1000,Math.abs(this.unit - num.unit) + 1);
					this.unit = num.unit;
				}else{
					num.value /= Math.pow(1000,Math.abs(this.unit - num.unit) + 1);
					num.unit = this.unit;
				}
			}
			this.value -= num.value;
			return this;
		}
		/** 乘法运算 */
		public multiplication(num:number){
			this.value *= num;
			while(this.value < 1 && this.unit > 0){
				this.value *= 1000;
				this.unit--;
			}
			while(this.value >= 1000){
				this.value /= 1000;
				this.unit++;
			}
			return this;
		}
		/** 除法运算 */
		public division (num:number){
			this.value /= num;
			while(this.value < 1 && this.unit > 0){
				this.value *= 1000;
				this.unit--;
			}
			while(this.value >= 1000){
				this.value /= 1000;
				this.unit++;
			}
			return this;
		}

		public toString(){
			var unitStr = "";
			try{
				unitStr = this.unitStrs[this.unit];
			}catch(e){
				console.log(e);
				unitStr = "";
			}
			return this.value + unitStr;
		}
		public parse(num:number){
			var str = num.toString();
			var index = Math.floor(str.length / 3);
			if(str.length % 3 == 0){
				index -- ;
			}
			var nuit = this.unitStrs[index];
			if(nuit != ""){
				var pos = str.length - (index) * 3;
				var n = str.substr(0,pos);
				var m = str.substr(pos,2);
				n +=`.${m}`;
			}
			this.value = parseInt(n);
			this.unit = index;
		}
	}
}