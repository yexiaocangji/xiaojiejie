module lzd.vo {
	export class Position  {
		/** 0-11 位置 */
		 posid:string;
		/** 小姐姐，小哥哥，宠物id */
		 playerid:string="";
		/** 上一次收益时间点 */
		 lastTime: number =0;
		/** 这个位置是否有箱子 */
		 isHasBox: boolean =false;
	}
}