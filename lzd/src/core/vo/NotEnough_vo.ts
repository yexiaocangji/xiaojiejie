class NotEnough_vo {
	public constructor(date:string,jewelCount:number,jinbiCount:number){
		this.date = date;
		this.jewelCount = jewelCount;
		this.jinbiCount = jinbiCount;
	}
	/** 日期 */
	public date:string;
	/** 钻石点过的次数 */
	public jewelCount:number;
	/** 金币点过的次数 */
	public jinbiCount:number;
}