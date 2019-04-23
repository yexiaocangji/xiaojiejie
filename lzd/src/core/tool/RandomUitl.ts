class RandomUitl {
	public static randomInt(min:number,max:number){
		if(min > max){
			var t:number = min;
			min = max;
			max = t;
		}
		return min + Math.round((max - min) * Math.random());
	}
	public static randomFloat(min:number,max:number){
		if(min > max){
			var t:number = min;
			min = max;
			max = t;
		}
		return min + Math.round(((max - min) * Math.random()) * 100) / 100;
	}
	public static randomDouble(min:number,max:number){
		if(min > max){
			var t:number = min;
			min = max;
			max = t;
		}
		return min + ((max - min) * Math.random());
	}
}