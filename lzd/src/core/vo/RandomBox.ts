/** 
 * 随机宝箱数据结构
 */
class RandomBox {
	public constructor(date:string,count:number){
		this.date = date;
		this.count = count;
	}
	/** 日期 */
	public date:string;
	/** 打开次数 */
	public count:number;
}