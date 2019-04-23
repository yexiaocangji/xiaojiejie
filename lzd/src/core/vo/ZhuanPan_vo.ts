/**
 * 转盘数据结构
 * 每天转盘上线30次
 */
class ZhuanPan_vo {
	public constructor(date:string,count:number){
		this.date = date;
		this.count = count;
	}
	/** 日期 */
	public date:string;
	/** 转过的次数 */
	public count:number;
}