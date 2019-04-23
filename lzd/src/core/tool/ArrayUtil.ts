class ArrayUtil {
	public static contains(array:any,value:any){
		for(var k in array){
			var val = array[k];
			if(val.toString() == value.toString()){
				return true;
			}
		}
		return false;
	}
	public static max(array:number[]){
		if(!array || array.length == 0)return null;
		var max = array[0];
		for(var k in array){
			max = Math.max(max,array[k]);
		}
		return max;
	}
	public static min(array:number[]){
		if(!array || array.length == 0)return null;
		var max = array[0];
		for(var k in array){
			max = Math.min(max,array[k]);
		}
		return max;
	}
}