/** 
 * 小姐姐配置信息 (界面显示)
 * 定义出来方便扩展字段
*/
module lzd.vo {
	export class CfgPlayer {
		/** 小姐姐id */
		public id: string;
		/** 小姐姐name */
		public name: string;
		/** 小姐姐单次产金数量 */
		public addgoldvalue: string;
		/** 小姐姐产金周期 */
		public shengchantime: string;
		/** 小姐姐秒产数量(离线收益) */
		public lixianshouyi: string;
		/** 小姐姐初始购买金币数量 */
		public initgoldbuy: string;
		/** 小姐姐金币购买增加系数 */
		public goldbuyxishu: string;
		/** 小姐姐初始购买钻石数量 */
		public initjewelbuy: string;
		/** 小姐姐钻石购买增加系数 */
		public jewelbuyxishu: string;
		/** 小姐姐金币购买条件 */
		public goldbuyLimit: string;
		/** 小姐姐钻石购买可购买ID */
		public jewelbuyLimit: string;
		/** 小姐姐出售时金币价格 */
		public sellvalue: string;
		/** 小姐姐升级获得钻石 */
		public firstreward: string;
		/** 小姐姐图片资源 */
		public icon_res: string;
		/** 小姐姐level */
		public level: string;
		/** 类型：0小姐姐 1小哥哥 2小宠物 */
		public type: string;
		/** 最小可购买等级 */
		public minBuyLevel: string;
		/** 最大可购买等级 */
		public maxBuyLevel: string;

	}
}